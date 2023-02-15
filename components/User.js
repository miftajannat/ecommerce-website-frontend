import { useRouter } from 'next/router'
import {FaUserCircle} from 'react-icons/fa';
import { UserUi } from '../ui/UserUi';
import { useUser } from '@auth0/nextjs-auth0';

export default function User() {

    const route = useRouter();
    const { user } = useUser();

    if(!user)
    return (
        <UserUi onClick={() => route.push('/api/auth/login')}>
            <FaUserCircle />
            <h3>Profile</h3>
        </UserUi>
    );
    return (
        <UserUi onClick={() => route.push('/profile')}>
            <img src={user.picture} alt={user.name} />
            <h3>{user.name}</h3>
        </UserUi>
    );
}