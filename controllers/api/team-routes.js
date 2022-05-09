//Import router from api index.js
const router = require('./index')

//After installing pokepromise(or whatever they call it) grab info from npm package
router.get('/:pokeid', (req, res) => {    
    
    //Grab pokemon name from URL params
    P.getPokemonByName(req.params.pokeid)
    //response.JSON
    .then((response) => {
        res.send(response);
    })
    //If catch any errors a cheeky response is given
    .catch((error) => {
        console.log('Whoa, thats not supposed to happen: ', error);
    })

});
//END