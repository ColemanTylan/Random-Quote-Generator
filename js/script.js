/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/




var quotes = [
  {
   quote: "Keep your mind fixed on what you want in life, not on what you don't want.",
   source: "Nepolian Hill",
   citation: "Napoleon Hill's Positive Action Plan",
   year: "1997"
  },
  {
    quote:"Most people who decide to grow personally find their first mentors in the pages of books. ",
    source: "John C. Maxwell",
    citation: "The 15 Invaluable Laws of Growth",
    year: "2014"
  },
  {
    quote:"It is far more common for people to allow ego to stand in the way of learning",
    source: "Ray Dalio",
    citation: "Principles",
    year: "2011"
  },
  {
    quote:"The cowards never started and the weak died along the way. That leaves us, ladies and gentlemen. Us.",
    source: "Phil Night",
    citation: "Shoe Dogg",
    year: "2007"
  },
  {
    quote:"You alone are responsible for what you do, don’t do, or how you respond to what’s done to you.",
    source: "Darren Hardy",
    citation: "The Compound Effect",
    year: "2010"
  }];




// This will get random quote from function
function getRandomQuote(){
var randomNumber =  Math.floor( Math.random() * quotes.length );
  
    return  quotes[randomNumber] 
  

}




//This will connect the quote to the html sting 
function printQuote(){
  var callGetRandomQuote = getRandomQuote();

// Learned  "document.getElementsByClassName " while on stack over flow
document.getElementsByClassName("quote")[0].innerHTML = callGetRandomQuote.quote; 
document.getElementsByClassName("source")[0].innerHTML = callGetRandomQuote.source;
document.getElementsByClassName("citation")[0].innerHTML = callGetRandomQuote.citation;
document.getElementsByClassName("year")[0].innerHTML = callGetRandomQuote.year;

//$(".source").html("test");

}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);