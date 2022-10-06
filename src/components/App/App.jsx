import {lazy} from "react";
import { Container } from "components/App.styled";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "components/Layout/Layout";
import DashboardItem from "components/Dashboard/Dashboard";
// import Sales from "components/pages/Sales/Sales";
import Invoices from "components/Invoices/Invoices";
import { InvoiceDetails } from "components/InvoiceDetails/InvoiceDetails";
import Custumers from "components/pages/Custumers/Custumers";
import CustomerDetails from "components/pages/CustomerDetails/CustomerDetails";

const Sales = lazy(() => import("../pages/Sales/Sales"))

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Navigate to={"dashboard"}/>} />
          <Route path="/dashboard" element={<DashboardItem/>}/>
          <Route path="sales" element={<Sales />}>
            <Route path="analytics" element={<div>analytics</div>}/>
            <Route path="invoices" element={<Invoices />}>
              <Route path=":invoiceId" element={<InvoiceDetails/>} />
            </Route>
            <Route path="deposits" element={<div>deposits</div>}/>
          </Route>
          <Route path="reports" element={<div>efwefwef</div>}/>
          <Route path="feedback" element={<div>efwefwef</div>}/>
          <Route path="customers" element={<Custumers />} />
          <Route path="customers/:customerId" element={<CustomerDetails/>} />
        </Route>
      </Routes>
    

    </Container>
  );
};
