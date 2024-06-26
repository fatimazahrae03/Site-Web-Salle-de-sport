import { Button, FormControl, Container, NavDropdown, Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header() {
    const user = JSON.parse(localStorage.getItem('user-info'));
    const navigate = useNavigate();

    function logout() {
        localStorage.clear();
        navigate('/register');
    }

    // Ajout de logs pour vérifier la structure de l'utilisateur
    console.log('User:', user);
    console.log('User Role:', user ? user.role : 'No user');

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">S.Sport</Navbar.Brand>
                    <Nav className="me-auto navbar_wrapper">
                        {!user ? (
                            <>
                                <Link to="/coachslist" className="nav-link">Coachs list</Link>
                                <Link to="/login" className="nav-link">Login</Link>
                                <Link to="/register" className="nav-link">Register</Link>
                            </>
                        ) : user.role === 'admin' ? (
                            <>
                                <Link to="/coachslist" className="nav-link">Coachs list</Link>
                                <Link to="/addcoachs" className="nav-link">Add Coachs</Link>
                                <Link to="/recettelist" className="nav-link">Recette list</Link>
                                <Link to="/addrecette" className="nav-link">Add Recette</Link>
                                <Link to="/programslist" className="nav-link">Programs list</Link>
                                <Link to="/addprograms" className="nav-link">Add Programs</Link>
                                
                            </>
                        ) : (
                            <>
                                 <Link to="/coachslist" className="nav-link">Coachs list</Link>
                                <Link to="/recettelist" className="nav-link">Recette</Link>
                                <Link to="/programslist" className="nav-link">Programs</Link>
                                <Link to="/formulair" className="nav-link">Formulaire</Link>
                            </>
                        )}
                    </Nav>
                    {user && (
                        <Nav>
                            <NavDropdown title={user && user.name} id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    )}
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;