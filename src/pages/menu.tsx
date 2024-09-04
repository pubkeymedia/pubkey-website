import clsx from 'clsx';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import barMenu from '../../public/images/menu/bar-menu.svg';
import chickenWang from '../../public/images/menu/chicken-wang.svg';

const Menu = () => {
  return (
    <div className="flex flex-col items-center">
      <NextSeo title="Menu" />
      <Image alt="Bar Menu" className="max-w-xl w-full" src={barMenu} />
      <div className="flex flex-col gap-y-8">
        <div className="border-8 border-red-400 rounded-2xl flex flex-col gap-y-16 py-16 px-8">
          <div className="grid grid-cols-1 items-center md:grid-cols-3 md:items-start relative gap-8">
            <FoodTypeSection className="col-span-2 text-center md:order-2">
              <FoodType>BITES</FoodType>
              <div>
                <FoodName>Waffle Fries &mdash; $10</FoodName>
                <FoodDescription>GREEN GOOP</FoodDescription>
              </div>
              <div>
                <FoodName>Fried Mozz &mdash; $12</FoodName>
                <FoodDescription>HERB CRUMBZ / ARRABIATA</FoodDescription>
              </div>
              <div>
                <FoodName>Pub Nachos &mdash; $15</FoodName>
                <FoodDescription>PICKLED ONION & JALAPEÑO</FoodDescription>
                <FoodDescription>+WAGYU CHILI $3</FoodDescription>
              </div>
              <div>
                <FoodName>Wings &mdash; $12</FoodName>
                <FoodDescription>6 pc $12 / 12 pz $22</FoodDescription>
                <FoodDescription>BUFFALO or RED BBQ DRY</FoodDescription>
                <FoodDescription>RANCH or BLEU</FoodDescription>
              </div>
              <div>
                <FoodName>Elotes &mdash; $12</FoodName>
                <FoodDescription>SMOKED CORN / COTIJA</FoodDescription>
                <FoodDescription>CHIPOTLE / PIMENTON</FoodDescription>
              </div>
            </FoodTypeSection>
            <Image
              alt="A chicken wing."
              className="absolute opacity-70 md:relative md:opacity-100 h-full md:h-auto col-span-1 md:order-1"
              height={420}
              src={chickenWang}
              width={269}
            />
          </div>
          <div className="relative flex flex-col-reverse items-center md:flex-row-reverse md:items-start gap-8">
            <Image
              alt="A hot dog"
              className="absolute opacity-70 md:relative md:opacity-100 md:w-1/2 lg:w-1/3"
              height={420}
              src="/images/menu/hot-dogs.svg"
              width={269}
            />

            <FoodTypeSection>
              <div>
                <FoodType>DOGGOS</FoodType>
                <p className="font-redaction">Made with 100% beef</p>
              </div>
              <div>
                <FoodName>Chicago Classic &mdash; $9</FoodName>
                <FoodDescription>ONION / TOMATO / SPORT PEPPER / YELLOW MUSTARD</FoodDescription>
              </div>
              <div>
                <FoodName>Dirty Dog &mdash; $10</FoodName>
                <FoodDescription>
                  WAGYU CHILI / SLAW / FRIED SHALLOT / SE&#209;OR LECHUGA HOT SAUCE
                </FoodDescription>
              </div>
              <div>
                <FoodName>Jersey Ripper &mdash; $8</FoodName>
                <FoodDescription>DEEP FRIED FRANK / HOT PEPPER MUSTARD</FoodDescription>
              </div>
              <div>
                <FoodName>BLT Ripper &mdash; $10</FoodName>
                <FoodDescription>DEEP FRIED FRANK / BLT + GOOPS</FoodDescription>
              </div>
            </FoodTypeSection>
          </div>

          <div className="relative flex flex-col-reverse items-center md:flex-row gap-8">
            <Image
              alt="A burger"
              className="absolute opacity-20 md:relative md:opacity-100 md:w-1/2 lg:w-1/3"
              height={420}
              src="/images/burger.svg"
              width={269}
            />
            <FoodTypeSection>
              <div>
                <FoodType>SAMMIES</FoodType>
                <p className="font-redaction">+BACON $3 +EGG $2 ON ANY SAMMY!</p>
              </div>
              <div>
                <FoodName>Smash-Burger</FoodName>
                <FoodDescription className="font-bold">
                  Single $17 / Double $20 / Triple $23
                </FoodDescription>
                <FoodDescription>PUB SAUCE / LETTUCE / ONION / TOMATO / CHEESE</FoodDescription>
              </div>
              <div>
                <FoodName>Buffalo Chicky-Chicky &mdash; $16</FoodName>
                <FoodDescription>
                  PICKLE-BRINED BUTTERMILK BREAST / SASSY SLAW / PICKLE
                </FoodDescription>
              </div>
              <div>
                <FoodName>Mom&apos;s Grilled Cheese &mdash; $12</FoodName>
                <FoodDescription>&apos;MERICAN CHEESE / PICKLE / SESAME POTATO BUN</FoodDescription>
              </div>
            </FoodTypeSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-y-8">
            <div className="relative md:static flex flex-col flex-grow h-full justify-between">
              <FoodTypeSection>
                <FoodType>MAINSTAYS</FoodType>
                <div>
                  <FoodName>PubKey Stek Frets</FoodName>
                  <FoodDescription className="font-bold">
                    8 oz. $35 / 12 oz. $55 / POUND TOWN $69
                  </FoodDescription>
                  <FoodDescription>
                    RIB EYE / GARLIC BUTTER / THRICE COOKED PUB FRIES
                  </FoodDescription>
                </div>
                <div>
                  <FoodName>Fish & Chips $24</FoodName>
                  <FoodDescription>
                    TALLOW-FRIED / ON BRAND BATTER / TAH-TAH SAUCE / OL&apos; BAE
                  </FoodDescription>
                </div>
              </FoodTypeSection>
            </div>
            <div className="flex flex-col gap-y-4 items-center">
              <div className="border border-red-600 uppercase h-64 w-64 rounded-full flex items-center justify-center">
                <p className="flex items-center text-2xl w-48 h-48 text-center">
                  Why Yes, We Do Fry Everything in Tallow!
                </p>
              </div>
              <p className="max-w-md text-xs tracking-wide">
                Consuming raw or uncooked meats, poultry, seafood, shellfish or eggs may increase
                your risk of food borne illness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FoodDescription = ({
  className,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) => (
  <p className={clsx('text-sm font-redaction tracking-wider', className)} {...props} />
);

const FoodType = ({
  className,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
  <h2 className={clsx('text-4xl tracking-wide uppercase', className)} {...props} />
);

const FoodName = (
  props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
) => <h3 className="font-bold text-lg tracking-widest" {...props} />;

const FoodTypeSection = ({
  className,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
  <div className={twMerge('flex flex-col gap-y-4', className)} {...props} />
);

export default Menu;
