import { Link } from "react-router-dom"
import kalviLogo from '../assets/Kalvium-Logo-SVG.svg'
import search from '../assets/search.png'
import BookShelf from "./BookShelf"
import { useState } from "react"

function NavBar({ setSearch }) {
    //to handle searchQuery and search bar visibility respectively
    const [state, setState] = useState("")
    const [page, changePage] = useState(true)

    //to handle the changes made in the search Bar
    const handleChange = (event) => {
        setState(event.target.value)
    }

    return (
        <div className="md:flex h-16 p-8 pt-10 mt-3.5s  items-center justify-between">
            <Link to="/" onClick={() => changePage(true)}>
                <div className="flex max-w-fit md:items-center m-auto md:m-0">
                    <img className="w-24 lg:w-40 mr-2 " src={kalviLogo} alt="kalvium-logo" />

                    <p className="text-slate-400 md:mt-1.5 md:text-lg text-base font-semibold">Books</p>

                </div>
            </Link>
            <div className="flex items-center justify-between md:m-0 mt-6">
                {/* Search Bar goes here: */}
                {page ?
                    <div className="flex justify-center items-center md:mr-10">
                        <input type="text" onChange={handleChange} value={state}
                            className="bg-slate-200 lg:w-[50vw] w-30vw md:h-10 h-2 rounded p-3.5 md:font-base md:text-base text-[12px] shadow-sm"
                            placeholder="Search Books here" />
                        <img onClick={() => setSearch(state)} className="w-6 md:w-8 mr-2 m-2 cursor-pointer" src={search} alt="search-btn" />
                    </div>
                    : null}
                <div>
                    {page ? <Link to="/Register" onClick={() => changePage(false)}>
                        <button
                            className="bg-red-500 text-white md:px-4 md:py-2 px-2 py-1 shadow-lg rounded md:text-base text-[12px]">
                            Register
                        </button>
                    </Link> : null}
                </div>
            </div>
        </div>
    )
}

export default NavBar
