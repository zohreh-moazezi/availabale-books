class Book {
    constructor(title, author, ISBN, numCopies) {
      this.title = title;
      this.author = author;
      this.ISBN = ISBN;
      this.numCopies = numCopies;
    }
  
    // Getter
    // Getters give you a way to define a property of an object, but they do not 
    //   calculate the property's value until it is accessed.
    get availability() {
      return this.getAvailability();
    }
  
    // Method
    getAvailability() {
      var message = "";
      if (this.numCopies === 0) {
        message = "Out of stock";
      } else if (this.numCopies < 10) {
        message = "Low stock";
      } else {
      message = "In stock";
      }
      return message;
    }
  
    sell(numCopiesSold = 1) {
      this.numCopies -= numCopiesSold;
    }
  
    restock(numCopiesStocked = 5) {
      this.numCopies += numCopiesStocked;
    }
  }
  
  const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123919, 5);
  console.log(HungerGames.availability);
  HungerGames.restock(12);
  console.log(HungerGames.availability);
  HungerGames.sell(17);
  console.log(HungerGames.availability);