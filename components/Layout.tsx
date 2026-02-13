import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => {
  return (
    <div className={`w-full h-full flex flex-col bg-background-light dark:bg-background-dark ${className}`}>
      {children}
    </div>
  );
};