const routes = (app) => {
    app.route('/contact')
        .get((req, res,next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request from: ${req.method}`)
            next();
        }, (req, res, next) => {
            res.send('get request succesfull')
        })


        .post((req, res) =>
            res.send('post request succesfull'))

    app.route('/contact/:contactID')
        .put((req, res) =>
            res.send('PUT request succesfull'))

        .delete((req, res) =>
            res.send('DELETE request succesfull'))
}

export default routes;