import React, { useState, useContext, useEffect } from "react";

import "./notification.css";

const Notification = props => {
  const [renderNotif, setRenderNotif] = useState();
  useEffect(() => {
    const { notifications } = props.location.state;
    setRenderNotif(
      notifications.map(item => (
        <div className="notify successbox" key={item.id}>
          {item.type === "notification" && (
            <h1>
              {item.title}
              <span aria-label="a rocket blasting off" role="img">
              ⚡
              </span>
            </h1>
          )}
          {item.type === "activity" && (
            <h1>
              {item.title}
              <span aria-label="a rocket blasting off" role="img">
                🚀
              </span>
            </h1>
          )}
          {item.type === "announcement" && (
            <h1>
              {item.title}
              <span aria-label="acrying cat" role="img">
                😿
              </span>
            </h1>
          )}
          {item.type === "adoptation" && (
            <h1>
              {item.title}
              <span aria-label="wedding" role="img">
                💒
              </span>
            </h1>
          )}
          {item.type === "gallery" && (
            <h1>
              {item.title}
              <span aria-label="face with monocle" role="img">
                🧐
              </span>
            </h1>
          )}
          <p>{item.messageData}</p>
        </div>
      ))
    );
  }, [props.location.state]);
  return (
    <div id="w">
      <div id="content">{renderNotif}</div>
    </div>
  );
};

export default Notification;
