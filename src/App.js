import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UnitCircle from './unitCircle'
import  math from 'mathjs'
import TrigTable from './trigTable';
const EPSILON=0.0001;
  const HUGE=10000;
  const specialText={pi:'\u03C0',radical:"\u221A",theta:"\u03B8"}
  const specialAngles={
    0:{sin:"0",cos:"1"},30:{sin:"1/2",cos:specialText.radical+"3/2"},45:{sin:specialText.radical+"2/2",cos: specialText.radical+"2/2"},60:{sin:specialText.radical+"3/2",cos:"1/2"},90:{sin:"1",cos:"0"},120:{sin:specialText.radical+"3/2",cos:"-1/2"},135:{sin:specialText.radical+"2/2",cos:"-"+ specialText.radical+"2/2"},150:{sin:"1/2",cos:"-"+specialText.radical+"3/2"}, 180:{sin:"0",cos:"-1"},210:{sin:"-1/2",cos:"-"+specialText.radical+"3/2"},225:{sin:"-"+specialText.radical+"2/2",cos:"-"+specialText.radical+"2/2"},240:{cos:"-1/2",sin:"-"+specialText.radical+"3/2"},270:{sin:"-1",cos:"0" },300:{sin:"-"+specialText.radical+"3/2",cos:"-1/2" },315:{sin:"-"+specialText.radical+"2/2",cos:specialText.radical+"2/2"},330:{cos:specialText.radical+"3/2",sin:"-1/2"}
  }
   
  
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radius: 100,
      ang:Math.PI/6,
      sigFigs:3,
      height:600,
      width:1200,
      dragging:false,
      startY:300
       
      
       
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDotDown = this.handleDotDown.bind(this);
    this.handleDotUp = this.handleDotUp.bind(this);
   
  }
  componentWillMount(){
      
  }
  render() {

    return (
      <div className="App" 
     
      onWheel = {(e) => this.rotator(e)}
      onMouseUp={this.handleDotUp}
      onTouchEnd={this.handleDotUp}
      onTouchMove={(e)=>this.touchdragger(e)}
      onMouseMove ={(e)=>this.dragger(e)} >
       
          <UnitCircle handleDotDown={this.handleDotDown} specialText={specialText} frac={math.fraction((this.state.ang/Math.PI))} huge={HUGE} arc={this.describeArc(this.state.width/2,this.state.height/2,(this.state.radius/5),0,(this.state.ang/Math.PI)*180)} height={this.state.height} width={this.state.width} r={this.state.radius} angle={this.trigonomotizor(this.state.ang,EPSILON,HUGE)} />
       
        <TrigTable soSpecial={this.handleSpecial(this.state.ang)}specialAngles={specialAngles} specialText={specialText} frac={math.fraction((this.state.ang/Math.PI))} sigFigs={this.state.sigFigs} huge={HUGE} angle={this.trigonomotizor(this.state.ang,EPSILON,HUGE)} handleChange={this.handleChange}/>
         
      </div>
    );
  }
  
  polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees) * Math.PI / 180.0;
  
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY - (radius * Math.sin(angleInRadians)),
      ang:angleInRadians
    };
  }
  
  describeArc(x, y, radius, endAngle, startAngle){
      
      if(startAngle<0){
      var end = this.polarToCartesian(x, y, radius, endAngle);
      var start = this.polarToCartesian(x, y, radius, startAngle);
      var largeArcFlag = (Math.sin(start.ang)<0)  ? "0" : "1";}
      
      else{ var start = this.polarToCartesian(x, y, radius, endAngle);
        var end = this.polarToCartesian(x, y, radius, startAngle);
        var largeArcFlag = (Math.sin(end.ang)>=0)  ? "0" : "1";}
         
      
      
      var swapFlag = 0;
      var d = [
          "M", start.x, start.y, 
          "A", radius, radius, 0, largeArcFlag, swapFlag, end.x, end.y
      ].join(" ");
       
      return d;       
  }
  trigonomotizor(ang,epsilon,huge){
     
    let sine=this.ranger(Math.sin(ang),epsilon,huge);
    let cosine=this.ranger(Math.cos(ang),epsilon,huge);
    let tangent=this.ranger(Math.tan(ang),epsilon,huge);
    let cosecant=this.ranger(1/Math.sin(ang),epsilon,huge);
    let secant=this.ranger(1/Math.cos(ang),epsilon,huge);
    let cotangent=this.ranger(1/Math.tan(ang),epsilon,huge);
    let angleInDegrees=this.ranger(ang*(180/Math.PI));
    
    return {angle:this.ranger(Number(ang)), angleInDegrees:angleInDegrees ,sine:sine,cosine:cosine,tangent:tangent,cosecant:cosecant,secant:secant,cotangent:cotangent}
  }
  ranger(ele,epsilon,huge){
    if (Math.abs(ele)<epsilon)return 0;
    else if (ele>huge)return huge;
    else if (ele<-huge)return -huge;
    else return Number(ele.toFixed(this.state.sigFigs));
  }
  handleChange(event,id) {
    event.persist();
     
   
    if(this.isNumber(Number(event.target.value))){
    if(id==='ang' ){
    this.setState({ang:event.target.value})}
    if(id==='deg' && event.target.value.length){
    this.setState({ang:event.target.value*(Math.PI/180)})}
    if(id==='sin' && Math.abs(event.target.value)<=1){
      this.setState({ang:Math.asin(event.target.value)})}
    if(id==='cos' && Math.abs(event.target.value)<=1){
        this.setState({ang:Math.acos(event.target.value)})}
    if(id==='tan'){
      this.setState({ang:Math.atan(event.target.value)})}
    if(id==='csc' && Math.abs(event.target.value)>1){
      
      this.setState({ang:math.acsc(event.target.value)})
      }
    if(id==='sec' && Math.abs(event.target.value)>1){
      
      this.setState({ang:math.asec(event.target.value)})
        }
    if(id==='cot') {
       
        this.setState({ang:math.acot(event.target.value)})
            }
            if(id==='sf') {
       
              this.setState({sigFigs:event.target.value})
                  }
    }
  }
  isNumber(value) 
{
   return typeof value === 'number' && isFinite(value);
}
handleSpecial(ang){
  var degrees=this.ranger(ang*(180/Math.PI))
  if(specialAngles[Math.abs(degrees%360)]){
    if(degrees>=0){return specialAngles[degrees%360]}
    else { 
      return specialAngles[360-(Math.abs(degrees%360))]}
  }
return false
}
rotator(e){
  this.setState({ang:this.state.ang-((e.deltaY/53)*Math.PI/96)})
}
handleDotDown(e){
   
  e.persist();
  if(e.touches){
  this.setState({dragging:true,startY:e.touches["0"].clientY})
}
else{this.setState({dragging:true,startY:e.clientY})}}
handleDotUp(){

  this.setState({dragging:false})
}
dragger(e){ 
  e.persist();
  if(this.state.dragging){
  this.setState({ang:this.state.ang-((e.clientY-this.state.startY)*Math.PI/216),startY:e.clientY})}
}
touchdragger(e){
  
  if(this.state.dragging){
    this.setState({ang:this.state.ang-((e.touches["0"].clientY-this.state.startY)*Math.PI/216),startY:e.touches["0"].clientY})}
  }
  
}


export default App;

