import { Link } from "react-router-dom";
import '../Styles/Landing.css'
const Landing = () => {
    return (
        <>

            <div className="page">

                <Link to='/Admin'>

                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPSeco3LkXfEYtclhhj1BJ2Agh2rK2JztPrw&s" alt=""></img>
                    <h1>Admin</h1>

                </Link>
                <Link to='/Userlogin'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPSeco3LkXfEYtclhhj1BJ2Agh2rK2JztPrw&s" alt=""></img>
                    <h1>User</h1>

                </Link>


            </div>
        </>
    )
}
export default Landing;