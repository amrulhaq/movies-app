import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import MovieList from '../../components/MovieList';
import { searchMovies } from '../../services/omdb';

function Homepage({ searchKeyword, pagination }) {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchMovies = async (keyword, ) => {
            const res = await searchMovies(keyword, pagination)
            setData(res.data)
        }
        fetchMovies(searchKeyword, pagination)
    }, [searchKeyword, pagination])


    return (
        <div id="movie-list-wrapper">
          <MovieList data={data}/>
        </div>
      );
}


const mapStateToProps = state => {
    const { searchKeyword } = state
    return { searchKeyword }
}

export default connect(mapStateToProps)(Homepage)
