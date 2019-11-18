import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import locale_es from './locales/es';
import locale_en from './locales/en';

import JobsList from "./components/jobsList";

let detectLocal = () =>{
    console.log(navigator.language.split("-")[0]);
    if(navigator.language.split("-")[0] === "es"){
        return locale_es;
    }else{
        return locale_en;
    }
}

ReactDOM.render(
    <IntlProvider locale={navigator.language} messages={detectLocal()}>
         <JobsList/>
    </IntlProvider>, document.getElementById("root")
       
);