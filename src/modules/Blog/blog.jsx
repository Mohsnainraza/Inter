'use client'

const Blog = () => {
  return (
    <>
      <div className="flex flex-row items-center sm:justify-center">
        <div className=" text-[#000000] ml-[1.5rem] sm:w-[40rem]">
          <h3 className=" text-[#000] bg-[#fff] rounded-2xl px-2.5 py-1 mt-10 w-[10rem] h-[30px] text-[13px] sm:w-[13rem] sm:text-[15px] sm:h-[32px]">
            Information Technology
          </h3>
          <h2 className="text-[1.3rem] sm:text-[1.7rem] md:text-[2.5rem] 2xl: font-extrabold w-full sm: mt-[rem] ">
            When is the best day to & time to host a webinar
          </h2>
          <div className="pt-[1rem] items-left flex flex-row text-[#6B6B6B]">
            {/* <img src="/icon/calendar-range.svg" className="w-5 h-5 "/> */}
            <h3 className=" text-[0.8rem] sm:text-[1rem]  rounded-full text-center w-max px-3">
              28 November 2023 |
            </h3>
            <div className="pt-[0.rem] items-left flex flex-row">
              <img src="/person.svg" className="w-5 h-5" />
              <h3 className=" text-[0.8rem] sm:text-[1rem]  rounded-full text-center w-max px-3">
                28 November 2023
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div
        className="min-h-[28rem] pb-[2rem] sm: w-[90%] mx-auto sm:w-[80%] rounded-2xl mt-[6rem] bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(/blog.jpg)`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="flex justify-center items-center mt-10 ml-5 mr-7">
        <div className="flex flex-col w-[40rem]">
          <h2 className="text-[2.2rem] font-bold mb-8">Introduction</h2>
          <div className="text-[#6B6B6B]">
            <p className="pb-7">
              An interesting and participatory approach to convey knowledge to
              your audience is through webinars. It might be challenging to
              determine the ideal day and time to hold your webinar, though,
              with so many alternatives available.
            </p>
            <p className="pb-7">
              In this article, we'll go over some things to take into account
              when deciding on a day and time for your webinar as well as some
              suggestions for advertising it beforehand. You ought to know more
              about how to pick the ideal day and time to hold your webinar at
              the conclusion of this article.
            </p>
            <p className="pb-9">
              The size of your audience, the sort of information you will be
              delivering, and any other circumstances that may affect the
              availability of potential attendees should all be considered
              before choosing a day and time for your webinar. Consider cultural
              preferences and time zone variances, for instance, if you are
              aiming for an international audience. Additionally, it may be
              advantageous to choose a day and time when people working in that
              field have some free time available if you are presenting a
              webinar centered on a certain business or topic matter, such as
              finance or healthcare.
            </p>
          </div>
          <h2 className="text-[1.8rem] font-bold mb-8">
            The Benefits of Hosting a Webinar
          </h2>
          <div className="text-[#6B6B6B]">
            <p className="pb-7">
              Webinars are a terrific way to generate leads, build your brand,
              and establish thought leadership in your industry. But with so
              many options for when to host a webinar, it can be tough to decide
              which day and time is best for your audience.
            </p>
            <p className="pb-7">
              Here are a few things to consider when choosing the day and time
              for your next webinar:
            </p>
            <li className="list-decimal">
              What days and times are most convenient for your target
              audience?
            </li>
            <li className="list-decimal">
              What days and times will allow you to get the most attendees?
            </li>
            <li className="list-decimal">What is the time zone of your target audience?</li>
            <li className="list-decimal">
              What other events or commitments do you have that could
              conflict with hosting a webinar?
            </li>
            <li className="pb-16 list-decimal">
              Are there any holidays or special days that could affect
              attendance?
            </li>
          </div>
          <div className="text-[#6B6B6B] mb-20">
            <img src="/blogs.jpg" className="rounded-2xl mb-10" />
            <h2 className="text-[1.8rem] font-bold mb-8 text-[#000]">
              Conclusion
            </h2>
            <p className="pb-5">
              Hosting a webinar can be a great way to engage your audience and
              generate leads. By understanding the factors that go into finding
              the best day and time for hosting a webinar, you will be able to
              maximize your chances of success. Consider research on when people
              are most likely to attend, pick days where there is little
              competition from other events or holidays, choose times that suit
              different time zones of attendees, and test out different days and
              times before airing your webinar live. With these tips in mind,
              you will be sure to find the perfect day and time for your ne
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;