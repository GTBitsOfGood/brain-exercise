const questions = [
    {
        "question": " How many legs does a butterfly have?",
        "answer": 6,
        "subject": "Animals"
    },
    {
        "question": "How many legs does a spider have?",
        "answer": 8,
        "subject": "Animals"
    },
    {
        "question": "How many legs does a lobster have?",
        "answer": "10 (8 walking legs and 2 larger claw legs)",
        "subject": "Animals"
    },
    {
        "question": "How long does it take a chicken egg to hatch?",
        "answer": "21 days",
        "subject": "Animals"
    },
    {
        "question": "What do you call a group of giraffes?",
        "answer": "a tower",
        "subject": "Animals"
    },
    {
        "question": "About how many times per second does a hummingbird flap its wings?",
        "answer": "about 80 ",
        "subject": "Animals"
    },
    {
        "question": "What is the only mammal capable of flight?",
        "answer": "bat",
        "subject": "Animals"
    },
    {
        "question": "A giraffe's tongue is what color?",
        "answer": "black",
        "subject": "Animals"
    },
    {
        "question": "On a common ladybud, what color are its spots?",
        "answer": "Black",
        "subject": "Animals"
    },
    {
        "question": "What is the biggest animal to have inhabited the Earth?",
        "answer": "blue whale",
        "subject": "Animals"
    },
    {
        "question": "What is the largest animal on earth?",
        "answer": "Blue Whale",
        "subject": "Animals"
    },
    {
        "question": "Which mammal lives the longest?",
        "answer": "Bowhead whale. They can live up to 200 years!",
        "subject": "Animals"
    },
    {
        "question": "Which insect is known for its hundred legs?",
        "answer": "centipede",
        "subject": "Animals"
    },
    {
        "question": "What is the fastest land animal?",
        "answer": "cheetah",
        "subject": "Animals"
    },
    {
        "question": "What is the smallest breed of dog?",
        "answer": "Chihuahua",
        "subject": "Animals"
    },
    {
        "question": "Before caterpillars become butterflies, they are wrapped in this covering:",
        "answer": "chrysalis",
        "subject": "Animals"
    },
    {
        "question": "Which bird is used as the sign of peace?",
        "answer": "dove",
        "subject": "Animals"
    },
    {
        "question": "Which mammal lays eggs?",
        "answer": "Duck-Billed Platypus",
        "subject": "Animals"
    },
    {
        "question": "Are worker bees male or female?",
        "answer": "Female",
        "subject": "Animals"
    },
    {
        "question": "Which animal has the longest lifespan?",
        "answer": "Giant Tortoise",
        "subject": "Animals"
    },
    {
        "question": "Which animal has the highest blood pressure?",
        "answer": "giraffes",
        "subject": "Animals"
    },
    {
        "question": "Some animals spend their winter in this resting state...",
        "answer": "hibernation",
        "subject": "Animals"
    },
    {
        "question": "What animal translates to water horse?",
        "answer": "Hippopotamus",
        "subject": "Animals"
    },
    {
        "question": "What is the sweet food made by bees?",
        "answer": "Honey",
        "subject": "Animals"
    },
    {
        "question": "What are baby goats called?",
        "answer": "kids",
        "subject": "Animals"
    },
    {
        "question": "Which Australian marsupial enjoys eating eucalyptus leaves?",
        "answer": "koala",
        "subject": "Animals"
    },
    {
        "question": "The cross between a lion and a tiger is called?",
        "answer": "Liger",
        "subject": "Animals"
    },
    {
        "question": "This animal is known for being hardworking and good-tempered, but is unable to reproduce.",
        "answer": "mule",
        "subject": "Animals"
    },
    {
        "question": "\"Killer whale\" is a nickname for which kind of whale?",
        "answer": "Orcas",
        "subject": "Animals"
    },
    {
        "question": "Which animal is the official symbol of the World Wildlife Fund?",
        "answer": "panda",
        "subject": "Animals"
    },
    {
        "question": "What is a group of lions called?",
        "answer": "pride",
        "subject": "Animals"
    },
    {
        "question": "Which animal has the male carry the offspring?",
        "answer": "Seahorse",
        "subject": "Animals"
    },
    {
        "question": "Pearls are naturally produced by which sea creature?",
        "answer": "shelled mollusk/oyster",
        "subject": "Animals"
    },
    {
        "question": "If you suffer from arachnophobia which animal are you scared of?",
        "answer": "spider",
        "subject": "Animals"
    },
    {
        "question": "Which insects are also known as \"white ants\"?",
        "answer": "termites",
        "subject": "Animals"
    },
    {
        "question": "What animal has the largest ears in the animal kindgom?",
        "answer": "the African elephant",
        "subject": "Animals"
    },
    {
        "question": "What is the tallest breed of dog in the world?",
        "answer": "The Great Dane",
        "subject": "Animals"
    },
    {
        "question": "How big is a newborn kangaroo?",
        "answer": "the size of a lima bean",
        "subject": "Animals"
    },
    {
        "question": "In which city was Jesus born?",
        "answer": "Bethlehem",
        "subject": "Art and Culture"
    },
    {
        "question": "The mythical three-headed dog guarding the entrance to the underworld was named:",
        "answer": "Cerberus",
        "subject": "Art and Culture"
    },
    {
        "question": "Which princess famously left behind her glass slipper at the prince's ball?",
        "answer": "Cinderella",
        "subject": "Art and Culture"
    },
    {
        "question": "Which fairytale features a young girl who tries out the bowls, beds, and chairs of three different bears?",
        "answer": "Goldilocks",
        "subject": "Art and Culture"
    },
    {
        "question": "What colors are included in the Italian Flag?",
        "answer": "green, white, red",
        "subject": "Art and Culture"
    },
    {
        "question": "Which fairytale tells the story of a pair of siblings who leave breadcrumbs behind them to keep track of where they've been?",
        "answer": "Hansel and Gretel",
        "subject": "Art and Culture"
    },
    {
        "question": "The Trojan War was fought over which famously beautiful woman?",
        "answer": "Helen of Troy",
        "subject": "Art and Culture"
    },
    {
        "question": "The Hippocratic Oath is named after which ancient Greek physician?",
        "answer": "Hippocrates",
        "subject": "Art and Culture"
    },
    {
        "question": "Monet was the leader of which art movement?",
        "answer": "Impressionism",
        "subject": "Art and Culture"
    },
    {
        "question": "Who painted the Mona Lisa?",
        "answer": "Leonardo da Vinci",
        "subject": "Art and Culture"
    },
    {
        "question": "Who painted the Last Supper?",
        "answer": "Leonardo da Vinci",
        "subject": "Art and Culture"
    },
    {
        "question": "Aphrodite was the Greek goddess of what?",
        "answer": "Love and Beauty",
        "subject": "Art and Culture"
    },
    {
        "question": "Who sculpted David?",
        "answer": "Michaelangelo",
        "subject": "Art and Culture"
    },
    {
        "question": "Which Renaissance artist painted a frescoe on the Sistine chapel?",
        "answer": "Michaelangelo",
        "subject": "Art and Culture"
    },
    {
        "question": "Which biblical character manned a large arc or ship during the Great Flood?",
        "answer": "Noah",
        "subject": "Art and Culture"
    },
    {
        "question": "In which city is the cathedral of Notre Dame located?",
        "answer": "Paris",
        "subject": "Art and Culture"
    },
    {
        "question": "Which Italian city is famous for its leaning tower?",
        "answer": "Piza",
        "subject": "Art and Culture"
    },
    {
        "question": "What nationality was the composer Frederic Chopin?",
        "answer": "Polish",
        "subject": "Art and Culture"
    },
    {
        "question": "Which fairytale tells the story of a girl with exceptionally long hair who spends her life locked in a tower?",
        "answer": "Rapunzel",
        "subject": "Art and Culture"
    },
    {
        "question": "What is the main color of the Chinese flag?",
        "answer": "red",
        "subject": "Art and Culture"
    },
    {
        "question": "Which French philosopher said \"I think, therefore I am.\"?",
        "answer": "Rene Descartes",
        "subject": "Art and Culture"
    },
    {
        "question": "According to the old proverb, to which European capital city do all roads lead?",
        "answer": "Rome",
        "subject": "Art and Culture"
    },
    {
        "question": "What was Picasso's nationality?",
        "answer": "Spanish",
        "subject": "Art and Culture"
    },
    {
        "question": "What is the name of France's most famous museum?",
        "answer": "the Louvre",
        "subject": "Art and Culture"
    },
    {
        "question": "In greek mythology, what is Artemis the goddess of?",
        "answer": "the moon and the hunt",
        "subject": "Art and Culture"
    },
    {
        "question": "Which famous Christmastime ballet features the Sugar Plum fairy?",
        "answer": "the Nutcracker",
        "subject": "Art and Culture"
    },
    {
        "question": "In Greek mythology, what is Poseidon the god of?",
        "answer": "the ocean",
        "subject": "Art and Culture"
    },
    {
        "question": "In Greek mythology, what is Zeus the god of?",
        "answer": "the sky",
        "subject": "Art and Culture"
    },
    {
        "question": "Peter Pan's favorite fairy is named...",
        "answer": "Tinker Bell",
        "subject": "Art and Culture"
    },
    {
        "question": "Which famous artist cut off his own ear?",
        "answer": "Vincent Van Gogh",
        "subject": "Art and Culture"
    },
    {
        "question": "Which famous artist painted \"The Starry Night\"?",
        "answer": "Vincent Van Gogh",
        "subject": "Art and Culture"
    },
    {
        "question": "About how many grapes go into a bottle of wine?",
        "answer": "About 700 grapes",
        "subject": "Food"
    },
    {
        "question": "Which fruit is traditionally given to teachers on the first day of school?",
        "answer": "Apples",
        "subject": "Food"
    },
    {
        "question": "What food serves as the base for guacamole?",
        "answer": "Avocado",
        "subject": "Food"
    },
    {
        "question": "Which fruit is sometimes called an alligator pear?",
        "answer": "avocado",
        "subject": "Food"
    },
    {
        "question": "What is the least expensive and most popular fruit?",
        "answer": "banana",
        "subject": "Food"
    },
    {
        "question": "What's the least expensive and most popular fruit?",
        "answer": "Banana",
        "subject": "Food"
    },
    {
        "question": "Which country produces the most coffee in the world?",
        "answer": "Brazil",
        "subject": "Food"
    },
    {
        "question": "Which beverage is most famous for containing caffeine?",
        "answer": "Coffee",
        "subject": "Food"
    },
    {
        "question": "What is sushi traditionally wrapped in?",
        "answer": "edible seaweed",
        "subject": "Food"
    },
    {
        "question": "What food is the most ordered in America?",
        "answer": "Fried chicken",
        "subject": "Food"
    },
    {
        "question": "What is wine made from?",
        "answer": "grapes",
        "subject": "Food"
    },
    {
        "question": "Which candybar is known as as \"The Great American Chocolate Bar\"?",
        "answer": "Hersheys",
        "subject": "Food"
    },
    {
        "question": "Which tea time condiment is made by bees?",
        "answer": "honey",
        "subject": "Food"
    },
    {
        "question": "Spinach is high in which mineral?",
        "answer": "iron",
        "subject": "Food"
    },
    {
        "question": "Which country is sushi from?",
        "answer": "Japan",
        "subject": "Food"
    },
    {
        "question": "What is the most popular green vegetable?",
        "answer": "Lettuce",
        "subject": "Food"
    },
    {
        "question": "A pound each of butter, flour, sugar, and eggs is a traditional recipe for what?",
        "answer": "pound cake",
        "subject": "Food"
    },
    {
        "question": "What is a staple food for 1/3 of the world's population?",
        "answer": "Rice",
        "subject": "Food"
    },
    {
        "question": "What is the only rock regularly eaten by humans?",
        "answer": "Salt",
        "subject": "Food"
    },
    {
        "question": "What is sushi wrapped in?",
        "answer": "seaweed",
        "subject": "Food"
    },
    {
        "question": "Which fruit has its seeds on the outside?",
        "answer": "Strawberries",
        "subject": "Food",
        "difficulty": 2
    },
    {
        "question": "What is added to bread to make it swell?",
        "answer": "yeast",
        "subject": "Food"
    },
    {
        "question": "What is Idaho famous for producing?",
        "answer": "potatoes",
        "subject": "Food"
    },
    {
        "question": "How many states are in the US?",
        "answer": 50,
        "subject": "Geography"
    },
    {
        "question": "How many countries are in the world?",
        "answer": 195,
        "subject": "Geography"
    },
    {
        "question": "What is the population of California?",
        "answer": "40 million",
        "subject": "Geography"
    },
    {
        "question": "What is the capital of Ethiopia",
        "answer": "Addis Ababa",
        "subject": "Geography"
    },
    {
        "question": "Name three states that start with the letter A.",
        "answer": "Alabama, Alaska, Arizona, Arkansas, ",
        "subject": "Geography"
    },
    {
        "question": "Juneau is the capital of which state?",
        "answer": "Alaska",
        "subject": "Geography"
    },
    {
        "question": "What is the largest country in Africa?",
        "answer": "Algeria",
        "subject": "Geography"
    },
    {
        "question": "What is the capital of the Netherlands?",
        "answer": "Amsterdam",
        "subject": "Geography"
    },
    {
        "question": "What is the name of a book of maps?",
        "answer": "an atlas",
        "subject": "Geography"
    },
    {
        "question": "Which continent has the fewest flowering plants?",
        "answer": "Antarctica",
        "subject": "Geography"
    },
    {
        "question": "What is the shallowest ocean in the world?",
        "answer": "Arctic Ocean",
        "subject": "Geography"
    },
    {
        "question": "What is the capital of Greece?",
        "answer": "Athens",
        "subject": "Geography"
    },
    {
        "question": "What is the capital of Texas?",
        "answer": "Austin",
        "subject": "Geography"
    },
    {
        "question": "In which country is the Great Barrier Reef?",
        "answer": "Australia",
        "subject": "Geography"
    },
    {
        "question": "What is the smallest continent in the world?",
        "answer": "Australia",
        "subject": "Geography"
    },
    {
        "question": "What is the capital of Iraq?",
        "answer": "Baghdad",
        "subject": "Geography"
    },
    {
        "question": "What is the capital of Germany?",
        "answer": "Berlin",
        "subject": "Geography"
    },
    {
        "question": "What is the capital of Germany?",
        "answer": "Berlin",
        "subject": "Geography"
    },
    {
        "question": "What is the capital of Hungary?",
        "answer": "Budapest",
        "subject": "Geography"
    },
    {
        "question": "Which state is the Golden State?",
        "answer": "California",
        "subject": "Geography"
    },
    {
        "question": "Which US State is the most populous?",
        "answer": "California",
        "subject": "Geography"
    },
    {
        "question": "Which country has a beaver as its national emblem?",
        "answer": "Canada",
        "subject": "Geography"
    },
    {
        "question": "Which two countries share the longest international border?",
        "answer": "Canada and USA",
        "subject": "Geography"
    },
    {
        "question": "Name three countries that start with the letter C. ",
        "answer": "Canada, Costa Rica, China, Congo, Chad, ",
        "subject": "Geography"
    },
    {
        "question": "What country grows the most fruits?",
        "answer": "China",
        "subject": "Geography"
    },
    {
        "question": "What country produces the most paper?",
        "answer": "China",
        "subject": "Geography"
    },
    {
        "question": "Where is the Great Wall located?",
        "answer": "China",
        "subject": "Geography"
    },
    {
        "question": "Which country is the most populated in the world?",
        "answer": "China",
        "subject": "Geography"
    },
    {
        "question": "Name 3 countries that start with the letter C?",
        "answer": "China, Canada, Chile",
        "subject": "Geography"
    },
    {
        "question": "What's the largest country in the Caribbean?",
        "answer": "Cuba",
        "subject": "Geography"
    },
    {
        "question": "Which country is Prague in?",
        "answer": "Czech Republic",
        "subject": "Geography"
    },
    {
        "question": "Which country did the USA buy the Virgin Islands from?",
        "answer": "Denmark",
        "subject": "Geography"
    },
    {
        "question": "Out of Denmark, Austria, and Germany, which is the northernmost country?",
        "answer": "Denmark",
        "subject": "Geography"
    },
    {
        "question": "The city of Cairo is located in which country?",
        "answer": "Egypt",
        "subject": "Geography"
    },
    {
        "question": "Which state is called the 'Sunshine State'?",
        "answer": "Florida",
        "subject": "Geography"
    },
    {
        "question": "Which state is known as the Sunshine State?",
        "answer": "Florida",
        "subject": "Geography"
    },
    {
        "question": "Name the world's biggest island.",
        "answer": "Greenland",
        "subject": "Geography"
    },
    {
        "question": "What's the world's biggest island?",
        "answer": "Greenland",
        "subject": "Geography"
    },
    {
        "question": "Name three countries starting with the letter G.",
        "answer": "Guatemala, Germany, Greece etc",
        "subject": "Geography"
    },
    {
        "question": "What is the capital of Hawaii?",
        "answer": "Honolulu",
        "subject": "Geography"
    },
    {
        "question": "What is the capital of Hawaii?",
        "answer": "Honolulu",
        "subject": "Geography"
    },
    {
        "question": "Which country is Budapest in?",
        "answer": "Hungary",
        "subject": "Geography"
    },
    {
        "question": "Where is the Bermuda Triangle situated?",
        "answer": "in the Atalantic Ocean, off the coast of Florida and the Carribeean Islands",
        "subject": "Geography"
    },
    {
        "question": "The city of Rome is in which country?",
        "answer": "Italy",
        "subject": "Geography"
    },
    {
        "question": "What is the name of a body of water surrounded by land?",
        "answer": "lake",
        "subject": "Geography"
    },
    {
        "question": "What is the largest lake in the world?",
        "answer": "Lake Baikal in Russia",
        "subject": "Geography"
    },
    {
        "question": "What is the largest lake in Africa?",
        "answer": "Lake Victoria",
        "subject": "Geography"
    },
    {
        "question": "Name three countries that start with the letter L.",
        "answer": "Lebanon, Libya, Lithuania, Latvia",
        "subject": "Geography"
    },
    {
        "question": "What is the capital of Peru?",
        "answer": "Lima",
        "subject": "Geography"
    },
    {
        "question": "In which English city is Buckingham palace located?",
        "answer": "London",
        "subject": "Geography"
    },
    {
        "question": "What is the capital city of England?",
        "answer": "London",
        "subject": "Geography"
    },
    {
        "question": "Where is the Big Ben located?",
        "answer": "London, England",
        "subject": "Geography"
    },
    {
        "question": "In 1911 this lost city was discovered in Peru",
        "answer": "Machu Picchu",
        "subject": "Geography"
    },
    {
        "question": "Name 3 countries that start with the letter M.",
        "answer": "Madagascar, Maldives, Malaysia",
        "subject": "Geography"
    },
    {
        "question": "What country has a flag with a snake and an eagle?",
        "answer": "Mexico",
        "subject": "Geography"
    },
    {
        "question": "Name 3 states that start with an M.",
        "answer": "Montana, Missouri, Mississippi, Maine, Minnesota, Massachusetts",
        "subject": "Geography"
    },
    {
        "question": "Name two countries starting with the letter M.",
        "answer": "Morocco, Mexico, etc.",
        "subject": "Geography"
    },
    {
        "question": "What is the capital of Russia?",
        "answer": "Moscow",
        "subject": "Geography"
    },
    {
        "question": "What is the world's tallest mountain?",
        "answer": "Mt. Everest",
        "subject": "Geography"
    },
    {
        "question": "Name 3 countries that start with the letter N?",
        "answer": "Netherlands, Nigeria, Nepal",
        "subject": "Geography"
    },
    {
        "question": "California shares its longest border with this state:",
        "answer": "Nevada",
        "subject": "Geography"
    },
    {
        "question": "Which state is known as the Empire State?",
        "answer": "New York",
        "subject": "Geography"
    },
    {
        "question": "What is the most populated city in the US?",
        "answer": "New York City",
        "subject": "Geography"
    },
    {
        "question": "How many players are there in a baseball team?",
        "answer": "nine",
        "subject": "Geography"
    },
    {
        "question": "What ocean is the biggest?",
        "answer": "Pacific",
        "subject": "Geography"
    },
    {
        "question": "What is the deepest ocean?",
        "answer": "Pacific Ocean",
        "subject": "Geography"
    },
    {
        "question": "Name three countries that start with the letter P.",
        "answer": "Pakistan, Peru, Paraguay, etc.",
        "subject": "Geography"
    },
    {
        "question": "Which manmade waterway connects the Atlantic and Pacific Oceans?",
        "answer": "Panama Canal",
        "subject": "Geography"
    },
    {
        "question": "What is the capital of France?",
        "answer": "Paris",
        "subject": "Geography"
    },
    {
        "question": "What is the longest river in Italy?",
        "answer": "Po",
        "subject": "Geography"
    },
    {
        "question": "What country borders Spain to the west?",
        "answer": "Portugal",
        "subject": "Geography"
    },
    {
        "question": "What is the capital of the Czech Republic?",
        "answer": "Prague",
        "subject": "Geography"
    },
    {
        "question": "What is the capital of Morocco?",
        "answer": "Rabat",
        "subject": "Geography"
    },
    {
        "question": "What links Catalonia, Andalusia, Catabria, Galicia?",
        "answer": "Regions of Spain",
        "subject": "Geography"
    },
    {
        "question": "The city of Boulder, Colorado is located near which mountain range?",
        "answer": "Rocky Mountains",
        "subject": "Geography"
    },
    {
        "question": "What is the capital of Italy?",
        "answer": "Rome",
        "subject": "Geography"
    },
    {
        "question": "Name three countries that start with the letter R.",
        "answer": "Russia, Romania, Rwanda etc",
        "subject": "Geography"
    },
    {
        "question": "What is the capital of California?",
        "answer": "Sacramento",
        "subject": "Geography"
    },
    {
        "question": "Name three cities in California that start with S:",
        "answer": "Sacramento, San Diego, San Francisco, San Jose, Santa Rosa, Sonora...",
        "subject": "Geography"
    },
    {
        "question": "Name a country starting with the letter S.",
        "answer": "Scotland, Saudi Arabia, Sweden etc.",
        "subject": "Geography"
    },
    {
        "question": "What is the largest island in the Mediterranean Sea?",
        "answer": "Sicily",
        "subject": "Geography"
    },
    {
        "question": "Name three countries starting with the letter S.",
        "answer": "South Korea, Saudi Arabia, Spain, Slovenia etc.",
        "subject": "Geography"
    },
    {
        "question": "Where is the Sahara Desert situated?",
        "answer": "south of the Mediterranean Sea",
        "subject": "Geography"
    },
    {
        "question": "Is Antarctica located at the North or South pole?",
        "answer": "South Pole",
        "subject": "Geography",
        "difficulty": 1
    },
    {
        "question": "What country has the frank as its currency?",
        "answer": "Switzerland",
        "subject": "Geography"
    },
    {
        "question": "What country is Geneva located in?",
        "answer": "Switzerland",
        "subject": "Geography"
    },
    {
        "question": "What is the largest city in Australia?",
        "answer": "Sydney",
        "subject": "Geography"
    },
    {
        "question": "Which state is known as the Lone Star state?",
        "answer": "Texas",
        "subject": "Geography"
    },
    {
        "question": "Name three countries starting with the letter T. ",
        "answer": "Thailand, Turkey, Tanzania, Taiwan, Trinidad and Tobogo, etc.",
        "subject": "Geography"
    },
    {
        "question": "What is the smallest ocean in the world?",
        "answer": "the Arctic Ocean",
        "subject": "Geography"
    },
    {
        "question": "What is the name of the ocean between the United States and Europe?",
        "answer": "the Atlantic Ocean",
        "subject": "Geography"
    },
    {
        "question": "What river runs through the Grand Canyon?",
        "answer": "the Colorado River",
        "subject": "Geography"
    },
    {
        "question": "Mount Everest is found in which mountain range?",
        "answer": "the Himilayas",
        "subject": "Geography"
    },
    {
        "question": "What is the longest river in the world?",
        "answer": "The Nile",
        "subject": "Geography"
    },
    {
        "question": "What is the world's largest ocean?",
        "answer": "the Pacific Ocean",
        "subject": "Geography"
    },
    {
        "question": "What is the name of the world's largest desert?",
        "answer": "the Sahara Desert",
        "subject": "Geography"
    },
    {
        "question": "Which city is the capital of Japan?",
        "answer": "Tokyo",
        "subject": "Geography"
    },
    {
        "question": "What is the capital of New Jersey?",
        "answer": "Trenton",
        "subject": "Geography"
    },
    {
        "question": "Name three countries that start with the letter U.",
        "answer": "United States of America, Uganda, Ukraine, United Arab Emirates, United Kingdom",
        "subject": "Geography"
    },
    {
        "question": "What country has the smalles birth rate?",
        "answer": "Vatican City",
        "subject": "Geography"
    },
    {
        "question": "What is the smallest country in the world?",
        "answer": "Vatican City",
        "subject": "Geography"
    },
    {
        "question": "The Olympic National Forest is located in which state?",
        "answer": "Washington",
        "subject": "Geography"
    },
    {
        "question": "Which national park is famous for its geysers and hot springs?",
        "answer": "Yellowstone",
        "subject": "Geography"
    },
    {
        "question": "What money do they use in Japan?",
        "answer": "yen",
        "subject": "Geography"
    },
    {
        "question": "How many red and white stripes are there on the American flag?",
        "answer": "13 stripes",
        "subject": "History"
    },
    {
        "question": "Who created the Emancipation Proclamation thereby stating that all slaves are free?",
        "answer": "Abraham Lincoln",
        "subject": "History"
    },
    {
        "question": "In 1896, a gold rush occured in this state, which is not a part of the lower 48:",
        "answer": "Alaska",
        "subject": "History"
    },
    {
        "question": "Which human rights organisation founded in 1961 won a Nobel Prize in 1977",
        "answer": "Amnesty International",
        "subject": "History"
    },
    {
        "question": "In which city was Anne Frank's hiding place?",
        "answer": "Amsterdam",
        "subject": "History"
    },
    {
        "question": "Who was the Greek god of War?",
        "answer": "Ares",
        "subject": "History"
    },
    {
        "question": "Who was the Greek goddess of Wisdom?",
        "answer": "Athena",
        "subject": "History"
    },
    {
        "question": "Where would you find the world's most ancient forest?",
        "answer": "Austrailia (The Daintree Rainforest)",
        "subject": "History"
    },
    {
        "question": "Which founding father invented the lightning rod?",
        "answer": "Benjamin Franklin",
        "subject": "History"
    },
    {
        "question": "In 1927, who became the first man to fly solo and non-stop across the Atlantic?",
        "answer": "Charles Lindberg",
        "subject": "History"
    },
    {
        "question": "The first fireworks were invented in the 7th century in what country?",
        "answer": "China",
        "subject": "History"
    },
    {
        "question": "Which famous soda first hit the market in 1886?",
        "answer": "Coca-Cola",
        "subject": "History"
    },
    {
        "question": "Which important historical document was signed in 1776?",
        "answer": "Declaration of Independence",
        "subject": "History"
    },
    {
        "question": "Which country gifted the US the statue of liberty?",
        "answer": "France",
        "subject": "History"
    },
    {
        "question": "Who is on the one dollar bill?",
        "answer": "George Washington",
        "subject": "History"
    },
    {
        "question": "Which country led the Axis Powers in WWII?",
        "answer": "Germany",
        "subject": "History"
    },
    {
        "question": "Who was the Greek god of trade and travel?",
        "answer": "Hermes",
        "subject": "History"
    },
    {
        "question": "What explorer introduced pigs to North America?",
        "answer": "Hernando De Soto",
        "subject": "History"
    },
    {
        "question": "Which city was the first to be attacked by an atomic bomb?",
        "answer": "Hiroshima",
        "subject": "History"
    },
    {
        "question": "Who discovered King Tut's tomb in 1922",
        "answer": "Howard Carter",
        "subject": "History"
    },
    {
        "question": "Which venerated civil rights activist delivered his famous \"I Have a Dream\" speech to the March on Washington in 1963?",
        "answer": "Martin Luther King Jr.",
        "subject": "History"
    },
    {
        "question": "Which massive South Dakota sculpture depicts 4 US Presidents on the side of a mountain?",
        "answer": "Mt. Rushmore",
        "subject": "History"
    },
    {
        "question": "Which Washington volcano erupted in 1980?",
        "answer": "Mt. St. Helens",
        "subject": "History"
    },
    {
        "question": "Which Leader sold Louisiana to the US in 1803?",
        "answer": "Napolean",
        "subject": "History"
    },
    {
        "question": "Which famous French Leader passed away exiled in St. Helena",
        "answer": "Napolean",
        "subject": "History"
    },
    {
        "question": "In 1945, the atomic bomb was tested in this state:",
        "answer": "New Mexico",
        "subject": "History"
    },
    {
        "question": "In which Lousisana city did 2005's Hurricane Katrina hit the hardest?",
        "answer": "New Orleans",
        "subject": "History"
    },
    {
        "question": "Who was the leader of the Soviet Union during the Cuban Missile Crisis?",
        "answer": "Nikita Khrushchev",
        "subject": "History"
    },
    {
        "question": "What industry did John D. Rockefeller obtain most of his wealth from?",
        "answer": "Oil",
        "subject": "History"
    },
    {
        "question": "One of the world's largest chocolate factories is in this state:",
        "answer": "Pennsylvania",
        "subject": "History"
    },
    {
        "question": "Who was the Greek god of the Ocean?",
        "answer": "Posiedon",
        "subject": "History"
    },
    {
        "question": "Who discovered the cell?",
        "answer": "Robert Hooke",
        "subject": "History"
    },
    {
        "question": "Which ice cream flavor was named for the Great Depression?",
        "answer": "Rocky Road",
        "subject": "History"
    },
    {
        "question": "What discovery allowed historians crack hieroglyphics?",
        "answer": "Rosetta Stone",
        "subject": "History"
    },
    {
        "question": "In WWII, a popular poster featuring this woman was popuarized featuring the phrase \"We Can Do It!\"",
        "answer": "Rosie the Riveter",
        "subject": "History"
    },
    {
        "question": "The ancient city of Rome was built on how many hills?",
        "answer": "seven",
        "subject": "History"
    },
    {
        "question": "Which country introduced the TV dinner in the early fifties?",
        "answer": "Swanson",
        "subject": "History"
    },
    {
        "question": "Which communication technology used Morse Code?",
        "answer": "telegraph",
        "subject": "History"
    },
    {
        "question": "Which war lasted from 1861-1865?",
        "answer": "the American Civil War",
        "subject": "History"
    },
    {
        "question": "In 1969, NASA's Apollo 11 mission finally landed where?",
        "answer": "The moon",
        "subject": "History"
    },
    {
        "question": "Julius Caesar was the emperor of which Empire?",
        "answer": "The Roman Empire",
        "subject": "History"
    },
    {
        "question": "What is Alexander Graham Bell famous for?",
        "answer": "the telephone",
        "subject": "History"
    },
    {
        "question": "Who is on the 50 dollar bill?",
        "answer": "Ulysses S Grant",
        "subject": "History"
    },
    {
        "question": "Who was the British Prime Minister during WWII?",
        "answer": "Winston Churchill",
        "subject": "History"
    },
    {
        "question": "What is the currency of Japan?",
        "answer": "Yen",
        "subject": "History"
    },
    {
        "question": "Who was the Greek god of the sky and king of the gods?",
        "answer": "Zeus",
        "subject": "History"
    },
    {
        "question": "It is Dutch tradition to hold bonfires of these holiday decorations on New Years:",
        "answer": "Christmas trees",
        "subject": "Holidays"
    },
    {
        "question": "What holiday is in the month of December?",
        "answer": "Christmas, Hanuukah, Quanzaa",
        "subject": "Holidays"
    },
    {
        "question": "Which Islamic holiday is celebrated after Ramadan?",
        "answer": "Eid al Fitr",
        "subject": "Holidays"
    },
    {
        "question": "For how many nights is Hanukkah celebrated?",
        "answer": "Eight",
        "subject": "Holidays"
    },
    {
        "question": "Emerald is the birthstone for which month?",
        "answer": "May",
        "subject": "Holidays"
    },
    {
        "question": "Which Islamic holiday is marked by fasting?",
        "answer": "Ramadan",
        "subject": "Holidays"
    },
    {
        "question": "Which autumn celebration was made into a national holiday by President Lincoln? ",
        "answer": "Thanksgiving",
        "subject": "Holidays"
    },
    {
        "question": "Which date is the Ides of March?",
        "answer": "2020-03-15T07:00:00.000Z",
        "subject": "Language"
    },
    {
        "question": "What is the first letter of the greek alphabet?",
        "answer": "alpha",
        "subject": "Language"
    },
    {
        "question": "The words 'the,' 'an,' and 'a,' are known as what in English grammar?",
        "answer": "Articles",
        "subject": "Language"
    },
    {
        "question": "Claustrophobia is the fear of what?",
        "answer": "confined spaces",
        "subject": "Language"
    },
    {
        "question": "What is an 8-letter word which means the same thing as forever?",
        "answer": "eternity",
        "subject": "Language"
    },
    {
        "question": "\"E.T.\" is an acronym for what synonym for alien?",
        "answer": "extraterrestrial",
        "subject": "Language"
    },
    {
        "question": "Canada's official langauges include English and which other?",
        "answer": "French",
        "subject": "Language"
    },
    {
        "question": "The word \"hotel\" originated in which language?",
        "answer": "French",
        "subject": "Language"
    },
    {
        "question": "What does the German greeting \"Guten tag\" mean in English?",
        "answer": "Good afternoon",
        "subject": "Language"
    },
    {
        "question": "What does it mean to have \"all your ducks in a row\"?",
        "answer": "Having all of your affairs in order",
        "subject": "Language"
    },
    {
        "question": "Ancient Egyptians had a written language made of symbols called...",
        "answer": "hieroglyphics",
        "subject": "Language"
    },
    {
        "question": "What is a three word phrase that comes from French and means \"instead\"?",
        "answer": "in lieu of",
        "subject": "Language"
    },
    {
        "question": "Letters that aren't capitalized are...",
        "answer": "lowercase",
        "subject": "Language"
    },
    {
        "question": "What do you call nouns that should be capitalized?",
        "answer": "Proper noun",
        "subject": "Language"
    },
    {
        "question": "If you want to add a Postscript message to a letter, you might use this acronym:",
        "answer": "PS",
        "subject": "Language"
    },
    {
        "question": "To satisfy one's thirst is to...",
        "answer": "quench",
        "subject": "Language"
    },
    {
        "question": "Name a novel by Shakespeare.",
        "answer": "Romeo and Juliet, Hamlet, The Tempest, Twelth Night, Midsummer's Night Dream etc.",
        "subject": "Language"
    },
    {
        "question": "Arachnophobia is the fear of what?",
        "answer": "spiders",
        "subject": "Language"
    },
    {
        "question": "What is the term for a word that is similar in meaning to another word?",
        "answer": "synonyms",
        "subject": "Language"
    },
    {
        "question": "How much is a baker's dozen?",
        "answer": "thirteen",
        "subject": "Language"
    },
    {
        "question": "This three-letter-word is often used to describe the early hours of the morning:",
        "answer": "wee",
        "subject": "Language"
    },
    {
        "question": "Which novel written by Charles Dickens features a plot that crosses over from London to Paris?",
        "answer": "A Tale of Two Cities",
        "subject": "Literature"
    },
    {
        "question": "The cruel leader Vlad the Impaler inspired which early vampire character?",
        "answer": "Count Dracula",
        "subject": "Literature"
    },
    {
        "question": "What is the title of person in charge of a newspaper or magazine?",
        "answer": "editor",
        "subject": "Literature"
    },
    {
        "question": "F. Scott Fizgerald wrote this famous novel about the roaring twenties: The Great ....",
        "answer": "Gatsby",
        "subject": "Literature"
    },
    {
        "question": "Who wrote 1984?",
        "answer": "George Orwell",
        "subject": "Literature"
    },
    {
        "question": "Who wrote Animal Farm?",
        "answer": "George Orwell",
        "subject": "Literature"
    },
    {
        "question": "Which of Shakespeare's plays is the longest?",
        "answer": "Hamlet",
        "subject": "Literature"
    },
    {
        "question": "Which Shakespearean character posed the question \"To be or not to be?\"",
        "answer": "Hamlet",
        "subject": "Literature"
    },
    {
        "question": "Who wrote The Catcher in the Rye?",
        "answer": "J.D. Salinger",
        "subject": "Literature"
    },
    {
        "question": "Who wrote Gulliver's Travels?",
        "answer": "Jonathan Swift",
        "subject": "Literature"
    },
    {
        "question": "This Greek maze is famous for trapping the minotaur:",
        "answer": "Labyrinth",
        "subject": "Literature"
    },
    {
        "question": "This author is famous for writing the adventures of Huckleberry Finn",
        "answer": "Mark Twain",
        "subject": "Literature"
    },
    {
        "question": "King Arthur's famous wizard advisor was named what?",
        "answer": "Merlin",
        "subject": "Literature"
    },
    {
        "question": "What is the main character in a story called?",
        "answer": "Protagonist",
        "subject": "Literature"
    },
    {
        "question": "Who Wrote about Willie Wonka and the Chocolate Factory?",
        "answer": "Roald Dahl",
        "subject": "Literature"
    },
    {
        "question": "Who wrote Macbeth and Hamlet?",
        "answer": "Shakespeare",
        "subject": "Literature"
    },
    {
        "question": "17 years before J.R.R. Tolkein wrote The Lord of the Rings series, he wrote this book:",
        "answer": "The Hobbit",
        "subject": "Literature"
    },
    {
        "question": "The Illiad and Odyssey tell the story of which ancient war?",
        "answer": "The Trojan War",
        "subject": "Literature"
    },
    {
        "question": "What is the name of the fairy in Peter Pan?",
        "answer": "Tinker Bell",
        "subject": "Literature"
    },
    {
        "question": "Which best-selling book about racism was authored by Harper Lee in the year 1961?",
        "answer": "To Kill a Mockingbird",
        "subject": "Literature"
    },
    {
        "question": "In Herman Melville's Moby Dick, Moby Dick is what kind of animal?",
        "answer": "Whale",
        "subject": "Literature"
    },
    {
        "question": "Which fictional bear is known for his love of honey?",
        "answer": "Winnie the Pooh",
        "subject": "Literature"
    },
    {
        "question": "What percent of an average person's body weight is their skin?",
        "answer": 0.15,
        "subject": "Math and Science",
        "difficulty": 3
    },
    {
        "question": "What percent is equal to a quarter?",
        "answer": 0.25,
        "subject": "Math and Science"
    },
    {
        "question": "What is the decimal form of one half (1/2)?",
        "answer": 0.5,
        "subject": "Math and Science"
    },
    {
        "question": "How many lungs do humans have?",
        "answer": 2,
        "subject": "Math and Science"
    },
    {
        "question": "How many sides does an octagon have?",
        "answer": 8,
        "subject": "Math and Science"
    },
    {
        "question": "The roman numeral VIII represents which numeric quantity?",
        "answer": 8,
        "subject": "Math and Science"
    },
    {
        "question": "How many teeth does an adult usually have?",
        "answer": 32,
        "subject": "Math and Science",
        "difficulty": 2
    },
    {
        "question": "A right angle has how many degrees?",
        "answer": 90,
        "subject": "Math and Science"
    },
    {
        "question": "How many degrees are there in a triangle?",
        "answer": 180,
        "subject": "Math and Science"
    },
    {
        "question": "How many bones are there in the adult human body?",
        "answer": 206,
        "subject": "Math and Science",
        "difficulty": 2
    },
    {
        "question": "How many degrees are there in a square?",
        "answer": 360,
        "subject": "Math and Science"
    },
    {
        "question": "How many grams are there in a kilogram?",
        "answer": 1000,
        "subject": "Math and Science"
    },
    {
        "question": "How many tastebuds are on the human tongue?",
        "answer": "10,000 tastebuds",
        "subject": "Math and Science",
        "difficulty": 3
    },
    {
        "question": "How old is the oldest living person on earth?",
        "answer": "117 years old",
        "subject": "Math and Science"
    },
    {
        "question": "What is the longest recorded human lifespan?",
        "answer": "122 years old, Jeanne Calment of France",
        "subject": "Math and Science"
    },
    {
        "question": "What is the sum of the angles in a triangle?",
        "answer": "180 degrees",
        "subject": "Math and Science"
    },
    {
        "question": "How many ribs are in a human body?",
        "answer": "24 ribs",
        "subject": "Math and Science"
    },
    {
        "question": "How many timezones are there in the world?",
        "answer": "24 timezones",
        "subject": "Math and Science"
    },
    {
        "question": "What is the longest period of time a human has stayed awake?",
        "answer": "264 hours or 11 days ",
        "subject": "Math and Science",
        "difficulty": 3
    },
    {
        "question": "How long does it take for the moon to cycle through all of its phases (from full moon to full moon)?",
        "answer": "28 days",
        "subject": "Math and Science"
    },
    {
        "question": "How many times does the heart beat in an average human life time?",
        "answer": "3 billion times",
        "subject": "Math and Science",
        "difficulty": 3
    },
    {
        "question": "How many feet are in a yard?",
        "answer": "3 feet",
        "subject": "Math and Science"
    },
    {
        "question": "How many dreams do we have per night?",
        "answer": "3-5, but we can have up to 7",
        "subject": "Math and Science",
        "difficulty": 2
    },
    {
        "question": "At what temperature does water freeze?",
        "answer": "32 degrees F, 0 degrees C",
        "subject": "Math and Science"
    },
    {
        "question": "How many degrees are there in a circle?",
        "answer": "360 degrees",
        "subject": "Math and Science"
    },
    {
        "question": "How much does one's hair grow in a year?",
        "answer": "6 inches",
        "subject": "Math and Science"
    },
    {
        "question": "How many colors are there in the rainbow?",
        "answer": "7 colors",
        "subject": "Math and Science"
    },
    {
        "question": "What is the diameter of the earth?",
        "answer": "7,917.5 miles",
        "subject": "Math and Science"
    },
    {
        "question": "What is the average temperature of the human body?",
        "answer": "98.6 degrees fahreinheit",
        "subject": "Math and Science",
        "difficulty": 2
    },
    {
        "question": "About how many times a day do we blink our eyes?",
        "answer": "about 20,000 times a day, depending on what we are doing",
        "subject": "Math and Science",
        "difficulty": 3
    },
    {
        "question": "About how much blood is contained within the human body?",
        "answer": "about 8 pints or 3.79 liters",
        "subject": "Math and Science",
        "difficulty": 3
    },
    {
        "question": "How much does one's hair grow in a year?",
        "answer": "about six inches",
        "subject": "Math and Science",
        "difficulty": 3
    },
    {
        "question": "Who created the theory of Relativity?",
        "answer": "Albert Einstein",
        "subject": "Math and Science"
    },
    {
        "question": "Where is the leg bone connected to the foot bone?",
        "answer": "ankle",
        "subject": "Math and Science"
    },
    {
        "question": "What does a barometer measure?",
        "answer": "Atmospheric pressure",
        "subject": "Math and Science"
    },
    {
        "question": "The modern descendents of dinosaurs are...",
        "answer": "birds",
        "subject": "Math and Science"
    },
    {
        "question": "What is classified in an ABO system",
        "answer": "blood",
        "subject": "Math and Science"
    },
    {
        "question": "What color eyes do most humans have?",
        "answer": "Brown",
        "subject": "Math and Science"
    },
    {
        "question": "Diamonds are made from highly compressed...",
        "answer": "carbon",
        "subject": "Math and Science"
    },
    {
        "question": "What is a hole in one's tooth called?",
        "answer": "cavity",
        "subject": "Math and Science"
    },
    {
        "question": "What's the hardest rock or mineral?",
        "answer": "Diamond",
        "subject": "Math and Science"
    },
    {
        "question": "Where is the smallest bone in the human body located?",
        "answer": "ear (the stapes)",
        "subject": "Math and Science",
        "difficulty": 3
    },
    {
        "question": "True or false: when you breathe through your nose, the air flows through both nostrils evenly.",
        "answer": "FALSE!",
        "subject": "Math and Science",
        "difficulty": 3
    },
    {
        "question": "What is a river of ice called?",
        "answer": "glacier ",
        "subject": "Math and Science"
    },
    {
        "question": " Which metal is heavier: silver or gold?",
        "answer": "gold",
        "subject": "Math and Science"
    },
    {
        "question": "What is the name of the downward pulling force that keeps us on the surface of the Earth?",
        "answer": "gravity",
        "subject": "Math and Science"
    },
    {
        "question": "What is the first element on the period table of elements?",
        "answer": "Hydrogen",
        "subject": "Math and Science"
    },
    {
        "question": "Which unit of measurement is about the width of your thumb?",
        "answer": "inch",
        "subject": "Math and Science"
    },
    {
        "question": "Fe is the chemical symbol of what element?",
        "answer": "Iron",
        "subject": "Math and Science"
    },
    {
        "question": "Which element is Fe?",
        "answer": "Iron",
        "subject": "Math and Science"
    },
    {
        "question": "Who formulated the Laws of Motion?",
        "answer": "Isaac Newton",
        "subject": "Math and Science"
    },
    {
        "question": "Who is considered to be the father of Calculus?",
        "answer": "Isaac Newton",
        "subject": "Math and Science"
    },
    {
        "question": "Who discovered gravity?",
        "answer": "Isaac Newton",
        "subject": "Math and Science"
    },
    {
        "question": "Which planet has the most moons in our solar system?",
        "answer": "Jupiter",
        "subject": "Math and Science"
    },
    {
        "question": "Where in your body is the patella",
        "answer": "kneecaps (patella)",
        "subject": "Math and Science"
    },
    {
        "question": "Which bone are babies born without?",
        "answer": "kneecaps (patella)",
        "subject": "Math and Science",
        "difficulty": 3
    },
    {
        "question": "Which planet has the nickname \"The Red Planet'?",
        "answer": "Mars",
        "subject": "Math and Science"
    },
    {
        "question": "Which planet is closest to the Sun?",
        "answer": "Mercury",
        "subject": "Math and Science"
    },
    {
        "question": "Which planet is third from the Sun?",
        "answer": "Earth",
        "subject": "Math and Science"
    },
    {
        "question": "Which planet is fourth from the Sun?",
        "answer": "Mars",
        "subject": "Math and Science"
    },
    {
        "question": "Which planet is fifth from the Sun?",
        "answer": "Jupiter",
        "subject": "Math and Science"
    },
    {
        "question": "Which planet is sixth from the Sun?",
        "answer": "Saturn",
        "subject": "Math and Science"
    },
    {
        "question": "Which planet is seventh from the Sun?",
        "answer": "Uranus",
        "subject": "Math and Science"
    },
    {
        "question": "In which galaxy do we live?",
        "answer": "Milky Way",
        "subject": "Math and Science"
    },
    {
        "question": "The acronym NASA stands for what?",
        "answer": "National Aeronautics and Space Administration",
        "subject": "Math and Science"
    },
    {
        "question": "Which constellation is made up of a straight line of three stars?",
        "answer": "Orion's Belt",
        "subject": "Math and Science"
    },
    {
        "question": "What is the most easily identifiable year-round constellation?",
        "answer": "Big Dipper",
        "subject": "Math and Science"
    },
    {
        "question": "What is the name of the process by which plants can make energy using sunlight?",
        "answer": "Photosynthesis",
        "subject": "Math and Science",
        "difficulty": 2
    },
    {
        "question": "What is the official name of the North Star?",
        "answer": "Polaris",
        "subject": "Math and Science"
    },
    {
        "question": "What particle has a positive charge and makes up the nucleus of an atom?",
        "answer": "Proton",
        "subject": "Math and Science"
    },
    {
        "question": "What is a Geiger counter used to detect?",
        "answer": "radiation",
        "subject": "Math and Science"
    },
    {
        "question": "What color are rubies?",
        "answer": "red",
        "subject": "Math and Science"
    },
    {
        "question": "What color is at the top of the rainbow?",
        "answer": "red",
        "subject": "Math and Science"
    },
    {
        "question": "What are the three primary colors?",
        "answer": "Red, Blue, and Yellow",
        "subject": "Math and Science"
    },
    {
        "question": "What is glass made of?",
        "answer": "sand",
        "subject": "Math and Science"
    },
    {
        "question": "What is the chemical name for table salt?",
        "answer": "sodium chloride",
        "subject": "Math and Science"
    },
    {
        "question": "What is it called when the moon crosses in front of the sun and casts its shadow on the Earth?",
        "answer": "Solar Eclipse",
        "subject": "Math and Science"
    },
    {
        "question": "What does the science of acoustics study?",
        "answer": "sound",
        "subject": "Math and Science"
    },
    {
        "question": "What is another word for velocity?",
        "answer": "speed",
        "subject": "Math and Science"
    },
    {
        "question": "What type of acid is added to in car batteries?",
        "answer": "Sulphuric Acid",
        "subject": "Math and Science"
    },
    {
        "question": "What do you call the solution to an addition problem?",
        "answer": "Sum",
        "subject": "Math and Science"
    },
    {
        "question": "What word can you use to describe something that looks the same on either side, like a butterfly?",
        "answer": "symmetrical",
        "subject": "Math and Science"
    },
    {
        "question": "What does a thermometer measure?",
        "answer": "Temperature",
        "subject": "Math and Science"
    },
    {
        "question": "Which invention is assosiated with the Wright Brothers?",
        "answer": "the airplane",
        "subject": "Math and Science"
    },
    {
        "question": "Who discovered radium?",
        "answer": "the Curie's",
        "subject": "Math and Science"
    },
    {
        "question": "What is the tallest tree in the world?",
        "answer": "The Giant Sequoia in California's Sequoia National Park",
        "subject": "Math and Science"
    },
    {
        "question": "Which organ system in the human body works to fight off foreign viruses, bacteria, and fungi?",
        "answer": "the Immune System",
        "subject": "Math and Science"
    },
    {
        "question": "Which organ in the body has the ability to regenerate itself?",
        "answer": "the liver",
        "subject": "Math and Science",
        "difficulty": 2
    },
    {
        "question": "What is the strongest muscle in the body?",
        "answer": "the masseter muscle in the jaw, strongest based on weight, can exert over 200 pounds of force on the molars",
        "subject": "Math and Science",
        "difficulty": 3
    },
    {
        "question": "What part of a plant absorbs water from the ground in order to grow?",
        "answer": "the roots",
        "subject": "Math and Science"
    },
    {
        "question": "What device is used to measure temperature?",
        "answer": "thermometer",
        "subject": "Math and Science"
    },
    {
        "question": "Who averaged one patent every three weeks of his life?",
        "answer": "Thomas Edison",
        "subject": "Math and Science"
    },
    {
        "question": "Who invented the lightbulb?",
        "answer": "Thomas Edison",
        "subject": "Math and Science"
    },
    {
        "question": "What is the hardest substance in the human body? ",
        "answer": "tooth enamel",
        "subject": "Math and Science"
    },
    {
        "question": "Trigonometry is based on which shape?",
        "answer": "triangle",
        "subject": "Math and Science"
    },
    {
        "question": "Which planet has a day that lasts almost eight months on Earth?",
        "answer": "Venus",
        "subject": "Math and Science"
    },
    {
        "question": "Which planet is second from the Sun?",
        "answer": "Venus",
        "subject": "Math and Science"
    },
    {
        "question": "Which planet is the hottest in the solar system?",
        "answer": "Venus",
        "subject": "Math and Science"
    },
    {
        "question": "Which unit starts with \"v\" and measures electricity?",
        "answer": "volts",
        "subject": "Math and Science"
    },
    {
        "question": "Meterology is the study of what natural phenomenon?",
        "answer": "weather",
        "subject": "Math and Science"
    },
    {
        "question": "In a website browser address bar, what does \"www\" stand for?",
        "answer": "World Wide Web",
        "subject": "Math and Science"
    },
    {
        "question": "Who was the first man in space?",
        "answer": "Yuri Gagarin",
        "subject": "Math and Science"
    },
    {
        "question": "How many nights are in a fortnight?",
        "answer": 14,
        "subject": "Miscellaneous"
    },
    {
        "question": "What are the last 5 words of the song that begins, \"O say can you see...\"?",
        "answer": "\"the home of the brave\"",
        "subject": "Miscellaneous"
    },
    {
        "question": "How many miles do a typist's fingers travel during an average day?",
        "answer": "12.6 miles",
        "subject": "Miscellaneous"
    },
    {
        "question": "What is the tiny piece of plastic at the end of a shoelace called?",
        "answer": "an aglet",
        "subject": "Miscellaneous"
    },
    {
        "question": "What does BMW stand for (in English)?",
        "answer": "Bavarian Motor Works",
        "subject": "Miscellaneous"
    },
    {
        "question": "Who invented the Bifocals?",
        "answer": "Benjamin Franklin",
        "subject": "Miscellaneous"
    },
    {
        "question": "Who is the owner of Microsoft?",
        "answer": "Bill Gates",
        "subject": "Miscellaneous"
    },
    {
        "question": "Which chess piece could be a member of the Church?",
        "answer": "bishop",
        "subject": "Miscellaneous"
    },
    {
        "question": "What links the names Tal, Karpov, Fischer?",
        "answer": "Chess World Champs",
        "subject": "Miscellaneous"
    },
    {
        "question": "What color are emeralds?",
        "answer": "green",
        "subject": "Miscellaneous"
    },
    {
        "question": "What color is jade?",
        "answer": "green",
        "subject": "Miscellaneous"
    },
    {
        "question": "Who was Erich Weiss better known as?",
        "answer": "Harry Houdini",
        "subject": "Miscellaneous"
    },
    {
        "question": "Who started the first hospital?",
        "answer": "Harun Al-Rashid",
        "subject": "Miscellaneous"
    },
    {
        "question": "Who invented the first safety razor?",
        "answer": "King Camp Gillete",
        "subject": "Miscellaneous"
    },
    {
        "question": "Which board game is named after a market in which there is no competition for a product or service?",
        "answer": "Monopoly",
        "subject": "Miscellaneous"
    },
    {
        "question": "Which trendy 70's jewelry changes color according to one's mood?",
        "answer": "Mood ring",
        "subject": "Miscellaneous"
    },
    {
        "question": "Which precious gem is known for its red color?",
        "answer": "Ruby",
        "subject": "Miscellaneous"
    },
    {
        "question": "Which September birthstone is dark blue?",
        "answer": "sapphire",
        "subject": "Miscellaneous"
    },
    {
        "question": "Which board game is played by arranging letter tiles into words on a board?",
        "answer": "Scrabble",
        "subject": "Miscellaneous"
    },
    {
        "question": "What do you call an importer of illegal goods?",
        "answer": "smuggler",
        "subject": "Miscellaneous"
    },
    {
        "question": "In some theaters, the lowest balcony is referred to as:",
        "answer": "the Mezzanine",
        "subject": "Miscellaneous"
    },
    {
        "question": "What is a bicycle with three wheels called?",
        "answer": "tricycle",
        "subject": "Miscellaneous"
    },
    {
        "question": "Who was Harry Houdini?",
        "answer": "a magician/escape artist",
        "subject": "Movies and TV"
    },
    {
        "question": "Who directed the movie Psycho?",
        "answer": "Alfred Hitchcock",
        "subject": "Movies and TV"
    },
    {
        "question": "Name as many of Snow White's Seven dwarves as you can.",
        "answer": "Doc, Grumpy, Happy, Sleepy, Bashful, Sneezy, and Dopey",
        "subject": "Movies and TV"
    },
    {
        "question": "Which actress married for the 7th time on Michael Jackson's ranch in 1991?",
        "answer": "Elizabeth Taylor",
        "subject": "Movies and TV"
    },
    {
        "question": "For which movie did Robert de Niro win his first oscar?",
        "answer": "Godfather",
        "subject": "Movies and TV"
    },
    {
        "question": "007 is the code name for which famous spy character?",
        "answer": "James Bond",
        "subject": "Movies and TV"
    },
    {
        "question": "The title role of the 1990 movie \"Pretty Woman\" was played by which actress?",
        "answer": "Julia Roberts",
        "subject": "Movies and TV"
    },
    {
        "question": "What is Superman's weakness?",
        "answer": "Kryptonite",
        "subject": "Movies and TV"
    },
    {
        "question": "Who was the main actor in Titanic?",
        "answer": "Leonardo Dicaprio",
        "subject": "Movies and TV"
    },
    {
        "question": "Which 70s TV show was based on doctors in the Korean War?",
        "answer": "M*A*S*H",
        "subject": "Movies and TV"
    },
    {
        "question": "Who wrote Gone with the Wind?",
        "answer": "Margaret Mitchell",
        "subject": "Movies and TV"
    },
    {
        "question": "Playwright Arthur Miller was married to which famous blond actress?",
        "answer": "Marilyn Monroe",
        "subject": "Movies and TV"
    },
    {
        "question": "What was the first toy to be advertised on television?",
        "answer": "Mr. Potato Head",
        "subject": "Movies and TV"
    },
    {
        "question": "Whose nose grew when he told a lie?",
        "answer": "Pinocchio",
        "subject": "Movies and TV"
    },
    {
        "question": "What was the name of the nightclub in Casablanca",
        "answer": "Rick's",
        "subject": "Movies and TV"
    },
    {
        "question": "This James Bond actor once competed in the Mr. Universe pagaent.",
        "answer": "Sean Connery",
        "subject": "Movies and TV"
    },
    {
        "question": "Which fictional detective has been portrayed by the most actors?",
        "answer": "Sherlock Holmes",
        "subject": "Movies and TV"
    },
    {
        "question": "For which film did Robert de Niro win his first Oscar?",
        "answer": "The Godfather Part II",
        "subject": "Movies and TV"
    },
    {
        "question": "By what other name is the Motion Picture Academy Awards also known?",
        "answer": "the Oscars",
        "subject": "Movies and TV"
    },
    {
        "question": "Who was the main actor in Forrest Gump?",
        "answer": "Tom Hanks",
        "subject": "Movies and TV"
    },
    {
        "question": "Who has won the most Academy Awards?",
        "answer": "Walt Disney",
        "subject": "Movies and TV"
    },
    {
        "question": "Who created Mickey Mouse?",
        "answer": "Walt Disney",
        "subject": "Movies and TV"
    },
    {
        "question": "How many Oscars did the Titanic (1997) win?",
        "answer": 11,
        "subject": "Movies and TV"
    },
    {
        "question": "How many times has Meryl Streep won the Academy Award for Best Actress?",
        "answer": 3,
        "subject": "Movies and TV"
    },
    {
        "question": "How many strings does a violin have?",
        "answer": 4,
        "subject": "Music"
    },
    {
        "question": "How many strings does a guitar have?",
        "answer": 6,
        "subject": "Music"
    },
    {
        "question": "How many strings are on a bass guitar?",
        "answer": 4,
        "subject": "Music"
    },
    {
        "question": "What is the leader of an orchestra or band called?",
        "answer": "a conductor",
        "subject": "Music"
    },
    {
        "question": "What is a band of four string instruments called?",
        "answer": "A string quartet",
        "subject": "Music"
    },
    {
        "question": "Who was the King of Swing?",
        "answer": "Benny Goodman",
        "subject": "Music"
    },
    {
        "question": "An album that sells 10 million copies is certified this gem...",
        "answer": "diamond",
        "subject": "Music"
    },
    {
        "question": "Which \"King of Rock and Roll\" purchased a Memphis Mansion called Graceland?",
        "answer": "Elvis Presley",
        "subject": "Music"
    },
    {
        "question": "Which artist released the song \"Hound Dog\"?",
        "answer": "Elvis Presley",
        "subject": "Music"
    },
    {
        "question": "What is the oldest musical instrument?",
        "answer": "flute",
        "subject": "Music"
    },
    {
        "question": "Which member of the Beatles had dyslexia?",
        "answer": "John Lennon",
        "subject": "Music"
    },
    {
        "question": "Which country artist recorded two of his best-selling albums in prison?",
        "answer": "Johnny Cash",
        "subject": "Music"
    },
    {
        "question": "Which pop singer is known as the material girl?",
        "answer": "Madonna",
        "subject": "Music"
    },
    {
        "question": "Who wrote the Turkish March?",
        "answer": "Mozart",
        "subject": "Music"
    },
    {
        "question": "Who was Marvin Gaye?",
        "answer": "musician - \"King of Motown\" or \"King of Soul\"",
        "subject": "Music"
    },
    {
        "question": "What are piano keys made out of?",
        "answer": "plastic or resin",
        "subject": "Music"
    },
    {
        "question": "What was the name of the drummer for the Beatles?",
        "answer": "Ringo Star",
        "subject": "Music"
    },
    {
        "question": "What band links the following names: Jagger, Stewart, Richards, Wyman, Watts, and Jones?",
        "answer": "Rolling Stones",
        "subject": "Music"
    },
    {
        "question": "What is Dean Martin famous for?",
        "answer": "singer, actor, and comedian",
        "subject": "Music"
    },
    {
        "question": "The classic hit \"Hey Jude\" was written by which famous band?",
        "answer": "The Beatles",
        "subject": "Music"
    },
    {
        "question": "Which world famous band announced their breakup in April of 1970?",
        "answer": "The Beatles",
        "subject": "Music"
    },
    {
        "question": "Which popular 1920's dance was named after a city in South Carolina?",
        "answer": "the Charleston",
        "subject": "Music"
    },
    {
        "question": "What is America's national anthem called?",
        "answer": "The Star-Spangled Banner",
        "subject": "Music"
    },
    {
        "question": "Which pop album is the best selling of all time? ",
        "answer": "Thriller by Michael Jackson",
        "subject": "Music"
    },
    {
        "question": "What is the minimum age required in order to run for President?",
        "answer": 35,
        "subject": "Politics"
    },
    {
        "question": "How many countries are part of the United Nations?",
        "answer": 193,
        "subject": "Politics"
    },
    {
        "question": "Who is on the five dollar bill?",
        "answer": "Abraham Lincoln",
        "subject": "Politics"
    },
    {
        "question": "Who was president during the U.S. Civil War?",
        "answer": "Abraham Lincoln",
        "subject": "Politics"
    },
    {
        "question": "Who was the President of the United States during the Civil War?",
        "answer": "Abraham Lincoln",
        "subject": "Politics"
    },
    {
        "question": "Who is on the ten dollar bill?",
        "answer": "Alexander Hamilton",
        "subject": "Politics"
    },
    {
        "question": "Who is on the twenty dollar bill?",
        "answer": "Andrew Jackson",
        "subject": "Politics"
    },
    {
        "question": "Who \"solemnly swears\" witnesses to tell the truth in a court of law?",
        "answer": "baliff",
        "subject": "Politics"
    },
    {
        "question": "Who is on the hundred dollar bill?",
        "answer": "Benjamin Franklin",
        "subject": "Politics"
    },
    {
        "question": "Name the last 5 presidents of the US.",
        "answer": "Donald Trump, Barack Obama, George Bush, Bill Clinton, George Bush Sr. ",
        "subject": "Politics"
    },
    {
        "question": "Who is the only U.S. president to serve more than two terms?",
        "answer": "FDR",
        "subject": "Politics"
    },
    {
        "question": "What does FBI stand for?",
        "answer": "Federal Bureau of Investigation",
        "subject": "Politics"
    },
    {
        "question": "Who was the only President elected unopposed?",
        "answer": "George Washington",
        "subject": "Politics"
    },
    {
        "question": "Who is on the quarter?",
        "answer": "George Washington",
        "subject": "Politics"
    },
    {
        "question": "What does GDP stand for?",
        "answer": "Gross Domestic Product",
        "subject": "Politics"
    },
    {
        "question": "Which US president was first elected in the year 1960?",
        "answer": "JFK",
        "subject": "Politics"
    },
    {
        "question": "Name the three branches of the US government.",
        "answer": "Legislative, Judicial, and Executive",
        "subject": "Politics"
    },
    {
        "question": "Who is the current pope?",
        "answer": "Pope Francis",
        "subject": "Politics"
    },
    {
        "question": "What is the lowest army rank of a US soldier?",
        "answer": "Private",
        "subject": "Politics"
    },
    {
        "question": "What color is the circle on the Japanese national flag?",
        "answer": "red",
        "subject": "Politics"
    },
    {
        "question": "Who was responsible for the Watergate cover-up in 1972?",
        "answer": "Richard Nixon",
        "subject": "Politics"
    },
    {
        "question": "Which American President was an actor?",
        "answer": "Ronald Reagan",
        "subject": "Politics"
    },
    {
        "question": "What are the first ten amendments to the Constitution called?",
        "answer": "The Bill of Rights",
        "subject": "Politics"
    },
    {
        "question": "In which document did the Founding Fathers declare war on England in 1776?",
        "answer": "The Declaration of Independence",
        "subject": "Politics"
    },
    {
        "question": "Which amendment to the Constitution contains the right of the people to free speech?",
        "answer": "the first amendment",
        "subject": "Politics"
    },
    {
        "question": "Where does the US President live?",
        "answer": "White House",
        "subject": "Politics"
    },
    {
        "question": "What does W.H.O. stand for?",
        "answer": "World Health Organization",
        "subject": "Politics"
    },
    {
        "question": "How many rings make up the symbol of the Olympic Games?",
        "answer": 5,
        "subject": "Sports",
        "difficulty": 3
    },
    {
        "question": "How much is the first point in a tennis game worth?",
        "answer": 15,
        "subject": "Sports",
        "difficulty": 2
    },
    {
        "question": "When were the Americas discovered by European explorers?",
        "answer": 1492,
        "subject": "Sports",
        "difficulty": 2
    },
    {
        "question": "What is the weight of a man's Olympic discus?",
        "answer": "2 kg",
        "subject": "Sports"
    },
    {
        "question": "Where did the Olympic games originate?",
        "answer": "Athens, Greece",
        "subject": "Sports"
    },
    {
        "question": "Which famous baseball player started his career at 19 playing for the Boston Red Sox?",
        "answer": "Babe Ruth",
        "subject": "Sports",
        "difficulty": 2
    },
    {
        "question": "Babe Ruth is associated with which sport?",
        "answer": "baseball",
        "subject": "Sports"
    },
    {
        "question": "What sport is Kobe Bryant famous for?",
        "answer": "basketball",
        "subject": "Sports",
        "difficulty": 1
    },
    {
        "question": "What is the national game of England?",
        "answer": "Cricket",
        "subject": "Sports",
        "difficulty": 2
    },
    {
        "question": "How often do the Olympics occur? ",
        "answer": "every 4 years",
        "subject": "Sports",
        "difficulty": 1
    },
    {
        "question": "In what sport can you get a hole in one?",
        "answer": "Golf",
        "subject": "Sports"
    },
    {
        "question": "Which athlete has won the greatest number of gold medals at a single Olympics, and how many?",
        "answer": "Michael Phelps, 8",
        "subject": "Sports",
        "difficulty": 3
    },
    {
        "question": "At the 1976 Olympic Games in Montreal, gymnast Nadia Comaneci became the first gymnast to score a perfect 10. Which country was she representing?",
        "answer": "Romania",
        "subject": "Sports",
        "difficulty": 3
    },
    {
        "question": "What is the national sport of Japan?",
        "answer": "sumo wrestling",
        "subject": "Sports",
        "difficulty": 2
    },
    {
        "question": "How many events are there in a decathlon?",
        "answer": "ten",
        "subject": "Sports",
        "difficulty": 2
    },
    {
        "question": "Which Olympic running event was won by a barefoot competitor in 1960?",
        "answer": "the marathon",
        "subject": "Sports",
        "difficulty": 3
    },
    {
        "question": "How many strikes can a player get in baseball before they are out?",
        "answer": "three strikes",
        "subject": "Sports",
        "difficulty": 1
    },
    {
        "question": "What is the only city which has hosted the Olympics three times?",
        "answer": "London, England",
        "subject": "Sports"
    },
    {
        "question": "In which year did the first modern Olympic games take place?",
        "answer": 1896,
        "subject": "Sports"
    },
    {
        "question": "Gold metals stopped being made out of solid gold in which year?",
        "answer": 1912,
        "subject": "Sports"
    },
    {
        "question": "Modern Olympic gold metals are mostly composed of which metal?",
        "answer": "Silver",
        "subject": "Sports"
    },
    {
        "question": "Why did the US boycott the 1980 Summer Olympics?",
        "answer": "To protest the Soviet invasion of Afganistan",
        "subject": "Sports"
    },
    {
        "question": "Why was American marathon runner Fred Lorz disqualified during the 1904 Summer Olympics?",
        "answer": "He had hitched a ride for most of the race, and only ran the last four miles.",
        "subject": "Sports"
    },
    {
        "question": "Which war claimed the life of the most US Soldiers?",
        "answer": "US Civil War"
    },
    {
        "question": "What percent of casualties in WWII were civilians?",
        "answer": 0.6
    },
    {
        "question": "What is the best selling novel of all time?",
        "answer": "Don Quixote"
    },
    {
        "question": "How many parts does the average car have?",
        "answer": 30000
    },
    {
        "question": "What was Steve Buscemi's job before he was an actor?",
        "answer": "Firefighter for NYFD"
    },
    {
        "question": "Who was Time's first Man of the Year in the year 1927?",
        "answer": "Charles Lindberg"
    },
    {
        "question": "In which city is the liberty bell?",
        "answer": "Philadelphia, Pennsylvania"
    },
    {
        "question": "What is the most valuable bill ever printed by the US Mint?",
        "answer": "the $100,000 bill, used 1934-35 for transfers between banks"
    },
    {
        "question": "What are the titular cities in A Tale of Two Cities?",
        "answer": "London, England, and Paris, France"
    },
    {
        "question": "What was the first car to be mass-produced?",
        "answer": "Ford Model T"
    },
    {
        "question": "According to Japanese legend, a sick person will recover if they fold 1,000 of what type of origami?",
        "answer": "crane"
    },
    {
        "question": "What conflict was known as \"The War to End All Wars\"?",
        "answer": "WWI"
    },
    {
        "question": "In Peanuts, what does Charlie Brown's father do for work?",
        "answer": "barber"
    },
    {
        "question": "What is the unit of currency in Russia?",
        "answer": "the ruble"
    },
    {
        "question": "Which poison do apple seeds contain in very small amounts?",
        "answer": "cyanide"
    },
    {
        "question": "Which of the political leader played prominent roles in both World War I and World War II?",
        "answer": "Winston Churchill"
    }
]

export default function getQuestion() {
    return questions[Math.floor(questions.length * Math.random())];
}
