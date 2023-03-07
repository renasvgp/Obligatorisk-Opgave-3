Vue.createApp({
    data() {
        return {
            word: null,
            result: []
        }
    },
    methods: {
        show(){
            const reveseString = this.word.split("").reverse().join("")
            const firstLetterCapitalized = this.word.charAt(0).toUpperCase() + this.word.slice(1).toLowerCase()
            const lastLetterCapitalized =  this.word.slice(0,-1).toLowerCase() + this.word.charAt(this.word.length -1).toUpperCase()

            this.result = [this.word.toLowerCase(), this.word.toUpperCase(), firstLetterCapitalized, lastLetterCapitalized, reveseString]
        },
    }
}).mount("#app")