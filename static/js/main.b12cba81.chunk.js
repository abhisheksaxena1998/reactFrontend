(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{131:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n(1),s=n.n(r),i=n(24),c=n.n(i),o=(n(73),n(12)),l=n(17),u=n(15),m=n(14),d=(n(74),n(33),n(34),n(35),function(e){return Object(a.jsx)("nav",{className:"heavy-rain-gradient navbar navbar-light bg-light",children:Object(a.jsx)("div",{className:"container-fluid",children:Object(a.jsxs)("div",{className:"navbar-brand",children:[Object(a.jsx)("img",{alt:"",src:"https://raw.githubusercontent.com/abhisheksaxena1998/reactToDoApplication/main/src/og-image.png",height:"60",loading:"lazy"}),Object(a.jsxs)("strong",{children:["  ","Movie Ticketing System"," "]}),Object(a.jsx)("span",{className:"badge badge-pill badge-secondary",children:e.totalTasks})]})})})}),h=function(e){return Object(a.jsx)("nav",{className:"heavy-rain-gradient navbar navbar-light bg-light",children:Object(a.jsx)("div",{className:"container-fluid",children:Object(a.jsxs)("div",{className:"navbar-brand",children:[Object(a.jsx)("img",{alt:"",src:"https://raw.githubusercontent.com/abhisheksaxena1998/reactToDoApplication/main/src/og-image.png",height:"60",loading:"lazy"}),Object(a.jsxs)("strong",{children:["  ","Movie Ticketing System"," "]}),Object(a.jsx)("span",{className:"badge badge-pill badge-secondary",children:"Loading"})]})})})},b=n(13),g=n(66),j=n.n(g),p=(n(99),n(43),n(67),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={currentItem:{unique_id:"",index:"",name:"",time:"",phonenumber:""},records:[],startDate:"",isLoading:!1},e.handleChange=function(t){e.setState({currentItem:{unique_id:e.state.currentItem.unique_id,name:e.state.currentItem.name,phonenumber:e.state.currentItem.phonenumber,time:t}})},e.handleReset=function(){console.log("reset clicked"),console.log(e.state)},e.handleSubmit=function(){console.log("submit clicked"),console.log(e.state),console.log("Info is ",e.state.startDate),e.setState({currentItem:{unique_id:e.state.currentItem.unique_id,name:e.state.currentItem.name,phonenumber:e.state.currentItem.phonenumber,time:e.state.currentItem.time}});var t=new Date(e.state.currentItem.time).toLocaleString().replace(/,/g,"").slice(0,-2);console.log(t);var n="https://zomsystem.herokuapp.com/addRecord?uniqueid="+e.state.currentItem.unique_id+"&nm="+e.state.currentItem.name+"&phonenumber="+e.state.currentItem.phonenumber+"&time="+t;console.log(n),""!=e.state.currentItem.unique_id&&""!=e.state.currentItem.name&&""!=e.state.currentItem.phonenumber&&""!=e.state.currentItem.time&&(fetch(n),e.componentDidMount())},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0});fetch("https://zomsystem.herokuapp.com/showallrecords").then((function(e){return e.json()})).then((function(t){e.setState({records:t,isLoading:!1}),console.log(e.state)}))}},{key:"render",value:function(){var e=this,t={columns:[{label:"Unique Id",field:"unique_id",width:80},{label:"Index",field:"index",width:70},{label:"Name",field:"name",width:100},{label:"Result",field:"result",width:150},{label:"Time",field:"time",width:200},{label:"Phone Number",field:"phone number",width:200},{label:"Created At",field:"created_at",width:200}],rows:this.state.records},n=this.state;n.records;return n.isLoading?Object(a.jsxs)("div",{children:[Object(a.jsx)(h,{}),Object(a.jsx)("header",{className:"App-header",children:Object(a.jsx)("p",{children:Object(a.jsx)("code",{children:"Loading requested data ..."})})})]}):Object(a.jsxs)("div",{children:[Object(a.jsx)(d,{totalTasks:this.state.records.length}),Object(a.jsx)(b.d,{children:Object(a.jsx)(b.j,{children:Object(a.jsx)(b.c,{md:"6",className:"new-card",children:Object(a.jsxs)("form",{children:[Object(a.jsx)("p",{className:"h5 text-center mb-4",children:"Book Ticket"}),Object(a.jsxs)("div",{className:"grey-text",children:[Object(a.jsx)(b.g,{label:"Name",icon:"address-book",group:!0,type:"text",validate:!0,error:"wrong",required:!0,success:"right",value:this.state.currentItem.name,placeholder:"Enter Name",onChange:function(t){e.setState({currentItem:{unique_id:e.state.currentItem.unique_id,name:t.target.value,phonenumber:e.state.currentItem.phonenumber,time:e.state.currentItem.time}}),console.log(e.state)}}),Object(a.jsx)(b.g,{label:"Phone number ",icon:"phone",group:!0,type:"phone",value:this.state.currentItem.phonenumber,placeholder:"Enter phone",onChange:function(t){e.setState({currentItem:{name:e.state.currentItem.name,unique_id:e.state.currentItem.unique_id,phonenumber:t.target.value,time:e.state.currentItem.time}}),console.log(e.state)}}),Object(a.jsx)(b.g,{label:"Seat no.",icon:"envelope",group:!0,type:"text",validate:!0,error:"wrong",success:"right",value:this.state.currentItem.unique_id,placeholder:"Enter unique id ",onChange:function(t){e.setState({currentItem:{unique_id:t.target.value,name:e.state.currentItem.name,phonenumber:e.state.currentItem.phonenumber,time:e.state.currentItem.time}}),console.log(e.state)}}),Object(a.jsx)(j.a,{value:this.state.currentItem.time,onChange:this.handleChange,timeFormat:!0,closeOnSelect:!0,inputProps:{placeholder:"Select timings of show"}}),"Selected timings :"," ",this.state.currentItem.time?this.state.currentItem.time.toString():"No selected date",console.log("tien is",this.state.currentItem.time)]}),Object(a.jsx)("div",{className:"text-center",children:Object(a.jsx)(b.b,{onClick:this.handleSubmit,children:"Submit"})})]})})})}),Object(a.jsx)(b.e,{className:"tablee",striped:!0,bordered:!0,small:!0,data:t})]})}}]),n}(s.a.Component)),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,135)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))};c.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root")),x()},73:function(e,t,n){},74:function(e,t,n){}},[[131,1,2]]]);
//# sourceMappingURL=main.b12cba81.chunk.js.map