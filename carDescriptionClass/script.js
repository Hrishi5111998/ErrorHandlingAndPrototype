class Car{
    company
    model
    year
    constructor(company, model, year){
        this.company = company
        this.model = model
        this.year = year
    }

    getDescription(){
       return `This is a ${car.year} ${car.company} ${car.model}`
    }
}

const car = new Car('Honda', 'Amaze', 2022)
console.log(car.getDescription());