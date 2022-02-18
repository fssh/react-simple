import { useParams, useNavigate } from 'react-router-dom';
import invoices,{deleteInvoice} from '../data/invoices';

export default function Invoice() {
	const params = useParams();
	const invoice = invoices.find(invoice => invoice.number === parseInt(params.invoiceId, 10));
	const navigate = useNavigate();
	return (
		<main style={{ padding: "1rem" }}>
			<h2>Total Due: {invoice.amount}</h2>
			<p>
				{invoice.name}: {invoice.number}
			</p>
			<p>Due Date: {invoice.due}</p>
			<p>
				<button
					onClick={() => {
						deleteInvoice(invoice.number);
						navigate("/invoices");//编程式导行,支持js路由跳转
					}}
				>
					Delete
				</button>
			</p>
		</main>
	);
}