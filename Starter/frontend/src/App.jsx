import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header.jsx'
import LandingPage from './pages/LandingPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import HomePage from './pages/HomePage.jsx'
import PostPage from './pages/PostPage.jsx'
import NewPostPage from './pages/NewPostPage.jsx'
import EditPostPage from './pages/EditPostPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

// TODO (student): Complete and verify the route map.
// Suggested milestone order:
// 1) Keep basic pages working: /, /about, /contact
// 2) Add blog listing route: /blog
// 3) Add CRUD routes: /posts/new, /posts/:id, /posts/:id/edit
// 4) Keep '*' as a fallback not found route

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Routes>
          {/* TODO (student): Confirm each route points to the expected page component. */}
          <Route path="/"               element={<LandingPage />} />
          <Route path="/about"          element={<AboutPage />} />
          <Route path="/contact"        element={<ContactPage />} />
          <Route path="/blog"           element={<HomePage />} />
          <Route path="/posts/new"      element={<NewPostPage />} />
          <Route path="/posts/:id"      element={<PostPage />} />
          <Route path="/posts/:id/edit" element={<EditPostPage />} />
          <Route path="*"               element={<NotFoundPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
