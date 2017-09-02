namespace VechileNameSpace {
  export interface Car {
    model: string;
    engine: string;
    horsepower: number;
  }

  export function carDetail(car: Car) {
    console.log(` The car details are : Model ${car.model} , 
     Engine ${car.engine} and the horespower is ${car.horsepower}`);
  };
}