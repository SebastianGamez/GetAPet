// Description: Main entry point for the application of pets
// Author: Sebastián Gámez Ariza

// Vue
const { createApp } = Vue;

// Create the app
const app = createApp({
    // Data
    data() {
        return {
            /*RENDER*/
            render: {
                // Login
                login: true,
                // Show menu
                showMenu: false,
                // Users
                home: false,
                // Adoption
                adoption: false
            },
            /*LOGIN PROPERTIES*/
            // Users
            users: [],
            // User
            user: {},
            // Username input
            username: '',
            // Password input
            password: ''
        }
    },
    // Mounted
    mounted (){
        // Check if the data exists
        if(localStorage.getItem('data')) {
            // If the data exists set the users at users property
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
        // Login methods
        ...loginMethods,
        // Home methods
        ...homeMethods
    }
});

// Mount the app
app.mount('#app');