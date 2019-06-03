const models = require('../models'); // Object of all the models

// Read your model and create any tables/associations on that table
models.Note.sync({ force: false });
// .then(() => {
//   models.Note.create({
//     title: '4th Note',
//     body: 'New info about our 4th note'
//   }).then(() => console.log('created'));
// });

const note_controller = {
  getAll(res) {
    models.Note.findAll()
      .then(notes_data => {

        models.AnotherModel.findAll()
          .then(another_data => {
            res.render('home', {
              another: another_data,
              notes: notes_data,
              people_data: [
                { name: 'JD', fruit: 'grape' },
                { name: 'Sarah', fruit: 'strawberries' }
              ]
            });
          });
      });
  }
};

module.exports = note_controller;