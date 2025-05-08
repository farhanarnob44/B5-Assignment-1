{
  function formatString(input: string, toUpper?: boolean): string {
    const upperCase = true;

    if (upperCase === true) {
      return input.toUpperCase();
    } else {
      return input.toLowerCase();
    }
  }
}

{
  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    const returnedBooks = items.filter((book) => book.rating >= 4);
    return returnedBooks;
  }
}
{
  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return [].concat(...arrays);
  }
}
{
  class Vehicle {
    private make: string;
    private year: number;
    // public model: string;
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
    getInfo() {
      return `Maike ${this.make} , year ${this.year}`;
    }
  }
  class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
    getModel() {
      return `Model is ${this.model}`;
    }
  }

}
{
    
}
