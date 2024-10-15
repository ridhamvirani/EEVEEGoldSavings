"use client";

import { Provider } from "react-redux";
import { store,persistor } from "@/redux/auth/authStore";
import { PersistGate } from 'redux-persist/integration/react';

export default function ClientProvider({ children }) {
  return <Provider store={store}> <PersistGate loading={null} persistor={persistor}>{children}</PersistGate></Provider>;
}
