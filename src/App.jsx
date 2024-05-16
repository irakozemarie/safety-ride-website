import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import NavBar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Service from "./Pages/Service"
import Contact from "./Pages/Contact"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp";
import ResetPassword from "./Pages/Reset";
import UpdatePassword from "./Pages/Update";
import ProfileForm from "./Pages/Profile";
import OTP from "./Pages/OTP";




const Layout = ()=>{

  return(
    <>
     <NavBar/>
     <Outlet/>
     <Footer/>
    </>
  )
}
function App() {
  return (
    <BrowserRouter>
      {/* <Profile1/> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/OTP" element={<OTP />} />
          <Route path="/Reset" element={<ResetPassword />} />
          <Route path="/Update" element={<UpdatePassword />} />
          <Route path="/Profile" element={<ProfileForm />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signIn" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App