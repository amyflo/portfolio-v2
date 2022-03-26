import React from "react";
import Layout from "../components/Layout/Layout";
import Container from "react-bootstrap/Container";
import { StaticImage } from "gatsby-plugin-image";
import Row from "react-bootstrap/Row"
import HomeCard from "../components/HomeCard/HomeCard";

export default function Design() {
    return (
        <Layout>
            <Container>
                <h1>Design Projects</h1>
                <Row>
                    <HomeCard link="/frb" headline="Federal Reserve Board of Governors"
                        text="Building a design system for the Monetary Affairs Team."
                        badge1="UX Research"
                        badge2="Frontend"
                    >
                        <StaticImage className="header-image"
                            src="../images/headers/frb.png" alt="A dinosaur" />
                    </HomeCard>
                    <HomeCard link="/stamply" headline="Stamply"
                        text="A digital rewards app for shopping small businesses. 
            1st place, Adobe Creative Jam."
                        badge1="UX Design"
                        badge2="Hackathon"
                    >
                        <StaticImage className="header-image"
                            src="../images/headers/stamply.png" alt="A dinosaur" />
                    </HomeCard>
                    <HomeCard link="/nutrikitchen" headline="Nutrikitchen"
                        text="A smart kitchen and health app.
            Finalist, Adobe Creative Jam."
                        badge1="UX Design"
                        badge2="Hackathon"
                    >
                        <StaticImage className="header-image"
                            src="../images/headers/nutrikitchen.png" alt="A dinosaur" />
                    </HomeCard>
                    <HomeCard link="/onetoday" headline="Google One Today"
                        text="Redesigning social donations for a failed Google product. 3rd place, Wellesley REVIVE Designathon."
                        badge1="UX Design"
                        badge2="Hackathon"
                    >
                        <StaticImage className="header-image"
                            src="../images/headers/google.png" alt="A dinosaur" />
                    </HomeCard>
                </Row>
            </Container>
        </Layout>
    );
}