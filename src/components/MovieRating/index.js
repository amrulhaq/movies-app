function MovieRating({ imdbRating, imdbVotes }) {
    return (
        <div style={{ marginBottom: "1.5em"  }}>
            <div>
                <span style={{ fontSize: "1.5em" }}>{imdbRating}</span>
                <span>{' /10'}</span>
            </div>
            <p>{`from ${imdbVotes} votes`}</p>
        </div>
    )
}

export default MovieRating