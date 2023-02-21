const adoptionMethods ={
    adoptPet(pet){
        // Get the index
        const index = this.pets.indexOf(pet);
        // Change the adopted property
        this.pets[index].adopted = true;
        // Save the data
        this.savePetAtLocalStorage();
        // Show a success message
        swal('Éxito', 'Mascota adoptada con éxito', 'success');
        // Delete the pet
        this.pets.splice(index, 1);
    }
}