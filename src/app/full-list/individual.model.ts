export class Individual {
    public name: string;
    public description: string;
    public rating: number;
    public imagePath: string;

    constructor(name: string, description: string, rating: number, imagePath: string){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.rating = rating;
    }
}