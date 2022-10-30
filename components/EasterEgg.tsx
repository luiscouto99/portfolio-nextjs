import React from 'react'
import Sketch from "react-p5";
import p5Types from "p5";
import { useWindowWidth } from '../hooks/useWindowWidth';
import { useWindowHeight } from '../hooks/useWindowHeight';

let video: any;
const EasterEgg = () => {
    const screenWidth = useWindowWidth();
    const screenHeight = useWindowHeight();

    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(screenWidth, screenHeight).parent(canvasParentRef);

        video = p5.createCapture(p5.VIDEO);
        video.size(p5.width, p5.height);
        video.hide();
    };

    const draw = (p5: p5Types) => {
        p5.background(255);
        p5.translate(p5.width, 0);
        p5.scale(-1, 1);

        let gridSize = p5.int(p5.map(1500, p5.width, 0, 5, 50));
        video.loadPixels();
        for (let y = 0; y < p5.height; y += gridSize) {
            for (let x = 0; x < p5.width; x += gridSize) {

                let index = (y * p5.width + x) * 4;
                let r = video.pixels[index];
                let dia = p5.map(r, 0, 255, gridSize, 2);

                p5.fill(0);
                p5.noStroke();
                p5.circle(x + gridSize / 2, y + gridSize / 2, dia);
            }
        }
    };
    return <Sketch setup={setup} draw={draw} />;
}

export default EasterEgg