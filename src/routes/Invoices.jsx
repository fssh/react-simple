import invoices from '../data/invoices';
import { NavLink, Outlet, useSearchParams, useLocation } from "react-router-dom";
export default function Invoices(props) {
	console.log('Invoices props', props);
	const [searchParams, setSearchParams] = useSearchParams();
	const QueryNavLink = ({ to, ...props }) => {
		let location = useLocation();//用useLocation获取当前url信息，格式如下
		// {
		//   pathame: "/invoices",
		//   search: "?filter=sa",
		//   hash: "",
		//   state: null,
		//   key: "ae4cz2j"
		// }
		return <NavLink to={to + location.search} {...props} />;//自定义一个Link，可以保持searchParams不变
	}

	return (
		<div style={{ display: "flex" }}>
			<nav
				style={{
					borderRight: "solid 1px",
					padding: "1rem"
				}}
			>
				{/*	url搜索参数
搜索参数就类似于url参数，但是他们在url中所处的位置不同。
不是由/分隔，他们出现在一个?之后，类似于这样的形式 "/login?success=1"or"/shoes?brand=nike&sort=asc&sortby=price
react router 提供了 useSearchParams 用于读取和操作搜索参数。它有点像useState，不同点是useState是操作内存中的数据，
而他是设置url 搜索参数中的state*/}
				<input
					value={searchParams.get("filter") || ""}
					onChange={event => {
						let filter = event.target.value;
						if (filter) {
							setSearchParams({ filter });
						} else {
							setSearchParams({});
						}
					}}
				/>
				{invoices
					.filter(invoice => {
						let filter = searchParams.get("filter");
						if (!filter) return true;
						let name = invoice.name.toLowerCase();
						return name.startsWith(filter.toLowerCase());
					})
					.map(invoice => {
						{/*NavLink比Link强点儿，用NavLink可以在style和className里拿到isActive，这样可以改样式*/ }
						return (
							<QueryNavLink
								style={({ isActive }) => {
									return {
										display: "block",
										margin: "1rem 0",
										color: isActive ? "red" : ""
									};
								}}
								to={`/invoices/${invoice.number}`}
								key={invoice.number}
							>
								{invoice.name}
							</QueryNavLink>
						);
					}
					)}
			</nav>
			<Outlet />
		</div>
	);
}