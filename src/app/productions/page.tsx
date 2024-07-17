// ProductionsPage.tsx

import React from 'react';
import Head from 'next/head';

const ProductionsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Productions</title>
      </Head>
      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          background-color: #000;
          color: #fff;
          font-family: 'Helvetica', Arial, sans-serif;
          background-image: url('/images/productions/pubkey_shrine_bg.gif');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        #page-content {
          text-align: center;
        }

        img {
          width: 100%;
          max-width: 600px;
          margin-bottom: 20px;
        }

        a {
          color: orange;
          font-size: 20px;
          font-weight: bold;
          text-decoration: none;
          display: block;
          margin-top: 20px;
        }
      `}</style>
      <div id="page-content">
        <img src="/images/productions/pubkey_logo_shadow.png" alt="PubKey Logo" />
        <a href="mailto:events@port8333.io">events@port8333.io</a>
      </div>
    </>
  );
};

export default ProductionsPage;
