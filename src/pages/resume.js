import React from "react";
import Layout from "../components/Layout/Layout";
import Container from "react-bootstrap/Container";

export default function Resume() {
    return (
        <Layout>
            <Container>
                <h1>Resume</h1>
                <div class="embed-responsive embed-responsive-1by1">
                    <iframe class="embed-responsive-item" title="Resume"
                        src="https://drive.google.com/file/d/1gd2ReAsK08T-LJYuzyq6NZ4qYhV4EEkU/preview"
                        allow="autoplay"></iframe>
                </div>
            </Container>
        </Layout>
    );
}