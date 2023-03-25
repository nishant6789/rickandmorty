import styles from "./Card.module.scss";
import { Link } from "react-router-dom";
export const Card = ({results}) => {
    let display;
    console.log("In Card")
    console.log(results)
    if(results) {
        display = results.map((x) => {
            let { id, image, name, status, location } = x;
            return (
                
                <div key={id} className = "col-lg-4 col-md-6 col-sm-6 col-12 mb-3 position-relative text-dark" style={{flex: '0 0 auto', width : '25%'}}>
                    <div className={`${styles.card} d-flex flex-column justify-content-center`}>
                    <span className={status==="Dead"?"position-absolute top-0 translate-middle badge rounded-pill text-bg-danger" : status==="Alive"?"position-absolute top-0 translate-middle badge rounded-pill text-bg-success" : "position-absolute top-0 translate-middle badge rounded-pill text-bg-secondary"} style={{left: "90%", zIndex:'1'}}>{status}</span>
                        <img className={`${styles.img} img-fluid`} src={image} alt="" />
                        <div className={`${styles.content}`}>
                            <div className="fs-5 fw-bold mb-4">{name}</div>
                            <div className="">
                            <div className="fs-6 fw-normal">Last Location</div>
                            <div className="fs-5">{location.name}</div>
                            </div>
                        </div>
                    </div>
                </div>

            )
        })
    }
    else {
        display = "No Characters found";
    }

    return (<>
        {display}
    </>)
}