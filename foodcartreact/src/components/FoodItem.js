import React  from 'react';
import './FoodItem.css'
const FoodItem=(props)=>{
    let display=false
    let main=""
    if (props.data){
        display=true
        main=props.data[0]
    }
    
    return(
        <div >
            <p className="highlight1">{display && main.main}</p>
            <div className="FoodItemsContainer">
            {display && props.data.map((i)=>{
                return(
                <div className="FoodItem">
                     <img src={i.imagePath} className="Image" alt="imageHere" />
                     <h3 className="highlight1" > {i.name}</h3>
                     <div className="highlight2"><span >{i.about}</span></div>
                     <div className="buttonContainer">
                            <span ><button onClick={()=>props.handleCounterProduct("-",i.key)} className="Btn">-</button></span><strong>{i.price}$</strong><span><button onClick={()=>props.handleCounterProduct("+",i.key)} className="Btn">{i.items>0?i.items:"+"}</button></span>
                     </div>
                </div>)
            })}
            </div>
            
        </div>
    )
}

export default FoodItem