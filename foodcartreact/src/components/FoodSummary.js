import React from "react"
import '../App.css'

const FoodSummary=(props)=>{
    let data=props.data
    data=data.filter((i)=>{
        return (
          i.items!==0
        )})
    return(
    <div>
       {data.length===0?"":<div className="FoodSummaryContainer">
       <p className="highlight1">{props.main}</p>
         {data.map((i)=>{
             return(
                 <div className="summaryItem">
                      <p className="highlight2">{i.name}  * {i.items}</p>
                      <h3>{i.price}$</h3>
                 </div>
                 )
         })}
       </div>}
    </div>)

}
export default FoodSummary