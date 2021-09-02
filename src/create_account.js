import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';

import { UserContext } from './createContext.js';

function CreateAccount() {
  const [info, setInfo] = React.useContext(UserContext);

  return (
    <div style={{ margin: 'auto', width: '400px' }}>
      <Formik
        initialValues={{ name: '', email: '', subject: '' }}
        onSubmit={values => {
          setInfo([...info, values.name, values.email, values.subject]);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Name is required'),
          subject: Yup.string()
            .required('Subject is required')
            .min(8),
          email: Yup.string()
            .email('Invalid email address')
            .required('Email is required')
        })}
      >
        {formik => (
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field
                name="name"
                className={
                  formik.touched.name && formik.errors.name
                    ? 'form-control is-invalid'
                    : 'form-control'
                }
                type="text"
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="invalid-feedback">{formik.errors.name}</div>
              ) : null}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <Field
                name="email"
                className={
                  formik.touched.email && formik.errors.email
                    ? 'form-control is-invalid'
                    : 'form-control'
                }
                type="email"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="invalid-feedback">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="form-group">
              <label htmlFor="subject">Password</label>
              <Field
                name="subject"
                className={
                  formik.touched.subject && formik.errors.subject
                    ? 'form-control is-invalid'
                    : 'form-control'
                }
                type="password"
              />
              {formik.touched.subject && formik.errors.subject ? (
                <div className="invalid-feedback">{formik.errors.subject}</div>
              ) : null}
            </div>

            <br />

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Create Account
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CreateAccount;
