import React from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5';

let video: any;
const EasterEgg = () => {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight - 5).parent(canvasParentRef);
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight - 5);
    video = p5.createCapture(p5.VIDEO);
    video.size(p5.width, p5.height);
    video.hide();
  };

  function windowResized(p5: p5Types) {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight - 5);
    video.size(p5.width, p5.height);
  }

  const draw = (p5: p5Types) => {
    p5.background(255);
    p5.translate(p5.width, 0);
    p5.scale(-1, 1);

    const gridSize = p5.int(p5.map(0, p5.width, 0, p5.height, p5.width));
    let offSet = Math.floor(gridSize / 100);

    if (offSet < 8) {
      offSet = 8;
    }

    video.loadPixels();

    for (let y = 0; y < p5.height; y += offSet) {
      for (let x = 0; x < p5.width; x += offSet) {
        const index = (y * p5.width + x) * 4;
        const r = video.pixels[index];
        const circleSize = p5.map(r, 0, 255, offSet, 2);
        p5.fill(0);
        p5.noStroke();
        p5.circle(x + offSet / 2, y + offSet / 2, circleSize);
      }
    }
  };
  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};

export default EasterEgg;
