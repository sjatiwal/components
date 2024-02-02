import { useState, useEffect } from "react";
import AdminLogin from "./view/adminLogin";
import Autocomplete from "./view/autocomplete";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CollapsibleContent from "./view/collapsibleContent";
import CreateEmployee from "./view/createEmployee";
import CssProperties from "./view/cssProperties";
import EditEmployee from "./view/editEmployee";
import Footer from "./component/footer";
import ForgotPassword from "./view/forgotPassword";
import Header from "./component/header";
import Home from "./view/home";
import Iframe from "./view/iframe";
import Images from "./view/images";
import Links from "./view/links";
import { loadUser } from "./action/userAction";
import Login from "./view/login";
import Menu from "./view/menu";
import NotFound from "./view/404";
import Popups from "./view/popups";
import ProtectedRoute from "./component/protectedRoutes";
import SearchEmployee from "./view/searchEmployee";
import Section from "./component/section";
import Slider from "./view/slider";
import store from "./store";
import Tabs from "./view/tabs";
import Tooltip from "./view/tooltip";

import "./App.css";
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showSection, setShowSection] = useState(false);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add event listener to listen for window resize
    window.addEventListener("resize", handleResize);

    store.dispatch(loadUser());

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (event) => {
    setShowSection(true);
    event.stopPropagation(); // Stops the event from propagating to parent elements
  };

  const pages = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/employee/create",
      element: <CreateEmployee />,
    },

    {
      path: "/employee/edit/:id",
      element: <EditEmployee />,
    },

    {
      path: "/employee/search",
      element: <SearchEmployee />,
    },

    {
      path: "/tabs",
      element: <Tabs />,
    },
    {
      path: "/menu",
      element: <Menu />,
    },
    {
      path: "/autocomplete",
      element: <Autocomplete />,
    },
    {
      path: "/collapsible-content",
      element: <CollapsibleContent />,
    },
    {
      path: "/slider",
      element: <Slider />,
    },
    {
      path: "/iframe",
      element: <Iframe />,
    },
    {
      path: "/css-properties",
      element: <CssProperties />,
    },
    {
      path: "/links",
      element: <Links />,
    },
    {
      path: "/popups",
      element: <Popups />,
    },
    {
      path: "/tooltips",
      element: <Tooltip />,
    },
    {
      path: "/images",
      element: <Images />,
    },
  ];
  return (
    <Router>
      <div className="App ">
        <Header />
        <div>
          <div>
            {windowWidth > 768 ? (
              <Section position={"absolute"} />
            ) : (
              <Section
                position={"relative"}
                showSection={showSection}
                setShowSection={setShowSection}
              />
            )}
          </div>
          <div
            className={`${
              windowWidth > 768 ? "ml-52 mt-16" : "ml-0 mt-16"
            } h-[calc(100vh-7.7rem)] overflow-scroll`}
            onClick={handleClick}
          >
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/account/admin" element={<AdminLogin />} />
              <Route path="/forgotPassword" element={<ForgotPassword />} />
              {pages.map((item) => {
                return (
                  <Route
                    key={item.path}
                    path={item.path}
                    element={<ProtectedRoute>{item.element}</ProtectedRoute>}
                  />
                );
              })}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
        <Footer windowWidth={windowWidth} />
      </div>
    </Router>
  );
}

export default App;
