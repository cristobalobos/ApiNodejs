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
    Contact.findById(req.params.contactID, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}

/**
 * Acción vinculada al PUT
 * @param {string} req.params.contactID - El id proveniente de la API
 * @param {object} req.body - Body entregado desde la API con todos los campos del contacto
 * @param {object} new: true - Va en true porque eso permite devovler el nuevo registro
 * @param {object} useFindAndModify: false - te dice que va a modificar el registro existente
 */
export const updateContact = (req, res) => {
    Contact.findOneAndUpdate({ _id: req.params.contactID}, req.body, { new: true, useFindAndModify: false }, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}

export const deleteContact = (req, res) => {
    Contact.remove({ _id: req.params.contactID}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json({message: 'successfully delete contact'});
    });
}