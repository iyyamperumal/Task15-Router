import proptypes from 'prop-types';
const CareerCard = (props) => {
    return (
        <>
            <div className='card'>
                <img className="card-img" src={props.image}></img>
                <span className='card-details'>
                    <h3 className='card-title'>{props.title}</h3>
                </span>
                <button>Enroll</button>
            </div>
        </>
    )
};
CareerCard.proptypes = {
    image: proptypes.string,
    title: proptypes.string,
}
export default CareerCard;