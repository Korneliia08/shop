import styleContacts from "./Contacts.module.css";
import FormContacts from "./FormContacts/FormContacts";
import Content from "./Content/Content";

const Contacts = () => {
  return (
    <div className={styleContacts.blockForContact} id="contacts">
      <FormContacts></FormContacts>
      <Content></Content>
    </div>
  );
};
export default Contacts;
