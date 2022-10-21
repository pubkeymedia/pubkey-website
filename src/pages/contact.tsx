import { Form, Formik } from 'formik';
import React from 'react';
import { Input } from '../components/StyledInput';

const Contact = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-12 p-8">
      <div className="flex-1">
        <img src="https://placebeard.it/800/800" />
      </div>
      <Formik
        initialValues={{ name: '', address: '', phone: '', ssn: '', email: '' }}
        onSubmit={console.log}
      >
        <Form className="flex flex-col flex-1 gap-y-8 text-lg">
          <Input label="Name" name="name" />
          <Input label="Address" name="address" />
          <Input label="Phone" name="phone" />
          <Input label="Ssn" name="ssn" />
          <Input label="Email" name="email" type="email" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Contact;
