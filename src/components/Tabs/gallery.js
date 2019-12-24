import React, { useEffect } from "react";
import CustomButton from "./../Shared/customButton";
import "./gallery.css";
import ModalGallery from "../Common/modalGallery";
import { withFirebase } from "../Firebase";

const GalleryBase = props => {

  const [galleryList, setGalleryLists] = React.useState([]);


  // const photos = [
  //   {
  //     src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
  //     width: 4,
  //     height: 3
  //   },
  //   {
  //     src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
  //     width: 1,
  //     height: 1
  //   },
  //   {
  //     src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
  //     width: 3,
  //     height: 4
  //   },
  //   {
  //     src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
  //     width: 3,
  //     height: 4
  //   },
  //   {
  //     src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
  //     width: 3,
  //     height: 4
  //   },
  //   {
  //     src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
  //     width: 4,
  //     height: 3
  //   },
  //   {
  //     src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
  //     width: 3,
  //     height: 4
  //   },
  //   {
  //     src: "https://source.unsplash.com/PpOHJezOalU/800x599",
  //     width: 4,
  //     height: 3
  //   },
  //   {
  //     src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
  //     width: 4,
  //     height: 3
  //   },
  //   {
  //     src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
  //     width: 3,
  //     height: 4
  //   },
  //   {
  //     src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
  //     width: 4,
  //     height: 3
  //   },
  //   {
  //     src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
  //     width: 4,
  //     height: 3
  //   },
  //   {
  //     src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
  //     width: 4,
  //     height: 3
  //   },
  //   {
  //     src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
  //     width: 4,
  //     height: 3
  //   },
  //   {
  //     src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
  //     width: 4,
  //     height: 3
  //   },
  //   {
  //     src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
  //     width: 4,
  //     height: 3
  //   }
  // ];
  useEffect(() => {
    const { firebase } = props;
    

    var gallery = [];

    firebase.database
      .collection("gallery")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          gallery.push(doc.data());
        });
      });
  }, [props]);

  useEffect(() => {
    const { firebase } = props;
    

    var dataArray = [];

    firebase.database
      .collection("gallery")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          dataArray.push(doc)
        })
      }).then(() => {
        const renderItems  = dataArray.map(item => (
        //   <div className="card" key={item.id}>
        //     <div className="card-header" id="headingOne" >
        //       <h5 className="mb-0">
        //       <div className="row">
        //         <div className="col-9 col-md-9">
        //           <button className="btn collapseACT" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        //           {item.data().title}
        //           </button>
        //         </div>
        //         <div className="col-1 col-md-1"></div>
        //         <div className="col-1 col-md-1">
        //           <span onClick={()=>{this.updateItem(item.id)}}><i className="fa fa-edit fa-lg" id= "trashAlign" title="DÜZENLE"></i></span>
        //         </div>
        //         <div className="col-1 col-md-1">
        //           <span  onClick={()=>{this.deleteItem(item.id)}}><i className="fa fa-trash fa-lg" id="editAlign" title="SİL"></i></span>
        //         </div>
        //       </div>
        //       </h5>
        //     </div>
        //     <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"data-parent="#accordion">
        //       <div className="card-body"> 
        //       { item.data().capacity !=="" ? (
        //         <div>
        //           <i>Katılımcı Sayısı: {item.data().capacity}</i><br></br>
        //         </div>
        //       ) : null}
        //        {item.data().description}
        //       </div>
        //     </div>
        //   </div>

        <div className="mb-3 pics animation all 1" key={item.id}>
          <img
            className="img-fluid"
            id="image1"
            src={require("./../Res/images/gallery/ares.jpg")}
            alt="Card image cap"
          />
          <div className="contentGallery">
            <h3>{item.data().title}</h3>
            <p>
              {item.data().description}
            </p>
          </div>
        </div>

        ))
        setGalleryLists(renderItems)  
      })

  },[]);

  return (
    <div>
      <div className="centeredButton">
        <CustomButton label="Kampüs Hayvanlarımız"></CustomButton>
        <CustomButton label="Faaliyetlerimiz"></CustomButton>
      </div>
      <div className="container-fluid">
        <div>
          <ModalGallery></ModalGallery>
        </div>
      </div>
      <div className="gallery container-fluid" id="gallery">
        <div className="justify-content-center">
          {galleryList}
        </div>
      </div>

    </div>
  );
};
const Gallery = withFirebase(GalleryBase);
export default Gallery;
