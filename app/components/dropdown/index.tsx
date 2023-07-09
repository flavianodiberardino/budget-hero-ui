'use client';

import React, {
  useState,
  FC,
  PropsWithChildren,
  useRef,
  useEffect
} from 'react';

import Link from 'next/link';

interface DropdownItem {
  id: number;
  label: string;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  value?: DropdownItem;
  trigger?: 'hover' | 'click';
  onSelect?: (item: DropdownItem) => void;
}

const useVisibility = (isVisible = false) =>  {
  const [ visible, setVisible ] = useState(isVisible);
  const ref = useRef<HTMLDivElement>(null);

  const handleOutClick = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutClick, true);
    return () => {
      document.removeEventListener('click', handleOutClick, true);
    };
  }, []);

  return { ref, visible, setVisible };
};

const Dropdown: FC<PropsWithChildren<DropdownProps>> = ({ className = '', items, value, trigger = 'click', onSelect, children }) => {
  const { ref, visible, setVisible } = useVisibility();
  const [ selected, setSelected ] = useState<DropdownItem | null>(value ?? null)

  const handleItemClick = (item: DropdownItem) => {
    setSelected(item);
    onSelect && onSelect(item);
    setVisible(false);
  };
  
  const handleTriggerClick = () => setVisible(prevIsOpen => !prevIsOpen);

  const handleMouseEnter = () => trigger === 'hover' && setVisible(true);

  const handleMouseLeave = () => trigger === 'hover' && setVisible(false);

  const renderDropdownItems = () => (
    items.map(item => {
      const color = item.id === selected?.id ? 'bh-yellow-100' : '';
      const hoverColor = item.id === selected?.id ? 'bh-yellow-200' : 'bh-gray-300';
      const className = `bg-${color} py-1 px-2 hover:bg-${hoverColor} cursor-pointer`;
      const key = item.id;
      const onClick = () => handleItemClick(item);
      return (
        <>
          {item.href ? (
            <Link key={key} className={className} onClick={onClick} href={item.href}>{item.label}</Link>
          ) : (
            <span key={key} className={className} onClick={onClick}>{item.label}</span>
          )}
        </>
      );
    })
  );

  return (
    <div ref={ref} className={`${className} relative`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className='relative'>
        <button className={`${!children ? 'bg-bh-gray-100 py-1 px-2 hover:bg-bh-gray-300 rounded font-semibold text-bh-blue-200 cursor-pointer' : ''}`} onClick={handleTriggerClick}>
          {children ?? selected?.label}
        </button>
        {visible && (
          <div className='bg-bh-gray-100 mt-0 flex flex-col absolute rounded font-semibold text-bh-blue-200 overflow-hidden'>
              {renderDropdownItems()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
