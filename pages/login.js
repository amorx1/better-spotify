import { getProviders, signIn } from "next-auth/react"
import Button from '@mui/material/Button';

function Login({ providers }) {
    return (
        <>
            <div className="">
                {Object.values(providers).map((provider) => (
                    <div key={provider.name}>
                        <Button
                            variant="contained"
                            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                        >
                            Sign in to {provider.name}</Button>
                    </div>
                ))}
            </div>
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