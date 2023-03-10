import { useRouter } from "next/router";
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import formatMoney from "../lib/formatMoney";
import { ProfileButton, ProfileOrder } from "../ui/ProfileUi";
import { BiLogOut } from 'react-icons/bi';

const stripe = require("stripe")(
    `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);

export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps(ctx) {
        const session = getSession(ctx.req, ctx.res);
        const stripeId = session.user[`${process.env.BASE_URL}/stripe_customer_id`];
        const paymentIntents = await stripe.paymentIntents.list({
        customer: stripeId,
        });
        return { props: { orders: paymentIntents.data } };
    },
});

export default function Profile({ user, orders }) {
    const route = useRouter();
    return (
        user && (
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <div>
            {orders.map((order) => (
                <ProfileOrder key={order.id}>
                <div>
                    <h1>Numero ordine: {order.id}</h1>
                    <h2>{formatMoney(order.amount)}</h2>
                </div>
                <div>
                    <h1>Email di ricevuta: {order.receipt_email}</h1>
                </div>
                </ProfileOrder>
            ))}
            </div>
            <ProfileButton onClick={() => route.push("/api/auth/logout")}>
                <BiLogOut /> Log out
            </ProfileButton>
        </div>
        )
    );
}