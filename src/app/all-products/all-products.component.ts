import { NgFor, NgStyle, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [FormsModule, ButtonModule, InputTextModule, NgFor, NgStyle, NgClass],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent {
  prductsArray: Array<any> = [
    {
      "id":	1,
      "img":	"assets/imgs/earPods.png",
      "title":	"Wireless Earbods",
      "description":	"Suitable For Airpods1/2 Generation Silicone Protective Case",
      "price":	"230",
      "discount": 10,
      "stock": 0,
      "rating": 5
    },
    {
      "id":	2,
      "img":	"assets/imgs/headPhone.png",
      "title":	"HeadPhone Max",
      "description":	"P9 Bluetooth Wireless Headphone - Black",
      "price":	"150",
      "discount": 10,
      "stock": 4,
      "rating": 4.5
    },
    {
      "id":	3,
      "img":	"assets/imgs/earPods.png",
      "title":	"Wireless Earbods",
      "description":	"Suitable For Airpods1/2 Generation Silicone Protective Case",
      "price":	"30",
      "discount": 10,
      "stock": 0,
      "rating": 4.5
    },
    {
      "id":	4,
      "img":	"assets/imgs/headPhone.png",
      "title":	"HeadPhone Max",
      "description":	"P9 Bluetooth Wireless Headphone - Black",
      "price":	"150",
      "discount": 10,
      "stock": 2,
      "rating": 4
    },
    {
      "id":	5,
      "img":	"assets/imgs/headPhone.png",
      "title":	"HeadPhone Max",
      "description":	"P9 Bluetooth Wireless Headphone - Black",
      "price":	"50",
      "discount": 10,
      "stock": 0,
      "rating": 4
    },
    {
      "id":	6,
      "img":	"assets/imgs/earPods.png",
      "title":	"Wireless Earbods",
      "description":	"Suitable For Airpods1/2 Generation Silicone Protective Case",
      "price":	"330",
      "discount": 10,
      "stock": 0,
      "rating": 4.5
    },
    {
      "id":	7,
      "img":	"assets/imgs/headPhone.png",
      "title":	"HeadPhone Max",
      "description":	"P9 Bluetooth Wireless Headphone - Black",
      "price":	"50",
      "discount": 10,
      "stock": 7,
      "rating": 4
    },
    {
      "id":	8,
      "img":	"assets/imgs/earPods.png",
      "title":	"Wireless Earbods",
      "description":	"Suitable For Airpods1/2 Generation Silicone Protective Case",
      "price":	"130",
      "discount": 10,
      "stock": 8,
      "rating": 3
    }
  ]

  constructor(private router:Router){}

  singleProduct(productId: number){
    this.router.navigate(['/singleProduct', productId])
  }

  convertRatingToStars(rating: number) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    const fullStarIcon = '<i class="fa-solid fa-star mb-4"></i>';
    const halfStarIcon = '<i class="fa-solid fa-star-half-alt mb-4"></i>';
    const emptyStarIcon = '<i class="fa-regular fa-star mb-4"></i>';

    return fullStarIcon.repeat(fullStars) + halfStarIcon.repeat(halfStar) + emptyStarIcon.repeat(emptyStars);
  }

  calculateDiscountPercentage(): void {
    this.productsArray.forEach(product => {
      const discountedPrice = mainPrice - (mainPrice * (product.discount / 100));
      product.discountPercentage = ((mainPrice - discountedPrice) / mainPrice) * 100;
    });
  }
}
