import { Link } from 'react-router-dom'
import '../../styles/error.css'
import { IoHomeOutline } from "react-icons/io5";

const Error = () => {
    return(
        <div className="container-error">
            <div className="container-error-style">
                <div className='container-error-details'>
                    <h1>404</h1>
                    <p>It looks like this page doesn't exist!</p>
                </div>
                <div className="container-error-btn">
                    <Link to='/summary'>Back to system<IoHomeOutline className='error-btn-icon'/></Link>
                </div>
            </div>
        </div>
    )
}

export default Error