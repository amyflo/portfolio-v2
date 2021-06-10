import React from "react";
import { graphql } from "gatsby";
import Fade from "react-reveal/Fade";
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
        <title>{frontmatter.title} | Amy Lo</title>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.description}</p>
        <h2 style={{margin:"0px auto 20px "}}>
          Updated {frontmatter.date} – {frontmatter.length} min read
        </h2>
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
      }
    }
  }
`;
