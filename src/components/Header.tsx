import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { PropsWithChildren } from 'react';

export const Header = () => {
  return (
    <header className="px-8 max-w-7xl mx-auto w-full">
      <nav className="flex justify-between text-xl">
        <HeaderLink href="/home">Home</HeaderLink>
        <HeaderLink href="/shop">Shop</HeaderLink>
        <HeaderLink href="/menu">Bar-Menu</HeaderLink>
        <HeaderLink href="/contact">Contact</HeaderLink>
      </nav>
    </header>
  );
};

const HeaderLink: React.FC<PropsWithChildren<{ href: string }>> = ({ children, href }) => {
  const router = useRouter();
  const isSelected = router.pathname === href;

  return (
    <Link
      className={clsx(
        'py-6 px-3 md:p-8',
        isSelected ? 'border-b-2 border-black' : 'hover:border-b'
      )}
      href={href}
    >
      {children}
    </Link>
  );
};
