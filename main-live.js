const pigLatin = (word) => {
    word = document.getElementById("user-input").value;
    console.log(word)
    word = word.toLowerCase().trim();
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    let firstLetter = word.slice(0, 1);
    let translated = ""
        if (vowel.includes(firstLetter)) {
        // console.log( word + 'yay' ) 
        translated = word + 'yay'
        document.getElementById("display-element").innerHTML = translated

        } else {
          // console.log(word.slice(1) + word.slice(0,1) + 'ay')
        translated =  word.slice(1) + word.slice(0,1) + 'ay'
        document.getElementById("display-element").innerHTML = translated

      }
    }

    const clearDisplay = () => {
        document.getElementById("display-element").innerHTML = ""
    }