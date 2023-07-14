import { Link, useNavigate } from "react-router-dom"
import Bg from '../layout/assets/Bg.png'
import freeLogobig from '../layout/assets/freeLogobig.jpg'
import message from '../layout/assets/message.png'
import password from '../layout/assets/password.png'
import { FiLock } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai"
import { ChakraProvider, Card, Center, Box, Flex, Heading, Checkbox, Button, Image, VisuallyHidden } from "@chakra-ui/react"
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import FormikControl from './user/SignInForm/FormikControl'

function SignIn() {
    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().required('Required')
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
                        <Heading mt={2} align='center'>Sign In</Heading>
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                            {
                                formik => {
                                    return (
                                        <Form>
                                            <FormikControl control='chakrainput' type='email' label='Email' name='email' placeholder='Enter your email' variant='filled' />
                                            <FormikControl control='chakrainput' type='password' label='Password' name='password' placeholder='Enter your password' variant='filled' />
                                            <Field as={Checkbox} id='rememberMe' name='rememberMe' colorScheme='blue' mt='2'>Remember Me?</Field>
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

export default SignIn