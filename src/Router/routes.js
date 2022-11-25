import { lazy } from "react"
import { retry } from "../utils/function"

const Login = lazy(() => retry(() => import("../presentation/Login")))
const Signup = lazy(() => retry(() => import("../presentation/Signup")))
const ForgotPassword = lazy(() => retry(() => import("../presentation/ForgotPassword")))
const Landing = lazy(() => retry(() => import("../presentation/Landing")))
const Cart = lazy(() => retry(() => import("../presentation/cart/Cart")))

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
    },
    {
        id: "user_cart_page",
        path: "/add-to-cart/:id",
        isPrivate: true,
        element: <Cart/>,
        access: ['user', 'admin', 'manager']
    },
    {
        id: "user",
        path: "/add-to-cart/:id",
        isPrivate: true,
        element: <Cart/>,
        access: ['user']
    },
    {
        id: "admin",
        path: "/add-to-cart/:id",
        isPrivate: true,
        element: <Cart/>,
        access: ['admin']
    }
]

export const isAccessableRoutes = (data, role) => data.map(value => value === role).some(val => val)

export const publicRoutes = isPublic => route.filter(data => data.public === isPublic)

export const authRoutes = isAuth => route.filter(data => data.isAuth === isAuth)

export const userPrivateRoutes = (role) => route.filter((data) => data.isPrivate ? isAccessableRoutes(data.access, role) : null)