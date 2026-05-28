import React from 'react'

const ShoeCard = React.memo(function ShoeCard({ item }) {
  const { name, description, price, category, color, brand, image } = item

  return (
    <div className="w-60 h-96 shrink-0 border border-black rounded-xl shadow-sm [content-visibility:auto] [contain-intrinsic-size:240px_384px]">
      {image ? (
        <img
          src={image}
          alt={name}
          loading="lazy"
          decoding="async"
          className="w-56 h-60 m-auto object-cover"
        />
      ) : (
        <div className="w-56 h-60 m-auto bg-gray-100" />
      )}

      <div className="h-auto w-56 mx-auto px-1">
        <section className="flex justify-between gap-2">
          <span className="font-medium truncate">{name}</span>
          <span>${price}</span>
        </section>
        <section className="text-sm text-gray-600 line-clamp-2">{description}</section>
        <section className="text-sm flex gap-2">
          <span>{brand}</span>
          <span>{category}</span>
        </section>
        <section
          className="w-6 h-6 rounded-full border border-gray-300 mt-1"
          style={{ backgroundColor: color }}
          title={color}
        />
      </div>
    </div>
  )
})

export default ShoeCard
