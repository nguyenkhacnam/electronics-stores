import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import DefaultLayout from "./components/DefaultLayout/DefaultLayout";

function App() {
  return (
    <h1 className="text-3xl font-bold underline">
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
    </h1>
  );
}

export default App;
