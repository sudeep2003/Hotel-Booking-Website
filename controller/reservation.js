function getFormData(req){
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const email = req.body.email;
    const phone = req.body.phone;

    return{firstName, lastName, email, phone};
}

module.exports = getFormData;
