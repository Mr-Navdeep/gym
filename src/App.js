import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home,About,Login,Gallery,Services,Contact,Blog, Register } from './pages';
import { SingleBlog,Navigation,Footer } from './components';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
      <Routes>        
        <Route >
          <Route path="/"  index element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="gallery" element={<Gallery/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="services" element={<Services/>} />
          <Route path="blog" element={<Blog/>} />
          <Route path="blogs/:id" element={<SingleBlog/>} />
          <Route path="register" element={<Register/>} />
          <Route path="login" element={<Login/>} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    
    </div>
  );
}

export default App;
