import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBDataTable } from 'mdbreact';

import React from 'react';

class myComponent extends React.Component {
  state = {
    records: [],
    isLoading: false,
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    const apiUrl = 'https://zomsystem.herokuapp.com/showallrecords';
    fetch(apiUrl)
      .then((response) => response.json())
      .then(data => {
        this.setState({ records: data , isLoading: false})
        console.log(this.state)
      });
  }
  render() 
  {
    const data = {
      columns: [
        {
          label: 'Unique Id',
          field: 'unique_id',
         
          width: 150
        },
        {
          label: 'Index',
          field: 'index',
          
          width: 270
        },
        {
          label: 'Name',
          field: 'name',
         
          width: 200
        },
        {
          label: 'Result',
          field: 'result',
       
          width: 150
        },
        {
          label: 'Time',
          field: 'time',
         
          width: 270
        },
        {
          label: 'Phone Number',
          field: 'phone number',
          width: 200
        },
        {
          label: 'Created At',
          field: 'created_at',
          width: 200
        }
      ],
      rows: this.state.records
      }
    const { records, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <div>
      <ul>
        {records.map(hit =>
          <li key={hit.unique_id}>
            <h4>{hit.unique_id},{" "}{hit.name},{" "}{hit.result}</h4>
            
          </li>
        )}
      </ul>
      <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
    </div>
    );
  }
}
export default myComponent;