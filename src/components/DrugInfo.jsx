import {
    Box,
    Button,
    DarkMode, Fade, Flex,
    LightMode,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay, Slide,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";
import {IconHelp, IconInfoCircle, IconX} from "@tabler/icons-react";
import {useState} from "react";
import useDiseaseStore from "../stores/diseases";
import Visualizer from "./Visualizer";

const DrugInfo = (props) => {
    const drugName = useDiseaseStore(state => state.drugName);
    const drugInfo = useDiseaseStore(state => state.drugInfo);
    const disease = useDiseaseStore(state => state.disease);
    const [showInfo, setShowInfo] = useState(false);
    const [showHelp, setShowHelp] = useState(false);

    if (!drugName) {
        return <Text color="white">
            {disease.disease_name ? "Coming Soon!" : "Search for a disease to get started"}
        </Text>
    }

    return <DarkMode>
        <Visualizer />

        <Button
            onClick={() => setShowInfo(true)} variant="ghost" colorScheme="gray"
            position="absolute" right="6" top="6" textAlign="right" fontWeight="normal" p="2" pl="3"
        >
            {drugName}
            <Box
                as={IconInfoCircle}
                onClick={() => setShowInfo(true)}
                p=".2em"
                display="inline"
                h="1.6em"
                w="1.6em"
                ml="1"
                minW="0"
                position="relative"
                bottom=".1em"
            />
        </Button>

        <Flex position="absolute" bottom="6" right="6" color="gray.200" direction="row">
            {showHelp && "Scroll to zoom. Left click to rotate. Right click to pan. Double click to play audio."}
            <Button
                onClick={() => setShowHelp(!showHelp)}
                variant="ghost"
                colorScheme="gray"
                p=".3em"
                display="inline"
                h="2em"
                w="2em"
                minW="0"
                ml="2"
                position="relative"
                bottom=".3em"
            >
                {showHelp ? <IconX /> : <IconHelp />}
            </Button>
        </Flex>

        <Modal isOpen={showInfo} onClose={() => setShowInfo(false)} isCentered>
            <ModalOverlay />
            <ModalContent bg="white" minW="prose" maxW="70%">
                <LightMode>
                    <ModalHeader pb="1">{drugName} {drugInfo.alt_name && `(${drugInfo.alt_name})`}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody fontSize="sm" pb="6">
                        <Text><b>Covalent Docking Score</b>: {drugInfo.covalent} kcal/mol</Text>
                        <Text><b>Confidence
                        </b>: ~{drugInfo.confidence}%</Text>

                        <TableContainer border="1px" rounded="lg" borderColor="gray.100" shadow="lg" mt="4" mb="8">
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th fontFamily="body" textTransform="none">Score (kcal/mol)</Th>
                                        <Th fontFamily="body" textTransform="none">Confidence</Th>
                                        <Th fontFamily="body" textTransform="none">Interpretation</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {drugInfo.table.map(({score, confidence, interpretation, highlighted}, i) => {
                                            console.log(highlighted)
                                            return (<Tr key={i}>
                                                <Td bg={highlighted ? "primary.100" : "chakra-body-bg"}>{score}</Td>
                                                <Td bg={highlighted ? "primary.100" : "chakra-body-bg"}>{confidence}</Td>
                                                <Td bg={highlighted ? "primary.100" : "chakra-body-bg"}>{interpretation}</Td>
                                            </Tr>)
                                        }
                                    )}
                                </Tbody>
                            </Table>
                        </TableContainer>

                        <Text><b>Other Drug Candidates</b>: {drugInfo.alt}</Text>
                    </ModalBody>
                </LightMode>
            </ModalContent>
        </Modal>
    </DarkMode>;
};

export default DrugInfo;
