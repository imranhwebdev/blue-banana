import Marquee from "react-fast-marquee"
import marqueeimg from "../assets/img/marqueeimg.png"
import brnshap from "../assets/img/banner-shap.png"
import marqueebanana from "../assets/img/marqueebanana.png"
export default function PageMarquee() {
    return (
        <div className="marquee-area">
            <img className='brnshap' src={brnshap} alt="" />
            <div className="common-marquee">
                <Marquee autoFill={true} speed={60}>
                    <div className="single-item">
                        <img src={marqueebanana} alt="" /> <h3>Blue Banana</h3> 
                    </div>
                </Marquee>
            </div>

        </div>
    )
}