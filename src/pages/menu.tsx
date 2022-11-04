import { NextSeo } from 'next-seo';
import Image from 'next/image';
import React from 'react';

const Menu = () => {
  return (
    <div className="flex flex-col items-center">
      <NextSeo title="Menu" />
      <Image
        alt="Bar Menu"
        className="max-w-4xl w-full"
        height={100}
        width={1024}
        src="/images/bar-menu.svg"
      />
      <div className="flex flex-col gap-y-16">
        <div className="flex flex-col items-center md:flex-row gap-x-8">
          <Image alt="A carton of French fries." height={420} src="/images/look.svg" width={269} />
          <FoodTypeSection>
            <FoodType>Small Bites</FoodType>
            <div>
              <FoodName>Cole slaw - $0.69</FoodName>
              <FoodDescription>
                Spicy jalapeno bacon ipsum dolor amet ham tongue capicola beef ball tip meatball
                prosciutto frankfurter jerky.
              </FoodDescription>
            </div>
            <div>
              <FoodName>Cole slaw - $0.69</FoodName>
              <FoodDescription>
                Spicy jalapeno bacon ipsum dolor amet ham tongue capicola beef ball tip meatball
                prosciutto frankfurter jerky.
              </FoodDescription>
            </div>
            <div>
              <FoodName>Cole slaw - $0.69</FoodName>
              <FoodDescription>
                Spicy jalapeno bacon ipsum dolor amet ham tongue capicola beef ball tip meatball
                prosciutto frankfurter jerky.
              </FoodDescription>
            </div>
            <div>
              <FoodName>Cole slaw - $0.69</FoodName>
              <FoodDescription>
                Spicy jalapeno bacon ipsum dolor amet ham tongue capicola beef ball tip meatball
                prosciutto frankfurter jerky.
              </FoodDescription>
            </div>
          </FoodTypeSection>
        </div>
        <div className="flex flex-col items-center md:flex-row-reverse gap-x-8">
          <Image alt="A hot dog" height={420} src="/images/hot-dogs.svg" width={269} />
          <FoodTypeSection>
            <FoodType>Hot Dogs</FoodType>
            <div>
              <FoodName>Hot dog 1 - $4.20</FoodName>
              <FoodDescription>
                Spicy jalapeno bacon ipsum dolor amet ham tongue capicola beef ball tip meatball
                prosciutto frankfurter jerky.
              </FoodDescription>
            </div>
            <div>
              <FoodName>Hot dog 2 - $4.20</FoodName>
              <FoodDescription>
                Spicy jalapeno bacon ipsum dolor amet ham tongue capicola beef ball tip meatball
                prosciutto frankfurter jerky.
              </FoodDescription>
            </div>
            <div>
              <FoodName>Hot dog 3 - $4.20</FoodName>
              <FoodDescription>
                Spicy jalapeno bacon ipsum dolor amet ham tongue capicola beef ball tip meatball
                prosciutto frankfurter jerky.
              </FoodDescription>
            </div>
            <div>
              <FoodName>Hot dog 4 - $4.20</FoodName>
              <FoodDescription>
                Spicy jalapeno bacon ipsum dolor amet ham tongue capicola beef ball tip meatball
                prosciutto frankfurter jerky.
              </FoodDescription>
            </div>
          </FoodTypeSection>
        </div>
        <div className="flex flex-col items-center md:flex-row gap-x-8">
          <Image alt="A burger" height={420} src="/images/burger.svg" width={269} />
          <FoodTypeSection>
            <FoodType>Burgers & Sandwiches</FoodType>
            <div>
              <FoodName>Burger - $0.69</FoodName>
              <FoodDescription>
                Spicy jalapeno bacon ipsum dolor amet ham tongue capicola beef ball tip meatball
                prosciutto frankfurter jerky.
              </FoodDescription>
            </div>
            <div>
              <FoodName>Sandwich - $4.20</FoodName>
              <FoodDescription>
                Spicy jalapeno bacon ipsum dolor amet ham tongue capicola beef ball tip meatball
                prosciutto frankfurter jerky.
              </FoodDescription>
            </div>
            <div>
              <FoodName>Mystery box - $4.20</FoodName>
              <FoodDescription>
                Spicy jalapeno bacon ipsum dolor amet ham tongue capicola beef ball tip meatball
                prosciutto frankfurter jerky.
              </FoodDescription>
            </div>
          </FoodTypeSection>
        </div>
      </div>
    </div>
  );
};

const FoodDescription: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
> = (props) => <p className="font-redaction tracking-wider" {...props} />;

const FoodType: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
> = (props) => <h2 className="text-4xl tracking-wide uppercase" {...props} />;

const FoodName: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
> = (props) => <h3 className="font-redaction underline text-lg tracking-widest" {...props} />;

const FoodTypeSection: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = (props) => <div className="flex flex-col gap-y-4" {...props} />;

export default Menu;
