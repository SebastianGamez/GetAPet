const homeMethods = {
    toggleMenu(){
        // toggle the showMenu property
        this.render.showMenu = !this.render.showMenu;
    },
    // Go to adoption
    goToAdoption(){
        // Hide menu
        this.render.showMenu = false;
        // Show adoption
        this.render.adoption = true;
        // Hide home
        this.render.home = false;
    }

}