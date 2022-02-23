export const required = (value) => {
    if (value) return undefined;

    return "Поле обязательно для заполнения";
}

export const maxLengthCreator = (maxLength) => (value) => {

    if (value.length > maxLength) return `Максимальная длина поля ${maxLength} символов`;

    return undefined;
}

export const minLengthCreator = (minLength) => (value) => {

    if (value.length < minLength) return `Минимальная длина поля ${minLength} символов`;

    return undefined;
}