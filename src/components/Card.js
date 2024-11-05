import "../style/Card.scss";
export default function Card ({id, cover, title}) {
    return(
        <div className="card square" id={id}>
            <img className="square" src={cover} alt=""/>
            <h3>
                    {title}
            </h3>
        </div>
    )
}