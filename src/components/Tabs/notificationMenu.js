import React, { useState, useEffect, useContext } from "react";
import "./notificationMenu.css";
import { withFirebase } from "../Firebase";
import { Link } from "react-router-dom";
import { Select, notification } from "antd";
import { UserContext } from "../Auth/UserContext";
const { Option } = Select;

const openNotification = (title, message, type) => {
  notification[type]({
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
    receivedUser: ""
  });
  const [notificationsToRender, setNotificationsToRender] = useState([]);
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    if (user.type === "guest") {
      props.firebase.doListenNotificationsQuery(
        {
          firstOp: "receivedUser",
          comparisonOp: "==",
          secondOp: "everyone"
        },
        getAllNotifications
      );
    } else if (user.type === "user") {
      props.firebase.doListenNotificationsQuery(
        {
          firstOp: "receivedUser",
          comparisonOp: "in",
          secondOp: ["everyone", "user"]
        },
        getAllNotifications
      );
    } else {
      props.firebase.doListenNotificationsQuery(
        {
          firstOp: "receivedUser",
          comparisonOp: "in",
          secondOp: ["everyone", "user", "admin"]
        },
        getAllNotifications
      );
    }
    return function cleanup() {
      props.firebase.doDetachNotificationsListener();
    };
    // eslint-disable-next-line
  }, [props.firebase, user.data.email, user.type]);

  const getAllNotifications = notifications => {
    let filteredNotifications = [];
    if (user.type === "guest") {
      filteredNotifications = notifications;
    } else {
      filteredNotifications = notifications.filter(item => {
        if (item.seen !== undefined) {
          if (item.seen[user.data.email] === undefined) {
            return true;
          } else {
            return false;
          }
        }
        return true;
      });
    }

    setNotificationsToRender(
      <div>
        {filteredNotifications.map(item => (
          <div className="notification-item-container">
            <strong className="text-info">A Title</strong>
            <div>{item.messageData}</div>
            <small className="text-warning">
              {new Date(item.sendDataTime).toLocaleString("tr-TR")}
            </small>
          </div>
        ))}
      </div>
    );
  };

  const handleChange = e => {
    setNotification({ [e.target.id]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { firebase } = props;
    const { messageData, recievedUser } = notification;
    const form = {
      messageData: messageData,
      sendDataTime: Date(),
      receivedUser: recievedUser
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
    firebase.removeDoc("notifications", uid);
  };

  return (
    <div className="notification-menu-main-container">
      <div>
        <li className="notification-box">
          {!showAdd ? (
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
          <Link to="/bildirimler" className="text-light">
            Hepsini Gör
          </Link>
        </li>
      </div>
    </div>
  );
};
const NotificationMenu = withFirebase(NotificationMenuBase);
export default NotificationMenu;
