console.log('***** Music Collection *****')

let collection = [];

let addToCollection = (title,artist,yearPublished) =>{
 let newAlbum  = {
        title,
        artist,
        yearPublished,
    }

    collection.push(newAlbum);

    //come back to this
    return 'Just Added:' + newAlbum;
}


console.log(addToCollection('Comming Home','sha',2022));
addToCollection('The Black Album','Jay-Z',2003);
addToCollection('Confessions','Usher',2004);
addToCollection('Get Rich or Die Trying','50 Cent',2005);
addToCollection('Kingdom Come','Jay-Z',2006);
addToCollection('No Strings Attached','N Sync', 2000);



console.log('These are the albums in my collection:',collection);

function showCollection(collection) {
    for(let i = 0; i < collection.length; i++ ){
        console.log(`${collection[i].title} by ${collection[i].artist} published in ${collection[i].yearPublished}`);
    }
}

showCollection(collection)

let findByArtist = function(artist) {
    let albumsByArtist = [];
    
    for(let album of collection){
        if(album.artist === artist){
            albumsByArtist.push(album);
        }
    }

    return albumsByArtist
}


console.log("These are the search results:",findByArtist('Jay-Z'));
console.log("These are the search results:",findByArtist('Maya'));
