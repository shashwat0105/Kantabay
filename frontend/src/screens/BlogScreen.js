import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

import Blog from '../components/Blog';
import './BlogScreen.css';
import blogs from '../blogs';

const BlogScreen = () => {
    return (
        <Container className="main-container">
            <Row>
                <h1 className="title">Blogs on <span>Kanta</span>Bay<span>...</span></h1>
            </Row>
            <Row className="content-box">
                {blogs.map( (blog) => {
                    return (
                        <Col sm={12} md={6} lg={4} xl={3}>
                        <Blog blog={blog} />
                    </Col>
                    )
                })}
                <Row>
                    <Col className="end-btn">
                    <Button variant="outline-light" className="review-end-btn blog-btn letter-spacing">Wanna Submit A Blog ??<br />Click Me</Button>
                    </Col>
                </Row>
            </Row>
            
        </Container>
    )
}

export default BlogScreen;
