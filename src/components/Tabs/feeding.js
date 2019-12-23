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
  const [feedingMode, setFeedingMode] = useState(false);
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
          {!feedingMode && view === 0 && (
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
          )}
          {!editMode && view === 0 && (
            <AddItemButton
              text={feedingMode ? "ONAYLIYORUM" : "Besleme Yaptım"}
              style={{ width: "200px" }}
              addActivity={() => {
                setFeedingMode(!feedingMode);
              }}
            />
          )}

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
            <FeedingSchedule
              editMode={editMode}
              confirmed={editConfirmed}
              feedingMode={feedingMode}
            />
          )}
          {view === 1 && (
            <div>
              <Map
                center={[41.1044, 29.0273]}
                zoom={15.2}
                width={800}
                height={400}
              >
                <Overlay anchor={[41.106984, 29.02431]}>
                  <Popover title="KSB-FEB ARKA BAH. (kedi)">
                    <div>
                      <i class="fa-li fa fa-paw" />1
                    </div>
                  </Popover>
                </Overlay>
                <Overlay anchor={[41.107968, 29.022134]}>
                  <Popover title="ARI KAPI-SDKM (4 köpek)">
                    <div>
                      <i class="fa-li fa fa-paw" />2
                    </div>
                  </Popover>
                </Overlay>
                <Overlay anchor={[41.105731, 29.020049]}>
                  <Popover title="ŞOK (4 köpek)">
                    <div>
                      <i class="fa-li fa fa-paw" />3
                    </div>
                  </Popover>
                </Overlay>
                <Overlay anchor={[41.104365, 29.019813]}>
                  <Popover title="İNŞAAT-FANFAN (4 köpek)">
                    <div>
                      <i class="fa-li fa fa-paw" />4
                    </div>
                  </Popover>
                </Overlay>
                <Overlay anchor={[41.103937, 29.021733]}>
                  <Popover title="YEMEKHANE-KÜTÜPHANE (2 köpek)">
                    <div>
                      <i class="fa-li fa fa-paw" />5
                    </div>
                  </Popover>
                </Overlay>
                <Overlay anchor={[41.104656, 29.021497]}>
                  <Popover title="SELFİŞ (3 kedi)">
                    <div>
                      <i class="fa-li fa fa-paw" />6
                    </div>
                  </Popover>
                </Overlay>
                <Overlay anchor={[41.10219, 29.021915]}>
                  <Popover title="DOLUNAY (kedi)">
                    <div>
                      <i class="fa-li fa fa-paw" />7
                    </div>
                  </Popover>
                </Overlay>
                <Overlay anchor={[41.101972, 29.022355]}>
                  <Popover title="STADYUM (kedi)">
                    <div>
                      <i class="fa-li fa fa-paw" />8
                    </div>
                  </Popover>
                </Overlay>
                <Overlay anchor={[41.102497, 29.018707]}>
                  <Popover title="KIZ YURTLARI (6 köpek)">
                    <div>
                      <i class="fa-li fa fa-paw" />9
                    </div>
                  </Popover>
                </Overlay>
                <Overlay anchor={[41.103128, 29.023267]}>
                  <Popover title="SİMİT (3 köpek) -MİGROS (3 kedi)">
                    <div>
                      <i class="fa-li fa fa-paw" />
                      10
                    </div>
                  </Popover>
                </Overlay>
                <Overlay anchor={[41.105262, 29.024018]}>
                  <Popover title="MED (3 köpek)">
                    <div>
                      <i class="fa-li fa fa-paw" />
                      11
                    </div>
                  </Popover>
                </Overlay>
                <Overlay anchor={[41.104171, 29.025155]}>
                  <Popover title="EEB ARKA KANTİN (2 köpek, 2 kedi)">
                    <div>
                      <i class="fa-li fa fa-paw" />
                      12
                    </div>
                  </Popover>
                </Overlay>
                <Overlay anchor={[41.104996, 29.025777]}>
                  <Popover title="KİMYA - MADEN - ARI MOLA">
                    <div>
                      <i class="fa-li fa fa-paw" />
                      13
                    </div>
                  </Popover>
                </Overlay>
                <Overlay anchor={[41.103379, 29.027343]}>
                  <Popover title="GEMİ İNŞ.(köpek) KARŞISINDAKİ OTOPARK(kedi)">
                    <div>
                      <i class="fa-li fa fa-paw" />
                      14
                    </div>
                  </Popover>
                </Overlay>
                <Overlay anchor={[41.103217, 29.028287]}>
                  <Popover title="BİG SLİCE (3 köpek)">
                    <div>
                      <i class="fa-li fa fa-paw" />
                      15
                    </div>
                  </Popover>
                </Overlay>
                <Overlay anchor={[41.102053, 29.028351]}>
                  <Popover title="GÖLET (KEDİ VE KÖPEK)">
                    <div>
                      <i class="fa-li fa fa-paw" />
                      16
                    </div>
                  </Popover>
                </Overlay>
                <Overlay anchor={[41.108081, 29.032646]}>
                  <Popover title="ARI-3 (ve karşısındaki yurt) (3 köpek)">
                    <div>
                      <i class="fa-li fa fa-paw" />
                      17
                    </div>
                  </Popover>
                </Overlay>
                <Overlay anchor={[41.106747, 29.030007]}>
                  <Popover title="İTÜ CAMİ">
                    <div>
                      <i class="fa-li fa fa-paw" />
                      18
                    </div>
                  </Popover>
                </Overlay>
                <Overlay anchor={[41.10965, 29.035824]}>
                  <Popover title="VADİ">
                    <div>
                      <i class="fa-li fa fa-paw" />
                      19
                    </div>
                  </Popover>
                </Overlay>
                <Overlay anchor={[41.099421, 29.026913]}>
                  <Popover title="ETİLER ÇIKIŞI (15 köpek)">
                    <div>
                      <i class="fa-li fa fa-paw" />
                      20
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
