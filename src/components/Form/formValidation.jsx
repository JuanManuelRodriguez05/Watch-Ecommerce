import { useState } from "react"


export const formValidation = (NewForm) => {
    const FormValidation = (props) => {
      const [errors, setErrors] = useState({})
  
      const validateForm = () => {
        let newErrors = {}
        let isValid = true
  
        if (!props.formData.name) {
          newErrors.name = "Complete with the corresponding data"
          isValid = false
        }
        if (!props.formData.email) {
          newErrors.email = "Complete with the corresponding data"
          isValid = false
        }
  
        setErrors(newErrors)
        return isValid
      }
  
      return (
        <NewForm
          {...props}
          errors={errors}
          validateForm={validateForm} 
        />
      )
    }
  
    return FormValidation
  }

