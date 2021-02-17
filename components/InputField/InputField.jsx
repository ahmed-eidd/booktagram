import React from 'react';
import { useField } from 'formik';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react';

const InputField = ({ label, placeholder, type , ...props}) => {
  const [field, { error, touched }] = useField(props);
  // console.log(field)
  return (
    // <>
    // <label htmlFor={field.name}>{label}</label>
    // <input placeholder={placeholder} {...field} type={type}/>
    // </>
    <FormControl style={{position: 'relative'}} my={7} isInvalid={error && touched}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Input {...field} width='100%' id={field.name} type={type} placeholder={placeholder} />
      {error ? <FormErrorMessage style={{position: 'absolute', bottom: '-25px', left: '10px'}}>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};

export default InputField;
