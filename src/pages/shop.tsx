import Shopify from '@shopify/shopify-api';
import type { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import React from 'react';
import hero from '../../public/images/shop/hero.gif';

const ShopPage: NextPage<Props> = ({ products }) => {
  return (
    <div className="flex flex-col gap-y-16 w-full">
      <NextSeo
        description="The PubKey store is the place for merch. Who doesn’t love merch? When I walk into my favorite dive bar I expect to see merchandise! And when the trains aren’t running, I want to be able to buy my favorite merch online! So I go straight to the PubKey online store and pick up my favorite merch straight from my couch! It rules!"
        title="Shop"
      />
      <Image alt="Family You Choose" className="w-full" src={hero} />
      <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center">
        {products.map(({ featuredImage, onlineStoreUrl, priceRangeV2, title }) => (
          <a
            className="flex flex-col justify-between px-2 py-4 outline outline-black border-2 border-gray-300"
            key={title}
            href={onlineStoreUrl}
            rel="noreferrer"
            target="_blank"
          >
            <Image
              alt={title}
              height={featuredImage.height}
              src={featuredImage.url}
              width={featuredImage.width}
            />
            <p className="text-xl tracking-widest uppercase">{title}</p>
            <PriceRange priceRange={priceRangeV2} />
          </a>
        ))}
      </div>
    </div>
  );
};

const PriceRange: React.FC<{ priceRange: PriceRange }> = ({ priceRange }) => {
  if (priceRange.maxVariantPrice.amount === priceRange.minVariantPrice.amount) {
    return (
      <p className="text-lg">
        {numberToFormattedUsdCurrency(Number(priceRange.maxVariantPrice.amount))}
      </p>
    );
  }
  return (
    <p className="text-lg">
      {numberToFormattedUsdCurrency(Number(priceRange.minVariantPrice.amount))} &mdash;{' '}
      {numberToFormattedUsdCurrency(Number(priceRange.maxVariantPrice.amount))}
    </p>
  );
};

const numberToFormattedUsdCurrency = (price: number): string => {
  return new Intl.NumberFormat(undefined, {
    currency: 'USD',
    notation: 'compact',
    style: 'currency',
  }).format(price);
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const shopifyClient = new Shopify.Clients.Graphql(process.env.SHOP, process.env.ACCESS_TOKEN);
  try {
    const result = await shopifyClient.query<QueryResult>({
      data: /* GraphQL */ `
        {
          products(first: 250) {
            edges {
              node {
                featuredImage {
                  height
                  url
                  width
                }
                onlineStoreUrl
                priceRangeV2 {
                  maxVariantPrice {
                    amount
                  }
                  minVariantPrice {
                    amount
                  }
                }
                title
              }
            }
          }
        }
      `,
    });
    const products = result.body.data.products.edges
      .map((e) => e.node)
      .filter((p) => p.onlineStoreUrl);
    return { props: { products }, revalidate: 60 * 10 };
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      console.error(e);
    }
    throw e;
  }
};

type Image = { height: number; url: string; width: number };
type PriceRange = { maxVariantPrice: VariantPrice; minVariantPrice: VariantPrice };
type Product = {
  featuredImage: Image;
  onlineStoreUrl: string;
  priceRangeV2: PriceRange;
  title: string;
};
type QueryResult = {
  data: { products: { edges: { node: Product }[] } };
};
type VariantPrice = { amount: string };
type Props = { products: Product[] };

export default ShopPage;
