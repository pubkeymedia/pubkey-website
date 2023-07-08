import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { PropsWithChildren } from 'react';

export const Header = () => {
  return (
    <header className="font-redaction italic px-2 sm:px-8 max-w-7xl mx-auto tracking-widest w-full">
      <nav className="flex justify-between md:text-xl">
        <HeaderLink href="/home">Home</HeaderLink>
        <HeaderLink href="/shop">Shop</HeaderLink>
        <HeaderLink href="/events">Events</HeaderLink>
        <HeaderLink href="/menu">Menu</HeaderLink>
        <HeaderLink href="/contact">Contact</HeaderLink>
      </nav>
    </header>
  );
};

const HeaderLink: React.FC<PropsWithChildren<{ href: string }>> = (props) => {
  const router = useRouter();
  const isSelected = router.pathname === props.href;

  return (
    <Link
      className={clsx('py-4 px-3 md:px-8', isSelected && 'underline underline-offset-4')}
      {...props}
    />
  );
};
