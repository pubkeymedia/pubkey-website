import Image, { ImageProps } from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

export const Ticker = () => (
  <Marquee className="pt-10 pb-6" gradient={false} speed={55}>
    <MarqueeImage
      alt="Beer falling over"
      height={384}
      width={384}
      src="/images/homepage/ticker/spilled-beer.gif"
    />
    <MarqueeImage
      alt="Burger being built"
      height={384}
      width={384}
      src="/images/homepage/ticker/built-burger.gif"
    />
    <MarqueeImage
      alt="Hot dog being built"
      height={384}
      width={384}
      src="/images/homepage/ticker/boilermaker.png"
    />
    <MarqueeImage
      alt="Hot dog"
      height={384}
      width={384}
      src="/images/homepage/ticker/built-hot-dog.gif"
    />
    <MarqueeImage
      alt="Beer"
      height={384}
      width={384}
      src="/images/homepage/ticker/thanks-bloomberg.gif"
    />
    <MarqueeImage
      alt="Chicken wing being dipped into white sauce"
      height={384}
      width={384}
      src="/images/homepage/ticker/wing-dip.gif"
    />
    <MarqueeImage
      alt="Chicken drumstick"
      height={384}
      width={384}
      src="/images/homepage/ticker/drumstick.png"
    />
    <MarqueeImage
      alt="Payphone"
      height={384}
      width={384}
      src="/images/homepage/ticker/payphone.gif"
    />
    <MarqueeImage
      alt="New York hot dog"
      height={384}
      width={384}
      src="/images/homepage/ticker/new-york-hot-dog.png"
    />
  </Marquee>
);

const MarqueeImage: React.FC<ImageProps> = (props) => (
  <Image className="object-contain h-40 w-40 sm:h-48 sm:w-48 lg:h-60 lg:w-60" {...props} />
);
