import React, { useState, useContext } from "react";
import CustomButton from "./../Shared/customButton";
import "./feeding.css";
import Map from "pigeon-maps";
import Overlay from "pigeon-overlay";
import FeedingSchedule from "../FeedingSchedule";
import AddItemButton from "../Shared/addItemButton";
import { Popover, notification } from "antd";
import { withFirebase } from "../Firebase";
import { UserContext } from "../Auth/UserContext";

const FeedingBase = props => {
  const [view, setView] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const [user] = useContext(UserContext);

  const openNotification = (title, message, type) => {
    notification[type]({
      message: title,
      description: message,
      placement: "bottomLeft"
    });
  };

  return (
    <div>
      <div className="centeredButton">
        <CustomButton label="Besleme Planı" onClick={() => setView(0)} />
        <CustomButton label="Harita" onClick={() => setView(1)} />
      </div>
      <div className="container-fluid">
        <div className="buttonAlign">
          <AddItemButton
            //FIXME: Implement this in a proper way!
            addActivity={() => {
              props.firebase.database
                .collection("users")
                .where("email", "==", user.data.email)
                .get()
                .then(snapshot => {
                  snapshot.forEach(doc => {
                    if (!doc.data().feedingTableLock) {
                      setEditMode(!editMode);
                    } else {
                      openNotification(
                        "Bu işlemi gerçekleştiremezsiniz!",
                        "Görünüşe göre bir önceki değişikliğiniz henüz yöneticiler tarafından onaylanmamıştır. Lütfen işleminiz onaylandıktan sonra tekrar deneyiniz.",
                        "error"
                      );
                    }
                  });
                });
            }}
          />
        </div>
        <div>
          {view === 0 && <FeedingSchedule editMode={editMode} />}
          {view === 1 && (
            <div>
              <Map
                center={[41.1044, 29.0273]}
                zoom={15.5}
                width={800}
                height={400}
              >
                <Overlay anchor={[41.107968, 29.022134]}>
                  <Popover title="ARI KAPI-SDKM (4 köpek)">
                    <div>
                      <i class="fa-li fa fa-paw" />2
                    </div>
                  </Popover>
                </Overlay>
              </Map>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
const Feeding = withFirebase(FeedingBase);
export default Feeding;
