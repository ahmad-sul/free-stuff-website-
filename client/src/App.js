import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Navbar from './components/Navbar/Navbar';
import FirstPostItem from './components/PostItem';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Categories from './components/Categories/Categories';
import SingleItem from './components/SingleItem/SingleItem';
import AllItems from './components/AllItems/AllItems';
import axios from 'axios';
import baseURL from '../src/config/baseUrl';
import Accordion from './components/Accordion/Accordion';
// import UserForm from "./components/PostItem/UserForm";
import Carousel from './components/Carousel';
import PostItemmm from './components/StepPages/PostItemmm';

function App() {
  const [user, setUser] = useState();

  const getUser = async () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      const userData = await axios.get(baseURL + '/users/' + userId);
      console.log(userData.data);
      setUser(userData.data);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar user={user} />
        {/* <Banner /> */}
        <Support />
        <Categories />
        {/* <SingleItem /> */}
        {/* <UserForm /> */}
        {/* <AllItems /> */}
        {/* <Accordion /> */}
        {/* <Carousel /> */}

        <Switch>
          <Route exact path="/banner" component={Banner} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />

          <Route exact path="/allitems" component={AllItems} />
          {/* <Route exact path="/" component={UserForm} /> */}

          <Route exact path="/postItemmm" component={PostItemmm} />

          <Route exact path="/carousel" component={Carousel} />

          {/* <Route exact path="/singleItem/:id" component={SingleItem} /> */}
        </Switch>
        {/* <FirstPostItem/> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
