import { Container } from "components/App.styled";
import { Routes, Route } from "react-router-dom";
import Layout from "components/Layout/Layout";
import DashboardItem from "components/Dashboard/Dashboard";
import { Sales } from "components/pages/Sales/Sales";
import Invoices from "components/Invoices/Invoices";
import { InvoiceDetails } from "components/InvoiceDetails/InvoiceDetails";

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />} >
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
          <Route path="customers" element={<div>efwefwef</div>}/>
        </Route>
      </Routes>
    

    </Container>
  );
};
