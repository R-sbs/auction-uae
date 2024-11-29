import { ReactNode } from 'react';

interface NotLayoutProps {
  children: ReactNode;
}

export default function NotLayout({ children }: NotLayoutProps) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
