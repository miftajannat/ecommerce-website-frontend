import { useQuery } from "urql";
import { useRouter } from 'next/router';
import { GET_PRODUCT_QUERY } from '../../lib/query';
import { 
    ProductContainerUi, 
    ProductInfoUi,
    ProductQuantityUi,
    ProductButtonUi,
} from '../../ui/ProductDetailUi';
import { AiFillPlusCircle, AiFillMinusCircle} from 'react-icons/ai';
import { useStateContext } from "../../lib/context";

export default function ProductDetails(){
    
    const { 
        qty, 
        incrementQty, 
        decrementQty,
        onAdd,
    } = useStateContext();
    
    const { query } = useRouter();

    const [results] = useQuery({
        query: GET_PRODUCT_QUERY,
        variables: {
            slug: query.slug
        }
    });

    const {data, fetching, error} = results;

    if(fetching) return <p>Loading...</p>;
    if(error) return <p>Error... {error.message}</p>;

    const { title, description, price, image } = data.products.data[0].attributes;

    return (
        <ProductContainerUi>
            <img src={image.data.attributes.formats.medium.url} alt={title}/>
            <ProductInfoUi>
                <h3>{title}</h3>
                <h4>{price}$</h4>
                <p>{description}</p>
                <ProductQuantityUi>
                    <span>Quantity</span>
                    <button onClick={decrementQty}><AiFillMinusCircle /></button>
                    <p>{qty}</p>
                    <button onClick={incrementQty}><AiFillPlusCircle /></button>
                </ProductQuantityUi>
                <ProductButtonUi onClick={() => onAdd(data.products.data[0].attributes, qty)}>Add to cart</ProductButtonUi>
            </ProductInfoUi>
        </ProductContainerUi>
    )
};