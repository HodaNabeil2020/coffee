import { Link } from "react-router-dom"



function Logo() {
  return (
    <Link
          to={'/'}
          className='logo'>
          <h4 className="">Flavored <span><i className="fa-solid fa-mug-saucer"></i> </span></h4>
          <span>wake up to something special  </span>
    </Link>
  )
}

export default Logo
