import { useState } from "react"
import Form from "./Form"
import { formValidation } from "./formValidation.jsx"

const FormValidation = formValidation(Form)

export const InputForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: ""
    })

    const handleOnChange = (evt) => {

        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }

    return (
        <FormValidation formData={formData} handleOnChange={handleOnChange} />
    )
}