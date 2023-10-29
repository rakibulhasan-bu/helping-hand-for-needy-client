import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isSmallScreen = window.innerWidth < 992;
            const isOverThreshold = window.scrollY > 45;

            if (isSmallScreen) {
                if (isOverThreshold) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            } else {
                if (isOverThreshold) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`container-fluid fixed-top px-0 wow fadeIn`}
            data-wow-delay="0.1s"
        >
            <div
                className="top-bar text-white-50 row gx-0 align-items-center d-none d-lg-flex"
            >
                <div className="col-lg-6 px-5 text-start">
                    <small
                    ><i className="fa fa-map-marker-alt me-2"></i>Dhanmondi, Dhaka</small>
                    <small className="ms-4"
                    ><i className="fa fa-envelope me-2"></i>helpinghand@gmail.com</small>
                </div>
                <div className="col-lg-6 px-5 text-end">
                    <small>Follow us:</small>
                    <a className="text-white-50 ms-3" href=""
                    ><i className="fab fa-facebook-f"></i></a>
                    <a className="text-white-50 ms-3" href=""
                    ><i className="fab fa-twitter"></i></a>
                    <a className="text-white-50 ms-3" href=""><i className="fab fa-linkedin-in"></i></a>
                    <a className="text-white-50 ms-3" href=""><i className="fab fa-instagram"></i></a>
                </div>
            </div>

            <nav
                className={`navbar navbar-expand-lg navbar-dark py-lg-0 px-lg-5 fadeIn fixed-top ${isScrolled ? 'bg-dark shadow' : ''}`}
                style={{ top: isScrolled ? '0' : '45px' }}
                data-wow-delay="0.1s"
            >
                <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
                    <h1 className="fw-bold text-primary m-0">
                        Helping<span className="text-white">Hand</span>
                    </h1>
                </a>
                <button
                    type="button"
                    className="navbar-toggler me-4"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <NavLink to={'/'} className="nav-item nav-link">Home</NavLink>
                        <NavLink to={'/about'} className="nav-item nav-link">About</NavLink>
                        <NavLink to={'/causes'} className="nav-item nav-link">Causes</NavLink>
                        <div className="nav-item dropdown">
                            <a
                                href="#"
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >Pages</a>
                            <div className="dropdown-menu m-0">
                                <NavLink to={'/donate'} className="dropdown-item">Donate</NavLink>
                            </div>
                        </div>
                        <NavLink to={'/contact'} className="nav-item nav-link">Contact</NavLink>
                    </div>
                    <div className="d-none d-lg-flex ms-2">
                        <Link to={'/donate'} className="btn btn-outline-primary py-2 px-3">
                            Donate Now
                            <div
                                className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2"
                            >
                                <i className="fa fa-arrow-right"></i>
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;