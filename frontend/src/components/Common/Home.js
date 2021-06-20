import React, {Component} from 'react';
import { Link } from "react-router-dom";

import { Jumbotron, Container, Button } from 'react-bootstrap';

export default class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:''
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <Jumbotron fluid>
                <Container>
                    <h1 style={{ fontFamily:"monospace" ,color:"white"}}>Welcome to Job Geeks</h1>
                    <p>
                    <h6 style={{color:"white"}}><b><i>!!!The easiest way to find your dream job!!!</i></b></h6>
                    </p>
                    <Link to="/login">
                        <Button 
                            renderAs="button"
                            style={{
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem"
                            }}
                        >
                            <span>Login</span>
                        </Button>
                    </Link>
                    <hr></hr>
                    <h6 className="text-white">
                        Don't have an account? <Link to="/register"><h6 className="text-white">Register</h6></Link>
                    </h6>
                </Container>
            </Jumbotron>
        )
    }
}