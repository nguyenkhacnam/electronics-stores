import CartPage from "../pages/CartPage/CartPage";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

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
]

export default routes