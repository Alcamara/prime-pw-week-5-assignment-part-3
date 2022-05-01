console.log('***** Music Collection *****')

let collection = [];

let addToCollection = (title,artist,yearPublished,tracks) =>{
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


console.log('What album was added to collection? ',addToCollection('The Black Album','Jay-Z',2003, []));
console.log('What album was added to collection? ',addToCollection('Confessions','Usher',2004, []));
console.log('What album was added to collection? ',addToCollection('Get Rich or Die Trying','50 Cent',2005, []));
console.log('What album was added to collection? ',addToCollection('Kingdom Come','Jay-Z',2006, []));
console.log('What album was added to collection? ',addToCollection('No Strings Attached','N Sync', 2000, []));

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

//Test to make sure function is working
console.log('Did I add a track?',addTrack('Encore',4,'The Black Album'));
console.log(collection[1]);
console.log('Did I add a track?',addTrack('Encore',4,'Album'));
console.log('Did I add a track?',addTrack(3,4,'Album'));
console.log('Did I add a track?', addTrack('Encore','4','The Black Album'));


// added two more tracks to 'The Black Album'
addTrack('What more can I say',4,'The Black Album');
addTrack('Interlude',2,'The Black Album');
console.log('number of tracks should be 3',collection[1].tracks.length);

//added three tracks to 'Confession'
addTrack('Can U handle it?',5,'Confessions');
addTrack('Bad Girl',4,'Confessions');
addTrack('Follow me',3,'Confessions');
addTrack('Super Star',1,'Confessions');
console.log('number of tracks should be 4',collection[2].tracks.length);

////added three tracks to 'CGet Rich or Die Trying'
addTrack('Intro',1,'Get Rich or Die Trying');
addTrack('Many Men',4,'Get Rich or Die Trying');
addTrack('In Da Club',3,'Get Rich or Die Trying');
console.log('number of tracks should be 3',collection[3].tracks.length);

