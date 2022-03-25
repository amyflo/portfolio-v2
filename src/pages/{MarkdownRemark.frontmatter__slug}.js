import React from "react";
import { graphql } from "gatsby";
import Fade from "react-reveal/Fade";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout/Layout";
import { Container } from "react-bootstrap";


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout className="blog-post-container">
      <Container>
        <Fade className="blog-post">

          <title>{frontmatter.title} | Amy Lo</title>
          <h1>
            {frontmatter.title}
          </h1>
          <h2>
            {frontmatter.description}
          </h2>
          <p>
            Updated {frontmatter.date} – {frontmatter.length} min read
          </p>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          {/* <PageEnd
          headline="Congratulations - You've made it to the end!"
          text="Go back home"
          href="/#"
        /> */}
        </Fade>
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date
        slug
        title
        length
        description
      }
    }
  }
`;
