import React, { Component } from "react";

import { storage } from "../../App"

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
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progress function ...
        // const progress = Math.round(
        //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        // );
        // this.setState({ progress });
      },
      error => {
        // Error function ...
        console.log(error);
      },
      () => {
        // complete function ...
        this.state.storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ url });
            console.log(this.state);
          });
      }
    );
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