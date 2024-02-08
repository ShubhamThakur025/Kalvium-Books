import React from 'react'

function Bookdetail({ showPopUp, selectedBook }) {
    return (
        <div className='fixed md:top-[15vh] md:right-[25vw] w-[650px] h-max rounded bg-blue-100 z-10 px-10 py-6 bg-slate-200 border border-gray-300 shadow-lg hover:cursor-pointer'>
            <div className="text-right" onClick={() => showPopUp(false)}>X</div>
            <div className='flex justify-center mt-4'>
                <div className='mr-10'>
                    <img className="w-[140px]" src={selectedBook.imageLinks.smallThumbnail} alt="" />
                    <div className='mt-2'>
                        {selectedBook.authors.map((author, index) => (
                            <div className="w-fit font-bold" key={index}>{author}</div>
                        ))}
                    </div>
                    <button className='bg-red-600 w-[140px] hover:bg-red-700 text-center text-white h-8 mt-3 rounded shadow' onClick={() => { alert("Out of Stock. We're sorry! 💛") }}>Read Here!</button>

                </div>
                <div>
                    <div className='text-left font-bold text-xl uppercase w-60 mb-3'>{selectedBook.title}</div>
                    <p className='text-sm md:h-56 md:w-60 overflow-auto'>{selectedBook.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Bookdetail
