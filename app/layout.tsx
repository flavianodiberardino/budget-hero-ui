import { inter } from './fonts';
import './globals.css';

export const metadata = {
  title: 'BudgetHero',
  description: 'Manage your finances like a hero',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-bh-gray-100`}>{children}</body>
    </html>
  );
};
