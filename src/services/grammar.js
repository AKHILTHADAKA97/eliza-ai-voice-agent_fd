// Fast, client-side real-time grammar and spell auto-correction dictionary & engine

const CONTRACTIONS = {
  dont: "don't",
  cant: "can't",
  wont: "won't",
  didnt: "didn't",
  doesnt: "doesn't",
  isnt: "isn't",
  arent: "aren't",
  wasnt: "wasn't",
  werent: "weren't",
  hasnt: "hasn't",
  havent: "haven't",
  hadnt: "hadn't",
  couldnt: "couldn't",
  shouldnt: "shouldn't",
  wouldnt: "wouldn't",
  youre: "you're",
  theyre: "they're",
  weve: "we've",
  theyve: "they've",
  youve: "you've",
  im: "I'm",
  ive: "I've",
  ill: "I'll",
  id: "I'd",
  youll: "you'll",
  theyll: "they'll",
  thats: "that's",
  whats: "what's",
  hows: "how's",
  wheres: "where's",
  theres: "there's",
  lets: "let's",
  itll: "it'll",
};

const COMMON_TYPOS = {
    // Common general typos & misspellings
    grammer: "grammar",
    gramer: "grammar",
    gramar: "grammar",
    fropdown: "dropdown",
    fropdowns: "dropdowns",
    modelall: "models",
    teh: "the",
    hte: "the",
    recieve: "receive",
    recieved: "received",
    recieving: "receiving",
    seperate: "separate",
    seperated: "separated",
    seperating: "separating",
    definately: "definitely",
    definatly: "definitely",
    occured: "occurred",
    occuring: "occurring",
    untill: "until",
    alot: "a lot",
    wich: "which",
    becuase: "because",
    beleive: "believe",
    wierd: "weird",
    thier: "their",
    truely: "truly",
    goverment: "government",
    enviroment: "environment",
    tommorrow: "tomorrow",
    tomorow: "tomorrow",
    accomodate: "accommodate",
    embarass: "embarrass",
    neccessary: "necessary",
    necesary: "necessary",
    acheive: "achieve",
    existance: "existence",
    occurance: "occurrence",
    refering: "referring",
    intrest: "interest",
    intresting: "interesting",
    diffrent: "different",
    compleatly: "completely",
    usfull: "useful",
    helpfull: "helpful",
    progam: "program",
    progams: "programs",
    programing: "programming",
    fucntion: "function",
    fucntions: "functions",
    varible: "variable",
    varibles: "variables",
    libary: "library",
    libaries: "libraries",
    databse: "database",
    databses: "databases",
    lenght: "length",
    heigth: "height",
    hight: "height",
    exmaple: "example",
    exmaples: "examples",
    resposne: "response",
    resposnes: "responses",
    qustion: "question",
    qustions: "questions",
    exaplin: "explain",
    alright: "all right",
    anycase: "any case",
    cannot: "can not",
    calender: "calendar",
    collegue: "colleague",
    concious: "conscious",
    foregin: "foreign",
    gaurentee: "guarantee",
    happend: "happened",
    ignorant: "ignorant",
    independant: "independent",
    mispell: "misspell",
    mispelled: "misspelled",
    noticable: "noticeable",
    oppurtunity: "opportunity",
    persue: "pursue",
    posession: "possession",
    priviledge: "privilege",
    reccomend: "recommend",
    recommand: "recommend",
    succesful: "successful",
    suprise: "surprise",
    threshhold: "threshold",
    appreance: "appearance",
    appriciate: "appreciate",
    begining: "beginning",
    beeing: "being",
    bussiness: "business",
    cematography: "cinematography",
    definate: "definite",
    enviorment: "environment",
    experiance: "experience",
    finaly: "finally",
    foriegn: "foreign",
    greatful: "grateful",
    hapiness: "happiness",
    indepent: "independent",
    liason: "liaison",
    publically: "publicly",
    refered: "referred",
    relevent: "relevant",
    restaraunt: "restaurant",
    resturant: "restaurant",
    rhym: "rhyme",
    satsify: "satisfy",
    sepperate: "separate",
    serius: "serious",
    sponser: "sponsor",
    successfull: "successful",
    wether: "weather",
};

// Days and months to capitalize
const PROPER_NOUNS = [
  "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday",
  "january", "february", "march", "april", "may", "june", "july", "august",
  "september", "october", "november", "december",
  "python", "javascript", "typescript", "react", "fastapi", "flask", "redis", "docker", "ollama", "eliza"
];

function matchCase(original, replacement) {
  if (!original || !replacement) return replacement;
  // All uppercase: e.g. "DONT" -> "DON'T"
  if (original === original.toUpperCase() && original.length > 1) {
    return replacement.toUpperCase();
  }
  // Titlecase: e.g. "Dont" -> "Don't"
  if (original[0] === original[0].toUpperCase()) {
    return replacement.charAt(0).toUpperCase() + replacement.slice(1);
  }
  return replacement;
}

export function correctSingleWord(word) {
  if (!word) return word;
  const lower = word.toLowerCase();

  // Standalone 'i'
  if (lower === "i") return "I";

  // Check contractions
  if (CONTRACTIONS[lower]) {
    return matchCase(word, CONTRACTIONS[lower]);
  }

  // Check common typos
  if (COMMON_TYPOS[lower]) {
    return matchCase(word, COMMON_TYPOS[lower]);
  }

  // Proper nouns capitalization
  if (PROPER_NOUNS.includes(lower)) {
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return word;
}

export function correctGrammar(text) {
  if (!text || typeof text !== "string") return "";

  // Split into tokens preserving spaces and punctuation
  // Pattern matches words, whitespace, or punctuation
  const tokenRegex = /([a-zA-Z0-9_']+|\s+|[^\s\w'])/g;
  const tokens = text.match(tokenRegex) || [text];

  let isStartOfSentence = true;

  const correctedTokens = tokens.map((token) => {
    // If it's punctuation
    if (/^[.!?\n]+$/.test(token)) {
      isStartOfSentence = true;
      return token;
    }

    // If it's spaces
    if (/^\s+$/.test(token)) {
      return token;
    }

    // If it's a word
    if (/^[a-zA-Z0-9_']+$/.test(token)) {
      let corrected = correctSingleWord(token);

      // Capitalize first letter if start of sentence
      if (isStartOfSentence && corrected.length > 0) {
        corrected = corrected.charAt(0).toUpperCase() + corrected.slice(1);
        isStartOfSentence = false;
      } else {
        isStartOfSentence = false;
      }

      return corrected;
    }

    return token;
  });

  return correctedTokens.join("");
}

export function autoCorrectOnDelimiter(text) {
  if (!text) return text;

  // Find the last word typed before trailing spaces/punctuation
  const match = text.match(/^(.*?)(\b[a-zA-Z0-9_']+\b)(\s*[\s.,?!])$/);
  if (!match) return text;

  const [, prefix, lastWord, delimiter] = match;
  const correctedWord = correctSingleWord(lastWord);

  // Check if this word starts a sentence
  const trimmedPrefix = prefix.trimEnd();
  const isStart = trimmedPrefix.length === 0 || /[.!?\n]$/.test(trimmedPrefix);

  const finalWord = isStart
    ? correctedWord.charAt(0).toUpperCase() + correctedWord.slice(1)
    : correctedWord;

  if (finalWord !== lastWord) {
    return prefix + finalWord + delimiter;
  }

  return text;
}

