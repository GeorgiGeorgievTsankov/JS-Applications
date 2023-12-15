import { api } from "./api.js"

const dataEndpoints = {
    getAll: 'data/characters?sortBy=_createdOn%20desc',
    singleCharacter: "data/characters/"

}

async function getAllCharacters() {
    return api.get(dataEndpoints.getAll)

}

async function getSingleCharacter(id) {
    return api.get(dataEndpoints.singleCharacter + id)

}
async function createCharacter(data) {
    return api.post(dataEndpoints.singleCharacter, data)
}

async function updateCharacter(id, data) {
    return api.put(dataEndpoints.singleCharacter + id, data)
}

async function delCharacter(id) {
    return api.del(dataEndpoints.singleCharacter + id)
}

export const dataService = {
    getAllCharacters,
    getSingleCharacter,
    createCharacter,
    updateCharacter,
    delCharacter,
}