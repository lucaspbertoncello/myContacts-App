const { uuid } = require("uuidv4");

const contacts = [
  {
    id: uuid(),
    name: "Lucas",
    email: "lucasbertoncello1@gmail.com",
    phone: "41995257119",
    category_id: uuid(),
  },
];

class ContactRepository {
  findAll() {
    return contacts;
  }
}

module.exports = new ContactRepository();
