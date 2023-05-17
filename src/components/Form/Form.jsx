export const Form = ({ formData, handleOnChange, errors, validateForm }) => {

    const handleOnsubmit = (evt) => {
        evt.preventDefault()
        if (validateForm()) {
            console.log(
                "Sending:",
                formData
            )}
    }

    return (
        <section>
            <form onSubmit={handleOnsubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleOnChange}
                    value={formData.name}
                />
                {errors && errors.name && <span>{errors.name}</span>}
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={handleOnChange}
                    value={formData.email}
                />
                {errors && errors.email && <span>{errors.email}</span>}
                <button>Send</button>
            </form>
        </section>
    )
}


