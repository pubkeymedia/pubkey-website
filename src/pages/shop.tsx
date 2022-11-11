import { NextSeo } from 'next-seo';
import Image from 'next/image';
import React from 'react';

const ShopPage = () => {
  return (
    <div className="w-full">
      <NextSeo title="Shop" />

      <Image
        alt="Family You Choose"
        className="w-full"
        height={600}
        width={1024}
        src="/images/shop/hero.gif"
      />
    </div>
  );
};

export default ShopPage;
