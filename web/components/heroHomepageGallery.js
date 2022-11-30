import BackgroundImage from "./backgroundImage";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";

function HeroHomepageGallery({slides, viewport}) {
  return (
    <div className="w-full h-full">
      <div className="relative w-full h-full">

        {
          slides && (
            <>

              <Swiper
                spaceBetween={24}
                slidesPerView={1}
                pagination={
                  {
                    el: `.swiper-pagination-homepage-${viewport}`,
                    clickable: true,
                  }
                }
                modules={[Pagination]}
                className="w-full h-full"
              >
                {
                  slides.map( slide => {

                    const {_key} = slide;
                    if(!slide) return;

                    return (
                      <SwiperSlide key={_key} className=" w-full h-full relative" >
                        <BackgroundImage className="object-cover w-full h-full relative" layout="fill" {...{...slide,priority:true}} />
                      </SwiperSlide>
                    )

                  })
                }
                
              </Swiper>

              <div className={`swiper-pagination-homepage-${viewport} z-[10] absolute !bottom-2 !right-3 !left-[unset] !max-w-max`}>
              </div>
              
            </>
          )
        }

      </div>

  </div>
  )
}

export default HeroHomepageGallery