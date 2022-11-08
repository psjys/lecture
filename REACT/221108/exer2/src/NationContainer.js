// import { Children } from "react";
// import NationBox from "./NationBox";
import { Children } from 'react';

export default function NationContainer ({children}) {
    return (
        <div className="nation_container">
            {children}
        </div>
    );
}
