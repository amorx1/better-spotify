import { getProviders, signIn } from "next-auth/react"
import Button from '@mui/material/Button';
import Image from 'next/image'
import logo from '../public/logo.png'
import Stack from '@mui/material/Stack';

function Login({ providers }) {
    return (
        <>
            <div className="login"
            style={
                {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 0,
                    height: 1700
                }
            }>
                <Stack direction="column">
                    <Image className="logo"
                        src={logo} />
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                            >
                                Sign in to {provider.name}</Button>
                        </div>
                    ))}
                </Stack>
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