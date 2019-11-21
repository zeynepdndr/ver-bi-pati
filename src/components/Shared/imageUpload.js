import React, { Component } from "react";

import firebase from '@firebase/app';
import Firebase from 'firebase'



class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      progress: 0
    };
    const storage = firebase.storage();
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleUpload = () => {
    const { image } = this.state;
    const uploadTask = this.storage.ref(`images/${image.name}`).put(image);
    console.log(image);
    // uploadTask.on(
    //   "state_changed",
    //   snapshot => {
    //     // progress function ...
    //     const progress = Math.round(
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //     );
    //     this.setState({ progress });
    //   },
    //   error => {
    //     // Error function ...
    //     console.log(error);
    //   },
    //   () => {
    //     // complete function ...
    //     this.state.storage
    //       .ref("images")
    //       .child(image.name)
    //       .getDownloadURL()
    //       .then(url => {
    //         this.setState({ url });
    //       });
    //   }
    // );
  };
  render() {
    return (
      <div className="center">
          <br/>
          <h2 className="green-text">Fotoğraf Yükle</h2>
          <br/>
          <br/>
        <div className="row">
          <progress value={this.state.progress} max="100" className="progress" />
        </div>
        <br />
        <br />
        <br />
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
          Upload
        </button>
        <br />
        <br />
        <img
          src={this.state.url || "https://via.placeholder.com/400x300"}
          alt="Uploaded Images"
          height="300"
          width="400"
        />
      </div>
    );
  }
}

export default ImageUpload;