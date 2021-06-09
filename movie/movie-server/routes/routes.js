const movieRoutes = require('./movies');
const theaterRoutes = require('./theaters');


const appRouter = (app, fs) => {
    app.get('/', (req, res) => {
        res.send('Welcome to the Movie-Server');
    });

    movieRoutes(app, fs);
    theaterRoutes(app, fs);
};

module.exports = appRouter;
