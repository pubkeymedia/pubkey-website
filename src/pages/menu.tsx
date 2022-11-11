import clsx from 'clsx';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import React from 'react';

const Menu = () => {
  return (
    <div className="flex flex-col items-center">
      <NextSeo title="Menu" />
      <Image
        alt="Bar Menu"
        className="max-w-xl w-full"
        height={300}
        width={1024}
        src="/images/menu/bar-menu.svg"
      />
      <div className="border-8 border-red-400 flex flex-col gap-y-16 py-16 px-8">
        <div className="flex flex-col items-center md:flex-row-reverse md:items-start gap-8">
          <Image
            alt="A hot dog"
            className="md:w-1/2 lg:w-1/3"
            height={420}
            src="/images/menu/hot-dogs.svg"
            width={269}
          />
          <FoodTypeSection>
            <FoodType>Signature Dogs</FoodType>
            <div>
              <p>
                <span className="underline">All Dogs $8</span> served with potato chips
              </p>
              <p>
                <sup>*</sup>all hot dogs are made with 100% beef
              </p>
            </div>
            <div>
              <FoodName>The Dirty Dog</FoodName>
              <FoodDescription>
                griddled Allen Bro&apos;s Jumbo dog, purple derp, whole grain mustard, fried shallot
                on a toasted poppy seed bun
              </FoodDescription>
            </div>
            <div>
              <FoodName>Chicago Classic</FoodName>
              <FoodDescription>
                griddled Vienna Beef dog, yellow mustard, relish, tomato, pickle, onions, sport
                peppers, celery salt on a steamed poppy seed bun
              </FoodDescription>
            </div>
            <div>
              <FoodName>Jersey Ripper</FoodName>
              <FoodDescription>
                fried Allen Bro&apos;s Jumbo dog, chili, dijon, raw onions on a toasted potato bun
              </FoodDescription>
            </div>
            <div>
              <FoodName>Hello Nasty</FoodName>
              <FoodDescription>
                steamed Hebrew National dog, spicy brown mustard, sauerkraut on a steamed potato bun
              </FoodDescription>
            </div>
            <div>
              <FoodName>Al Pastor</FoodName>
              <FoodDescription>
                griddled Hebrew National dog, al pastor sauce, pineapple, cilantro on a toasted
                potato bun
              </FoodDescription>
            </div>
            <div>
              <FoodName>Big Red</FoodName>
              <FoodDescription>
                griddled Hebrew National dog, chinese hot mustard, cabbage, garlic aioli, sweet soy
                on a toasted potato bun
              </FoodDescription>
            </div>
            <div>
              <FoodName>Cheesy BFG</FoodName>
              <FoodDescription>
                griddled Vienna Beef dog, hot peppers, onion, cheese sauce on a toasted poppy seed
                bun
              </FoodDescription>
            </div>
          </FoodTypeSection>
        </div>

        <div className="flex flex-col items-center md:flex-row gap-8">
          <Image
            alt="A burger"
            className="md:w-1/2 lg:w-1/3"
            height={420}
            src="/images/burger.svg"
            width={269}
          />
          <FoodTypeSection>
            <FoodType>Sandwiches</FoodType>
            <div>
              <FoodName>Taylor Ham Sandwich &mdash; $9</FoodName>
              <FoodDescription>
                taylor ham, fried egg, cheddar cheese on a seeded hero roll
              </FoodDescription>
            </div>
            <div>
              <FoodName>Grilled Cheese &mdash; $11</FoodName>
              <FoodDescription>american, cheddar, tomato, basil on thick cut toast</FoodDescription>
            </div>
            <div>
              <FoodName>Chop Cheese &mdash; $14</FoodName>
              <FoodDescription>
                wagyu, pepper, onions, american cheese, bodega sauce on a hero roll
              </FoodDescription>
            </div>
            <div>
              <FoodName>Chicken Katsu Sando &mdash; $15</FoodName>
              <FoodDescription>katsu sauce, cabbage, lemon mayo on thick cut toast</FoodDescription>
            </div>
            <div>
              <FoodName>Porchetta Sandwich &mdash; $17</FoodName>
              <FoodDescription>
                sliced porchetta, chimichurri, pickled red onions, chicharrones on a hero roll
              </FoodDescription>
            </div>
            <div>
              <FoodName>Smash Burger</FoodName>
              <FoodDescription>
                ¼ lb Wagyu, cheese, onion, pickles, pub sauce, on a seeded potato roll
              </FoodDescription>
              <p className="text-sm">
                (Single $13; Double $16; Bacon crumble +$2; Fried Egg +$1.50)
              </p>
            </div>
          </FoodTypeSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-y-16">
          <div className="relative">
            <Image
              alt="A carton of French fries."
              className="absolute h-full"
              height={420}
              src="/images/menu/look.svg"
              width={269}
            />
            <FoodTypeSection className="text-center">
              <FoodType>Snacks</FoodType>
              <div>
                <FoodName>Potato Salad &mdash; $5</FoodName>
                <FoodDescription>kewpie mayo, celery, sunflower seeds</FoodDescription>
              </div>
              <div>
                <FoodName>Chicharrones &mdash; $8</FoodName>
                <FoodDescription>pimenton</FoodDescription>
              </div>
              <div>
                <FoodName>Waffle Fries &mdash; $9</FoodName>
                <FoodDescription>cheesy +$2 chili & cheesy +$3 key&apos;d up +$4</FoodDescription>
              </div>
              <div>
                <FoodName>Fried Mutz &mdash; $10</FoodName>
                <FoodDescription>arrabiata sauce</FoodDescription>
              </div>
            </FoodTypeSection>
          </div>
          <div className="relative md:static">
            <Image
              alt="A chicken wing."
              className="absolute h-full md:h-auto"
              height={420}
              src="/images/menu/chicken-wang.svg"
              width={269}
            />
            <FoodTypeSection className="text-center">
              <FoodType>Wings</FoodType>
              <div className="font-redaction tracking-wide">
                <p>Served with blue cheese and celery</p>
                <p>6 for $11 ~-~ 12 for $21</p>
              </div>
              <div className="font-redaction tracking-wide">
                <p>Buffalo</p>
                <p>Sriracha Honey</p>
                <p>Half & Half (minimum 12 wings)</p>
              </div>
            </FoodTypeSection>
          </div>
        </div>
      </div>
    </div>
  );
};

const FoodDescription: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
> = ({ className, ...props }) => (
  <p className={clsx('font-redaction tracking-wider', className)} {...props} />
);

const FoodType: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
> = ({ className, ...props }) => (
  <h2 className={clsx('text-4xl tracking-wide uppercase', className)} {...props} />
);

const FoodName: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
> = (props) => <h3 className="font-redaction underline text-lg tracking-widest" {...props} />;

const FoodTypeSection: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ className, ...props }) => (
  <div className={clsx('flex flex-col gap-y-4', className)} {...props} />
);

export default Menu;
