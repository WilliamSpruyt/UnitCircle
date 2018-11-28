import React, { Component } from "react";

import "./App.css";
import ReactTable from "react-table";
import "react-table/react-table.css";
export default class TrigTablePlus extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div >
        <table className="thetaTable">
          <tbody>
            <tr>
              <td>Radians </td>
              {this.props.soSpecial ? (
                <td>
                  <div className="special"  onClick={event => {
                      this.props.handleClick(event, "ang");
                    }}>{
                      (this.props.angle.angle < 0 ? "-" : "") +
                      (this.props.frac.n !== 1 ? this.props.frac.n : "") +
                      this.props.specialText.pi +
                      (this.props.frac.d !== 1 ? "/" + this.props.frac.d : "")
                    }</div></td>
              ) : (
                <td>
                  <div className="trigForm" onClick={event => {
                      this.props.handleClick(event, "Radians");
                    }}>{this.props.angle.angle}</div>
                     
                </td>
              )}
            </tr>
            <tr>
              <td>Degrees </td>
              <td>
                <div className="trigForm" onClick={event => {
                    this.props.handleClick(event, "Degrees");
                  }}>{this.props.angle.angleInDegrees}</div>
                  
                   
              </td>
            </tr>
            <tr>
              <td >
                <i >s.f. {this.props.sigFigs} </i>
              </td>
              <td>
                <input
                  className="sigs"
                  type="range"
                  id="sigFigs"
                  name="sigFigs"
                  value={this.props.sigFigs}
                  onChange={event => {
                    this.props.handleChange(event, "sf");
                  }}
                  min="1"
                  max="12"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className='trigTable'>
        <table>
          <tbody>
            {this.props.soSpecial ? (
              <tr onClick={event => {
                this.props.handleClick(event, "Sine");
              }}>
                <td className="sin">Sine </td>
                <td >
                  <div className="special" >{this.props.soSpecial.sin}</div>
                     
                   

                </td>
              </tr>
            ) : (
              <tr onClick={event => {
                this.props.handleClick(event, "Sine");
              }}>
                <td className="sin" >Sine </td>
                <td>
                  <div className="trigForm" >{this.props.angle.sine}</div>
                   
                </td>
              </tr>
            )}

             {this.props.soSpecial ? (
              <tr onClick={event => {
                this.props.handleClick(event, "Cosine");
              }}>
                <td className="cos" >cosine </td>
                <td >
                  <div className="special" >{this.props.soSpecial.cos}</div>
                     
                   

                </td>
              </tr>
            ) : (
              <tr onClick={event => {
                this.props.handleClick(event, "Cosine");
              }}>
                <td className="cos" >Cosine </td>
                <td>
                  <div className="trigForm" >{this.props.angle.cosine}</div>
                   
                </td>
              </tr>
            )}
           

            {this.props.soSpecial ? (
              <tr onClick={event => {
                this.props.handleClick(event, "Tangent");
              }}>
                <td className="tan" >Tangent </td>
                <td>
                  <div className={(Math.abs(this.props.angle.cosine)>0.0001)?"special":"infinity"} >{this.props.soSpecial.tan}</div>
                     
                   
                    
                </td>
              </tr>
            ) : (
              <tr onClick={event => {
                this.props.handleClick(event, "Tangent");
              }}>
                <td className="tan" >Tangent </td>
                <td>
                  <div className="trigForm"  >{(Math.abs(this.props.angle.tangent)>=10000)?"undefined":this.props.angle.tangent}</div>
                     
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <table>
          <tbody>
          {this.props.soSpecial ? (
              <tr onClick={event => {
                this.props.handleClick(event, "Cosecant");
              }}>
                <td className="csc" >Cosecant </td>
                <td>
                  <div className={(Math.abs(this.props.angle.sine)>0.0001)?"special":"infinity"} >{this.props.soSpecial.cosec}</div>
                     
                </td>
              </tr>
            ) : (
              <tr onClick={event => {
                this.props.handleClick(event, "Cosecant");
              }}>
                <td className="csc" >Cosecant </td>
                <td>
                  <div className="trigForm"  >{(Math.abs(this.props.angle.cosecant)>=10000)?"undefined":this.props.angle.cosecant}</div>
                     
                </td>
              </tr>
            )}
           {this.props.soSpecial ? (
              <tr onClick={event => {
                this.props.handleClick(event, "Secant");
              }}>
                <td className="sec"  >Secant </td>
                <td>
                  <div
                   className={(Math.abs(this.props.angle.cosine)>0.0001)?"special":"infinity"}>{this.props.soSpecial.sec}</div>
                   
                     
                </td>
              </tr>
            ) : (
              <tr onClick={event => {
                this.props.handleClick(event, "Secant");
              }}>
                <td className="sec" >Secant </td>
                <td>
                  <div  className="trigForm" >{(Math.abs(this.props.angle.secant)>=10000)?"undefined":this.props.angle.secant}</div>
                  
                </td>
              </tr>
            )}
             {this.props.soSpecial ? (
              <tr onClick={event => {
                this.props.handleClick(event, "Cotangent");
              }}>
                <td className="cot" >Cotangent </td>
                <td>
                  <div className={(Math.abs(this.props.angle.sine)>0.0001)?"special":"infinity"}>{this.props.soSpecial.cot}</div>
                     
                </td>
              </tr>
            ) : (
              <tr onClick={event => {
                this.props.handleClick(event, "Cotangent");
              }}>
                <td className="cot" >Cotangent </td>
                <td>
                  <div className="trigForm"  >{(Math.abs(this.props.angle.cotangent)>=10000)?"undefined":this.props.angle.cotangent}</div>
                   
                </td>
              </tr>
            )}
          </tbody>
        </table></div>
      </div>
    );
  }
}
