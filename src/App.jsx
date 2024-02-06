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
        console.log(response.data.books)
        setBooks(response.data.books)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      <NavBar setSearch={setSearch} />

      <Routes>
        <Route path='/' />
        <Route path='/Register' element={<Register />} />
      </Routes>
      <div className='flex flex-wrap items-center justify-center md:p-16'>
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
            <div key={index} className='bg-slate-100 border rounded text-center md:h-[380px] md:w-[260px] md:p-10 md:h-300px] md:m-4 shadow-lg flex flex-col items-center justify-center md:p-4'>
              <img className="block"src={`${book.imageLinks.smallThumbnail}`} alt="" />
              <div className='font-bold md:mt-1.5 md:w-[130px]'>{book.title} </div>
            </div>
          ) 
        })}
      </div>
      <Footer />
    </div>
  )
}

export default App
