import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="w-screen text-center min-m-screen bg-black text-white p-5">
      <div>Designed and Developed by: <a className="underline hover:text-gray-400 mr-[40px]" target="_blank" href="https://github.com/ShubhamThakur025">Shubham Thakur</a></div>
      <div>API support by: <a className="underline hover:text-gray-400 mt-2"target="_blank" href="https://reactnd-books-api.udacity.com/">ReactNd-books-udacity</a></div>
    </div>
  )
}

export default Footer
