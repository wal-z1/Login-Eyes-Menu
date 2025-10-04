import Characters from "./components/Characters";
import LoginForm from "./components/LoginForm";

function App() {
	return (
		<>
			<div className="container grid grid-cols-2">
				<Characters />
				<LoginForm />
			</div>
		</>
	);
}

export default App;
