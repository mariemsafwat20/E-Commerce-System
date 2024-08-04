import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {
  userId!: number;
  userDetails: any;
  numOfProducts: number = 1;

  prductsArray: Array<any> = [
    {
      "id":	1,
      "img":	"assets/imgs/earPods.png",
      "title":	"Wireless Earbods",
      "description":	"Suitable For Airpods1/2 Generation Silicone Protective Case",
      "price":	"30$",
      "stock": 0,
      "rating": 5
    },
    {
      "id":	2,
      "img":	"assets/imgs/headPhone.png",
      "title":	"HeadPhone Max",
      "description":	"P9 Bluetooth Wireless Headphone - Black",
      "price":	"50$",
      "stock": 4,
      "rating": 4.5
    },
    {
      "id":	3,
      "img":	"assets/imgs/earPods.png",
      "title":	"Wireless Earbods",
      "description":	"Suitable For Airpods1/2 Generation Silicone Protective Case",
      "price":	"30$",
      "stock": 0,
      "rating": 4.5
    },
    {
      "id":	4,
      "img":	"assets/imgs/headPhone.png",
      "title":	"HeadPhone Max",
      "description":	"P9 Bluetooth Wireless Headphone - Black",
      "price":	"50$",
      "stock": 2,
      "rating": 4
    },
    {
      "id":	5,
      "img":	"assets/imgs/headPhone.png",
      "title":	"HeadPhone Max",
      "description":	"P9 Bluetooth Wireless Headphone - Black",
      "price":	"50$",
      "stock": 0,
      "rating": 5.5
    },
    {
      "id":	6,
      "img":	"assets/imgs/earPods.png",
      "title":	"Wireless Earbods",
      "description":	"Suitable For Airpods1/2 Generation Silicone Protective Case",
      "price":	"30$",
      "stock": 0,
      "rating": 4.5
    },
    {
      "id":	7,
      "img":	"assets/imgs/headPhone.png",
      "title":	"HeadPhone Max",
      "description":	"P9 Bluetooth Wireless Headphone - Black",
      "price":	"50$",
      "stock": 7,
      "rating": 4
    },
    {
      "id":	8,
      "img":	"assets/imgs/earPods.png",
      "title":	"Wireless Earbods",
      "description":	"Suitable For Airpods1/2 Generation Silicone Protective Case",
      "price":	"30$",
      "stock": 8,
      "rating": 3
    }
  ]

  constructor(private activatedRouter: ActivatedRoute){}

  ngOnInit() {
    this.userId = this.activatedRouter.snapshot.params['id'];
    this.userDetails = this.prductsArray.find(
      (user:any) => user.id == this.userId
    );
    console.log(this.userDetails);
    console.log(this.userId);
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
}
