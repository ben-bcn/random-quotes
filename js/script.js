// array of colors
var colors  = [
  "8016b7",
  "de0a0f",
  "4e55e6",
  "de880d",
  "2f8829"
];


function getRandomNum(upperLimit){
  // generates a random number utilizing an upper limit param
  return Math.floor(Math.random() * upperLimit);
}

function getRandomQuote (){
  // using .length will ensure the function works if quotes are added or removed
  var generateNum = getRandomNum(quotes.length);

  // initiate the quoteContent object literal
  var quoteContent = {};

  // create the content variables to receive the values
  quoteContent.quote    = quotes[generateNum].quote;
  quoteContent.source   = quotes[generateNum].source;
  quoteContent.category = quotes[generateNum].category;

  // check to see if there is a citation
  if(quotes[generateNum].citation.length > 0){
    quoteContent.citation = quotes[generateNum].citation;
  }

  // check to see if there is a date
  if(quotes[generateNum].date.length > 0){
    quoteContent.date = quotes[generateNum].date;
  }

  // return the object literal.
  return quoteContent;

}

function randomColor(){
  // generate a random number between 0 and 4
  // using .length will ensure the function works if quotes are added or removed
  var generateNum = getRandomNum(colors.length);

  // return a HEX value from the colors array
  return colors[generateNum];

}

function printQuote(){

  // get a random quote(s)
  var theQuote  = getRandomQuote();

  // Add the quote data to the HTML strings
  var html  = '<p class="quote"> ' + theQuote.quote + ' </p>';
  html      += '<p class="source"> ' + theQuote.source ;

  // Only add citation HTML if citation is present
  if(theQuote.citation){
    html    += '<span class="citation"> ' + theQuote.citation + ' </span>';
  }

  // Only add date HTML if date is present
  if(theQuote.date){
    html    += '<span class="year"> ' + theQuote.date + '  </span>';
  }

  html      += '<br><span class="category">Category: ' + theQuote.category+ ' </span>';
  html      += '</p>';

  // print HTML to the page in the 'quote-box' DIV
  document.getElementById('quote-box').innerHTML = html;

  // change the BODY background color
  document.body.style.backgroundColor = "#" + randomColor();

}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// automatically change the background color every 30 seconds
setInterval(function(){ printQuote(); }, 15000);
