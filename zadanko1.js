
const processText = ( text, { uppercase = false, reverse = false, removeSpecialChars = false } = {} ) => {
    letters = [...text]
    if(uppercase) {
        letters[0] = letters[0].toUpperCase()
    }
    if(reverse) {
        letters.reverse()
    }
    if(removeSpecialChars) {
        special_characters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '{', '}', '[', ']', '|', '\\', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/', '~', '`']

        for(var i = 0; i < letters.length; i++) {
            if(special_characters.includes(letters[i])) {
                letters[i] = ''
            }
        }
        
        
    }

    return letters.join('')
}

console.log( processText("@alibaba!@#", {uppercase: false, reverse: false, removeSpecialChars: true}) )