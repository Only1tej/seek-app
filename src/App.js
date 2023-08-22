import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SignUps from "./pages/SignUps";
import Order from "./pages/user/Order";
import PaymentMethods from "./pages/user/PaymentMethods";
import EmailVerification from "./pages/EmailVerification";
import ForgotPassword from "./pages/ForgotPassword";
import NewCard from "./pages/user/NewCard";
import UpdateProfile from "./pages/user/UpdateProfile";
import Partition from "./layout/Partition";
import Invoices from "./pages/user/Invoices";
import ReferredOrders from "./pages/user/ReferredOrders";
import MyOrders from "./pages/user/MyOrders";
import PendingOrders from "./pages/admin/PendingOrders";
import CompletedOrders from "./pages/admin/CompletedOrders";
import Commission from "./pages/admin/Commission";
import Account from "./pages/admin/Account";
import ChangePassword from "./pages/admin/ChangePassword";
import UserList from "./pages/admin/UserList";
import InviteUsers from "./pages/admin/InviteUsers";
import { ThemeProvider, theme } from "@chakra-ui/react";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="sign-ups" element={<SignUps />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="email-verification" element={<EmailVerification />} />
            <Route path="forgotpassword" element={<ForgotPassword />} />
            {/* User route */}
            <Route path="user/order" element={<Order />} />
            <Route path="user/payment-methods" element={<PaymentMethods />} />
            <Route path="user/new-card" element={<NewCard />} />
            <Route path="user/invoices" element={<Invoices />} />
            <Route path="user/my-orders" element={<MyOrders />} />
            <Route path="user/referred-orders" element={<ReferredOrders />} />
            <Route path="user/update-profile" element={<UpdateProfile />} />
            {/* Admin route */}
            <Route path="admin/pending-orders" element={<PendingOrders />} />
            <Route
              path="admin/completed-orders"
              element={<CompletedOrders />}
            />
            <Route path="admin/commission" element={<Commission />} />
            <Route path="admin/account" element={<Account />} />
            <Route path="admin/change-password" element={<ChangePassword />} />
            <Route path="admin/user-list" element={<UserList />} />
            <Route path="admin/invite-users" element={<InviteUsers />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
