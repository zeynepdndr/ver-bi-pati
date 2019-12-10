import React, {Component} from 'react';
import './activities.css';
import AddItemButton from '../Shared/addItemButton';
import ModalActivity from '../Common/modalActivity';
import {withFirebase} from '../Firebase'


class ActivitiesBase extends Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      showEdit: false,
      showAdd:false,
      showDelete:false,
      allActivities: [],
    }
  }

  handleChange = e => {
    this.setState({ [e.target.id]:e.target.value,});
  };

  handleSubmit=(e)=>{
    e.preventDefault();
    this.addItem(this.state.messageData);
  }

  onClick(){
    this.setState({showAdd: true});
  }

  deleteItem=(uid)=> {
    const { firebase } = this.props;
    firebase.removeDoc("activity",uid);
   }

   mySpan=(type)=> {
    <span><i className="fa fa-edit fa-lg" id="editAlign" title={type}></i></span>
    return <li>{props.message}</li>;
   }

   componentDidMount(){
    const { firebase } = this.props;
    var activityList =[];
   
    firebase.database.collection("activity").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {        
          activityList.push(doc.data());
          console.log(doc);
        });
      }).then(() => {
        const renderItems  = activityList.map(item => (
        <div className="card" key={item}>
          <div className="card-header" id="headingOne" >
            <h5 className="mb-0">
              <button className="btn collapseACT" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              {item.title}
              </button>
                <span  onClick={console.log('span')}><i className="fa fa-trash fa-lg" id= "trashAlign" title="SİL"></i></span>
                <span><i className="fa fa-edit fa-lg" id="editAlign"title="DÜZENLE"></i></span>
            </h5>
          </div>

          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"data-parent="#accordion">
            <div className="card-body"> 
             {item.definition}
            </div>
          </div>
        </div>
        ))
        this.setState({
          allActivities: renderItems
        })
      }

      )
   }

  render(){
    const showAdd = this.state.showAdd;  
    return (
      <div className="container-fluid">
        <h2>Etkinliklerimiz</h2>
        <div className="buttonAlign">
            <ModalActivity></ModalActivity>
        </div>
        <div id="accordion">
          {this.state.allActivities}
        </div>
      </div>
    )    
  }
}

const Activities = withFirebase(ActivitiesBase)
export default Activities;
