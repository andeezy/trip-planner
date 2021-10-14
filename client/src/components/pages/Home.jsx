import React, { useState } from 'react';
import NavBar from '../NavBar.jsx';
import SideBar from '../SideBar.jsx';
import Main from '../main';
import InfoSection from '../InfoSection';
import { homeObjOne, homeObjTwo } from '../InfoSection/Data.js';
import Services from '../Services';
import axios from 'axios';
import BreweriesList from '../Breweries/BreweriesList.jsx';
// import Footer from './Footer';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      breweries: [],
      isOpen: false,
    }
    this.onToggle = this.onToggle.bind(this);
  }
  // const[isOpen, setIsOpen] = useState(false);

  getCity(city) {
    axios.get(`/brewery/${city}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          breweries: res.data,
          city: '',
        });
      })
      .catch((err) => console.log(err));
  }
  getRequest() {
    axios.get('/breweries')
      .then((res) => {
        console.log(res.data);
        this.setState({
          breweries: res.data
        });
      })
      .catch((err) => console.log(err));
  }

  onClick(name, city) {
    // console.log('Click');
    axios.get(`/breweries/${name}/${city}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          breweries: res.data,
          name: '',
          city: '',
        });
      })
      .catch((err) => console.log(err));
  }

  onToggle() { this.setState({ isOpen: !this.state.isOpen }) }

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // }
  render() {
    const { isOpen, breweries } = this.state;
    return (
      <>
        <SideBar isOpen={isOpen} toggle={this.onToggle} />
        <NavBar toggle={this.onToggle} getRequest={this.getRequest.bind(this)} />
        <Main onClick={this.onClick.bind(this)} getCity={this.getCity.bind(this)} />
        <InfoSection {...homeObjOne} />
        <BreweriesList breweries={breweries} />
        {/* <Services /> */}
        {/* <Footer /> */}
      </>
    )
  }
}

export default Home;