import React, { useEffect, useState } from 'react'
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
import completeOrder from './assets/images/icon-order-confirmed.svg'

export default function App() {

    const initialMenu = [
        {
            image: {
                desktop: waffleDesktop,
                tablet: waffleTablet,
                mobile: waffleMobile
            },
            id: 1,
            name: "Waffle with Berries",
            category: "Waffle",
            price: 6.50,
            AddtoCart: false,
            Quantity: 1
        },
        {
            image: {
                desktop: cremeBruleeDesktop,
                tablet: cremeBruleeTablet,
                mobile: cremeBruleeMobile
            },
            id: 2,
            name: "Vanilla Bean Crème Brûlée",
            category: "Crème Brûlée",
            price: 7.00,
            AddtoCart: false,
            Quantity: 1

        },
        {
            image: {
                desktop: macaronDesktop,
                tablet: macaronTablet,
                mobile: macaronMobile
            },
            id: 3,
            name: "Macaron Mix of Five",
            category: "Macaron",
            price: 8.00,
            AddtoCart: false,
            Quantity: 1

        },
        {
            image: {
                desktop: tiramisuDesktop,
                tablet: tiramisuTablet,
                mobile: tiramisuMobile
            },
            id: 4,
            name: "Classic Tiramisu",
            category: "Tiramisu",
            price: 5.50,
            AddtoCart: false,
            Quantity: 1

        },
        {
            image: {
                desktop: baklavaDesktop,
                tablet: baklavaTablet,
                mobile: baklavaMobile
            },
            id: 5,
            name: "Pistachio Baklava",
            category: "Baklava",
            price: 4.00,
            AddtoCart: false,
            Quantity: 1

        },
        {
            image: {
                desktop: meringueDesktop,
                tablet: meringueTablet,
                mobile: meringueMobile
            },
            id: 6,
            name: "Lemon Meringue Pie",
            category: "Pie",
            price: 5.00,
            AddtoCart: false,
            Quantity: 1

        },
        {
            image: {
                desktop: cakeDesktop,
                tablet: cakeTablet,
                mobile: cakeMobile
            },
            id: 7,
            name: "Red Velvet Cake",
            category: "Cake",
            price: 4.50,
            AddtoCart: false,
            Quantity: 1

        },
        {
            image: {
                desktop: brownieDesktop,
                tablet: brownieTablet,
                mobile: brownieMobile
            },
            id: 8,
            name: "Salted Caramel Brownie",
            category: "Brownie",
            price: 4.50,
            AddtoCart: false,
            Quantity: 1

        },
        {
            image: {
                desktop: pannaCottaDesktop,
                tablet: pannaCottaTablet,
                mobile: pannaCottaMobile
            },
            id: 9,
            name: "Vanilla Panna Cotta",
            category: "Panna Cotta",
            price: 6.50,
            AddtoCart: false,
            Quantity: 1

        }
    ]

    const [menus, SetMenu] = useState(initialMenu)
    const [cart, SetCart] = useState(false)
    const [disable,Setdisable] = useState(false)

    const [order, Setorder] = useState([])

    const [confirmOrder,SetconfirmOrder] = useState(false)

    const HandleOrder = ()=>{
        SetconfirmOrder(prev=> prev  = true)
        Setdisable(prev=>prev= true)
    }

    useEffect(() => {
        Setorder(menus.filter(item => item.AddtoCart))
    }, [menus])

    const total_value = order.length > 0 ? order.reduce((acc, item) => acc + item.price * item.Quantity, 0) : '0'

    const removeOrder = (id) => {
        Setorder(order.filter(item => item.id !== id))
        SetMenu((prev =>
            prev.map(menu =>
                menu.id === id ? { ...menu, AddtoCart: false } : menu)
        ))
    }

    const changeCard = (id) => {

        SetMenu((prev =>
            prev.map(menu =>
                menu.id === id ? { ...menu, AddtoCart: !cart } : menu)
        ))

    }
    const restart = ()=>{
        SetMenu((prev=>
            prev.map(menu=>
                menu.AddtoCart ? {...menu,AddtoCart : false } : menu
            )
        )
        )
        SetconfirmOrder(prev=> prev = false)
        Setdisable(prev=>prev= false)

    }

    const DecreaseQuantity = (id) => {

        SetMenu(prev => (
            prev.map(menu =>
                menu.id === id ?
                    { ...menu, Quantity: menu.Quantity > 1 ? menu.Quantity - 1 : 1 }
                    : menu)
        ))
    }

    const IncreaseQuantity = (id) => {

        SetMenu(prev => (
            prev.map(menu =>
                menu.id === id ?
                    { ...menu, Quantity: menu.Quantity + 1 }
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
                            AddtoCart={menu.AddtoCart}
                            HandleDecrease={() => DecreaseQuantity(menu.id)}
                            HandelIncrease={() => IncreaseQuantity(menu.id)}
                            Quantity={menu.Quantity}
                            ButtonDisable={disable}
                        />
                    ))
                }
            </div>
            <div className="selected_item">
                <h1>{`Your Cart (${order.length})`}</h1>

                {
                    order.length > 0 ? (
                        <>
                            {
                                order.map(order => (
                                    <div className="items_box" key={order.id}>
                                        <div className="items">
                                            <div className="detail">
                                                <h3>{order.name}</h3>
                                                <p><span>{order.Quantity}x</span> @${order.price} <span>${order.Quantity * order.price}</span></p>
                                            </div>
                                            <img src={removeItem} onClick={() => removeOrder(order.id)} alt="" />
                                        </div>
                                    </div>
                                ))
                            }
                            <div className="confirm_order">
                                <div className="total_price">
                                    <p>Order Total</p>
                                    <h2>${total_value}</h2>
                                </div>
                                <p><img src={carbon} alt="" />This is <span>carbon-neutral</span> delivery</p>
                                <button onClick={HandleOrder}>Confirm Order</button>
                            </div>

                        </>
                    ) :
                        <div className="empty_box">
                            <div className="image">
                                <img src={emptycart} alt="" />
                            </div>
                            <p>Your added items will appear here</p>
                        </div>

                }
            </div>
                    {
                        confirmOrder ? (
                            <>           

                                <div className={`order_complete ${confirmOrder ? "display" : ""}`}>

                                    <div className="complete_txt">
                                        <img src={completeOrder} alt="" />
                                        <h1>Order Confirmed</h1>
                                        <p>We hope you enjoy your food!</p>
                                    </div>
                                {
                                    order.map(order=>(

                                        <div className="complete_items" key={order.id}>
                                            <div className="complete_item">
                                                <div className="oredr_img_name">
                                                    <img src={order.image.tablet} alt="" />
                                                    <div className="item_">
                                                        <p>{order.name}</p>
                                                        <p><span>{order.Quantity}x</span> @${order.price}</p>
                                                    </div>
                                                </div>
                                                <p>${(order.Quantity * order.price).toFixed(2)}</p>
                                            </div>

                                        </div>
                                    ))
                                }
                                    <div className="total_order">
                                        <p>Order total</p>
                                        <p>${total_value.toFixed(2)}</p>
                                    </div>

                                    <button onClick={restart}>Start New Order</button>

                                </div>
                            
                            </>
                        ):
                        null
                    }
        </div>
    )
}
