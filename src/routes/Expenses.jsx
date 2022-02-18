export default function Expenses(props) {
	console.log('Expenses props', props);
	const mainProps = {
		style: {
			padding: '1rem 0'
		}
	}
	return (
		<main {...mainProps}>
			<h2>Expenses</h2>
		</main>
	);
}