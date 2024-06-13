import logo from './logo.svg';
import './App.css';
import AddQuotes from './component/AddQuotes';
import SearchQuotes from './component/SearchQuotes';
import DeleteQuotes from './component/DeleteQuotes';
import ViewQuotes from './component/ViewQuotes';

function App() {
  return (
    <div>
     <AddQuotes/>
     <SearchQuotes/>
     <DeleteQuotes/>
     <ViewQuotes/>

    </div>
  );
}

export default App;
