import React from "react";
import { graphql } from "gatsby";
import Fade from "react-reveal/Fade";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout/Layout";
import Img from "gatsby-image"


export default function Template({data}) {
  let post = data.markdownRemark
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter} = markdownRemark;
  return (
    <Layout className="blog-post-container">
        <Fade className="blog-post">

          <title>{frontmatter.title}</title>
          <h1>
            {frontmatter.title}
          </h1>
          <h2>
            {frontmatter.description}
          </h2>
          <figcaption>
            Updated {frontmatter.date} – {frontmatter.length} min read
          </figcaption>
          <Img fluid={featuredImgFluid} />
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
