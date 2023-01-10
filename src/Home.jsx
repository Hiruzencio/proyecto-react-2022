import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">Welcome to Hiruzen's Market!</h1>
      <p className="subtitle">Discover the 100 most used cryptocurrencies</p>
      <Link className="" to="/cryptocurrencies">Show cryptocurrencies</Link>
    </div>
  )
}

export default Home