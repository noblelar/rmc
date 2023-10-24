// components/Welcome.js
import React from 'react';

const Welcome = () => {
  const containerStyle = {
    backgroundImage: 'url("/background-image.jpg")',
    backgroundSize: 'cover',
    backgroundColor: '#1e81b0',
  };

  return (
    <section className="text-white py-8 relative" style={containerStyle}>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">
          Welcome<span className="font-normal"> to </span>
          Rayleigh Methodist Church
        </h2>
      </div>
    </section>
  );
};

export default Welcome;
