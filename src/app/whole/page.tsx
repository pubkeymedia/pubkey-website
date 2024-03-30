import React from 'react';

const Whole: React.FC = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundImage: `url('/images/whole/whole_bg.jpg')`,
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
          width: '395px',
          height: '106px',
        }}>
          <img alt="Logo" src="/images/whole/whole_logo.png" />
        </div>
        <div className="button-container" style={{
          position: 'absolute',
          top: '65%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}>
          <a href="https://www.youtube.com/watch?v=3cJwVT1RyWE">
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
              GET WHOLE
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Whole;