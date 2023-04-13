function generateJoke() {
    const jokes = [
        "Why do cats always get their way? They are very purr-suasive.",
        "What do you call a pile of cats? A meowtain.",
        "How do cats end a fight? They hiss and make up.",
        "Why did the cat wear a fancy dress? She was feline fine.",
        "What do you call a cat that loves to bowl? An alley cat.",
        "Why don't cats play poker in the jungle? Too many cheetahs.",
        "What do you call a cat that can take pictures? A Snapcat.",
        "Why did the cat wear a fancy dress? She was feline fancy.",
        "What's a cat's favorite movie? The Sound of Mew-sic.",
        "What do you call a cat who likes to eat beans? Purr-k.",
        "What's a cat's favorite subject in school? Hisss-tory.",
        "Why don't cats wear shoes? They prefer paw-jamas.",
        "What do you call a cat that's a great singer? Meow-sical.",
        "What do you call a cat magician? A catastrophe!",
        "What do you get when you cross a cat with a tree? A cat-a-log!",
        "Why did the cat go to medical school? To become a first-aid kit-ti-cat!",
        "Why did the cat join Instagram? To paw-s for a moment and take a claw-some pic!",
        "Why don't cats like online shopping? They prefer a good old-fashioned cat-alogue.",
        "How does a cat tell time? With a meow-ment watch.",
        "What do you call a cat that's an excellent swimmer? A meow-mer.",
        "Why did the cat join a band? She wanted to play the paw-some.",
        "What do you call a cat that likes to take selfies? A camera-t.",
        "What do you call a cat that loves to bowl? Strike meowt!",
        "Why did the cat sit on the computer? To keep an eye on the mouse!",
        "What's a cat's favorite dessert? Chocolate mousse!",
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById("joke").innerHTML = randomJoke;
}


function generateQuote() {
    const inspirational_quotes = [
        "'Believe you can and you're halfway there.' -Theodore Roosevelt",
        "'The only way to do great work is to love what you do.' -Steve Jobs",
        "'Don't watch the clock; do what it does. Keep going.' -Sam Levenson",
        "'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.' -Christian D. Larson",
        "'Success is not final, failure is not fatal: It is the courage to continue that counts.' -Winston Churchill",
        "'The future belongs to those who believe in the beauty of their dreams.' -Eleanor Roosevelt",
        "'It does not matter how slowly you go as long as you do not stop.' -Confucius",
        "'Happiness is not something ready made. It comes from your own actions.' -Dalai Lama",
        "'Strive not to be a success, but rather to be of value.' -Albert Einstein",
        "'Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.' -Chantal Sutherland",
        "'You can never cross the ocean until you have the courage to lose sight of the shore.' -Christopher Columbus",
        "'The only person you are destined to become is the person you decide to be.' -Ralph Waldo Emerson",
        "'We may encounter many defeats but we must not be defeated.' -Maya Angelou",
        "'Your time is limited, don't waste it living someone else's life.' -Steve Jobs",
        "'If you want to lift yourself up, lift up someone else.' -Booker T. Washington",
    ];
    const randomQuote = inspirational_quotes[Math.floor(Math.random() * inspirational_quotes.length)];
    document.getElementById("quote").innerHTML = randomQuote;
}


function goToMainMenu() {
    window.location.href = "../main-menu.html";
}