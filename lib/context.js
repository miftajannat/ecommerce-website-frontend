import React, { createContext, useContext, useState } from 'react';
import { NavItems } from '../ui/NavUi';

const Context = createContext();

export const StateContext = ({ children }) => {

    const [qty, setQty] = useState(1);
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalQty, setTotalQty] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    
    const incrementQty = () => {
        setQty((prevQty) => prevQty + 1);
    }

    const decrementQty = () => {
        setQty((prevQty) => {
            if(prevQty - 1 < 1) {
                return 1;
            }
            return prevQty - 1;
        });
    }

    const onAdd = (product, quantity) => {

        setTotalQty(prevTotal => prevTotal + quantity);
        setTotalPrice(prevTotal => prevTotal + product.price * quantity);

        const exist = cartItems.find((item) => item.slug === product.slug);

        if(exist) {
            setCartItems(
                cartItems.map((item) => 
                    item.slug === product.slug 
                    ? {...exist, quantity: exist.quantity + quantity} 
                    : item
                )
            );
        } else {
            setCartItems([...cartItems, {...product, quantity: quantity}]);
        }
    }

    const onRemove = (product) => {

        setTotalQty(prevTotal => prevTotal - 1);
        setTotalPrice(prevTotal => prevTotal - product.price);

        const exist = cartItems.find((item) => item.slug === product.slug);

        if(exist.quantity === 1) {
            setCartItems(cartItems.filter((item) => item.slug !== product.slug));
        } else {
            setCartItems(
                cartItems.map((item) => 
                    item.slug === product.slug 
                    ? {...exist, quantity: exist.quantity - 1} 
                    : item
                )
            );
        }
    }

    return (
        <Context.Provider value={{ 
            qty, 
            incrementQty, 
            decrementQty, 
            showCart,
            setShowCart,
            cartItems,
            onAdd,
            onRemove,
            totalQty,
            totalPrice,
        }}>
            {children}
        </Context.Provider>
    );
};

export const useStateContext = () => useContext(Context);