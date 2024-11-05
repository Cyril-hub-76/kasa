import "../style/Banner.scss";
export default function Banner({children, imgUrl}) {
    return(
        <div className="banner" style={{backgroundImage: `url(${imgUrl})`}}>
            {children}
        </div>

    )
}