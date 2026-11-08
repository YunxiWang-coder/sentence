// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn?.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

// Close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});

// Random proverb generator
const proverbs = [
    {
        text: "When in Rome, do as the Romans do.",
        meaning: "Follow the local customs when you visit a new place."
    },
    {
        text: "No pains, no gains.",
        meaning: "You cannot get good results without hard work."
    },
    {
        text: "Practice makes perfect.",
        meaning: "Repeating an activity helps you master it over time."
    },
    {
        text: "Every coin has two sides.",
        meaning: "Everything has advantages and disadvantages."
    },
    {
        text: "A journey of a thousand miles begins with a single step.",
        meaning: "Big achievements start from small first actions."
    },
    {
        text: "Time flies.",
        meaning: "Time passes quickly, so use it wisely."
    },
    {
        text: "Actions speak louder than words.",
        meaning: "What you do is more important than what you say."
    },
    {
        text: "The early bird catches the worm.",
        meaning: "People who act early often get the best results."
    },
    {
        text: "Where there is a will, there is a way.",
        meaning: "If you have strong determination, you can find a solution."
    },
    {
        text: "A friend in need is a friend indeed.",
        meaning: "True friends help you when you are in trouble."
    },
    {
        text: "Don’t count your chickens before they’re hatched.",
        meaning: "Do not plan for good results before they actually happen."
    },
    {
        text: "An apple a day keeps the doctor away.",
        meaning: "Keeping healthy habits can prevent illness."
    },
    {
        text: "Still waters run deep.",
        meaning: "Quiet people often have deep thoughts and knowledge."
    },
    {
        text: "A stitch in time saves nine.",
        meaning: "Fix small problems early before they become much worse."
    },
    {
        text: "Knowledge is power.",
        meaning: "Learning and information give people strength and ability."
    },
    {
        text: "Tomorrow is another day.",
        meaning: "There is always a new chance and hope for tomorrow."
    },
    {
        text: "A bird in the hand is worth two in the bush.",
        meaning: "Cherish what you already have instead of chasing uncertain things."
    },
    {
        text: "It’s never too late to mend.",
        meaning: "You can always correct your mistakes no matter how late it is."
    },
    {
        text: "The apple doesn’t fall far from the tree.",
        meaning: "Children usually share traits with their parents."
    },
    {
        text: "Two wrongs don’t make a right.",
        meaning: "You cannot fix a bad thing by doing another bad thing."
    }
];

const randomBtn = document.getElementById("randomBtn");
const randomResult = document.getElementById("randomResult");

randomBtn?.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * proverbs.length);
    const selected = proverbs[randomIndex];

    randomResult.innerHTML = `
        <p style="font-weight:700; color:var(--primary-dark); margin-bottom:0.5rem;">
            ${selected.text}
        </p>
        <p style="color:var(--text-light);">
            ${selected.meaning}
        </p>
    `;
});
