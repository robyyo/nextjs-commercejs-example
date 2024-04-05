import React from 'react'

const ProductsGrid = ({ products, sortOptions }) => {
  // Sort products based on the selected sort option
  const sortedProducts = products.sort((a, b) => {
    if (sortOptions[0].current) {
      return a.created - b.created
    } else if (sortOptions[1].current) {
      return b.created - a.created
    } else if (sortOptions[2].current) {
      return a.price.raw - b.price.raw
    } else if (sortOptions[3].current) {
      return b.price.raw - a.price.raw
    }
  })

  return (
    <section
      aria-labelledby="products-heading"
      className="mx-auto max-w-2xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:max-w-7xl lg:px-8"
    >
      <h2 id="products-heading" className="sr-only">
        Products
      </h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {sortedProducts.map((product) => (
          <a key={product.id} href={product.href} className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src={product.image.url}
                alt="product image"
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
              {product.price.formatted_with_symbol}
            </p>
          </a>
        ))}
      </div>
    </section>
  )
}

export default ProductsGrid
