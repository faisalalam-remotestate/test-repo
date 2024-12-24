import { Box, Button } from "@mui/material";
import UserInputField from "./UserInputField";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { checkEmailExist, checkOtp, register, sendOtp } from "../api/api";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
// import { register } from "../api/api";


const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
});
const validationSchemaOtp = Yup.object({
    otp: Yup.number().oneOf([666666, 123456], '').required("OTP is Required"),
});

const validationSchemaFinal = Yup.object({
    number: Yup.number(),
    password: Yup.string(),
});

const initialFormData = {
    name: "",
    email: "",
    acceptPolicy: true,
    accountType: "",
    address: "India",
    countryCode: "+91",
    number: "1234323456",
    orgDetails: "",
    password: "",
    otp: "",
}


const MultipartSignUpForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState(initialFormData);
    const navigate = useNavigate();

    const onChangeHandler = (e) => {
        // e.target.value += e.nativeEvent.data;
        console.log(e.target.value);
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
        console.log(formData);
    }

    const handleRegister = () => {
        const registerData = {
            acceptPolicy: true,
            name: formData.name,
            email: formData.email,
            password: formData.password,
            address: 'India',
            accountType: 'small business',
            orgDetails: '0-50',
            countryCode: "+91",
            number: formData.number.toString(),
        };
        console.log("Final Register Data :- ", registerData);
        register(registerData).then((response) => {
            console.log('Registration Success:', response);
            navigate('/login');
        });
    };

    const handleCheckEmail = async (data) => {
        checkEmailExist(data.email)
            .then((result) => {
                if (result["emailExists"] == false) {
                    setFormData((prevData) => {
                        prevData["name"] = data.name;
                        prevData["email"] = data.email;
                        return prevData;
                    });
                    sendOtp(data);
                    setStep((prevStep) => prevStep + 1);
                }
                console.log("Email ===>", result);
            })
            .catch((error) => {
                console.error("Error in Email api ===>", error);
            });
    };

    const handleCheckOtp = async (data) => {
        checkOtp(data, formData)
            .then((result) => {
                if (result === "otp verified") {
                    setFormData((prevData) => {
                        prevData["otp"] = data.otp;
                        return prevData;
                    });
                    setStep((prevStep) => prevStep + 1);
                }
                console.log("OTP CHECK ===>", result);
            })
            .catch((error) => {
                console.error("Error in OTP api ===>", error);
            });
    };

    const onClickStepHandler = (e) => {
        if (step === 1) {
            const data = {
                name: document.getElementsByName("name")[0].value,
                email: document.getElementsByName("email")[0].value,
            };
            validationSchema.validate(data, { abortEarly: false })
                .then((valid) => {
                    console.log("Validated Email:", valid);
                    handleCheckEmail(data);
                    console.log("Form Data ==> ", formData);
                })
                .catch((err) => {
                    if (err.name === "ValidationError") {
                        const fieldErrors = err.inner.reduce((acc, error) => {
                            acc[error.path] = error.message;
                            console.log("Acc - ", acc);
                            Object.keys(acc).forEach(key => {
                                console.log(`${key}: ${acc[key]}`);
                                console.log(document.getElementsByName(key)[0]);
                            });
                            return acc;
                        }, {});

                        console.log("Field Errors:", fieldErrors);
                    }
                    console.log("Validation Error:", err);
                });
        } else if (step === 2) {
            const data = {
                otp: document.getElementsByName("otp")[0].value,
            };
            validationSchemaOtp.validate(data, { abortEarly: false })
                .then((valid) => {
                    console.log("Validated OTP:", valid);
                    handleCheckOtp(data);
                })
                .catch((err) => {
                    if (err.name === "ValidationError") {
                        const fieldErrors = err.inner.reduce((acc, error) => {
                            acc[error.path] = error.message;
                            console.log("Acc - ", acc);
                            Object.keys(acc).forEach(key => {
                                console.log(`${key}: ${acc[key]}`);
                                console.log(document.getElementsByName(key)[0]);
                            });
                            return acc;
                        }, {});

                        console.log("Field Errors:", fieldErrors);
                    }
                    console.log("Validation Error:", err);
                });
        } else if (step === 3) {
            const data = {
                number: document.getElementsByName("number")[0].value,
                password: document.getElementsByName("password")[0].value,
            };
            validationSchemaFinal.validate(data, { abortEarly: false })
                .then((valid) => {
                    console.log("Validated Email:", valid);
                    setFormData((prevData) => {
                        prevData["password"] = valid.password;
                        prevData["number"] = valid.number;
                        return prevData;
                    });
                    handleRegister();
                })
                .catch((err) => {
                    if (err.name === "ValidationError") {
                        const fieldErrors = err.inner.reduce((acc, error) => {
                            acc[error.path] = error.message;
                            console.log("Acc - ", acc);
                            Object.keys(acc).forEach(key => {
                                console.log(`${key}: ${acc[key]}`);
                                console.log(document.getElementsByName(key)[0]);
                            });
                            return acc;
                        }, {});

                        console.log("Field Errors:", fieldErrors);
                    }
                    console.log("Validation Error:", err);
                });
        }
    }

    return (
        <Box
            sx={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                padding: "16px",
            }}
        >
            <Box sx={{ width: "40%" }}>
                <Formik
                    initialValues={{ name: "", email: "" }}
                    validationSchema={step === 1 ? validationSchema : step === 2 ? validationSchemaOtp : validationSchemaFinal}
                    onSubmit={(values) => {
                        console.log("Form Submitted:", values);
                    }}
                >
                    <Form>
                        <Box
                            sx={{
                                display: step === 1 ? "block" : "none"
                            }}
                        >
                            <UserInputField label="Name" name="name" placeholder="Enter Your Name" />
                            <UserInputField label="Email" name="email" placeholder="Enter Your Email" />
                            <Button
                                variant="contained"
                                onClick={onClickStepHandler}
                                color="primary"
                                size="medium"
                                sx={{
                                    px: 4,
                                    py: 1,
                                    fontSize: "1rem",
                                    marginTop: 3,
                                }}
                            >
                                Next
                            </Button>
                        </Box>
                        <Box
                            sx={{
                                display: step === 2 ? "block" : "none"
                            }}
                        >
                            <UserInputField label="Otp" name="otp" placeholder="Enter Your OTP" />
                            <Button
                                variant="contained"
                                onClick={onClickStepHandler}
                                color="primary"
                                size="medium"
                                sx={{
                                    px: 4,
                                    py: 1,
                                    fontSize: "1rem",
                                    marginTop: 3,
                                }}
                            >
                                Next
                            </Button>
                        </Box>
                        <Box
                            sx={{
                                display: step === 3 ? "block" : "none"
                            }}
                        >
                            <UserInputField label="Number" name="number" placeholder="Enter Your Number" />
                            <UserInputField type="password" label="Password" name="password" placeholder="Enter Your Password" />
                            <Button
                                variant="contained"
                                // type="submit"
                                onClick={onClickStepHandler}
                                color="primary"
                                size="medium"
                                sx={{
                                    px: 4,
                                    py: 1,
                                    fontSize: "1rem",
                                    marginTop: 3,
                                }}
                            >
                                Submit
                            </Button>
                        </Box>
                    </Form>
                </Formik>
            </Box>
        </Box>
    );
}

export default MultipartSignUpForm;