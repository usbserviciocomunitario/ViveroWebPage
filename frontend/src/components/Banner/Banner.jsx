import "./Banner.scss";

export default ({ compact, image, title, subtitle, customHeight = '35em' }) => {
    return (
        <div className={`banner${(compact) ? "--compact" : ""}`}
            style={{
                backgroundImage: `url(${image})`,
                height: customHeight
            }}>

            <div
                className={`banner__layer${(compact) ? "--compact" : ""}`}
                style={{ height: customHeight }}
            >
            </div>

            <div className="banner__content">
                {title &&
                    <div className="banner__title--h1">{title}</div>}
                {subtitle &&
                    <div className="banner__title--h2">{subtitle}</div>}
            </div>
        </div>
    );
}