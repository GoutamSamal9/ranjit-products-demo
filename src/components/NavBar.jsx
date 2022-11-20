import "./NavBar.css"
import {Link} from "react-router-dom"

 const NavBar=()=>{

    return(
        <div className="nav-bar-container">
            <div className="left-side-container">
                <strong>
                    LOGO
                </strong>
            </div>

            <div className="right-side-container">
                <div>
                    <p>Products</p>
                </div>
                <div>
                    <Link to="/cart">
                        <p>Cart</p>
                    </Link>
                </div>
            </div>
        </div>
    )

}
export default NavBar