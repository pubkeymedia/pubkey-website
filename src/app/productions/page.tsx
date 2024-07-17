// ProductionsPage.tsx

import React from 'react';

const ProductionsPage: React.FC = () => {
  return (
    <>
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
        }

        #page-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 20px;
          box-sizing: border-box;
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
        }
      `}</style>
      <div id="page-content">
        <img src="/images/productions/pubkey_shrine.gif" alt="PubKey Shrine" />
        <div style={{ marginBottom: '20px' }}>
          <a href="mailto:events@port8333.io">events@port8333.io</a>
        </div>
      </div>
    </>
  );
};

export default ProductionsPage;
