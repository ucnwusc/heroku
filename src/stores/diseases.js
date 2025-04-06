import {create} from "zustand";
import diseaseData from "../data/diseases.json";
import drugData from "../data/drugs.json";
import nirmatrelvir from "../data/nirmatrelvir.json";
import lyrica from "../data/lyrica.json";
import aspirin from "../data/aspirin.json";

/* todo migrate to fetching data from backend */
const useDiseaseStore = create((set, get) => ({
    diseaseData: [], // all disease data; todo use backend data fetch instead (store only display names)
    aliases: {}, // alias: id; aliases are stored lowercase for faster search
    disease: {}, // data for user-selected disease

    drugName: "",
    drugMolecule: null,
    drugInfo: {},

    fetch: () => {
        // initalize data store
        let diseases = {}
        let aliases = {};
        for (const d of diseaseData) {
            const id = d["disease_name"];
            diseases[id] = d;

            aliases[id.toLowerCase()] = id;
            for (const alias of d["other_names"]) {
                aliases[alias.toLowerCase()] = id;
            }
        }

        set({diseaseData: diseases, aliases: aliases});
    },
    setDisease: (id) => {
        // todo eliminate after all drugs are mapped
        let data = {
            drugName: "",
            drugMolecule: null,
            drugInfo: null,
        };
        if (id === "Covid") {
            data = {
                drugName: "Nirmatrelvir",
                drugMolecule: nirmatrelvir,
                drugInfo: drugData["Nirmatrelvir"]
            };
        } else if (id === "Epilepsy") {
            data = {
                drugName: "Lyrica",
                drugMolecule: lyrica,
                drugInfo: drugData["Lyrica"]
            };
        } else if (id === "Arthritis") {
            data = {
                drugName: "Aspirin",
                drugMolecule: aspirin,
                drugInfo: drugData["Aspirin"]
            };
        }
        console.log(data);

        set(state => ({disease: state.diseaseData[id], ...data}));
    },
    prepDemo: () => {
        get().fetch();
        get().setDisease("Covid");
    }
}));

export default useDiseaseStore;
