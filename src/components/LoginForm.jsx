import { Box, Button } from "@mui/material";
import UserInputField from "./UserInputField";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { checkEmailExist, checkOtp, loginApi, register, sendOtp } from "../api/api";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
// import { register } from "../api/api";
import { useLogin } from '../contexts/LoginContext';
import { RouterLink } from "../utils/Utils";


const validationLoginSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string(),
});

const initialFormData = {
    email: "",
    password: "",
}


const LoginForm = () => {
    const { login } = useLogin();
    const [formData, setFormData] = useState(initialFormData);
    const navigate = useNavigate();


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
                    initialValues={{ email: "" , password:"" }}
                    validationSchema={validationLoginSchema}
                    onSubmit={(values) => {
                        console.log("Form Submitted:", values);
                        loginApi(values)
                        .then((res) => {
                            console.log( "Response Login ==> " , res);
                            login(res);
                            navigate("/Dashboard");
                        })
                    }}
                >
                    <Form>
                        <Box
                            sx={{
                                display: "block"
                            }}
                        >
                            <UserInputField label="Email" name="email" placeholder="Enter Your Email" />
                            <UserInputField type="password" label="Password" name="password" placeholder="Enter Your Password" />
                            <Button
                                variant="contained"
                                type="submit"
                                // onClick={onClickStepHandler}
                                color="primary"
                                size="medium"
                                sx={{
                                    px: 4,
                                    py: 1,
                                    fontSize: "1rem",
                                    marginTop: 3,
                                }}
                            >
                                Login
                            </Button>
                        </Box>
                    </Form>
                </Formik>
                <RouterLink to="/signUP">Already have an account = Signup</RouterLink>
            </Box>
        </Box>
    );
}

export default LoginForm;