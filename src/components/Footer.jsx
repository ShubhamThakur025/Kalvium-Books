import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="w-screen text-center min-m-screen bg-black text-white p-5">
      <div>Designed and Developed by: <a className="underline hover:text-gray-400 mr-[40px]" href="">Shubham Thakur</a></div>
      <div>API support by: <a className="underline hover:text-gray-400 mt-2" href="#">The API</a></div>
    </div>
  )
}

export default Footer
