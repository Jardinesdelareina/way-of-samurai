import s from './Calculator.module.scss'
import ButtonBox from './ButtonBox'
import Screen from './Screen'

const Calculator = (props) => {
    return (
        <div className={s.calculator__wrapper}>
            <Screen value="0" />
            <ButtonBox
                className=""
                value="0"
                onClick={() => { console.log("Button clicked!") }}
            />
        </div>
    )
}

export default Calculator