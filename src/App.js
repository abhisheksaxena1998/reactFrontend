import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import NavBar from "./components/navbar"
import NavS from "./components/navbars"
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { MDBDataTable } from 'mdbreact';
import React from 'react';
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import swal from "sweetalert";
import Timekeeper from 'react-timekeeper';
import Timepickercomponent from "./components/timepickercomponent"

class myComponent extends React.Component {
  state = {
    currentItem:{
      unique_id:'',
      index:'',
      name:'',
      time:'',
      phonenumber:'',
    },
    records: [],
    startDate:'',
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
  handleChange = (date) => {
    this.setState({currentItem:{               
      unique_id:this.state.currentItem.unique_id, 
      name: this.state.currentItem.name,
      phonenumber: this.state.currentItem.phonenumber,
     time:date,   
         
    }})};
  handleReset = ()=>{
    console.log("reset clicked")
    console.log(this.state)
  }
  handleSubmit=()=>{
    console.log("submit clicked")
    console.log(this.state)
    console.log("Info is ",this.state.startDate)
    this.setState({currentItem:{               
      unique_id:this.state.currentItem.unique_id, 
      name: this.state.currentItem.name,
      phonenumber: this.state.currentItem.phonenumber,
     time:this.state.currentItem.time ,   
         
    }})
    var formattedTime= new Date(this.state.currentItem.time).toLocaleString().replace(/,/g,"").slice(0,-2)
    console.log(formattedTime)
    var url="https://zomsystem.herokuapp.com/addRecord?uniqueid="+this.state.currentItem.unique_id +"&nm="+this.state.currentItem.name +"&phonenumber="+this.state.currentItem.phonenumber +"&time="+formattedTime ;
    console.log(url)
    if ((this.state.currentItem.unique_id!=='') && (this.state.currentItem.name!=='') && (this.state.currentItem.phonenumber!=='') && (this.state.currentItem.time!=='' ))
    {
      swal(
        'Added !',
        'Booked successfully !',
        'success'
                 )
      fetch(url)
      this.componentDidMount()
    }
    else{
      swal(
        'Invalid !',
        'Please input all entries  !',
        'error'
                 )
    }
    
    
  }
  render() 
  {
    
    const data = {
      columns: [
        {
          label: 'Unique Id',
          field: 'unique_id',
         
          width: 80
        },
        {
          label: 'Index',
          field: 'index',
          
          width: 70
        },
        {
          label: 'Name',
          field: 'name',
         
          width: 100
        },
        {
          label: 'Result',
          field: 'result',
       
          width: 150
        },
        {
          label: 'Time',
          field: 'time',
         
          width: 200
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
      //return <p>Loading ...</p>;
      return (
        <div>
          <NavS />
        <header className="App-header">
        <p>
          <code>Loading requested data ...</code>
        </p>
        </header>
        </div>
      );
    }
    
    return (
      <div>
         <NavBar totalTasks={this.state.records.length}/>

         <MDBContainer>
  <MDBRow>
    <MDBCol md="6" className="new-card">
      <form>
        <p className="h5 text-center mb-4">Book Ticket</p>
        <div className="grey-text">
          <MDBInput label="Name" icon="address-book" group type="text" validate error="wrong" required
            success="right" value= {this.state.currentItem.name}
            placeholder="Enter Name"
            onChange={(e) => {
              this.setState({
                currentItem:{               
                  unique_id:this.state.currentItem.unique_id, 
                  name: e.target.value,
                  phonenumber: this.state.currentItem.phonenumber,
                  time:this.state.currentItem.time ,   
         
                }})
               
              console.log(this.state);}} />
          <MDBInput label="Phone number " icon="phone" group type="phone" value= {this.state.currentItem.phonenumber}
          placeholder="Enter phone"
          onChange={(f) => {
            this.setState({
              currentItem:{ 
                name:this.state.currentItem.name ,               
                unique_id:this.state.currentItem.unique_id,
                phonenumber:f.target.value,
                time:this.state.currentItem.time ,   
         
              }})
             
            console.log(this.state);
          }}/>
          <MDBInput label="Seat no." icon="envelope" group type="text" validate error="wrong"
            success="right" value= {this.state.currentItem.unique_id}
            placeholder="Enter unique id "
            onChange={(e) => {
              this.setState({
                currentItem:{               
                 unique_id:e.target.value,
                  name:this.state.currentItem.name ,
                  phonenumber: this.state.currentItem.phonenumber,
                  time:this.state.currentItem.time ,    
         
                }})
               
              console.log(this.state);}} />
            
           
           <Datetime  value={this.state.currentItem.time}
          onChange={this.handleChange}
          timeFormat={true}
          closeOnSelect={true}
          inputProps={{ placeholder: "Select timings of show" }}/>
          Selected timings :{" "}
        {this.state.currentItem.time
          ? this.state.currentItem.time.toString()
          : "No selected date"}
          {console.log('tien is',this.state.currentItem.time)}
        
        </div>
        <div className="text-center">
          <MDBBtn  onClick={this.handleSubmit}>Submit</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>      
      <MDBDataTable className="tablee"
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