const ContactRepository = require("../repositories/ContactRepository");

class ContactController {
  index(req, res) {
    const contacts = ContactRepository.findAll();
    res.json(contacts);
  }

  show() {
    // Obter um registro
  }

  store() {
    // Criar um novo registro
  }

  update() {
    // Atualizar um registro
  }

  delete() {
    // Deletar um registro
  }
}

module.exports = new ContactController();
