const express = require('express');

const server = express ();
server.get('/', (request, response) =>{ // defining a route for a get request endpoint
    console.log('This is the home route');
    response.send('<h1>My Awesome Node Site </h1>');
});
server.get('/api/user', (request,response) => {
    const user ={
        name : 'Marty Mcfly',
        occupation:'Slacker',
        age: 17,
        email: 'marty@timetravel.com'
    }
    response.send(user)// sends the object to the browser 
})
 server.listen(9000, () => {
    console.log('Server running at localhost:', 9000);
 });