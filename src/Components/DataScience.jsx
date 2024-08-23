import ReadableCard from "./Cards";
import { Link } from "react-router-dom";
const DataScience = () => {
    const data = [
        {
            id: 1,
            image: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science-768x480.webp',
            title: 'Top 10 High Paying Non-Coding Jobs in Data Science in 2024',
            author: 'Isha Sharma23 Jul, 2024',
            date: '23 Jul, 2024',
            time: '6 Min Read',
        },
        {
            id: 2,
            image: 'https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-1536x804.webp',
            title: '12 Real-World Data Science Examples: Power Of Data Science',
            author: 'Lukesh S',
            date: '25 Mar, 2024',
            time: '7 Min Read',
        },
        {
            id: 3,
            image: 'https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science-1536x804.png',
            title: 'Can A Commerce Student Do Data Science?',
            author: 'Saakshi Priyadarshini',
            date: '16 Apr, 2024',
            time: '3 Min Read',
        },
        {
            id: 4,
            image: 'https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4-1536x866.png',
            title: 'Roles and Responsibilities of a Data Scientist',
            author: 'Jaishree Tomar',
            date: '16 Apr, 2024',
            time: '6 Min Read',
        },
    ];
    return (
        <>
            <h1>Data Science</h1>
            <div className="cards">
                {data.map((cd) => (
                    <ReadableCard {...cd} key={cd.id} />
                ))}
                <Link to="/">Back</Link>
            </div>
        </>
    )
};
export default DataScience;