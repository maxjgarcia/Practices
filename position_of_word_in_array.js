/*
Recibes dos parámetros: una lista de palabras words y una palabra word. Primero, busca el índice de la palabra en la lista. Después, usa ese índice (que será un número)
 y devuelve todas las palabras de words que sean más largas (length) que el número del índice.
 
Ten en cuenta que la palabra word siempre existirá en el array, por lo que no es necesario comprobar si existe o no.
 */

function buscaPalabras(words, word) {
    let result = [];
    let index = -1;


    for (let i = 0; i < words.length; i++) {
        if (words[i] === word) {
            index = i;
            break;
        }
    }


    if (index !== -1) {
        let lengthLimit = index;


        for (let i = 0; i < words.length; i++) {
            if (words[i].length > lengthLimit) {
                result.push(words[i]);
            }
        }
    }

    return result;
}