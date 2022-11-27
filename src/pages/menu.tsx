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
      <div className="border-8 border-red-400 rounded-2xl flex flex-col gap-y-16 py-16 px-8">
        <div className="flex flex-col items-center md:flex-row-reverse md:items-start gap-8">
          <Image
            alt="A hot dog"
            className="md:w-1/2 lg:w-1/3"
            height={420}
            src="/images/menu/hot-dogs.svg"
            width={269}
          />
          <FoodTypeSection>
            <div>
              <FoodType>Signature Dogs</FoodType>
              <p className="font-redaction">Served with potato chips</p>
              <p className="font-redaction">All hot dogs are made with 100% beef</p>
            </div>
            <div>
              <FoodName>The Dirty Dog &mdash; $8</FoodName>
              <FoodDescription>
                Griddled Allen Bro&apos;s Jumbo dog, purple derp, whole grain mustard, fried shallot
                on a toasted poppy seed bun
              </FoodDescription>
            </div>
            <div>
              <FoodName>Chicago Classic &mdash; $8</FoodName>
              <FoodDescription>
                Griddled Vienna Beef dog, yellow mustard, relish, tomato, pickle, onions, sport
                peppers, celery salt on a steamed poppy seed bun
              </FoodDescription>
            </div>
            <div>
              <FoodName>
                Chili Ripper<sup>*</sup> &mdash; $8
              </FoodName>
              <FoodDescription>
                Fried Allen Bro&apos;s Jumbo dog, chili, dijon, raw onions on a toasted potato bun
              </FoodDescription>
            </div>
            <div>
              <FoodName>Al Pastor &mdash; $8</FoodName>
              <FoodDescription>
                Griddled Hebrew National dog, al pastor sauce, pineapple, cilantro on a toasted
                potato bun
              </FoodDescription>
            </div>
            <div>
              <FoodName>Sweet Soy & Slaw &mdash; $8</FoodName>
              <FoodDescription>
                Griddled Hebrew National dog, chinese hot mustard, cabbage, garlic aioli, sweet soy
                on a toasted potato bun
              </FoodDescription>
            </div>
            <div>
              <FoodName>Cheese Dog &mdash; $7</FoodName>
              <FoodDescription>
                Griddled Vienna Beef dog, hot peppers, onion, cheese sauce on a toasted poppy seed
                bun
              </FoodDescription>
            </div>
            <div>
              <FoodName>New York Style &mdash; $7</FoodName>
              <FoodDescription>
                Steamed Hebrew National dog, spicy brown mustard, sauerkraut on a steamed potato bun
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
            <div>
              <FoodType>Sandwiches</FoodType>
              <p className="font-redaction">ALL sandwiches served with pickle</p>
            </div>
            <div>
              <FoodName>Grilled Cheese &mdash; $11</FoodName>
              <FoodDescription>American, cheddar, tomato, basil on thick cut toast</FoodDescription>
            </div>
            <div>
              <FoodName>
                Chop Cheese<sup>*</sup> &mdash; $14
              </FoodName>
              <FoodDescription>
                Wagyu, pepper, onions, american cheese, bodega sauce on a hero roll
              </FoodDescription>
            </div>
            <div>
              <FoodName>
                Fried Chicken<sup>*</sup> &mdash; $15
              </FoodName>
              <FoodDescription>
                Katsu sauce (contains shrimp), cabbage, lemon mayo, on thick cut toast
              </FoodDescription>
            </div>
            <div>
              <FoodName>
                Porchetta Hero<sup>*</sup> &mdash; $16
              </FoodName>
              <FoodDescription>
                Sliced porchetta, pork rinds, garlic aioli, chimichurri, pickled red onions, on a
                hero roll
              </FoodDescription>
            </div>
            <div>
              <FoodName>
                Smash Burger<sup>*</sup>
              </FoodName>
              <FoodDescription>
                ¼ lb Wagyu, cheese, onion, pickles, pub sauce, on a seeded potato roll
              </FoodDescription>
              <p className="text-sm">
                (Single $14; Double $17; Bacon +$3; Egg<sup>*</sup> +$2)
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
                <FoodName>Fried Mutz &mdash; $12</FoodName>
                <FoodDescription>Arrabiata sauce</FoodDescription>
              </div>
              <div>
                <FoodName>&ldquo;Show Me&rdquo; Potato Salad &mdash; $5</FoodName>
                <FoodDescription>Kewpie mayo, celery, sunflower seeds</FoodDescription>
              </div>
              <div>
                <FoodName>Chicharrones &mdash; $8</FoodName>
                <FoodDescription>Pimenton</FoodDescription>
              </div>
              <div>
                <FoodName>Waffle Fries &mdash; $9</FoodName>
                <FoodDescription>Cheese dip +$3 Chili +$4 Key&apos;d up +$5</FoodDescription>
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
              <div>
                <FoodType>
                  Hot Wings<sup>*</sup>
                </FoodType>
                <div className="font-redaction tracking-wide">
                  <p>Served with blue cheese and celery</p>
                  <p>6 for $11 ~-~ 12 for $21</p>
                </div>
              </div>
              <div className="font-redaction tracking-wide">
                <p>Buffalo</p>
                <p>Sriracha Honey</p>
                <p>Half & Half (minimum 12 wings)</p>
              </div>
            </FoodTypeSection>
          </div>
          <p className="text-xs tracking-wide">
            <sup>*</sup>Consuming raw or uncooked meats, poultry, seafood, shellfish or eggs may
            increase your risk of food borne illness.
          </p>
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
> = (props) => <h3 className="font-bold text-lg tracking-widest" {...props} />;

const FoodTypeSection: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ className, ...props }) => (
  <div className={clsx('flex flex-col gap-y-4', className)} {...props} />
);

export default Menu;
