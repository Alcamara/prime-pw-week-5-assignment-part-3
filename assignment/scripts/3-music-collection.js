console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist = '' , yearPublished = null, tracks = []){
 let newAlbum  = {
        title,
        artist,
        yearPublished,
        tracks,
    }

    collection.push(newAlbum);

    return newAlbum;
}

//Test to make sure album was added:
console.log('What album was added to collection? ',addToCollection('Coming Home','sha',2022,[{
    name: 'tippin',
    duration: 3,
}]));


console.log('What album was added to collection? ',addToCollection('The Black Album','Jay-Z',2003 ));

addTrack('Encore',4,'The Black Album');
addTrack('What more can I say',4,'The Black Album');
addTrack('Interlude',2,'The Black Album');

console.log('What album was added to collection? ',addToCollection('Confessions','Usher',2004, ));

//added three tracks to 'Confession'
addTrack('Can U handle it?',5,'Confessions');
addTrack('Bad Girl',4,'Confessions');
addTrack('Follow me',3,'Confessions');
addTrack('Super Star',1,'Confessions');

console.log('What album was added to collection? ',addToCollection('Get Rich or Die Trying','50 Cent',2005,));

////added three tracks to 'CGet Rich or Die Trying'
addTrack('Intro',1,'Get Rich or Die Trying');
addTrack('Many Men',4,'Get Rich or Die Trying');
addTrack('In Da Club',3,'Get Rich or Die Trying');


console.log('What album was added to collection? ',addToCollection('Kingdom Come','Jay-Z',2006,));
addTrack('Beach', 4,'Kingdom Come')


console.log('What album was added to collection? ',addToCollection());



console.log('These are the albums in my collection:',collection);

console.log();

console.log('Create showCollection function:');
console.log('---------------------------------');
console.log();
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

console.log();
console.log('...Stretch Goal part 1....');

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
            if(album.artist === searchItem && album.yearPublished !== null && album.tracks.length !== 0){
                
                searchResult.push(album)

                /*Else if album has an artist name & album's publication year is identical 
                to searchItem year, add album to searchResult array */
            } else if(album.artist !== '' && album.yearPublished === searchItem && album.tracks.length !== 0){
                searchResult.push(album)
            } else if(album.artist !== ''&& album.yearPublished !== null){
                for(let trackNum = 0; trackNum < album.tracks.length; trackNum++){
                    if(album.tracks[trackNum].name === searchItem){
                        searchResult.push(album)
                    }
                }
            }
        }

       

        return searchResult;

        /* if searchItem has no value, return collection array */
    } else if(!searchItem){
        
        return collection
    }

    
}




console.log('Should return an array of two elements(album objects):',search('Jay-Z'));
console.log('Should return an array of 1 elements(album objects):',search(2004));
console.log('Should return an array of 1 elements(album objects):',search('In Da Club'));




console.log('...Stretch Goal part 2....');

function addTrack(trackName, trackDuration, albumName){
    if(typeof trackName === 'string' && typeof trackDuration === 'number'){
       for(let album of collection){
           if(album.title === albumName){
               
               album.tracks.push({
                   name:trackName,
                   duration: trackDuration,
               })
            
               return true;
               
           }
       }
    } else {
        return 'Enter valid string name or track duration number'
    }

    return false ;
    
}




