import freeLogobig from '../layout/assets/freeLogobig.jpg'
import { useState } from 'react'

function ForgotPassword() {
    const [email, setEmail] = useState('')

    const onChange = (e) => {
        setEmail(e.target.value)
    }

    const onSubmit = () => {
        // if (email === '') {
        //     alert('Email Address Not Found, Please check Again')
        // } 
        console.log(123)
    }

    // const alert = () => {
    //     if (email === '') {
    //         alert('Email Address Not Found, Please check Again')
    //     }
    // }

    return (
        <div className="bg-inherit container mx-auto flex flex-row">
            <div className="container h-screen basis-1/2 ">
                <div className="max-h-screen h-full max-w-full flex justify-center items-center">
                    <img src={freeLogobig} alt="Img2" />
                </div>
            </div>
            <div className='basis-1/2'>
                <div className='ml-52 my-80'>
                    <h2 className='font-bold text-2xl mb-4'>Forgot Password</h2>
                    <h4 className='font-poppins text-base'>We Will Send a Password Reset Link on your
                        Registered Email Address to Reset Your Password</h4>
                    <form onSubmit={onSubmit}>
                        <input type="text" placeholder="Email" onChange={onChange} value={email} className="input input-bordered rounded-full w-full max-w-xs mt-6" />
                        <button className="btn btn-active btn-wide btn-ghost rounded-full mt-4 normal-case" onClick={onSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword