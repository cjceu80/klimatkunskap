import React, {useState} from "react";
import { Row, Col, Form } from "react-bootstrap";
import { ResponsivePieCanvas } from "@nivo/pie";
import {  ResponsiveBarCanvas } from "@nivo/bar";
import * as fossil from '../../utils/Dataset1_Global_Emissions';
import { bottom } from "@popperjs/core";


const data = [{id: "cement", label: "Cement", value: 100},
{id: "Gas Flaring", label: "Gas Flaring", value: 100},
{id: "Gas Fuel", label: "Gas Fuel", value: 100},
{id: "Liquid Fuel", label: "Liquid Fuel", value: 100}, ]

export default function Fossil(){
    const [selectedYear, setSelectedYear] = useState(2010);
    const data = fossil.getYearData(selectedYear);

    return (
        <>
        <Row>
            {<p className="my-0 py-0 fs-6">Totalt koldioxisutsläpp år {selectedYear} i miljoner ton.</p>}
            <Col style={{height: 40}}>
                <ResponsiveBarCanvas
                    data={fossil.getYearTotal(selectedYear)}
                    keys={[
                    'total'
                    ]}
                    indexBy="id"
                    maxValue={fossil.highestSource()}
                    margin={{ top: 0, right:10, bottom: 10, left: 10 }}
                    padding={0.3}
                    
                    layout="horizontal"
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={{ scheme: 'nivo' }}
                    
                    enableGridY={false}
                    enableGridX={false}
                    axisTop={null}
                    axisRight={null}
                    axisLeft={null}
                    axisBottom={null}
                    role="application"
                    ariaLabel="Total CO2 per year"
                />
            </Col>
        </Row>

        <Row>
            <p className="my-0 py-0 fs-6">Koldioxisutsläpp per källa i miljoner ton.</p>
            <Col style={{height: 400}}>


                <ResponsivePieCanvas
                    data={data}
                    margin={{ top: 0, right: 80, bottom: 0, left: 80 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    colors={{ scheme: 'nivo' }}
                    borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                        'darker',
                        0.6
                        ]
                    ]
                    }}
                    arcLinkLabelsSkipAngle={8}
                    arcLinkLabelsTextColor="#333333"
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: 'color' }}
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor="#333333"
                     
                />
            </Col>
        </Row>
        <Row>
            <Col className="pb-2">
                <Form.Range min={1880} max={2010} value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}/>
            </Col>
        </Row>
            </>
      )
        }