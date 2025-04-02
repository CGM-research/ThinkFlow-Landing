const app = Vue.createApp({
    // data, functions
    // template: '<h2> I am the template </h2>'
    data () {
        return {
            title: "I am the title",
            description: "I am the description"
        };
    }
})

app.mount('#app')