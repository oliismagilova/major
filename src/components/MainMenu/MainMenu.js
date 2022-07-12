import { Link } from "react-router-dom";
import './MainMenu.scss';


export default function MainMenu() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>                
                <Link to="/get-your-pizza">Choose Your Pizza</Link>
                <Link to="/orders">Orders </Link>
            </nav>
        </div>
    );
}