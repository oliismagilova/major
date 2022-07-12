import './Footer.scss';

function Footer() {
    const now = new Date();
    const year = now.getFullYear();

    return (
        <footer>
          <i>  Copyright &copy; {year}.
                Olga Ismagilova</i>
        </footer>
    );
}

export default Footer;