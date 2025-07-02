import React from "react"

const features = [
  {
    id: 1,
    title: "24/7 Support",
    description:
      "We stand by you always in all simple as well as in critical issues. Our professionals will involve and strive to clear all your back-end issues along guiding you with technical aspects and maintenance.",
  },
  {
    id: 2,
    title: "Well built enterprise",
    description:
      "Sixth Star is functioning since 2007, we have skillful and experienced team successfully completed 1500+ projects, leads to tremendous development in the Indian webhosting industry.",
  },
  {
    id: 3,
    title: "Unique process",
    description:
      "For each project assigned our team frameworks unique methods that are thoroughly researched to give profitable income for a long run. We process through leading market strategies.",
  },
  {
    id: 4,
    title: "Teamwork",
    description:
      "We believe teamwork is the key to success. Hence if any project is assigned our professionals indulge in work by hearing your ideas and research to integrate in-standard technique for better success.",
  },
]

const WhyChooseUs = () => {
  return (
    <section className="py-10 px-4 bg-blue-50 relative overflow-hidden ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold font-sans text-center mb-16 text-navy font-sans">
          Why Choose Us
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side features */}
          <div className="w-full md:w-2/5">
            <div className="space-y-12">
              <div className="max-w-md">
                <h3 className="text-xl font-bold mb-3 font-sans text-navy">
                  {features[0].title}
                </h3>
                <p className="text-gray-600  text-sm font-sans">
                  {features[0].description}
                </p>
              </div>

              <div className="max-w-md">
                <h3 className="text-xl font-bold mb-3 text-navy font-sans">
                  {features[2].title}
                </h3>
                <p className="text-gray-600 text-sm font-sans">
                  {features[2].description}
                </p>
              </div>
            </div>
          </div>

          {/* Center image */}
          <div className="w-full md:w-1/5 my-8 md:my-0 flex justify-center">
            <div className="relative w-64 h-80 rounded-xl overflow-hidden border-4 border-white shadow-xl">
              <img
                src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747284287/Untitled_design_xe8llw.gif"
                alt="Technical Expert"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  const target = e.target
                  target.src = "/placeholder.svg"
                }}
              />
            </div>
          </div>

          {/* Right side features */}
          <div className="w-full md:w-2/5 mt-8 md:mt-0">
            <div className="space-y-12">
              <div className="max-w-md ml-auto">
                <h3 className="text-xl font-sans font-bold mb-3 text-navy">
                  {features[1].title}
                </h3>
                <p className="text-gray-600 text-sm font-sans">
                  {features[1].description}
                </p>
              </div>

              <div className="max-w-md ml-auto">
                <h3 className="text-xl font-bold mb-3 text-navy font-sans">
                  {features[3].title}
                </h3>
                <p className="text-gray-600 text-sm font-sans">
                  {features[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Connect with experts section */}
                




      </div>
    </section>
  )
}

export default WhyChooseUs
