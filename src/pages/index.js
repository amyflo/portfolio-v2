import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <h1>Amy Lo</h1>
      <p>
        Building out a test website in Gatsby!
      </p>
      <Link to="/censusacademy">Census Academy</Link>
    </Layout>
  );
}