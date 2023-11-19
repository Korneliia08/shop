import styleFormContacts from "./FormContacts.module.css";

const FormContacts = () => {
    return (
        <form className={styleFormContacts.form}>
            <input type="text" placeholder="Name" className={styleFormContacts.inputTag}/>
            <input type="text" placeholder="Email" className={styleFormContacts.inputTag}/>
            <input type="text" placeholder="Number of phone" className={styleFormContacts.inputTag}/>
            <textarea placeholder="Message" className={styleFormContacts.textareaTeg}></textarea>
            <input type="submit" className={styleFormContacts.inputSubmit} value="SEND"/>
        </form>
    )
}
export default FormContacts;
