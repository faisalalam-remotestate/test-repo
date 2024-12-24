import React, { useState } from "react";
import { Box, Button, TextField, Typography, Stack } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schemas for each step
const validationSchemaStep1 = Yup.object({
  name: Yup.string().required("Name is required"),
});

const validationSchemaStep2 = Yup.object({
  email: Yup.string().email("Invalid email format").required("Email is required"),
});

const validationSchemaStep3 = Yup.object({
  password: Yup.string().min(6, "Password should be at least 6 characters").required("Password is required"),
});

const MultiStepSignUpForm = () => {
  const [step, setStep] = useState(1);

  const handleNext = (values, errors, touched) => {
    // Check if there are validation errors before proceeding to the next step
    const stepSchema = step === 1 ? validationSchemaStep1 : step === 2 ? validationSchemaStep2 : validationSchemaStep3;
    const schemaErrors = stepSchema.validateSync(values, { abortEarly: false });

    if (!schemaErrors) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (values) => {
    console.log("Form submitted", values);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={
        step === 1
          ? validationSchemaStep1
          : step === 2
          ? validationSchemaStep2
          : validationSchemaStep3
      }
    >
      {({ values, errors, touched, setFieldValue, handleChange, handleBlur, isSubmitting }) => (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: 4 }}>
          <Form>
            <Stack spacing={2} sx={{ width: "400px" }}>
              {step === 1 && (
                <>
                  <Typography variant="h6">Step 1: Enter your Name</Typography>
                  <Field
                    name="name"
                    placeholder="Enter your name"
                    as={TextField}
                    fullWidth
                    variant="outlined"
                    // error={Boolean(errors.name && touched.name)}
                    helperText={touched.name && errors.name}
                  />
                </>
              )}

              {step === 2 && (
                <>
                  <Typography variant="h6">Step 2: Enter your Email</Typography>
                  <Field
                    name="email"
                    placeholder="Enter your email"
                    as={TextField}
                    fullWidth
                    variant="outlined"
                    // error={Boolean(errors.email && touched.email)}
                    helperText={touched.email && errors.email}
                  />
                </>
              )}

              {step === 3 && (
                <>
                  <Typography variant="h6">Step 3: Enter your Password</Typography>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    as={TextField}
                    fullWidth
                    variant="outlined"
                    // error={Boolean(errors.password && touched.password)}
                    helperText={touched.password && errors.password}
                  />
                </>
              )}

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                {step > 1 && (
                  <Button variant="outlined" onClick={handleBack}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  type={step === 3 ? "submit" : "button"}
                  onClick={step === 3 ? handleSubmit : () => handleNext(values, errors, touched)}
                >
                  {step === 3 ? "Sign Up" : "Next"}
                </Button>
              </Box>
            </Stack>
          </Form>
        </Box>
      )}
    </Formik>
  );
};

export default MultiStepSignUpForm;
