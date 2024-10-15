import { createSlice } from '@reduxjs/toolkit'
import api from './api'
import { message } from 'antd';


const loginIntialData = {
  data: {},
  isLoading: false,
  error: null,
}

const signupIntialData = {
  data: {},
  isLoading: false,
  error: null,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState: loginIntialData,
  reducers: {
    login_start: (state) => {
      state.isLoading = true;
      state.error = null; // Reset error before login
    },
    login_success: (state, action) => {
      console.log('login===', action)
      console.log(action.payload, "================================")

      state.isLoading = false;
      state.data = action.payload.data; // Store user data
      state.error = null;
    },
    login_failed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error; // Store error message
    },
    login_reset: (state, action) => {
      state.data ={}; // Store error message
    },
  },
})



export const signupSlice = createSlice({
  name: 'signup',
  initialState: signupIntialData,
  reducers: {
    signup_start: (state) => {
      state.isLoading = true;
      state.error = null; // Reset error before login
    },
    signup_success: (state, action) => {
      state.isLoading = false;
      console.log(action.payload, "================================")
      state.data = action.payload.data; // Store user data
      state.error = null;
    },
    signup_failed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error; // Store error message
    },
  },
})

export const { login_start, login_success, login_failed ,login_reset} = loginSlice.actions;
export const { signup_start, signup_success, signup_failed } = signupSlice.actions;

export default {
  loginReducer: loginSlice.reducer,
  signupReducer: signupSlice.reducer,
};

export const loginApi = async (data, dispatch) => {
  console.log(data, "================================")
  dispatch(login_start());
  try {
    const response = await api.post('/auth/login', data);
    dispatch(login_success(response.data));
    message.success('Login successful!');
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Login failed. Please try again.';
    dispatch(login_failed(errorMessage));
    message.error(errorMessage);
    console.error('Login error:', error);
  }
}


export const signupApi = async (data, dispatch) => {
  console.log(data, "================================")
  dispatch(login_start());

  try {
    const response = await api.post('/auth/signup', data);
    dispatch(login_success(response.data));
    message.success(response.data.message);
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'signup failed. Please try again.';
    dispatch(login_failed(errorMessage));
    message.error(errorMessage);
    console.error('Signup error:', error);
  }
}


export const sendOtpToEMailApi = async (data) => {
  console.log(data, "================================")
  // dispatch(signup_start());

  try {
    const response = await api.post('/auth/sendMail', data);
    // dispatch(signup_success(response.data));
    message.success(response.data.message);
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'signup failed. Please try again.';
    // dispatch(signup_failed(errorMessage));
    message.error(errorMessage);
    console.error('otp error:', error);
  }
}

export const otpVerificationApi = async (data) => {
  console.log(data, "================================")

  try {
    const response = await api.post('/auth/verify/otp', data);
    message.success(response.data.message);
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'otp verification failed. Please try again.';
    message.error(errorMessage);
    console.error('otp verification error:', error);
  }
}


export const resendOtpApi = async (data) => {
  console.log(data, "================================")

  try {
    const response = await api.post('/auth/forgot/password', data);
    message.success(response.data.message);
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'otp verification failed. Please try again.';
    message.error(errorMessage);
    console.error('otp verification error:', error);
  }
}

export const forgotPasswordApi = async (data) => {
  console.log(data, "================================")

  try {
    const response = await api.post('/auth/reset/password', data);
    message.success(response.data.message);
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'otp verification failed. Please try again.';
    message.error(errorMessage);
    console.error('otp verification error:', error);
  }
}

export const ForgetSendOtpToEMailApi = async (data) => {
  console.log(data, "================================")
  // dispatch(signup_start());

  try {
    const response = await api.post('/auth/forgot/password', data);
    // dispatch(signup_success(response.data));
    message.success(response.data.message);
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'signup failed. Please try again.';
    // dispatch(signup_failed(errorMessage));
    message.error(errorMessage);
    console.error('otp error:', error);
  }
}


