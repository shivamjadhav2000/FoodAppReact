import React  from 'react';
import FoodCategory from "./components/FoodCategory"
import Navbar from "./components/Navbar"
import FoodMenu from "./components/FoodMenu.js"
import './App.css';
import FoodItem from './components/FoodItem.js';
import FoodSummary from './components/FoodSummary.js';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      foodCategory:[{type:"American",selected:true},{type:"Asian",selected:false},{type:"AsianFusion",selected:false},{type:"BBQ",selected:false},{type:"Bar_PubFood",selected:false},{type:"Burgers",selected:false},{type:"Chicken",selected:false},{type:"Desserts",selected:false}],
      AddedfoodCategory:["American"],
      TransitionState:["FoodCategorystate"],
      currentCourse:[],
      data:{
      American:[
      {name:"dish 1",main:"Burger",imagePath:"burger.jpg" ,about:"this is wonderful dish must try!",price:9,key:"A1",items:0},
      {name:"dish 2",imagePath:"burger.jpg",about:"this is wonderful dish must try!",price:9,key:"A2",items:0},
      {name:"dish 3",imagePath:"burger.jpg",about:"this is wonderful dish must try!",price:8,key:"A3",items:0},
      {name:"dish 4",imagePath:"burger.jpg",about:"this is wonderful dish must try!",price:7,key:"A4",items:0},
      {name:"dish 5",imagePath:"burger.jpg",about:"this is wonderful dish must try!",price:6,key:"A5",items:0}],
      Asian:[
      {key:"A6",name:"dish 1",main:"Cake",imagePath:"cake.jpg",about:"this is wonderful dish must try!",price:9,items:0},
      {key:"A7",name:"dish 2",about:"this is wonderful dish must try!",imagePath:"cake.jpg",price:9,items:0},
      {key:"A8",name:"dish 3",about:"this is wonderful dish must try!",imagePath:"cake.jpg",price:8,items:0},
      {key:"A9",name:"dish 4",about:"this is wonderful dish must try!",imagePath:"cake.jpg",price:7,items:0},
      {key:"A10",name:"dish 5",about:"this is wonderful dish must try!",imagePath:"cake.jpg",price:6,items:0}],
      AsianFusion:[
      {key:"A11",name:"dish 1",main:"pizza",about:"this is wonderful dish must try!",imagePath:"pizza.jpg",price:9,items:0},
      {key:"A12",name:"dish 2",about:"this is wonderful dish must try!",imagePath:"pizza.jpg",price:9,items:0},
      {key:"A13",name:"dish 3",about:"this is wonderful dish must try!",imagePath:"pizza.jpg",price:8,items:0},
      {key:"A14",name:"dish 4",about:"this is wonderful dish must try!",imagePath:"pizza.jpg",price:7,items:0},
      {key:"A15",name:"dish 5",about:"this is wonderful dish must try!",imagePath:"pizza.jpg",price:6,items:0}],
      BBQ:[
      {key:"A16",name:"dish 1",main:"pasta",about:"this is wonderful dish must try!",imagePath:"pasta.jpg",price:9,items:0},
      {key:"A17",name:"dish 2",about:"this is wonderful dish must try!",imagePath:"pasta.jpg",price:9,items:0},
      {key:"A18",name:"dish 3",about:"this is wonderful dish must try!",imagePath:"pasta.jpg",price:8,items:0},
      {key:"A19",name:"dish 4",about:"this is wonderful dish must try!",imagePath:"pasta.jpg",price:7,items:0},
      {key:"A20",name:"dish 5",about:"this is wonderful dish must try!",imagePath:"pasta.jpg",price:6,items:0}],
      Bar_PubFood:[
        {name:"dish 1",main:"Burger",imagePath:"burger.jpg" ,about:"this is wonderful dish must try!",price:9,key:"A21",items:0},
        {name:"dish 2",imagePath:"burger.jpg",about:"this is wonderful dish must try!",price:9,key:"A22",items:0},
        {name:"dish 3",imagePath:"burger.jpg",about:"this is wonderful dish must try!",price:8,key:"A23",items:0},
        {name:"dish 4",imagePath:"burger.jpg",about:"this is wonderful dish must try!",price:7,key:"A24",items:0},
        {name:"dish 5",imagePath:"burger.jpg",about:"this is wonderful dish must try!",price:6,key:"A25",items:0}],
        Burgers:[
        {key:"A26",name:"dish 1",main:"Cake",imagePath:"cake.jpg",about:"this is wonderful dish must try!",price:9,items:0},
        {key:"A27",name:"dish 2",about:"this is wonderful dish must try!",imagePath:"cake.jpg",price:9,items:0},
        {key:"A28",name:"dish 3",about:"this is wonderful dish must try!",imagePath:"cake.jpg",price:8,items:0},
        {key:"A29",name:"dish 4",about:"this is wonderful dish must try!",imagePath:"cake.jpg",price:7,items:0},
        {key:"A30",name:"dish 5",about:"this is wonderful dish must try!",imagePath:"cake.jpg",price:6,items:0}],
        Chicken:[
        {key:"A31",name:"dish 1",main:"pizza",about:"this is wonderful dish must try!",imagePath:"pizza.jpg",price:9,items:0},
        {key:"A32",name:"dish 2",about:"this is wonderful dish must try!",imagePath:"pizza.jpg",price:9,items:0},
        {key:"A33",name:"dish 3",about:"this is wonderful dish must try!",imagePath:"pizza.jpg",price:8,items:0},
        {key:"A34",name:"dish 4",about:"this is wonderful dish must try!",imagePath:"pizza.jpg",price:7,items:0},
        {key:"A35",name:"dish 5",about:"this is wonderful dish must try!",imagePath:"pizza.jpg",price:6,items:0}],
        Desserts:[
        {key:"A36",name:"dish 1",main:"pasta",about:"this is wonderful dish must try!",imagePath:"pasta.jpg",price:9,items:0},
        {key:"A37",name:"dish 2",about:"this is wonderful dish must try!",imagePath:"pasta.jpg",price:9,items:0},
        {key:"A38",name:"dish 3",about:"this is wonderful dish must try!",imagePath:"pasta.jpg",price:8,items:0},
        {key:"A39",name:"dish 4",about:"this is wonderful dish must try!",imagePath:"pasta.jpg",price:7,items:0},
        {key:"A40",name:"dish 5",about:"this is wonderful dish must try!",imagePath:"pasta.jpg",price:6,items:0}]
    }, 
  }}
  handleTransition=(prop,Main="")=>{
    let cc=this.state.currentCourse
    if(Main!==""){
        cc.push(Main)
    this.setState({
      currentCourse:cc
    })}
    let tempstates=this.state.TransitionState
    tempstates[0]=prop
    this.setState({
      TransitionState:tempstates
    })   
  }
  handleCounterProduct=(operator="+",id)=>{
    
    let tempdata=this.state.data[this.state.currentCourse.slice(-1)[0]]
    let data=this.state.data
    let index=tempdata.findIndex(x=>x.key===id)
    if(operator==="+"){
      tempdata[index].items++
      }
    else if(operator==="-" && tempdata[index].items>0){
      tempdata[index].items--
    }
    data[this.state.currentCourse.slice(-1)[0]]=tempdata
    this.setState({
      data:data
    })
    
    }
  
  AddfoodCategory=(item,idx,tempdata)=>{
    let Tempcatgdata=this.state.AddedfoodCategory
    if (Tempcatgdata.indexOf(item.type)===-1){
      Tempcatgdata.push(item.type)
    }
    else{
      Tempcatgdata = Tempcatgdata.filter(function(i) { return i !== item.type })
    }
    this.setState({
      foodCategory:tempdata
    })
    this.setState({
      AddedfoodCategory:Tempcatgdata
    })
  }
  render(){
    return(
      <div className="App">
      <Navbar />
      <div className={this.state.TransitionState[0]==="FoodCategorystate"?"":"hideContainer"}>
      <FoodCategory 
      data={this.state.foodCategory} 
      handleTransition={this.handleTransition} 
      AddfoodCategory={this.AddfoodCategory} 
      addedData={this.state.AddedfoodCategory}/>
      </div>
      <div className={this.state.TransitionState[0]==="menuState"?"":"hideContainer"}>
      <h2 className="highlight1">Nice! Here are 5 menus we suggest, pick one!</h2>
        <div className="highlight2"><span >Please select types of food to add</span> 
            <div className="questionmark"><span>?</span></div>
        </div>
      { this.state.AddedfoodCategory.map((i)=>{
        
        return <FoodMenu 
        CategoryName={i}
        handleTransition={this.handleTransition} 
        data={this.state.data[i]}/>
      }) 
      }

      <span><button 
      onClick={()=>{this.handleTransition("FoodCategorystate")}} 
      className="Back">BACK</button>
      </span>
      </div>
      <div className={this.state.TransitionState[0]==="FoodItemDisplayState"?"":"hideContainer"}>
      <h2 className="highlight1">Great choice. Let us know which items you can or can't make</h2>
        <div className="highlight2"><span >Our suggested prices are entered below, but you can change this now or later.</span> 
            <div className="questionmark"><span>?</span></div>
        </div> 
      <FoodItem 
      handleCounterProduct={this.handleCounterProduct}
        data={this.state.data[this.state.currentCourse.slice(-1)[0]]}
        
      />
        <span ><button 
      onClick={()=>{this.handleTransition("menuState")}} 
      className="Back">BACK</button>
      <button 
      onClick={()=>{this.handleTransition("FoodSummaryState")}} 
      className="Next">NEXT</button>
      </span>
      </div>
      <div className={this.state.TransitionState[0]==="FoodSummaryState"?"":"hideContainer"}>
          <div className={this.state.TransitionState[0]==="FoodSummaryState"?"FoodSummary":"hideContainer"}>
             {[...new Set(this.state.currentCourse)].map((i)=>{
               return (<FoodSummary main={this.state.data[i][0].main} data={this.state.data[i]}/>)
             })}   
            
          </div> 
          <div> <span>
                <button 
                    onClick={()=>{this.handleTransition("FoodItemDisplayState")}} 
                    className="Back">BACK
                </button>
                </span>
                <span>
                <button 
                className="Checkout">Checkout
                </button>
                </span>
                
          </div>
      </div>
            
      
     </div>
    )
  }
}

export default App;
