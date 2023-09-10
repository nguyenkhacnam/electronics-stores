import CartPage from "../pages/CartPage/CartPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

const routes = [
  {
    path: '/',
    page: HomePage,
    isShowHeader: true,
    isShowFooter: true
  },
  {
    path: '/product',
    page: ProductPage,
    isShowHeader: true,
    isShowFooter: true
  },
  {
    path: '/profile',
    page: ProfilePage,
    isShowHeader: true,
    isShowFooter: true
  },
  {
    path: '/cart',
    page: CartPage,
    isShowHeader: true,
    isShowFooter: true
  },
  {
    path: '/order',
    page: OrderPage,
    isShowHeader: true,
    isShowFooter: true
  },
  {
    path: '*',
    page: NotFoundPage,
    isShowHeader: false,
    isShowFooter: false
  },
  {
    path: '/register',
    page: RegisterPage,
    isShowHeader: true,
    isShowFooter: true
},
{
    path: '/login',
    page: LoginPage,
    isShowHeader: true,
    isShowFooter: true
},
]

export default routes