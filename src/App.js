import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blog from "./pages/blogs/Blog";
import SingleBlog from "./components/singleBlog/SingleBlog";
import Contact from "./pages/contact/Contact";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
