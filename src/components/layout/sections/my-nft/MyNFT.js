import { Link } from 'react-router-dom'
import './MyNFT.css'

const MyNFT = () => {
  return (
    <div className="container-fluid">
        <Link to="/"><i className="fas fa-arrow-left"></i></Link>

        <div className="container d-flex justify-content-center align-items-center">
            <h1>My NFT</h1>
        </div>

    </div>
  )
}

export default MyNFT
