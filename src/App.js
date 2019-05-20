import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';


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
      paths:[
        '2880-1800-crop-ferrari-250-gt-coupe-pininfarina-ii-c804316082018194649_1.jpg',
        '001Sintesi.jpg',
        '8e23fea18e5f18fec80320f805088260.jpg',
        '12096.jpg',
        '394096_70b74c24a99a_hd.jpg',
        '105742745-15502471379612018_11_r1t_1.jpg',
        '160111123507-lamborghini-miura-02.jpg',
        'bianca-2.jpg',
        'Lori-2015-Morgan-Three-Wheeler-05.jpg',
        'Mclaren-720s.jpg',
        'plymouth-cuda-hero-image.jpg',
        'Porsche+356+1600+Super-2.jpg'
      ],
    };
  }

  componentDidMount() {
    $('[data-toggle="tooltip"]').tooltip();
  }
  
  componentDidUpdate() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  ChangeBGStyle = (imgurl) => {
    url = imgurl;
    localStorage.setItem("curr_bgimg", "url("+url+")");
    this.setState({
      bgimg:"url("+url+")"
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
          <PageTitle title="Nope.io" />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.<br />
        </p>
        <div className="container">
          <div className="row">
          {this.state.paths.map((item, i) => (
            <div key={i} className="col-3 mb-5 carimg" data-toggle="tooltip" data-placement="top" title="Pininfarina Ferrari" onClick={() => this.ChangeBGStyle(`images/full/${item}`)}>
              <img src={`images/thumbs/${item}`} width="100%"alt="" />
            </div>
          ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
