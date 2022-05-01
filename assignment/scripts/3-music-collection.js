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

console.log('...Stretch Goal....');

/*I created a function that "Take an input parameter for a search criteria object"
The way I understood this was I created a function with one parameter that can be an artist 
name or year of publication*/

function search(searchItem){
    let searchResult = [];

    /*conditional statement checking to see if searchItem is string or number. If so
    execute for of loop */
    if(typeof searchItem === 'string' || typeof searchItem === 'number'){
        
        for(let album of collection){

            /* If artist name is identical to searchItem name & album has a publication year
            add album to searchResult array */
            if(album.artist === searchItem && album.yearPublished){
                
                searchResult.push(album)

                /*Else if album has an artist name & album's publication year is identical 
                to searchItem year, add album to searchResult array */
            } else if(album.artist && album.yearPublished === searchItem){
                searchResult.push(album)
            }
        }

        return searchResult;

        /* if searchItem has no value, return collection array */
    } else if(!searchItem){
        
        return collection
    }

    
}

//test to see if 
console.log('Should return an array of two elements(album objects):',search('Jay-Z'));
console.log('Should return an array with one element(album object):',search(2000));
console.log('Should return albums in collection since parameter is empty',search());

console.log('Added album with no publication year', addToCollection('Fake Album','lil fake'));
console.log('Make sure, album was added', findByArtist('lil fake'));
console.log('Should return an empty array',search('lil fake'));

console.log('Added album with no artist name', addToCollection('Fake Album 2','', 1993));
console.log('Make sure, album was added', findByArtist(''));
console.log('Should return an empty array',search(1993));




