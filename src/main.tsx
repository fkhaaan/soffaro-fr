import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App  from "./app/App";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./app/MaterialTheme";

import "./css/index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import ContextProvider from "./app/context/ContextProvider";
import { SocketProvider } from "./app/context/SocketContext";

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <StrictMode>
      <Provider store={store}>
        <ContextProvider>
          <SocketProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
          </SocketProvider>
        </ContextProvider>
      </Provider>
    </StrictMode>
  )
} else {
  throw new Error("Root element with ID 'root' was not found")
}
