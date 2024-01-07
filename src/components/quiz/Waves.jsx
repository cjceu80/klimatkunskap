import React from "react";

import Wave from 'react-wavify';

const WAVE_WIDTH = "100%";

export default function Waves() {
    <>
    <Wave fill='#a9ebf4'
        paused={false}
        style={{ width: WAVE_WIDTH, height: 200, position: "absolute", bottom: 0 }}
        options={{
          container: "div",
          height: 18,
          amplitude: 15,
          speed: 0.25,
          points: 3
        }}
      />
      <Wave fill='#4cd6e7'
        paused={false}
        style={{ width: WAVE_WIDTH, height: 200, position: "absolute", bottom: 0 }}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.3,
          points: 3
        }}
      />
    </>
}