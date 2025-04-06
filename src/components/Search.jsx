import {Button, Flex} from "@chakra-ui/react";
import {useState} from "react";
import {TextInput} from "./ui/Inputs";
import useDiseaseStore from "../stores/diseases";

// todo add icon
const Search = (props) => {
    const aliases = useDiseaseStore(state => state.aliases);
    const setDisease = useDiseaseStore(state => state.setDisease);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    // instead of showing all results, truncate to top-n results
    const search = (ev) => {
        let value = ev.target.value;
        setQuery(value);

        if (value === "") {
            setResults([]);
        }
        else {
            value = value.toLowerCase();
            let searchResults = new Set();
            for (const alias of Object.keys(aliases)) {
                if (alias.includes(value)) {
                    searchResults.add(aliases[alias]);
                    // if (searchResults.size > 8) {
                    //     break;
                    // }
                }
            }

            setResults([...searchResults]);
        }
    }

    const selectResult = (name) => {
        setDisease(name);
        setQuery(name);
        setResults([]);
    }

    // todo keyboard accessibility, add icon
	return <Flex position="absolute" top="6" left="6" direction="column" {...props}>
        <TextInput value={query} onChange={search} mb="2" w="" p="3" placeholder="search for a disease"/>
        <Flex
            direction="column" bg="chakra-body-bg" m="2" rounded="lg" maxH="80vh" overflow="hidden"
            className="scrollbar-rounded"
        >
            {results.map(name => (
                <Button
                    key={name} onClick={() => selectResult(name)}
                    variant="ghost" colorScheme="gray" rounded="none" fontWeight="normal" justifyContent="start"
                    px="3" py="2" fontSize="sm"
                >
                    {name}
                </Button>
            ))}
        </Flex>
    </Flex>;
};

export default Search;
