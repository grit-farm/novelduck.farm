"use client";

import CategoryTag from "@/app/components/CategoryTag";
import Link from "next/link";

interface Props {}

const NovelFilter = ({}: Props) => {
  return (
    <>
      <div className="w-full flex items-center gap-4 pt-1 pb-4">
        <Link href="/novels/category/romance">
          <CategoryTag name="Fantasy" />
        </Link>
        <Link href="/novels/category/fun">
          <CategoryTag name="Fun" />
        </Link>
        <Link href="/novels/category/horror">
          <CategoryTag name="Horror" />
        </Link>
        <Link href="/novels/category/romance">
          <CategoryTag name="Romance" />
        </Link>
        <Link href="/novels/category/sad">
          <CategoryTag name="Sad" />
        </Link>
        <Link href="/novels/category/romance">
          <CategoryTag name="SF" />
        </Link>
      </div>
    </>
  );
};

export default NovelFilter;
