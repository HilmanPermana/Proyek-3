const book = {
    title: 'Ego adalah musuh',
    author: 'Hilman Permana'
}

//Covert JavaScript object into JSON string
const bookJSON = JSON.stringify(book)

//Convert JSON string into object
const bookObject = JSON.parse(bookJSON)
console.log(bookObject.author) //Print : Ego adalah musuh

