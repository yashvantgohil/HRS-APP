import { Button, Paper, TextField } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addHacker, updateHacker } from "../../store/hacker/actions";
import * as yup from "yup";

const HackerForm = (props) => {
  const hacker = useSelector((state) =>
    state.hacker.hackers.find((x) => x._id === props.match.params.id)
  );

  const initialValues = {
    name: hacker?.name,
    solutionsAccepted: hacker?.solutionsAccepted,
    solutionsSubmitted: hacker?.solutionsSubmitted,
    challangesSolved: hacker?.challangesSolved,
  };

  const dispatch = useDispatch();

  const validationSchema = yup.object({
    name: yup.string().min(4, "name is too short").required("name is required"),
    solutionsAccepted: yup.number().default(0),
    solutionsSubmitted: yup.number().default(0),
    challangesSolved: yup.number().default(0),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    console.log(values);
    if (!hacker) await dispatch(addHacker(values));
    else await dispatch(updateHacker(hacker._id, values));
    setSubmitting(false);
    props.history.replace("/hackers");
  };

  return (
    <Paper elevation={3} className="p-5 mt-4">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ values, isSubmitting, isValid, errors }) => (
          <Form noValidate>
            <div>
              <h3>{hacker ? "Update Hacker Info" : "Add New Hacker"} </h3>
              <div className="mb-2 mt-4">
                <Field
                  disabled={!!hacker}
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
                  name="solutionsAccepted"
                  label="Solutions Accepted"
                  error={!!errors.email}
                  helperText={errors.email}
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  as={TextField}
                ></Field>
              </div>
              <div className="my-2">
                <Field
                  required
                  name="solutionsSubmitted"
                  label="Solutions Submitted"
                  error={!!errors.email}
                  helperText={errors.email}
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  as={TextField}
                ></Field>
              </div>
              <div className="my-2">
                <Field
                  required
                  name="challangesSolved"
                  label="Challanges Solved"
                  error={!!errors.email}
                  helperText={errors.email}
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  as={TextField}
                ></Field>
              </div>
              <div className="mt-5">
                <Button
                  type="submit"
                  variant="contained"
                  color={hacker ? "secondary" : "primary"}
                  disabled={isSubmitting || !isValid}
                >
                  {hacker ? "Update" : "Add"}
                </Button>
                <p
                  className="text-primary ml-4 d-inline"
                  style={{ cursor: "pointer" }}
                  onClick={() => props.history.push("/hackers")}
                >
                  Back
                </p>
              </div>
              {/* <div>{JSON.stringify(values, null, 2)}</div> */}
            </div>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

export default HackerForm;
