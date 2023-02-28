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
                adoption: false,
                // give up for adoption
                giveUpForAdoption: false,
                // Is dog
                isDog: false,
                // Is cat
                isCat: false,
            },
            /*LOGIN PROPERTIES*/
            // Users
            users: [],
            // User
            user: {},
            // Username input
            username: '',
            // Password input
            password: '',
            /*GIVE UP FOR ADOPTION PROPERTIES*/
            // Pets
            pets: [],
            // Pets no adopted
            petsNoAdopted: [],
            // Inputs
            name: '',
            type: '',
            race: '',
            color: '',
            image: '',
            age: '',
            description: ''
        }
    },
    // Mounted
    mounted (){
        // Check if the data exists
        if(localStorage.getItem('data')) {
            // If the data exists set the users at users property
            this.updateUsers();
            // Print credentials
            this.printCredentials();
        } else {
            // Get the users
            this.getUsers();
        }
        // Update pets
        this.updatePets();
    },
    // Watch
    watch: {
        // Watch the pets
        pets: {
            // Handler
            handler: function () {
                // Save the data
                this.petsNoAdopted = this.pets.filter(pet => pet.adopted === false);
            },
            // Deep
            deep: true,
            // Immediate
            immediate: true
        }

    },
    // Methods
    methods: {
        // Login methods
        ...loginMethods,
        // Home methods
        ...homeMethods,
        // Adoption methods
        ...adoptionMethods,
        // Give up for adoption methods
        ...giveUpForAdoptionMethods
    }
});

// Mount the app
app.mount('#app');