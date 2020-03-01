const serializeData = (data) => JSON.stringify(data)

export const setLocalStorage = async (name, item) => {
    await localStorage.setItem(name, serializeData(item));
}

export const getLocalStorage = async (name) => {
    try {
        let x;
        x = await localStorage.getItem(name)
        return JSON.parse(x);
    }
    catch(err){ return null}
}