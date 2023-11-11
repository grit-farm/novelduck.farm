'use client'

import dayjs from 'dayjs'
import Link from 'next-intl/link'
import Novel from '@/lib/types/Novel'

interface Props {
  novel: Novel
}

function AdminNovelItem({ novel }: Props) {
  return (
    <tr className="border-b bg-white hover:bg-gray-50">
      <th
        scope="row"
        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
      >
        <Link
          className="hover:text-yellow-400"
          href={`/admin/novels/${novel.id}`}
        >
          {novel.title}
        </Link>
      </th>
      <td className="px-6 py-4">
        {dayjs(novel.created_at).format('YYYY-MM-DD')}
      </td>
    </tr>
  )
}

export default AdminNovelItem