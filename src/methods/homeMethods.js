const homeMethods = {
    toggleMenu(){
        // toggle the showMenu property
        this.render.showMenu = !this.render.showMenu;
    },
    // Go to home
    goToHome(){
        // Change the render
        this.render = {
            // Login
            login: false,
            // give up for adoption
            giveUpForAdoption: false,
            // Show menu
            showMenu: false,
            // Users
            home: true,
            // Adoption
            adoption: false,
            // Admin
            admin: false,
        }
    },
    // Go to adoption
    goToAdoption(){
        this.render = {
            // Login
            login: false,
            // give up for adoption
            giveUpForAdoption: false,
            // Show menu
            showMenu: false,
            // Users
            home: false,
            // Adoption
            adoption: true,
            // Admin
            admin: false,
        }
    },
    // go to give up for adoption
    goToGiveUpForAdoption(){
        // Change the render
        this.render = {
            // Login
            login: false,
            // give up for adoption
            giveUpForAdoption: true,
            // Show menu
            showMenu: false,
            // Users
            home: false,
            // Adoption
            adoption: false,
            // Admin
            admin: false,
        }
    },
    // Go to admin
    goToAdmin(){
        this.render = {
            // Login
            login: false,
            // give up for adoption
            giveUpForAdoption: false,
            // Show menu
            showMenu: false,
            // Users
            home: false,
            // Adoption
            adoption: false,
            // Admin
            admin: true,
        }
    }

}