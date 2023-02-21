const loginMethods = {
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
        this.printCredentials();
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
        // Set the user
        this.user = user;
        // Show message
        swal("Bienvenido!", `Has iniciado sesión ${this.user.name.first}`, "success");
        // Hide login
        this.render = {
            login: false,
            home: true
        }
    },
    // Get out of the app
    logout() {
        // Show login
        this.render = {
            login: true,
            home: false
        }
    },
    // Show credentials
    printCredentials() {
        this.users.map(user => {
            console.log(`Username: ${user.login.username} Password: ${user.login.password}`);
        });
    }
}