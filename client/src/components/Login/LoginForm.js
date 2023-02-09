import React from 'react'
import * as Yup from 'yup';
import { ErrorMessage, Field, Formik } from 'formik';
import { Form } from 'react-bootstrap';

export default function LoginForm({ submitForm }) {


    const loginSchema = Yup.object().shape({
        username: Yup.string().required("Username is required"),
        password: Yup.string()
            .required("Password is required")
            .min(3, "Password is too short - should be 4 chars minimum"),

    });



    const initialValues = {
        username: "",
        password: ""
    };


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={(values) => {
                submitForm(values)
            }}
        >
            {(formik) => {
                const { errors, touched, isValid, dirty, values } = formik;
                return (
                    <div className="container">
                        <Form>
                            <div className="form-row mb-2">
                                <label htmlFor="username">Username</label>
                                <Field
                                    type="username"
                                    name="username"
                                    id="username"
                                    className={errors.username && touched.username ?
                                        "input-error form-control" : "form-control"}
                                />
                                <ErrorMessage
                                    name="username"
                                    component="span"
                                    className="error text-danger"
                                />
                            </div>

                            <div className="form-row">
                                <label htmlFor="password">Password</label>
                                <Field
                                    type="password"
                                    name="password"
                                    id="password"
                                    className={errors.password && touched.password ?
                                        "input-error form-control" : "form-control"}
                                />
                                <ErrorMessage
                                    name="password"
                                    component="span"
                                    className="error text-danger"
                                />
                            </div>

                            <button
                                type="button"
                                className={!(dirty && isValid) ? "btn btn-dark disabled-btn mt-3" : "btn btn-dark mt-3"}
                                disabled={!(dirty && isValid)}
                                onClick={() => submitForm(values)}
                            >
                                Sign In
                            </button>
                        </Form>
                    </div>
                );
            }}
        </Formik>
    );

}

