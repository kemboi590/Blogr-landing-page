

import './footer.scss'
export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="logo">Blogr</div>
                <div className="footer-links">
                    <div>
                        <h4>Product</h4>
                        <ul>
                            <li><a href="#">Overview</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Marketplace</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Integrations</a></li>
                        </ul>
                    </div>

                </div>

                    <div className="footer-links">
                    <div>
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    </div>


                    <div className="footer-links">
                    <div>
                        <h4>Connect</h4>
                        <ul>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Newsletter</a></li>
                            <li><a href="#">LinkedIn</a></li>
                        </ul>
                    </div>
                    </div>

            </div>
        </footer>
    )
}
