import React, { Component } from "react";

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      progress: 0
    };
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleUpload = () => {
    const { firebase } = this.props;
    const { image } = this.state;

    // IMAGE KONROLU => TAMAMLANACAK
    if(image.name === 'bizkimiz.txt') {
      console.error(`not an image, the image file is a ${typeof(image.name)}`)
    }

    const uploadRef=firebase.storage.ref(`images/${image.name}`);

    const uploadTask= uploadRef.put(image);
    

    uploadTask.on('stage_changed',
      (snapshot)=>{
        console.log("snapshot",snapshot);
      },(err)=>{
        console.log("err",err);        
      },()=>{
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        uploadRef.child('images').getDownloadURL()
         .then(fireBaseUrl => {
          //  setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl
          // firebase.updateDoc('activity', activityInfo)
          console.log("URL",fireBaseUrl);
          })
      }
    )
  };
  render() {
    return (
      <div className="center">
        {/* <div className="row">
          <progress value={this.state.progress} max="100" className="progress" />
        </div> */}
        <div className="file-field input-field">
          <div>
            <input type="file" onChange={this.handleChange} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <button
          onClick={this.handleUpload}
          className="waves-effect waves-light btn"
        >
          Yukle
        </button>
      </div>
    );
  }
}

export default ImageUpload;