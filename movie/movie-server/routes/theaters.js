const theaterRoutes = (app, fs) => {

    const dataPath = './data/theater_showtimes.json';

    app.get('/theaters', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if(err){
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });
};

module.exports = theaterRoutes;