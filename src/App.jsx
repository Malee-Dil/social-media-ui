import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import { use } from "react";
function App() {

  

  const {currentUser} = useContext(AuthContext);

  const {darkMode} = useContext(DarkModeContext)

  console.log(darkMode)
  console.log(currentUser)
  const Layout = () => {
    return(
      <div
  className={`theme-${darkMode ? "dark" : "light"}`}
  style={{
    height: "100vh",  /* Make it occupy full viewport height */
    width: "100%",  /* Use full width of the screen */
    display: "flex",
    flexDirection: "column", /* Stack navbar on top, bars/content below */
  }}
>
  {/* Top Navigation Bar */}
  <NavBar style={{ flexShrink: 0 }} />

  {/* Main Content Layout */}
  <div
    style={{
      display: "flex",
      flex: 1,  /* Allow it to take remaining space */
      overflow: "hidden",  /* Prevent overflow issues */
    }}
  >
    {/* Left Sidebar */}
    <LeftBar style={{ flex: 1, minWidth: "250px" }} />

    {/* Main Content */}
    <div className="outlet-container"
      style={{
        flex: 6, 
        minWidth: "0",  /* Prevent flex issues */
        overflowY: "auto",  /* Enable scrolling if content overflows */
      }}
    >
      <Outlet />
    </div>

    {/* Right Sidebar */}
    <RightBar style={{ flex: 1, minWidth: "250px" }} />
  </div>
</div>

    );
  };

  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }

    return children
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element: 
        <ProtectedRoute>
          <Layout/>
        </ProtectedRoute>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        },
      ],

    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
