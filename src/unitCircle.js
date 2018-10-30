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
        
        <line strokeWidth="3" stroke="green" 
        x1={this.props.width/2}  
        y1={this.props.height/2} 
        x2={this.props.width/2+(this.props.r*this.props.angle.cosine)} 
        y2={this.props.height/2}  />

        {(Math.abs(this.props.angle.tangent)!==this.props.huge) && <line strokeWidth="3" stroke="blue" 
        x1={this.props.width/2+(this.props.r)}  
        y1={this.props.height/2} 
        x2={this.props.width/2+(this.props.r)}
        y2={this.props.height/2-(this.props.r*this.props.angle.tangent)}  />}

        {Math.abs(this.props.angle.tangent)===this.props.huge && <line strokeWidth="1" stroke="grey" 
        x1={this.props.width/2+(this.props.r)}  
        y1={this.props.height/2} 
        x2={this.props.width/2+(this.props.r)}
        y2={this.props.height/2-(this.props.r*this.props.angle.tangent)}  />}

        {Math.abs(this.props.angle.cotangent)!==this.props.huge && <line strokeWidth="3" stroke="purple" 
        x1={this.props.width/2}  
        y1={this.props.height/2-(this.props.r)}
        x2={this.props.width/2+(this.props.r*this.props.angle.cotangent)}
        y2={this.props.height/2-(this.props.r)}  />}

         {Math.abs(this.props.angle.cotangent)===this.props.huge && <line strokeWidth="1" stroke="grey" 
        x1={this.props.width/2}  
        y1={this.props.height/2-(this.props.r)}
        x2={this.props.width/2+(this.props.r*this.props.angle.cotangent)}
        y2={this.props.height/2-(this.props.r)}  />}
        
        
        {Math.abs(this.props.angle.cosecant)!==this.props.huge &&<line strokeWidth="3" stroke="brown" 
        x1={this.props.width/2} 
        y1={this.props.height/2} 
        x2={this.props.width/2+(this.props.r*this.props.angle.cosecant)*this.props.angle.cosine} 
        y2={this.props.height/2-((this.props.r*this.props.angle.cosecant)
        *this.props.angle.sine)}   />}

        {Math.abs(this.props.angle.cosecant)===this.props.huge &&<line strokeWidth="1" stroke="grey" 
        x1={this.props.width/2} 
        y1={this.props.height/2} 
        x2={this.props.width/2+(this.props.r*this.props.angle.cosecant)*this.props.angle.cosine} 
        y2={this.props.height/2-((this.props.r*this.props.angle.cosecant)
        *this.props.angle.sine)}   />}
        
        {Math.abs(this.props.angle.secant)!==this.props.huge &&<line strokeWidth="2" stroke="orange" 
        x1={this.props.width/2} 
        y1={this.props.height/2} 
        x2={this.props.width/2+((this.props.r*this.props.angle.secant))*this.props.angle.cosine} 
        y2={this.props.height/2-((this.props.r*this.props.angle.secant)*this.props.angle.sine)}   />}

        {Math.abs(this.props.angle.secant)===this.props.huge &&<line strokeWidth="1" stroke="grey" 
        x1={this.props.width/2} 
        y1={this.props.height/2} 
        x2={this.props.width/2+((this.props.r*this.props.angle.secant))*this.props.angle.cosine} 
        y2={this.props.height/2-((this.props.r*this.props.angle.secant)*this.props.angle.sine)}   />}
        
        {(this.props.angle.angleInDegrees%30===0 || this.props.angle.angleInDegrees%45===0)?<svg><ellipse
          strokeWidth="1"
          stroke="none"
          fill="red"
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
           
        />
        
        
         
         
        </svg>:<div> </div>
        }
         
      </svg>
    );
  }
  
}

 