(this.webpackJsonpanimals=this.webpackJsonpanimals||[]).push([[0],{34:function(t,e,a){t.exports=a(62)},61:function(t,e,a){},62:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),l=a(30),o=a.n(l),i=a(19),c=a(6),s=a(7),u=a(9),m=a(8),d=a(10),p=a(14),f=a(11);var h={textDecoration:"none",color:"#fff"},b={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},y=function(){return r.a.createElement("header",{style:b},r.a.createElement("h1",null,"AnimalList"),r.a.createElement(p.b,{style:h,to:"/"},"Home")," | ",r.a.createElement(p.b,{style:h,to:"/about"},"About"))},g=function(t){function e(){var t,a;Object(c.a)(this,e);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(r)))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc solid",textDecoration:a.props.animal.adopted?"line-through":"none"}},a}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.animal,e=t.id,a=t.title;return r.a.createElement("div",{style:this.getStyle()},r.a.createElement("p",null,r.a.createElement("input",{type:"checkbox",onChange:this.props.markAdopted.bind(this,e)})," "," ",a,r.a.createElement("button",{onClick:this.props.delAnimal.bind(this,e),style:j},"X")))}}]),e}(n.Component),j={background:"#ff0000",color:"#fff",border:"none",padding:"5px 8px",borderRadius:"50%",cursor:"pointer",float:"right"},v=g,A=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.props.animals.map((function(e){return r.a.createElement(v,{key:e.id,animal:e,markAdopted:t.props.markAdopted,delAnimal:t.props.delAnimal})}))}}]),e}(n.Component),E=a(33),O=function(t){function e(){var t,a;Object(c.a)(this,e);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(r)))).state={title:""},a.onChange=function(t){return a.setState(Object(E.a)({},t.target.name,t.target.value))},a.onSubmit=function(t){t.preventDefault(),a.props.addAnimal(a.state.title),a.setState({title:""})},a}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},r.a.createElement("input",{type:"text",name:"title",placeholder:"Add Animal...",value:this.state.title,onChange:this.onChange,style:{flex:"10",padding:"5px"}}),r.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),e}(n.Component);var k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"About"),r.a.createElement("p",null,"This is an where all the animals in our facility are logged so we have proper accountability of all of our animals."))},x=a(15),S=a.n(x),C=(a(61),function(t){function e(){var t,a;Object(c.a)(this,e);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(r)))).state={animals:[]},a.markAdopted=function(t){a.setState({animals:a.state.animals.map((function(e){return e.id===t&&(e.adopted=!e.adopted),e}))})},a.delAnimal=function(t){S.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then((function(e){return a.setState({animals:Object(i.a)(a.state.animals.filter((function(e){return e.id!==t})))})}))},a.addAnimal=function(t){S.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,adopted:!1}).then((function(t){return a.setState({animals:[].concat(Object(i.a)(a.state.animals),[t.data])})}))},a}return Object(d.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;S.a.get("https://jsonplaceholder.typicode.com/todos").then((function(e){return t.setState({animals:e.data})}))}},{key:"render",value:function(){var t=this;return r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(y,null),r.a.createElement(f.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{addAnimal:t.addAnimal}),r.a.createElement(A,{animals:t.state.animals,markAdopted:t.markAdopted,delAnimal:t.delAnimal}))}}),r.a.createElement(f.a,{path:"/about",component:k}))))}}]),e}(n.Component));o.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.ec5caa7c.chunk.js.map