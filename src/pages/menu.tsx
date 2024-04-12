import clsx from 'clsx';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import React from 'react';
import cat from '../../public/images/menu/cat-double-fisting.png';
import bg from '../../public/images/menu/kegs-n-eggs-bg.png';

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
      <div className="flex flex-col gap-y-8">
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
                <FoodType>DOGGOS</FoodType>
                <p className="font-redaction">Served with Ruffles potato chips</p>
                <p className="font-redaction">All hot dogs are made with 100% beef</p>
              </div>
              <div>
                <FoodName>Chicago Classic &mdash; $8</FoodName>
                <FoodDescription>
                  ONION / TOMATO / SPORT PEPPER / YELLOW MUSTARD
                </FoodDescription>
              </div>
              <div>
                <FoodName>Dirty Dog &mdash; $9</FoodName>
                <FoodDescription>
                  WAGYU CHILI / SLAW / FRIED SHALLOT / SE&#209;OR LECHUGA HOT SAUCE
                </FoodDescription>
              </div>
              <div>
                <FoodName>
                  Jersey Ripper &mdash; $8
                </FoodName>
                <FoodDescription>
                  DEEP FRIED FRANK / BURNT PEPPER RELISH / DELI MUSTARD
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
                <FoodType>SAMMIES</FoodType>
                <p className="font-redaction">All sandwiches served with pickle</p>
              </div>
              <div>
                <FoodName>
                  Smash-Burger
                </FoodName>
                <FoodDescription>
                  PUB SAUCE / LETTUCE / ONION / TOMATO / CHEESE
                </FoodDescription>
                <p className="text-sm">
                  Single $16 / Double $19 / Triple $22 / +Bacon 3 / +Egg 2
                </p>
              </div>
              <div>
                <FoodName>Buffalo Chicky-Chicky &mdash; $16</FoodName>
                <FoodDescription>PICKLE-BRINED BUTTERMILK BREAST / SASSY SLAW / PICKLE</FoodDescription>
              </div>
              <div>
                <FoodName>
                  Mom's Grilled Cheese &mdash; $12
                </FoodName>
                <FoodDescription>SESAME POTATO BUN / 'MERICAN CHEESE / PICKLE</FoodDescription>
              </div>
            </FoodTypeSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-y-16">
            <div className="relative md:static flex flex-col flex-grow h-full justify-between">
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
                    WINGS
                  </FoodType>
                  <div className="font-redaction tracking-wide">
                    <p>Served with celery, blue cheese or ranch</p>
                    <p><span className="font-bold">6 pc $12 / 12 pc $22</span></p>
                  </div>
                </div>
                <div className="font-redaction tracking-wide">
                  <p>
                    BUFFALO or RED BBQ DRY
                  </p>
                  <p>
                    RANCH or BLEU
                  </p>
                </div>
              </FoodTypeSection>
            </div>
            <div className="relative">
              <Image
                alt="A carton of French fries."
                className="absolute h-full"
                height={420}
                src="/images/menu/look.svg"
                width={269}
              />
              <FoodTypeSection className="text-center">
                <FoodType>BITES</FoodType>
                <div>
                  <FoodName>Fried Mozz &mdash; $12</FoodName>
                  <FoodDescription>HERB CRUMBZ / ARRABIATA</FoodDescription>
                </div>
                <div>
                  <FoodName>Jerk Cauliflower &mdash; $14</FoodName>
                  <FoodDescription>BEER BATTERED / SWEET CHILI DUNKER</FoodDescription>
                </div>
                <div>
                  <FoodName>Waffle Fries &mdash; $10</FoodName>
                  <FoodDescription>GREEN GOOP</FoodDescription>
                </div>
                <div>
                  <FoodName>PubKey Nachos &mdash; $14</FoodName>
                  <FoodDescription>
                  PICKLED ONION & JALAPE&#209;O / +WAGYU CHILI 3
                  </FoodDescription>
                </div>
              </FoodTypeSection>
            </div>
            <p className="max-w-md text-xs tracking-wide">
              Consuming raw or uncooked meats, poultry, seafood, shellfish or eggs may
              increase your risk of food borne illness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const KegsNEggsFoodItem = ({
  detail,
  price,
  title,
}: {
  detail?: string;
  price: number;
  title: string;
}) => (
  <div>
    <div className="flex flex-row text-2xl">
      <p>{title}</p>
      <div className="border-dotted border-blue-600 border-b-4 flex-grow mb-1 mx-2"></div>
      <p>{price}</p>
    </div>
    {detail ? <p className="text-xl">{detail}</p> : null}
  </div>
);

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
