const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const viewRoutes = require('./routes/view_routes');
const PORT = process.env.PORT || 5000;

const app = express();

// Allow the browser to access anything inside a specific folder
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


viewRoutes(app);


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));