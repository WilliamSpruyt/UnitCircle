(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{172:function(t,e,s){t.exports=s(614)},177:function(t,e,s){},179:function(t,e,s){t.exports=s.p+"static/media/logo.f806287f.svg"},614:function(t,e,s){"use strict";s.r(e);var a=s(0),i=s.n(a),n=s(109),r=s.n(n),o=(s(177),s(34)),h=s(35),l=s(38),p=s(36),c=s(37),d=s(26),g=(s(179),s(64),i.a.Component,function(t){function e(t){return Object(o.a)(this,e),Object(l.a)(this,Object(p.a)(e).call(this,t))}return Object(c.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this;return i.a.createElement("svg",{version:"1.1",onTouchStart:function(e){console.log(e),t.props.handleDotDown(e)},xmlns:"http://www.w3.org/2000/svg",width:this.props.width,height:this.props.height,strokeLinecap:"round"},i.a.createElement("line",{strokeWidth:"0.5",stroke:"black",x1:this.props.width/2,y1:this.props.height,x2:this.props.width/2,y2:0}),i.a.createElement("line",{strokeWidth:"1",stroke:"black",x1:this.props.width/2,y1:0,x2:this.props.width/2+5,y2:5}),i.a.createElement("line",{strokeWidth:"1",stroke:"black",x1:this.props.width/2+2*this.props.r,y1:this.props.height/2-5,x2:this.props.width/2+2*this.props.r,y2:5+this.props.height/2}),i.a.createElement("line",{strokeWidth:"1",stroke:"black",x1:this.props.width/2-2*this.props.r,y1:this.props.height/2-5,x2:this.props.width/2-2*this.props.r,y2:5+this.props.height/2}),i.a.createElement("line",{strokeWidth:"1",stroke:"black",x1:this.props.width/2+this.props.r,y1:this.props.height/2-5,x2:this.props.width/2+this.props.r,y2:5+this.props.height/2}),i.a.createElement("line",{strokeWidth:"1",stroke:"black",x1:this.props.width/2-this.props.r,y1:this.props.height/2-5,x2:this.props.width/2-this.props.r,y2:5+this.props.height/2}),i.a.createElement("line",{strokeWidth:"1",stroke:"black",x1:this.props.width/2-5,y1:this.props.height/2-2*this.props.r,x2:this.props.width/2+5,y2:this.props.height/2-2*this.props.r}),i.a.createElement("line",{strokeWidth:"1",stroke:"black",x1:this.props.width/2-5,y1:this.props.height/2+2*this.props.r,x2:this.props.width/2+5,y2:this.props.height/2+2*this.props.r}),i.a.createElement("line",{strokeWidth:"1",stroke:"black",x1:this.props.width/2,y1:0,x2:this.props.width/2-5,y2:5}),i.a.createElement("line",{strokeWidth:"1",stroke:"black",x1:this.props.width/2+3*this.props.r,y1:this.props.height/2,x2:this.props.width/2+3*this.props.r-5,y2:this.props.height/2+5}),i.a.createElement("line",{strokeWidth:"1",stroke:"black",x1:this.props.width/2+3*this.props.r,y1:this.props.height/2,x2:this.props.width/2+3*this.props.r-5,y2:this.props.height/2-5}),i.a.createElement("line",{strokeWidth:"1",stroke:"black",x1:this.props.width/2,y1:0,x2:this.props.width/2-5,y2:5}),i.a.createElement("line",{strokeWidth:"0.5",stroke:"black",x1:this.props.width/2-3*this.props.r,y1:this.props.height/2,x2:this.props.width/2+3*this.props.r,y2:this.props.height/2}),i.a.createElement("line",{strokeWidth:"1",stroke:"black",x1:this.props.width/2,y1:this.props.height/2,x2:this.props.width/2+this.props.r*this.props.angle.cosine,y2:this.props.height/2-this.props.r*this.props.angle.sine}),i.a.createElement("ellipse",{strokeWidth:"1",stroke:"black",fill:"none",cx:this.props.width/2,cy:this.props.height/2,rx:this.props.r,ry:this.props.r}),i.a.createElement("path",{strokeWidth:"1",stroke:"black",fill:"none",d:this.props.arc}),this.props.angle.angleInDegrees%360>12&&i.a.createElement("svg",null,i.a.createElement("line",{strokeWidth:"1",stroke:"black",x1:this.props.width/2+this.props.r/5*this.props.angle.cosine,y1:this.props.height/2-this.props.r/5*this.props.angle.sine,x2:this.props.width/2+this.props.r/6*Math.cos(this.props.angle.angle-.3),y2:this.props.height/2-this.props.r/6*Math.sin(this.props.angle.angle-.3)}),i.a.createElement("line",{strokeWidth:"1",stroke:"black",x1:this.props.width/2+this.props.r/5*this.props.angle.cosine,y1:this.props.height/2-this.props.r/5*this.props.angle.sine,x2:this.props.width/2+.23333*this.props.r*Math.cos(this.props.angle.angle-.3),y2:this.props.height/2-.23333*this.props.r*Math.sin(this.props.angle.angle-.3)})),this.props.angle.angleInDegrees%360<-12&&i.a.createElement("svg",null,i.a.createElement("line",{strokeWidth:"1",stroke:"black",x1:this.props.width/2+this.props.r/5*this.props.angle.cosine,y1:this.props.height/2-this.props.r/5*this.props.angle.sine,x2:this.props.width/2+this.props.r/6*Math.cos(this.props.angle.angle+.3),y2:this.props.height/2-this.props.r/6*Math.sin(this.props.angle.angle+.3)}),i.a.createElement("line",{strokeWidth:"1",stroke:"black",x1:this.props.width/2+this.props.r/5*this.props.angle.cosine,y1:this.props.height/2-this.props.r/5*this.props.angle.sine,x2:this.props.width/2+.23333*this.props.r*Math.cos(this.props.angle.angle+.3),y2:this.props.height/2-.23333*this.props.r*Math.sin(this.props.angle.angle+.3)})),i.a.createElement("line",{strokeWidth:"3",stroke:"black",x1:this.props.width/2,y1:this.props.height/2,x2:this.props.width/2+this.props.r*this.props.angle.cosine,y2:this.props.height/2-this.props.r*this.props.angle.sine}),i.a.createElement("line",{strokeWidth:"3",stroke:"red",x1:this.props.width/2+this.props.r*this.props.angle.cosine,y1:this.props.height/2-this.props.r*this.props.angle.sine,x2:this.props.width/2+this.props.r*this.props.angle.cosine,y2:this.props.height/2}),i.a.createElement("line",{strokeWidth:"2",stroke:"orange",strokeOpacity:Math.abs(this.props.angle.secant)<this.props.huge?"1":"0.4",x1:this.props.width/2,y1:this.props.height/2,x2:this.props.width/2+this.props.r*this.props.angle.secant,y2:this.props.height/2}),i.a.createElement("line",{strokeWidth:"3",stroke:"green",x1:this.props.width/2,y1:this.props.height/2,x2:this.props.width/2+this.props.r*this.props.angle.cosine,y2:this.props.height/2}),i.a.createElement("line",{strokeWidth:"3",strokeOpacity:Math.abs(this.props.angle.tangent)<this.props.huge?"1":"0.3",stroke:"blue",x1:this.props.width/2+this.props.r*this.props.angle.cosine,y1:this.props.height/2-this.props.r*this.props.angle.sine,x2:this.props.width/2+this.props.r*this.props.angle.secant,y2:this.props.height/2}),i.a.createElement("line",{strokeWidth:"3",stroke:"purple",strokeOpacity:Math.abs(this.props.angle.cotangent)<this.props.huge?"1":"0.3",x1:this.props.width/2+this.props.r*this.props.angle.cosine,y1:this.props.height/2-this.props.r*this.props.angle.sine,x2:this.props.width/2,y2:this.props.height/2-this.props.r*this.props.angle.cosecant}),i.a.createElement("line",{strokeWidth:"3",stroke:"brown",strokeOpacity:Math.abs(this.props.angle.cosecant)<this.props.huge?"1":"0.3",x1:this.props.width/2,y1:this.props.height/2,x2:this.props.width/2,y2:this.props.height/2-this.props.r*this.props.angle.cosecant}),"/>} svg>",i.a.createElement("ellipse",{strokeWidth:"1",stroke:"none",fill:"dark gray",onMouseDown:function(e){t.props.handleDotDown(e)},onTouchStart:function(e){console.log(e),t.props.handleDotDown(e)},cx:this.props.width/2+this.props.r*this.props.angle.cosine,cy:this.props.height/2-this.props.r*this.props.angle.sine,rx:2,ry:2}),this.props.angle.angleInDegrees%30===0||this.props.angle.angleInDegrees%45===0?i.a.createElement("svg",null,i.a.createElement("ellipse",{strokeWidth:"1",stroke:"none",fill:"red",onMouseDown:function(e){t.props.handleDotDown(e)},onTouchStart:function(e){console.log(e),t.props.handleDotDown(e)},cx:this.props.width/2+this.props.r*this.props.angle.cosine,cy:this.props.height/2-this.props.r*this.props.angle.sine,rx:3,ry:3}),i.a.createElement("ellipse",{strokeWidth:"1",stroke:"none",fill:"red",cx:this.props.width/2+this.props.r*this.props.angle.cosine,cy:this.props.height/2-this.props.r*this.props.angle.sine,rx:3,ry:3,onMouseDown:function(e){t.props.handleDotDown(e)},onTouchStart:function(e){t.props.handleDotDown(e)}})):i.a.createElement("div",null," "))}}]),e}(i.a.Component)),u=s(63),m=s.n(u),k=(s(171),s(168),function(t){function e(t){return Object(o.a)(this,e),Object(l.a)(this,Object(p.a)(e).call(this,t))}return Object(c.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this;return i.a.createElement("div",null,i.a.createElement("table",{className:"thetaTable"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"Radians "),this.props.soSpecial?i.a.createElement("td",null,i.a.createElement("div",{className:"special",onClick:function(e){t.props.handleClick(e,"ang")}},(this.props.angle.angle<0?"-":"")+(1!==this.props.frac.n?this.props.frac.n:"")+this.props.specialText.pi+(1!==this.props.frac.d?"/"+this.props.frac.d:""))):i.a.createElement("td",null,i.a.createElement("div",{className:"trigForm",onClick:function(e){t.props.handleClick(e,"Radians")}},this.props.angle.angle))),i.a.createElement("tr",null,i.a.createElement("td",null,"Degrees "),i.a.createElement("td",null,i.a.createElement("div",{className:"trigForm",onClick:function(e){t.props.handleClick(e,"Degrees")}},this.props.angle.angleInDegrees))),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("i",null,"s.f. ",this.props.sigFigs," ")),i.a.createElement("td",null,i.a.createElement("input",{className:"sigs",type:"range",id:"sigFigs",name:"sigFigs",value:this.props.sigFigs,onChange:function(e){t.props.handleChange(e,"sf")},min:"1",max:"12"}))))),i.a.createElement("div",{className:"trigTable"},i.a.createElement("table",null,i.a.createElement("tbody",null,this.props.soSpecial?i.a.createElement("tr",{onClick:function(e){t.props.handleClick(e,"Sine")}},i.a.createElement("td",{className:"sin"},"Sine "),i.a.createElement("td",null,i.a.createElement("div",{className:"special"},this.props.soSpecial.sin))):i.a.createElement("tr",{onClick:function(e){t.props.handleClick(e,"Sine")}},i.a.createElement("td",{className:"sin"},"Sine "),i.a.createElement("td",null,i.a.createElement("div",{className:"trigForm"},this.props.angle.sine))),this.props.soSpecial?i.a.createElement("tr",{onClick:function(e){t.props.handleClick(e,"Cosine")}},i.a.createElement("td",{className:"cos"},"cosine "),i.a.createElement("td",null,i.a.createElement("div",{className:"special"},this.props.soSpecial.cos))):i.a.createElement("tr",{onClick:function(e){t.props.handleClick(e,"Cosine")}},i.a.createElement("td",{className:"cos"},"Cosine "),i.a.createElement("td",null,i.a.createElement("div",{className:"trigForm"},this.props.angle.cosine))),this.props.soSpecial?i.a.createElement("tr",{onClick:function(e){t.props.handleClick(e,"Tangent")}},i.a.createElement("td",{className:"tan"},"Tangent "),i.a.createElement("td",null,i.a.createElement("div",{className:Math.abs(this.props.angle.cosine)>1e-4?"special":"infinity"},this.props.soSpecial.tan))):i.a.createElement("tr",{onClick:function(e){t.props.handleClick(e,"Tangent")}},i.a.createElement("td",{className:"tan"},"Tangent "),i.a.createElement("td",null,i.a.createElement("div",{className:"trigForm"},Math.abs(this.props.angle.tangent)>=1e4?"undefined":this.props.angle.tangent))))),i.a.createElement("table",null,i.a.createElement("tbody",null,this.props.soSpecial?i.a.createElement("tr",{onClick:function(e){t.props.handleClick(e,"Cosecant")}},i.a.createElement("td",{className:"csc"},"Cosecant "),i.a.createElement("td",null,i.a.createElement("div",{className:Math.abs(this.props.angle.sine)>1e-4?"special":"infinity"},this.props.soSpecial.cosec))):i.a.createElement("tr",{onClick:function(e){t.props.handleClick(e,"Cosecant")}},i.a.createElement("td",{className:"csc"},"Cosecant "),i.a.createElement("td",null,i.a.createElement("div",{className:"trigForm"},Math.abs(this.props.angle.cosecant)>=1e4?"undefined":this.props.angle.cosecant))),this.props.soSpecial?i.a.createElement("tr",{onClick:function(e){t.props.handleClick(e,"Secant")}},i.a.createElement("td",{className:"sec"},"Secant "),i.a.createElement("td",null,i.a.createElement("div",{className:Math.abs(this.props.angle.cosine)>1e-4?"special":"infinity"},this.props.soSpecial.sec))):i.a.createElement("tr",{onClick:function(e){t.props.handleClick(e,"Secant")}},i.a.createElement("td",{className:"sec"},"Secant "),i.a.createElement("td",null,i.a.createElement("div",{className:"trigForm"},Math.abs(this.props.angle.secant)>=1e4?"undefined":this.props.angle.secant))),this.props.soSpecial?i.a.createElement("tr",{onClick:function(e){t.props.handleClick(e,"Cotangent")}},i.a.createElement("td",{className:"cot"},"Cotangent "),i.a.createElement("td",null,i.a.createElement("div",{className:Math.abs(this.props.angle.sine)>1e-4?"special":"infinity"},this.props.soSpecial.cot))):i.a.createElement("tr",{onClick:function(e){t.props.handleClick(e,"Cotangent")}},i.a.createElement("td",{className:"cot"},"Cotangent "),i.a.createElement("td",null,i.a.createElement("div",{className:"trigForm"},Math.abs(this.props.angle.cotangent)>=1e4?"undefined":this.props.angle.cotangent)))))))}}]),e}(i.a.Component)),f=s(110),S=s.n(f),E=(i.a.Component,{pi:"\u03c0",radical:"\u221a",theta:"\u03b8",infinity:"\u221e"}),y={0:{sin:"0",cos:"1",tan:"0",cosec:E.infinity,sec:"1",cot:E.infinity},30:{sin:"1/2",cos:E.radical+"3/2",tan:E.radical+"3/3",cosec:"2",sec:"2"+E.radical+"3/3",cot:E.radical+"3"},45:{sin:E.radical+"2/2",cos:E.radical+"2/2",tan:"1",cosec:E.radical+"2",sec:E.radical+"2",cot:"1"},60:{sin:E.radical+"3/2",cos:"1/2",tan:E.radical+"3",cosec:"2"+E.radical+"3/3",sec:"2",cot:E.radical+"3/3"},90:{sin:"1",cos:"0",tan:E.infinity,cosec:"1",sec:E.infinity,cot:"1"},120:{sin:E.radical+"3/2",cos:"-1/2",tan:"-"+E.radical+"3",cosec:"2"+E.radical+"3/3",sec:"-2",cot:"-"+E.radical+"3/3"},135:{sin:E.radical+"2/2",cos:"-"+E.radical+"2/2",tan:"-1",cosec:E.radical+"2",sec:"-"+E.radical+"2",cot:"-1"},150:{sin:"1/2",cos:"-"+E.radical+"3/2",tan:"-"+E.radical+"3/3",cosec:"2",sec:"-2"+E.radical+"3/3",cot:"-"+E.radical+"3"},180:{sin:"0",cos:"-1",tan:"0",cosec:E.infinity,sec:"-1",cot:"-"+E.infinity},210:{sin:"-1/2",cos:"-"+E.radical+"3/2",tan:"-"+E.radical+"3/3",cosec:"-2",sec:"-2"+E.radical+"3/3",cot:"-"+E.radical+"3"},225:{sin:"-"+E.radical+"2/2",cos:"-"+E.radical+"2/2",tan:"1",cosec:"-"+E.radical+"2",sec:"-"+E.radical+"2",cot:"1"},240:{cos:"-1/2",sin:"-"+E.radical+"3/2",tan:E.radical+"3",cosec:"-2"+E.radical+"3/3",sec:"-2",cot:E.radical+"3/3"},270:{sin:"-1",cos:"0",tan:E.infinity,cosec:"-1",sec:E.infinity,cot:"1"},300:{sin:"-"+E.radical+"3/2",cos:"1/2",tan:"-"+E.radical+"3",cosec:"-2"+E.radical+"3/3",sec:"2",cot:"-"+E.radical+"3/3"},315:{sin:"-"+E.radical+"2/2",cos:E.radical+"2/2",tan:"-1",cosec:"-"+E.radical+"2",sec:E.radical+"2",cot:"-1"},330:{cos:E.radical+"3/2",sin:"-1/2",tan:"-"+E.radical+"3/3",cosec:"-2",sec:"2"+E.radical+"3/3",cot:"-"+E.radical+"3"}};S.a.setAppElement("#root");var v=function(t){function e(t){var s;return Object(o.a)(this,e),(s=Object(l.a)(this,Object(p.a)(e).call(this,t))).state={radius:100,ang:Math.PI/6,sigFigs:3,height:600,width:1200,dragging:!1,startY:300,isModalUp:!1,valInQuestion:"sin",valStr:""},s.handleChange=s.handleChange.bind(Object(d.a)(Object(d.a)(s))),s.handleDotDown=s.handleDotDown.bind(Object(d.a)(Object(d.a)(s))),s.handleDotUp=s.handleDotUp.bind(Object(d.a)(Object(d.a)(s))),s.handleBlur=s.handleBlur.bind(Object(d.a)(Object(d.a)(s))),s.handleClick=s.handleClick.bind(Object(d.a)(Object(d.a)(s))),s}return Object(c.a)(e,t),Object(h.a)(e,[{key:"componentWillMount",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight,radius:window.innerHeight/6,soSpecial:this.handleSpecial(this.state.ang)})}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"App",onWheel:function(e){return t.rotator(e)},onMouseUp:this.handleDotUp,onTouchEnd:this.handleDotUp,onTouchMove:function(e){return t.touchdragger(e)},onMouseMove:function(e){return t.dragger(e)}},i.a.createElement(S.a,{style:{overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{height:"25px",width:"300px",position:"absolute",top:"40px",left:"0px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"rgba(100, 100, 100, 0.75)",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},isOpen:this.state.isModalUp},this.state.valInQuestion,i.a.createElement("input",{autofocus:"true",value:this.state.valStr,onChange:function(e){t.setState({valStr:e.target.value})}}),i.a.createElement("button",{onClick:function(){t.handleSubmit()}},"=")),i.a.createElement(g,{handleDotDown:this.handleDotDown,specialText:E,frac:m.a.fraction(this.state.ang/Math.PI),huge:1e4,arc:this.describeArc(this.state.width/2,this.state.height/2,this.state.radius/5,0,this.state.ang/Math.PI*180),height:this.state.height,width:this.state.width,r:this.state.radius,angle:this.trigonomotizor(this.state.ang,1e-4,1e4)}),i.a.createElement(k,{inString:this.state.inString,soSpecial:this.state.soSpecial,specialAngles:y,specialText:E,frac:m.a.fraction(this.state.ang/Math.PI),sigFigs:this.state.sigFigs,huge:1e4,angle:this.trigonomotizor(this.state.ang,1e-4,1e4),handleClick:this.handleClick,handleChange:this.handleChange,handleBlur:this.handleBlur}))}},{key:"polarToCartesian",value:function(t,e,s,a){var i=a*Math.PI/180;return{x:t+s*Math.cos(i),y:e-s*Math.sin(i),ang:i}}},{key:"describeArc",value:function(t,e,s,a,i){if(i<0)var n=this.polarToCartesian(t,e,s,a),r=this.polarToCartesian(t,e,s,i),o=Math.sin(r.ang)<0?"0":"1";else r=this.polarToCartesian(t,e,s,a),n=this.polarToCartesian(t,e,s,i),o=Math.sin(n.ang)>=0?"0":"1";return["M",r.x,r.y,"A",s,s,0,o,0,n.x,n.y].join(" ")}},{key:"trigonomotizor",value:function(t,e,s){var a=this.ranger(Math.sin(t),e,s),i=this.ranger(Math.cos(t),e,s),n=this.ranger(Math.tan(t),e,s),r=this.ranger(1/Math.sin(t),e,s),o=this.ranger(1/Math.cos(t),e,s),h=this.ranger(1/Math.tan(t),e,s),l=this.ranger(t*(180/Math.PI));return{angle:this.ranger(Number(t)),angleInDegrees:l,sine:a,cosine:i,tangent:n,cosecant:r,secant:o,cotangent:h}}},{key:"ranger",value:function(t,e,s){return Math.abs(t)<e?0:t>s?s:t<-s?-s:Number(t.toFixed(this.state.sigFigs))}},{key:"handleChange",value:function(t,e){t.persist(),"sf"===e&&this.setState({sigFigs:t.target.value})}},{key:"isNumber",value:function(t){return"number"===typeof t&&isFinite(t)}},{key:"handleSpecial",value:function(t){var e=this.ranger(t*(180/Math.PI));return!!y[Math.abs(e%360)]&&(e>=0?y[e%360]:y[360-Math.abs(e%360)])}},{key:"rotator",value:function(t){var e=this;this.setState({ang:this.state.ang-t.deltaY/53*Math.PI/96},function(){e.setState({soSpecial:e.handleSpecial(e.state.ang)})})}},{key:"handleDotDown",value:function(t){var e=this;t.persist(),t.touches?this.setState({dragging:!0,startY:t.touches[0].clientY},function(){e.setState({soSpecial:e.handleSpecial(e.state.ang)})}):this.setState({dragging:!0,startY:t.clientY},function(){e.setState({soSpecial:e.handleSpecial(e.state.ang)})})}},{key:"handleDotUp",value:function(){this.setState({dragging:!1})}},{key:"handleBlur",value:function(){this.setState({soSpecial:this.handleSpecial(this.state.ang)})}},{key:"dragger",value:function(t){var e=this;t.persist(),this.state.dragging&&this.setState({ang:this.state.ang-(t.clientY-this.state.startY)*Math.PI/240,startY:t.clientY},function(){e.setState({soSpecial:e.handleSpecial(e.state.ang)})})}},{key:"touchdragger",value:function(t){var e=this;this.state.dragging&&this.setState({ang:this.state.ang-(t.touches[0].clientY-this.state.startY)*Math.PI/216,startY:t.touches[0].clientY},function(){e.setState({soSpecial:e.handleSpecial(e.state.ang)})})}},{key:"handleClick",value:function(t,e){t.persist(),this.setState({isModalUp:!0,valInQuestion:e,soSpecial:!1})}},{key:"handleSubmit",value:function(){var t=this;this.isNumber(Number(this.state.valStr))&&("Radians"===this.state.valInQuestion&&this.setState({ang:this.state.valStr},function(){t.setState({soSpecial:t.handleSpecial(t.state.ang)})}),"Degrees"===this.state.valInQuestion&&this.state.valStr.length&&this.setState({ang:this.state.valStr*(Math.PI/180)},function(){t.setState({soSpecial:t.handleSpecial(t.state.ang)})}),"Sine"===this.state.valInQuestion&&Math.abs(this.state.valStr)<=1&&this.setState({ang:Math.asin(this.state.valStr)},function(){t.setState({soSpecial:t.handleSpecial(t.state.ang)})}),"Cosine"===this.state.valInQuestion&&Math.abs(this.state.valStr)<=1&&this.setState({ang:Math.acos(this.state.valStr)},function(){t.setState({soSpecial:t.handleSpecial(t.state.ang)})}),"Tangent"===this.state.valInQuestion&&this.setState({ang:Math.atan(this.state.valStr)},function(){t.setState({soSpecial:t.handleSpecial(t.state.ang)})}),"Cosecant"===this.state.valInQuestion&&Math.abs(this.state.valStr)>1&&this.setState({ang:m.a.acsc(this.state.valStr)},function(){t.setState({soSpecial:t.handleSpecial(t.state.ang)})}),"Secant"===this.state.valInQuestion&&Math.abs(this.state.valStr)>1&&this.setState({ang:m.a.asec(this.state.valStr)},function(){t.setState({soSpecial:t.handleSpecial(t.state.ang)})}),"Cotangent"===this.state.valInQuestion&&this.setState({ang:m.a.acot(this.state.valStr)},function(){t.setState({soSpecial:t.handleSpecial(t.state.ang)})}),this.setState({isModalUp:!1,valStr:""}))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},64:function(t,e,s){}},[[172,2,1]]]);
//# sourceMappingURL=main.0f536258.chunk.js.map