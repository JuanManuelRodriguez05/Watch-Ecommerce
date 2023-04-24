import { formValidation } from "./formValidation"

const Form = ({ formData, handleOnChange, errors, validateForm }) => {

    const handleOnsubmit = (evt) => {
        evt.preventDefault()
        if(formValidation() ){
            console.log("enviando:", formData)

        }
        
    }
    return (
        <section>
            <form onSubmit={handleOnsubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    onChange={handleOnChange}
                    //value={formData.name}
                />
                {errors && errors.name && <span>{errors.name}</span>}
                <input 
                    type="text" 
                    name="email"
                    placeholder="Email"
                    onChange={handleOnChange}
                  //  value={formData.email}
                />
                {errors && errors.email && <span>{errors.name}</span>}
                <button> Enviar</button>
            </form>
        </section>
    )
}

export default Form