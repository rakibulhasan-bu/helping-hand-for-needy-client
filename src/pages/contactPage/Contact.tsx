const Contact = () => {
    return (
        <>
            {/* <!-- Page Header Start --> */}
            <div className="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center">
                    <h1 className="display-4 text-white animated slideInDown mb-4">Contact Us</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-primary active" aria-current="page">Contact Us</li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* <!-- Contact Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">Contact Us</div>
                            <h1 className="display-6 mb-5">If You Have Any Query, Please Contact Us</h1>
                            <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                            <label htmlFor="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: "100px" }}></textarea>
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary py-2 px-3 me-3">
                                            Send Message
                                            <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                                                <i className="fa fa-arrow-right"></i>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{ minHeight: "450px" }}>
                            <div className="position-relative rounded overflow-hidden h-100">
                                <iframe className="position-relative w-100 h-100"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                    frameBorder="0" style={{ minHeight: "450px", border: 0 }} aria-hidden="false"
                                    tabIndex={0}></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;