const Header = () => {

    return (
        <>
            <div className='header'>
                <span>
                    <img className='guvi-logo' src='https://www.guvi.in/blog/wp-content/themes/guvi-blog/assets/images/guvi-logo.svg' />
                </span>
                <p>Blog</p>
                <span className='input-span'>
                    <input type='text' name='search' placeholder='What do you want to read?' />
                    <img src='https://img.icons8.com/?size=100&id=59878&format=png&color=000000' />
                </span>

            </div>
            <button className="button">Log Out</button>
        </>
    )
};
export default Header;