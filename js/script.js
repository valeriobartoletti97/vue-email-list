const {createApp} = Vue;

createApp({
    data(){
        return{
           emails: [],
           myUri: 'https://flynn.boolean.careers/exercises/api/',
           reqBody: 'random/mail',
           nEmail: 10,
        }
    },
    methods:{
        
    },
    mounted(){
        for(let i = 0; i < this.nEmail; i++){
            axios.get(`${this.myUri}${this.reqBody}`).then((email)=>{
            this.emails.push(email.data.response)
        })
        }
    }
}).mount('#app')