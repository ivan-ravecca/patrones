import "./App.css";
import RegularSearch from "./components/regularSearch";
import DebounceSearch from "./components/debounceSearch";
import RegularResize from "./components/regularResize";
import ThrottleResize from "./components/throttleResize";
import Observer from "./components/observer";
import DBConnection from "./services/dbconnection";

function App() {
	// let conn1 = DBConnection.getInstance('conn1');
	// let conn2 = DBConnection.getInstance('conn2');
	// console.info(conn1.id, conn2.id);
	return (
		<div className="App">
			<h1 className="text-3xl font-bold underline">
				Hello world!
			</h1>
			<header>
				<RegularSearch />
				<DebounceSearch />
			</header>
			<RegularResize />
			<ThrottleResize />
			<Observer />
		</div>
	);
}

export default App;
