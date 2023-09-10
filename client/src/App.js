import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import DefaultLayout from "./components/DefaultLayout/DefaultLayout";
// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";

function App() {

  
  // const fetchApi = async () => {
  //   const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all`)
  //   return res.data
    
  // }
  // const query = useQuery({ queryKey: ['todos'], queryFn: fetchApi })
  

  // console.log('query', query)
  return (
      <Router>
        <Routes>
          {
            routes.map((route, index) => {
              const path = route.path
              const Page = route.page
              const Layout = (route.isShowFooter && route.isShowFooter) ? DefaultLayout : Fragment
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
