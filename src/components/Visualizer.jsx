import Molecule from "../lib/molecule";

import {Text, useColorModeValue} from "@chakra-ui/react";
import {ReactP5Wrapper} from "@p5-wrapper/react";
import {useEffect, useState} from "react";
import useDiseaseStore from "../stores/diseases";
import {colorRaw} from "../theming/theme";

const Visualizer = (props) => {
    const drug = useDiseaseStore(state => state.drugMolecule);
    const [w, setW] = useState(window.innerWidth);
    const [h, setH] = useState(window.innerHeight);

    useEffect(() => {
        // add listener to resize canvas
        const handleResize = () => {
            setW(window.innerWidth);
            setH(window.innerHeight);
        }
        window.addEventListener("resize", handleResize);
    }, []);

    return <ReactP5Wrapper
        sketch={Molecule}
        w={w} h={h}
        data={drug}
        // bg={colorRaw(useColorModeValue("gray.200", "gray.700"))}
    />;
};

export default Visualizer;
