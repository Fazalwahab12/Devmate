import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export default function Testimonial() {
  const testimonials = [
    {
      name: "David R",
      image:
        "https://images.unsplash.com/photo-1521225099409-8e1efc95321d?ixlib=rb-1.2.1&auto=format&fit=crop&h=153&q=80",
      stars: [1, 2, 3, 4, 5],
      text: "Devmate solution took our outdated website and turned it into a modern marvel. Their attention to detail and commitment to delivering on time were impressive. Thanks to their expertise, our online traffic and conversions have soared.",
    },
    {
      name: "Emily S.",
      image:
        "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      stars: [1, 2, 3, 4, 5],
      text: "I can't thank Devmate solution enough for their exceptional work on our website. They listened to our needs and translated them into a visually stunning, user-friendly site, exceeding our expectations in every way possible. ",
    },
    {
      name: "Michael ",
      image:
        "https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      stars: [1, 2, 3, 4, 5],
      text: "Choosing Devmate solution for our website redesign was the best decision we made. Their team's professionalism and dedication shone through from start to finish. Our new site not only meets but exceeds our expectations.",
    },
    {
      name: "Amanda K",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
      stars: [1, 2, 3, 4, 5],
      text: "I'm beyond impressed with the website Devmate solution created for us. They perfectly captured our brand identity and delivered a site that's both beautiful and functional. Their team's expertise and responsiveness ",
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <Swiper
          className="testi owl-carousel owl-theme row"
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="item">
                <div className="profile">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div className="information">
                    <div className="stars">
                      {testimonial.stars.map((star, i) => (
                        <i key={i} className="fa fa-star"></i>
                      ))}
                    </div>
                    <p>{testimonial.name}</p>
                  </div>
                </div>
                <p>{testimonial.text}</p>
                <div className="icon">
                  <i className="fa fa-quote-right" aria-hidden="true"></i>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
