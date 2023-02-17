import axios from 'axios'

const gridApi = axios.create({
    baseURL: "https://api.carbonintensity.org.uk/"
});

export const getGeneration = () => {
    return gridApi.get("/generation").then(({data})=>{
        return data;
    })
}

export const getGenerationFrom = (start) => {
    return gridApi.get(`/generation/${start}/pt24h`).then(({data})=>{
        return data
    })
}

export const getGenerationFromTo = (start, end) => {
    return gridApi.get(`/generation/${start}/${end}`).then(({data})=>{
        return data
    })
}