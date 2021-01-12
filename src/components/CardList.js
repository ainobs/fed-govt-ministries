import Card from './Card';
//import Data from './Data';


const CardList = ({Data})=> {
    const arrayLoop = Data.map((arr, i)=> {
       return ( <Card key={i}
         id={Data[i].id}
         name={Data[i].name} 
         web={Data[i].web} 
         min={Data[i].minister}
         minstate={Data[i].minstate}
         add={Data[i].address}
         />)
    })
    return (
        <div>
            {arrayLoop}
        </div>
    );
}

export default CardList;