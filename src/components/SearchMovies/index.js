import { useState } from 'react'
import { connect } from 'react-redux'
import { Container, InputGroup, FormControl, Button, Navbar } from 'react-bootstrap'
import { useHistory } from "react-router-dom";

import { setSearchKeyword } from '../../redux/actions'

function SearchBar({ setSearchKeyword }) {
  const [keyword, setKeyword] = useState('')
  const history = useHistory();

  const searchMovies = () => {
    setSearchKeyword(keyword)
    console.log('history', history)
    history.push('/')
  }

  return (
    <Navbar bg="dark" expand="lg" style={{ marginBottom: "2em" }}>
      <Container>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="ex: Avengers"
            onChange={(e)=> { setKeyword(e.target.value)}}
            onKeyDown={(e) => {
              // enter button pressed
              if(e.keyCode === 13 && !e.shiftKey) {
                e.preventDefault();
                searchMovies()
              }
            }}
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={() => searchMovies()}
          >
            Search
          </Button>
        </InputGroup>
      </Container>
    </Navbar>
    
  )
}

export default connect(null, { setSearchKeyword })(SearchBar)
