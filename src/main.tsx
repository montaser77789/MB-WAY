import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import './i18n';


createRoot(document.getElementById("root")!).render(
  <main>
    <Provider store={store}>
      <App />
    </Provider>
  </main>
);
