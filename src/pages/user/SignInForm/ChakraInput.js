import React from "react";
import { Field } from "formik";
import {
  Input,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

function ChakraInput(props) {
  const { label, name, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form }) => {
        return (
          <VStack spacing={4} align="flex-start">
            {" "}
            <FormControl isInvalid={form.errors[name] && form.touched[name]}>
              <FormLabel htmlFor={name}>{label}</FormLabel>
              <Input id={name} {...rest} {...field} />
              <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
            </FormControl>
          </VStack>
        );
      }}
    </Field>
  );
}

export default ChakraInput;
