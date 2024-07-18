// App.js
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ManufacturerList from './ManufacturerList';
import ManufacturerDetail from './ManufacturerDetail';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ManufacturerList} />
        <Route path="/manufacturers/:id" component={ManufacturerDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;