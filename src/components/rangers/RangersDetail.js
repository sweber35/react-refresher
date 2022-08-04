import './Rangers.css';

function RangersDetail( props ) {

    return (
        <div className="detail-container" style={ {backgroundColor: props.color} }>
            <h1>{props.name}</h1>
            <h2>Megazord:</h2> <p>{props.megazord}</p>
            <h2>Weapon:</h2> <p>{props.weapon}</p>
            <h2>Motivation:</h2> <p>{props.motivation}</p>
            <img src={props.imageUrl}/>
        </div>
    );
}

export default RangersDetail;