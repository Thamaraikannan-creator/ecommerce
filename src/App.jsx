import Admin from "./Components/Admin";
import Landing from "./Components/Landing";
import Userlogin from "./Components/Userlogin";
import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import AdminSignup from "./Components/AdminSignup";
import AdminHomepage from "./Components/AdminHomepage";
import Error from "./Components/Error";
import AdminNavbar from "./Components/AdminNavbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserSignup from "./Components/UserSignup";
import UserHomepage from "./Components/UserHomePage";
const App = () => {
    return (
        <div className="app">

            <HashRouter>
                <Routes>



                    <Route path='/' element={<Landing />} />
                    <Route path='/Admin' element={<Admin />} />
                    <Route path='/Userlogin' element={<Userlogin />} />
                    <Route path='/adminsignup' element={<AdminSignup />} />
                    <Route path='AdminHomepage/*' element={<AdminHomepage />} />
                    <Route path='/AdminNavbar' element={<AdminNavbar />} />
                    <Route path='/*' element={<Error />} />
                    <Route path='/AdminHomepage' element={<AdminHomepage />} />
                    <Route path='/userHomepage' element={<UserHomepage />} />
                    <Route path='userHomepage/*' element={<UserHomepage />} />
                    <Route path='/usersignup' element={<UserSignup />} />



                </Routes>
            </HashRouter>
            <ToastContainer />
        </div>
    )
}
export default App