import React from 'react';
import './FoodMenu.css'

const FoodMenu=(props)=>{
    var j=0;
    const data=[]
    for(j=0;j<4;j++){
        data.push(props.data[j])
    }
    return(
    <div >
        
       <div className="Container">
                <div className="topContainer">
                    <img className="IMG" src="foodMenu.jpg" alt="food.webp" width="90" height="90"/> 
                    <button onClick={()=>{props.handleTransition("FoodItemDisplayState",props.CategoryName)}} className="select">{props.data[0].main}</button>
                    <div><h2 className="sideTitle">Popular Items</h2></div>
                </div>
        
                
                <div className="bottomContainer"> 
                {
                data.map((i)=>{
                        return (
                            <div className="summary">
                                <div className="nameContainer">
                                        <div className="SummaryName">{i.name}</div>
                                        <div className="SummaryAbout"><strong>{i.price}$</strong></div>
                                    </div>        
                                    <p className="SummaryAbout">{i.about}</p>

                            </div>
                            )
                    })
                }
                </div>
            </div>
        
    </div>)
}
export default FoodMenu