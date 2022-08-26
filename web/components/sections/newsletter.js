import Image from "next/image"

export default function Newsletter(props) {

  const {title, description, placeholder} = props;

  return (

    <section className='px-4 md:px-0 md:max-w-[93.3%] w-full mx-auto flex flex-col'>

      <h2
        className='opacity-80 text-center uppercase text-base lg:text-lg vw:text-[1.25vw] leading-[18px] lg:leading-[21px] vw:leading-[1.1666vw]
        font-medium tracking-[.05em] mb-6 vw:mb-[1.666vw]'
      >
        {title}
      </h2>

      <p className='font-light tracking-[.05em] text-center text-[24px] lg:text-[32px] vw:text-[2.222vw] leading-[1.2] opacity-80 mb-9 md:mb-10 vw:mb-[2.777vw] md:max-w-[500px] lg:max-w-[660px] vw:max-w-[45.83vw] md:mx-auto'>
        {description}
      </p>

      <form action="" className='w-full flex flex-col'>

        <fieldset className='flex items-center space-x-5 justify-between w-full border-2 vw:border-[.13888vw] border-[rgba(205,_205,_205,_0.2)] py-3 vw:py-[.8333vw] px-4 lg:pl-6 vw:pl-[1.666vw] lg:pr-[14px] vw:pr-[.9722vw] md:max-w-[343px] lg:max-w-[546px] vw:max-w-[37.91666vw] md:mx-auto'>

          <input
            type="text"
            placeholder={placeholder}
            className="outline-none w-full font-light text-base bg-transparent lg:text-lg vw:text-[1.25vw] leading-[1.5] opacity-80 placeholder:opacity-80 placeholder:text-white"
          />

          <button type="submit" className="w-[26px] vw:w-[1.805vw]">
            <Image
              src="/images/footerArrow.svg"
              alt="White arrow"
              width={26}
              height={19}
              layout="responsive"
            />
          </button>

        </fieldset>        

      </form>

    </section>

  )

}
