import React from 'react';

const SideBySideImagesWithPrice: React.FC<{ imageUrl1: string, imageUrl2: string, linkUrl1: string, linkUrl2: string, itemName1: string, itemName2: string }> = ({ imageUrl1, imageUrl2, linkUrl1, linkUrl2, itemName1, itemName2 }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'black' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 5px' }}>
        <a href={linkUrl1} target="_blank" rel="noopener noreferrer">
          <img src={imageUrl1} alt="Image 1" style={{ width: '100%' }} />
        </a>
        <div style={{ color: 'white', marginTop: '5px', fontSize: '14px', fontFamily: 'sans-serif', textAlign: 'center' }}>{itemName1}</div>
        <div style={{ color: 'white', marginTop: '5px', fontSize: '24px', fontFamily: 'sans-serif' }}>$50</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px 5px' }}>
        <a href={linkUrl2} target="_blank" rel="noopener noreferrer">
          <img src={imageUrl2} alt="Image 2" style={{ width: '100%' }} />
        </a>
        <div style={{ color: 'white', marginTop: '5px', fontSize: '14px', fontFamily: 'sans-serif', textAlign: 'center' }}>{itemName2}</div>
        <div style={{ color: 'white', marginTop: '5px', fontSize: '24px', fontFamily: 'sans-serif' }}>$121</div>
      </div>
    </div>
  );
}

const YourPageWithPriceAndName: React.FC = () => {
  return (
    <div>
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            overflow: hidden; /* Optional: This prevents horizontal scrolling if the content overflows horizontally */
          }

          @media screen and (max-width: 768px) {
            /* Stack images vertically on narrow screens */
            div {
              flex-direction: column;
            }

            div:nth-child(1),
            div:nth-child(2) {
              margin: 0px 0;
            }
          }
        `}
      </style>
      <SideBySideImagesWithPrice 
        imageUrl1="/images/rhr/hotstyle-ga.jpg"
        imageUrl2="/images/rhr/hotstyle-vip.jpg"
        linkUrl1="https://pay.zaprite.com/pl_Ss72YiBcvL"
        linkUrl2="https://pay.zaprite.com/pl_fDG1woIQ8S"
        itemName1="GA HOT STYLE"
        itemName2="VIP HOT STYLE"
      />
    </div>
  );
}

export default YourPageWithPriceAndName;
