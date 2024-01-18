const quotes = [
    {
        quote: "Talent without working hard is nothing.",
        author: "Cristiano Ronaldo"
    }
    ,{
        quote: "Enthusiasm is everything. It must be taut and vibrating like a guitar string.",
        author: "Pelé"
    }
    ,{
        quote: "I think sometimes the best training is to rest.",
        author: "Cristiano Ronaldo"
    }
    ,{
        quote: "I learned all about life with a ball at my feet.",
        author: "Ronaldinho"
    }
    ,{
        quote: "You have to fight to reach your dream. You have to sacrifice and work hard for it.",
        author: "Lionel Messi"
    }
    ,{
        quote: "I don’t have time for hobbies. At the end of the day, I treat my job as a hobby. It’s something I love doing.",
        author: "David Beckham"
    }
    ,{
        quote: "When people succeed, it is because of hard work. Luck has nothing to do with success.",
        author: "Diego Maradona"
    }
    ,{
        quote: "I just hate losing and that gives you an extra determination to work harder.",
        author: "Wayne Rooney"
    }
    ,{
        quote: "I once cried because I had no shoes to play soccer, but one day, I met a man who had no feet.",
        author: "Zinedine Zidane"
    }
    ,{
        quote: "Every disadvantage has got its advantage.",
        author: "Johan Cruyff"
    }
]; 

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;