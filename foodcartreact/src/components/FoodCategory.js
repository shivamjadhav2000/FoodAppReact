import React from 'react';
import "./FoodCategory.css"

class FoodCategory extends React.Component{
    constructor(){
        super();
        this.state={
            selecteddata:[]
        }
       
    }
    handlebutton=(i,idx)=>{
        let tempdata=this.props.data
        tempdata[idx].selected=!tempdata[idx].selected
        
        this.props.AddfoodCategory(i,idx,tempdata)
        
    }
    
    
    render(){
return (
    <div className="foodCategoryContainer">
       
       <h2 className="highlight1">Nice! Here are 5 menus we suggest, pick one!</h2>
       <div className="highlight2"><span >Please select types of food to add</span> 
       <div className="questionmark"><span>?</span></div>
       </div>
      
        {this.props.data.map((i,idx)=>{
            return <button onClick={()=>{this.handlebutton(i,idx)}} className={i.selected===true?"selected":""}>{i.type}</button>
           
        })}
        <div>
        <button disabled={!this.props.addedData.length} onClick={()=>{this.props.handleTransition("menuState")}} className="submit">Next</button>

        </div>
    </div>
)
}}

export default FoodCategory;
