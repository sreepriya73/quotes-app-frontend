import logo from './logo.svg';
import './App.css';
import AddQuotes from './component/AddQuotes';
import DeleteQuotes from './component/DeleteQuotes';
import SearchQuotes from './component/SearchQuotes';
import ViewQuotes from './component/ViewQuotes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddQuotes/>}/>
      <Route path='/search' element={<SearchQuotes/>}/>
      <Route path='/delete' element={<DeleteQuotes/>}/>
      <Route path='/view' element={<ViewQuotes/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
