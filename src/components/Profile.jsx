import Card from 'react-bootstrap/Card';

function Profile(props) {
    return (
        <div className='profile'>
            <Card>
                <Card.Img variant='top' src={ props.img } />
                <Card.Body>
                    <Card.Title>{ props.name }</Card.Title>
                    <Card.Subtitle>{ props.age }</Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
    )
}


export default Profile;