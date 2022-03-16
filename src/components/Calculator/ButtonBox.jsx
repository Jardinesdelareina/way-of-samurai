import s from './Calculator.module.scss'
import Button from './Button'

const ButtonValues = [
    ["AC", "+/-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="]
]

const ButtonBox = (props) => {
    return (
        <div className={s.calculator__buttonbox}>
            {ButtonValues.flat().map((btn, i) => {
                return (
                    <Button
                        key={i}
                        className={btn === "=" ? "equals" : ""}
                        value={btn}
                        onClick={() => {
                            console.log(`${btn} clicked!`)
                        }}
                    />
                )
            })}
        </div>
    )
}

export default ButtonBox