import * as React from 'react';
import { render } from 'react-dom';
import { Redirect, HashRouter } from 'react-router-dom';
import { createInstance, Piral, SetComponent, SetRoute, SetError } from 'piral-core';
import { NotFoundError } from './components/NotFoundError';
const instance = createInstance({
  availablePilets: [],
  extendApi: [],
  requestPilets() {
    return Promise.resolve([]);
  },
});

const app = (
  <Piral instance={instance}>
    <SetComponent name="Router" component={HashRouter} />
    <SetError type="not_found" component={NotFoundError} key="not_found" />
  </Piral>
);
render(app, document.querySelector('#app'));

if (process.env.DEBUG_PILET !== undefined) {
  // sessionStorage.setItem('dbg:hard-refresh', 'on');
}
