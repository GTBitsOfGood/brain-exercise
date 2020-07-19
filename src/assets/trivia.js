const questions = {
    q1: {
        question: "What is the state capital of Brazil?",
        answer: "Brasilia",
        beenPosed: false,
    },
    q2: {
        question: "What is the biggest state in America?",
        answer: "Alaska",
        beenPosed: false,
    },
    q3: {
        question: "What is the most popular language spoken in Switzerland?",
        answer: "Swiss-German",
        beenPosed: false,
    },
    q4: {
        question: "What is the most populous state in America?",
        answer: "California",
        beenPosed: false,
    },
}

export default function getQuestion() {
    var keys = Object.keys(questions);
    return questions[keys[ keys.length * Math.random() << 0]];
}
