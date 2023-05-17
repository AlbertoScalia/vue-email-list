const { createApp } = Vue

createApp({
    data() {
        return {
            mailAPI: 'https://flynn.boolean.careers/exercises/api/random/mail',
        }
    }
}).mount('#app')