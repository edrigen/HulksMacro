import { Injectable } from '@angular/core';
import { Product } from '../initialization/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Chicken Breast',
      price: 250,
      description: 'Lean and high in protein, chicken breast is a popular and affordable choice for building meals with plenty of protein.',
      imageUrl: 'assets/images/chickenbreast.jpg',
      protein: '22.5g / 100g'
    },
    {
      id: 2,
      name: 'Chicken Eggs',
      price: 9,
      description: 'Chicken eggs are an affordable source of complete protein and contain important nutrients such as vitamins and minerals.',
      imageUrl: 'assets/images/chickeneggs.jpg',
      protein: '6–7g / egg'
    },
    {
      id: 3,
      name: 'Tilapia',
      price: 190,
      description: 'Tilapia is a commonly available freshwater fish that provides a good amount of protein while being relatively affordable.',
      imageUrl: 'assets/images/tilapia.jpg',
      protein: '20g / 100g'
    },
    {
      id: 4,
      name: 'Galunggong',
      price: 250,
      description: 'Galunggong is a popular Philippine fish that is affordable, widely available in wet markets, and provides a good source of protein.',
      imageUrl: 'assets/images/galunggong.jpg',
      protein: '20g / 100g'
    },
    {
      id: 5,
      name: 'Pork Kasim',
      price: 325,
      description: 'Pork kasim is a commonly available pork cut that provides a substantial amount of protein and can be prepared in many different ways.',
      imageUrl: 'assets/images/porkkasim.jpg',
      protein: '20–27g / 100g'
    },
    {
      id: 6,
      name: 'Bangus',
      price: 250,
      description: 'Bangus, also known as milkfish, is one of the most commonly consumed fish in the Philippines and provides a good source of protein.',
      imageUrl: 'assets/images/bangus.jpg',
      protein: '18–20g / 100g'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}