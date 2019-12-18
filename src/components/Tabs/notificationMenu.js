import React, { useState, useEffect, useContext } from "react";
import "./notificationMenu.css";
import { withFirebase } from "../Firebase";
import { Link } from "react-router-dom";
import { Select, notification as NotificationBox, Divider, Icon } from "antd";
import { UserContext } from "../Auth/UserContext";
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
      item.seen[user.data.email] = true;
      props.firebase.database
        .collection("notifications")
        .doc(item.id)
        .update({ ...item });
    }
  };

  useEffect(() => {
    setNotificationsToRender(
      <div>
        {props.notifications.map(item => (
          <div
            className="notification-item-container"
            style={{
              borderColor:
                item.seen[user.data.email] === undefined ? "#F2DA82" : "white"
            }}
            onMouseEnter={() => handleHover(item)}
          >
            <strong className="text-info">{item.title}</strong>
            <div onClick={() => deleteItem(item.id)}>
              {item.messageData}
              {user.type === "admin" && (
                <Icon
                  type="delete"
                  width="100em"
                  height="100em"
                  style={{ float: "right", fontSize: "24px" }}
                />
              )}
            </div>
            <small className="text-warning">
              {new Date(item.sendDataTime).toLocaleString("tr-TR")}
            </small>
            <Divider />
          </div>
        ))}
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
      seen: {}
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
