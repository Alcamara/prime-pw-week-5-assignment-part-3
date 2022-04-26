console.log('***** Music Collection *****')

let collection = [];

let addToCollection = (title,artist,yearPublished) =>{
 let newAlbum  = {
        title,
        artist,
        yearPublished,
    }

    return collection.push(newAlbum);
}


addToCollection('Comming Home','sha',2022);

console.log(collection);