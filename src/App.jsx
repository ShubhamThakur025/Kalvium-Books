import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Routes, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar'
import Register from './components/Register'
import Footer from './components/Footer'

function App() {
  const [books, setBooks] = useState([])
  const [searchQuery, setSearch] = useState("")

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", { headers: { "Authorization": 'whatever-you-want' } })
      .then((response) => {
        setBooks(response.data.books)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      <NavBar setSearch={setSearch}/>

      <Routes>
        <Route path='/' />
        <Route path='/Register' element={<Register />} />
      </Routes>

      {books.filter((book) => {
        if (searchQuery === '') {
          return book
        }
        else if (book.title.toLowerCase().includes(searchQuery.toLowerCase())) {
          return book
        }
      }).map((book, index) => {
        console.log(book)
        return (
          <div key={index} className='book-card'>
            <div className='w-30'><img src={`${book.imageLinks.smallThumbnail}`} alt="" /></div>
            <div className='title'>{book.title} </div>
          </div>
        )
      })}
      <Footer />
    </div>
  )
}

export default App
