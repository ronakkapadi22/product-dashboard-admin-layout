import { lazy } from "react"
import { retry } from "../utils/function"

const Login = lazy(() => retry(() => import("../presentation/Login")))
const Signup = lazy(() => retry(() => import("../presentation/Signup")))
const ForgotPassword = lazy(() => retry(() => import("../presentation/ForgotPassword")))
const Landing = lazy(() => retry(() => import("../presentation/Landing")))

export const route = [
    {
        id: "product_page",
        path: "/",
        public: true,
        element: <Landing />,
    },
    {
        id: "login_page",
        path: "/login",
        isAuth: true,
        element: <Login />,
    },
    {
        id: "forgot_password",
        path: "/forgot-password",
        isAuth: true,
        element: <ForgotPassword />,
    },
    {
        id: "signup_page",
        path: "/signup",
        isAuth: true,
        element: <Signup />,
    }
]

export const publicRoutes = (isPublic) => route.filter((data) => data.public === isPublic)

export const authRoutes = (isAuth) => route.filter((data) => data.isAuth === isAuth)