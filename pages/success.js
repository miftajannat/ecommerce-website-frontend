
import { useRouter } from "next/router";
import {
    SuccessContainer,
    SuccessCard,
    SuccessInfo,
    SuccessOrder,
    SuccessAddress
} from '../ui/SuccessUi';

const stripe = require("stripe")(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);

export async function getServerSideProps(params) {
  const order = await stripe.checkout.sessions.retrieve(
    params.query.session_id,
    {
      expand: ["line_items"],
    }
  );

  return { props: { order } };
}

export default function Success({ order }) {
  const route = useRouter();
  return (
    <SuccessContainer>
      <SuccessCard
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.75 } }}
        initial={{ opacity: 0, scale: 0.75 }}
      >
        <h1>Grazie per il tuo ordine!</h1>
        <h2>Una email di conferma è stata mandata a {order.customer_details.email}</h2>
        <SuccessInfo>
          <SuccessAddress>
            <h3>Indirizzo</h3>
            {Object.entries(order.customer_details.address).map(
              ([key, val]) => (
                <p key={key}>
                  {key} : {val}
                </p>
              )
            )}
          </SuccessAddress>
          <SuccessOrder>
            <h3>Prodotti</h3>
            {order.line_items.data.map((item) => (
              <div key={item.id}>
                <p>Prodotti: {item.description}</p>
                <p>Quantità: {item.quantity}</p>
                <p>Prezzo: {item.price.unit_amount}</p>
              </div>
            ))}
          </SuccessOrder>
        </SuccessInfo>
        <button onClick={() => route.push("/")}>Continua lo Shopping</button>
      </SuccessCard>
    </SuccessContainer>
  );
}