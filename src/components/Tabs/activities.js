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
    firebase.removeDoc("activity",'nBLcuppq6p2qzW0f5Enc');
   }

   componentDidMount(){
    const { firebase } = this.props;
    var activityList =[];
   
    firebase.database.collection("activity").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {        
          activityList.push(doc.data());
        });
      });
      this.setState(prevState => ({
        allActivities: [...prevState.allActivities, activityList]
      })
    )
    console.log(activityList)
    console.log(this.state);
   }

  render(){
    const showAdd = this.state.showAdd;
    const notification = this.state;
    var markers  = this.state.mapdata;  

    return (
      <div className="container-fluid">
        <h2>Etkinliklerimiz</h2>
        <div className="buttonAlign">
            <ModalActivity></ModalActivity>
        </div>
        <div id="accordion">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button className="btn collapseACT" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                 VER BI'PATI Tanışma Toplantısı
                </button>
                  <span onClick={this.deleteItem("nBLcuppq6p2qzW0f5Enc")}><i className="fa fa-trash fa-lg" id= "trashAlign" title="SİL"></i></span>
                  <span><i className="fa fa-edit fa-lg" id="editAlign"title="DÜZENLE"></i></span>
              </h5>
            </div>

            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
              <div className="card-body">Hey İTÜ’lü 🐶
              Sen de Ver Bi’ Pati ailesiyle tanışmak ve aramıza katılmak istersen seni bu akşam 18:00’de MED A32’deki tanışma toplantımıza bekliyoruz.🐾 </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button className="btn collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Hepinizi kermesimize bekliyoruz
                </button>
              </h5>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
              <div className="card-body">
              Sütişin yanında acıkanları ve canı tatlı çekenleri bekliyoruz.
              </div>
            </div>
          </div>
        </div>    
      </div>
    )    
  }
}

const Activities = withFirebase(ActivitiesBase)
export default Activities;
