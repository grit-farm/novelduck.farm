'use client'

import Novel from '@/lib/types/Novel'
import NovelCard from '@/components/feature/novels/novel-card'
import Pagination from '@/components/feature/novels/Pagination'

interface Props {
  novelCount: number
  novelList: Novel[]
  novelFilter: string
  isPage?: boolean
}

function BrowserList({
  novelCount,
  novelList,
  novelFilter,
  isPage = true,
}: Props) {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-2 justify-center gap-8 md:grid-cols-5 md:justify-start lg:grid-cols-4 xl:grid-cols-5">
        {novelList.map((novel: Novel) => (
          <NovelCard
            key={novel.id}
            thumbnail={novel.thumbnail}
            id={novel.id}
            title={novel.title}
            category={novel.category_id}
          />
        ))}
      </div>
      {isPage && (
        <Pagination
          novelCount={novelCount}
          novelFilter={novelFilter}
          path="/novels"
        />
      )}
    </div>
  )
}

export default BrowserList
