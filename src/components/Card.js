import './Card.css';
import logo2 from './logo2.jpeg';

function Card({minstate, web, name, min, add}) {
    return (
        <div className='pa3 bg-white br3 ma2'>
          <div className="test">
            <div className="pic">
              <img src={logo2} alt="logo" /> 
            </div>
            <div>
              <h2>{name}</h2>
            </div>
          </div>
            <strong>minister: {min}</strong>
            <p><strong>minister of state: {minstate}</strong></p>
            <details>
              <summary>
                <strong>more info</strong>
              </summary>
              <p>
                <strong>Address: <p>{add}</p></strong>
                <strong>web: {web} </strong>
              </p>
            </details>
        </div>
    );
}
export default Card;