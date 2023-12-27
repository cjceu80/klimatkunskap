import React from "react";
import { Card, Col, Row } from "react-bootstrap";

export default function InformationCard(props)
{
    const alignLeft = props.index % 2 !== 0;
    let align = 8
    if (alignLeft)
        align = { span: 8, offset: 4 };

        console.log(props.paragraphs)
    return (
        <Row>
            <Col md={align} className="p-2">
        <Card className={`p-2 ${alignLeft && "text-end"}`}>
        <h3>{props.cardData.caption}</h3>
        {props.cardData.paragraphs && props.cardData.paragraphs.map((value) => <p>{value}</p>)}
        </Card>
        </Col>
        </Row>
    );
}

//`w-75 align-self-${align} justify-self-${align} text-${align}`