import React, {Component} from 'react';
import './addItemButton.css';

const AddItemButton = (props) =>{
    return (
        <div className="add-box">
            <div className="row">
                <div className="center-block"> 
                    <button  id="addIconCentered" onClick={props.addActivity}> 
                    <i className="fa fa-plus-circle fa-lg" id="withButton"></i>
                    <span>YENİ</span>
                    </button>
                </div>
            </div>
        </div>
    );
}



// class AddItemButton extends Component{
//     constructor(props) {
//       super(props);
//       this.onClick = this.onClick.bind(this);
  
//       this.state = {
//         showAdd:false,
//       }
//     }
//     onClick(){
//         this.setState({showAdd: true});
//     }
//     showModal(){
//         return(this.state.showAdd)
//     }
//     render(){
//         return(
//             <div className="add-box">
//                 <div className="row">
//                     <div className="center-block"> 
//                         <button  id="addIconCentered" onClick={props.addActivity}> 
//                         <i className="fa fa-plus-circle fa-lg" id="withButton"></i>
//                         <span>EKLE</span>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

export default AddItemButton;