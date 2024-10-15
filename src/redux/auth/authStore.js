import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { loginSlice, signupSlice } from './authSlice';

// Define persist config
const persistConfig = {
  key: 'root',   // This will be the key in localStorage
  storage,       // Use localStorage to persist data
};

// Persisted loginReducer
const persistedLoginReducer = persistReducer(persistConfig, loginSlice.reducer);

// Persisted signupReducer
const persistedSignupReducer = persistReducer(persistConfig, signupSlice.reducer);

// Configure store with persisted reducers
export const store = configureStore({
  reducer: {
    login: persistedLoginReducer,  // Use the persisted login reducer
    signup: persistedSignupReducer, // Use the persisted signup reducer
  },
});

// Create persistor
export const persistor = persistStore(store);
