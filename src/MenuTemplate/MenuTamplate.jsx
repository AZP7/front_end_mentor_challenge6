import React,{useState} from 'react'
import './MenuTamplate.css'
import cartIcon from '../assets/images/icon-add-to-cart.svg'
import minusIcon from '../assets/images/icon-decrement-quantity.svg'
import plusIcon from '../assets/images/icon-increment-quantity.svg'


export default function MenuTamplate({name,category,price,ImageURL,handleAddToCart,ButtonDisable,AddtoCart,HandleDecrease,HandelIncrease,Quantity}) {

  const DecrementQuantity =()=>{
      HandleDecrease()
  }

  const IncrementQuantity = ()=>{
    HandelIncrease()
  }

  const HandleCard = () => {
    handleAddToCart();
  };

  return (
    <div className="menu_box">
        <div className="item_photo">
          <img src={ImageURL} alt="" />
        </div>
        {
          AddtoCart ? 
            <div className="set_quantity">
              <img src={minusIcon} alt="" onClick={()=>DecrementQuantity()} className={ButtonDisable ? 'disable' : ''}/>
              <p>{Quantity}</p>
              <img src={plusIcon} alt="" onClick={()=>IncrementQuantity()} className={ButtonDisable ? 'disable' : ''}/>
            </div>
           : 
            <button className={`add_to_cart ${ButtonDisable ? 'disable' : ''}`} onClick={()=>HandleCard()}>
              <img src={cartIcon} alt="" />
              Add to Cart
            </button>
        }
        

        <div className="item_detail">
            <p >{category}</p>
            <h2>{name}</h2>
            <p>${price}</p>
        </div>
    </div>
  )
}
