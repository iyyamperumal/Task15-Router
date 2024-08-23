import ReadableCard from "./Cards";
import { Link } from "react-router-dom";
const Cyber = () => {

    const data = [
        {
            id: 1,
            image: 'https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png',
            title: 'Cybersecurity Vs Ethical Hacking: Top 10 Differences',
            author: 'Tushar Vinocha',
            date: '09 Aug, 2024',
            time: '5 Min Read',
        },
        {
            id: 2,
            image: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity-768x480.webp',
            title: 'Non-Coding Jobs in Cybersecurity: A Comprehensive Guide',
            author: 'Jaishree Tomar',
            date: '09 Aug, 2024',
            time: '4 Min Read',
        },
        {
            id: 3,
            image: 'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More-768x480.webp',
            title: 'What Is Hacking? Types of Hacking & More',
            author: 'Meghana D',
            date: '23 Jul, 2024',
            time: '6 Min Read',
        },
        {
            id: 4,
            image: 'https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-1536x864.png',
            title: '8 Different Types of Cybersecurity and Threats Involved',
            author: 'Tushar Vinocha5 Min Read',
            date: '23 Jul, 2024',
            time: '4 Min Read',
        },
    ];
    return (
        <>
            <h1>Cyber Security</h1>
            <div className="cards">
                {data.map((cd) => (
                    <ReadableCard {...cd} key={cd.id} />
                ))}
                <Link to="/">Back</Link>
            </div>
        </>
    )
}
export default Cyber;