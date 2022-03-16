import { useState } from 'react'
import s from './Calculator.module.scss'

const ButtonValues = [
  ["AC", "+/-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="]
]

const Calculator = () => {
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  })

  // Срабатывает тогда, когда какой-либо из цифровых символов прессуют
  const numClickHandler = (e) => {
    e.preventDefault()
    const value = e.target.innerHTML

    if (calc.num.length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : calc.num % 1 === 0
              ? Number(calc.num + value)
              : calc.num + value,
        res: !calc.sign ? 0 : calc.res,
      })
    }
  }

  // Срабатывает тогда, когда нажата десятичная точка
  const commaClickHandler = (e) => {
    e.preventDefault()
    const value = e.target.innerHTML

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    })
  }

  // Срабатывает тогда, когда нажимается +, -, * или /
  const signClickHandler = (e) => {
    e.preventDefault()
    const value = e.target.innerHTML

    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    })
  }

  // Проверяет, есть ли num или res, затем вычисляет процент
  const percentClickHandler = () => {
    let num = calc.num ? parseFloat(calc.num) : 0
    let res = calc.res ? parseFloat(calc.res) : 0

    setCalc({
      ...calc,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sign: "",
    })
  }

  // Вычисляет результат когда нажата кнопка =
  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
            ? a - b
            : sign === "X"
              ? a * b
              : a / b

      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? "Can't divide with 0"
            : math(Number(calc.res), Number(calc.num), calc.sign),
        sign: "",
        num: 0,
      })
    }
  }

  // Сначала проверяет, есть ли num или res, затем инвертирует путем умножения на -1
  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: "",
    })
  }

  // Возвращает начальные значения calc
  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      res: 0,
    })
  }

  return (
    <div className={s.calculator__wrapper}>
      <Screen value={calc.num ? calc.num : calc.res} />
      <div className={s.calculator__buttonbox}>
        {ButtonValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={btn === "=" ? "equals" : ""}
              value={btn}
              onClick={
                btn === "AC"
                  ? resetClickHandler
                  : btn === "+/-"
                  ? invertClickHandler
                  : btn === "%"
                  ? percentClickHandler
                  : btn === "="
                  ? equalsClickHandler
                  : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                  ? signClickHandler
                  : btn === "."
                  ? commaClickHandler
                  : numClickHandler
              }
            />
          )
        })}
      </div>
    </div>
  )
}

const Screen = ({ value }) => {
  return (
    <div className={s.calculator__screen}>
      <div className="calculator__screen" mode="single" max={70}>
        {value}
      </div>
    </div>
  )
}

const Button = ({ className, value, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  )
}

export default Calculator