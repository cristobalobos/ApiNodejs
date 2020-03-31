import {
    addNewContact,
    getContact,
    getContactWithId,
    updateContact,
    deleteContact
} from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
        // GET Endpoint
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request from: ${req.method}`)
            next();
        }, getContact)

        //POST Endpoint
        .post(addNewContact)

    app.route('/contact/:contactID')
        // GET specific contact Endpoint
        .get(getContactWithId)

        // PUT Endpoint
        .put(updateContact)

        // Delete endpoint
        .delete(deleteContact)
}

export default routes;