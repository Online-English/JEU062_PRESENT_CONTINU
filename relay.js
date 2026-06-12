// relay.js
const questionsData = { "affirmative": [], "negative": [], "interrogative": [], "short": [] };

const baseVerbs = [
    { base: "play", ing: "playing", objSing: "football", objPlur: "video games", ruleType: "gen" },
    { base: "watch", ing: "watching", objSing: "TV", objPlur: "movies", ruleType: "gen" },
    { base: "go", ing: "going", objSing: "to school", objPlur: "to the gym", ruleType: "gen" },
    { base: "study", ing: "studying", objSing: "English", objPlur: "history", ruleType: "gen" },
    { base: "like", ing: "liking", objSing: "the film", objPlur: "the books", ruleType: "drop-e" },
    { base: "speak", ing: "speaking", objSing: "French", objPlur: "Spanish", ruleType: "gen" },
    { base: "read", ing: "reading", objSing: "a book", objPlur: "magazines", ruleType: "gen" },
    { base: "listen", ing: "listening", objSing: "to music", objPlur: "to podcasts", ruleType: "gen" },
    { base: "see", ing: "seeing", objSing: "a movie", objPlur: "the stars", ruleType: "gen" },
    { base: "live", ing: "living", objSing: "in London", objPlur: "in Paris", ruleType: "drop-e" },
    { base: "work", ing: "working", objSing: "at a school", objPlur: "in an office", ruleType: "gen" },
    { base: "drive", ing: "driving", objSing: "a car", objPlur: "a truck", ruleType: "drop-e" },
    { base: "run", ing: "running", objSing: "fast", objPlur: "now", ruleType: "double" },
    { base: "eat", ing: "eating", objSing: "chocolate", objPlur: "vegetables", ruleType: "gen" },
    { base: "drink", ing: "drinking", objSing: "milk", objPlur: "soda", ruleType: "gen" },
    { base: "cook", ing: "cooking", objSing: "dinner", objPlur: "great meals", ruleType: "gen" },
    { base: "clean", ing: "cleaning", objSing: "the room", objPlur: "the house", ruleType: "gen" },
    { base: "write", ing: "writing", objSing: "an email", objPlur: "stories", ruleType: "drop-e" },
    { base: "sing", ing: "singing", objSing: "a pop song", objPlur: "songs", ruleType: "gen" },
    { base: "dance", ing: "dancing", objSing: "hip-hop", objPlur: "salsa", ruleType: "drop-e" },
    { base: "teach", ing: "teaching", objSing: "math", objPlur: "languages", ruleType: "gen" },
    { base: "fly", ing: "flying", objSing: "a drone", objPlur: "kites", ruleType: "gen" },
    { base: "swim", ing: "swimming", objSing: "in the pool", objPlur: "in the ocean", ruleType: "double" },
    { base: "buy", ing: "buying", objSing: "new clothes", objPlur: "shoes", ruleType: "gen" },
    { base: "stop", ing: "stopping", objSing: "the car", objPlur: "the noise", ruleType: "double" }
];

const subjectsSingular3rd = ["He", "She", "It", "Tom", "Sarah", "The cat", "My brother", "The teacher", "My mom", "Alex"];
const subjectsOtherPersons = ["I", "You", "We", "They", "My friends", "The students"];

function getRuleExplanation(type) {
    if (type === "drop-e") return "Verbe se terminant par -e : on supprime le -e avant d'ajouter -ing.";
    if (type === "double") return "Verbe court (CVC) : on double la consonne finale avant d'ajouter -ing.";
    return "Règle générale : on ajoute simplement la terminaison -ing au verbe.";
}

// 1. AFFIRMATIF (150 Qs)
for (let i = 0; i < 75; i++) {
    let sub = subjectsSingular3rd[i % subjectsSingular3rd.length]; let v = baseVerbs[i % baseVerbs.length];
    questionsData.affirmative.push({ text: `${sub} ... (${v.base}) ${v.objSing} right now.`, answer: `is ${v.ing}`, rule: `Sujet singulier (3ème pers.) : utilisez l'auxiliaire 'is' + v-ing. ${getRuleExplanation(v.ruleType)}` });
}
for (let i = 0; i < 75; i++) {
    let sub = subjectsOtherPersons[i % subjectsOtherPersons.length]; let v = baseVerbs[i % baseVerbs.length];
    let aux = sub === "I" ? "am" : "are";
    questionsData.affirmative.push({ text: `${sub} ... (${v.base}) ${v.objPlur} at the moment.`, answer: `${aux} ${v.ing}`, rule: `Sujet '${sub}' : utilisez l'auxiliaire '${aux}' + v-ing. ${getRuleExplanation(v.ruleType)}` });
}

// 2. NÉGATIF (150 Qs)
for (let i = 0; i < 75; i++) {
    let sub = subjectsSingular3rd[i % subjectsSingular3rd.length]; let v = baseVerbs[i % baseVerbs.length];
    questionsData.negative.push({ text: `${sub} ... (not / ${v.base}) ${v.objSing}.`, answer: `isn't ${v.ing}`, rule: "Forme négative (3ème pers. sing.) : utilisez 'isn't' (ou 'is not') + v-ing." });
}
for (let i = 0; i < 75; i++) {
    let sub = subjectsOtherPersons[i % subjectsOtherPersons.length]; let v = baseVerbs[i % baseVerbs.length];
    let auxNot = sub === "I" ? "am not" : "aren't";
    questionsData.negative.push({ text: `${sub} ... (not / ${v.base}) ${v.objPlur}.`, answer: `${auxNot} ${v.ing}`, rule: `Forme négative avec '${sub}' : utilisez '${auxNot}' + v-ing.` });
}

// 3. INTERROGATIF (150 Qs)
for (let i = 0; i < 75; i++) {
    let sub = subjectsSingular3rd[i % subjectsSingular3rd.length]; let v = baseVerbs[i % baseVerbs.length];
    questionsData.interrogative.push({ text: `... ${sub.toLowerCase()} (${v.base}) ${v.objSing}?`, answer: `Is ${sub.toLowerCase()} ${v.ing}`, rule: "Question au Présent Continu : Auxiliaire (Is) + sujet + v-ing ?" });
}
for (let i = 0; i < 75; i++) {
    let sub = subjectsOtherPersons[i % subjectsOtherPersons.length]; let v = baseVerbs[i % baseVerbs.length];
    let aux = sub === "I" ? "Am" : "Are";
    let subText = sub === "I" ? "I" : sub.toLowerCase();
    questionsData.interrogative.push({ text: `... ${subText} (${v.base}) ${v.objPlur}?`, answer: `${aux} ${subText} ${v.ing}`, rule: `Question avec '${sub}' : Auxiliaire (${aux}) + sujet + v-ing ?` });
}

// 4. RÉPONSES BRÈVES (150 Qs)
const proSing = ["he", "she", "it"]; const proPlur = ["they", "we", "you"];
for (let i = 0; i < 75; i++) {
    let p = proSing[i % proSing.length]; let v = baseVerbs[i % baseVerbs.length];
    questionsData.short.push({ text: `Is ${p} ${v.ing} ${v.objSing}? Yes, ${p} ...`, answer: `is`, rule: "Réponse brève affirmative : reprenez simplement l'auxiliaire 'is'." });
}
for (let i = 0; i < 75; i++) {
    let p = proPlur[i % proPlur.length]; let v = baseVerbs[i % baseVerbs.length];
    questionsData.short.push({ text: `Are ${p} ${v.ing} ${v.objPlur}? No, ${p} ...`, answer: `aren't`, rule: "Réponse brève négative : reprenez l'auxiliaire sous sa forme contractée 'aren't'." });
}