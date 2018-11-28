import React, { Component } from "react";

import "./App.css";

export default class UnitCircle extends React.Component {
  
   constructor(props) {
    super(props);
    
   }
   componentDidMount(){
    
   }
  render() {
    return (
      <svg
        version="1.1"
        onTouchStart={(e)=>{console.log(e);this.props.handleDotDown(e)}}
        xmlns="http://www.w3.org/2000/svg"
        width={this.props.width}
        height={this.props.height}
        strokeLinecap="round"
         
      > 
     

        <line strokeWidth="0.5" stroke="black" 
        x1={this.props.width/2} 
        y1={this.props.height} 
        x2={this.props.width/2} 
        y2={0}/>

         <line strokeWidth="1" stroke="black" 
        x1={this.props.width/2} 
        y1={0} 
        x2={this.props.width/2+5} 
        y2={5}/>

         <line strokeWidth="1" stroke="black" 
        x1={(this.props.width/2)+(this.props.r*2)} 
        y1={(this.props.height/2)-5}
        x2={(this.props.width/2)+this.props.r*2}  
        y2={5+this.props.height/2}/>

        <line strokeWidth="1" stroke="black" 
        x1={(this.props.width/2)-(this.props.r*2)} 
        y1={(this.props.height/2)-5}
        x2={(this.props.width/2)-this.props.r*2}  
        y2={5+this.props.height/2}/>

         <line strokeWidth="1" stroke="black" 
        x1={(this.props.width/2)+(this.props.r)} 
        y1={(this.props.height/2)-5}
        x2={(this.props.width/2)+this.props.r}  
        y2={5+this.props.height/2}/>

        <line strokeWidth="1" stroke="black" 
        x1={(this.props.width/2)-(this.props.r)} 
        y1={(this.props.height/2)-5}
        x2={(this.props.width/2)-this.props.r}  
        y2={5+this.props.height/2}/>

        <line strokeWidth="1" stroke="black" 
        x1={(this.props.width/2)-5} 
        y1={(this.props.height/2)-(this.props.r*2)} 
        x2={(this.props.width/2)+5}  
        y2={(this.props.height/2)-(this.props.r*2)} />

        <line strokeWidth="1" stroke="black" 
        x1={(this.props.width/2)-5} 
        y1={(this.props.height/2)+(this.props.r*2)} 
        x2={(this.props.width/2)+5}  
        y2={(this.props.height/2)+(this.props.r*2)} />


         <line strokeWidth="1" stroke="black" 
        x1={this.props.width/2} 
        y1={0} 
        x2={this.props.width/2-5} 
        y2={5}/>

         <line strokeWidth="1" stroke="black" 
        x1={(this.props.width/2)+this.props.r*3} 
        y1={this.props.height/2} 
        x2={((this.props.width/2)+this.props.r*3)-5} 
        y2={this.props.height/2+5}/>

        <line strokeWidth="1" stroke="black" 
        x1={(this.props.width/2)+this.props.r*3} 
        y1={this.props.height/2} 
        x2={((this.props.width/2)+this.props.r*3)-5} 
        y2={this.props.height/2-5}/>

         <line strokeWidth="1" stroke="black" 
        x1={this.props.width/2} 
        y1={0} 
        x2={this.props.width/2-5} 
        y2={5}/>

        <line strokeWidth="0.5" stroke="black" 
        x1={(this.props.width/2)-this.props.r*3} 
        y1={this.props.height/2} 
        x2={(this.props.width/2)+this.props.r*3} 
        y2={this.props.height/2}/>

         

        <line strokeWidth="1" stroke="black" 
        x1={this.props.width/2} 
        y1={this.props.height/2} 
        x2={this.props.width/2+(this.props.r*this.props.angle.cosine)} 
        y2={this.props.height/2-(this.props.r*this.props.angle.sine)}/>
        
        <ellipse
          strokeWidth="1"
          stroke="black"
          fill="none"
          cx={this.props.width/2}
          cy={this.props.height/2}
          rx={this.props.r}
          ry={this.props.r}
           
        />
         
        <path strokeWidth="1"
          stroke="black"
          fill="none" d={this.props.arc} />

         {this.props.angle.angleInDegrees%360>12 && <svg><line strokeWidth="1" stroke="black" 
        
        x1={this.props.width/2+((this.props.r/5)*this.props.angle.cosine)} 
        y1={this.props.height/2-((this.props.r/5)*this.props.angle.sine)}    
        x2={this.props.width/2+((this.props.r/6)*(Math.cos(this.props.angle.angle-0.3)))} 
        y2={this.props.height/2-((this.props.r/6)*(Math.sin(this.props.angle.angle-0.3)))}  />

        <line strokeWidth="1" stroke="black" 
        
        x1={this.props.width/2+((this.props.r/5)*this.props.angle.cosine)} 
        y1={this.props.height/2-((this.props.r/5)*this.props.angle.sine)}    
        x2={this.props.width/2+((this.props.r*0.23333)*(Math.cos(this.props.angle.angle-0.3)))} 
        y2={this.props.height/2-((this.props.r*0.23333)*(Math.sin(this.props.angle.angle-0.3)))}  /></svg>}

        {this.props.angle.angleInDegrees%360<-12 && <svg><line strokeWidth="1" stroke="black" 
        
        x1={this.props.width/2+((this.props.r/5)*this.props.angle.cosine)} 
        y1={this.props.height/2-((this.props.r/5)*this.props.angle.sine)}    
        x2={this.props.width/2+((this.props.r/6)*(Math.cos(this.props.angle.angle+0.3)))} 
        y2={this.props.height/2-((this.props.r/6)*(Math.sin(this.props.angle.angle+0.3)))}  />

        <line strokeWidth="1" stroke="black" 
        
        x1={this.props.width/2+((this.props.r/5)*this.props.angle.cosine)} 
        y1={this.props.height/2-((this.props.r/5)*this.props.angle.sine)}    
        x2={this.props.width/2+((this.props.r*0.23333)*(Math.cos(this.props.angle.angle+0.3)))} 
        y2={this.props.height/2-((this.props.r*0.23333)*(Math.sin(this.props.angle.angle+0.3)))}  /></svg>}

        <line strokeWidth="3" stroke="black" 
        x1={this.props.width/2} 
        y1={this.props.height/2} 
        x2={this.props.width/2+(this.props.r*this.props.angle.cosine)} 
        y2={this.props.height/2-(this.props.r*this.props.angle.sine)}   />
         
        <line strokeWidth="3" stroke="red" 
        x1={this.props.width/2+(this.props.r*this.props.angle.cosine)}  
        y1={this.props.height/2-(this.props.r*this.props.angle.sine)} 
        x2={this.props.width/2+(this.props.r*this.props.angle.cosine)} 
        y2={this.props.height/2}   />
        
        
        <line strokeWidth="2" stroke="orange" strokeOpacity={(Math.abs(this.props.angle.secant)<this.props.huge)?"1":"0.4"} 
        x1={this.props.width/2} 
        y1={this.props.height/2} 
        x2={this.props.width/2+((this.props.r*this.props.angle.secant))} 
        y2={this.props.height/2}   />
        
        <line strokeWidth="3" stroke="green" 
        x1={this.props.width/2}  
        y1={this.props.height/2} 
        x2={this.props.width/2+(this.props.r*this.props.angle.cosine)} 
        y2={this.props.height/2}  />

        <line strokeWidth="3" strokeOpacity={(Math.abs(this.props.angle.tangent)<this.props.huge)?"1":"0.3"} stroke="blue" 
         x1={this.props.width/2+(this.props.r*this.props.angle.cosine)} 
         y1={this.props.height/2-(this.props.r*this.props.angle.sine)} 
        x2={this.props.width/2+this.props.r*this.props.angle.secant}
        y2={this.props.height/2}  />

         
        <line strokeWidth="3" stroke="purple" strokeOpacity={(Math.abs(this.props.angle.cotangent)<this.props.huge)?"1":"0.3"} 
         x1={this.props.width/2+(this.props.r*this.props.angle.cosine)} 
         y1={this.props.height/2-(this.props.r*this.props.angle.sine)} 
        x2={this.props.width/2}
        y2={this.props.height/2-this.props.r*this.props.angle.cosecant}  />

         
        
        
        {<line strokeWidth="3" stroke="brown" strokeOpacity={(Math.abs(this.props.angle.cosecant)<this.props.huge)?"1":"0.3"} 
        x1={this.props.width/2} 
        y1={this.props.height/2} 
        x2={this.props.width/2} 
        y2={this.props.height/2-((this.props.r*this.props.angle.cosecant)
         )}   />}

         
        
        
        
        
           />}
        svg><ellipse
          strokeWidth="1"
          stroke="none"
          fill="dark gray"
          onMouseDown={(e)=>{this.props.handleDotDown(e)}}
          onTouchStart={(e)=>{console.log(e);this.props.handleDotDown(e)}} 
          cx={this.props.width/2+(this.props.r*this.props.angle.cosine)} 
          cy={this.props.height/2-(this.props.r*this.props.angle.sine)}
          rx={2}
          ry={2}
           
        />
        {(this.props.angle.angleInDegrees%30===0 || this.props.angle.angleInDegrees%45===0)?<svg><ellipse
          strokeWidth="1"
          stroke="none"
          fill="red"
          onMouseDown={(e)=>{this.props.handleDotDown(e)}}
          onTouchStart={(e)=>{console.log(e);this.props.handleDotDown(e)}}
          cx={this.props.width/2+(this.props.r*this.props.angle.cosine)} 
          cy={this.props.height/2-(this.props.r*this.props.angle.sine)}
          rx={3}
          ry={3}
           
        />

        <ellipse
          strokeWidth="1"
          stroke="none"
          fill="red"
          cx={this.props.width/2+(this.props.r*this.props.angle.cosine)} 
          cy={this.props.height/2-(this.props.r*this.props.angle.sine)}
          rx={3}
          ry={3}
          onMouseDown={(e)=>{this.props.handleDotDown(e)}}
          onTouchStart={(e)=>{this.props.handleDotDown(e)}}
        />
        
       
         
        
        </svg>:<div> </div>
        }
         
      </svg>
    );
  }
  
}

 