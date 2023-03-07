import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./Context/LoginContext";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Contactus from "./components/Contactus/Contactus";
import Aboutus from "./components/Aboutus/Aboutus";
import NotFound from "./components/NotFound/NotFound";
import AddProducts from "./components/AddProducts/AddProducts";
import ListOfProducts from "./components/ListOfProducts/ListOfProducts";
import Logout from "./components/Logout";
import "./App.css";
import logo from "./images/attachment_112138805-removebg-preview.png";
function App() {
  let { isLogin, setLogin } = useContext(Context);

  return (
    <div className="navbar1">
      <div className="navbar2">
        {["md"].map((expand) => (
          <Navbar
            key={expand}
            // bg="dark"
            variant="dark"
            expand={expand}
            className="navbarbg"
          >
            <Navbar.Brand to="/">
              {" "}
              <img
                src={logo}
                style={{ width: "60px", margin: "0 0 0 20px" }}
                alt="navlogo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  className="navlog "
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  <img
                    src={logo}
                    style={{ width: "60px", margin: "0 0 0 20px" }}
                    alt="navlogo"
                  />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav
                  className="ms-auto my-2 navlinks my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Link className="nav-link" to="/">
                    Home
                  </Link>

                  {isLogin === false ? (
                    <>
                      <NavLink className="nav-link " to="/login">
                        Login
                      </NavLink>

                      <NavLink className="nav-link " to="/register">
                        Register
                      </NavLink>
                    </>
                  ) : (
                    <>
                      <NavLink
                        className="nav-link "
                        to="/login"
                        onClick={() => {
                          setLogin(false);
                          sessionStorage.clear();
                        }}
                      >
                        Log Out
                      </NavLink>

                      <NavLink className="nav-link " to="/addProduct">
                        Add Product
                      </NavLink>

                      <NavLink className="nav-link " to="/listOfProducts">
                        List Of Product
                      </NavLink>
                    </>
                  )}

                  <NavLink className="nav-link " to="/contactus">
                    Contact Us
                  </NavLink>

                  <NavLink className="nav-link " to="/aboutus">
                    About Us
                  </NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Navbar>
        ))}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/addProduct" element={<AddProducts />} />
        <Route path="/listOfProducts" element={<ListOfProducts />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
