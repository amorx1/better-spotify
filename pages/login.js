import { getProviders, signIn } from "next-auth/react"
import Image from 'next/image'
import logo from '../public/logo.png'

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
                <div>
                    <Image className="logo"
                        src={logo} />
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button
                                class="bg-purple-600 text-white font-bold px-8 rounded-full h-8"
                                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                            >
                                Sign in to {provider.name}</button>
                        </div>
                    ))}
                </div>
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