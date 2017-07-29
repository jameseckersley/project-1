

//function to generate random object in quotes array
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random()*(quotes.length));
  return quotes[randomNumber];
}



//use getRandomQuote function to convert object to html string
function printQuote() {
  var randomQuoteObject = getRandomQuote();
  var html = '';
  //document writing variable for output
  var outputDiv = document.getElementById('quote-box');

  // tests object to see what styling is required. 
  if ('citation' in randomQuoteObject && 'year' in randomQuoteObject) {
    html = '<p class="quote">' + randomQuoteObject.quote + '</p>' +
    '<p class="source">' + randomQuoteObject.source + ': ' +
      '<span class="citiation">' + randomQuoteObject.citation + '</span>' +
      '<span class="year">' + randomQuoteObject.year + '</span' +
      '</p>';
  } else if ('citation' in randomQuoteObject) {
    html = '<p class="quote">' + randomQuoteObject.quote + '</p>' +
    '<p class="source">' + randomQuoteObject.source + ': '+
      '<span class="citiation">' + randomQuoteObject.citation + '</span>' +
      '</p>';
  } else if ('year' in randomQuoteObject) {
    html = '<p class="quote">' + randomQuoteObject.quote + '</p>' +
    '<p class="source">' + randomQuoteObject.source + ': '+
      '<span class="year">' + randomQuoteObject.year + '</span>' +
      '</p>'
  } else {
    html = '<p class="quote">' + randomQuoteObject.quote + '</p>' +
    '<p class="source">' + randomQuoteObject.source + '</p>';
  }
  return outputDiv.innerHTML = html
  }



  // event listener to respond to "Show another quote" button clicks
  // when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
