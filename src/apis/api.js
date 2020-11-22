import axios from'axios'

export const client = axios.create({
    baseURL: 'http://localhost:3000'
})

// モック起動？

export default {
    getPosts(params) {
        return client.get('posts', params);
    }
}