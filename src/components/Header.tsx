import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { PropsWithChildren } from 'react';

export const Header = () => {
  return (
    <header className="px-8">
      <nav>
        <div className="flex justify-between">
          <HeaderLink href="/home">Home</HeaderLink>
          <HeaderLink href="/shop">Shop</HeaderLink>
          <HeaderLink href="/menu">Bar-Menu</HeaderLink>
          <HeaderLink href="/contact">Contact</HeaderLink>
        </div>
      </nav>
    </header>
  );
};

const HeaderLink: React.FC<PropsWithChildren<{ href: string }>> = ({ children, href }) => {
  const router = useRouter();
  const isSelected = router.pathname === href;

  return (
    <Link href={href}>
      <a className={clsx('p-8', isSelected ? 'border-b-2 border-black' : 'hover:border-b')}>
        {children}
      </a>
    </Link>
  );
};
