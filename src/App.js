import logo from "./logo.svg";
import Form from "./Components/Form";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Invoices from "./Components/Invoices";
import Footer from "./Components/Footer";
import "./App.css";
import LoginForm from "./Components/LoginForm";
import UserDashBoard from "./Components/UserDashBoard";
import CreatePlans from "./Components/CreatePlans";
import AdminDashboard from "./Components/AdminDashboard";
import UserDashboardUpdateForm from "./Components/UserDashboardUpdateForm";
import Home from "./Components/Home.jsx";
import Requests from "./Components/Requests";
import Logout from "./Components/Logout";
import CreateRequests from "./Components/CreateRequest";
import InsurancePlans from "./Components/InsurancePlans";
import GetAllRequests from "./Components/GetAllRequests";
import CreateInvoice from "./Components/CreateInvoice";
import GetAllInvoices from "./Components/GetAllInvoices";
import CreateClaim from "./Components/CreateClaim";
import { getCookie } from "./utils";
import GetAllClaims from "./Components/GetAllClaims";
import AcceptClaim from "./Components/AcceptClaim";
import AllProviders from "./Components/AllProviders";
import About from "./Components/About";
import InvoicePayment from "./Components/InvoicePayment";
import AllCLaims from "./Components/AllCLaims";
import AllInvoices from "./Components/AllInvoices";
import AllRequests from "./Components/AllRequests";
import Singleplan from "./Components/Singleplan";
import AddHealthProvider from "./Components/AddHealthProvider";
function App() {
  
  var user = JSON.parse(localStorage.getItem("id"));
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={user ? <UserDashBoard /> : <Home />} />
          <Route
            exact
            path="/login"
            element={user ? <UserDashBoard /> : <LoginForm />}
          />
          {/* <Route exact path="/signup" element={user ? <UserDashBoard/>:<Form/>}/> */}
          <Route
            exact
            path="/signup"
            element={user ? <Navigate to="/" replace={true} /> : <Form />}
          />
          <Route path="/requests" element={<Requests />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/UserDashboardUpdateForm"
            element={<UserDashboardUpdateForm />}
          />
          <Route path="/createrequest" element={<CreateRequests />} />
          <Route
            path="/insuranceplans"
            element={
              user && (getCookie("Role") == "User" || getCookie("Role") == "HealthProvider")  ? (
                <InsurancePlans />
              ) : (
                <About />
              )
            }
          />
          <Route path="/getallrequests" element={<GetAllRequests />} />
          <Route path="/getallinvoices" element={<GetAllInvoices />} />
          <Route path="/createinvoice" element={<CreateInvoice />} />
          <Route path="/createclaim" element={<CreateClaim />} />
          <Route path="/getallclaims" element={<GetAllClaims />} />
          <Route path="/acceptclaim" element={<AcceptClaim />} />
          <Route path="/createplan" element={<CreatePlans />} />
          <Route path="/dashboard" element={<UserDashBoard />} />
          <Route
            path="/allproviders"
            element={user ? <AllProviders /> : <LoginForm />}
          />
          <Route path="/invoicepayment" element={<InvoicePayment />} />
          <Route path="/About" element={<About />} />
          <Route path="/allclaim" element={<AllCLaims />} />
          <Route path="/allinvoice" element={<AllInvoices/>}/>
          <Route path="/allrequest" element={<AllRequests/>}/>
          <Route path="/singleplan" element={<Singleplan/>}/>
          <Route path="/addprovider" element={<AddHealthProvider/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
