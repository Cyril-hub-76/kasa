import "../style/Banner.scss";
export default function Banner({children, imgUrl}) {
    return(
        <div className={children ? "banner opacity" : "banner lightOpacity"} style={{backgroundImage: `url(${imgUrl})`}}>
            {children}
        </div>

    )
}