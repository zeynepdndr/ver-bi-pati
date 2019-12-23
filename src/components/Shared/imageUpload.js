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
  handleUploadSuccess = filename => {
    const { firebase } = this.props;
    const { image } = this.state;

    this.setState({ image: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("gallery")
      .child(filename)
      .getDownloadURL()
      .then(function (url) {
        var firebaseRef=firebase.database().ref("gallery");
        firebaseRef.push(url).then(function(){
            console.log("image uploaded to db");
        }
      )}
    )
  }
  handleUpload = () => {
    const { firebase, callback  } = this.props;
    const { image } = this.state;
    const url=[];

    // IMAGE KONROLU => TAMAMLANACAK
    // if(image.name === 'bizkimiz.txt') {
    //   console.error(`not an image, the image file is a ${typeof(image.name)}`)
    // }

    const uploadRef=firebase.storage.ref(`images/${image}`);


    const uploadTask= uploadRef.put(image);
    uploadTask
    .then(uploadTaskSnapshot => {
        uploadTaskSnapshot.ref.getDownloadURL().then(function(downloadURL) {
            // console.log('File available at', downloadURL);
            // this.setState({url:downloadURL})
            url.push(downloadURL)
            console.log('File available at', url[0]); 
      })    
    }).then(()=>
    {
      this.props.image(url[0]);
   
    })

    // uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
      // this.props.image(url[0]);
    // });    
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
          placeholder="Yukle"
          type="button">
         Yukle
        </button>
      </div>
    );
  }
}

export default ImageUpload;