import React from 'react'

const ProductPageHeader = ({ activeFilters }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          {activeFilters.length > 0
            ? `Filtered Products: ${activeFilters.map(
                (filter, index) =>
                  `${filter.name}${
                    index < activeFilters.length - 1 ? '' : ' '
                  }`,
              )}`
            : 'All Products'}
        </h1>
        <p className="mt-4 max-w-xl text-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
          laudantium. Necessitatibus hic possimus molestiae aspernatur magni
          beatae rerum neque, praesentium deserunt aliquid eum illo id cum
          officia officiis asperiores reprehenderit magnam tempore facilis
          corrupti dignissimos?
        </p>
      </div>
    </div>
  )
}

export default ProductPageHeader
