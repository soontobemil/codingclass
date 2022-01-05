const quotes = [
    { 
        quote: "There are good people who are dealt a bad hand by fate, and bad people who live long, comfortable, privileged lives. A small twist of fate can save or end a life; random chance is a permanent, powerful player in each of our lives, and in human history as well.",
        author: "-Jeff Greenfield-",
        
    },
    { 
        quote: "Nothing is impossible, the word itself says, 'I'm possible.",
        author:"-Audrey-",
        
    },
    { 
        quote: "Success is often achieved by those who don't know that failure is inevitable.",
        author:"-Coco Chanel-",
        
    },
    { 
        quote: "You can't be that kid standing at the top of the water slide...You have to go down the chute.",
        author:"-Tina Fey-",
        
    },
    { 
        quote: "There's power in looking silly and not caring that you do.",
        author:"-Amy Poehler-",
        
    },
    { 
        quote: "Be brave.",
        author:"-Emma Watson-",
        
    },
    { 
        quote: "Beauty is about being comfortable in your own skin.",
        author:"-Ellen DeGeneres-",
        
    },
    { 
        quote: "You cannot live your life to please others.",
        author:"-Anne Hathaway-",
        
    },
    { 
        quote: "Be good to people.",
        author:"-Taylor Swift-",
        
    },
    { 
        quote: "Hey, 파이팅",
        author:"-Jay-",
        
    },
    { 
        quote: "Jay's coding class",
        author:"-Jay-",
        
    },
];

const quote  =  document.querySelector("#quotes span:first-child");
const author  =  document.querySelector("#quotes span:last-child");

const todaysQuote = (quotes[Math.floor (Math.random () * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

//Math.ceil ()& Math.round() & Math.floor ()
// Math.round (Math.random () *10)