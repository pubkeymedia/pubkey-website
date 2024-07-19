import React from 'react';

const SideBySideImagesWithPrice: React.FC<{ imageUrl1: string, linkUrl1: string, itemName1: string }> = ({ imageUrl1, linkUrl1, itemName1 }) => {
  return (
    <div className="side-by-side-container">
      <div className="item-container">
        <a href={linkUrl1} target="_blank" rel="noopener noreferrer">
          <img src={imageUrl1} alt="Image 1" className="item-image smaller-image" />
        </a>
        <div className="item-name">{itemName1}</div>
        <div className="item-price">
          <a href={linkUrl1} target="_blank" rel="noopener noreferrer">
            <div className="button-container">
              <button style={{
                fontFamily: 'Arial, sans-serif',
                fontStyle: 'bold',
                backgroundColor: '#F66E22',
                border: 'none',
                color: 'white',
                padding: '15px 32px',
                textAlign: 'center',
                display: 'inline-block',
                fontSize: '14px',
                borderRadius: '5px',
                margin: '0 auto',
              }}>
                <b>$50 STILL AVAILABLE</b>
              </button>
            </div>
          </a>
        </div>
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
        <p>Get in touch: <a href="mailto:events@port8333.io?subject=Hot Style Takeover Sponsorship"><b>events@port8333.io</b></a></p>
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
            align-items: flex-start; /* Align items to the top */
            flex: 1 0 auto;
            background-color: black;
            padding-top: 20px; /* Adjust padding for top spacing */
          }

          .item-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 5px;
            text-align: center; /* Center text */
          }

          .item-image {
            width: 50%; /* Make the image 50% smaller */
          }

          .item-name, .item-price {
            color: white;
            margin-top: 5px;
            font-family: sans-serif;
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
            margin: 50px 0 10px 0; /* Add 50px of space above and 10px below */
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
        linkUrl1="https://pay.zaprite.com/pl_Ss72YiBcvL"
        itemName1="GA HOT STYLE - JULY 25TH"
      />
      <ImageGrid />
    </div>
  );
}

export default YourPageWithPriceAndName;
