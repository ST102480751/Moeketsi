// Define an array of quotes
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
    "The best way to predict the future is to invent it. - Alan Kay",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Believe you can and you're halfway there. - Theodore Roosevelt"
  ];
  
  // Function to generate a random quote
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotes[randomIndex];
  } //assigns the text content of the HTML element with the ID "quote" to the randomly selected quote obtained from the quotes array.
  
  // Event listener for the button click
  document.getElementById("generateBtn").addEventListener("click", generateQuote);
  
  // Initial quote generation on page load
  generateQuote();