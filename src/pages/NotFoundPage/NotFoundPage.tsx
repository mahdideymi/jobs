import React from 'react';

export const NotFoundPage: React.FC = () => {
  return (
    <div
      className="login"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}>
      <span style={{ color: 'white', fontSize: 40 }}>404</span>
    </div>
  );
};
