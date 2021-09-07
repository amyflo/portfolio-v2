import React from "react";
import { graphql } from "gatsby";
import Fade from "react-reveal/Fade";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout/Layout";
import PageEnd from "../components/PageEnd/PageEnd";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout className="blog-post-container">
      <Fade className="blog-post">
        <title>{frontmatter.title} | Amy Lo</title>
        <div
          style={{
            textAlign: "center",
            maxWidth: "600px",
            margin: "auto",
            padding: "30px",
          }}
        >
          <h1
            style={{
              fontWeight: "600",
              fontSize: "2.5rem",
              padding: "10px 0px 0px 0px",
            }}
          >
            {frontmatter.title}
          </h1>
          <h4 style={{ padding: "10px 0px 0px 0px" }}>
            {frontmatter.description}
          </h4>
          <p>
            Updated {frontmatter.date} – {frontmatter.length} min read
          </p>
        </div>
        <div
          style={{ margin: "auto auto 100px auto" }}
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <PageEnd
          headline="Congratulations - You've made it to the end!"
          text="Go back home"
          href="/#"
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
