import React from 'react';

const Whole: React.FC = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="mobile-web-app-capable" content="yes" />
        <title>WHOLE: A dating experience exclusively for those who own one whole bitcoin</title>
        <style>{`
          body {
            background-color: black;
            background: url('/images/whole/whole_bg.jpg') no-repeat center center fixed;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
            background-size: cover;
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
        <div className="logo"><img alt="Logo" src="/images/whole/whole_logo.png" /></div>
        <div className="button-container">
          <a href="https://www.youtube.com/watch?v=3cJwVT1RyWE"><button>GET WHOLE</button></a>
        </div>
      </body>
    </html>
  );
}

export default Whole;