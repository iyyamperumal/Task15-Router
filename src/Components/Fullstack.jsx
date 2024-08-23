import ReadableCard from "./Cards";
import { Link } from "react-router-dom";
const FullStack = () => {

    const data = [
        {
            id: 1,
            image: 'https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html-1200x801.jpg',
            title: 'Best Full-Stack Development Project Ideas in 2024',
            author: 'Isha Sharma',
            date: '06 Aug, 2024',
            time: '4 Min Read',
        },
        {
            id: 2,
            image: 'https://www.guvi.in/blog/wp-content/uploads/2024/03/Feature-3-1200x466.webp',
            title: '7 Unique Web Development Project Ideas for Beginners',
            author: 'Lukesh S',
            date: '02 Apr, 2024',
            time: '6 Min Read',
        },
        {
            id: 3,
            image: 'https://www.guvi.in/blog/wp-content/uploads/2024/02/project_ideas_for_robotic_applications-1.webp',
            title: '10 Best HTML and CSS Project Ideas for Beginners',
            author: 'Isha Sharma',
            date: '22 Aug, 2024',
            time: '3 Min Read',
        },
        {
            id: 4,
            image: 'https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-1536x804.webp',
            title: 'How Long Would It Take to Be a Full Stack Developer?',
            author: 'Meghana D',
            date: '26 Mar, 2024',
            time: '3 Min Read',
        },
    ]
    return (
        <>
            <h1>Full Stack Development</h1>
            <div className="cards">
                {data.map((cd) => (
                    <ReadableCard {...cd} key={cd.id} />
                ))}
            </div>
            <Link to="/">Back</Link>
        </>
    )
}
export default FullStack;

