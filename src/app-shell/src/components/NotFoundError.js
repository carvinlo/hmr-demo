import * as React from 'react';
// import { Redirect, HashRouter } from 'react-router-dom';

export const NotFoundError = ({ children }) => {
  alert('page not found');
  return <div>page not found</div>;
};
