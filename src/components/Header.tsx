import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { PropsWithChildren } from 'react';

export const Header = () => {
  return (
    <header className="font-redaction italic px-8 max-w-7xl mx-auto tracking-widest w-full">
      <nav className="flex justify-between text-xl">
        <HeaderLink href="/home">Home</HeaderLink>
        <HeaderLink href="/shop">Shop</HeaderLink>
        <HeaderLink href="/menu">Menu</HeaderLink>
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
      className={clsx('py-4 px-3 md:px-8', isSelected && 'underline underline-offset-4')}
      href={href}
    >
      {children}
    </Link>
  );
};
