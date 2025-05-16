import { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import MyCardItem from "./MyCardItem";

class MyGalleryItem extends Component {
  state = {
    movies: [],
    movies2: [],
    movies3: [],
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(`http://www.omdbapi.com/?apikey=95742065&s=${this.props.lookingFor}`);

      if (response.ok) {
        let movies = await response.json();
        this.setState({ movies: movies.Search });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <Container fluid className="text-white px-4 mt-3">
          <h3>{this.props.title}</h3>
        </Container>
        <Container fluid className="m-0 px-4">
          <Row className="g-4">
            {this.state.movies.slice(0, 6).map((movie) => (
              <Col xs={6} md={3} lg={2} key={movie.imdbID}>
                <MyCardItem img={movie.Poster} />
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default MyGalleryItem;
