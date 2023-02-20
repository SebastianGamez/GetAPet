// Description: Main entry point for the application of pets
// Author: Sebastián Gámez Ariza

// Vue
const { createApp } = Vue;

// Create the app
const app = createApp({
    
    // Data
    data() {
        return {
            // Render
            render: {
                // Login
                login: true,
                // Users
                users: false,
            },
            // Users
            users: [],
            // Username
            username: '',
            // Password
            password: '',
            // Name
            name: '',
            // Picture
            picture: '',
        }
    },
    // Mounted
    mounted (){
        if(localStorage.getItem('data')) {
            // Update users
            this.updateUsers();
        } else {
            // Get the users
            this.getUsers();
        }
        // Print credentials
        this.printCredentials();
    },
    // Methods
    methods: {
        // Get users from API
        async getUsers() {
            // Define url
            let url = 'https://randomuser.me/api/?results=5';
            // Get the users
            await fetch(url)
                // Get the response
                .then(response => response.json())
                // Get the data
                .then(data => {
                    // Set the users
                    this.users = data.results;
                }
            ).catch(error => {
                // Log the error
                console.log(error);
            });
            // Create admin
            this.createAdmin();
            // Log the users
            console.log(this.users);
            // Update localStorage
            this.updateLocalStorage();
        },
        // Create admin
        createAdmin() {
            // Define if the user is admin
            for(let i = 0; i < 5; i++) {
                // Create the user
                this.users[i].admin = i === 0 ? true : false;
            }
        },
        // Update localStorage
        updateLocalStorage() {
            localStorage.setItem('data', JSON.stringify(this.users));
        },
        // Update users
        updateUsers() {
            // Get the users
            this.users = JSON.parse(localStorage.getItem('data'));
        },
        // Login
        login() {
            // Check if the user exists
            let user = this.users.find(user => user.login.username === this.username && user.login.password === this.password);
            // If the user doesn't exist
            if(!user) {
                // Show message
                return swal("Error!", "El usuario o contraseña no son correctos", "error");
            }
            // Set the picture
            this.picture = user.picture.thumbnail;
            // Set the name
            this.name = `${user.name.first} ${user.name.last}`;
            // Show message
            swal("Bienvenido!", `Has iniciado sesión ${user.name.first}`, "success");
            // Hide login
            this.render = {
                login: false,
                users: true
            }
        },
        // Get out of the app
        logout() {
            // Show login
            this.render = {
                login: true,
                users: false
            }
        },
        // Show credentials
        printCredentials() {
            this.users.map(user => {
                console.log(`Username: ${user.login.username} Password: ${user.login.password}`);
            });
        }

    }
});

// Mount the app
app.mount('#app');