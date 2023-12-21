import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { AuthContextWrapper } from "./hooks/useAuth";
import { UserContextWrapper } from "./hooks/useUsers";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <UserContextWrapper>
    <AuthContextWrapper>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        rtl={false}
        theme="colored"
        toastStyle={{ backgroundColor: "#9ADE7B" }}
      />
    </AuthContextWrapper>
  </UserContextWrapper>
);
