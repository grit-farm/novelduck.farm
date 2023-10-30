'use client'

import Novel from '@/lib/types/Novel'
import Link from 'next/link'
import Image from 'next/image'
import Tag from '@/app/_components/atoms/Tag'
import Heading6 from "@/app/_components/atoms/Heading6";
import NoCover from '../../../../../public/images/no_cover.jpeg'

interface Props {
    novel: Novel
}

function NovelCard({novel}: Props) {
    return (
        <Link className="w-64" href={`/viewer/${novel.id}`}>
            <div className="w-full max-w-64 mb-4">
                <Image
                    className="rounded-sm"
                    src={NoCover}
                    alt={novel.title}
                    width={250}
                    height={250}
                />
                <div className="mt-2 truncate">
                    <Heading6 text={novel.title}/>
                </div>
                <Tag text={novel.category}/>
            </div>
        </Link>
    )
}

export default NovelCard