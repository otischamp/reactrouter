import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import {Layout, Home, Blogs, Contact, NoPage} from "./pages" ;


function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />}  />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
