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
          font-family: 'Helvetica', Arial, sans-serif; /* Ensure each font family name is separate in quotes */
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
      <div style={{ minHeight: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: 'Helvetica, Arial, sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 0 }}>
        <div style={{ maxWidth: '600px', width: '100%', padding: '20px', boxSizing: 'border-box', textAlign: 'center' }}>
          <img src="/images/productions/pubkey_shrine.gif" alt="PubKey Shrine" />
          <div style={{ marginBottom: '20px' }}>
            <a href="mailto:events@port8333.io">events@port8333.io</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductionsPage;
