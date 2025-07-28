import ImageComponent from "../components/ImageComponent";
import NavbarRegular from "../components/NabarRegular"

const AboutUs = () => {

  return (
    <div>
      <NavbarRegular />
      <ImageComponent />

      <section className="bg-gray-100 py-16 px-4 md:px-8 font-inter">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-600 mb-4 text-center">
              About Paradise Golf
            </h1>
            <p className="text-lg text-center text-gray-500 italic mb-8">
              “Your Gateway to the Ultimate Golf Experience”
            </p>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Paradise Golf is a <span className="font-bold">subscription-based</span>subscription-based membership organization and <span className="font-bold">AI powered access platform</span> that provides golfers with discounted access to a curated network of public, semi-private, and premium golf courses. The company functions as an <span className="font-bold">aggregator and loyalty-based membership club</span>, enabling members to enjoy exclusive pricing, complimentary rounds, tournaments, leagues and social golf experiences. Paradise Golf partners directly with golf clubs to deliver tailored marketing and promotional support to drive increased revenue, visibility and utilization at each facility.
              </p>

              <p>
                Paradise Golf’s core business model is a <span className="font-bold">B2C subscription membership combined with B2B partnerships</span> with golf courses. Members pay a recurring fee for access to benefits across the course network, and the company leverages strategic relationships with courses to deliver value to both players and facilities. Technology is used to streamline tee time booking, loyalty tracking, and personalized offers through a centralized mobile platform.
              </p>

              <p>


                Paradise Golf continues to expand its technology capabilities to deliver a seamless digital booking and membership experience, enabling scalable growth across new regions. Additional partnerships include premium-tier memberships, integration with practice facilities, and enhanced data-driven personalization for members and partners.


              </p>

            </div>
          </div>
        </div>
      </section>

    </div>
  )

}

export default AboutUs;
