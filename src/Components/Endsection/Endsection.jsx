import CustomerCards from "./CustomerCards";
import { reviews } from "../../data/data";

const EndSection = () => {
  return (
    <section className="end-section font-poppins">
      {/* Customer Reviews */}
      <section className="reviews-section px-6 py-16">
        <div className="mb-10 text-center ">
          <p className="lg:text-4xl text-2xl font-medium font-lobster-two  italic leading-15">Come & Join</p>

          <h2 className="lg:text-4xl text-3xl font-semibold">
            Our Happy Customers
          </h2>
        </div>

        <div className="reviews-list flex items-center justify-center gap-10 flex-wrap ">
          {reviews.map((review) => (
            <CustomerCards
              key={review.id}
              review={review}
            />
          ))}
        </div>

        {/* Review Navigation */}
        <div className="review-pagination mt-10 flex w-full items-center justify-center gap-3">
          <button
            type="button"
            className="h-3 w-3 rounded-full bg-gray-900"
            aria-label="Show review group 1"
          />

          <button
            type="button"
            className="h-3 w-3 rounded-full bg-gray-200"
            aria-label="Show review group 2"
          />

          <button
            type="button"
            className="h-3 w-3 rounded-full bg-gray-200"
            aria-label="Show review group 3"
          />
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section flex w-full flex-col items-center justify-center bg-[#F2D4BC] px-6 py-12 text-center">
        <h2 className=" offer text-4xl font-semibold leading-tight ">
          Join In And Get 15% Off!
        </h2>

        <p className="mt-3 lg:text-xl text-sm font-medium">
          Subscribe to our Newsletter and get 15% off discount code
        </p>

        <form className="newsletter-form mt-6 flex items-center justify-center gap-3">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>

          <input
            id="newsletter-email"
            name="email"
            type="email"
            placeholder="Email Address"
            autoComplete="email"
            required
            className="lg:w-90 w-60  rounded-full bg-orange-50 px-4 py-2 font-medium text-black outline-none"
          />

          <button
            type="submit"
            className="rounded-full bg-amber-950 lg:px-10 px-4 py-2 font-medium text-white transition-transform duration-200 hover:scale-105"onClick={()=>{
              alert("Subscribed")
            }}
          >
            Subscribe
          </button>
        </form>
      </section>
    </section>
  );
};

export default EndSection;