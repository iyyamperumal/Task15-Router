import ReadableCard from "./Cards";
import NavBar from "./Navbar"
import Header from "./Header";
import FullStack from "./Fullstack";
import Cyber from "./Cyber";
import DataScience from "./DataScience";
import Career from "./Careers";

const All = () => {
    const cardData = [
        {
            id: 1,
            image: 'https://www.guvi.in/blog/wp-content/uploads/2023/04/feature-768x298.webp',
            title: '40 Java Interview Questions for Freshers with Clear & Concise Answers',
            author: 'Tushar Vinocha',
            date: '09 Aug, 2024',
            time: '5 Min Read',
        },
        {
            id: 2,
            image: 'https://www.guvi.in/blog/wp-content/uploads/2015/02/blog-2-600x314.png',
            title: 'Top 30 Mini Project Ideas For College Students [UPDATED]',
            author: 'Srinithi Sankar',
            date: '09 Aug, 2024',
            time: '6 Min Read',
        },
        {
            id: 3,
            image: 'https://www.guvi.in/blog/wp-content/uploads/2022/12/Render-array-of-objects-in-ReactJs-1536x864.png',
            title: 'How to Render an Array of Objects in React? [in 3 easy steps]',
            author: 'Tarun Singh',
            date: '06 Aug, 2024',
            time: '7 Min Read',
        },
        {
            id: 4,
            image: 'https://www.guvi.in/blog/wp-content/uploads/2023/06/feature-image-unique-project-ideas.jpg',
            title: 'Top 10 Unique Project Ideas for College Students',
            author: 'Lukesh S',
            date: '23 Jul, 2024',
            time: '7 Min Read',
        },
    ];

    return (
        <>
            <div className="head">
                <Header />
            </div>
            <div>
                <NavBar />
            </div>
            <hr />
            <div className="cards">
                {cardData.map((cd) => (
                    <ReadableCard {...cd} key={cd.id} />
                ))}
            </div>
            <div>
                <FullStack />
                <DataScience />
                <Cyber />
                <Career />
            </div>
        </>
    )
}
export default All;