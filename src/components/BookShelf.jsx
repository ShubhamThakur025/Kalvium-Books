import { useEffect, useState } from 'react'
import star from '../assets/star.png'
import Bookdetail from './Bookdetail'

function BookShelf({ books, searchQuery }) {
    //to show popup, track the selected Book and for search results
    const [popup, showPopUp] = useState(false)
    const [selectedBook, changeBook] = useState({})
    const [status, foundResults] = useState(false)

    const handlePopUp = (book) => {
        showPopUp(true)
        changeBook(book)
    }

    //to filter the books
    let filteredBooks = books.filter((book) => {
        if (searchQuery === '') {
            return book
        }
        else if (book.title.toLowerCase().includes(searchQuery.toLowerCase())) {
            return book
        }
    })

    //to show 'No results' in case of zero results
    useEffect(() => {
        if (filteredBooks.length < 1 && books.length > 0) {
            foundResults(true)
        }
        else{
            foundResults(false)
        }
    }, [filteredBooks])


    return (
        <>
            {popup ? <Bookdetail showPopUp={showPopUp} selectedBook={selectedBook} /> : null}
            <div className='flex flex-wrap items-center justify-center p-16'>
                {filteredBooks.map((book, index) => {
                    return (
                        <div key={index} onClick={() => handlePopUp(book)}
                            className='relative bg-slate-100 hover:bg-slate-200 border rounded md:h-[380px] md:w-[260px] md:p-10 p-8 w-[180px] h-[300px] m-4 shadow-lg flex flex-col items-center justify-center md:p-4 cursor-pointer hover:scale-105 md:text-base text-sm'>
                            <img className="block" src={`${book.imageLinks.smallThumbnail}`} alt="" />
                            <div className='font-bold md:mt-1.5 md:w-[130px]'>{book.title} </div>
                            <div className='flex items-center justify-between md:w-[130px] absolute md:bottom-5 bottom-1.5'>
                                <span><img src={star} alt="rating" className='w-4' /></span>
                                <span className='text-slate-600 md:text-base text-sm'>{book.averageRating ? book.averageRating : 4.3} Rated</span>
                                <span className='font-semibold text-green-600 md:ml-0 ml-3'>free</span>
                            </div>
                        </div>
                    )
                })}
            </div>

            {
                status ? <div className='text-4xl text-bold mb-[45vh] text-center'>No Search <span className='text-red-600'>Results</span></div>
                    : null
            }
        </>
    )
}

export default BookShelf
