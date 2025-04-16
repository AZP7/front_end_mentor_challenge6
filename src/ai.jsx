import React, { useState, useEffect } from 'react'
import MenuTamplate from './MenuTemplate/MenuTamplate'
import "./App.css"

// Import all desktop images
import waffleDesktop from './assets/images/image-waffle-desktop.jpg'
import cremeBruleeDesktop from './assets/images/image-creme-brulee-desktop.jpg'
import macaronDesktop from './assets/images/image-macaron-desktop.jpg'
import tiramisuDesktop from './assets/images/image-tiramisu-desktop.jpg'
import baklavaDesktop from './assets/images/image-baklava-desktop.jpg'
import meringueDesktop from './assets/images/image-meringue-desktop.jpg'
import cakeDesktop from './assets/images/image-cake-desktop.jpg'
import brownieDesktop from './assets/images/image-brownie-desktop.jpg'
import pannaCottaDesktop from './assets/images/image-panna-cotta-desktop.jpg'

// Import all tablet images
import waffleTablet from './assets/images/image-waffle-tablet.jpg'
import cremeBruleeTablet from './assets/images/image-creme-brulee-tablet.jpg'
import macaronTablet from './assets/images/image-macaron-tablet.jpg'
import tiramisuTablet from './assets/images/image-tiramisu-tablet.jpg'
import baklavaTablet from './assets/images/image-baklava-tablet.jpg'
import meringueTablet from './assets/images/image-meringue-tablet.jpg'
import cakeTablet from './assets/images/image-cake-tablet.jpg'
import brownieTablet from './assets/images/image-brownie-tablet.jpg'
import pannaCottaTablet from './assets/images/image-panna-cotta-tablet.jpg'

// Import all mobile images
import waffleMobile from './assets/images/image-waffle-mobile.jpg'
import cremeBruleeMobile from './assets/images/image-creme-brulee-mobile.jpg'
import macaronMobile from './assets/images/image-macaron-mobile.jpg'
import tiramisuMobile from './assets/images/image-tiramisu-mobile.jpg'
import baklavaMobile from './assets/images/image-baklava-mobile.jpg'
import meringueMobile from './assets/images/image-meringue-mobile.jpg'
import cakeMobile from './assets/images/image-cake-mobile.jpg'
import brownieMobile from './assets/images/image-brownie-mobile.jpg'
import pannaCottaMobile from './assets/images/image-panna-cotta-mobile.jpg'

import emptycart from './assets/images/illustration-empty-cart.svg'
import removeItem from './assets/images/icon-remove-item.svg'
import carbon from './assets/images/icon-carbon-neutral.svg'

export default function App() {

  const initialMenu = [
    {
       image: {
            desktop: waffleDesktop,
            tablet: waffleTablet,
            mobile: waffleMobile
       },
       id : 1,
       name: "Waffle with Berries",
       category: "Waffle",
       price: 6.50,
       addToCart: false,
       quantity:1
    },
    {
        image: {
            desktop: cremeBruleeDesktop,
            tablet: cremeBruleeTablet,
            mobile: cremeBruleeMobile
        },
       id : 2,
        name: "Vanilla Bean Crème Brûlée",
        category: "Crème Brûlée",
        price: 7.00,
        addToCart: false,
       quantity:1

     }, 
     {
        image: {
            desktop: macaronDesktop,
            tablet: macaronTablet,
            mobile: macaronMobile
        },
       id : 3,
        name: "Macaron Mix of Five",
        category: "Macaron",
        price: 8.00,
        addToCart: false,
        quantity:1

     },
     {
        image: {
            desktop: tiramisuDesktop,
            tablet: tiramisuTablet,
            mobile: tiramisuMobile
        },
       id : 4,
        name: "Classic Tiramisu",
        category: "Tiramisu",
        price: 5.50,
        addToCart: false,
        quantity:1

     },
     {
        image: {
            desktop: baklavaDesktop,
            tablet: baklavaTablet,
            mobile: baklavaMobile
        },
        id : 5,
        name: "Pistachio Baklava",
        category: "Baklava",
        price: 4.00,
        addToCart: false,
        quantity:1

     },
     {
        image: {
            desktop: meringueDesktop,
            tablet: meringueTablet,
            mobile: meringueMobile
        },
        id : 6,
        name: "Lemon Meringue Pie",
        category: "Pie",
        price: 5.00,
        addToCart: false,
        quantity:1

     },
     {
        image: {
            desktop: cakeDesktop,
            tablet: cakeTablet,
            mobile: cakeMobile
        },
        id : 7,
        name: "Red Velvet Cake",
        category: "Cake",
        price: 4.50,
        addToCart: false,
        quantity:1

     },
     {
        image: {
            desktop: brownieDesktop,
            tablet: brownieTablet,
            mobile: brownieMobile
        },
        id : 8,
        name: "Salted Caramel Brownie",
        category: "Brownie",
        price: 4.50,
        addToCart: false,
        quantity:1

     },
     {
        image: {
            desktop: pannaCottaDesktop,
            tablet: pannaCottaTablet,
            mobile: pannaCottaMobile
        },
        id:9,
        name: "Vanilla Panna Cotta",
        category: "Panna Cotta",
        price: 6.50,
        addToCart:false,
        quantity:1

     }
]

    const [menus, setMenus] = useState(initialMenu)
    const [cart, setCart] = useState(false)
    const [order, setOrder] = useState([])

    useEffect(() => {
      setOrder(menus.filter(item => item.addToCart))
    }, [menus])

    const changeCard = (id) => {
        setMenus((prev =>
          prev.map(menu =>
            menu.id === id ? {...menu, addToCart: !menu.addToCart} : menu )
        ))
    
      }
    
    const decreaseQuantity = (id) => {

        setMenus(prev => (
            prev.map(menu =>
              menu.id === id ? 
              {...menu, quantity: menu.quantity > 1 ? menu.quantity -1 : 1} 
              : menu)
          ))
          }

    const increaseQuantity = (id) => {

        setMenus(prev => (
            prev.map(menu =>
              menu.id === id ? 
              {...menu, quantity: menu.quantity +1} 
              : menu)
          ))
    }

  return (
    <div className="container">
        <div className="menu_holder">
                <h1 className="title">Desserts</h1>
                {
                    menus.map(menu => (
                        <MenuTamplate
                        key={menu.id}
                        category={menu.category}
                        name={menu.name}
                        ImageURL={menu.image.mobile}
                        price={menu.price}
                        handleAddToCart={() => changeCard(menu.id)}
                        addToCart={menu.addToCart}
                        handleDecrease={() => decreaseQuantity(menu.id)}
                        handleIncrease={() => increaseQuantity(menu.id)}
                        quantity={menu.quantity}
                        />
                    ))
                }
        </div>
        <div className="selected_item">
            <h1>Your Cart ({order.length})</h1>
            {
            order.length > 0 ? (
                <>
                    {order.map(menu => (
                        <div className="items_box">
                            <div className="items">
                                <div className="detail">
                                    <h3>{menu.name}</h3>
                                    <p><span>{menu.quantity}x</span> @${menu.price} ${menu.price*menu.quantity}</p>
                                </div>
                                <img src={removeItem} alt="" />
                            </div>
                        </div>
                    ))}
                    <div className="confirm_order">
                        <div className="total_price">
                            <p>Order Total</p>
                            <h2>${order.reduce((total, menu) => total + menu.price * menu.quantity, 0).toFixed(2)}</h2>
                        </div>
                        <p><img src={carbon} alt="" />This is <span>carbon-neutral</span> delivery</p>
                        <button>Confirm Order</button>
                    </div>
                </>
            ) : (
                <div className="empty_box">
                    <div className="image">
                        <img src={emptycart} alt="" />
                    </div>
                    <p>Your added items will appear here</p>
                </div>
            )
            }
        </div>
    </div>
  )
}
