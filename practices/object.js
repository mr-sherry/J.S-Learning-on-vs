let contact = {
    name: "ahmed",
    email: "ahmedraza@gmail.com",
    phone: "+923026967362",
    message: "hello i am ahmed",
    hello: function () {
    let emailFormat = [
        `Dear ${this.name}`,
        `We received your message: ${this.message}`,
        `We will contact you soon at ${this.email} or ${this.phone}`,
        `Thank you`
    ];
    return emailFormat;
}
};

console.log(contact.hello());

