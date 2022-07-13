import React from "react";
import Layout from "../components/Layout/Layout";
import Container from "react-bootstrap/Container";
import { StaticImage } from "gatsby-plugin-image";
import Row from "react-bootstrap/Row"
import HomeCard from "../components/HomeCard/HomeCard";

export default function Dev() {
    return (
        <Layout>
            <Container>
                <h1 style={{maxWidth: "none"}}>Coding Projects</h1>
                <Row>
                    <HomeCard link="/bunnyworld" headline="BunnyWorld"
                        text="An Android app for creating, editing, and playing custom games."
                        badge1="Java"
                        badge2="Android App"
                    >
                        <StaticImage className="header-image"
                            src="../images/headers/bunnyworld.png" alt="A dinosaur" />
                    </HomeCard>
                    <HomeCard link="/surveyexplorer" headline="Census Survey Explorer"
                        text="A search and filter tool to explore 130+ Census surveys."
                        badge1="Javascript"
                        badge2="API"
                    >
                        <StaticImage className="header-image"
                            src="../images/headers/surveyexplorer.png" alt="A dinosaur" />
                    </HomeCard>
                    <HomeCard link="/lenovo" headline="Lenovo"
                        text="Visualizing page traffic and revenue for Lenovo WorldWide eCommerce."
                        badge1="Python"
                        badge2="Tableau"
                    >
                        <StaticImage className="header-image"
                            src="../images/headers/lenovo-header.png" alt="A dinosaur" />
                    </HomeCard>
                    <HomeCard link="/ray-traced-image" headline="Ray Traced Image"
                        text="A Mulan-inspired ray-traced image using Blender Cycles."
                        badge1="Blender"
                        badge2="Python"
                    >
                        <StaticImage className="header-image"
                            src="../images/headers/cycles.png" alt="A dinosaur" />
                    </HomeCard>
                    <HomeCard link="/monte-carlo" headline="Monte-Carlo Recursive Ray Tracer"
                        text="A Monte-Carlo recursive ray tracer of the Classic Cornell box."
                        badge1="Blender"
                        badge2="Python"
                    >
                        <StaticImage className="header-image"
                            src="../images/headers/monte-carlo.png" alt="A dinosaur" />
                    </HomeCard>
                    <HomeCard link="/blinn-phong" headline="Blinn-Phong Recursive Ray Tracer"
                        text="A simple recursive ray tracer using the Blinn-Phong model."
                        badge1="Blender"
                        badge2="Python"
                    >
                        <StaticImage className="header-image"
                            src="../images/headers/simple.png" alt="A dinosaur" />
                    </HomeCard>

                    {/* <HomeCard link="/bunnyworld" headline="Open Data Campus"
                        text="A guide to open data for college campuses."
                        badge1="HTML"
                        badge2="CSS"
                    >
                    </HomeCard>
                    <HomeCard link="/bunnyworld" headline="Tetris"
                        text="An Android app that plays and auto-solves Tetris."
                        badge1="Java"
                        badge2="Android App"
                    >
                    </HomeCard>
                    <HomeCard link="/bunnyworld" headline="CityInformation"
                        text="An Android app to add, search, and filter through a cities database."
                        badge1="Java"
                        badge2="SQL"
                    >
                    </HomeCard> */}
                </Row>
            </Container>
        </Layout>
    );
}