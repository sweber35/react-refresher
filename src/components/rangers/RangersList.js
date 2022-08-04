import './Rangers.css';
import RangersDetail from './RangersDetail';

function RangersList( { rangers } ) {

    return (
        <div className="list-container">
            { rangers.map( ( ranger, index ) => (
                <RangersDetail key={index} {...ranger}/>
            ) ) }
        </div>
    )
}

export default RangersList;