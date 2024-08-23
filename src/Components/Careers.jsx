import { Link } from "react-router-dom";
import CareerCard from './Careercard';
const Career = () => {
    const data = [
        {
            id: 1,
            image: 'https://static.guvi.in/blog/zenThumbnail/java-fsd.webp',
            title: 'Java Full Stack Development Course',
        },
        {
            id: 2,
            image: 'https://static.guvi.in/blog/zenThumbnail/mern-fsd.webp',
            title: 'MERN Full Stack Development',
        },
        {
            id: 3,
            image: 'https://static.guvi.in/blog/zenThumbnail/data-science.webp',
            title: 'Data Science Course',
        },
        {
            id: 4,
            image: 'https://static.guvi.in/blog/zenThumbnail/ui-ux.webp',
            title: 'UI/UX Design course',
        },
    ];
    return (
        <>
            <h1>Careers</h1>
            <div className='cards'>
                {data.map((val) => (
                    <CareerCard {...val} key={val.id} />
                ))}
                <Link to="/">Back</Link>
            </div>
        </>
    )
};
export default Career;