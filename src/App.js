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
var ci = localStorage.getItem("curr_bgimg");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgimg:ci,
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
        <div class="container">
          <div class="row">
            <div class="col-3 mb-5 carimg" data-toggle="tooltip" data-placement="top" title="Pininfarina Ferrari" onClick={() => this.ChangeBGStyle("images/full/2880-1800-crop-ferrari-250-gt-coupe-pininfarina-ii-c804316082018194649_1.jpg")}>
              <img src="images/thumbs/2880-1800-crop-ferrari-250-gt-coupe-pininfarina-ii-c804316082018194649_1.jpg" width="100%"alt="" />
            </div>
            <div class="col-3 mb-5 carimg" data-toggle="tooltip" data-placement="top" title="Pininfarina Sintesi" onClick={() => this.ChangeBGStyle("images/full/001Sintesi.jpg")}>
              <img src="images/thumbs/001Sintesi.jpg" width="100%"alt="" />
            </div>
            <div class="col-3 mb-5 carimg" data-toggle="tooltip" data-placement="top" title="Gunther Werks Porsche 400R" onClick={() => this.ChangeBGStyle("images/full/8e23fea18e5f18fec80320f805088260.jpg")}>
              <img src="images/thumbs/8e23fea18e5f18fec80320f805088260.jpg" width="100%"alt="" />
            </div>
            <div class="col-3 mb-5 carimg" data-toggle="tooltip" data-placement="top" title="Mission E next to '48 356 Roadster" onClick={() => this.ChangeBGStyle("images/full/12096.jpg")}>
              <img src="images/thumbs/12096.jpg" width="100%"alt="" />
            </div>
            <div class="col-3 mb-5 carimg" data-toggle="tooltip" data-placement="top" title="GTO Judge" onClick={() => this.ChangeBGStyle("images/full/394096_70b74c24a99a_hd.jpg")}>
              <img src="images/thumbs/394096_70b74c24a99a_hd.jpg" width="100%"alt="" />
            </div>
            <div class="col-3 mb-5 carimg" data-toggle="tooltip" data-placement="top" title="Rivian Electric Truck" onClick={() => this.ChangeBGStyle("images/full/105742745-15502471379612018_11_r1t_1.jpg")}>
              <img src="images/thumbs/105742745-15502471379612018_11_r1t_1.jpg" width="100%"alt="" />
            </div>
            <div class="col-3 mb-5 carimg" data-toggle="tooltip" data-placement="top" title="Lamborghini Miura" onClick={() => this.ChangeBGStyle("images/full/160111123507-lamborghini-miura-02.jpg")}>
              <img src="images/thumbs/160111123507-lamborghini-miura-02.jpg" width="100%"alt="" />
            </div>
            <div class="col-3 mb-5 carimg" data-toggle="tooltip" data-placement="top" title="Pininfarina Battista" onClick={() => this.ChangeBGStyle("images/full/bianca-2.jpg")}>
              <img src="images/thumbs/bianca-2.jpg" width="100%"alt="" />
            </div>
            <div class="col-3 mb-5 carimg" data-toggle="tooltip" data-placement="top" title="Morgan 3 Wheelers" onClick={() => this.ChangeBGStyle("images/full/Lori-2015-Morgan-Three-Wheeler-05.jpg")}>
              <img src="images/thumbs/Lori-2015-Morgan-Three-Wheeler-05.jpg" width="100%"alt="" />
            </div>
            <div class="col-3 mb-5 carimg" data-toggle="tooltip" data-placement="top" title="McLarens" onClick={() => this.ChangeBGStyle("images/full/Mclaren-720s.jpg")}>
              <img src="images/thumbs/Mclaren-720s.jpg" width="100%"alt="" />
            </div>
            <div class="col-3 mb-5 carimg" data-toggle="tooltip" data-placement="top" title="1971 Hemi Cuda" onClick={() => this.ChangeBGStyle("images/full/plymouth-cuda-hero-image.jpg")}>
              <img src="images/thumbs/plymouth-cuda-hero-image.jpg" width="100%"alt="" />
            </div>
            <div class="col-3 mb-5 carimg" data-toggle="tooltip" data-placement="top" title="Porsche 356 Roadster Convertible" onClick={() => this.ChangeBGStyle("images/full/Porsche+356+1600+Super-2.jpg")}>
              <img src="images/thumbs/Porsche+356+1600+Super-2.jpg" width="100%"alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
