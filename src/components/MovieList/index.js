import { Container, Row, Spinner } from 'react-bootstrap'
import MovieGrid from '../MovieGrid'

function MovieList({ data }) {
    return (
        <div>
            {
                data ?
                <Container>
                    <Row>
                        { data.Search.map(movie => <MovieGrid title={movie.Title} poster={movie.Poster} movieId={movie.imdbID} key={movie.imdbID} />) }
                    </Row>
                </Container> 
                : <Spinner animation="border" variant="light"/>
            }
            
        </div>
    )
}

export default MovieList