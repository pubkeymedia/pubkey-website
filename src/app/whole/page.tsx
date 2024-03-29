var MyClass = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="yes" name="mobile-web-app-capable" />
        <title>WHOLE: A dating experience exclusively for those who own one whole bitcoin</title>
        <style dangerouslySetInnerHTML={{__html: "\n  body {\n   background-color: black;\n   background: url('/images/whole/whole_bg.jpg') no-repeat center center fixed;\n   -webkit-background-size: cover;\n   -moz-background-size: cover;\n   -o-background-size: cover;\n   background-size: cover;\n   background-size: cover;\n  }\n\n  .logo {\n   position: absolute;\n   top: 30%;\n   left: 50%;\n   transform: translate(-50%, -50%);\n   width: 395px;\n   height: 106px;\n  }\n\n  .button-container {\n   position: absolute;\n   top: 65%;\n   left: 50%;\n   transform: translate(-50%, -50%);\n  }\n\n  button {\n   font-family: Arial, sans-serif;\n   font-style: bold;\n   background-color: #F66E22;\n   border: none;\n   color: white;\n   padding: 15px\n\n  32px;\n   text-align: center;\n   display: inline-block;\n   font-size: 14px;\n   border-radius: 5px;\n   margin: 0 auto;\n  }\n  " }} />
        <div className="logo"><img alt="Logo" src="/images/whole/whole_logo.png" /></div>
        <div className="button-container">
          <a href="https://www.youtube.com/watch?v=3cJwVT1RyWE" target="_blank"><button>GET WHOLE</button></a>
        </div>
      </div>
    );
  }
});