const notes_controller = require('../controllers/notes_controller');

module.exports = (app) => {
  // visit localhost:5000
  app.get('/', (req, res) => {
    // show the homepage
    notes_controller.getAll(res);
  });
}