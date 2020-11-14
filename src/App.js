import React from 'react';
import './App.css';

import Home from './pages/Home';
import Properties from './pages/Properties';
import SingleProperty from './pages/SingleProperty';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Blogs from './pages/Blogs';
import Error from './pages/Error';

import {Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/properties/" component={Properties} />
      <Route exact path="/properties/:slug" component={SingleProperty} />
      <Route exact path="/about-us" component={AboutUs} />
      <Route exact path="/contact-us" component={ContactUs} />
      <Route exact path="/blogs" component={Blogs} />
      <Route component={Error} />
    </Switch>
    </>
  );
}

export default App;
