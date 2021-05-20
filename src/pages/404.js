import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NotFoundPage = () => {
  return (
    <Layout>
      <title>Not found</title>

      <Row>
        <Col>
          <iframe
            src="https://giphy.com/embed/ICOgUNjpvO0PC"
            width="480"
            height="359"
            frameBorder="0"
            class="giphy-embed"
            title="gif of cat waving both its paws"
            allowFullScreen
          ></iframe>
        </Col>
        <Col>
          <h1>Oops, you're lost! <span role="img" aria-label="pleading emoji">🥺</span></h1>
          <p>
            The page you're looking for does not exist. Or it does.. if you were
            looking for a gif of a cute cat reaching for a high five. <strong>(High five, little guy!)</strong>
          </p>
          <p>
            While we're here, did I mention that I'm always looking for new
            opportunities? In fact, I happen to have a rather fancy piece of
            paper called a <a href="/">resume</a> that you might want to check
            out. Or you can <Link to="/about">learn more about me here!</Link>
          </p>
          <Link to="/">Take me back home!</Link>
        </Col>
      </Row>
    </Layout>
  );
};

export default NotFoundPage;
