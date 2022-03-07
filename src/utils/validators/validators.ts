export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = (value) => {
    if (value) return undefined
    return "Поле обязательно для заполнения"
}

export const maxLengthCreator = (maxLength: number): FieldValidatorType => (value) => {
    if (value.length > maxLength) return `Максимальная длина поля ${maxLength} символов`
    return undefined
}

export const minLengthCreator = (minLength: number): FieldValidatorType => (value) => {
    if (value.length < minLength) return `Минимальная длина поля ${minLength} символов`
    return undefined
}