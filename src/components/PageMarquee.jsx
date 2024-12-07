import Marquee from "react-fast-marquee"
import marqueeimg from "../assets/img/marqueeimg.png"
import brnshap from "../assets/img/banner-shap.png"
export default function PageMarquee() {
    return (
        <div className="marquee-area">
            <img className='brnshap' src={brnshap} alt="" />
            <div className="common-marquee">
                <Marquee autoFill={true} speed={60}>
                    <div className="single-item">
                        <img src={marqueeimg} alt="" />
                    </div>
                </Marquee>
            </div>

        </div>
    )
}