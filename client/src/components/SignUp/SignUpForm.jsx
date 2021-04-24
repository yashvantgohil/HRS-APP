import { Button, TextField } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, singUp } from "../../store/auth/actions";
import * as yup from "yup";
const SignUpForm = (props) => {
  const initialValues = {
    email: "",
    password: "",
  };

  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token && !user) {
      dispatch(loadUser());
    }
  }, [token, user, dispatch]);

  const validationSchema = yup.object({
    name: yup.string().min(4, "name is too short").required("name is required"),
    email: yup
      .string()
      .min(4, "email is too short")
      .email("email is invalid")
      .required("email is required"),
    password: yup
      .string()
      .min(4, "password is too short")
      .required("password is required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    dispatch(singUp(values));
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, isSubmitting, isValid, errors }) => (
        <Form noValidate>
          <h3>Sign Up </h3>
          <div className="mb-2 mt-4">
            <Field
              required
              name="name"
              label="Name"
              error={!!errors.name}
              helperText={errors.name}
              as={TextField}
            ></Field>
          </div>
          <div className="my-2">
            <Field
              required
              name="email"
              label="Email"
              placeholder="eg. abc@gmail.com"
              error={!!errors.email}
              helperText={errors.email}
              as={TextField}
            ></Field>
          </div>
          <div className="my-2">
            <Field
              required
              name="password"
              label="Password"
              error={!!errors.password}
              helperText={errors.password}
              as={TextField}
            ></Field>
          </div>
          <div className="mt-5">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting || !isValid}
            >
              Submit
            </Button>
            <p
              className="text-primary ml-4 d-inline"
              onClick={() => props.history.push("/login")}
            >
              Login ?
            </p>
          </div>
          {/* <div>{JSON.stringify(values, null, 2)}</div> */}
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
