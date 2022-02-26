import { getProviders, signIn } from "next-auth/react"
import Button from '@mui/material/Button';

function Login({ providers }) {
    return (
        <>
        {Object.values(providers).map((provider) => (
            <div key={provider.name}>
                <Button variant="contained">Sign in to {provider.name}</Button>
            </div>
        ))}
        </>
    )
}

export default Login

export const getServerSideProps = async () => {
    const providers = await getProviders()

    return {
        props: {
            providers
        }
    }
}