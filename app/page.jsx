'use client'

import HeroSection from '@/components/HeroSection'
import TrendingProductsSection from '@/components/TrendingProductsSection'

const navigation = {
  categories: [
    {
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt:
            'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt:
            'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
          imageAlt:
            'Model wearing minimalist watch with black wristband and white watch face.',
        },
        {
          name: 'Carry',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg',
          imageAlt:
            'Model opening tan leather long wallet with credit card pockets and cash pouch.',
        },
      ],
    },
    {
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
          imageAlt:
            'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
          imageAlt: 'Model wearing light heather gray t-shirt.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
          imageAlt:
            'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
        },
        {
          name: 'Carry',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
          imageAlt:
            'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}

const collections = [
  {
    name: "Women's",
    href: '#',
    imageSrc:
      './images/products/images-womens-dresses-corey-saldana-unsplash-min.jpg',
    imageAlt: 'Woman wearing a comfortable cotton t-shirt.',
  },
  {
    name: "Men's",
    href: '#',
    imageSrc:
      './images/products/images-mens-fashion-nordwood-themes-unsplash-min.jpg',
    imageAlt: 'Man wearing a comfortable and casual cotton t-shirt.',
  },
  {
    name: 'Accessories',
    href: '#',
    imageSrc:
      './images/products/images-accessories-brooke-cagle-kElEigko7PU-unsplash-min.jpg',
    imageAlt:
      'Person sitting at a wooden desk with paper note organizer, pencil and tablet.',
  },
]

const trendingProducts = [
  {
    id: 1,
    name: "Men's Jeans 3",
    color: 'Burnt Orange',
    price: '$75',
    href: '#',
    imageSrc: './images/products/images-mens-jeans-rayul-unsplash-min.jpg',
    imageAlt: "Men's Jeans 3",
  },
  {
    id: 2,
    name: "Women's Dress 2",
    color: 'Red',
    price: '$35',
    href: '#',
    imageSrc:
      './images/products/images-womens-dresses-corey-saldana-unsplash-min.jpg',
    imageAlt: "Women's Dress 2.",
  },
  {
    id: 3,
    name: "Women's Coat",
    color: 'Black',
    price: '$175',
    href: '#',
    imageSrc:
      './images/products/images-womens-coats-ospan-ali-unsplash-min.jpg',
    imageAlt: "Women's Coat",
  },
  {
    id: 4,
    name: "Men's Jeans 2",
    color: 'Blue',
    price: '$55',
    href: '#',
    imageSrc:
      './images/products/images-mens-jeans-yannic-laderach-unsplash-min.jpg',
    imageAlt: "Men's Jeans 2",
  },
]

export default function HomePage() {
  return (
    <div className="bg-white">
      <main>
        <HeroSection collections={collections} />
        <TrendingProductsSection trendingProducts={trendingProducts} />
      </main>
    </div>
  )
}
