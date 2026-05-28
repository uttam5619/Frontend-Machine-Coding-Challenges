import React from 'react'
import { shoesCollection } from '../utils/data'
import ShoeCard from './ShoeCard'

const BATCH_SIZE = 24

const Container = () => {
  const [items] = React.useState(shoesCollection)
  const [visibleCount, setVisibleCount] = React.useState(BATCH_SIZE)
  const parentRef = React.useRef(null)

  const loadMore = React.useCallback(() => {
    setVisibleCount((count) =>
      count >= items.length ? count : Math.min(items.length, count + BATCH_SIZE),
    )
  }, [items.length])

  const handleScroll = React.useCallback(() => {
    const el = parentRef.current
    if (!el) return

    const nearBottom =
      el.scrollTop + el.clientHeight >= el.scrollHeight - 200

    if (nearBottom) loadMore()
  }, [loadMore])

  const visibleItems = items.slice(0, visibleCount)

  return (
    <div
      ref={parentRef}
      onScroll={handleScroll}
      className="flex-1 min-h-0 overflow-y-auto border-2 border-black p-4"
    >
      <div className="flex flex-wrap justify-between gap-4">
        {visibleItems.map((item) => (
          <ShoeCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Container
