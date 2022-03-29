export type ValidatorType = (value: string) => string | undefined

export const required: ValidatorType = (value) => {
    if (value) return undefined

    return "Поле обязательно для заполнения"
}

export const maxLengthCreator = (maxLength: number): ValidatorType => (value) => {

    if (value.length > maxLength) return `Максимальная длина поля ${maxLength} символов`

    return undefined
}

export const minLengthCreator = (minLength: number): ValidatorType => (value) => {

    if (value.length < minLength) return `Минимальная длина поля ${minLength} символов`

    return undefined
}