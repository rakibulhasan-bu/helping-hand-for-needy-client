import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonial = () => {

    const owlOptions = {
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    };

    return (
        <div className="container-xxl py-5">
            <div className="container">

                <div
                    className="text-center mx-auto mb-5 wow fadeInUp"
                    data-wow-delay="0.1s"
                    style={{ maxWidth: "500px" }}
                >
                    <div
                        className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3"
                    >
                        Testimonial
                    </div>
                    <h1 className="display-6 mb-5">
                        Trusted By Thousands Of People And Nonprofits
                    </h1>
                </div>

                <OwlCarousel data-wow-delay="0.1s" className="testimonial-carousel owl-carousel fadeInUp" {...owlOptions}>
                    <div className="testimonial-item text-center">
                        <img
                            className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                            src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1698518379/Website-assets/blueDefender/testimonial-2_lqhswr.jpg"
                            style={{ width: "100px", height: "100px" }}
                        />
                        <div className="testimonial-text rounded text-center p-4">
                            <p>
                                Clita clita tempor justo dolor ipsum amet kasd amet duo justo
                                duo duo labore sed sed. Magna ut diam sit et amet stet eos sed
                                clita erat magna elitr erat sit sit erat at rebum justo sea
                                clita.
                            </p>
                            <h5 className="mb-1">Doner Name</h5>
                            <span className="fst-italic">Profession</span>
                        </div>
                    </div>
                    <div className="testimonial-item text-center">
                        <img
                            className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                            src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1698518370/Website-assets/blueDefender/testimonial-3_hqtlus.jpg"
                            style={{ width: "100px", height: "100px" }}
                        />
                        <div className="testimonial-text rounded text-center p-4">
                            <p>
                                Clita clita tempor justo dolor ipsum amet kasd amet duo justo
                                duo duo labore sed sed. Magna ut diam sit et amet stet eos sed
                                clita erat magna elitr erat sit sit erat at rebum justo sea
                                clita.
                            </p>
                            <h5 className="mb-1">Doner Name</h5>
                            <span className="fst-italic">Profession</span>
                        </div>
                    </div>
                    <div className="testimonial-item text-center">
                        <img
                            className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                            src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1698518324/Website-assets/blueDefender/team-1_pvyvfg.jpg"
                            style={{ width: "100px", height: "100px" }}
                        />
                        <div className="testimonial-text rounded text-center p-4">
                            <p>
                                Clita clita tempor justo dolor ipsum amet kasd amet duo justo
                                duo duo labore sed sed. Magna ut diam sit et amet stet eos sed
                                clita erat magna elitr erat sit sit erat at rebum justo sea
                                clita.
                            </p>
                            <h5 className="mb-1">Doner Name</h5>
                            <span className="fst-italic">Profession</span>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    );
};

export default Testimonial;