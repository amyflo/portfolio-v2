import React from "react";
import { graphql } from "gatsby";
import Fade from "react-reveal";
import Img from "gatsby-image";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout className="blog-post-container">
      <Fade className="blog-post" bottom>
        <title>{frontmatter.title}</title>
        <h1>{frontmatter.title}</h1>
        <h4>{frontmatter.description}</h4>
        <p>
          Last updated {frontmatter.date} – {frontmatter.length} min read
        </p>
        <Img
          fluid={frontmatter.src.childImageSharp.fluid}
          alt={frontmatter.alt}
        />
        <hr />
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Fade>
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
        src {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        alt
      }
    }
  }
`;
