import { useState } from "react"

export const FormTextarea = ({handleSubmit}) => {
// Очищает поле ввода после отправки сообщения
    const [value, setValue] = useState('')
    const handleClear = (e) =>  {
        e.preventDefault()
        setValue('')
    }
    const handleChange = (e) => setValue(e.target.value)

    return (
        <form onSubmit={handleSubmit}>
            <textarea value={value} onChange={handleChange} />
            <button onClick={handleClear}>Отправить</button>
        </form>
    )
}