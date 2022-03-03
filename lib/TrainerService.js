const trainers = require('../data/trainers.json');

const trainerService = {

    // Gets all the trainers
    getAllTrainers: () => {
        return trainers;
    },

    // Returns all trainers for a given type
    getTrainersByType: (type) => {
        return trainers.filter( t => {
            let matchingPokemons =  t.pokemon.filter( pk => {
                return pk.type === type;
            });

            return matchingPokemons.length > 0;
        });
    },

    // Return a trainer by his/her name
    getTrainerByName: (name) => {
        return trainers.find(t => t.name === name);
    },

};

module.exports = trainerService;