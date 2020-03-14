import { Fetch } from "./Fetch"
export const getPhotoDB = async () => {
    return await Fetch("GET", `/db`)
}