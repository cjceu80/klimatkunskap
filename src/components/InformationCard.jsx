import React from "react";
import { Card, CardImg, Col, Row } from "react-bootstrap";

export default function InformationCard(props)
{
    //check for what side to align with
    const alignRight = props.index % 2 !== 0;
    //Values for aligning left
    let mdAlign = 9;
    let xlAlign = { span: 6, offset: 1};
    //Changing to the right align values if that is the case
    if (alignRight){
        mdAlign = { span: 9, offset: 3 };
        xlAlign = { span: 6, offset: 5 };
    }

    return (
        <Row className="my-3">
            <Col md={mdAlign} xl={xlAlign} className="my-3">
                <Card className={`px-3 ${alignRight && "text-end"}`}>
                    <Row>
                        {(props.cardData.image && alignRight) && <Col className="d-flex align-items-center" md={props.cardData.imageWidth}><CardImg className="" src={props.cardData.image} style={{maxWidth: 300}} /></Col>}
                        <Col>
                            <h3 className="p-3">{props.cardData.caption}</h3>
                            {props.cardData.paragraphs && props.cardData.paragraphs.map((value, index) => <p className="px-3" key={index}>{value}</p>)}
                        </Col>
                        {(props.cardData.image && !alignRight) && <Col className="d-flex align-items-center" md={props.cardData.imageWidth}><CardImg className="" src={props.cardData.image} style={{maxWidth: 300}} /></Col>}
                    </Row>
                </Card>
            </Col>
        </Row>
    );
}

//`w-75 align-self-${align} justify-self-${align} text-${align}`