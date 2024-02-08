import React from 'react'

function Bookdetail({ showPopUp, selectedBook }) {
    return (
        <div className='fixed md:top-[15vh] md:right-[25vw] right-[15vw] md:w-[650px] w-[250px] h-max rounded bg-blue-100 z-10 px-10 py-6 bg-slate-200 border border-gray-300 shadow-lg hover:cursor-pointer'>
            <div className="text-right" onClick={() => showPopUp(false)}>X</div>
            <div className='md:flex justify-center md:mt-4 '>
                <div className='m-auto md:m-0 md:mr-10 w-fit'>
                    <img className="w-[140px]" src={selectedBook.imageLinks.smallThumbnail} alt="" />
                    <div className='mt-2'>
                        {selectedBook.authors.map((author, index) => (
                            <div className="w-fit md:text-base text-xs font-bold" key={index}>{author}</div>
                        ))}
                    </div>
                    <button className='bg-red-600 md:w-[140px] w-[90px] hover:bg-red-700 text-center text-white h-8 mt-3 md:text-base text-xs rounded shadow md:mb-0 mb-3' onClick={() => { alert("Out of Stock. We're sorry! 💛") }}>Read Here!</button>

                </div>
                <div>
                    <div className='text-left font-bold text-sm md:text-base md:text-xl md:uppercase md:w-60 mb-3'>{selectedBook.title}</div>
                    <p className='md:text-sm text-xs md:h-56 h-32 md:w-60 overflow-auto'>{selectedBook.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Bookdetail
