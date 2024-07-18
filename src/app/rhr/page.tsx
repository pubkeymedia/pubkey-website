import React from 'react';

const SideBySideImagesWithPrice: React.FC<{ imageUrl1: string, imageUrl2: string, linkUrl1: string, linkUrl2: string, itemName1: string, itemName2: string }> = ({ imageUrl1, imageUrl2, linkUrl1, linkUrl2, itemName1, itemName2 }) => {
  return (
    <div className="side-by-side-container">
      <div className="item-container">
        <a href={linkUrl1} target="_blank" rel="noopener noreferrer">
          <img src={imageUrl1} alt="Image 1" className="item-image" />
        </a>
        <div className="item-name">{itemName1}</div>
        <div className="item-price"><a href={linkUrl1} target="_blank" rel="noopener noreferrer">$50 STILL AVAILABLE</a></div>
      </div>
      <div className="item-container">
          <img src={imageUrl2} alt="Image 2" className="item-image" />
        <div className="item-name">{itemName2}</div>
        <div className="item-price"><del>$121 SODL OUT!</del></div>
      </div>
    </div>
  );
}

const ImageGrid: React.FC = () => {
  return (
    <div className="image-grid">
      <div className="sponsors-text">SPONSORS</div>
      <div className="logos-container">
        <div className="logo">
          <img src="/images/rhr/hrf_logo.jpg" alt="Human Rights Foundation" />
        </div>
        <div className="logos">
        <img src="/images/rhr/strike_logo.jpg" alt="Strike" />
        <img src="/images/rhr/zeus_logo.jpg" alt="Zeus" />
        </div>
      </div>
      <div className="contact-text">
        <p>Interested in becoming a sponsor?</p>
        <p>Get in touch: <a href="mailto:events@port8333.io?subject=Hot Style Takeover Sponsorship">events@port8333.io</a></p>
      </div>
    </div>
  );
}

const YourPageWithPriceAndName: React.FC = () => {
  return (
    <div className="page-container">
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            overflow-x: hidden; /* Prevent horizontal scrolling */
            background-color: black; /* Ensure the background is black */
          }

          .side-by-side-container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1 0 auto;
            background-color: black;
            padding-bottom: 20px; /* Add padding bottom for spacing */
          }

          .item-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-bottom: 20px;
            margin: 0 5px;
          }

          .item-image {
            width: 100%;
          }

          .item-name, .item-price {
            color: white;
            margin-top: 5px;
            font-family: sans-serif;
            text-align: center;
          }

          .item-name {
            font-size: 14px;
          }

          .item-price {
            font-size: 24px;
          }

          .image-grid {
            background-color: black;
            padding: 20px;
            width: 100%;
            box-sizing: border-box;
          }

          .sponsors-text {
            font-family: sans-serif;
            color: white;
            font-size: 16px;
            text-align: center;
            margin-bottom: 10px;
          }

          .logos-container {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .logo {
            display: flex;
            justify-content: center;
            margin-bottom: 10px;
          }

          .logos img {
            width: 125px; /* Set the desired width */
            height: auto; /* Maintain aspect ratio */
            margin: 5px; /* Optional: add some spacing between logos */
          }

          .grid-image {
            width: auto;
            height: auto;
            margin: 5px;
          }

          .contact-text {
            font-family: sans-serif;
            color: white;
            font-size: 16px;
            text-align: center;
            margin-bottom: 10px;
          }

          @media screen and (max-width: 768px) {
            .side-by-side-container {
              flex-direction: column;
            }

            .grid-image {
              width: 48%; /* Make the images take up almost half the width each */
              margin: 1%; /* Add a small margin to keep them apart */
            }
          }

          @media screen and (min-width: 769px) {
            .grid-image {
              width: 48%; /* Make the images take up almost half the width each */
              /* width: 23%;  Make the images take up about a quarter of the width each */
              margin: 1%; /* Add a small margin to keep them apart */
            }
          }

          a {
            color: white; /* Set text color to white */
            text-decoration: none; /* Remove underline */
          }
          
          a:hover {
            color: orange; /* Change text color to orange on hover */
          }
        `}
      </style>
      <SideBySideImagesWithPrice 
        imageUrl1="/images/rhr/hotstyle-ga.jpg"
        imageUrl2="/images/rhr/hotstyle-vip-sodl.jpg"
        linkUrl1="https://pay.zaprite.com/pl_Ss72YiBcvL"
        linkUrl2="#"
        itemName1="GA HOT STYLE - JULY 25TH"
        itemName2="VIP HOT STYLE - JULY 25TH"
      />
      <ImageGrid />
    </div>
  );
}

export default YourPageWithPriceAndName;
