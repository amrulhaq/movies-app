import { render, screen, queryByAttribute } from './test/util'
import nock from 'nock'
import { OMDB_API_KEY, OMDB_BASE_URL } from './services/omdb';
import MoviesMock from './fixtures/movies-mock.json'
import App from './App';

const getById = queryByAttribute.bind(null, 'id');

nock(OMDB_BASE_URL)
  .get(`/?apikey=${OMDB_API_KEY}&s=Avengers&type=movie&page=1`)
  .reply(200, MoviesMock)


test('renders search bar in the header', () => {
  render(<App />);
  const searchBarWithPlaceholder = screen.getByPlaceholderText(/ex: Avengers/i)
  expect(searchBarWithPlaceholder).toBeInTheDocument();
});

test('renders search button in the header', () => {
  render(<App />);
  const searchButton = screen.getByText(/Search/i)
  expect(searchButton).toBeInTheDocument();
});

test('renders movie list in homepage', () => {
  const dom = render(<App />);
  const movieList = getById(dom.container, 'movie-list-wrapper')
  expect(movieList).toBeInTheDocument();
});
