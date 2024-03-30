import React from 'react';

const Whole: React.FC = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>WHOLE: A dating experience exclusively for those who own one whole bitcoin</title>
        <style>{`
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
          }
          .full-screen-bg {
            width: 100%;
            height: 100%;
            background-image: url('https://pubkey.bar/images/whole/whole_bg.jpg');
            background-size: cover;
            background-position: center;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
          }
          .content {
            text-align: center;
            color: white;
            font-size: 24px;
          }
          .logo {
            position: absolute;
            top: 30%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 395px;
            height: 106px;
          }
          .button-container {
            position: absolute;
            top: 65%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          button {
            font-family: Arial, sans-serif;
            font-style: bold;
            background-color: #F66E22;
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            display: inline-block;
            font-size: 14px;
            border-radius: 5px;
            margin: 0 auto;
          }
        `}</style>
      </head>
      <body>
        <div className="full-screen-bg">
          <div className="content">
            <div className="logo"><img alt="Logo" src="https://pubkey.bar/images/whole/whole_logo.png" /></div>
            <div className="button-container">
              <a href="https://www.youtube.com/watch?v=3cJwVT1RyWE"><button>GET WHOLE</button></a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default Whole;