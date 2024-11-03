import logoKasa from "../assets/logos/logoKasa.svg";
import "../style/Footer.scss";

export default function Footer() {
    let now = new Date();
    let year = now.getFullYear().toString();

    return (
    <footer className="footer">
        <div className="footer footerDiv">
            <img src={logoKasa} alt="Logo pied de page"/>
            <p>&copy; {year} Kasa. All rights reserved</p>
        </div>
    </footer>
    )
}