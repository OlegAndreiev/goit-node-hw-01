const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      return console.table(allContacts);

    case "get":
      const oneContact = await getContactById(id);
      return console.log(oneContact);

    case "add":
      const newContact = await addContact({ name, email, phone });
      return console.log(newContact);

    case "remove":
      const deleteContact = await removeContact(id);
      return console.log(deleteContact);

    default:
      return console.warn("\x1B[31m Unknown action type!");
  }
};

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeAction(argv);

// invokeAction({action: "read"});
// invokeAction({action: "getById", id: "u9kgwNWGi3uUUwh0b8V49"});
// invokeAction({action: "add", title: "Worm", author: "John C. McCrae"});
// invokeAction({action: "updateById", id: "uNrjVoY1Ll0GFOof6t4yR", title: "Ward", author: "John C. McCrae"});
// invokeAction({action: "deleteById", id: "uNrjVoY1Ll0GFOof6t4yR"});
