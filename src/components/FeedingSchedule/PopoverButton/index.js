import React, { useState } from "react";

import { Popover, Button, Typography } from "antd";

const { Text } = Typography;

const PopoverButton = props => {
  const [visible, setVisibility] = useState(false);

  return (
    <Popover
      content={
        <Button type="link" onClick={() => console.log(props.e)}>
          Beslenmeye Kaydol
        </Button>
      }
      title="Title"
      trigger="click"
      visible={visible}
      onVisibleChange={setVisibility}
    >
      <Button type="link" style={{ width: "100%" }} size="small">
        <Text ellipsis={true}>{props.text}</Text>
      </Button>
    </Popover>
  );
};

export default PopoverButton;
