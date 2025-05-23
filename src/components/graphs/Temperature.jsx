import React from "react";
import { Row, Col } from "react-bootstrap";
import { ResponsiveLine } from "@nivo/line";

import { getFormatedData } from "../../utils/Dataset2_Global_Temp";
import { getTotalData } from "../../utils/Dataset1_Global_Emissions";

export default function Temperature(){
  const data = [getFormatedData(), getTotalData()];

  return(
    <Row>
      <Col style={{height: 400}}>
        <ResponsiveLine
          data={data}
          margin={{ top: 10, right: 160, bottom: 50, left: 60 }}
          xScale={{ type: 'linear', stacked: false, min: 1880, max: 2017 }}
          yScale={{ type: 'linear', stacked: false, min: "auto", max: "auto" }}
          yFormat=" >-.2f"
          curve="monotoneX"
          axisTop={null}
          axisRight={{
            tickValues: [100],
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            format: '.2f',
            legend: 'Utsläpp',
            
            legendPosition: 'middle',
            legendOffset: 50,
          }}
          axisBottom={{
            tickValues: [1900, 1920, 1940, 1960, 1980, 2000],
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'år',
            legendOffset: 33,
            legendPosition: 'middle',
          }}
          axisLeft={{
            tickValues: [0, 0.50, 1.00, 1.50, 2.00, 2.50],
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            format: '.2f',
            legend: 'Temperaturökning i grader C',
            legendOffset: -50,
            legendPosition: 'middle',
          }}
          enableGridX={false}
          colors={{ scheme: 'spectral' }}
          lineWidth={1}
          pointSize={4}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={1}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
          enableGridY={true}
          gridXValues={[0, 0.050, 0.100, 0.150, 0.200, 0.250]}
          gridYValues={[0, 500, 1000, 1500, 2000, 2500]}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 140,
              translateY: 0,
              itemsSpacing: 2,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 12,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
    
      </Col>
    </Row>
  );
}