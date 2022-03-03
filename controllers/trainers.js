const trainerService = require('../lib/TrainerService');

// Will contain all trainers invited to our gym
const trainerGymList = [];

const trainerController = {

    listTrainers: (req, res) => {
        // Get trainers for a specific type
        const trainerList = trainerService.getTrainersByType(req.params.type);

        // Render a list of trainers
        res.render('trainers', {
            trainers: trainerList,
            hasTrainers: trainerList.length > 0
        });
    },

    trainerForm: (req, res) => {
        // Get the trainer by ID
        const trainer = trainerService.getTrainerByName(req.params.trainerName);

        // Show a form for a specific trainer
        res.render('trainerForm', {
            trainer: trainer
        })
    },

    processTrainerForm: (req, res) => {
        // Process a form submission for a trainer
        // Add them to the list of gym invitees
        trainerGymList.push({
            message: req.body.inviteMessage,
            comments: req.body.comments
        })

        // Redirect the user
        res.redirect('/thanks');
    }
};

module.exports = trainerController;