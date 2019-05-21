import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import axios from 'axios';


var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;

function PageTitle(props) {
  return <h1>{props.title}</h1>
}

// var cartoggle = true;
var url = '';
var ci = localStorage.getItem("curr_bgimg") ? localStorage.getItem("curr_bgimg") : "url(images/full/2880-1800-crop-ferrari-250-gt-coupe-pininfarina-ii-c804316082018194649_1.jpg)";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgimg:ci,
      paths:['2880-1800-crop-ferrari-250-gt-coupe-pininfarina-ii-c804316082018194649_1.jpg'],
      tooltips:[],
    };
    axios.get(`http://nope.site/gallery`)
    .then(res => {
      var gres = res.data
      var itemsarr = gres.map((item, key) => item.iurl );
      var t = gres.map((title, key) => title.ititle );
      this.setState({ 
        paths: itemsarr,
        tooltips: t,
        title: "Nope.io"
      });
    }) 
  }

  componentDidMount() {
    $('[data-toggle="tooltip"]').tooltip();
  }
  
  componentDidUpdate() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  ChangeBGStyle = (imgurl, title) => {
    url = imgurl;
    localStorage.setItem("curr_bgimg", "url("+url+")");
    this.setState({
      bgimg:"url("+url+")",
      title:title
    });
    //ReactDOM.findDOMNode(this).scrollIntoView();
    var options = 
      {
        duration: 350,
      }
    scroll.scrollToTop(options);
  }

  render() {
    var divStyle = {
      backgroundImage:this.state.bgimg,
      backgroundColor:"#000",
      backgroundPosition:"top",
      backgroundSize:"auto 100%",
      backgroundRepeat:"no-repeat",
      height:"560px"
    }
    return (
      <div className="App">
        <div className="App-header" style={divStyle}>
          <img src={logo} className="App-logo" alt="logo" />
          <PageTitle title={this.state.title} />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.<br />
        </p>
        <div className="container">
          <div className="row">
          {this.state.paths.map((item, i) => (
            <div key={i} className="col-3 mb-5 carimg" data-toggle="tooltip" data-placement="top" data-original-title={this.state.tooltips[i]} onClick={() => this.ChangeBGStyle(`images/full/${item}`, this.state.tooltips[i])}>
              <img src={`images/thumbs/${item}`} width="100%" alt="" />
            </div>
          ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
