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
                  <input
                    step={0.001}
                    className="special"
                    type="Text"
                    onFocus={e => e.target.select()}
                    value={
                      (this.props.angle.angle < 0 ? "-" : "") +
                      (this.props.frac.n !== 1 ? this.props.frac.n : "") +
                      this.props.specialText.pi +
                      (this.props.frac.d !== 1 ? "/" + this.props.frac.d : "")
                    }
                    onChange={event => {
                      this.props.handleChange(event, "ang");
                    }}
                  />
                </td>
              ) : (
                <td>
                  <input
                    step={0.001}
                    onBlur={this.props.handleBlur}
                    className="trigForm"
                    type="Number"
                    onFocus={e => e.target.select()}
                    value={this.props.angle.angle}
                    onChange={event => {
                      this.props.handleChange(event, "ang");
                    }}
                  />
                </td>
              )}
            </tr>
            <tr>
              <td>Degrees </td>
              <td>
                <input
                  className="trigForm"
                  onBlur={this.props.handleBlur}
                  step={0.1}
                  type="Number"
                  onFocus={e => e.target.select()}
                  value={this.props.angle.angleInDegrees}
                  onChange={event => {
                    this.props.handleChange(event, "deg");
                  }}
                />
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
              <tr>
                <td className="sin">Sine </td>
                <td >
                  <input
                    className="special"
                    type="Text"
                    onFocus={e => e.target.select()}
                    value={this.props.soSpecial.sin}
                    onChange={event => {
                      this.props.handleChange(event, "sin");
                    }}
                  />
                </td>
              </tr>
            ) : (
              <tr>
                <td className="sin">Sine </td>
                <td>
                  <input
                   onBlur={this.props.handleBlur}
                    className="trigForm"
                    type="Number"
                    step={0.001}
                    onFocus={e => e.target.select()}
                    value={this.props.angle.sine}
                    onChange={event => {
                      this.props.handleChange(event, "sin");
                    }}
                  />
                </td>
              </tr>
            )}

            {this.props.soSpecial ? (
              <tr>
                <td className="cos">Cosine </td>
                <td>
                  <input
                    className="special"
                    type="Text"
                    onFocus={e => e.target.select()}
                    value={this.props.soSpecial.cos}
                    onChange={event => {
                      this.props.handleChange(event, "cos");
                    }}
                  />
                </td>
              </tr>
            ) : (
              <tr>
                <td className="cos">Cosine </td>
                <td>
                  <input
                  onBlur={this.props.handleBlur}
                    className="trigForm"
                    type="Number"
                    step={0.001}
                    onFocus={e => e.target.select()}
                    value={this.props.angle.cosine}
                    onChange={event => {
                      this.props.handleChange(event, "cos");
                    }}
                  />
                </td>
              </tr>
            )}

           

            {this.props.soSpecial ? (
              <tr>
                <td className="tan">Tangent </td>
                <td>
                  <input
                    className={(Math.abs(this.props.angle.cosine)>0.0001)?"special":"infinity"}
                    type="Text"
                    onFocus={e => e.target.select()}
                    value={this.props.soSpecial.tan}
                    onChange={event => {
                      this.props.handleChange(event, "tan");
                    }}
                  />
                </td>
              </tr>
            ) : (
              <tr>
                <td className="tan">Tangent </td>
                <td>
                  <input
                    className="trigForm"
                    onBlur={this.props.handleBlur}
                    type="Number"
                    step={0.001}
                    onFocus={e => e.target.select()}
                    value={(Math.abs(this.props.angle.tangent)>=10000)?"undefined":this.props.angle.tangent}
                    onChange={event => {
                      this.props.handleChange(event, "tan");
                    }}
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <table>
          <tbody>
          {this.props.soSpecial ? (
              <tr>
                <td className="csc">Cosecant </td>
                <td>
                  <input
                    className={(Math.abs(this.props.angle.sine)>0.0001)?"special":"infinity"}
                    type="Text"
                    onFocus={e => e.target.select()}
                    value={this.props.soSpecial.cosec}
                    onChange={event => {
                      this.props.handleChange(event, "csc");
                    }}
                  />
                </td>
              </tr>
            ) : (
              <tr>
                <td className="csc">Cosecant </td>
                <td>
                  <input
                    className="trigForm"
                    onBlur={this.props.handleBlur}
                    type="Number"
                    step={0.001}
                    onFocus={e => e.target.select()}
                    value={(Math.abs(this.props.angle.cosecant)>=10000)?"undefined":this.props.angle.cosecant}
                    onChange={event => {
                      this.props.handleChange(event, "csc");
                    }}
                  />
                </td>
              </tr>
            )}
           {this.props.soSpecial ? (
              <tr>
                <td className="sec">Secant </td>
                <td>
                  <input
                   className={(Math.abs(this.props.angle.cosine)>0.0001)?"special":"infinity"}
                    type="Text"
                    onFocus={e => e.target.select()}
                    value={this.props.soSpecial.sec}
                    onChange={event => {
                      this.props.handleChange(event, "sec");
                    }}
                  />
                </td>
              </tr>
            ) : (
              <tr>
                <td className="sec">Secant </td>
                <td>
                  <input
                  onBlur={this.props.handleBlur}
                    className="trigForm"
                    type="Number"
                    step={0.001}
                    onFocus={e => e.target.select()}
                    value={(Math.abs(this.props.angle.secant)>=10000)?"undefined":this.props.angle.secant}
                    onChange={event => {
                      this.props.handleChange(event, "sec");
                    }}
                  />
                </td>
              </tr>
            )}
             {this.props.soSpecial ? (
              <tr>
                <td className="cot">Cotangent </td>
                <td>
                  <input
                    className={(Math.abs(this.props.angle.sine)>0.0001)?"special":"infinity"}
                    type="Text"
                    onFocus={e => e.target.select()}
                    value={this.props.soSpecial.cot}
                    onChange={event => {
                      this.props.handleChange(event, "cot");
                    }}
                  />
                </td>
              </tr>
            ) : (
              <tr>
                <td className="cot">Cotangent </td>
                <td>
                  <input
                  onBlur={this.props.handleBlur}
                    className="trigForm"
                    type="Number"
                    step={0.001}
                    onFocus={e => e.target.select()}
                    value={(Math.abs(this.props.angle.cotangent)>=10000)?"undefined":this.props.angle.cotangent}
                    onChange={event => {
                      this.props.handleChange(event, "cot");
                    }}
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table></div>
      </div>
    );
  }
}
