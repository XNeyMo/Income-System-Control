import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function NavBar() {
    return (
        <nav className='right'>
            <div className='navcontainer'>
                <h1 className='title'>NAVEGATION</h1>
                <ul className='first-level'>
                    <li>
                        <CustomLink className='link' to="/">Home</CustomLink>
                    </li>
                    <li>
                        <p className='separators'>Get Into Section</p>
                        <ul className='second-level'>
                            <li>
                                <CustomLink className='link' to="/signin">Sign In</CustomLink>
                            </li>
                            <li>
                                <CustomLink className='link' to="/login">Log In</CustomLink>
                            </li>
                            <li>
                                <CustomLink className='link' to="/">Log Out</CustomLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p className='separators'>Income Section</p>
                        <ul className='second-level'>
                            <li>
                                <CustomLink className='link' to="/visitor">Visitor</CustomLink>
                            </li>
                            <li>
                                <CustomLink className='link' to="/event">Event</CustomLink>
                            </li>
                            <li>
                                <CustomLink className='link' to="/authorized">Authorized Personnel</CustomLink>
                            </li>
                        </ul>
                    </li>
                    <p></p>
                    <li>
                        <CustomLink className='link' to="/credential">Credential</CustomLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, active: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}