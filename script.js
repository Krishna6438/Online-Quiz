/* =================== QUIZ DATA =================== */
const quizData = {
    general: {
        easy: [
            { question: "What is the capital of France?", options: ["London", "Berlin", "Paris", "Madrid"], correct: 2 },
            { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correct: 1 },
            { question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: 3 },
            { question: "Who wrote 'Romeo and Juliet'?", options: ["Jane Austen", "William Shakespeare", "Charles Dickens", "Mark Twain"], correct: 1 },
            { question: "What is the smallest country in the world?", options: ["Monaco", "Liechtenstein", "Vatican City", "San Marino"], correct: 2 },
            { question: "Which year did the Titanic sink?", options: ["1912", "1905", "1920", "1898"], correct: 0 },
            { question: "What is the currency of Japan?", options: ["Won", "Yuan", "Yen", "Rupee"], correct: 2 },
            { question: "How many sides does a hexagon have?", options: ["5", "6", "7", "8"], correct: 1 },
            { question: "What is the largest mammal in the world?", options: ["African Elephant", "Giraffe", "Blue Whale", "Hippopotamus"], correct: 2 },
            { question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correct: 2 },
            { question: "What is the fastest land animal?", options: ["Lion", "Cheetah", "Greyhound", "Pronghorn"], correct: 1 },
            { question: "Which country is home to the kangaroo?", options: ["Brazil", "Australia", "South Africa", "Malaysia"], correct: 1 }
        ],
        medium: [
            { question: "What is the chemical symbol for Gold?", options: ["Go", "Gd", "Au", "Ag"], correct: 2 },
            { question: "Who painted the Mona Lisa?", options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"], correct: 0 },
            { question: "What is the most spoken language in the world by native speakers?", options: ["English", "Spanish", "Mandarin Chinese", "Hindi"], correct: 2 },
            { question: "Which empire built Machu Picchu?", options: ["Aztec", "Inca", "Maya", "Olmec"], correct: 1 },
            { question: "What is the smallest bone in the human body?", options: ["Stapes", "Femur", "Humerus", "Tibia"], correct: 0 },
            { question: "How many strings does a violin have?", options: ["4", "5", "6", "8"], correct: 0 },
            { question: "What year did World War II end?", options: ["1943", "1944", "1945", "1946"], correct: 2 },
            { question: "Which planet has the most moons?", options: ["Saturn", "Jupiter", "Uranus", "Neptune"], correct: 1 },
            { question: "What is the deepest ocean trench?", options: ["Tonga Trench", "Java Trench", "Mariana Trench", "Kuril-Kamchatka Trench"], correct: 2 },
            { question: "Who composed the 'Moonlight Sonata'?", options: ["Mozart", "Beethoven", "Bach", "Chopin"], correct: 1 },
            { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], correct: 2 },
            { question: "How many sides does a dodecagon have?", options: ["10", "11", "12", "13"], correct: 2 }
        ],
        hard: [
            { question: "What is the chemical formula for sulfuric acid?", options: ["H₂SO₃", "H₂SO₄", "HSO₄", "H₃SO₄"], correct: 1 },
            { question: "Which scientist developed the theory of general relativity?", options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Niels Bohr"], correct: 1 },
            { question: "What is the smallest prime number?", options: ["0", "1", "2", "3"], correct: 2 },
            { question: "Which country has the largest population in Africa?", options: ["Egypt", "Ethiopia", "Nigeria", "Democratic Republic of Congo"], correct: 2 },
            { question: "What is the most abundant element in the Earth's crust?", options: ["Silicon", "Aluminum", "Oxygen", "Iron"], correct: 2 },
            { question: "Who wrote 'One Hundred Years of Solitude'?", options: ["Pablo Neruda", "Gabriel García Márquez", "Jorge Luis Borges", "Carlos Fuentes"], correct: 1 },
            { question: "What is the speed of light in vacuum?", options: ["299,792 km/s", "199,792 km/s", "399,792 km/s", "99,792 km/s"], correct: 0 },
            { question: "How many bones are in the adult human body?", options: ["186", "206", "226", "246"], correct: 1 },
            { question: "What is the ISO 639-1 code for the English language?", options: ["en", "eng", "e", "English"], correct: 0 },
            { question: "Which year was the first iPhone released?", options: ["2005", "2006", "2007", "2008"], correct: 2 },
            { question: "What is the Planck constant approximately equal to?", options: ["6.626 × 10⁻³⁴ J·s", "6.626 × 10⁻³³ J·s", "6.626 × 10⁻³⁵ J·s", "6.626 × 10⁻³² J·s"], correct: 0 },
            { question: "Who was the first President of India?", options: ["Jawaharlal Nehru", "Dr. Rajendra Prasad", "Sardar Vallabhbhai Patel", "Abul Kalam Azad"], correct: 1 }
        ]
    },
    science: {
        easy: [
            { question: "What does photosynthesis produce?", options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"], correct: 1 },
            { question: "How many teeth does an adult human have?", options: ["28", "30", "32", "34"], correct: 2 },
            { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Lysosome"], correct: 1 },
            { question: "What type of animal is a penguin?", options: ["Mammal", "Reptile", "Bird", "Amphibian"], correct: 2 },
            { question: "What is the chemical formula for water?", options: ["H₂O", "H₃O", "H₂O₂", "H₂"], correct: 0 },
            { question: "What is the normal human body temperature?", options: ["36°C", "37°C", "38°C", "39°C"], correct: 1 },
            { question: "How many chambers does a human heart have?", options: ["2", "3", "4", "5"], correct: 2 },
            { question: "What is the process by which plants release water?", options: ["Photosynthesis", "Respiration", "Transpiration", "Fermentation"], correct: 2 },
            { question: "What element has the atomic number 1?", options: ["Helium", "Hydrogen", "Lithium", "Carbon"], correct: 1 },
            { question: "What is the SI unit of force?", options: ["Joule", "Watt", "Newton", "Pascal"], correct: 2 },
            { question: "Which organelle is responsible for protein synthesis?", options: ["Golgi Apparatus", "Lysosome", "Ribosome", "Endoplasmic Reticulum"], correct: 2 },
            { question: "What is the process of turning a liquid into a gas?", options: ["Condensation", "Evaporation", "Sublimation", "Deposition"], correct: 1 }
        ],
        medium: [
            { question: "What is the name of the protein in red blood cells?", options: ["Myoglobin", "Hemoglobin", "Chlorophyll", "Keratin"], correct: 1 },
            { question: "How many chromosomes do humans have?", options: ["23", "46", "48", "64"], correct: 1 },
            { question: "What is the pH of a neutral solution?", options: ["7", "1", "14", "0"], correct: 0 },
            { question: "What is the chemical symbol for Silver?", options: ["Si", "Ag", "Au", "Al"], correct: 1 },
            { question: "What is the process by which mRNA is synthesized?", options: ["Translation", "Transcription", "Replication", "Mutation"], correct: 1 },
            { question: "Which gland produces insulin?", options: ["Thyroid", "Pancreas", "Pituitary", "Adrenal"], correct: 1 },
            { question: "What is the second law of thermodynamics about?", options: ["Energy conservation", "Entropy", "Motion", "Force"], correct: 1 },
            { question: "What element is diamond made of?", options: ["Oxygen", "Silicon", "Carbon", "Nitrogen"], correct: 2 },
            { question: "What is the name of the outermost layer of the Earth?", options: ["Mantle", "Core", "Crust", "Lithosphere"], correct: 2 },
            { question: "What is the process of breaking down of rocks by water and wind?", options: ["Erosion", "Weathering", "Sedimentation", "Metamorphism"], correct: 1 },
            { question: "Which scientist discovered penicillin?", options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Edward Jenner"], correct: 1 },
            { question: "What is the name of the membrane surrounding the nucleus?", options: ["Plasma Membrane", "Nuclear Envelope", "Cell Wall", "Golgi Membrane"], correct: 1 }
        ],
        hard: [
            { question: "What is the name of the protein responsible for carrying oxygen?", options: ["Myoglobin", "Hemoglobin", "Collagen", "Elastin"], correct: 1 },
            { question: "What is the Avogadro constant?", options: ["6.022 × 10²³", "6.022 × 10²²", "6.022 × 10²⁴", "6.022 × 10²¹"], correct: 0 },
            { question: "What is the name of the enzyme that breaks down proteins?", options: ["Amylase", "Lipase", "Protease", "Kinase"], correct: 2 },
            { question: "What is the formula for calculating molarity?", options: ["M = moles/L", "M = grams/moles", "M = L/moles", "M = moles × L"], correct: 0 },
            { question: "What is the name of the process by which cells divide?", options: ["Mitosis", "Meiosis", "Binary Fission", "Budding"], correct: 0 },
            { question: "What is the standard enthalpy of formation of elements in their standard state?", options: ["0", "-1", "1", "Infinity"], correct: 0 },
            { question: "What is the name of the organelle that breaks down waste?", options: ["Mitochondria", "Lysosome", "Ribosome", "Golgi Apparatus"], correct: 1 },
            { question: "What is the osmotic pressure formula?", options: ["π = iMRT", "π = MRT", "π = i/MRT", "π = MT/R"], correct: 0 },
            { question: "What is the name of the layer of the Earth's atmosphere closest to the surface?", options: ["Stratosphere", "Troposphere", "Mesosphere", "Thermosphere"], correct: 1 },
            { question: "What is the Gibbs free energy equation?", options: ["G = H + TS", "G = H - TS", "G = -H + TS", "G = H × TS"], correct: 1 },
            { question: "What is the name of the bond between amino acids?", options: ["Hydrogen Bond", "Ionic Bond", "Peptide Bond", "Covalent Bond"], correct: 2 },
            { question: "What is the electron configuration rule known as?", options: ["Hund's Rule", "Pauli's Principle", "Aufbau Principle", "Heisenberg Principle"], correct: 2 }
        ]
    },
    history: {
        easy: [
            { question: "In which year did Christopher Columbus reach America?", options: ["1491", "1492", "1493", "1500"], correct: 1 },
            { question: "Who was the first President of the United States?", options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "Andrew Jackson"], correct: 1 },
            { question: "In which year did the Titanic sink?", options: ["1910", "1911", "1912", "1913"], correct: 2 },
            { question: "Who invented the light bulb?", options: ["Nikola Tesla", "Alexander Graham Bell", "Thomas Edison", "Benjamin Franklin"], correct: 2 },
            { question: "What year did the Berlin Wall fall?", options: ["1987", "1988", "1989", "1990"], correct: 2 },
            { question: "Who was the first man to walk on the moon?", options: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Yuri Gagarin"], correct: 1 },
            { question: "In which year did the American Revolution begin?", options: ["1773", "1774", "1775", "1776"], correct: 2 },
            { question: "Who was the first British Prime Minister?", options: ["Winston Churchill", "Edmund Burke", "Robert Walpole", "Lord North"], correct: 2 },
            { question: "What year did World War I end?", options: ["1916", "1917", "1918", "1919"], correct: 2 },
            { question: "Who was Julius Caesar?", options: ["King", "Philosopher", "Military Leader", "Priest"], correct: 2 },
            { question: "In which century did the Renaissance occur?", options: ["14th-17th", "15th-18th", "13th-16th", "16th-19th"], correct: 0 },
            { question: "Who discovered America from the European perspective?", options: ["Leif Erikson", "Christopher Columbus", "Amerigo Vespucci", "John Cabot"], correct: 1 }
        ],
        medium: [
            { question: "Which empire built the Great Wall of China?", options: ["Qin", "Han", "Ming", "Tang"], correct: 2 },
            { question: "In what year did Napoleon lose the Battle of Waterloo?", options: ["1812", "1813", "1814", "1815"], correct: 3 },
            { question: "Who was the first Emperor of Rome?", options: ["Julius Caesar", "Augustus", "Tiberius", "Caligula"], correct: 1 },
            { question: "In which year did the Magna Carta sign?", options: ["1115", "1215", "1315", "1415"], correct: 1 },
            { question: "Who was the leader of the Soviet Union during World War II?", options: ["Nikita Khrushchev", "Leonid Brezhnev", "Joseph Stalin", "Vladimir Lenin"], correct: 2 },
            { question: "What year did the French Revolution begin?", options: ["1787", "1788", "1789", "1790"], correct: 2 },
            { question: "Who was the first President of South Africa?", options: ["Nelson Mandela", "F.W. de Klerk", "Thabo Mbeki", "Jacob Zuma"], correct: 0 },
            { question: "In which year did India gain independence?", options: ["1945", "1946", "1947", "1948"], correct: 2 },
            { question: "Who wrote the Declaration of Independence?", options: ["Benjamin Franklin", "Thomas Jefferson", "John Adams", "Alexander Hamilton"], correct: 1 },
            { question: "What year did the Cold War end?", options: ["1988", "1989", "1990", "1991"], correct: 3 },
            { question: "Who was the first President of Pakistan?", options: ["Muhammad Ali Jinnah", "Liaquat Ali Khan", "Iskander Mirza", "General Ayub Khan"], correct: 0 },
            { question: "In which year did Pearl Harbor get attacked?", options: ["1940", "1941", "1942", "1943"], correct: 1 }
        ],
        hard: [
            { question: "Who was the first Sultan of the Ottoman Empire?", options: ["Mehmed II", "Osman I", "Orhan I", "Murad I"], correct: 1 },
            { question: "In which year did the Hundred Years' War end?", options: ["1551", "1453", "1356", "1337"], correct: 1 },
            { question: "Who was the Mayor of the Palace in the Merovingian dynasty?", options: ["Pepin the Short", "Charles Martel", "Pepin III", "Carloman"], correct: 1 },
            { question: "What was the primary trade route during medieval times?", options: ["Spice Route", "Silk Road", "Tea Route", "Amber Road"], correct: 1 },
            { question: "Who discovered the tomb of King Tutankhamun?", options: ["Howard Carter", "Flinders Petrie", "Victor Loret", "Theodore Davis"], correct: 0 },
            { question: "In which year did the Boxer Rebellion occur?", options: ["1898", "1899", "1900", "1901"], correct: 2 },
            { question: "Who was the most famous pharaoh of Egypt?", options: ["Ramses II", "Tutankhamun", "Khufu", "Akhenaten"], correct: 0 },
            { question: "What was the primary cause of the Spanish Inquisition?", options: ["Religious Heresy", "Political Power", "Economic Interests", "Social Reform"], correct: 0 },
            { question: "In which year did the Congress of Vienna occur?", options: ["1814", "1815", "1816", "1817"], correct: 1 },
            { question: "Who was the architect of the Panama Canal?", options: ["Ferdinand de Lesseps", "Theodore Roosevelt", "George Washington Goethals", "William Crawford Gorgas"], correct: 0 },
            { question: "What year did the Titanic sink?", options: ["1911", "1912", "1913", "1914"], correct: 1 },
            { question: "Who was the first Secretary-General of the United Nations?", options: ["Dag Hammarskjöld", "Trygve Lie", "Javier Pérez de Cuéllar", "Kurt Waldheim"], correct: 1 }
        ]
    },
    sports: {
        easy: [
            { question: "How many players are on a basketball team on the court?", options: ["5", "6", "7", "8"], correct: 0 },
            { question: "How many goals is a hat-trick in soccer?", options: ["1", "2", "3", "4"], correct: 2 },
            { question: "How many holes are in a standard golf course?", options: ["9", "18", "27", "36"], correct: 1 },
            { question: "What is the normal length of a football field?", options: ["80 yards", "100 yards", "120 yards", "150 yards"], correct: 1 },
            { question: "How many innings are in a baseball game?", options: ["7", "8", "9", "10"], correct: 2 },
            { question: "What is the highest score in a game of bowling?", options: ["150", "200", "250", "300"], correct: 3 },
            { question: "How long is an Olympic swimming pool?", options: ["25m", "40m", "50m", "100m"], correct: 2 },
            { question: "How many sets does a tennis match consist of?", options: ["2", "3", "4", "5"], correct: 1 },
            { question: "What color jerseys do soccer teams typically wear?", options: ["White and Blue", "Team Colors", "Red and White", "Black and White"], correct: 1 },
            { question: "How many players are on a volleyball team on the court?", options: ["4", "5", "6", "7"], correct: 2 },
            { question: "What is the sport played in the Winter Olympics?", options: ["Swimming", "Basketball", "Ice Hockey", "Tennis"], correct: 2 },
            { question: "How many overs are in a T20 cricket match?", options: ["10", "20", "50", "100"], correct: 1 }
        ],
        medium: [
            { question: "Who has won the most Grand Slam tennis titles?", options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Margaret Court"], correct: 2 },
            { question: "In which year was the first FIFA World Cup held?", options: ["1930", "1932", "1934", "1936"], correct: 0 },
            { question: "How many times has India won the Cricket World Cup?", options: ["1", "2", "3", "4"], correct: 1 },
            { question: "What is the maximum break in snooker?", options: ["147", "152", "157", "162"], correct: 0 },
            { question: "How many times has the United States won the Super Bowl?", options: ["5", "6", "7", "8"], correct: 2 },
            { question: "Who is the fastest man in the world (100m)?", options: ["Usain Bolt", "Tyson Gay", "Asafa Powell", "Yohan Blake"], correct: 0 },
            { question: "How many players are on an ice hockey team on the ice?", options: ["5", "6", "7", "8"], correct: 1 },
            { question: "What is the most followed sport in the world?", options: ["Basketball", "Tennis", "Golf", "Football/Soccer"], correct: 3 },
            { question: "How many gold medals did Michael Phelps win?", options: ["26", "28", "30", "32"], correct: 1 },
            { question: "In which year were the modern Olympics first held?", options: ["1890", "1892", "1896", "1900"], correct: 2 },
            { question: "How long is a marathon?", options: ["40km", "42.195km", "43km", "45km"], correct: 1 },
            { question: "What is the national sport of India?", options: ["Cricket", "Hockey", "Tennis", "Football"], correct: 1 }
        ],
        hard: [
            { question: "How many times has Roger Federer won Wimbledon?", options: ["8", "9", "10", "11"], correct: 0 },
            { question: "What is the Elo rating system used for?", options: ["Athletics", "Chess", "Badminton", "Table Tennis"], correct: 1 },
            { question: "How many times has Serena Williams won the US Open?", options: ["5", "6", "7", "8"], correct: 2 },
            { question: "What is the highest possible score in darts?", options: ["180", "500", "1000", "2000"], correct: 0 },
            { question: "How many times has Apple Cup been played (Washington vs Washington State)?", options: ["115", "120", "125", "130"], correct: 2 },
            { question: "What is the record for most consecutive Grand Slam titles won?", options: ["2", "3", "4", "5"], correct: 2 },
            { question: "How many times has Brazil won the FIFA World Cup?", options: ["4", "5", "6", "7"], correct: 1 },
            { question: "What is the minimum break in snooker besides 147?", options: ["141", "144", "146", "148"], correct: 1 },
            { question: "How many Olympic Games has the USA participated in?", options: ["20", "25", "28", "30"], correct: 2 },
            { question: "What is the maximum possible break in English billiards?", options: ["147", "200", "1000", "Unlimited"], correct: 3 },
            { question: "How many times did Muhammad Ali defend his heavyweight title?", options: ["19", "20", "25", "30"], correct: 1 },
            { question: "What is the record for most goals in a calendar year in soccer?", options: ["70", "90", "91", "100"], correct: 2 }
        ]
    },
    geography: {
        easy: [
            { question: "What is the capital of Japan?", options: ["Osaka", "Tokyo", "Kyoto", "Yokohama"], correct: 1 },
            { question: "Which continent is the largest?", options: ["Africa", "Europe", "Asia", "North America"], correct: 2 },
            { question: "What is the longest river in the world?", options: ["Amazon", "Yangtze", "Nile", "Mississippi"], correct: 2 },
            { question: "How many countries are in the European Union?", options: ["25", "27", "28", "30"], correct: 1 },
            { question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], correct: 2 },
            { question: "Which desert is the largest in the world?", options: ["Sahara", "Arabian", "Gobi", "Kalahari"], correct: 0 },
            { question: "What is the capital of Brazil?", options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], correct: 2 },
            { question: "How many member states does the United Nations have?", options: ["185", "190", "193", "200"], correct: 2 },
            { question: "What is the capital of Egypt?", options: ["Alexandria", "Cairo", "Giza", "Aswan"], correct: 1 },
            { question: "Which country has the most natural lakes?", options: ["Sweden", "Finland", "Canada", "Alaska"], correct: 2 },
            { question: "What is the capital of Germany?", options: ["Munich", "Berlin", "Cologne", "Hamburg"], correct: 1 },
            { question: "Which sea is between Africa and Europe?", options: ["Red Sea", "Mediterranean", "Black Sea", "Caspian Sea"], correct: 1 }
        ],
        medium: [
            { question: "What is the capital of New Zealand?", options: ["Auckland", "Wellington", "Christchurch", "Dunedin"], correct: 1 },
            { question: "Which country is the most populous in the world?", options: ["India", "China", "Indonesia", "United States"], correct: 0 },
            { question: "What is the highest mountain in Africa?", options: ["Mount Kenya", "Mount Kilimanjaro", "Mount Stanley", "Mount Speke"], correct: 1 },
            { question: "How many time zones are in Russia?", options: ["9", "10", "11", "12"], correct: 2 },
            { question: "What is the capital of Thailand?", options: ["Phuket", "Chiang Mai", "Bangkok", "Pattaya"], correct: 2 },
            { question: "Which is the smallest continent?", options: ["Antarctica", "Europe", "Australia", "Greenland"], correct: 2 },
            { question: "What is the capital of South Korea?", options: ["Busan", "Incheon", "Seoul", "Daegu"], correct: 2 },
            { question: "Which country has the most islands?", options: ["Philippines", "Indonesia", "Norway", "Sweden"], correct: 1 },
            { question: "What is the capital of Nigeria?", options: ["Lagos", "Abuja", "Ibadan", "Kano"], correct: 1 },
            { question: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: 3 },
            { question: "What is the capital of Saudi Arabia?", options: ["Jeddah", "Mecca", "Medina", "Riyadh"], correct: 3 },
            { question: "How many countries does India share its border with?", options: ["5", "6", "7", "8"], correct: 2 }
        ],
        hard: [
            { question: "What is the capital of Belize?", options: ["Belmopan", "Belize City", "San Ignacio", "Cayo"], correct: 0 },
            { question: "Which country is the least densely populated in Asia?", options: ["Mongolia", "Kyrgyzstan", "East Timor", "Tajikistan"], correct: 0 },
            { question: "What is the capital of Mauritius?", options: ["Port Louis", "Beau Bassin", "Curepipe", "Vacoas-Phoenix"], correct: 0 },
            { question: "How many member states does ASEAN have?", options: ["8", "9", "10", "11"], correct: 2 },
            { question: "What is the capital of Madagascar?", options: ["Antananarivo", "Antsirabe", "Toliara", "Mahajanga"], correct: 0 },
            { question: "Which country is the most mountainous?", options: ["Nepal", "Bhutan", "Peru", "Switzerland"], correct: 3 },
            { question: "What is the capital of Montenegro?", options: ["Podgorica", "Cetinje", "Kotor", "Budva"], correct: 0 },
            { question: "How many countries are landlocked in South America?", options: ["2", "3", "4", "5"], correct: 0 },
            { question: "What is the capital of Belarus?", options: ["Minsk", "Grodno", "Brest", "Gomel"], correct: 0 },
            { question: "Which country has the longest coastline?", options: ["Australia", "Russia", "Canada", "Indonesia"], correct: 2 },
            { question: "What is the capital of Turkmenistan?", options: ["Ashgabat", "Urgench", "Turkmenbashi", "Balkanabat"], correct: 0 },
            { question: "How many countries share the Amazon River?", options: ["7", "8", "9", "10"], correct: 2 }
        ]
    }
};

/* =================== APP STATE =================== */
let appState = {
    username: '',
    category: 'general',
    difficulty: 'easy',
    currentQuestion: 0,
    score: 0,
    answers: [],
    startTime: 0,
    timerInterval: null,
    soundEnabled: true,
    quizStarted: false,
    darkMode: localStorage.getItem('darkMode') === 'true'
};

/* =================== DOM ELEMENTS =================== */
const pages = {
    landing: document.getElementById('landingPage'),
    setup: document.getElementById('userSetupPage'),
    quiz: document.getElementById('quizPage'),
    results: document.getElementById('resultsPage'),
    leaderboard: document.getElementById('leaderboardPage')
};

/* =================== INITIALIZATION =================== */
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    restoreTheme();
});

function initializeApp() {
    // Load leaderboard from localStorage
    loadLeaderboard();
    createSoundEffects();
}

function restoreTheme() {
    if (appState.darkMode) {
        document.body.classList.add('dark-mode');
        updateThemeIcon();
    }
}

/* =================== PAGE NAVIGATION =================== */
function showPage(pageName) {
    Object.values(pages).forEach(page => page.classList.remove('active'));
    pages[pageName].classList.add('active');
    window.scrollTo(0, 0);
}

function goToLanding() {
    showPage('landing');
    resetAppState();
}

function goToUserSetup() {
    showPage('setup');
    document.getElementById('username').focus();
}

function goToLeaderboard() {
    showPage('leaderboard');
    updateLeaderboardDisplay();
}

function goToQuiz() {
    showPage('quiz');
}

function goToResults() {
    showPage('results');
}

/* =================== USER SETUP =================== */
function handleEnterKey(event) {
    if (event.key === 'Enter') {
        startQuiz();
    }
}

function selectDifficulty(difficulty) {
    appState.difficulty = difficulty;
    document.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-difficulty="${difficulty}"]`).classList.add('active');
}

function toggleSound() {
    appState.soundEnabled = document.getElementById('soundToggle').checked;
}

function startQuiz() {
    const username = document.getElementById('username').value.trim();
    
    if (!username) {
        showNotification('Please enter your name');
        return;
    }

    appState.username = username;
    appState.category = document.getElementById('category').value;
    appState.difficulty = document.querySelector('.difficulty-btn.active').dataset.difficulty;
    appState.startTime = Date.now();
    appState.quizStarted = true;
    appState.currentQuestion = 0;
    appState.score = 0;
    appState.answers = [];

    goToQuiz();
    displayQuestion(0);
}

function showNotification(message) {
    // Simple notification - can be enhanced
    alert(message);
}

/* =================== QUIZ LOGIC =================== */
function displayQuestion(index) {
    const quizQuestions = quizData[appState.category][appState.difficulty];
    
    if (index >= quizQuestions.length) {
        completeQuiz();
        return;
    }

    const question = quizQuestions[index];
    
    // Update header
    document.getElementById('quizCategoryTitle').textContent = 
        `${appState.category.charAt(0).toUpperCase() + appState.category.slice(1)} - ${appState.difficulty.charAt(0).toUpperCase() + appState.difficulty.slice(1)}`;
    document.getElementById('userGreeting').textContent = `Hello, ${appState.username}!`;
    
    // Update question counter
    const totalQuestions = quizQuestions.length;
    document.getElementById('questionCounter').textContent = 
        `Question ${index + 1} of ${totalQuestions}`;
    
    // Update progress bar
    const progressPercent = ((index + 1) / totalQuestions) * 100;
    document.getElementById('progressFill').style.width = progressPercent + '%';
    
    // Display question
    document.getElementById('questionText').textContent = question.question;
    
    // Display options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, i) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = option;
        button.onclick = () => selectAnswer(i, question.correct);
        optionsContainer.appendChild(button);
    });
    
    // Start timer
    startQuestionTimer();
    
    // Animate entry
    document.querySelector('.question-card').style.animation = 'slideUp 0.5s ease';
}

function startQuestionTimer() {
    const timeLimit = 15;
    let timeRemaining = timeLimit;
    
    // Update timer display
    const updateTimer = () => {
        document.getElementById('timerCount').textContent = timeRemaining;
        document.getElementById('timerText').textContent = timeRemaining;
        
        // Update circular timer
        const circumference = 2 * Math.PI * 45;
        const offset = circumference - (timeRemaining / timeLimit) * circumference;
        const timerArc = document.getElementById('timerArc');
        timerArc.style.strokeDasharray = circumference;
        timerArc.style.strokeDashoffset = offset;
        
        // Change color as time runs out
        if (timeRemaining <= 5) {
            timerArc.style.stroke = '#ef4444';
            document.getElementById('timerText').style.color = '#ef4444';
        } else if (timeRemaining <= 10) {
            timerArc.style.stroke = '#f59e0b';
            document.getElementById('timerText').style.color = '#f59e0b';
        } else {
            timerArc.style.stroke = 'url(#timerGradient)';
            document.getElementById('timerText').style.color = '#6366f1';
        }
        
        timeRemaining--;
        
        if (timeRemaining < 0) {
            clearInterval(appState.timerInterval);
            autoNextQuestion();
        }
    };
    
    clearInterval(appState.timerInterval);
    updateTimer(); // Initial call
    appState.timerInterval = setInterval(updateTimer, 1000);
}

function selectAnswer(selectedIndex, correctIndex) {
    clearInterval(appState.timerInterval);
    
    // Disable all options
    document.querySelectorAll('.option').forEach((btn, i) => {
        btn.disabled = true;
        btn.classList.add('disabled');
        
        if (i === correctIndex) {
            btn.classList.add('correct');
        } else if (i === selectedIndex && i !== correctIndex) {
            btn.classList.add('incorrect');
        }
    });
    
    // Record answer
    const quizQuestions = quizData[appState.category][appState.difficulty];
    appState.answers.push({
        question: quizQuestions[appState.currentQuestion].question,
        userAnswer: quizQuestions[appState.currentQuestion].options[selectedIndex],
        correctAnswer: quizQuestions[appState.currentQuestion].options[correctIndex],
        isCorrect: selectedIndex === correctIndex
    });
    
    // Update score
    if (selectedIndex === correctIndex) {
        appState.score += 10;
        playSound('correct');
    } else {
        playSound('wrong');
    }
    
    document.getElementById('currentScore').textContent = appState.score;
    
    // Move to next question after delay
    setTimeout(() => {
        appState.currentQuestion++;
        displayQuestion(appState.currentQuestion);
    }, 1500);
}

function autoNextQuestion() {
    // Auto move without answer
    const quizQuestions = quizData[appState.category][appState.difficulty];
    const correctIndex = quizQuestions[appState.currentQuestion].correct;
    
    appState.answers.push({
        question: quizQuestions[appState.currentQuestion].question,
        userAnswer: 'No Answer',
        correctAnswer: quizQuestions[appState.currentQuestion].options[correctIndex],
        isCorrect: false
    });
    
    // Show correct answer
    document.querySelectorAll('.option').forEach((btn, i) => {
        btn.disabled = true;
        btn.classList.add('disabled');
        
        if (i === correctIndex) {
            btn.classList.add('correct');
        }
    });
    
    playSound('wrong');
    
    setTimeout(() => {
        appState.currentQuestion++;
        displayQuestion(appState.currentQuestion);
    }, 1500);
}

function completeQuiz() {
    clearInterval(appState.timerInterval);
    goToResults();
    displayResults();
}

function quitQuiz() {
    document.getElementById('quitModal').classList.add('active');
}

function closeQuitModal() {
    document.getElementById('quitModal').classList.remove('active');
}

function confirmQuit() {
    closeQuitModal();
    goToLanding();
}

function restartQuiz() {
    appState.currentQuestion = 0;
    appState.score = 0;
    appState.answers = [];
    appState.startTime = Date.now();
    goToQuiz();
    displayQuestion(0);
}

/* =================== RESULTS =================== */
function displayResults() {
    const totalTime = Math.floor((Date.now() - appState.startTime) / 1000);
    const quizQuestions = quizData[appState.category][appState.difficulty];
    const correctCount = appState.answers.filter(a => a.isCorrect).length;
    const incorrectCount = appState.answers.length - correctCount;
    
    // Calculate final score
    const finalScore = (correctCount / appState.answers.length) * 100;
    
    // Display score
    document.getElementById('finalScore').textContent = Math.round(finalScore);
    document.getElementById('correctAnswers').textContent = correctCount;
    document.getElementById('incorrectAnswers').textContent = incorrectCount;
    document.getElementById('totalTime').textContent = formatTime(totalTime);
    
    // Performance badge and message
    let badge = '😊';
    let message = 'Good effort!';
    
    if (finalScore >= 90) {
        badge = '🏆';
        message = 'Outstanding! You\'re a quiz master!';
        triggerConfetti();
    } else if (finalScore >= 75) {
        badge = '🎉';
        message = 'Excellent work! Very impressive!';
        triggerConfetti();
    } else if (finalScore >= 60) {
        badge = '👍';
        message = 'Great job! Keep it up!';
    } else if (finalScore >= 40) {
        badge = '💪';
        message = 'Good effort! Practice makes perfect!';
    } else {
        badge = '📚';
        message = 'Keep learning! You\'ll do better next time!';
    }
    
    document.getElementById('performanceBadge').textContent = badge;
    document.getElementById('performanceMessage').textContent = message;
    
    // Review answers
    const reviewContainer = document.getElementById('reviewContainer');
    reviewContainer.innerHTML = '';
    
    appState.answers.forEach((answer, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${answer.isCorrect ? 'correct' : 'incorrect'}`;
        reviewItem.innerHTML = `
            <strong>Q${index + 1}: ${answer.question}</strong>
            <p><strong>Your Answer:</strong> ${answer.userAnswer}</p>
            <p><strong>Correct Answer:</strong> ${answer.correctAnswer}</p>
            <p>${answer.isCorrect ? '✓ Correct' : '✗ Incorrect'}</p>
        `;
        reviewContainer.appendChild(reviewItem);
    });
    
    // Save to leaderboard
    saveScore({
        name: appState.username,
        score: Math.round(finalScore),
        category: appState.category,
        difficulty: appState.difficulty,
        date: new Date().toLocaleDateString(),
        time: formatTime(totalTime)
    });
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
}

function triggerConfetti() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.innerHTML = '';
    
    const colors = ['#6366f1', '#ec4899', '#10b981', '#f59e0b', '#ef4444'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confettiContainer.appendChild(confetti);
    }
    
    setTimeout(() => {
        confettiContainer.innerHTML = '';
    }, 3500);
}

/* =================== LEADERBOARD =================== */
function saveScore(scoreData) {
    let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    leaderboard.push(scoreData);
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 50); // Keep top 50
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}

function loadLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    return leaderboard;
}

function updateLeaderboardDisplay() {
    const category = document.getElementById('leaderboardCategory').value;
    const leaderboard = loadLeaderboard();
    
    // Filter by category
    let filtered = leaderboard;
    if (category !== 'all') {
        filtered = leaderboard.filter(entry => entry.category === category);
    }
    
    // Get top 5
    const topPlayers = filtered.slice(0, 5);
    
    const leaderboardList = document.getElementById('leaderboardList');
    leaderboardList.innerHTML = '';
    
    if (topPlayers.length === 0) {
        leaderboardList.innerHTML = `
            <div class="empty-leaderboard">
                <i class="fas fa-trophy"></i>
                <p>No scores yet. Start a quiz to appear on the leaderboard!</p>
            </div>
        `;
        return;
    }
    
    topPlayers.forEach((entry, index) => {
        const highlight = appState.username === entry.name ? 'highlight' : '';
        const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '';
        
        const entryEl = document.createElement('div');
        entryEl.className = `leaderboard-entry ${highlight}`;
        entryEl.innerHTML = `
            <div class="leaderboard-rank">${index + 1}</div>
            <div class="leaderboard-details">
                <div class="leaderboard-name">
                    ${medal} ${entry.name}
                </div>
                <div class="leaderboard-meta">
                    ${entry.difficulty} • ${entry.date}
                </div>
            </div>
            <div class="leaderboard-score">${entry.score}</div>
        `;
        leaderboardList.appendChild(entryEl);
    });
}

/* =================== THEME TOGGLE =================== */
function toggleTheme() {
    appState.darkMode = !appState.darkMode;
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', appState.darkMode);
    updateThemeIcon();
}

function updateThemeIcon() {
    const icon = document.querySelector('#themeToggle i');
    if (appState.darkMode) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

/* =================== SOUND EFFECTS =================== */
function createSoundEffects() {
    // Create simple sound effects using Web Audio API
    // For better quality, use actual audio files
}

function playSound(type) {
    if (!appState.soundEnabled) return;
    
    try {
        // Try to play HTML5 audio
        const audio = document.getElementById(type === 'correct' ? 'correctSound' : 'wrongSound');
        if (audio) {
            audio.currentTime = 0;
            audio.play().catch(e => {
                // Fallback to Web Audio API
                playWebAudio(type);
            });
        } else {
            playWebAudio(type);
        }
    } catch (e) {
        // Silently fail
    }
}

function playWebAudio(type) {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        if (type === 'correct') {
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(1000, audioContext.currentTime + 0.1);
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.setValueAtTime(0, audioContext.currentTime + 0.1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        } else {
            oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(300, audioContext.currentTime + 0.1);
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.setValueAtTime(0, audioContext.currentTime + 0.1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        }
    } catch (e) {
        // Silently fail
    }
}

/* =================== UTILITY FUNCTIONS =================== */
function resetAppState() {
    appState.currentQuestion = 0;
    appState.score = 0;
    appState.answers = [];
    appState.quizStarted = false;
}

// SVG Gradient for timer (add to page on load)
document.addEventListener('DOMContentLoaded', () => {
    if (!document.getElementById('timerGradient')) {
        const svg = document.querySelector('.timer-svg');
        if (svg) {
            const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
            gradient.id = 'timerGradient';
            gradient.setAttribute('x1', '0%');
            gradient.setAttribute('y1', '0%');
            gradient.setAttribute('x2', '100%');
            gradient.setAttribute('y2', '100%');
            
            const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            stop1.setAttribute('offset', '0%');
            stop1.setAttribute('stop-color', '#6366f1');
            
            const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            stop2.setAttribute('offset', '100%');
            stop2.setAttribute('stop-color', '#ec4899');
            
            gradient.appendChild(stop1);
            gradient.appendChild(stop2);
            defs.appendChild(gradient);
            svg.appendChild(defs);
        }
    }
});
