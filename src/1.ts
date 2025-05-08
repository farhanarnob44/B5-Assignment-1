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
  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }
}
{
  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }

    return products.reduce((maximum, product) =>
      product.price > maximum.price ? product : maximum
    );
  }
}
{
  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    if (day === Day.Sunday) {
      return "weekend";
    } else {
      return "weekday";
    }
  }
}
{
  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        setTimeout(() => {
          resolve(n * n);
        }, 1000);
      }
    });
  }
}
