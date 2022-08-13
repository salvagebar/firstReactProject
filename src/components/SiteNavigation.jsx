import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';

const SiteNavigation = () => {
    return (
        <Col xs={{ size: 4, offset: 1 }} sm='2'>
            <h5>Links</h5>
            <ul className='list-unstyled'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/directory'>Directory</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </Col>
    );
};

export default SiteNavigation;