const adoptionMethods ={
    // Get adopt pet status
    getAdoptPetStatus(pet){
        // Check if the pet is adopted
        if(pet.adopted){
            // If the pet is adopted return true
            return 'Adoptado';
        } else {
            // If the pet is not adopted return false
            return 'En adopción';
        }
    },
    // Adopt pet
    adoptPet(pet){
        // Get the index
        const index = this.pets.indexOf(pet);
        // Change the adopted property
        this.pets[index].adopted = true;
        // Save the data
        this.savePetAtLocalStorage();
        // Show a success message
        swal('Éxito', 'Mascota adoptada con éxito', 'success');
    }
}