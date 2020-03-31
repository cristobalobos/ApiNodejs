import {
    addNewContact,
    getContact,
    getContactWithId
} from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request from: ${req.method}`)
            next();
        }, getContact)

        //llamamos a la funcion definido en routes
        .post(addNewContact)

    app.route('/contact/:contactID')
        .get((req, res) =>
            res.send(getContactWithId))

        .put((req, res) =>
            res.send('PUT request succesfull'))

        .delete((req, res) =>
            res.send('DELETE request succesfull'))
}

export default routes;