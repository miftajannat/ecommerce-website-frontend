import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { NavContainer, NavItems, NavTotal } from "../ui/NavUi";
import Cart from "./Cart";
import User from "./User";
import { useUser } from '@auth0/nextjs-auth0' 
import { useStateContext } from "../lib/context";

const {AnimatePresence} = require('framer-motion');

export default function Nav() {

    const {showCart, setShowCart, totalQty } = useStateContext();
    const {user, error, isLoading} = useUser();

    return (
        <NavContainer>
            <Link href={'/'}>Logo.</Link>
            <NavItems>
                <User />
                <div onClick={() => setShowCart(true)}>
                    {totalQty > 0 && 
                        <NavTotal
                            animate={{scale: 1}}
                            initial={{scale: 0}}
                        >
                            {totalQty}
                        </NavTotal>
                    }
                    <FiShoppingBag />
                    <h3>Cart</h3>
                </div>
                <AnimatePresence>
                    {showCart && <Cart />}       
                </AnimatePresence>
            </NavItems>
        </NavContainer>
    )
}