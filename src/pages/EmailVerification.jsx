import freeLogobig from '../layout/assets/freeLogobig.jpg'
import { Link } from 'react-router-dom'


function EmailVerification() {
    return (
        <div className="container flex flex-row h-screen">
            <div className="container h-screen basis-1/2 ">
                <div className="max-h-screen h-full max-w-full flex justify-center items-center">
                    <img src={freeLogobig} alt="Img2" />
                    {/* <img src={upreachAnimation} alt="Img" className="object-fill" /> */}
                </div>
            </div>
            {/* <div className="basis-1/2 min-h-screen h-full" >
                <img src={Bg} alt="Img" className='object-cover' />
            </div> */}
            <div className="basis-1/2  my-72 px-52 ">
                <div className=''>
                    <h1 className='text-3xl font-bold font-poppins'>Sign Up to Get Started</h1>
                    <h4 className='font-poppins text-sm mt-4'>Please enter the verification codes received on your email and mobile number</h4>
                    <form className='form-input'>
                        <input type="text" name='emailcode' id='emailcode' placeholder='Email Verification Code' className='w-full border-2 rounded-full p-3 mt-4' />
                        <input type="text" name='mobilecode' id='mobilecode' placeholder='Mobile Verification Code' className='w-full border-2 rounded-full p-3 mt-4' />
                        {/* <button className='block btn btn-wide rounded-full p-2 mt-4 w-full'>Register</button> */}
                        <Link to='/email-verification' className='block btn rounded-full p-4 mt-4 w-full normal-case'>Confirm</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EmailVerification