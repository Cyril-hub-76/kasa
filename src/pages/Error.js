import "../style/Error.scss";
export default function Error () {
    return (
        <div className="errorContainer">
            <h1 className="error">404</h1>
            <p><span>Oups! La page que</span> <span>vous demandez n'existe pas.</span></p>
            <a href="/">Retounez sur la page d'accueil</a>
        </div>
    )
}