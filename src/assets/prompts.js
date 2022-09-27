const questions = ["Tell me about your day.", "Tell me about your family.", "Choose an animal and write about it.", "Write about one thing that was different in real life than it was on TV.", "Write about your favorite movie scene and why?", "Who is your favorite actor/actress?", "If you were to meet one President, who would it be and why?", "What is the most interesting fact you learned? Where did you learn it?", "What is the best piece of advice you received and why?", "What is something you took for granted for when you were a child?", "Which is better - chocolate candy or fruit candy? Why?", "What is the best place you visited?", "What is your fondest memory?", "What was your favorite thing to do with your parents?", "Who was your childhood best friend? What was the best quality about them?", "What is a little thing that makes your heart happy?", "Who is your favorite Disney character?", "If you were stuck on an island with five things, what would you choose?", "Write about a time you had a secret you couldn’t keep. What did you do.", "What is the favorite thing about your house? Why?", "Would you rather take a road trip or fly? Where would you go?", "What is your favorite sound in the entire world? Why?", "What is your favorite street? What makes it so special?", "Who is the best superhero?  What makes them so cool?", "What is your favorite thing to do at the park?  Why?", "Are you good at taking tests?  Why or why not?", "Write about a time when you were genuinely surprised.  What happened?", "Write about the most fun thing you’ve ever done with your best friend.", "How much time do you spend on the Internet each day?  What is your favorite thing to do online?", "Write about yourself.", "Write about a ghost. How did they become a ghost?", "Write about your morning routine.", "Write about your favorite season.", "Write from the perspective of a person in the year 2100.", "Write from the perspective of an inanimate object in nature, like a rock or the wind.", "What was your dream job as a child", "Imagine you have to hide important papers in your house. Write a story about where you would put it.", "Take a pivotal time in history and change the ending.", "Take a movie ending you didn’t like and write an alternative ending", "What is something you wish you knew when you were younger?", "Write about your favorite meal.", "What’s your favorite song?", "If you were President for a day, what would you do first?", "If you could learn any language in the world, which would you choose and why?", "What’s something you’re most proud about?", "Write a short letter to a stranger you never got to meet.", "What’s your favorite book? Why?", "Describe your favorite article of clothing.", "What’s your favorite outfit?", "What’s something you think should have not been invented?", "What does your dream house look like?", "What’s your favorite smell?", "Write about something you’re grateful for?", "What’s the most kind thing someone has done for you?", "What’s the kindest thing you’ve ever done for someone?", "Which restaurant’s food do you most miss? Why?", "What superpower would you most like to have? Why?", "If you could relive one day in your life, which would it be? Write about it.", "If you had the power to pause time, what would you use it to do?", "If you could speak to one species of animal, which would it be and why?", "Would you trust any of your friends to make all of your decisions for a day? Why or why not?", "What would you title the current chapter in the story of your life?", "Write a letter to yourself five years in the future.", "What would you do if you woke up invisible?", "If you ruled the world, what's something you would outlaw?", "If you could make anything in the world cease to exist, what would you choose?", "Pretend you're a building you know well. Talk about your life and your memories.", "If you could invent something to solve any problem in the world, what would you invent?", "Write about somebody you lost touch with and how you think their life turned out.", "Have you ever met a famous person? What were they like?", "If you could have lunch with any living person, who would you pick?", "Explain the steps to make your favorite food.", "What's something you do everyday that most people don't do?", "What’s the best lesson you’ve ever learned?", "Who is the best teacher you’ve ever had?", "What is your most prized possession?", "Who was your childhood hero?", "What’s your favorite word? Why?", "What’s your favorite movie?", "What’s the best compliment you’ve ever received?", "What does your ideal day look like?", "What gifts would you most like to receive?", "What's your favorite way to relax?", "What’s your favorite country in the world?", "What’s your favorite season and why?", "What’s your favorite holiday and why?", "Who do you look up to?", "What's the most fun you've ever had?", "What's something you would do if you weren't afraid?", "What’s the most vivid memory you have?", "What’s your favorite photograph? Describe it.", "What’s the most unique trait about you?", "Who was your first friend?", "What was your dream job as a child? What happened to it?", "What’s the first thing on your mind every morning?", "What's something you want to learn? What interests you about it?", "What’s something you could give a talk about with no preparation?", "What’s a book that you wish someone would write?", "What’s something you would say to yourself 10 years ago?", "What’s something unusual that makes you smile?", "What do you love about life?", "What would you do if you knew the world was ending next week?", "Is there something you’ve dreamed of doing for a long time? Why haven’t you done it?", "What’s a habit you wish you had?", "What’s a habit you wish you didn’t have?", "Who’s the most important person in your life?", "What do you value most in a friend?", "Do you prefer to be overdressed or underdressed?", "What’s something people assume about you when they first meet you?", "What do you consider to be your culture? How do you feel about it?", "What’s something you’re good at? Why are you good at it?", "Write the lyrics to a song that makes you happy.", "Write a short letter forgiving someone that has wronged you.","Do you believe in a higher being?", "In conversations, do you tend to listen or talk more? Would you change that if you could?", "If you could choose what to dream about, would you do it? Why or why not?", "Do you feel you have enough time? If not, what would give you that feeling?", "What’s a trait you find attractive in other people? Why?", "How would you like to be remembered?", "What 3 words would your friends use to describe you? Why?", "Do you think lying is ever okay? When and why?"]

export default function getQuestion() {
    return questions[Math.floor(questions.length * Math.random())];
}
