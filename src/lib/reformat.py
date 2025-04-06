import json

fname = "../data/proteins.json"

f = open(fname, "r")
data = json.load(f)
atoms = data["atoms"]
bonds = data["bonds"]
f.close()

# reformat drugs
# idx_of = {}
for i, atom in enumerate(atoms):
    idx_of[atom["label"]] = i

for bond in bonds:
    bond["start"] = idx_of[bond["start"]]
    bond["end"] = idx_of[bond["end"]]

output = {"atoms": atoms, "bonds": bonds}

# reformat proteins
# for atom in atoms:
#     atom["label"] = atom.pop("name")
#
# newBonds = []
# for bond in bonds:
#     newBonds.append({
#         "start": bond[0],
#         "end": bond[1],
#         "type": 1
#     })
#
# output = {"atoms": atoms, "bonds": newBonds}

with open(fname, "w") as f:
    json.dump(output, f)
