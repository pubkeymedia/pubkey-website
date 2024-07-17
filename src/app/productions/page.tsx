import React from 'react';

const Productions: React.FC = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#000',  // Setting the page background color to black
      backgroundImage: `url('/images/productions/pubkey_shrine_bg.gif')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div className="content" style={{
        textAlign: 'center',
        color: 'white',
        fontSize: '24px',
      }}>
        <div className="logo" style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '338px',
        }}>
          <img alt="Logo" src="/images/productions/pubkey_logo_shadow.png" />
        </div>
        <div>
          <h2 style={{ fontFamily: 'Arial, sans-serif' }}>
            <a href="mailto:events@port8333.io" style={{ color: 'orange', textDecoration: 'none' }}>events@port8333.io</a>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Productions;
