import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import React from 'react';

class myComponent extends React.Component {
  state = {
    records: [],
  };
  componentDidMount() {
    const apiUrl = 'https://zomsystem.herokuapp.com/showallrecords';
    fetch(apiUrl)
      .then((response) => response.json())
      .then(data => {
        this.setState({ records: data })});
  }
  render() 
  {
    const { records } = this.state;
    return (
      <ul>
        {records.map(hit =>
          <li key={hit.unique_id}>
            <h4>{hit.unique_id},{" "}{hit.name},{" "}{hit.result}</h4>
            
          </li>
        )}
      </ul>
    );
  }
}
export default myComponent;