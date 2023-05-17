const { createApp } = Vue

createApp({
    data() {
        return {
            mailAPI: 'https://flynn.boolean.careers/exercises/api/random/mail',
            mailAddress: null,
            mailList: []
        }
    },
    methods: {

        getMailList() {
            for (let i = 0; i < 10; i++) {
                axios
                    .get(this.mailAPI)
                    .then(response => {
                        this.mailAddress = response.data
                        this.mailList.push(this.mailAddress)
                    })
            }
        }
    },
    mounted() {
        this.getMailList()
    }
}).mount('#app')