const routes = (app) => {
    app.route('/contact')
        .get((req, res) =>
            res.send('get request succesfull'))

        .post((req, res) =>
            res.send('post request succesfull'))

    app.route('/contact/:contactID')
        .put((req, res) =>
            res.send('PUT request succesfull'))

        .delete((req, res) =>
        res.send('DELETE request succesfull'))
}

export default routes;