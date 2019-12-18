import React, {Component} from 'react';
import './activities.css';
import AddItemButton from '../Shared/addItemButton';
import ModalActivity from '../Common/modalActivity';
import ModalConfirm from '../Common/modalConfirm';
// import GoogleFormBox from '../Common/googleFormBox';
import {withFirebase} from '../Firebase';


class ActivitiesBase extends Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.deleted = this.deleted.bind(this);

    this.state = {
      showEdit: false,
      showAdd:false,
      showDeletionModal:false,
      showEditModal:"",
      allActivities: [],
      selectedUid:""
    }
  }

  handleCloseDeletionModal = () => {
    this.setState(
      {showDeletionModal:false},
      () => {}
    );
  }

  handleChange = e => {
    this.setState({ [e.target.id]:e.target.value,});
  };

  handleSubmit=(e)=>{
    e.preventDefault();
    this.addItem(this.state.messageData);
  }

  deleteItem=(uid)=> {
    this.setState(
      {showDeletionModal:true,
        selectedUid:uid
      },
      () => { }
    );
  }

  deleted=()=> {
    const { firebase } = this.props;
    firebase.removeDoc("activity",this.state.selectedUid);
  }

   updateItem=(uid)=> {
    const { firebase } = this.props;
    this.setState({showDeletionModal:false, showEditModal: 'Güncelle', selectedUid:uid });
    firebase.database.collection("activity").doc(uid).get()
    .then((snapshot)=>{
      console.log(snapshot.data())
  });
  }

   callback=()=>{
    this.setState({ showEditModal: '' });
  }

   callbackconfirm=()=>{
    this.setState({ showDeletionModal:false });
    this.deleted();
  }
   componentDidMount(){
    const { firebase } = this.props;
    var activityList =[];
   
    firebase.database.collection("activity").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {        
          activityList.push(doc);
        });
      }).then(() => {
        const renderItems  = activityList.map(item => (
        <div className="card" key={item.id}>
          <div className="card-header" id="headingOne" >
            <h5 className="mb-0">
            <div className="row">
              <div className="col-9 col-md-9">
                <button className="btn collapseACT" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                {item.data().title}
                </button>
              </div>
              <div className="col-1 col-md-1"></div>
              <div className="col-1 col-md-1">
                <span onClick={()=>{this.updateItem(item.id)}}><i className="fa fa-edit fa-lg" id= "trashAlign" title="DÜZENLE"></i></span>
              </div>
              <div className="col-1 col-md-1">
                <span  onClick={()=>{this.deleteItem(item.id)}}><i className="fa fa-trash fa-lg" id="editAlign" title="SİL"></i></span>
              </div>
            </div>
            </h5>
          </div>
          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"data-parent="#accordion">
            <div className="card-body"> 
            { item.data().capacity !=="" ? (
              <div>
                <i>Katılımcı Sayısı: {item.data().capacity}</i><br></br>
              </div>
            ) : null}
             {item.data().description}
            </div>
          </div>
        </div>
        ))
        this.setState({
          allActivities: renderItems,
        })
      }

      )
   }

  render(){
    return (
      <div className="container-fluid">
        <h2>Etkinliklerimiz</h2>
        <div className="buttonAlign">
            <ModalActivity uid={this.state.selectedUid} callback={this.callback} id={this.state.showEditModal}></ModalActivity>
            <ModalConfirm callbackconfirm={this.callbackconfirm} callback={this.handleCloseDeletionModal} open={this.state.showDeletionModal}></ModalConfirm>
        </div>
        <div id="accordion">
          {this.state.allActivities}
          {/* <GoogleFormBox></GoogleFormBox> */}
        </div>
      </div>
    )    
    // removeShow(index) {

    //   let showItem = this.state.allActivities[index];
    //   this.state.allActivities.splice(index, 1);
    //   this.setState({listOfShows: this.state.listOfShows });
    // }
  }
}

const Activities = withFirebase(ActivitiesBase)
export default Activities;
