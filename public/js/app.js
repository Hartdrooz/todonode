document.addEventListener('DOMContentLoaded',() => {    
    const app = new Vue({
        el: '#app',
        data: {
            todos: []
        },
        created: () => {
            fetch('').then((response) => {
                if (response.status !== 200){
                    console.log(`Looks like there was a problem. Status Code: ${response.status}`);
                    return;
                }
                response.json().then((data) => this.todos = data);
            })
            .catch((err) => {
                console.log(err);
            });
        }
    });
});