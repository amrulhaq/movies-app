import { connect } from 'react-redux'
import { Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { setSelectedMovie } from '../../redux/actions'
 

function MovieGrid({title, poster, movieId, setSelectedMovie}) {
    return (
        <Col xs={6} md={4} lg={3} onClick={() => setSelectedMovie(movieId)}>
            <Link to={`/movie/${title}`} >
                <Card style={{ marginBottom: "1em" }}>
                    <Card.Img variant="top" src={poster}  />
                </Card>
            </Link>
        </Col>
    )
}

export default connect(null, { setSelectedMovie })(MovieGrid)