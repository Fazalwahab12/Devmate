import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
const Team = () => {
  const teamData = [
    {
      src: "assets/images/5-d04c4f5195b4c31b613376c8800cb830.jpg",
      alt: "Philip Hansen",
      facebook: "facebook-link",
      twitter: "twitter-link",
      linkedin: "linkedin-link",
      link: "learn-more-link",
      name: "Philip Hansen",
      position: "Co Founder",
    },
    {
      src: "assets/images/5-d04c4f5195b4c31b613376c8800cb830.jpg",
      alt: "Herman Fisher",
      facebook: "facebook-link",
      twitter: "twitter-link",
      linkedin: "linkedin-link",
      link: "learn-more-link",
      name: "Herman Fisher",
      position: "General Manager",
    },
    {
      src: "assets/images/5-d04c4f5195b4c31b613376c8800cb830.jpg",
      alt: "Charlie Kennedy",
      facebook: "facebook-link",
      twitter: "twitter-link",
      linkedin: "linkedin-link",
      link: "learn-more-link",
      name: "Charlie Kennedy",
      position: "Brand Designer",
    },
    {
      src: "assets/images/5-d04c4f5195b4c31b613376c8800cb830.jpg",
      alt: "Helena Adkins",
      facebook: "facebook-link",
      twitter: "twitter-link",
      linkedin: "linkedin-link",
      link: "learn-more-link",
      name: "Helena Adkins",
      position: "Senior Designer",
    },
  ];

  return (
    <section className="commonSection team">
      <div className="container">
        <div className="row">
          <div className="text-center col-lg-12">
            <h4 className="sub_title">Team DEVMATE</h4>
            <h2 className="sec_title">Meet Our Dynamic Crew</h2>
            <p className="sec_desc">
              Get acquainted with the team driving innovation and delivering
              exceptional results.
            </p>
          </div>
        </div>
      </div>
      <Swiper
        modules={[Pagination, Autoplay, A11y]}
        slidesPerView={4}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {teamData.map((member, index) => (
          <SwiperSlide key={index}>
            <div className=" m-3">
              <div className="">
                <div className=" ">
                  <div className="singleTM">
                    <div className="tm_img">
                      <img src={member.src} alt={member.alt} />
                      <div className="tm_overlay">
                        <div className="team_social">
                          <a href={member.facebook}>
                            <span>Facebook</span>
                          </a>
                          <a href={member.twitter}>
                            <span>Twitter</span>
                          </a>
                          <a href={member.linkedin}>
                            <span>Linkedin</span>
                          </a>
                        </div>
                        <a href={member.link} className="common_btn">
                          <span>learn more</span>
                        </a>
                      </div>
                    </div>
                    <div className="detail_TM">
                      <h5>{member.name}</h5>
                      <h6>{member.position}</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-pagination"
                id="team-carousel-pagination"
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Team;
