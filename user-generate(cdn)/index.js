const app = Vue.createApp({
    // template: '<h1>Hello {{firstName}}</h1>',
    data() {
        return {
            firstName: 'Adham',
            lastName: 'Ahmad',
            email: 'adham@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/portraits/men/10.jpg'
        }
    },
    methods: {
        async getUser() {
            const response = await fetch('https://randomuser.me/api')
            const { results } = await response.json() // { results } founded in api show by used results only
            // const results = await response.json() // To show data in api results.results
            // console.log(results)
            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last,
            this.email = results[0].email,
            this.gender = results[0].gender,
            this.picture = results[0].picture.large
        }
    }
})
app.mount('#app')