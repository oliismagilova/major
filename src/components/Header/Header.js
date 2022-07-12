import OI from './../../images/OI.png';
import pizza from './../../images/pizza.png';
import './Header.scss';


function Header() {
    return (
        <header>
            <img src={OI} alt="OI" />
            <div className="header">
                    <img src={pizza} alt="pizza" />
                    <div className="title">One Free Pizza</div>
            </div>
            <div className="author"><i>by Olga Ismagilova</i></div>
        </header>

    )
}

export default Header;