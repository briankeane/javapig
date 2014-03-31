var translate = function(inputString) {
  // if empty return ""
  if (inputString === "") {
    return "";
  }

  // Store the sentence as an array
  wordArray = inputString.split(' ');
  var translatedPhraseArray = []
  // Iterate over the sentence
  for (var i = 0; i < wordArray.length; i++) {


    // ADD PUNCTUATION HANDLING LATER

    // If it starts with y
    if (wordArray[i].substring(0,1) === 'y') {
      var translatedWord = wordArray[i].substring(1) + 'yay';

    // else if the first is a consonant
    } else if ((wordArray[i].match(/^[aeiou]/)) === null) {
      // and the 2nd
      if ((wordArray[i].substring(1).match(/^[aeiou]/)) === null) {
        translatedWord = wordArray[i].substring(2) + wordArray[i].substring(0,2) + 'ay'
      } else {
        translatedWord = wordArray[i].substring(1) + wordArray[i].substring(0,1) + 'ay';
      }
    // else its a vowel
    } else {
      translatedWord = wordArray[i] + 'way';
    }

    // if it's a capitalized word
    if (wordArray[i] === wordArray[i].replace(/^[a-z]/, function(m){ return m.toUpperCase() })) {
      // lowercase it all and capitalize the first
      translatedWord = translatedWord.toLowerCase();
      translatedWord = translatedWord.replace(/^[a-z]/, function(m) { return m.toUpperCase() });
    }

    // add it to the full array
    translatedPhraseArray.push(translatedWord)
  }
  return translatedPhraseArray.join(' ');
};


// test when document opens
$(document).ready(function() {
  translate('No please put');
  $('#submit').click(function() {
    $(document).trigger('translateRequest');
  });

  $(document).keypress(function(e) {
      if(e.which == 13) { $(document).trigger('translateRequest'); }
    });

  $(document).on('translateRequest', function(e) {
    newPhrase = translate($('#input').val());
    $('#display').text(newPhrase);
    $('#input').val('');
    $('#input').focus();
  });
});
