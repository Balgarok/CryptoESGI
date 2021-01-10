export class House {
    
    constructor(
        public title?: string,
        public owner?: string,
        public adress?: string,
        public price?: string,
        public size?: string,
        public nbBedRoom?: string,
        public nbRoom?: string,
        public about?: string,
        public picture = 'image-not-found.jpeg',
    ){}
}
