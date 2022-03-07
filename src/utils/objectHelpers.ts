export const updateObjectInArray = (items: any, itemId: any, objectPropName: any, newObjectProps: any) => {
    return items.map((u: any) => {
        if (u[objectPropName] === itemId) {
            return {...u, ...newObjectProps}
        }
        return u
    })
}