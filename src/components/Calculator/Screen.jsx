import s from './Calculator.module.scss'

const Screen = ({value}) => {
    return (
        <div className={s.calculator__screen}>
            <div className="calculator__screen" mode="single" max={70}>
                {value}
            </div>
        </div>
    )
}

export default Screen