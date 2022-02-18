import { Link, Outlet } from 'react-router-dom';
export default function App(props) {
  const navProps = {
    style: {
      borderBottom: 'solid 1px',
      paddingBottom: '1rem'
    }
  }

  return (
    <div>
      <h1>路由测试</h1>
      <nav {...navProps}>
        <Link to="/invoices">Invoices</Link>&nbsp;|&nbsp;
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />{/*子路由的占位*/}
    </div>
  );
}