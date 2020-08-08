import * as React from 'react';
const Home = React.lazy(() => import('./home'));

export function setup(app) {
  app.registerPage('/home', Home);
}
