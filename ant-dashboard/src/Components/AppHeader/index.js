import { MailOutlined, BellFilled } from "@ant-design/icons";
import { Image, Typography, Space, Badge, Drawer, List } from "antd";
import { useEffect, useState } from "react";
import { getComments, getOrders } from "../../Api";
// import {}
const AppHeader = () => {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  useEffect(() => {
    getComments().then((res) => setComments(res.comments));
    getOrders().then((res) => setOrders(res.products));
  }, []);

  return (
    <div className="AppHeader">
      <Image
        width={40}
        src="https://1.bp.blogspot.com/-zaoiLHspoKI/XeI_0uFAeCI/AAAAAAAAF38/CyHgdY8bdOQ7d979yOJ0voSIA8b5bAF2wCLcBGAsYHQ/s1600/Youtube-Icon-2000x2000.png"
      ></Image>
      <Typography.Title>Harshal's Dashboard</Typography.Title>
      <Space>
        <Badge count={comments.length} dot>
          <MailOutlined
            style={{ fontSize: 24 }}
            onClick={() => {
              setCommentsOpen(true);
            }}
          />
        </Badge>
        <Badge count={orders.length}>
          <BellFilled
            style={{ fontSize: 24 }}
            onClick={() => setNotificationsOpen(true)}
          />
        </Badge>
      </Space>
      <Drawer
        title="Comments"
        open={commentsOpen}
        onClose={() => setCommentsOpen(false)}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List>
      </Drawer>
      <Drawer
        title="Notifications"
        open={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
        maskClosable
      >
        <List
          dataSource={orders}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text strong>{item.title}</Typography.Text> has been
                ordered!
              </List.Item>
            );
          }}
        ></List>
      </Drawer>
    </div>
  );
};

export default AppHeader;
