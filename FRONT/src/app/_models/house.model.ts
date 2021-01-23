export class House {

    public constructor(
        public id: number,
        public title?: string,
        public owner?: string,
        public adress?: string,
        public price?: number,
        public size?: number,
        public nbBedRoom?: string,
        public nbRoom?: string,
        public about?: string,
        public picture = 'image-not-found.jpeg',
    ){}
}
