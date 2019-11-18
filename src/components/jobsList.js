import React from 'react';
import Job from "./job";
import {FormattedMessage} from 'react-intl';

export default class JobsList extends React.Component {

  state = { 
  	"offers": [
    	{
    	  "id": "0001",
        "name": "Manager",
    	  "company": "Schneider Electric", 
    	  "salary": 4.5,
    	  "city": "Bogotá, Colombia",
        "date": "2019-03-26",
        "views": 1000
      }, 
      {
        "id": "0002",
        "name": "Software Engineer",
        "company": "Google Inc.", 
        "salary": 20,
        "city": "Palo Alto, CA, USA",
        "date": "2019-03-27",
        "views": 12312
      },
      {
        "id": "0003",
        "name": "Nurse",
        "company": "Clínica La Aurora", 
        "salary": 1,
        "city": "Cali, Colombia",
        "date": "2019-03-28",
        "views": 900
      }
    ]
  };

  header = () =>{
    if(navigator.language.split("-")[0] === "es"){
      return "thead-light";
  }else{
      return "thead-dark";
  }
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead className={this.header()}>
            <tr>
              <th scope="col">#</th>
              <th scope="col"><FormattedMessage id="Position"/></th>
              <th scope="col"><FormattedMessage id="Company"/></th>
              <th scope="col"><FormattedMessage id="Salary"/></th>
              <th scope="col"><FormattedMessage id="City"/></th>
              <th scope="col"><FormattedMessage id="PublicationDate"/></th>
              <th scope="col"><FormattedMessage id="Views"/></th>
            </tr>
          </thead>
          <tbody>
              {this.state.offers.map( (e,i) => <Job key={i} offer={e}/>)}
          </tbody>
        </table>
      </div>
    );
  }
}