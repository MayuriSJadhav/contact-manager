import axios from "axios"


export class ContactServices {
    static serverURL="http://localhost:9000"

    static getAllContacts(){
        let dataURL=`${this.serverURL}/contacts`

            return axios.get(dataURL)
    }

    static getContact(contactID){
        let dataURL=`${this.serverURL}/contacts/${contactID}`
        return axios.get(dataURL)
    }

    static getGroups(){
        let dataURL=`${this.serverURL}/groups`
        return axios.get(dataURL)
    }

    static createContact(contact){
        let dataURL=`${this.serverURL}/contacts`
        return axios.post(dataURL,contact)
    }

    static updateContact(contactId,contact){
        let dataURL=`${this.serverURL}/contacts/${contactId}`
        return axios.put(dataURL,contact)
    }

    static deleteContact(contactId){
        let dataURL=`${this.serverURL}/contacts/${contactId}`
        return axios.delete(dataURL)
    }
}