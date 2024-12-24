import React from "react";
import { useMutation } from '@tanstack/react-query';

const api = async (url, payload) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        throw new Error('API request failed');
    }

    return response.json();
};

const checkEmailExist = async (email) => {
    return api('https://api-dev1.circonomy.co/email-exist', {
        email,
        accountType: 'individual',
    });
};

const sendOtp = async (data) => {
    console.log("OTP SENT SUCCESS");
    return api('https://api-dev1.circonomy.co/send-otp', {
        input: data.email,
        type: 'email',
        name:data.name,
    });
};

const checkOtp = async (data,formData) => {
    return api('https://api-dev1.circonomy.co/check-otp', {
        input: formData.email,
        otp:data.otp,
        type: 'email',
    });
};

const checkPhoneNumberExist = async (phone, countryCode) => {
    return api('https://api-dev1.circonomy.co/v2/number-exist', {
        phone,
        accountType: 'small business',
        countryCode,
    });
};

const register = async (data) => {
    return api('https://api-dev1.circonomy.co/register', data);
};

const loginApi = async (values) => {
    const payload = {
        email : values.email,
        password : values.password,
    };
    return api('https://api-dev1.circonomy.co/login', payload);

    // try {
    //     const response = await api('https://api-dev1.circonomy.co/login', payload);
    //     console.log('Login successful:', response); // Handle the successful response here
    // } catch (error) {
    //     console.error('Error during login:', error); // Handle the error here
    // }
};

export { api , checkEmailExist , sendOtp , checkOtp , checkPhoneNumberExist , register , loginApi}