import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

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
        this.setState({ records: data , isLoading: false})});
  }
  render() 
  {
    const { records, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading ...</p>;
    }
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