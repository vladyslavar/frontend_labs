import React, {Component} from "react";
import './GoodsCard.css';

class Goods extends Component
{
    render()
    {
        return(
            <div className="maindiv">
                {this.props.goodsitems.map((item, index) => 
                    <div className="data"> 
                        <img src={require("" + item.photo)} alt="" height='180px' width='180px'></img> 
                        <p key={index}>Product: {item.name}</p> 
                        <p key={index}>Price: {item.price}</p>
                    </div>)}
                {console.log(this.props.goodsitems.map((item) => item.photo))}
            </div>
            
        )
    }
}

export default Goods;