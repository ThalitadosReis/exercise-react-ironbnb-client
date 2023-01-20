import { NavLink } from 'react-router-dom';

export default function NavBar(){
    return (
        <div className='NavBar'>
            <nav>
                <NavLink to="/">Home</NavLink> |
                <NavLink to="/apartments">Apartments List</NavLink> |
                <NavLink to="/apartments/create">Create</NavLink>
            </nav>
        </div>
    )
}