import { Link, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCustomerById } from "components/FakeApi/FakeApi";

export default function CustomerDetails() {

    const { customerId } = useParams();
const location = useLocation()

useEffect(() => {
 getCustomerById(Number(customerId)).then(setCustomer)
}, [customerId])


const [customer, setCustomer] = useState(null)
    return (
        customer && <div>
            <Link to={location.state?.from ?? "/customers"}>go back</Link>
            <p>
          {customer.id}
        </p>
            <p>
              {customer.name}
            </p>
        </div>
    );
};
