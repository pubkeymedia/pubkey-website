import Image from 'next/image';
import React from 'react';

const ShopPage = () => {
  return (
    <div className="w-full">
      <Image
        alt="Family You Choose"
        className="w-full"
        height={100}
        width={1024}
        src="/images/family-you-choose.svg"
      />
    </div>
  );
};

export default ShopPage;
