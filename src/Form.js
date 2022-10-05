import React from 'react';
import data from './FromData';
import FormInput from './FormInput';

const Form = () => {
  return (
    <>
    <h1>Form Data</h1>
    <FormInput data={data}/>
    </>
  )
}

export default Form;