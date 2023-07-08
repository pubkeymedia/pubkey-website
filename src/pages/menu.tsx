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
                <FoodType>Hot Dogs</FoodType>
                <p className="font-redaction">Served with potato chips</p>
                <p className="font-redaction">All hot dogs are made with 100% beef</p>
              </div>
              <div>
                <FoodName>The Dirty Dog &mdash; $8</FoodName>
                <FoodDescription>
                  Allen Bro&apos;s Jumbo, purple derp, whole grain mustard, fried shallot, poppy
                  seed bun
                </FoodDescription>
              </div>
              <div>
                <FoodName>Chicago Classic &mdash; $8</FoodName>
                <FoodDescription>
                  Vienna Beef, yellow mustard, neon relish, tomato, pickle, onions, sport peppers,
                  celery salt, poppy seed bun
                </FoodDescription>
              </div>
              <div>
                <FoodName>
                  Chili Ripper<sup>*</sup> &mdash; $8
                </FoodName>
                <FoodDescription>
                  Allen Bro&apos;s Jumbo, wagyu chili, dijon, raw onions, potato bun (want cheese?)
                </FoodDescription>
              </div>
              <div>
                <FoodName>Cheese Dog &mdash; $7</FoodName>
                <FoodDescription>
                  Vienna Beef, hot peppers, onion, cheese sauce, poppy seed bun
                </FoodDescription>
              </div>
              <div>
                <FoodName>New York Style &mdash; $7</FoodName>
                <FoodDescription>
                  Hebrew National, spicy brown mustard, beer braised sauerkraut, potato bun
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
                <p className="font-redaction">All sandwiches served with pickle</p>
              </div>
              <div>
                <FoodName>Grilled Cheese &mdash; $11</FoodName>
                <FoodDescription>American, cheddar, tomato, basil, thick cut toast</FoodDescription>
              </div>
              <div>
                <FoodName>
                  Chop Cheese<sup>*</sup> &mdash; $14
                </FoodName>
                <FoodDescription>
                  Wagyu, pepper, onions, American cheese, bodega sauce, hero roll
                </FoodDescription>
              </div>
              <div>
                <FoodName>
                  Fried Chicken<sup>*</sup> &mdash; $15
                </FoodName>
                <FoodDescription>
                  Katsu sauce (contains shellfish), slaw, lemon mayo, thick cut toast
                </FoodDescription>
              </div>
              <div>
                <FoodName>
                  Chicky Chicky Parm<sup>*</sup> &mdash; $15
                </FoodName>
                <FoodDescription>
                  Breaded chicken cutlet, fried mozzerella, arrabiata, seeded potato bun
                </FoodDescription>
              </div>
              <div>
                <FoodName>
                  Smash Burger<sup>*</sup>
                </FoodName>
                <FoodDescription>
                  ¼ lb. Wagyu, cheese, sauted onion, pickles, pub sauce, seeded potato roll
                </FoodDescription>
                <p className="text-sm">
                  Single $14 Double $17 Bacon +$3 Egg<sup>*</sup> +$2
                </p>
              </div>
              <div>
                <FoodName>
                  Dirty Burg<sup>*</sup> &mdash; $18
                </FoodName>
                <FoodDescription>
                  ¼ lb. Wagyu, fried mozzerella, shrettuce, hot peppers, pickled red onion, seeded
                  potato roll
                </FoodDescription>
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
                    Hot Wings<sup>*</sup>
                  </FoodType>
                  <div className="font-redaction tracking-wide">
                    <p>Served with celery, blue cheese or ranch</p>
                    <p>6 for $11 ~-~ 12 for $21</p>
                  </div>
                </div>
                <div className="font-redaction tracking-wide">
                  <p>
                    <span className="font-bold">Buffalo</span>
                    <span> (wet)</span>
                  </p>
                  <p>
                    <span className="font-bold">Sriracha Honey</span>
                    <span> (wet)</span>
                  </p>
                  <p>
                    <span className="font-bold">Curry</span>
                    <span> (dry)</span>
                  </p>
                  <p>
                    <span className="font-bold">Red BBQ</span>
                    <span> (dry)</span>
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
                <FoodType>Snacks</FoodType>
                <div>
                  <FoodName>Fried Mozzerella &mdash; $12</FoodName>
                  <FoodDescription>Arrabiata sauce</FoodDescription>
                </div>
                <div>
                  <FoodName>Wagyu Chili &mdash; $11</FoodName>
                  <FoodDescription>Diced onion, lime crema, fried shallot</FoodDescription>
                </div>
                <div>
                  <FoodName>Chicharrones &mdash; $8</FoodName>
                  <FoodDescription>Pimenton</FoodDescription>
                </div>
                <div>
                  <FoodName>Waffle Fries &mdash; $9</FoodName>
                  <FoodDescription>
                    Cheese dip +$3 Wagyu Chili +$4 Key&apos;d up +$5
                  </FoodDescription>
                </div>
              </FoodTypeSection>
            </div>
            <p className="max-w-md text-xs tracking-wide">
              <sup>*</sup>Consuming raw or uncooked meats, poultry, seafood, shellfish or eggs may
              increase your risk of food borne illness.
            </p>
          </div>
        </div>
        <div>
          <div
            className="bg-no-repeat font p-8 lg:pt-28 text-blue-600 w-full"
            style={{ backgroundImage: `url(${bg.src})`, backgroundSize: '100% 100%' }}
          >
            <h1 className="text-center text-6xl uppercase">KEGS N&apos; EGGS</h1>
            <div className="flex flex-col mt-16 max-w-3xl mx-auto gap-y-8">
              <div className="flex flex-col gap-y-4">
                <h2 className="text-3xl">FOOD</h2>
                <div>
                  <KegsNEggsFoodItem
                    detail="bacon, egg, cheese, spicy ketchup, martin's potato roll double egg +$2"
                    price={10}
                    title="BECY"
                  />
                  <KegsNEggsFoodItem
                    detail="bacon, lettuce, tomato, mayo, fried egg, texas toast"
                    price={11}
                    title="BLT&E"
                  />
                  <KegsNEggsFoodItem
                    detail="two eggs, peppers, onion, taylor ham, american cheese, spicy ketchup, long roll"
                    price={14}
                    title="TAYLOR HAM CHOP"
                  />
                  <KegsNEggsFoodItem
                    detail="texas toast, cinnamon spiced powdered sugar, chocolate-coffee syrup"
                    price={12}
                    title="FRENCH TOAST"
                  />
                  <KegsNEggsFoodItem
                    detail="fried all beef dog, waffle fries, guajillo chile aioli"
                    price={14}
                    title="SALCHI-WAWA"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-4">
                <h2 className="text-3xl">DRINKS</h2>
                <div>
                  <KegsNEggsFoodItem price={9} title="MICHELADA" />
                  <KegsNEggsFoodItem price={14} title="BLOODY MARY" />
                  <KegsNEggsFoodItem price={14} title="THAI BASIL DAIQUIRI" />
                  <KegsNEggsFoodItem
                    detail="2$ off any keg beer with purchase of food"
                    price={13}
                    title="ROSE SPRITZ"
                  />
                </div>
              </div>
              <div className="text-3xl uppercase">
                <p>Served 1pm-5pm</p>
                <p>Friday &mdash; Sunday</p>
              </div>
            </div>
            <Image
              alt="Drunk cat"
              className="lg:max-w-3xl lg:mx-auto"
              placeholder="blur"
              src={cat}
            />
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
