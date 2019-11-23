import React, {Component} from 'react';
import './addItemButton.css';

class AddItemButton extends Component{
    constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
  
      this.state = {
        showAdd:false,
      }
    }

    onClick(){
        this.setState({showAdd: true});
    }

    render(){
        const showAdd = this.state.showAdd;
        return(
            <div className="add-box">
            {!showAdd ? (
                <div className="row">
                    <div className="center-block"> 
                        <button  id="addIconCentered" onClick={this.onClick}> 
                        <i className="fa fa-plus-circle fa-lg" id="withButton"></i>
                        <span>EKLE</span>
                        </button>
                    </div>
                </div>
               ):(null)                
            }
            {showAdd ? (
                <div>
                    hasha
                </div>
                ):(null)
            }
            </div>
        )
    }
}

export default AddItemButton;