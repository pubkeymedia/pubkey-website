import Shopify from '@shopify/shopify-api';
import type { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import React from 'react';

const ShopPage: NextPage<Props> = ({ products }) => {
  return (
    <div className="flex flex-col gap-y-16 w-full">
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
      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">
        {products.map(({ featuredImage, onlineStoreUrl, title }) => (
          <a key={title} href={onlineStoreUrl} rel="noreferrer" target="_blank">
            <p className="text-xl tracking-widest uppercase">{title}</p>
            <Image
              alt={title}
              height={featuredImage.height}
              src={featuredImage.url}
              width={featuredImage.width}
            />
          </a>
        ))}
      </div>
    </div>
  );
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
                title
              }
            }
          }
        }
      `,
    });
    const products = result.body.data.products.edges.map((e) => e.node);
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
type Product = { featuredImage: Image; onlineStoreUrl: string; title: string };
type QueryResult = {
  data: { products: { edges: { node: Product }[] } };
};
type Props = { products: Product[] };

export default ShopPage;
