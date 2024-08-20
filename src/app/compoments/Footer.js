export default function Footer() {
    return (
        <footer>
            <div className="container-fluid bg-white">
                <footer className="py-5">
                    <div className="row">
                        <div className="col-6 col-md-2 mb-3">
                            <h5>รายการ</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Service 
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>© 2024 Company, Inc. All rights reserved.</p>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3">
                                <a className="link-body-emphasis" href="#">
                                    <svg className="bi" width={24} height={24}>
                                        <use xlinkHref="#twitter" />
                                    </svg>
                                </a>
                            </li>
                            <li className="ms-3">
                                <a className="link-body-emphasis" href="#">
                                    <svg className="bi" width={24} height={24}>
                                        <use xlinkHref="#instagram" />
                                    </svg>
                                </a>
                            </li>
                            <li className="ms-3">
                                <a className="link-body-emphasis" href="#">
                                    <svg className="bi" width={24} height={24}>
                                        <use xlinkHref="#facebook" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
                    </footer>

                    </div>
                    </footer >
    )
}
