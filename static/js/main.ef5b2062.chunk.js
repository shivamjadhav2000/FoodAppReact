(this.webpackJsonpfoodreactapp=this.webpackJsonpfoodreactapp||[]).push([[0],[,,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),s=a.n(i),n=a(7),r=a.n(n),o=(a(14),a(8)),m=a(1),u=a(2),d=a(4),c=a(3),l=(a(15),function(e){Object(d.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).handlebutton=function(t,a){var i=e.props.data;i[a].selected=!i[a].selected,e.props.AddfoodCategory(t,a,i)},e.state={selecteddata:[]},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"foodCategoryContainer"},s.a.createElement("h1",null,"Food Category"),s.a.createElement("h1",null,"Please select types of food to add"),this.props.data.map((function(t,a){return s.a.createElement("button",{onClick:function(){e.handlebutton(t,a)},className:!0===t.selected?"selected":""},t.type)})),s.a.createElement("div",null,s.a.createElement("button",{disabled:!this.props.addedData.length,onClick:function(){e.props.handleTransition("menuState")},className:"submit"},"Next")))}}]),a}(s.a.Component)),h=(a(16),function(){return s.a.createElement("div",{className:"navbarContainer"},s.a.createElement("span",{className:"logo"},"Food logo"))}),p=(a(17),function(e){var t=0,a=[];for(t=0;t<4;t++)a.push(e.data[t]);return s.a.createElement("div",{className:"Container"},s.a.createElement("div",{className:"imgContainer"},s.a.createElement("img",{src:"food.webp",alt:"imagehere",width:"90",height:"90"}),s.a.createElement("p",{className:"Label"},e.data[0].main),s.a.createElement("h2",null,"Popular Items")),s.a.createElement("button",{onClick:function(){e.handleTransition("FoodItemDisplayState",e.CategoryName)},className:"select"},"select"),a.map((function(e){return s.a.createElement("div",{className:"summary"},s.a.createElement("div",{className:"nameContainer"},s.a.createElement("h2",null,e.name),s.a.createElement("p",{className:"price"},"price ",e.price,"$")),s.a.createElement("p",null,e.about))})))}),g=(a(6),a(18),function(e){var t=!1,a="";return e.data&&(t=!0,a=e.data[0]),s.a.createElement("div",null,s.a.createElement("h1",null,t&&a.main),s.a.createElement("div",{className:"FoodItemsContainer"},t&&e.data.map((function(t){return s.a.createElement("div",{className:"FoodItem"},s.a.createElement("img",{src:t.imagePath,className:"Image",alt:"imageHere"}),s.a.createElement("h2",null," ",t.name),s.a.createElement("p",null,t.about),s.a.createElement("div",{className:"buttonContainer"},s.a.createElement("span",null,s.a.createElement("button",{onClick:function(){return e.handleCounterProduct("-",t.key)},className:"Btn"},"-")),t.price,"$",s.a.createElement("span",null,s.a.createElement("button",{onClick:function(){return e.handleCounterProduct("+",t.key)},className:"Btn"},t.items>0?t.items:"+"))))}))))}),y=function(e){var t=e.data;return t=t.filter((function(e){return 0!==e.items})),s.a.createElement("div",null,0===t.length?"":s.a.createElement("div",null,s.a.createElement("h3",null,e.main),t.map((function(e){return s.a.createElement("div",{className:"summaryItem"},s.a.createElement("p",null,e.name,"  * ",e.items),s.a.createElement("h4",null,e.price,"$"))}))))},f=function(e){Object(d.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).handleTransition=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=e.state.currentCourse;""!==a&&(i.push(a),e.setState({currentCourse:i}));var s=e.state.TransitionState;s[0]=t,e.setState({TransitionState:s})},e.handleCounterProduct=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"+",a=arguments.length>1?arguments[1]:void 0,i=e.state.data[e.state.currentCourse.slice(-1)[0]],s=e.state.data,n=i.findIndex((function(e){return e.key===a}));"+"===t?i[n].items++:"-"===t&&i[n].items>0&&i[n].items--,s[e.state.currentCourse.slice(-1)[0]]=i,e.setState({data:s})},e.AddfoodCategory=function(t,a,i){var s=e.state.AddedfoodCategory;-1===s.indexOf(t.type)?s.push(t.type):s=s.filter((function(e){return e!==t.type})),e.setState({foodCategory:i}),e.setState({AddedfoodCategory:s})},e.state={foodCategory:[{type:"American",selected:!0},{type:"Asian",selected:!1},{type:"AsianFusion",selected:!1},{type:"BBQ",selected:!1},{type:"Bar_PubFood",selected:!1},{type:"Burgers",selected:!1},{type:"Chicken",selected:!1},{type:"Desserts",selected:!1}],AddedfoodCategory:["American"],TransitionState:["FoodCategorystate"],currentCourse:[],data:{American:[{name:"dish 1",main:"Burger",imagePath:"burger.jpg",about:"this is wonderful dish must try!",price:9,key:"A1",items:0},{name:"dish 2",imagePath:"burger.jpg",about:"this is wonderful dish must try!",price:9,key:"A2",items:0},{name:"dish 3",imagePath:"burger.jpg",about:"this is wonderful dish must try!",price:8,key:"A3",items:0},{name:"dish 4",imagePath:"burger.jpg",about:"this is wonderful dish must try!",price:7,key:"A4",items:0},{name:"dish 5",imagePath:"burger.jpg",about:"this is wonderful dish must try!",price:6,key:"A5",items:0}],Asian:[{key:"A6",name:"dish 1",main:"Cake",imagePath:"cake.jpg",about:"this is wonderful dish must try!",price:9,items:0},{key:"A7",name:"dish 2",about:"this is wonderful dish must try!",imagePath:"cake.jpg",price:9,items:0},{key:"A8",name:"dish 3",about:"this is wonderful dish must try!",imagePath:"cake.jpg",price:8,items:0},{key:"A9",name:"dish 4",about:"this is wonderful dish must try!",imagePath:"cake.jpg",price:7,items:0},{key:"A10",name:"dish 5",about:"this is wonderful dish must try!",imagePath:"cake.jpg",price:6,items:0}],AsianFusion:[{key:"A11",name:"dish 1",main:"pizza",about:"this is wonderful dish must try!",imagePath:"pizza.jpg",price:9,items:0},{key:"A12",name:"dish 2",about:"this is wonderful dish must try!",imagePath:"pizza.jpg",price:9,items:0},{key:"A13",name:"dish 3",about:"this is wonderful dish must try!",imagePath:"pizza.jpg",price:8,items:0},{key:"A14",name:"dish 4",about:"this is wonderful dish must try!",imagePath:"pizza.jpg",price:7,items:0},{key:"A15",name:"dish 5",about:"this is wonderful dish must try!",imagePath:"pizza.jpg",price:6,items:0}],BBQ:[{key:"A16",name:"dish 1",main:"pasta",about:"this is wonderful dish must try!",imagePath:"pasta.jpg",price:9,items:0},{key:"A17",name:"dish 2",about:"this is wonderful dish must try!",imagePath:"pasta.jpg",price:9,items:0},{key:"A18",name:"dish 3",about:"this is wonderful dish must try!",imagePath:"pasta.jpg",price:8,items:0},{key:"A19",name:"dish 4",about:"this is wonderful dish must try!",imagePath:"pasta.jpg",price:7,items:0},{key:"A20",name:"dish 5",about:"this is wonderful dish must try!",imagePath:"pasta.jpg",price:6,items:0}],Bar_PubFood:[{name:"dish 1",main:"Burger",imagePath:"burger.jpg",about:"this is wonderful dish must try!",price:9,key:"A21",items:0},{name:"dish 2",imagePath:"burger.jpg",about:"this is wonderful dish must try!",price:9,key:"A22",items:0},{name:"dish 3",imagePath:"burger.jpg",about:"this is wonderful dish must try!",price:8,key:"A23",items:0},{name:"dish 4",imagePath:"burger.jpg",about:"this is wonderful dish must try!",price:7,key:"A24",items:0},{name:"dish 5",imagePath:"burger.jpg",about:"this is wonderful dish must try!",price:6,key:"A25",items:0}],Burgers:[{key:"A26",name:"dish 1",main:"Cake",imagePath:"cake.jpg",about:"this is wonderful dish must try!",price:9,items:0},{key:"A27",name:"dish 2",about:"this is wonderful dish must try!",imagePath:"cake.jpg",price:9,items:0},{key:"A28",name:"dish 3",about:"this is wonderful dish must try!",imagePath:"cake.jpg",price:8,items:0},{key:"A29",name:"dish 4",about:"this is wonderful dish must try!",imagePath:"cake.jpg",price:7,items:0},{key:"A30",name:"dish 5",about:"this is wonderful dish must try!",imagePath:"cake.jpg",price:6,items:0}],Chicken:[{key:"A31",name:"dish 1",main:"pizza",about:"this is wonderful dish must try!",imagePath:"pizza.jpg",price:9,items:0},{key:"A32",name:"dish 2",about:"this is wonderful dish must try!",imagePath:"pizza.jpg",price:9,items:0},{key:"A33",name:"dish 3",about:"this is wonderful dish must try!",imagePath:"pizza.jpg",price:8,items:0},{key:"A34",name:"dish 4",about:"this is wonderful dish must try!",imagePath:"pizza.jpg",price:7,items:0},{key:"A35",name:"dish 5",about:"this is wonderful dish must try!",imagePath:"pizza.jpg",price:6,items:0}],Desserts:[{key:"A36",name:"dish 1",main:"pasta",about:"this is wonderful dish must try!",imagePath:"pasta.jpg",price:9,items:0},{key:"A37",name:"dish 2",about:"this is wonderful dish must try!",imagePath:"pasta.jpg",price:9,items:0},{key:"A38",name:"dish 3",about:"this is wonderful dish must try!",imagePath:"pasta.jpg",price:8,items:0},{key:"A39",name:"dish 4",about:"this is wonderful dish must try!",imagePath:"pasta.jpg",price:7,items:0},{key:"A40",name:"dish 5",about:"this is wonderful dish must try!",imagePath:"pasta.jpg",price:6,items:0}]}},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App"},s.a.createElement(h,null),s.a.createElement("div",{className:"FoodCategorystate"===this.state.TransitionState[0]?"":"hideContainer"},s.a.createElement(l,{data:this.state.foodCategory,handleTransition:this.handleTransition,AddfoodCategory:this.AddfoodCategory,addedData:this.state.AddedfoodCategory})),s.a.createElement("div",{className:"menuState"===this.state.TransitionState[0]?"":"hideContainer"},this.state.AddedfoodCategory.map((function(t){return s.a.createElement(p,{CategoryName:t,handleTransition:e.handleTransition,data:e.state.data[t]})})),s.a.createElement("span",null,s.a.createElement("button",{onClick:function(){e.handleTransition("FoodCategorystate")},className:"submit"},"back"),s.a.createElement("button",{className:"submit"},"next"))),s.a.createElement("div",{className:"FoodItemDisplayState"===this.state.TransitionState[0]?"":"hideContainer"},s.a.createElement(g,{handleCounterProduct:this.handleCounterProduct,data:this.state.data[this.state.currentCourse.slice(-1)[0]]}),s.a.createElement("span",null,s.a.createElement("button",{onClick:function(){e.handleTransition("menuState")},className:"submit"},"back"),s.a.createElement("button",{onClick:function(){e.handleTransition("FoodSummaryState")},className:"submit"},"next"))),s.a.createElement("div",{className:"FoodSummaryState"===this.state.TransitionState[0]?"FoodSummary":"hideContainer"},Object(o.a)(new Set(this.state.currentCourse)).map((function(t){return s.a.createElement(y,{main:e.state.data[t][0].main,data:e.state.data[t]})})),s.a.createElement("span",null,s.a.createElement("button",{onClick:function(){e.handleTransition("FoodItemDisplayState")},className:"Submit"},"back"))))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.ef5b2062.chunk.js.map