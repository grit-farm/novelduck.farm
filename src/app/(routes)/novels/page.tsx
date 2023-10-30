import supabase from '@/lib/utils/supabase'
import Novel from '@/lib/types/Novel'
import Custom500 from '../error/500'
import ClientPage from './page.client'

const ServerPage = async () => {
  const { data: novelList } = await supabase
    .from('novel')
    .select()
    .order('created_at', { ascending: false })

  try {
    return <ClientPage novelList={novelList as Novel[]} />
  } catch (e) {
    return <Custom500 />
  }
}

export const revalidate = 0
export default ServerPage