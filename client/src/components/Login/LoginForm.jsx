import { Button, TextField } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, login } from "../../store/auth/actions";
import * as yup from "yup";
import { useEffect } from "react";

const LoginForm = (props) => {
  const initialValues = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.currentUser);
  const redirectURL = useSelector((state) => state.auth.redirectURL);

  useEffect(() => {
    if (localStorage.getItem("token") && !user) {
      dispatch(loadUser());
      if (redirectURL) props.history.replace(redirectURL);
    }
  }, [dispatch, token, user, redirectURL, props.history]);

  const validationSchema = yup.object({
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

  const onSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    await dispatch(login(values));
    setSubmitting(false);
    debugger;
    if (redirectURL) props.history.replace(redirectURL);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, isSubmitting, isValid, errors }) => (
        <Form noValidate>
          <h3>Login </h3>
          <div className="mb-2 mt-4">
            <Field
              required
              name="email"
              label="Email"
              placeholder="admin@gmail.com or yash@gmail.com"
              error={!!errors.email}
              helperText={errors.email}
              as={TextField}
            ></Field>
            {/* <ErrorMessage name="email" /> */}
          </div>
          <div className="my-2">
            <Field
              required
              name="password"
              label="Password"
              placeholder="12345"
              error={!!errors.password}
              helperText={errors.password}
              as={TextField}
            ></Field>
            {/* <ErrorMessage name="password" /> */}
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
              onClick={() => props.history.push("/signup")}
            >
              Sign Up ?
            </p>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
