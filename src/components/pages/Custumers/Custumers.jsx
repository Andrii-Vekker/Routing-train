import { getCustomers } from "components/FakeApi/FakeApi";
import SearchBox from "components/SearchBox/SearchBox";
import { useState, useEffect, useMemo } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";





export default function Custumers() {
    const [customers, setcustomers] = useState([])
    const location = useLocation()
    
    useEffect(() => {
 
        getCustomers().then(setcustomers)
    }, []);

    const [SearchParams, setSearchParams] = useSearchParams([])

    const changeFilter = (value) => {
        console.log(value)
        setSearchParams(value !== "" ? { filter: value } : {})
    };

    const filterParams = SearchParams.get("filter") ?? "";

    const visibleCustumers = useMemo(() => {
        return (
            customers.filter(({name}) => name.toLowerCase().includes(filterParams.toLowerCase()))
        )
    }, [customers, filterParams])

    return (
      
        <main>
            <SearchBox value={filterParams} onChange={changeFilter} />
            {visibleCustumers.map(({ id, name }) => {
                return (visibleCustumers.length > 0 && <li key={id}><Link to={`${id}`} state={{from: location}}>{name}</Link></li>)
            })};
        </main>
    );
};
