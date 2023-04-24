

export const formValidation = (NewForm) => {
    
    const FormValidation = (props) => {
        const [errors, setErrors] = useState({})
        const validateForm = () => {
            let newErrors = {}
            let isValid = true


            if (!props.formData.name) {
                newErrors.name = "Completar con los datos correspondientes"
                isValid = false
            }
            if (!props.formData.email) {
                newErrors.email = "Completar con los datos correspondientes"
                isValid = false
            }

            setErrors(newErrors)
            return isValid

        }

        return <NewForm
            {...props}
            errors={errors}
            validation={validateForm}
        />
    }

    return FormValidation
}


