const Testimonial = [
  [
    {
      id: 1,
      img: "assets/img/avatar/am.jpg",
      ratings: "(4.8/5)",
      title: "Exceeded Expectations!",
      description:
        "Our experience with this real estate company was outstanding. They guided us every step of the way and helped us find our dream home in Dubai. Highly recommend!",
      name: "Ali Khan",
      mention: "@alikhan",
      icon: "",
    },
    {
      id: 2,
      img: "assets/img/avatar/rw.jpg",
      ratings: "(4.8/5)",
      title: "Impressive Service!",
      description:
        "We were impressed by the professionalism and dedication of the team. They understood our requirements perfectly and found us a perfect property. Thank you!",
      name: "Natalia Ivanova",
      mention: "@nivanova",
      icon: "",
    },
    {
      id: 3,
      img: "assets/img/avatar/arb.jpg",
      ratings: "(4.8/5)",
      title: "Exceptional Assistance!",
      description:
        "Working with this company was a pleasure. They provided exceptional assistance throughout the process and helped us secure our ideal investment property.",
      name: "Ahmed Mahmoud",
      mention: "@ahmedmahmoud",
      icon: "",
    },
    {
      id: 4,
      img: "assets/img/avatar/arw.jpg",
      ratings: "(4.8/5)",
      title: "Highly Recommend!",
      description:
        "I highly recommend this real estate firm. Their expertise and knowledge of the Dubai market are unmatched. They made the buying process smooth and hassle-free.",
      name: "Olga Petrovna",
      mention: "@olgapetrovna",
      icon: "",
    },
  ],
];

const Testimonial1 = () => {
  return (
    <div className="py-5 border-top position-relative">
      <div className="container py-4 position-relative">
        <div className="row">
          <div
            className="col-md-10 offset-md-1 background-image"
            data-image-src="assets/img/world-map.png"
          >
            {/* Start Section Header Title */}
            <div
              className="section-header text-center mb-5"
              data-aos="fade-down"
            >
              {/* Start Subtitle */}
              <div className="bg-[#DAB852] d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-gray-900">
                <span className={roboto.className}>Testimonial</span>
              </div>
              {/* /. End Subtitle */}
              {/* Start Section Header title */}
              <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                <span>
                  Hear From Cresco <br />
                  Real Estate’s Satisfied Customers
                </span>
              </h2>
              {/* /.End Section Header Title */}
              {/* Start Section Header Sub Title */}
              <div className="sub-title fs-16">
                <span className={roboto.className}>
                  Read our client testimonials to gain insight into the <br />
                  exceptional service and unparalleled expertise that sets us
                  <br />
                  apart in the Dubai real estate market
                </span>
              </div>
              {/* /.End Section Header Sub Title */}
              {/* Start Ratings */}
              <div className="align-items-center d-flex flex-wrap fs-18 gap-1 justify-content-center mt-3 text-gray-900">
                {/* <i className="fa-solid fa-circle-half-stroke" /> */}
                <span className="text-dark">(4.8/5)</span>
              </div>
              {/* /. End Ratings */}
              <h6 className="text-center mb-0 mt-2 fs-17">
                <span className={roboto.className}>
                  {" "}
                  Overall Client Ratings
                </span>
              </h6>
            </div>
            {/*/. End Section Header */}
          </div>
        </div>
        <div className="row testimonial-wrap">
          {Testimonial?.map((testimonial) => {
            const aosDelay = 300 + parseInt(testimonial.id) * 100;
            return (
              <div
                className="col-sm-6 col-lg-3 mb-4 align-self-end"
                key={testimonial.id}
              >
                {/* Start Testimonial Card */}
                <div
                  className="border-0 card rounded-4 shadow"
                  data-aos="fade"
                  data-aos-delay={aosDelay}
                >
                  <div className="card-body p-4 p-xxl-5">
                    <div className="text-gray-900 align-items-center d-flex flex-wrap fs-12 gap-1 mb-2">
                      {/* Start Ratings */}
                      <i className="fa-solid fa-circle" />
                      <i className="fa-solid fa-circle" />
                      <i className="fa-solid fa-circle" />
                      <i className="fa-solid fa-circle" />
                      <i className="fa-solid fa-circle" />

                      {/* /. End Ratings */}
                      {/* Start Counter Text */}
                      <span className="fw-medium text-dark">
                        {testimonial.ratings}
                      </span>
                      {/* /. End Counter Text */}
                    </div>
                    <h5 className="fs-18">
                      <span>{testimonial.title}</span>{" "}
                    </h5>
                    <p className={roboto.className}>
                      {testimonial.description}
                    </p>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img
                          src={testimonial.img}
                          alt=""
                          className="rounded-full mt-2"
                          height={30}
                          width={30}
                        />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h6 className="mb-1 fw-semibold">
                          <span>{testimonial.name}</span>
                        </h6>
                        <div className="fs-15 text-gray-500">
                          <span className={roboto.className}>
                            {testimonial.mention}
                          </span>
                        </div>
                      </div>
                      <i className="fa-brands fa-twitter fs-4 text-gray-900" />
                    </div>
                  </div>
                </div>
                {/* /. End Testimonial Card */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial1;
