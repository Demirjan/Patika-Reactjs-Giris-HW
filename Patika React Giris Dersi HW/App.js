import axios from "axios";

const API_URLS = {
    userDataApi: 'https://jsonplaceholder.typicode.com/users/',
    userPostApi: 'https://jsonplaceholder.typicode.com/posts?userId='
}

const getUserData = (userId) =>{
    return new Promise(async(resolve, reject) =>{
        const {data: userData} = await axios(API_URLS.userDataApi+ userId)
        resolve(userData)
    })
}

const getUserPost = (userId) =>{
    return new Promise(async (resolve, reject) =>{
        const {data: userPost} = await axios(API_URLS.userPostApi + userId)
        resolve(userPost)
    })
}

const getData = async(userId) =>{
    await getUserData(userId).then(userData => console.log(userData))
    await getUserPost(userId).then(userPostData => console.log(userPostData))
}

export default getData