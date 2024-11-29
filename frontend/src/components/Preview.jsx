import React from 'react';

const Preview = ({ html }) => {
  return (
    <div
      className='preview'
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Preview;
