export default {
    getRandomWYR(){  // returns a Promise
        return fetch('/wyr').then(response => {  // makes a fetch call (chaining on .then block), gets a response, converts response to json format
            return response.json()  // response .json also a returned promise
        })
    }
}