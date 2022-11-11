import { NextSeo } from 'next-seo';
import Image from 'next/image';
import React from 'react';

const ShopPage = () => {
  return (
    <div className="w-full">
      <NextSeo
        description="The Pubkey store is the place for merch. Who doesn’t love merch? When I walk into my favorite dive bar I except to see merchandise! And when the trains aren’t running, I want to be able to buy my favorite merch online! So I go straight to the Pubkey online store and pick up my favorite merch straight from my couch!. It rules!"
        title="Shop"
      />
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
