import {Synth} from "tone";
import {colorAlpha, colorRaw} from "../theming/theme";

// config
const atomNote = {
    "C": "C4",      // Carbon
    "N": "D4",      // Nitrogen
    "O": "F4",      // Oxygen
    "H": "G4",      // Hydrogen
    "F": "A5",      // Fluorine
};
const atomColor = { // todo go over colors w/ Emily
    active: colorRaw("yellow.500"),     // Playing sound    (Yellow)
    C: colorRaw("gray.500"),            // Carbon           (Gray)
    N: colorRaw("blue.500"),            // Nitrogen         (Blue)
    O: colorRaw("red.500"),             // Oxygen           (Red)
    H: colorRaw("white"),               // Hydrogen         (White)
    F: colorRaw("green.500"),           // Hydrogen         (White)
};
const bondColor = [
    colorRaw("whiteAlpha.800"),            // single bonds
    colorAlpha("green.300", 0.8),   // double bonds
    colorAlpha("blue.300", 0.8),    // triple bonds

    colorAlpha("purple.300", 0.8)   // aromatic bonds
];


const controls = {
    view: {x: 0, y: 0, zoom: 30},
    viewPos: {prevX: null, prevY: null, isDragging: false},
}

// note that large proteins crash the visualizer when playing audio
// todo clean up code
const Molecule = (p5) => {
    const noteLength = 0.3; // s
    const noteDelay = 160;  // ms
    let atoms = [];
    let bonds = [];
    const bgColor = colorRaw("gray.900");
    let w = 600;
    let h = 400;
    // let view = {x: 0, y: 0, zoom: 30 } // , isDragging: false, prevX: 0, prevY: 0}; for now, rotate > pan
    let zoom = 30;

    const synth = new Synth().toDestination();
    let synthTimeout = null;
    let isPlaying = false;
    let activeAtomIdx = 0;

    p5.setup = () => {
        const canvas = p5.createCanvas(600, 400, p5.WEBGL);
        canvas.oncontextmenu = (ev => ev.preventDefault());
    };

    p5.draw = () => {
        p5.background(bgColor);
        p5.orbitControl();
        p5.scale(zoom);
        p5.translate(controls.view.x, controls.view.y);

        // draw atoms
        p5.noStroke();
        for (let i = 0; i < atoms.length; i++) {
            const {x, y, z, element} = atoms[i];

            p5.push();
            p5.translate(x, y, z);  // Use pre-scaled coordinates from JSON

            if (i === activeAtomIdx && isPlaying) {
                p5.fill(atomColor["active"]);  // Highlighted atom in golden yellow
                p5.sphere(.4);           // Larger sphere for the highlighted atom
            } else {
                p5.fill(atomColor[element] ?? "#ffffff");  // Assigns color based on atom type
                p5.sphere(.3);                    // Smaller size for regular atoms
            }
            p5.pop();
        }

        // draw bonds
        p5.strokeWeight(3);
        for (const {start, end, type} of bonds) {
            p5.stroke(bondColor[type - 1]);
            const a = atoms[start];
            const b = atoms[end];
            p5.line(
                a.x, a.y, a.z,
                b.x, b.y, b.z
            );
        }
    };

    // play/pause music on double-click
    // todo add dedicated button?
    p5.doubleClicked = () => {
        if (isPlaying) {
            isPlaying = false;
            clearTimeout(synthTimeout);
        } else {
            isPlaying = true;
            playSound();
        }
    }

    p5.updateWithProps = ({w, h, data}) => {
        p5.resizeCanvas(w, h);
        // bgColor = bg; // todo talk to Emily abt light/dark mode

        atoms = data?.atoms ?? [];
        bonds = data?.bonds ?? [];
    }

    const playSound = () => {
        if (activeAtomIdx < atoms.length) {
            synth.triggerAttackRelease(atomNote[atoms[activeAtomIdx].element], noteLength);
            activeAtomIdx++;

            synthTimeout = setTimeout(playSound, noteDelay)
        } else {
            isPlaying = false;
            activeAtomIdx = 0;
            synthTimeout = null;
        }
    }

    /*p5.mouseWheel = (ev) => {
        console.log(ev)
        const {x, y, deltaY} = ev;
        const direction = deltaY > 0 ? -1 : 1;
        const factor = 2;
        const deltaZoom = 1 * direction * factor;

        const wx = (x - view.x) / (w * view.zoom);
        const wy = (y - controls.view.y) / (h * view.zoom);

        view.x -= wx * w * deltaZoom;
        view.y -= wy * h * deltaZoom;
        view.zoom += deltaZoom;
    }*/
}
export default Molecule;
