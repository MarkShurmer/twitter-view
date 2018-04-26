const Twit = require('twit'); // this is how we import the twit package
const config = require('./config') //this is we import the config file which is a js file which contains the keys ans tokens

function fetchTweets() {

    let twitterService = new Twit(config); //this is the object of twit which

    const params = {
        q: '@cnnbrk',
        count: 10

    }; // this is the param variable which will have key and value     ,the key is the keyword which we are interested in searching and count is the count of it

    return twitterService.get('search/tweets', params) // get is the function to search the tweet which three paramaters 'search/tweets'    ,params and a callback function.

}

function extractData(data) {
    // extract the data items we want

    console.log('££££ ', data)
    if(data && data.statuses) {
        return data.statuses.map(item => {
            return {
                id: item.id,
                text: item.text,
                creationTime: item.created_at,
                link: item.entities.urls.length > 0 ? item.entities.urls[0].url : ''
            };
        });
    }

    return [];
}

export {fetchTweets, extractData};
