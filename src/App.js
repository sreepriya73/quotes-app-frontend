import logo from './logo.svg';
import './App.css';
import AddQuotes from './component/AddQuotes';
import DeleteQuotes from './component/DeleteQuotes';
import SearchQuotes from './component/SearchQuotes';

function App() {
  return (
    <div>
     <AddQuotes/>
     <DeleteQuotes/>
     <SearchQuotes/>
    </div>
  );
}

export default App;
