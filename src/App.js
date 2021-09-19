
import React from 'react'
import { Link, Switch, Route } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import './App.css';
import { Navbar, Exchanges, HomePage, CryptoDetails, Cryptocurrencies, News } from './components';

function App() {
    return (
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/exchanges">
                  <Exchanges />
                </Route>
                <Route exact path="/cryptocurrencies">
                  <Cryptocurrencies />
                </Route>
                <Route exact path="/crypto/:coinId">
                  <CryptoDetails />
                </Route>
                <Route exact path="/news">
                  <News />
                </Route>
              </Switch>
            </div>
          </Layout>
        </div>
        <div className="footer"></div>
      </div>
    );
}

export default App
