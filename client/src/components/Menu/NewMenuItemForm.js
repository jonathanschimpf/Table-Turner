import React from 'react'
import * as Yup from 'yup';
import { ErrorMessage, Field, Formik } from 'formik';
import { Form } from 'react-bootstrap';

export default function NewMenuItemForm({ submitForm }) {


    const schema = Yup.object().shape({
        dishName: Yup.string().required("Username is required"),
        price: Yup.string()
            .required("Password is required")
            .min(3, "Password is too short - should be 4 chars minimum"),
        ingredients: Yup.string().required(),
        category: Yup.string().required(),

    });



    const initialValues = {
        dishName: "",
        price: "",
        ingredients: "",
        category: ""
    };


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
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
                                <label htmlFor="dishName">Dish Name</label>
                                <Field
                                    type="dishName"
                                    name="dishName"
                                    id="dishName"
                                    className={errors.dishName && touched.dishName ?
                                        "input-error form-control" : "form-control"}
                                />
                                <ErrorMessage
                                    name="dishName"
                                    component="span"
                                    className="error text-danger"
                                />
                            </div>

                            <div className="form-row">
                                <label htmlFor="price">Price</label>
                                <Field
                                    type="price"
                                    name="price"
                                    id="price"
                                    className={errors.price && touched.price ?
                                        "input-error form-control" : "form-control"}
                                />
                                <ErrorMessage
                                    name="price"
                                    component="span"
                                    className="error text-danger"
                                />
                            </div>

                            <div className="form-row">
                                <label htmlFor="ingredients">Ingredients</label>
                                <Field
                                    type="ingredients"
                                    name="ingredients"
                                    id="ingredients"
                                    className={errors.ingredients && touched.ingredients ?
                                        "input-error form-control" : "form-control"}
                                />
                                <ErrorMessage
                                    name="ingredients"
                                    component="span"
                                    className="error text-danger"
                                />
                            </div>

                            
                            <div className="form-row">
                                <label htmlFor="category">Category</label>
                                <Field
                                    type="category"
                                    name="category"
                                    id="category"
                                    className={errors.category && touched.category ?
                                        "input-error form-control" : "form-control"}
                                />
                                <ErrorMessage
                                    name="category"
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
                                Create Item
                            </button>
                        </Form>
                    </div>
                );
            }}
        </Formik>
    );

}

