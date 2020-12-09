import axios from "axios";

export const instance = axios.create({
    baseURL: "http://dev.ms-touristperm.ru/api/",

})

// export const GetLikesApi = (elementId , elementType ) => {
//     return instance.get(`likes/amount/?elementId=${elementId}&elementType=${elementType}`,{}).then(response => {
//         return response.data.count;
//     })
// }


