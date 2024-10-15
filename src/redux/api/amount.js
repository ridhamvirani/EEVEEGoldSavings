import { message } from "antd";
import api from "../auth/api";

export const addAmount = async (data) => {
    try {
      const response = await api.post('/user/plan', data);
      message.success(response.data.message);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.message ;
      message.error(errorMessage);
    }
  }
  
  export const getAmoutListApi = async () => {
    try {
      const response = await api.get('/user/plan');
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message;
      message.error(errorMessage);
    }
  }

  export const createPaymentApi = async (data) => {
    try {
      const response = await api.post('/user/transaction',data);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message;
      message.error(errorMessage);
    }
  }

  export const getTransactionHistoryApi = async (planId) => {
    try {
      const response = await api.get('/user/transaction',{params:{planId}});
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message;
      message.error(errorMessage);
    }
  }

  export const contactDetaisApi = async (payload) => {
    try {
      const response = await api.post('/user/contact',payload);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message;
      message.error(errorMessage);
    }
  }
  

  export const paymentImage = async (payload) => {
    try {
      const response = await api.post('/user/image/uploads', payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message;
      message.error(errorMessage);
    }
  }

  export const invoiceDownload = async (planId) => {
    try {

      const response = await api.get('/user/invoice',{params:{planId}});
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message;
      message.error(errorMessage);
    }
  }
  