import { Link, useNavigate } from "react-router-dom"
import freeLogobig from '../layout/assets/freeLogobig.jpg'
import { ChakraProvider, Card, Center, Box, Flex, Heading, Checkbox, Button, Image, VisuallyHidden, FormControl, FormLabel, FormErrorMessage, FormHelperText } from "@chakra-ui/react"
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import FormikControl from './user/SignInForm/FormikControl'

function SignUp() {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        cardNumber: '',
        address: '',
        city: '',
        postCode: ''
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().required('Required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Passwords must match').required('Required'),
        phoneNumber: Yup.string().required('Required'),
        cardNumber: Yup.string().required('Required'),
        address: Yup.string().required('Required'),
        city: Yup.string().required('Required'),
        postCode: Yup.string().required('Required')
    })

    const onSubmit = values => {
        console.log('Form data', values)
    }

    const navigate = useNavigate()
    const handleBack = () => {
        navigate('/')
    }

    return (
        <>

            <Flex bg='gray.200' align='center' justify='center' h='100vh' display={{ md: 'flex' }} >
                <Box display={{ base: 'none', md: 'block', lg: 'block' }}>
                    <Image src={freeLogobig} boxSize={{ md: '200px', lg: '390px' }} mr={6} />
                </Box>
                <Center p={16} mx={{ base: '24px' }}>
                    <Box bg='white' p={2} rounded='xl' w={96} h={96} shadow='2xl'>
                        <Button onClick={handleBack} >Go Back</Button>
                        <Heading mt={2} align='center'>Sign Up</Heading>
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                            {
                                formik => {
                                    return (
                                        <Form>
                                            <FormikControl control='chakrainput' type='firstName' label='First Name' name='firstName' placeholder='Enter your first name' variant='filled' />

                                            <FormikControl control='chakrainput' type='lastName' label='Last Name' name='lastName' placeholder='Enter your last anme' variant='filled' />

                                            <FormikControl control='chakrainput' type='email' label='Email' name='email' placeholder='Enter your email' variant='filled' />

                                            <FormikControl control='chakrainput' type='password' label='Password' name='password' placeholder='Enter your password' variant='filled' />

                                            <FormikControl control='chakrainput' type='password' label='Confirm Password' name='confirmPassword' placeholder='Enter your password' variant='filled' />

                                            <FormikControl control='chakrainput' type='text' label='Phone Number' name='phoneNumber' placeholder='Enter your phone number' variant='filled' />

                                            <FormikControl control='chakrainput' type='text' label='Card Number' name='cardNumber' placeholder='Enter your card number' variant='filled' />

                                            <FormikControl control='chakrainput' type='textarea' label='Address' name='address' placeholder='Enter your address' variant='filled' />

                                            <FormikControl control='chakrainput' type='text' label='City' name='city' placeholder='Enter your city' variant='filled' />

                                            <FormikControl control='chakrainput' type='text' label='Post code' name='postCode' placeholder='Enter your post code' variant='filled' />

                                            {/* <button type="submit" disabled={!formik.isValid}>Submit</button> */}
                                            <Button mt={2} type="submit" colorScheme="green" w='full' disabled={!formik.isValid} >Sign In</Button>
                                        </Form>
                                    )
                                }
                            }
                        </Formik>
                    </Box>
                </Center>
            </Flex >
        </>
    )
}

export default SignUp












// import Bg from '../layout/assets/Bg.png'
// import freeLogobig from '../layout/assets/freeLogobig.jpg'
// import { Link, useNavigate } from 'react-router-dom'


// function SignUp() {
//     const navigate = useNavigate()
//     const handleBack = () => {
//         navigate('/')
//     }
//     return (
//         <div className="container flex flex-row h-screen">
//             <div className="container h-screen ">
//                 <div className="max-h-screen h-full max-w-full flex justify-center items-center">
//                     <img src={freeLogobig} alt="Img2" className='object-fill bg-cover' />
//                 </div>
//             </div>

//             <div className="container min-h-screen basis-1/2 p-24 ">
//                 <button className='btn btn-outline ml-96 ' onClick={handleBack}>Back</button>
//                 <div>
//                     <h1 className='text-3xl font-bold font-poppins'>Sign Up to Get Started</h1>
//                     <form className='form-input'>
//                         <div className='flex rounded-full mt-7'>
//                             <input type="text" name='firstname' id='firstname' placeholder='First Name' className='border-2 rounded-full p-3 mr-3' />
//                             <input type="text" name='lastname' id='lastname' placeholder='Last Name' className='border-2 rounded-full p-3' />
//                         </div>
//                         <input type="text" name='email' id='email' placeholder='Email' className='w-full border-2 rounded-full p-3 mt-4' />
//                         <input type="text" name='password' id='password' placeholder='Password' className='w-full border-2 rounded-full p-3 mt-4' />
//                         <input type="text" name='confirmpassword' id='confirmpassword' placeholder='Confirm Password' className='w-full border-2 rounded-full p-3 mt-4' />
//                         <input type="text" name='phonenumber' id='phonenumber' placeholder='Phone Number' className='w-full border-2 rounded-full p-3 mt-4' />
//                         <input type="text" name='cardnumber' id='cardnumber' placeholder='ID Card Number' className='w-full border-2 rounded-full p-3 mt-4' />
//                         <input type="text" name='address' id='address' placeholder='Address' className='w-full border-2 rounded-full p-3 mt-4' />
//                         <div className='flex rounded-full mt-7'>
//                             <input type="text" name='city' id='city' placeholder='City' className='border-2 rounded-full p-3 mr-3' />
//                             <input type="text" name='postcode' id='postcode' placeholder='Postcode' className='border-2 rounded-full p-3' />
//                         </div>
//                         <button className='block btn btn-wide btn-ghost rounded-full p-2 mt-4 w-full normal-case'>Take Photo of ID</button>
//                         {/* <button className='block btn btn-wide rounded-full p-2 mt-4 w-full'>Register</button> */}
//                         <Link to='/email-verification' className='block btn btn-wide rounded-full p-4 mt-4 w-full normal-case'>Register</Link>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default SignUp