import SanityImage from "./sanity-image";
import Link from "next/link"

export default function NewsCard({news}) {
  
  const {title, slug, image} = news;

  return (

    <div className="w-full flex flex-col">

      <div
      className="mb-4 lg:mb-6 vw:mb-[1.25vw] w-full aspect-h-1
      aspect-w-[1.435] md:aspect-w-[1.469] lg:aspect-w-[1.308] 3xl:aspect-w-[1.78]"
      > 

        <Link  href={`/news/${slug.current}`} passHref>
          <a className="block w-full h-full">
            <div className="relative w-full h-full">
              <SanityImage src={image} layout="fill" />
            </div>
          </a>
        </Link>

      </div>

      <h3
      className="font-extralight md:font-light text-[24px] lg:text-lg vw:text-[.9375vw]
      leading-7 lg:leading-[21px] vw:leading-[1.1666] tracking-[.05em] mb-8 lg:mb-6 vw:mb-[1.25vw] lg:max-w-[452px] vw:max-w-[23.54vw]"
      >
        {title}
      </h3>

      <Link href={`/news/${slug.current}`} passHref>
        <a className="block font-light hover_state_link hover_state_link lg:font-normal text-xs vw:text-[.625vw] leading-[1.1] tracking-[.05em] uppercase">
          View
        </a>
      </Link>

    </div>

  )

}
