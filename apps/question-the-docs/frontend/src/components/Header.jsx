import superduperdbLogo from '../assets/superduperdb.svg'

const Header = () => {

    return (
        <div className='banner'>
            <a href="https://superduperdb.com" target="_blank">
                <img src={superduperdbLogo} className="logo" alt="SuperDuperDB logo" />
            </a>
        </div>
    )
};

export default Header;