(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{166:function(t,e,s){t.exports=s(601)},171:function(t,e,s){},173:function(t,e,s){t.exports=s.p+"static/media/logo.5d5d9eef.svg"},601:function(t,e,s){"use strict";s.r(e);var a=s(0),i=s.n(a),n=s(165),r=s.n(n),o=(s(171),s(33)),h=s(34),p=s(37),l=s(35),c=s(36),g=s(39),d=(s(173),s(64),i.a.Component,function(t){function e(t){return Object(o.a)(this,e),Object(p.a)(this,Object(l.a)(e).call(this,t))}return Object(c.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this;return i.a.createElement("svg",{version:"1.1",onTouchStart:function(e){console.log(e),t.props.handleDotDown(e)},xmlns:"http://www.w3.org/2000/svg",width:this.props.width,height:this.props.height,strokeLinecap:"round"},i.a.createElement("line",{strokeWidth:"0.5",stroke:"black",x1:this.props.width/2,y1:this.props.height,x2:this.props.width/2,y2:0}),i.a.createElement("line",{strokeWidth:"1",stroke:"black",x1:this.props.width/2,y1:0,x2:this.props.width/2+5,y2:5}),i.a.createElement("line",{strokeWidth:"1",stroke:"black",x1:this.props.width/2+2*this.props.r,y1:this.props.height/2-5,x2:this.props.width/2+2*this.props.r,y2:5+this.props.height/2}),i.a.createElement("line",{strokeWidth:"1",stroke:"black",x1:this.props.width/2-2*this.props.r,y1:this.props.height/2-5,x2:this.props.width/2-2*this.props.r,y2:5+this.props.height/2}),i.a.createElement("line",{strokeWidth:"1",stroke:"black",x1:this.props.width/2+this.props.r,y1:this.props.height/2-5,x2:this.props.width/2+this.props.r,y2:5+this.props.height/2}),i.a.createElement("line",{strokeWidth:"1",stroke:"black",x1:this.props.width/2-this.props.r,y1:this.props.height/2-5,x2:this.props.width/2-this.props.r,y2:5+this.props.height/2}),i.a.createElement("line",{strokeWidth:"1",stroke:"black",x1:this.props.width/2-5,y1:this.props.height/2-2*this.props.r,x2:this.props.width/2+5,y2:this.props.height/2-2*this.props.r}),i.a.createElement("line",{strokeWidth:"1",stroke:"black",x1:this.props.width/2-5,y1:this.props.height/2+2*this.props.r,x2:this.props.width/2+5,y2:this.props.height/2+2*this.props.r}),i.a.createElement("line",{strokeWidth:"1",stroke:"black",x1:this.props.width/2,y1:0,x2:this.props.width/2-5,y2:5}),i.a.createElement("line",{strokeWidth:"1",stroke:"black",x1:this.props.width/2+3*this.props.r,y1:this.props.height/2,x2:this.props.width/2+3*this.props.r-5,y2:this.props.height/2+5}),i.a.createElement("line",{strokeWidth:"1",stroke:"black",x1:this.props.width/2+3*this.props.r,y1:this.props.height/2,x2:this.props.width/2+3*this.props.r-5,y2:this.props.height/2-5}),i.a.createElement("line",{strokeWidth:"1",stroke:"black",x1:this.props.width/2,y1:0,x2:this.props.width/2-5,y2:5}),i.a.createElement("line",{strokeWidth:"0.5",stroke:"black",x1:this.props.width/2-3*this.props.r,y1:this.props.height/2,x2:this.props.width/2+3*this.props.r,y2:this.props.height/2}),i.a.createElement("line",{strokeWidth:"1",stroke:"black",x1:this.props.width/2,y1:this.props.height/2,x2:this.props.width/2+this.props.r*this.props.angle.cosine,y2:this.props.height/2-this.props.r*this.props.angle.sine}),i.a.createElement("ellipse",{strokeWidth:"1",stroke:"black",fill:"none",cx:this.props.width/2,cy:this.props.height/2,rx:this.props.r,ry:this.props.r}),i.a.createElement("path",{strokeWidth:"1",stroke:"black",fill:"none",d:this.props.arc}),this.props.angle.angleInDegrees%360>12&&i.a.createElement("svg",null,i.a.createElement("line",{strokeWidth:"1",stroke:"black",x1:this.props.width/2+this.props.r/5*this.props.angle.cosine,y1:this.props.height/2-this.props.r/5*this.props.angle.sine,x2:this.props.width/2+this.props.r/6*Math.cos(this.props.angle.angle-.3),y2:this.props.height/2-this.props.r/6*Math.sin(this.props.angle.angle-.3)}),i.a.createElement("line",{strokeWidth:"1",stroke:"black",x1:this.props.width/2+this.props.r/5*this.props.angle.cosine,y1:this.props.height/2-this.props.r/5*this.props.angle.sine,x2:this.props.width/2+.23333*this.props.r*Math.cos(this.props.angle.angle-.3),y2:this.props.height/2-.23333*this.props.r*Math.sin(this.props.angle.angle-.3)})),this.props.angle.angleInDegrees%360<-12&&i.a.createElement("svg",null,i.a.createElement("line",{strokeWidth:"1",stroke:"black",x1:this.props.width/2+this.props.r/5*this.props.angle.cosine,y1:this.props.height/2-this.props.r/5*this.props.angle.sine,x2:this.props.width/2+this.props.r/6*Math.cos(this.props.angle.angle+.3),y2:this.props.height/2-this.props.r/6*Math.sin(this.props.angle.angle+.3)}),i.a.createElement("line",{strokeWidth:"1",stroke:"black",x1:this.props.width/2+this.props.r/5*this.props.angle.cosine,y1:this.props.height/2-this.props.r/5*this.props.angle.sine,x2:this.props.width/2+.23333*this.props.r*Math.cos(this.props.angle.angle+.3),y2:this.props.height/2-.23333*this.props.r*Math.sin(this.props.angle.angle+.3)})),i.a.createElement("line",{strokeWidth:"3",stroke:"black",x1:this.props.width/2,y1:this.props.height/2,x2:this.props.width/2+this.props.r*this.props.angle.cosine,y2:this.props.height/2-this.props.r*this.props.angle.sine}),i.a.createElement("line",{strokeWidth:"3",stroke:"red",x1:this.props.width/2+this.props.r*this.props.angle.cosine,y1:this.props.height/2-this.props.r*this.props.angle.sine,x2:this.props.width/2+this.props.r*this.props.angle.cosine,y2:this.props.height/2}),Math.abs(this.props.angle.secant)!==this.props.huge&&i.a.createElement("line",{strokeWidth:"2",stroke:"orange",x1:this.props.width/2,y1:this.props.height/2,x2:this.props.width/2+this.props.r*this.props.angle.secant,y2:this.props.height/2}),i.a.createElement("line",{strokeWidth:"3",stroke:"green",x1:this.props.width/2,y1:this.props.height/2,x2:this.props.width/2+this.props.r*this.props.angle.cosine,y2:this.props.height/2}),Math.abs(this.props.angle.tangent)!==this.props.huge&&i.a.createElement("line",{strokeWidth:"3",stroke:"blue",x1:this.props.width/2+this.props.r*this.props.angle.cosine,y1:this.props.height/2-this.props.r*this.props.angle.sine,x2:this.props.width/2+this.props.r*this.props.angle.secant,y2:this.props.height/2}),Math.abs(this.props.angle.tangent)===this.props.huge&&i.a.createElement("line",{strokeWidth:"1",stroke:"grey",x1:this.props.width/2+this.props.r,y1:this.props.height/2,x2:this.props.width/2+this.props.r,y2:this.props.height/2-this.props.r*this.props.angle.tangent}),Math.abs(this.props.angle.tangent)!==this.props.huge&&i.a.createElement("line",{strokeWidth:"3",stroke:"purple",x1:this.props.width/2+this.props.r*this.props.angle.cosine,y1:this.props.height/2-this.props.r*this.props.angle.sine,x2:this.props.width/2,y2:this.props.height/2-this.props.r*this.props.angle.cosecant}),Math.abs(this.props.angle.cotangent)===this.props.huge&&i.a.createElement("line",{strokeWidth:"1",stroke:"grey",x1:this.props.width/2,y1:this.props.height/2-this.props.r,x2:this.props.width/2+this.props.r*this.props.angle.cotangent,y2:this.props.height/2-this.props.r}),Math.abs(this.props.angle.cosecant)!==this.props.huge&&i.a.createElement("line",{strokeWidth:"3",stroke:"brown",x1:this.props.width/2,y1:this.props.height/2,x2:this.props.width/2,y2:this.props.height/2-this.props.r*this.props.angle.cosecant}),Math.abs(this.props.angle.cosecant)===this.props.huge&&i.a.createElement("line",{strokeWidth:"1",stroke:"grey",x1:this.props.width/2,y1:this.props.height/2,x2:this.props.width/2+this.props.r*this.props.angle.cosecant*this.props.angle.cosine,y2:this.props.height/2-this.props.r*this.props.angle.cosecant*this.props.angle.sine}),Math.abs(this.props.angle.secant)===this.props.huge&&i.a.createElement("line",{strokeWidth:"1",stroke:"grey",x1:this.props.width/2,y1:this.props.height/2,x2:this.props.width/2+this.props.r*this.props.angle.secant*this.props.angle.cosine,y2:this.props.height/2-this.props.r*this.props.angle.secant*this.props.angle.sine}),"svg>",i.a.createElement("ellipse",{strokeWidth:"1",stroke:"none",fill:"dark gray",onMouseDown:function(e){t.props.handleDotDown(e)},onTouchStart:function(e){console.log(e),t.props.handleDotDown(e)},cx:this.props.width/2+this.props.r*this.props.angle.cosine,cy:this.props.height/2-this.props.r*this.props.angle.sine,rx:2,ry:2}),this.props.angle.angleInDegrees%30===0||this.props.angle.angleInDegrees%45===0?i.a.createElement("svg",null,i.a.createElement("ellipse",{strokeWidth:"1",stroke:"none",fill:"red",onMouseDown:function(e){t.props.handleDotDown(e)},onTouchStart:function(e){console.log(e),t.props.handleDotDown(e)},cx:this.props.width/2+this.props.r*this.props.angle.cosine,cy:this.props.height/2-this.props.r*this.props.angle.sine,rx:3,ry:3}),i.a.createElement("ellipse",{strokeWidth:"1",stroke:"none",fill:"red",cx:this.props.width/2+this.props.r*this.props.angle.cosine,cy:this.props.height/2-this.props.r*this.props.angle.sine,rx:3,ry:3,onMouseDown:function(e){t.props.handleDotDown(e)},onTouchStart:function(e){t.props.handleDotDown(e)}})):i.a.createElement("div",null," "))}}]),e}(i.a.Component)),u=s(63),m=s.n(u),y=(i.a.Component,s(602),s(599),function(t){function e(t){return Object(o.a)(this,e),Object(p.a)(this,Object(l.a)(e).call(this,t))}return Object(c.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this;return i.a.createElement("div",null,i.a.createElement("table",{className:"thetaTable"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"Radians "),this.props.soSpecial?i.a.createElement("td",null,i.a.createElement("input",{step:.001,className:"special",type:"Text",onFocus:function(t){return t.target.select()},value:(this.props.angle.angle<0?"-":"")+(1!==this.props.frac.n?this.props.frac.n:"")+this.props.specialText.pi+(1!==this.props.frac.d?"/"+this.props.frac.d:""),onChange:function(e){t.props.handleChange(e,"ang")}})):i.a.createElement("td",null,i.a.createElement("input",{step:.001,className:"trigForm",type:"Number",onFocus:function(t){return t.target.select()},value:this.props.angle.angle,onChange:function(e){t.props.handleChange(e,"ang")}}))),i.a.createElement("tr",null,i.a.createElement("td",null,"Degrees "),i.a.createElement("td",null,i.a.createElement("input",{className:"trigForm",step:.1,type:"Number",onFocus:function(t){return t.target.select()},value:this.props.angle.angleInDegrees,onChange:function(e){t.props.handleChange(e,"deg")}}))),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("i",null,"s.f. ",this.props.sigFigs," ")),i.a.createElement("td",null,i.a.createElement("input",{className:"sigs",type:"range",id:"sigFigs",name:"sigFigs",value:this.props.sigFigs,onChange:function(e){t.props.handleChange(e,"sf")},min:"1",max:"12"}))))),i.a.createElement("div",{className:"trigTable"},i.a.createElement("table",null,i.a.createElement("tbody",null,this.props.soSpecial?i.a.createElement("tr",null,i.a.createElement("td",{className:"sin"},"Sine "),i.a.createElement("td",null,i.a.createElement("input",{className:"special",type:"Text",onFocus:function(t){return t.target.select()},value:this.props.soSpecial.sin,onChange:function(e){t.props.handleChange(e,"sin")}}))):i.a.createElement("tr",null,i.a.createElement("td",{className:"sin"},"Sine "),i.a.createElement("td",null,i.a.createElement("input",{className:"trigForm",type:"Number",step:.001,onFocus:function(t){return t.target.select()},value:this.props.angle.sine,onChange:function(e){t.props.handleChange(e,"sin")}}))),this.props.soSpecial?i.a.createElement("tr",null,i.a.createElement("td",{className:"cos"},"Cosine "),i.a.createElement("td",null,i.a.createElement("input",{className:"special",type:"Text",onFocus:function(t){return t.target.select()},value:this.props.soSpecial.cos,onChange:function(e){t.props.handleChange(e,"cos")}}))):i.a.createElement("tr",null,i.a.createElement("td",{className:"cos"},"Cosine "),i.a.createElement("td",null,i.a.createElement("input",{className:"trigForm",type:"Number",step:.001,onFocus:function(t){return t.target.select()},value:this.props.angle.cosine,onChange:function(e){t.props.handleChange(e,"cos")}}))),this.props.soSpecial?i.a.createElement("tr",null,i.a.createElement("td",{className:"tan"},"Tangent "),i.a.createElement("td",null,i.a.createElement("input",{className:"special",type:"Text",onFocus:function(t){return t.target.select()},value:this.props.soSpecial.tan,onChange:function(e){t.props.handleChange(e,"tan")}}))):i.a.createElement("tr",null,i.a.createElement("td",{className:"tan"},"Tangent "),i.a.createElement("td",null,i.a.createElement("input",{className:"trigForm",type:"Number",step:.001,onFocus:function(t){return t.target.select()},value:this.props.angle.tangent,onChange:function(e){t.props.handleChange(e,"tan")}}))))),i.a.createElement("table",null,i.a.createElement("tbody",null,this.props.soSpecial?i.a.createElement("tr",null,i.a.createElement("td",{className:"csc"},"Cosecant "),i.a.createElement("td",null,i.a.createElement("input",{className:"special",type:"Text",onFocus:function(t){return t.target.select()},value:this.props.soSpecial.cosec,onChange:function(e){t.props.handleChange(e,"csc")}}))):i.a.createElement("tr",null,i.a.createElement("td",{className:"csc"},"Cosecant "),i.a.createElement("td",null,i.a.createElement("input",{className:"trigForm",type:"Number",step:.001,onFocus:function(t){return t.target.select()},value:this.props.angle.cosecant,onChange:function(e){t.props.handleChange(e,"csc")}}))),this.props.soSpecial?i.a.createElement("tr",null,i.a.createElement("td",{className:"sec"},"Secant "),i.a.createElement("td",null,i.a.createElement("input",{className:"special",type:"Text",onFocus:function(t){return t.target.select()},value:this.props.soSpecial.sec,onChange:function(e){t.props.handleChange(e,"sec")}}))):i.a.createElement("tr",null,i.a.createElement("td",{className:"sec"},"Secant "),i.a.createElement("td",null,i.a.createElement("input",{className:"trigForm",type:"Number",step:.001,onFocus:function(t){return t.target.select()},value:this.props.angle.secant,onChange:function(e){t.props.handleChange(e,"sec")}}))),this.props.soSpecial?i.a.createElement("tr",null,i.a.createElement("td",{className:"cot"},"Cotangent "),i.a.createElement("td",null,i.a.createElement("input",{className:"special",type:"Text",onFocus:function(t){return t.target.select()},value:this.props.soSpecial.cot,onChange:function(e){t.props.handleChange(e,"cot")}}))):i.a.createElement("tr",null,i.a.createElement("td",{className:"cot"},"Cotangent "),i.a.createElement("td",null,i.a.createElement("input",{className:"trigForm",type:"Number",step:.001,onFocus:function(t){return t.target.select()},value:this.props.angle.cotangent,onChange:function(e){t.props.handleChange(e,"cot")}})))))))}}]),e}(i.a.Component)),E={pi:"\u03c0",radical:"\u221a",theta:"\u03b8",infinity:"\u221e"},k={0:{sin:"0",cos:"1",tan:"0",cosec:E.infinity,sec:"1",cot:E.infinity},30:{sin:"1/2",cos:E.radical+"3/2",tan:E.radical+"3/3",cosec:"2",sec:"2"+E.radical+"3/3",cot:E.radical+"3"},45:{sin:E.radical+"2/2",cos:E.radical+"2/2",tan:"1",cosec:E.radical+"2",sec:E.radical+"2",cot:"1"},60:{sin:E.radical+"3/2",cos:"1/2",tan:E.radical+"3",cosec:"2"+E.radical+"3/3",sec:"2",cot:E.radical+"3/3"},90:{sin:"1",cos:"0",tan:E.infinity,cosec:"1",sec:E.infinity,cot:"1"},120:{sin:E.radical+"3/2",cos:"-1/2",tan:"-"+E.radical+"3",cosec:"2"+E.radical+"3/3",sec:"-2",cot:"-"+E.radical+"3/3"},135:{sin:E.radical+"2/2",cos:"-"+E.radical+"2/2",tan:"-1",cosec:E.radical+"2",sec:"-"+E.radical+"2",cot:"-1"},150:{sin:"1/2",cos:"-"+E.radical+"3/2",tan:"-"+E.radical+"3/3",cosec:"2",sec:"-2"+E.radical+"3/3",cot:"-"+E.radical+"3"},180:{sin:"0",cos:"-1",tan:"0",cosec:E.infinity,sec:"-1",cot:"-"+E.infinity},210:{sin:"-1/2",cos:"-"+E.radical+"3/2",tan:"-"+E.radical+"3/3",cosec:"-2",sec:"-2"+E.radical+"3/3",cot:"-"+E.radical+"3"},225:{sin:"-"+E.radical+"2/2",cos:"-"+E.radical+"2/2",tan:"1",cosec:"-"+E.radical+"2",sec:"-"+E.radical+"2",cot:"1"},240:{cos:"-1/2",sin:"-"+E.radical+"3/2",tan:E.radical+"3",cosec:"-2"+E.radical+"3/3",sec:"-2",cot:E.radical+"3/3"},270:{sin:"-1",cos:"0",tan:E.infinity,cosec:"-1",sec:E.infinity,cot:"1"},300:{sin:"-"+E.radical+"3/2",cos:"1/2",tan:"-"+E.radical+"3",cosec:"-2"+E.radical+"3/3",sec:"2",cot:"-"+E.radical+"3/3"},315:{sin:"-"+E.radical+"2/2",cos:E.radical+"2/2",tan:"-1",cosec:"-"+E.radical+"2",sec:E.radical+"2",cot:"-1"},330:{cos:E.radical+"3/2",sin:"-1/2",tan:"-"+E.radical+"3/3",cosec:"-2",sec:"2"+E.radical+"3/3",cot:"-"+E.radical+"3"}},w=function(t){function e(t){var s;return Object(o.a)(this,e),(s=Object(p.a)(this,Object(l.a)(e).call(this,t))).state={radius:100,ang:Math.PI/6,sigFigs:3,height:600,width:1200,dragging:!1,startY:300},s.handleChange=s.handleChange.bind(Object(g.a)(Object(g.a)(s))),s.handleDotDown=s.handleDotDown.bind(Object(g.a)(Object(g.a)(s))),s.handleDotUp=s.handleDotUp.bind(Object(g.a)(Object(g.a)(s))),s}return Object(c.a)(e,t),Object(h.a)(e,[{key:"componentWillMount",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight,radius:window.innerHeight/6})}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"App",onWheel:function(e){return t.rotator(e)},onMouseUp:this.handleDotUp,onTouchEnd:this.handleDotUp,onTouchMove:function(e){return t.touchdragger(e)},onMouseMove:function(e){return t.dragger(e)}},i.a.createElement(d,{handleDotDown:this.handleDotDown,specialText:E,frac:m.a.fraction(this.state.ang/Math.PI),huge:1e4,arc:this.describeArc(this.state.width/2,this.state.height/2,this.state.radius/5,0,this.state.ang/Math.PI*180),height:this.state.height,width:this.state.width,r:this.state.radius,angle:this.trigonomotizor(this.state.ang,1e-4,1e4)}),i.a.createElement(y,{soSpecial:this.handleSpecial(this.state.ang),specialAngles:k,specialText:E,frac:m.a.fraction(this.state.ang/Math.PI),sigFigs:this.state.sigFigs,huge:1e4,angle:this.trigonomotizor(this.state.ang,1e-4,1e4),handleChange:this.handleChange}))}},{key:"polarToCartesian",value:function(t,e,s,a){var i=a*Math.PI/180;return{x:t+s*Math.cos(i),y:e-s*Math.sin(i),ang:i}}},{key:"describeArc",value:function(t,e,s,a,i){if(i<0)var n=this.polarToCartesian(t,e,s,a),r=this.polarToCartesian(t,e,s,i),o=Math.sin(r.ang)<0?"0":"1";else r=this.polarToCartesian(t,e,s,a),n=this.polarToCartesian(t,e,s,i),o=Math.sin(n.ang)>=0?"0":"1";return["M",r.x,r.y,"A",s,s,0,o,0,n.x,n.y].join(" ")}},{key:"trigonomotizor",value:function(t,e,s){var a=this.ranger(Math.sin(t),e,s),i=this.ranger(Math.cos(t),e,s),n=this.ranger(Math.tan(t),e,s),r=this.ranger(1/Math.sin(t),e,s),o=this.ranger(1/Math.cos(t),e,s),h=this.ranger(1/Math.tan(t),e,s),p=this.ranger(t*(180/Math.PI));return{angle:this.ranger(Number(t)),angleInDegrees:p,sine:a,cosine:i,tangent:n,cosecant:r,secant:o,cotangent:h}}},{key:"ranger",value:function(t,e,s){return Math.abs(t)<e?0:t>s?s:t<-s?-s:Number(t.toFixed(this.state.sigFigs))}},{key:"handleChange",value:function(t,e){t.persist(),this.isNumber(Number(t.target.value))&&("ang"===e&&this.setState({ang:t.target.value}),"deg"===e&&t.target.value.length&&this.setState({ang:t.target.value*(Math.PI/180)}),"sin"===e&&Math.abs(t.target.value)<=1&&this.setState({ang:Math.asin(t.target.value)}),"cos"===e&&Math.abs(t.target.value)<=1&&this.setState({ang:Math.acos(t.target.value)}),"tan"===e&&this.setState({ang:Math.atan(t.target.value)}),"csc"===e&&Math.abs(t.target.value)>1&&this.setState({ang:m.a.acsc(t.target.value)}),"sec"===e&&Math.abs(t.target.value)>1&&this.setState({ang:m.a.asec(t.target.value)}),"cot"===e&&this.setState({ang:m.a.acot(t.target.value)}),"sf"===e&&this.setState({sigFigs:t.target.value}))}},{key:"isNumber",value:function(t){return"number"===typeof t&&isFinite(t)}},{key:"handleSpecial",value:function(t){var e=this.ranger(t*(180/Math.PI));return!!k[Math.abs(e%360)]&&(e>=0?k[e%360]:k[360-Math.abs(e%360)])}},{key:"rotator",value:function(t){this.setState({ang:this.state.ang-t.deltaY/53*Math.PI/96})}},{key:"handleDotDown",value:function(t){t.persist(),t.touches?this.setState({dragging:!0,startY:t.touches[0].clientY}):this.setState({dragging:!0,startY:t.clientY})}},{key:"handleDotUp",value:function(){this.setState({dragging:!1})}},{key:"dragger",value:function(t){t.persist(),this.state.dragging&&this.setState({ang:this.state.ang-(t.clientY-this.state.startY)*Math.PI/240,startY:t.clientY})}},{key:"touchdragger",value:function(t){this.state.dragging&&this.setState({ang:this.state.ang-(t.touches[0].clientY-this.state.startY)*Math.PI/216,startY:t.touches[0].clientY})}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},64:function(t,e,s){}},[[166,2,1]]]);
//# sourceMappingURL=main.b3b3bf68.chunk.js.map