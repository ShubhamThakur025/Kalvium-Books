import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Register from './components/Register'
import Footer from './components/Footer'
import BookShelf from './components/BookShelf'

function App() {
  const [books, setBooks] = useState([])
  const [searchQuery, setSearch] = useState("")

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", { headers: { "Authorization": 'whatever-you-want' } })
      .then((response) => {
        console.log(response.data.books)
        setBooks(response.data.books)
      })
      .catch((error) => alert("Could Not Found the Data. Try Again Later"))
  }, [])

  return (
    <div>
      <NavBar setSearch={setSearch} />
      <Routes>
        <Route path='/' element={<BookShelf books={books} searchQuery={searchQuery} />} />
        <Route path='/Register' element={<Register />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
