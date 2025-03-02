const newman= require('newman');
 require('dotenv').config(); // Load environment variables from .env file

newman.run({
    // collection:`https://api.postman.com/collections/40595257-9f925cc0-4723-4f69-822a-5b49da8828bf?access_key=${process.env.access_key}`, //
    collection: require('./collection/dmoney-users-api-collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // This is the path to save the report
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});