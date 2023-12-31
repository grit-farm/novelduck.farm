import { getPagination } from '@/lib/utils/helper'
import {
  getCategoryList,
  getNovelListAndCount,
} from '@/lib/utils/supabase-query'
import ScreenContainer from '@/components/ui/screen-container'
import NovelFilter from '@/components/feature/novels/novel-filter'
import BrowserList from '@/components/feature/novels/browser-list'

interface Props {
  params: {
    locale: string
  }
  searchParams: {
    page: string
  }
}

const ServerPage = async ({
  params: { locale },
  searchParams: { page },
}: Props) => {
  const { from, to } = getPagination(parseInt(page, 10), 20)
  const { novelList, count } = await getNovelListAndCount(locale, from, to)
  const categoryList = await getCategoryList()

  return (
    <ScreenContainer>
      <section className="mt-8">
        <article className="mx-auto max-w-7xl px-2">
          {/*<h3>t('novel_page_title')</h3>*/}
          <NovelFilter categoryList={categoryList} />
          <BrowserList
            novelCount={count}
            novelList={novelList}
            novelFilter={''}
          />
        </article>
      </section>
    </ScreenContainer>
  )
}
export default ServerPage
