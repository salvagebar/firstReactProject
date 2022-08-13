import { Col } from 'reactstrap';

const Contact = () => {
    return (
        <Col sm='4' className='text-center'>
            <a
                role='button'
                className='btn btn-link'
                href='tel:+12065551234'
            >
                <i className='fa fa-phone' /> 1-206-555-1234
            </a>
            <br />
            <a
                role='button'
                className='btn btn-link'
                href='mailto:notreal@notreal.co'
            >
                <i className='fa fa-envelope-o' /> campsites@nucamp.co
            </a>
        </Col>
    );
};

export default Contact;