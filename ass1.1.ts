export class Address{
    city:string
    constructor(city){
        this.city=city
    }

    getAddressInfo(){
        return `Address: ${this.city}`
    }
}