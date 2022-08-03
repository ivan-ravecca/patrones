import logo from './logo.svg';
import './App.css';
import RegularSearch from './components/regularSearch';
import DebounceSearch from './components/debounceSearch';
import RegularResize from './components/regularResize';
import DebounceResize from './components/debounceResize';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<RegularSearch />
				<DebounceSearch/>
			</header>
			<RegularResize/>
			<DebounceResize/>
		</div>
	);
}

export default App;
