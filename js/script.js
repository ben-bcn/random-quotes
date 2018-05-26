// create array of quotes include quote, source, citation and date
// last two are optional

var quotes = [
  {
    quote: "When you arise in the morning, think of what a precious privilege it is to be alive - to breathe, to think, to enjoy, to love.",
    source: "Marcus Aurelius",
    citation: "",
    date:"",
    category:"Real"
  },
  {
    quote: "I think we build resilience to prepare for whatever adversity we'll face. And we all face some adversity - we're all living some form of Option B.",
    source: "Sheryl Sandberg",
    citation: "",
    date:"",
    category:"Real"
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    source: "Oscar Wilde",
    citation: "",
    date:"",
    category:"Real"
  },
  {
    quote: "Quotes with citations are hard to find!",
    source: "Ben",
    citation: "TreeHouse Projects Search",
    date:"May 26, 2018",
    category:"Real"
  },
  {
    quote: "I am not a duck!",
    source: "Duck",
    citation: "The Duck Spring",
    date:"June 2, 1818",
    category:"Fake"
  }

];

function getRandomQuote (){
  // generate a random number between 0 and 4
  var generateNum = Math.floor(Math.random() * 5);

  var quoteContent = {};
  // create the content variables to receive the values
  quoteContent.quote(quotes[generateNum].quote);
  quoteContent.source(quotes[generateNum].source);

  // check to see if there is a citation
  if(quotes[generateNum].citation.length > 0){
    quoteContent.citation(quotes[generateNum].citation);
  }

  // check to see if there is a date
  if(quotes[generateNum].date.length > 0){
    quoteContent.date(quotes[generateNum].date);
  }


  quoteContent.category(quotes[generateNum].category);

  // concat the variables into one string.
  return quoteContent;

}

function printQuote(){

  // get a random quote
  var theQuote  = getRandomQuote ();

  var html  = '<p class="quote"> ' + theQuote.quote + ' </p>';
  html  += '<p class="source"> [source here]';
  html  += '<span class="citation"> [citation here] </span>';
  html  += '<span class="year"> [year here] </span>';
  html  += '</p>';
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
