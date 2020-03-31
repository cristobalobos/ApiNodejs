import mongoose, {
    mongo
} from 'mongoose';
import {
    ContactSchema
} from "../models/crmModel";

const Contact = mongoose.model('Contact', ContactSchema);

// accion vinculada al POST
export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);
    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    })
}

// accion vinculada al GET
export const getContact = (req, res) => {
    Contact.find({}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    })
}

// accion vinculada GET con Id
export const getContactWithId = (req, res) => {
    Contact.findById(req.params.Contact.contactID, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    })
}