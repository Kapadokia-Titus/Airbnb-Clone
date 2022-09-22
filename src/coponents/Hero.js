import hero from '../images/bg.png';
import "../styles.css"
export default function Hero(){

    return(

        <div>
            <img src={hero} className="hero--image"/>
            <h1>Online Experience</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all 
                without leaving home.</p>
        </div>
    )
}