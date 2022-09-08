const Space = (props) => {

  const {heightDesktop, heightTablet = null, heightMobile} = props;

  return (
    <>

      <style jsx>{`

        .space{
          height: ${heightMobile}px;
        }

        @media(min-width: 744px){
          .space{
            height: ${ heightTablet ?? heightDesktop }px;
          }
        }

        @media(min-width: 1024px){
          .space{
            height: ${heightDesktop}px;
          }
        }

        @media(min-width: 1921px){
          .space{
            height: ${(heightDesktop/1921)*100}vw;
          }
        }


      `}</style>

      <div className="space"></div>

    </>
  );
}

export default Space;
