import { Container, Row } from "reactstrap";
import Socials from './Socials';
import Contact from './Contact';
import SiteNavigation from './SiteNavigation';

const Footer = () => {
    return (
        <footer className="site-footer">
            <Container>
                <Row>
                    <SiteNavigation />
                    <Socials />
                    <Contact />
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;