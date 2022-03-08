import { Link, Outlet } from 'react-router-dom';
import {Menu} from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
const {SubMenu}=Menu;

export default function App(props) {
  const navProps = {
    style: {
      borderBottom: 'solid 1px',
      paddingBottom: '1rem'
    }
  }
 const appProps={
   style:{
     height:'100%'
   }
 }
  return (
    <div {...appProps}>
      <Menu
        style={{ width: 256,height:'100%',display:'inline-block' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <Menu.Item key="sub1" icon={<MailOutlined />}><Link to="/invoices">Invoices</Link>
        </Menu.Item>
        <Menu.Item key="sub2" icon={<AppstoreOutlined />}><Link to="/expenses">Expenses</Link>
        </Menu.Item>
        <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
      <div style={{display:'inline-block',verticalAlign:'top'}}>
      <Outlet />{/*子路由的占位*/}
      </div>
    </div>
  );
}