import React from 'react';
import { Box, Stack, TextField, Typography } from '@mui/material';
import { Field } from 'formik';

const UserInputField = ({
    onChange,
    label = "",
    placeholder = "Enter your value",
    name = "",
    type = "text",
    customStyles = {},
}) => {
    return (
        <Stack spacing={2} className="user-input-field" sx={{ width: "100%", ...customStyles }}>
            {label && (
                <Typography
                    sx={{
                        fontFamily: "Overpass",
                        fontSize: "14px",
                        color: "black",
                        marginBottom: "8px",
                    }}
                >
                    {label}
                </Typography>
            )}
            <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <Field
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    render={({ field, form }) => (
                        <TextField
                            {...field}
                            // onChange={onChange}
                            fullWidth
                            type={type}
                            error={form.touched[name] && Boolean(form.errors[name])}
                            helperText={form.touched[name] && form.errors[name]}
                            sx={{
                                input: {
                                    padding: "4px 12px 12px 12px",
                                    marginTop: "10px",
                                    fontSize: "14px",
                                },
                            }}
                        />
                    )}
                />
            </Box>
        </Stack>
    );
};

export default UserInputField;
