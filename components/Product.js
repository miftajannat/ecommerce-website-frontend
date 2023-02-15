import Link from 'next/link';

import { ProductUi } from "../ui/ProductUi";

export default function Product({product}){

    const {title, price, image, slug} = product.attributes;

    return (
        <ProductUi>
            <Link href={`/product/${slug}`}>
                <div>
                    <img src={image.data.attributes.formats.small.url} alt={title} />
                    <h2>{title}</h2>
                    <h3>{price}$</h3>
                </div>
            </Link>
        </ProductUi>
    )
}