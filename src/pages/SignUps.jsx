import { Box, FormControl, FormLabel, Input, FormHelperText, Textarea } from '@chakra-ui/react'
import { Form } from 'react-router-dom'

export default function SignUps() {
    return (
        <Box maxW='480px'>
            <Form>
                <FormControl isRequired mb='40px'>
                    <FormLabel>Task Name:</FormLabel>
                    <Input type='text' name='title' />
                    <FormHelperText>Enter a descriptive task name.</FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel>Task description:</FormLabel>
                    <Textarea placeholder='Enter a detailed desciption for the task.' name='description' />
                </FormControl>
            </Form>
        </Box>
    )
}