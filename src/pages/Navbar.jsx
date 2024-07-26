import { Link } from "react-router-dom"

const Navbar = () => {
    const tabs = [
        { "tabText": "Home", "route": "/Home" },
        { "tabText": "About", "route": "/About" },
        { "tabText": "Layout", "route": "/Layout" },
    ]
    return (
        <div>
            <ul>
                {tabs.map((obj, index) => <li key={index}><Link to={obj.route}>{obj.tabText}</Link></li>)}
            </ul>
        </div>
    )
}

export default Navbar