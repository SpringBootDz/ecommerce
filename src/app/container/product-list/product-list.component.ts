import { Component } from '@angular/core';
import { Product } from '../productlist/product';


@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  //name="John Smith";
  addToCart:number = 0;

  products: Product[] = [
    {
      id: 1,
      name: 'Men\'s Classic T-Shirt',
      description: 'A classic t-shirt for everyday wear.',
      brand: 'Brand A',
      gender: 'Men',
      category: 'T-Shirts',
      size: ["S"],
      color: ['Black', 'White', 'Gray'],
      price: 20,
      discountPrice: 15,
      is_in_inventory: true,
      items_left: 50,
      imageUrl: '/assets/images/mens-classic-tshirt.png',
      slug: 'mens-classic-tshirt'
    },
    {
      id: 2,
      name: 'Women\'s Summer Dress',
      description: 'A light and airy dress perfect for summer.',
      brand: 'Brand B',
      gender: 'Women',
      category: 'Dresses',
      size: ["S" , "L" , "XL"],
      color: ['Red', 'Blue', 'Yellow'],
      price: 45,
      discountPrice: 35,
      is_in_inventory: true,
      items_left: 30,
      imageUrl: '/assets/images/womens-summer-dress.png',
      slug: 'womens-summer-dress'
    },
    {
      id: 3,
      name: 'Men\'s Jeans',
      description: 'Comfortable and stylish denim jeans.',
      brand: 'Brand C',
      gender: 'Men',
      category: 'Jeans',
      size: [30, 32, 34, 36, 38],
      color: ['Blue', 'Black'],
      price: 60,
      discountPrice: 50,
      is_in_inventory: true,
      items_left: 40,
      imageUrl: '/assets/images/mens-jeans.png',
      slug: 'mens-jeans'
    },
    {
      id: 4,
      name: 'Women\'s Blouse',
      description: 'A fashionable blouse for any occasion.',
      brand: 'Brand D',
      gender: 'Women',
      category: 'Blouses',
      size: ["S" , "L" , "XL"],
      color: ['White', 'Pink', 'Navy'],
      price: 35,
      discountPrice: 28,
      is_in_inventory: true,
      items_left: 25,
      imageUrl: '/assets/images/womens-blouse.png',
      slug: 'womens-blouse'
    },
    {
      id: 5,
      name: 'Men\'s Hoodie',
      description: 'A warm and comfortable hoodie.',
      brand: 'Brand E',
      gender: 'Men',
      category: 'Hoodies',
      size: ["S" , "L" , "XL"],
      color: ['Gray', 'Black', 'Navy'],
      price: 55,
      discountPrice: 45,
      is_in_inventory: true,
      items_left: 20,
      imageUrl: '/assets/images/mens-hoodie.png',
      slug: 'mens-hoodie'
    }
  ];
}





