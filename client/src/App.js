import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import DefaultLayout from "./components/DefaultLayout/DefaultLayout";
import { isJsonString } from "./utils";
import jwt_decode from "jwt-decode";
import { updateUser } from "./redux/features/user/userSlice";
import { useDispatch } from "react-redux";
import { axiosJWT, getDetailUser, refreshToken } from "./services/api/userService";
import axios from "axios";


function App() {

  const dispatch = useDispatch()

  const handleGetDetailUser = async (id, accessToken) => {
    const res = await getDetailUser(id, accessToken)
    dispatch(updateUser({ ...res?.data, accessToken }))
  }

  const handleDecoded = () => {
    let accessTokenStorage = localStorage.getItem('accessToken')
    let decoded = {}
    if (accessTokenStorage && isJsonString(accessTokenStorage)) {
      accessTokenStorage = JSON.parse(accessTokenStorage)
      decoded = jwt_decode(accessTokenStorage);
      // console.log('decoded', decoded)
      return { decoded, accessTokenStorage }

    }
  }
  useEffect(() => {
    const { decoded, accessTokenStorage } = handleDecoded()
    if (decoded?.payload?.id) {
      handleGetDetailUser(decoded?.payload?.id, accessTokenStorage)
    }
  }, [])


  axiosJWT.interceptors.request.use(async (config) => {
    const { decoded } = handleDecoded()
    const currentTime = new Date()
    if (decoded?.exp < currentTime.getTime() / 1000) {
      const {accessToken} = await refreshToken()
      config.headers['token'] = `Bearer ${accessToken}`
    }
    console.log('config', config)
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  return (
    <Router>
      <Routes>
        {
          routes.map((route, index) => {
            const path = route.path
            const Page = route.page
            const Layout = (route.isShowHeader && route.isShowFooter) ? DefaultLayout : Fragment
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })
        }
      </Routes>
    </Router>
  );
}

export default App;
