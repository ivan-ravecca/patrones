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
			<header className="App-header">
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
