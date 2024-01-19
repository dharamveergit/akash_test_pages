import { useSwiperSlide } from "swiper/react";

interface IFProps {
  userName?: string;
  testimonial?: string;
  userAvatar?: string;
}

const TestimonialCard = ({ userName, testimonial, userAvatar }: IFProps) => {
  const swiperSlide = useSwiperSlide();

  return (
    <div
      className={`${
        swiperSlide.isActive && "relative"
      } mt-20 flex flex-col justify-start space-y-4 self-center rounded-2xl border border-paraDark bg-background2 p-5`}
    >
      <p
        className={`text-base ${
          swiperSlide.isActive ? "line-clamp-6" : "line-clamp-3"
        }`}
      >
        {testimonial}
      </p>

      <div className="flex items-center">
        <div>
          <img src={userAvatar} alt="Avatar" width="44" height="44" />
        </div>
        <h2 className="ml-2 font-bold md:ml-3 md:text-xl">{userName}</h2>
      </div>
    </div>
  );
};

export default TestimonialCard;
