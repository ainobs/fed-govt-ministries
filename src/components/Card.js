import './Card.css';
import logo2 from './logo2.jpeg';

function Card({minstate, web, name, min, add}) {
    return (
        <div className='pa3 bg-white br3 ma2'>
            <div className="top">
              <img src={logo2} alt="logo" className="pic"/> 
              <span className="f4 b">{name}</span>
            </div>
            <br/>
            <strong>minister: {min}</strong>
            <p><strong>minister of state: {minstate}</strong></p>
            <details>
                <summary>
                  <strong>more info</strong>
                </summary>
                <p>
                  <strong>Address: <br/><br/>{add}</strong><br/><br/>
                  <strong>web: {web} </strong>
                </p>
            </details>
        </div>
    );
}
export default Card;