import React, { useState, useEffect, useContext } from "react";
import "./notificationMenu.css";
import { withFirebase } from "../Firebase";
import { Link } from "react-router-dom";
import { Select, notification as NotificationBox, Divider, Icon } from "antd";
import { UserContext } from "../Auth/UserContext";
import { Button } from "reactstrap";
const { Option } = Select;

const openNotification = (title, message, type) => {
  NotificationBox[type]({
    message: title,
    description: message,
    placement: "bottomLeft"
  });
};

const NotificationMenuBase = props => {
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [notification, setNotification] = useState({
    messageData: "",
    sendDataTime: "",
    receivedUser: "",
    title: ""
  });
  const [notificationsToRender, setNotificationsToRender] = useState([]);
  const [user, setUser] = useContext(UserContext);

  const handleHover = item => {
    if (user.data.email !== undefined) {
      console.log(user.data.email);
      console.log(item);
      item.seen[user.data.email] = true;
      console.log(item);
      props.firebase.database
        .collection("notifications")
        .doc(item.id)
        .update({ ...item });
    }
  };

  const handleAccept = notifObj => {
    let feedingTable = {};
    let { data, id } = notifObj;
    props.firebase.database
      .collection("feeding")
      .doc("1")
      .get()
      .then(snapshot => {
        feedingTable = { ...snapshot.data() };
        data.forEach(item => {
          const { row, column, type } = item;
          if (type === "add") {
            if (feedingTable.rowData[row][column].length > 1) {
              if (
                feedingTable.rowData[row][column][0]["name"] === notifObj.user
              ) {
                feedingTable.rowData[row][column][0]["appState"] = true;
              } else {
                feedingTable.rowData[row][column][1]["appState"] = true;
              }
            } else {
              feedingTable.rowData[row][column][0]["appState"] = true;
            }
          }
        });
        props.firebase.database
          .collection("feeding")
          .doc("1")
          .set(feedingTable);
        props.firebase.database
          .collection("notifications")
          .doc(id)
          .delete();
        props.firebase.database
          .collection("users")
          .doc(notifObj.userid)
          .set({ feedingTableLock: false }, { merge: true });
      });
  };
  const handleReject = notifObj => {
    let feedingTable = {};
    let { data, id } = notifObj;
    props.firebase.database
      .collection("feeding")
      .doc("1")
      .get()
      .then(snapshot => {
        feedingTable = { ...snapshot.data() };
        data.forEach(item => {
          const { row, column, type } = item;
          if (type === "add") {
            if (feedingTable.rowData[row][column].length > 1) {
              if (
                feedingTable.rowData[row][column][0]["name"] === notifObj.user
              ) {
                feedingTable.rowData[row][column].splice(0, 1);
              } else {
                delete feedingTable.rowData[row][column].splice(1, 1);
              }
            } else {
              delete feedingTable.rowData[row][column];
            }
          }
        });
        props.firebase.database
          .collection("feeding")
          .doc("1")
          .set(feedingTable);
        props.firebase.database
          .collection("notifications")
          .doc(id)
          .delete();
      });
  };

  useEffect(() => {
    setNotificationsToRender(
      <div>
        {props.notifications.map(item => {
          if (item.type !== "feeding") {
            return (
              <div
                className="notification-item-container"
                style={{
                  borderColor:
                    item.seen[user.data.email] === undefined
                      ? "#F2DA82"
                      : "white"
                }}
                onMouseEnter={() => handleHover(item)}
              >
                <strong className="text-info">{item.title}</strong>
                {user.type === "admin" && (
                  <div onClick={() => deleteItem(item.id)}>
                    {item.messageData}

                    <Icon
                      type="delete"
                      width="100em"
                      height="100em"
                      style={{ float: "right", fontSize: "24px" }}
                    />
                  </div>
                )}
                <small className="text-warning">
                  {new Date(item.sendDataTime).toLocaleString("tr-TR")}
                </small>
                <Divider />
              </div>
            );
          } else {
            return (
              <div
                className="notification-item-container"
                style={{
                  borderColor:
                    item.seen[user.data.email] === undefined
                      ? "#F2DA82"
                      : "white"
                }}
              >
                <strong className="text-info">{item.title}</strong>
                <div>{item.message}</div>
                <div
                  className="notification-menu-accept-reject-buttons"
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    margin: "20px 0px",
                    padding: "0px 50px"
                  }}
                >
                  <Button
                    outline
                    color="success"
                    onClick={() => handleAccept(item)}
                  >
                    Kabul Et
                  </Button>{" "}
                  <Button
                    outline
                    color="danger"
                    onClick={() => handleReject(item)}
                  >
                    Reddet
                  </Button>
                </div>
                <small className="text-warning">
                  {new Date(item.sendDataTime).toLocaleString("tr-TR")}
                </small>
                <Divider />
              </div>
            );
          }
        })}
      </div>
    );
    // eslint-disable-next-line
  }, [user.data.email, props.notifications]);

  const handleChange = e => {
    setNotification({ ...notification, [e.target.id]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { firebase } = props;
    const { messageData, recievedUser, title } = notification;
    console.log(notification.title);
    const form = {
      title: title,
      messageData: messageData,
      sendDataTime: Date(),
      receivedUser: recievedUser,
      seen: {},
      type: "notification"
    };
    setShowAdd(false);
    setNotification();
    console.log("form", form);
    firebase.doAddDoc("notifications", form);
    openNotification(
      "İşlem Başarılı",
      "Duyurunuz sisteme başarıyla eklenmiştir.",
      "success"
    );
  };

  const deleteItem = uid => {
    const { firebase } = props;
    firebase.removeProvider("notifications", uid);
  };

  return (
    <div className="notification-menu-main-container">
      <div>
        <li className="notification-box">
          {!showAdd && user.type === "admin" ? (
            <div className="row" onClick={() => setShowAdd(true)}>
              <i
                className="fa fa-plus-circle fa-lg"
                id="withoutButton"
                title="EKLE"
              ></i>
            </div>
          ) : null}
          {showAdd ? (
            <form onSubmit={handleSubmit} id="notificationForm">
              <div
                onClick={() => setShowAdd(false)}
                style={{ float: "right", marginBottom: "9px" }}
              >
                <i class="fa fa-times"></i>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  name="title"
                  id="title"
                  type="text"
                  placeholder="Başlık"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="messageData"
                  id="messageData"
                  type="text"
                  placeholder="Mesajınızı yazınız"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="form-group">
                <Select
                  showSearch
                  style={{ width: "100%" }}
                  placeholder="Gönderilecek kişiler"
                  onChange={recievedUser =>
                    setNotification({ ...notification, recievedUser })
                  }
                >
                  <Option value="everyone">Herkes</Option>
                  <Option value="user">Üyeler</Option>
                </Select>
              </div>
              <button
                id="btnLogin"
                type="submit"
                className="btn btn-success btn-sm bg-dark"
              >
                Ekle
              </button>
            </form>
          ) : null}{" "}
        </li>
        {notificationsToRender}
        <br></br>
        <br></br>
        <li className="footer viewAll text-center">
          <Link
            to={{
              pathname: "/bildirimler",
              state: { notifications: props.notifications }
            }}
            className="text-light"
          >
            Hepsini Gör
          </Link>
        </li>
      </div>
    </div>
  );
};
const NotificationMenu = withFirebase(NotificationMenuBase);
export default NotificationMenu;
