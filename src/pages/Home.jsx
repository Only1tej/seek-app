import { Link, useNavigate } from "react-router-dom"
import freeLogobig from '../layout/assets/freeLogobig.jpg'
import upreachAnimation from '../layout/assets/upreach-animation2.png'
function Home() {
    const navigate = useNavigate()

    const handleSignIn = () => {
        navigate('/sign-in')
    }
    const handleSignUp = () => {
        navigate('/sign-up')
    }
    return (
        <>
            <div>
                <div className="container h-screen ">
                    <div className="bg-white-950 max-h-screen h-full max-w-full flex justify-center items-center">
                        <img src={freeLogobig} alt="Img2" />
                    </div>
                </div>
                <div className="flex flex-col">
                    <button className="btn btn-primary" onClick={handleSignIn}>Sign In</button>
                    <button className="btn btn-primary" onClick={handleSignUp}>Sign Up</button>

                </div>
            </div>
        </>
    )

}

export default Home