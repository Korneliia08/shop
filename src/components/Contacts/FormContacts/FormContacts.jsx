import styleFormContacts from "./FormContacts.module.css";
import {useState} from "react";


const FormContacts = () => {
    const [formClass, setFormClass] = useState('');
    const [mess, setMess] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [messInTextArea, setMessInTextArea] = useState("");

    function sendMess(event){
        event.preventDefault();
        setMess("Your message was send!");
        setName("");
        setNumber("");
        setEmail("");
        setMessInTextArea("");
        setFormClass('');
    }
    return (
        <div className={styleFormContacts.block}>
            <form className={styleFormContacts.form}
                  onSubmit={sendMess}>
                <input type="text" placeholder="Name"
                       className={[styleFormContacts.inputTag,formClass].join(' ')}
                       required value={name}
                       onChange={(event)=>{setName(event.target.value)}}/>
                <input type="email" placeholder="Email"
                       className={[styleFormContacts.inputTag,formClass].join(' ')}
                       required value={email}
                       onChange={(event)=>{setEmail(event.target.value)}}/>
                <input type="text" placeholder="Number of phone"
                       className={[styleFormContacts.inputTag, formClass].join(' ')} required  value={number}
                       onChange={(event)=>{setNumber(event.target.value)}}/>
                <textarea placeholder="Message" className={[styleFormContacts.textareaTeg, formClass].join(' ')}
                          required  value={messInTextArea}
                          onChange={(event)=>{setMessInTextArea(event.target.value)}}>
                </textarea>
                <input type="submit" className={styleFormContacts.inputSubmit} value="SEND"
                       onClick={()=>{
                           setFormClass(styleFormContacts.afterFirstClick);
                           setMess("");
                       }}
                />
            </form>
            <span className={styleFormContacts.messWasSend}>{mess}</span>
        </div>
    )
}
export default FormContacts;
