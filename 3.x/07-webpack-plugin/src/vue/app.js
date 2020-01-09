export default {
    template: `
        <div>
            <h2>{{message}}</h2>
            <button @click="btnClick">按钮</button>
        </div>
    `,
    data(){
        return{
            message: "Hello, world",
        }
    },
    methods: {
        btnClick (){
            console.log("hehehe")
        }
    }
};