import React from 'react';

export function Container({ children }) {
  return (
    <div className='container'>
      {children}
    </div>
  );
}

export function Row({ children }) {
  return (
    <div className='row'>
      {children}
    </div>
  );
}

export function Col({ size, children }) {
  return (
    <div className={`col ` + size}>
      {children}
    </div>
  );
}