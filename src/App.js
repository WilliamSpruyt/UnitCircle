import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import UnitCircle from "./unitCircle";
import UnitCirclePlus from "./unitCirclePlus";
import math from "mathjs";
import TrigTable from "./trigTable";
import ReactModal from 'react-modal';
import TrigTablePlus from "./trigTablePlus";
const EPSILON = 0.0001;
const HUGE = 10000;
const specialText = {
  pi: "\u03C0",
  radical: "\u221A",
  theta: "\u03B8",
  infinity: "\u221E"
};
const specialAngles = {
  0: {
    sin: "0",
    cos: "1",
    tan: "0",
    cosec: specialText.infinity,
    sec: "1",
    cot: specialText.infinity
  },
  30: {
    sin: "1/2",
    cos: specialText.radical + "3/2",
    tan: specialText.radical + "3/3",
    cosec: "2",
    sec: "2" + specialText.radical + "3/3",
    cot: specialText.radical + "3"
  },
  45: {
    sin: specialText.radical + "2/2",
    cos: specialText.radical + "2/2",
    tan: "1",
    cosec: specialText.radical + "2",
    sec: specialText.radical + "2",
    cot: "1"
  },
  60: {
    sin: specialText.radical + "3/2",
    cos: "1/2",
    tan: specialText.radical + "3",
    cosec: "2" + specialText.radical + "3/3",
    sec: "2",
    cot: specialText.radical + "3/3"
  },
  90: {
    sin: "1",
    cos: "0",
    tan: specialText.infinity,
    cosec: "1",
    sec: specialText.infinity,
    cot: "1"
  },
  120: {
    sin: specialText.radical + "3/2",
    cos: "-1/2",
    tan: "-" + specialText.radical + "3",
    cosec: "2" + specialText.radical + "3/3",
    sec: "-2",
    cot: "-" + specialText.radical + "3/3"
  },
  135: {
    sin: specialText.radical + "2/2",
    cos: "-" + specialText.radical + "2/2",
    tan: "-1",
    cosec: specialText.radical + "2",
    sec: "-" + specialText.radical + "2",
    cot: "-1"
  },
  150: {
    sin: "1/2",
    cos: "-" + specialText.radical + "3/2",
    tan: "-" + specialText.radical + "3/3",
    cosec: "2" ,
    sec: "-2"+ specialText.radical + "3/3",
    cot: "-" + specialText.radical + "3"
  },
  180: {
    sin: "0",
    cos: "-1",
    tan: "0",
    cosec: specialText.infinity,
    sec: "-1",
    cot: "-"+specialText.infinity
  },
  210: {
    sin: "-1/2",
    cos: "-" + specialText.radical + "3/2",
    tan: "-"+specialText.radical + "3/3",
    cosec: "-2",
    sec: "-2" + specialText.radical + "3/3",
    cot:  "-"+specialText.radical + "3"
  },
  225: {
    sin: "-" + specialText.radical + "2/2",
    cos: "-" + specialText.radical + "2/2",
    tan: "1",
    cosec:  "-"+specialText.radical + "2",
    sec:  "-"+specialText.radical + "2",
    cot: "1"
  },
  240: {
    cos: "-1/2",
    sin: "-" + specialText.radical + "3/2",
    tan: specialText.radical + "3",
    cosec: "-2" + specialText.radical + "3/3",
    sec: "-2",
    cot:  specialText.radical + "3/3"
  },
  270: {
    sin: "-1",
    cos: "0",
    tan: specialText.infinity,
    cosec: "-1",
    sec: specialText.infinity,
    cot: "1"
  },
  300: {
    sin: "-" + specialText.radical + "3/2",
    cos: "1/2",
    tan: "-"+specialText.radical + "3",
    cosec: "-2" + specialText.radical + "3/3",
    sec: "2",
    cot: "-" + specialText.radical + "3/3"
  },
  315: {
    sin: "-" + specialText.radical + "2/2",
    cos: specialText.radical + "2/2",
    tan: "-1",
    cosec:"-"+ specialText.radical + "2",
    sec: specialText.radical + "2",
    cot: "-1"
  },
  330: {
    cos: specialText.radical + "3/2",
    sin: "-1/2",
    tan: "-"+specialText.radical + "3/3",
    cosec: "-2",
    sec: "2" + specialText.radical + "3/3",
    cot: "-"+specialText.radical + "3"
  }
};
ReactModal.setAppElement('#root')
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radius: 100,
      ang: Math.PI / 6,
      sigFigs: 3,
      height: 600,
      width: 1200,
      dragging: false,
      startY: 300,
      isModalUp:false,
      valInQuestion:"sin", 
      valStr:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDotDown = this.handleDotDown.bind(this);
    this.handleDotUp = this.handleDotUp.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick= this.handleClick.bind(this);
  }
  componentWillMount() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
      radius: window.innerHeight / 6,
      soSpecial:this.handleSpecial(this.state.ang)
    });
  }
  render() {
    return (
      <div
         
        className="App"
        onWheel={e => this.rotator(e)}
        onMouseUp={this.handleDotUp}
        onTouchEnd={this.handleDotUp}
        onTouchMove={e => this.touchdragger(e)}
        onMouseMove={e => this.dragger(e)}
      >
      <ReactModal style={{
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content: {
      height:'25px',
      width :'300px',
      position: 'absolute',
      top: '40px',
      left: '0px',
      right: '40px',
      bottom: '40px',
      border: '1px solid #ccc',
      background: 'rgba(100, 100, 100, 0.75)',
      
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px'
    }
  }} isOpen={this.state.isModalUp}>{this.state.valInQuestion}<input autofocus="true" value={this.state.valStr}
                  onChange={event => {
                    this.setState({valStr:event.target.value})
                  }}/><button onClick={()=>{this.handleSubmit()}}>=</button></ReactModal>
        
        <UnitCirclePlus
          handleDotDown={this.handleDotDown}
          specialText={specialText}
          frac={math.fraction(this.state.ang / Math.PI)}
          huge={HUGE}
          arc={this.describeArc(
            this.state.width / 2,
            this.state.height / 2,
            this.state.radius / 5,
            0,
            (this.state.ang / Math.PI) * 180
          )}
          height={this.state.height}
          width={this.state.width}
          r={this.state.radius}
          angle={this.trigonomotizor(this.state.ang, EPSILON, HUGE)}
        />

        <TrigTable
          inString={this.state.inString}
          soSpecial={this.state.soSpecial}
          specialAngles={specialAngles}
          specialText={specialText}
          frac={math.fraction(this.state.ang / Math.PI)}
          sigFigs={this.state.sigFigs}
          huge={HUGE}
          angle={this.trigonomotizor(this.state.ang, EPSILON, HUGE)}
          handleClick={this.handleClick}
          handleChange={this.handleChange}
          handleBlur={this.handleBlur}
        />
      </div>
    );
  }

  polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees * Math.PI) / 180.0;

    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY - radius * Math.sin(angleInRadians),
      ang: angleInRadians
    };
  }

  describeArc(x, y, radius, endAngle, startAngle) {
    if (startAngle < 0) {
      var end = this.polarToCartesian(x, y, radius, endAngle);
      var start = this.polarToCartesian(x, y, radius, startAngle);
      var largeArcFlag = Math.sin(start.ang) < 0 ? "0" : "1";
    } else {
      var start = this.polarToCartesian(x, y, radius, endAngle);
      var end = this.polarToCartesian(x, y, radius, startAngle);
      var largeArcFlag = Math.sin(end.ang) >= 0 ? "0" : "1";
    }

    var swapFlag = 0;
    var d = [
      "M",
      start.x,
      start.y,
      "A",
      radius,
      radius,
      0,
      largeArcFlag,
      swapFlag,
      end.x,
      end.y
    ].join(" ");

    return d;
  }
  trigonomotizor(ang, epsilon, huge) {
    let sine = this.ranger(Math.sin(ang), epsilon, huge);
    let cosine = this.ranger(Math.cos(ang), epsilon, huge);
    let tangent = this.ranger(Math.tan(ang), epsilon, huge);
    let cosecant = this.ranger(1 / Math.sin(ang), epsilon, huge);
    let secant = this.ranger(1 / Math.cos(ang), epsilon, huge);
    let cotangent = this.ranger(1 / Math.tan(ang), epsilon, huge);
    let angleInDegrees = this.ranger(ang * (180 / Math.PI));

    return {
      angle: this.ranger(Number(ang)),
      angleInDegrees: angleInDegrees,
      sine: sine,
      cosine: cosine,
      tangent: tangent,
      cosecant: cosecant,
      secant: secant,
      cotangent: cotangent
    };
  }
  ranger(ele, epsilon, huge) {
    if (Math.abs(ele) < epsilon) return 0;
    else if (ele > huge) return huge;
    else if (ele < -huge) return -huge;
    else return Number(ele.toFixed(this.state.sigFigs));
  }
  handleChange(event, id) {
    event.persist();
     
      if (id === "sf") {
        this.setState({ sigFigs: event.target.value });
      }
      }

  
  isNumber(value) {
    return typeof value === "number" && isFinite(value);
  }
  handleSpecial(ang) {
    var degrees = this.ranger(ang * (180 / Math.PI));

    if (specialAngles[Math.abs(degrees % 360)]) {
      if (degrees >= 0) {
        return specialAngles[degrees % 360];
      } else {
        return specialAngles[360 - Math.abs(degrees % 360)];
      }
    }
    return false;
  }
  rotator(e) {
    this.setState({ ang: this.state.ang - ((e.deltaY / 53) * Math.PI) / 96 },()=>{this.setState({  soSpecial:this.handleSpecial(this.state.ang) })});
    
  }
  handleDotDown(e) {
    e.persist();
    if (e.touches) {
      this.setState({ dragging: true, startY: e.touches["0"].clientY },()=>{this.setState({  soSpecial:this.handleSpecial(this.state.ang) })});
    } else {
      this.setState({ dragging: true, startY: e.clientY },()=>{this.setState({  soSpecial:this.handleSpecial(this.state.ang) })});
    }
  }
  handleDotUp() {
    this.setState({ dragging: false });
  }
  handleBlur() {
    this.setState({  soSpecial:this.handleSpecial(this.state.ang) })
  }
  dragger(e) {
    e.persist();
    if (this.state.dragging) {
      this.setState({
        ang: this.state.ang - ((e.clientY - this.state.startY) * Math.PI) / 240,
        startY: e.clientY
      },()=>{this.setState({  soSpecial:this.handleSpecial(this.state.ang) })});
    }
  }
  touchdragger(e) {
    if (this.state.dragging) {
      this.setState({
        ang:
          this.state.ang -
          ((e.touches["0"].clientY - this.state.startY) * Math.PI) / 216,
        startY: e.touches["0"].clientY
      },()=>{this.setState({  soSpecial:this.handleSpecial(this.state.ang) })});
    }
  }
  handleClick(event, id) {
    event.persist();
   
  this.setState({isModalUp:true,valInQuestion:id,soSpecial:false})}

handleSubmit(){
  if (this.isNumber(Number(this.state.valStr))) {
    if (this.state.valInQuestion === "Radians") {
      this.setState({ ang: this.state.valStr },()=>{this.setState({  soSpecial:this.handleSpecial(this.state.ang) })});
    }
    if (this.state.valInQuestion=== "Degrees" && this.state.valStr.length) {
      this.setState({ ang: this.state.valStr * (Math.PI / 180) },()=>{this.setState({  soSpecial:this.handleSpecial(this.state.ang) })});
    }
    if (this.state.valInQuestion === "Sine" && Math.abs(this.state.valStr) <= 1) {
      this.setState({ ang: Math.asin(this.state.valStr) },()=>{this.setState({  soSpecial:this.handleSpecial(this.state.ang) })});
    }
    if (this.state.valInQuestion === "Cosine" && Math.abs(this.state.valStr) <= 1) {
      this.setState({ ang: Math.acos(this.state.valStr) },()=>{this.setState({  soSpecial:this.handleSpecial(this.state.ang) })});
    }
    if (this.state.valInQuestion === "Tangent") {
      this.setState({ ang: Math.atan(this.state.valStr) },()=>{this.setState({  soSpecial:this.handleSpecial(this.state.ang) })});
    }
    if (this.state.valInQuestion === "Cosecant" && Math.abs(this.state.valStr) > 1) {
      this.setState({ ang: math.acsc(this.state.valStr) },()=>{this.setState({  soSpecial:this.handleSpecial(this.state.ang) })});
    }
    if (this.state.valInQuestion === "Secant" && Math.abs(this.state.valStr) > 1) {
      this.setState({ ang: math.asec(this.state.valStr) },()=>{this.setState({  soSpecial:this.handleSpecial(this.state.ang) })});
    }
    if (this.state.valInQuestion === "Cotangent") {
      this.setState({ ang: math.acot(this.state.valStr) },()=>{this.setState({  soSpecial:this.handleSpecial(this.state.ang) })});
    }
    
this.setState({isModalUp:false, valStr:""})}
}
}
export default App;
