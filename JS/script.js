
/*Define choices of words to be used*/
const posWords = ['good', 'great', 'cool', 'fantastic', 'splendid'];
const time = ['day', 'week', 'morning', 'evening'];
const names = ['Jake', 'Grace', 'Gronk', 'Jak', 'Grack', 'Binga Bonga', 'Cool Dude'];

/*Get the words from the arrays that will be used*/



document.addEventListener("DOMContentLoaded", function() {
    function mixedMessages() {
        let i = Math.floor(Math.random() * posWords.length);
        let wordChoice = posWords[i];

        let j = Math.floor(Math.random() * time.length); 
        let timeChoice = time[j];

        let k = Math.floor(Math.random() * names.length);
        let namechoice = names[k];

        let mixedMessage = `${namechoice}, you will have a ${wordChoice} ${timeChoice}.`;
        
        document.getElementById("messageOutput").innerText = mixedMessage;
    }

    // Attach event listener instead of using inline `onclick`
    document.querySelector("button").addEventListener("click", mixedMessages);
});