import { useEffect, useState } from 'react'
import { connect } from "react-redux";

import { Container, Row, Col, Card, Spinner } from 'react-bootstrap'
import MovieRating from '../../components/MovieRating'
import { getMovieDetail } from '../../services/omdb';

function MoviePage({ movieId }) {

    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const res = await getMovieDetail(movieId)
            setData(res.data)
        }
        fetchData()
    }, [movieId])

    return (
        <div>
            {
                data ?
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={3} xl={3} style={{ textAlign: "center", marginBottom: "2em" }}>
                            <Card style={{ marginBottom: "1em" }}>
                                <Card.Img variant="top" src={data.Poster}  />
                            </Card>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={9} xl={9} style={{ textAlign: "left", color: "white" }}>
                            <h1>{data.Title}</h1>
                            <div style={{ marginBottom: "1.5em"  }}>
                                <span>{`${data.Year}\t|\t`}</span>
                                <span>{`${data.Rated}\t|\t`}</span>
                                <span>{data.Runtime}</span>
                            </div>
                            <MovieRating imdbRating={data.imdbRating} imdbVotes={data.imdbVotes} />
                            <p>{`Director: ${data.Director}`}</p>
                            <p>{`Writer: ${data.Writer}`}</p>
                            <p>{`Stars: ${data.Actors}`}</p>
                            <h6>{`Plot:`}</h6>
                            <p>{`${data.Plot}`}</p>
                        </Col>
                    </Row>
                </Container>
                : <Spinner animation="border" variant="light" />
            }
            
            
        </div>
      );
}

const mapStateToProps = state => {
    const { selectedMovie } = state
    return { movieId: selectedMovie }
}

export default connect(mapStateToProps)(MoviePage)
