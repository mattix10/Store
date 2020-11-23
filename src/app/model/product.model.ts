export class Product {
  constructor(
    public _id?: string,
    public id?: number,
    public name?: string,
    public category?: string,
    public description?: string,
    public price?: number,
    public image?: Array<string>,
    public size?: string) {}
}