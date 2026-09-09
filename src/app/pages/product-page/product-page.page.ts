import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product';
import { Product } from '../../initialization/product.interface';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.page.html',
  styleUrls: ['./product-page.page.scss'],
  standalone:false
})
export class ProductPagePage implements OnInit {
  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('productId');
    if (id) {
      this.product = this.productService.getProductById(Number(id));
    }
  }
}