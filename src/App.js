import "./App.css";
import Input from "./components/input";

function App() {
	return (
		<div className="App">
			<Input
				render={({ value, inputChangeHandler }) => (
					<>
						<label>Name:</label>
						<input
							type="text"
							placeholder="please enter name"
							value={value}
							onChange={inputChangeHandler}
						/>
						<p>{value}</p>
					</>
				)}
			/>
			<br />
			<Input
				render={({ value, inputChangeHandler }) => (
					<>
						<label>Family:</label>
						<input
							type="text"
							placeholder="please enter family"
							value={value}
							onChange={inputChangeHandler}
						/>
						<p>{value}</p>
					</>
				)}
			/>
		</div>
	);
}

export default App;
