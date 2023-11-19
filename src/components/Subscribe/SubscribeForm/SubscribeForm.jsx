import styleForm from "./SubscribeForm.module.css"

const FormSubscribe = () => {
    return (
        <form className={styleForm.form}>
            <input type="text" className={styleForm.inputEmail} placeholder="Email"/>
            <input type="submit" value="SEND" className={styleForm.inputSubmit}/>
        </form>
    )
}
export default FormSubscribe;
