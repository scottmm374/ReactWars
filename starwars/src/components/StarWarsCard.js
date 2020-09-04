import React from 'react';
import styled from 'styled-components';
import { Container, Card, CardBody, Row, Col } from 'reactstrap';



const NewCard = styled(Card)`
background-color: rgba(119, 119, 125, 0.58);
box-shadow: 0 4px 15px grey;
`;

const StyledH2 = styled.h2`
    font-family: 'Bungee Inline', cursive;
    margin-top: 15px;
    padding-bottom: 14px;
    border-bottom: 1px solid lightgray;
    font-size: 3.0rem;
    text-shadow: -1px 1px 3px #fff;
`;

const StyledH4 = styled.h4`
    font-family: 'Roboto Condensed', sans-serif;
    padding-bottom: 10px;
    padding-left: 39px;
    font-size: 2.0rem;
`;

function StarWarsCard(props) {
    console.log("card", props)
    return (
        <div>
            <Container>
                <NewCard>
                    <StyledH2>{props.name}</StyledH2>
                    <CardBody>

                        <Row>
                            <Col>
                                <StyledH4>Appearance</StyledH4>
                                <ul>
                                    <li>Average Height: {props.height} </li>
                                    <li>Eye colors: {props.eyeColor}</li>
                                    <li>Hair colors: {props.hairColor}</li>
                                    <li>Skin colors: {props.skinColor}</li>
                                </ul>
                            </Col>
                            <Col>
                                <StyledH4>General</StyledH4>
                                <ul>
                                    <li>Designation: {props.designation} </li>
                                    <li>Classification: {props.classification}</li>
                                    <li>Average Life Span: {props.lifeSpan} Years</li>
                                    <li>Language: {props.language}</li>
                                </ul>
                            </Col>
                        </Row>

                    </CardBody>
                </NewCard>
            </Container>
        </div>
    )
}

export default StarWarsCard;