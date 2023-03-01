import { Component, OnInit } from '@angular/core';
import {categories, Category} from "../categories";
import {ActivatedRoute} from "@angular/router";
import {Product, products} from "../products";
import {filter} from "rxjs";


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent {
  category: Category | undefined
  products = products;
  cnt : number = 0
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const categoryIdFromRoute = Number(routeParams.get('categoryId'));

    // Find the product that correspond with the id provided in route.
    this.category = categories.find(category => category.id === categoryIdFromRoute);

  }
  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  increase(id: number) {
    // this.products = products.find(product => product.id === id);
    for ( let i=0;i<categories.length;i++) {
      let p = categories[i].product;
      for (let j=0;j<p.length;j++){
        if (p[j].id === id) {
          if (p[j].like!==undefined) {
            // @ts-ignore
            p[j].like++;
          }else {
            p[j].like = 1 ;
          }
        }
      }
    }
  }
  removeItem(id: number){
    if (this.category) {
      this.category.product = this.category.product.filter((x: Product) => x.id !== id)
    }
  }
}
