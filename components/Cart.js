import { useStateContext } from '../lib/context';
import { 
    CardInfo, 
    CartCards,
    CartCard, 
    CartCheckout, 
    CartContainer, 
    CartEmpty, 
    CartMenu, 
    CartQuantity,
    CartClose,
} from '../ui/CartUi';
import { 
    AiFillMinusCircle,
    AiFillPlusCircle,
    AiOutlineClose,
} from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import getStripe from '../lib/getStripe';

const card = {
    hidden: {
        opacity: 0, 
        scale: 0.8
    },
    show: {
        opacity: 1,
        scale: 1,
    },
}

const cards = {
    hidden: {
        opacity: 1, 
    },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.25,
            staggerChildren: 0.1
        }
    },
}

export default function Cart() {

    const { 
        cartItems, 
        setShowCart, 
        onAdd, 
        onRemove,
        totalPrice,
    } = useStateContext();

    const handleCheckout = async () => {
        const stripe = await getStripe();
        const response = await fetch('/api/stripe', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(cartItems),
        });
        const data = await response.json();
        await stripe.redirectToCheckout({sessionId: data.id})
    }

    return(
        <CartContainer 
            onClick={() => setShowCart(false)}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
        >
            <CartMenu 
                onClick={(e) => e.stopPropagation()}
                initial={{x: '50%'}}
                animate={{x: '0%'}}
                transition={{type: 'tween'}}
                exit={{x: '50%'}}
                layout
            >
                {cartItems.length < 1 && (
                    <CartEmpty
                        initial={{opacity:0, scale: 0.75}}
                        animate={{opacity:1, scale: 1}}
                        transition={{delay:0.25}}
                    >
                        <h1>You have more shopping to do</h1>
                        <FaShoppingCart />
                    </CartEmpty>
                )}
                <CartCards layout variants={cards} initial='hidden' animate='show'>
                    {cartItems.length >=1 
                        && cartItems.map((item) => {
                            return(
                                <CartCard layout key={item.slug} variants={card} >
                                    <img src={item.image.data.attributes.formats.small.url} alt={item.title} />
                                    <CardInfo>
                                        <h3>{item.title}</h3>
                                        <h4>{item.price}$</h4>
                                        <CartQuantity>
                                            <span>Quantity</span>
                                            <button onClick={() => onRemove(item)}><AiFillMinusCircle /></button>
                                            <p>{item.quantity}</p>
                                            <button onClick={() => onAdd(item, 1)}><AiFillPlusCircle /></button>
                                        </CartQuantity>
                                    </CardInfo>
                                </CartCard>
                            )
                        })
                    }
                </CartCards>
                {cartItems.length >= 1 && (
                    <CartCheckout layout>
                        <h3>Subtotal: {totalPrice}$</h3>
                        <button onClick={handleCheckout}>Purchase</button>
                    </CartCheckout>
                )}
                <CartClose>
                    <AiOutlineClose onClick={() => setShowCart(false)} />
                </CartClose>
            </CartMenu>
        </CartContainer>
    )
}