/**
 * Product Model
 */
export class Product {

  constructor(
    public name: string,
    public description: string,
    public price: number,
    public isAvailable: boolean,
    public type: string,
  ) {
    // дефолтные значения можно задать сразу для параметров
    this.name = name || null;
    this.description = description || null;
    this.price = price || 0;
    this.isAvailable = isAvailable || false;
    this.price = price || 0;
    this.type = type || null;
  }
}
export enum Category {
  Technology = 1,
  Horror,
  Fiction
}
