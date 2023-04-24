import { useState } from "react"

const Filter = ({children}) => { 
    const [stateF, setStateF] = useState("")

    const filterChange = (evt) =>{
        setStateF(evt.target.value)
    }

    return children( {stateF, filterChange} )
}
export default Filter