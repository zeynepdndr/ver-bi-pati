import React, { useState, useContext } from "react";
import CustomButton from "./../Shared/customButton";
import "./feeding.css";
import Map from "pigeon-maps";
import Overlay from "pigeon-overlay";
import FeedingSchedule from "../FeedingSchedule";
import AddItemButton from "../Shared/addItemButton";
import { Popover, notification, Modal } from "antd";
import { withFirebase } from "../Firebase";
import { UserContext } from "../Auth/UserContext";

const FeedingBase = props => {
  const [view, setView] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const [user] = useContext(UserContext);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [editConfirmed, setEditConfirmed] = useState(false);

  const openNotification = (title, message, type) => {
    notification[type]({
      message: title,
      description: message,
      placement: "bottomLeft"
    });
  };

  const handleModalOk = () => {
    setEditConfirmed(true);
    setShowConfirmModal(!showConfirmModal);
  };

  const handleModalCancel = () => {
    setShowConfirmModal(!showConfirmModal);
    setEditConfirmed(false);
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
            text={editMode ? "ONAYLIYORUM" : "Bende Beslemek istiyorum!"}
            style={{ width: "300px" }}
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
              if (editMode) {
                setShowConfirmModal(true);
              }
            }}
          />
          <Modal
            title="Değişiklik Onayı"
            visible={showConfirmModal}
            onOk={handleModalOk}
            onCancel={handleModalCancel}
            okText="Tamam"
            cancelText="İptal"
          >
            <p>
              Eğer yaptığınız değişiklikleri onaylarsanız, değişiklik isteğiniz
              site yöneticilerine iletilecektir. Lakin değişiklikleriniz
              onaylanana kadar yeni bir değişiklik yapamayacaksınız. Devam etmek
              istiyor musunuz?
            </p>
          </Modal>
        </div>
        <div>
          {view === 0 && (
            <FeedingSchedule editMode={editMode} confirmed={editConfirmed} />
          )}
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
