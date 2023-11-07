const {createApp} = Vue;

createApp({
    data(){
        return{
           emails: []
        }
    },
    methods:{
        
    },
    mounted(){
        for(let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((email)=>{
            console.log(email.data.response);
            this.emails.push(email.data.response)
        })
        }
        
        console.log(this.emails.length)
    }
}).mount('#app')