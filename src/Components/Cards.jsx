import proptypes from 'prop-types';

const ReadableCard = (props) => {
    return (
        <>
            <div className='card'>
                <img className="card-img" src={props.image}></img>
                <span className='card-details'>
                    <h3 className='card-title'>{props.title}</h3>
                    <span className='card-author' style={{ color: "grey" }}>By {props.author}</span>
                    <span className='date-time'>
                        <span className='card-date'>{props.date}</span>
                        <span className='card-time'>{props.time}</span>
                    </span>
                </span>
            </div>
        </>
    )
};
ReadableCard.proptypes = {
    image: proptypes.string,
    title: proptypes.string,
    author: proptypes.string,
    date: proptypes.string,
    time: proptypes.string,
}
export default ReadableCard;