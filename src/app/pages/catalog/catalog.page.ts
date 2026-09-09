import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ProductService } from '../../services/product';
import { Product } from '../../initialization/product.interface';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
  standalone:false
})

export class CatalogPage implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router 
  ) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

    goToDetail(id: number) {
  this.router.navigate(['/tabs/product-page', id]);
}
}