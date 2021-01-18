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
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';
import { MDBAlert } from 'mdbreact';

class myComponent extends React.Component {
  state = {
    currentItem:{
      unique_id:'',
      index:'',
      name:'',
      time:'',
      phonenumber:'',
    },
    tempId:'',
    info:{ unique_id:'',
    index:'',
    name:'',
    time:'',
    phonenumber:'',
    created_at:'',
    result:'',
         

    },
    ticketID:'',
    previousTime:'',
    updatedTime:'',
    records: [],
    gotinfo:false,
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
  handleChangePrev=(date)=>{
    this.setState({previousTime:date})
  }
  handleChangeUpdated=(date)=>{
    this.setState({updatedTime:date
    })
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
  handleView=()=>{
    if (this.state.ticketID!=='')
    {
    const Url = 'https://zomsystem.herokuapp.com/ticketinfo?query='+this.state.ticketID
    console.log("handle view invoked",this.state.ticketID,Url)
    fetch(Url)
      .then((response) => response.json())
      .then(data => {
        this.setState({ info: data , gotinfo: true})
        this.setState({info:{               
          unique_id:data.unique_id, 
          name: data.name,
          phonenumber: data.phone_number,
         time:data.time,   
         created_at:data.created_at,
         result:data.result,
         index:data.index
         
             
        }})
        console.log(this.state.info)
      });}
  }
  handleViewReset=()=>
  {
    this.setState({gotinfo:false})
  }
  handleDelete=()=>{
    console.log("delete clicked",this.state.tempId)
    if (this.state.tempId!=='')
    {
      var url="https://zomsystem.herokuapp.com/deleteticket?query="+this.state.tempId;
      swal(
        'Deleted !',
        'Deleted Successfully !',
        'error'
                 )
      fetch(url)
      this.componentDidMount()
    }
    else{
      swal(
        'Enter unique id !',
        'Enter unique id !',
        'warning'
                 )
    }

  }
  handleUpdateTime=()=>{
    var newtime= new Date(this.state.updatedTime).getTime()
    var prevtime=new Date(this.state.previousTime).getTime()
    var url="https://zomsystem.herokuapp.com/updatetime?oldtime="+ prevtime +"&newtime="+ newtime ;
    if ((this.state.previousTime!=='') && (this.state.updatedTime!=='') )
    {
      swal(
        'Updated !',
        'Updation done successfully !',
        'success'
                 )
      fetch(url)
      this.componentDidMount()
    }
    else{
      swal(
        'Invalid !',
        'Please input all entries  !',
        'warning'
                 )
    }
    
   
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
    var formattedTime= new Date(this.state.currentItem.time).getTime()
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
        'warning'
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
         
          width: 50
        },
        {
          label: 'Index',
          field: 'index',
          
          width: 50
        },
        {
          label: 'Name',
          field: 'name',
         
          width: 50
        },
        {
          label: 'Result',
          field: 'result',
       
          width: 50
        },
        {
          label: 'Time',
          field: 'time',
         
          width: 50
        },
        {
          label: 'Phone Number',
          field: 'phone_number',
          width: 50
        },
        {
          label: 'Created At',
          field: 'created_at',
          width: 50
        }
      ],
      rows: this.state.records
      }

      const viewApiRes = {
        columns: [
          {
            label: 'Unique Id',
            field: 'unique_id',
           
            width: 50
          },
          {
            label: 'Index',
            field: 'index',
            
            width: 50
          },
          {
            label: 'Name',
            field: 'name',
           
            width: 50
          },
          {
            label: 'Result',
            field: 'result',
         
            width: 50
          },
          {
            label: 'Time',
            field: 'time',
           
            width: 50
          },
          {
            label: 'Phone Number',
            field: 'phone_number',
            width: 50
          },
          {
            label: 'Created At',
            field: 'created_at',
            width: 50
          }
        ],
        rows: this.state.info
        }
    const { records, isLoading } = this.state;
    if (isLoading) {
      //return <p>Loading ...</p>;
      return (
        <div>
          <NavS />
        <header className="App-header">
        <div className="spinner-grow text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
        <code>Fetching data from backend ...</code>
        <div className="spinner-border text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
         
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
    <MDBCol md="6" className="new-card">
      <form>
        <p className="h5 text-center mb-4">Delete Ticket</p>
        <div className="grey-text">
          <MDBInput label="Unique Id" icon="id-card-alt" group type="text" validate error="wrong" required
            success="right" value= {this.state.tempId}
            placeholder="Enter Unique Id "
            onChange={(e) => {
              this.setState({tempId:e.target.value   
                })
               
              console.log(this.state);}} />
         </div>
        <div className="text-center">
          <MDBBtn color="danger"  onClick={this.handleDelete}>Delete</MDBBtn>
        </div>
      </form>
      <MDBRow>
        <MDBCol>
      <form>
        <p className="h5 text-center mb-4">Update Ticket Timings</p>
        <div className="grey-text">
        <Datetime  value={this.state.previousTime}
          onChange={this.handleChangePrev}
          timeFormat={true}
          closeOnSelect={true}
          inputProps={{ placeholder: "Select previous time" }}/>
          Previous Time :{" "}
        {this.state.previousTime
          ? this.state.previousTime.toString()
          : "No selected date"}
          {console.log('previous time is',this.state.previousTime)}
         </div>
          <div className="grey-text">
        <Datetime  value={this.state.updatedTime}
          onChange={this.handleChangeUpdated}
          timeFormat={true}
          closeOnSelect={true}
          inputProps={{ placeholder: "Select updated time" }}/>
          Updated Time :{" "}
        {this.state.updatedTime
          ? this.state.updatedTime.toString()
          : "No selected date"}
          {console.log('updated time is',this.state.updatedTime)}
         </div>
        <div className="text-center">
          <MDBBtn color="primary"  onClick={this.handleUpdateTime}>Update</MDBBtn>
        </div>
      </form>
      </MDBCol>
      </MDBRow>
    </MDBCol>
  
    </MDBRow>
    <MDBRow>
      <MDBCol>
    <form>
        <p className="h5 text-center mb-4">View the user’s details based on the ticket id</p>
        <div className="grey-text">
          <MDBInput label="Ticket Id" icon="id-card-alt" group type="text" validate error="wrong" required
            success="right" value= {this.state.ticketID}
            placeholder="Enter Ticket ID "
            onChange={(e) => {
              this.setState({ticketID:e.target.value   
                })
               
              console.log(this.state);}} />
         </div>
         <div className="text-center">
          <MDBBtn color="success" onClick={this.handleView}>Fetch Details</MDBBtn>
          <MDBBtn color="warning" onClick={this.handleViewReset}>Reset Details</MDBBtn>
        </div>
        {(()=> {
          
          console.log(this.state.info)
          if (this.state.gotinfo===true) {
            return (  <MDBCol  >
            <MDBCard className='text-center'>
              <MDBCardImage className="img-fluid" src=""
                waves />
              <MDBCardBody cascade className='text-center'>
                <MDBCardTitle>Detailed user information</MDBCardTitle>
                <MDBCardText>View user details here</MDBCardText>
                <MDBCardText>Index is: </MDBCardText>{this.state.info.index}
                <MDBCardText>Username is: </MDBCardText>{this.state.info.name}
                <MDBCardText>Unique ID is: </MDBCardText>{this.state.info.unique_id}
                <MDBCardText>Time is: </MDBCardText>{new Date(parseInt(this.state.info.time)).toString()}
                <MDBCardText>Booked at: </MDBCardText>{this.state.info.created_at}
                <MDBCardText>Result is: </MDBCardText>{this.state.info.result}
                <MDBCardText>Phone Number is: </MDBCardText>{this.state.info.phonenumber}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>)
          } else {
            return ( <MDBContainer>
              <MDBAlert className='text-center' color="warning" dismiss>
                <strong>Submit userid to view details!</strong> You should enter the feilds and submit to view user details.
               
              </MDBAlert>
            </MDBContainer>);
          }
        })()}
    </form>
    </MDBCol>
    </MDBRow>
    <MDBRow>
      <MDBCol>
  <MDBDataTable className="tablee"
      striped
      bordered
      small
      data={data}
    /></MDBCol>
    </MDBRow>

</MDBContainer>      
     
    </div>
    );
  }
}
export default myComponent;