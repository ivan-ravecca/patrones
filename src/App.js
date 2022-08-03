import logo from './logo.svg';
import './App.css';
import RegularSearch from './components/regularSearch';
import DebounceSearch from './components/debounceSearch';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<RegularSearch />
				<DebounceSearch/>
			</header>
		</div>
	);
}

export default App;
