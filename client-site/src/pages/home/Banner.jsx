import BannerImage from '../../assets/Banner.png'
import offerImg from '../../assets/offer-top.avif'
import offerImg1 from '../../assets/offer-top1.avif'
import { useAuth } from '../../hooks/useAuth';
const Banner = () => {
  const {name} = useAuth();
  console.log(name);
  return (
    <>
      <section>
      <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <div className="order-2 md:order-1 flex md:flex-col gap-4 md:gap-8 text-center justify-center items-center">
              <img className='w-[150px] md:w-[220px] border-amber-400 border' src={offerImg} alt="offerImg" />
              <img className='w-[150px] md:w-[220px] border-amber-400 border' src={offerImg1} alt="offerImg" />
            </div>
            <div className="order-1 md:order-2">
            <img className='w-full max-h-[550px] object-cover' src={BannerImage} alt="BannerImage" />
            </div>
          </div>
         
        </div>
      </section>
    </>
  );
};

export default Banner;