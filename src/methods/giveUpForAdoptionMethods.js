const giveUpForAdoptionMethods = {
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
        }
    },
    //Open select image options
    openSelectImage(){
        if(this.type === ''){
            swal('Error', 'Por favor seleccione una especie', 'error');
        } else if(this.type === 'perro'){
            this.render.isDog = true;
        } else if(this.type === 'gato'){
            this.render.isCat = true;
        }
    },
    // Select image
    selectImage(image){
        // Set the image
        this.image = image;
        // Close the modal
        this.render.isDog = false;
        this.render.isCat = false;
    },
    // Add pet to adoption
    addPetToAdoption(){
        if(this.name === '' || this.type === '' || this.race === '' || this.color === '' || this.image === '' || this.age === '' || this.description === '' || this.sex === ''){
            swal('Error', 'Por favor complete todos los campos', 'error');
            return;
        }
        // Create the pet
        const pet = {
            name: this.name,
            type: this.type,
            race: this.race,
            color: this.color,
            image: this.image,
            age: this.age,
            sex: this.sex,
            description: this.description,
            adopted: false,
        }
        // Add the pet to the pests array
        this.pets.push(pet);
        // Save the data
        this.savePetAtLocalStorage();
        // Show a success message
        swal('Éxito', 'Mascota agregada con éxito', 'success');
    },
    // Save data
    savePetAtLocalStorage(){
        // Save the data
        localStorage.setItem('pets', JSON.stringify(this.pets));
    },
    // Update pets
    updatePets(){
        // Check if the data exists
        if(localStorage.getItem('pets')){
            // If the data exists set the pets at pets property if the pet is not adopted
            this.pets = JSON.parse(localStorage.getItem('pets'));
        } else {
            // If the data doesn't exists set the pets at pets property
            this.pets = petsData;
            this.savePetAtLocalStorage();
        }
    }

}