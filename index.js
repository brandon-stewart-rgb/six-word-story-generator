const sixWord = document.getElementById('placer');
var generate = document.getElementById('button');
var clear = document.getElementById('clear-button');
var copy = document.getElementById('copy-button');


const adverb1 = Math.floor(Math.random() * adverbsArray.length);
const verb1 = Math.floor(Math.random() * verbsArray.length);



const adverb2 = Math.floor(Math.random() * adverbsArray.length);
const verb2 = Math.floor(Math.random() * verbsArray.length);
const verb3 = Math.floor(Math.random() * verbsArray.length);

const adverb3 = Math.floor(Math.random() * adverbsArray.length);


const noun1 = Math.floor(Math.random() * nounsArray.length);
const pluralNoun1 = Math.floor(Math.random() * pluralNounsArray.length);
const pluralNoun2 = Math.floor(Math.random() * pluralNounsArray.length);


// Capitalize first letter
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

// generate six word story
generate.addEventListener('click', function(e){
    e.preventDefault();
   return sixWord.innerHTML = (

        adverbsArray[adverb1].capitalize()  +' '+  

        nounsArray[noun1] +', '+ 

        verbsArray[verb1] +' '+  

        pluralNounsArray[pluralNoun1]  +', '+ 

        verbsArray[verb2] +' '+  

        pluralNounsArray[pluralNoun2] +'.'

        );
});


// clear six word story and refresh page
clear.addEventListener('click', function(){  
  sixWord.innerHTML = '';
  location.reload();
});

// jquery copy text function
$('#copy-button').click(function(){
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($('#placer').text()).select();
  document.execCommand("copy");
  $temp.remove();
});



// source https://gist.github.com/ijmacdowell/8325491#file-adjectives-js