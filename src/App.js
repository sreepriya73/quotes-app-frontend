import logo from './logo.svg';
import './App.css';
import AddQuotes from './component/AddQuotes';
import DeleteQuotes from './component/DeleteQuotes';
import SearchQuotes from './component/SearchQuotes';
import ViewQuotes from './component/ViewQuotes';

function App() {
  return (
    <div>
     <AddQuotes/>
     <DeleteQuotes/>
     <SearchQuotes/>
     <ViewQuotes/>
    </div>
  );
}

export default App;
