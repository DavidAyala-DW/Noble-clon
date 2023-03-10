import Image from "next/image"
import SanityImage from './sanity-image'

export default function CollectionCard({collection, is_coming_soon}) {
  
  const {title, location, image, hover_state_image, link, is_reservation} = collection;

  return (

    <a href={link} className={`relative w-full aspect-w-[1.37] md:aspect-w-[1.324] lg:aspect-w-[1.349] 3xl:aspect-w-[1.859] aspect-h-1  ${hover_state_image && "group"} `}>

      <div className="w-full h-full">
        <div className="w-full h-full relative">
          {image && (
            <div className="h-full transition-all duration-300 ease-[ease-in-out] group-hover:opacity-0 group-hover:invisible block w-full relative">
              <SanityImage className="w-full h-full" src={image} layout={"fill"}/> 
            </div>
          )}

          {
            hover_state_image && (
              <div className="h-full absolute inset-0 transition-all duration-300 ease-[ease-in-out] group-hover:opacity-100 group-hover:visible group-hover:z-[2] opacity-0 invisible w-full">
                <SanityImage className="w-full h-full"  src={hover_state_image} layout={"fill"}/> 
              </div>
            )
          }
        </div>
      </div>

      <div className="absolute z-[3] w-full h-full inset-0 flex flex-col justify-end pb-5 vw:pb-[1.04166vw] pl-4 md:pl-6 vw:pl-[1.25vw] pr-7 md:pr-9 vw:pr-[1.875vw]">

        <div className="flex items-end lg:items-center justify-between">

          <div className="flex flex-col space-y-2 vw:space-y-[.41666vw]">
      
            <h3 className="uppercase tracking-[.05em] text-[20px] lg:text-[24px] vw:text-[1.25vw] leading-[23px] lg:leading-[28px] vw:leading-[1.166] font-medium">
              {title}
            </h3>

            <p className="opacity-80 max-w-[260px] lg:max-w-full text-lg vw:text-[.9375vw] leading-[21px] vw:leading-[1.166] font-medium">
              {location}
            </p>
            
          </div>

          <div className="flex items-center gap-4">

            {
              is_reservation && (
                <p  className="text-sm font-light leading-[1.5] text-white hover_state_link">
                  Reserve
                </p>
              )
            }

            <div className="block w-[11px] vw:w-[.5729vw]">
              <Image
                src="/images/whiteRightArrow.svg"
                alt="white arrow"
                width={11}
                height={19}
                layout="responsive"
              />
            </div>

          </div>

        </div>

      </div>

      {
        is_coming_soon && (
          <div className="absolute inset-0 w-full h-full z-[2] bg-black bg-opacity-60">
          </div>
        )
      }
      
    </a>

  )

}
