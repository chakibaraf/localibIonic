export default class Voiture {
    id?: string;
    brand: string;
    model: string;
    immat: string;
    annee:number;
    price: number;
    type: string;

    constructor(
        id?: string,
        brand: string = "",
        model: string = "",
        annee:number = 0,
        immat: string = "",
        price: number = 0,
        type: string = ""
    ) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.annee = annee;
        this.immat = immat;
        this.price = price;
        this.type = type;
    };
}