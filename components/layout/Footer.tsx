import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className=" fixed w-screen bottom-0">
      <div className="bg-emerald-600 h-5"></div>
      <div className="bg-[rgb(34,34,34)] text-gray-300 text-xs py-5">
        <div
          className="flex flex-col lg:flex-row pb-10 justify-around 
        lg:w-screen sm:w-[70%] m-auto w-[90%]"
        >
          <div className="lg:w-1/3 ">
            <Image
              src="/assets/icons/vector-footer.png"
              width={25}
              height={25}
              alt="Footer Logo"
            />
            <p className="mt-5 leading-5 ">
              ALX is a platform where travelers can discover and book unique,
              comfortable, and affordable lodging options worldwide. From cozy
              city apartments and tranquil countryside retreats to exotic
              beachside villas, ALX connects you with the perfect place to stay
              for any trip.
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-around md:justify-between mt-10 lg:mt-0 flex-wrap md:flex-nowrap">
            <div>
              <h4 className="text-base text-gray-100 pb-5">Explore</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/">Apartments in Dubai</Link>
                </li>
                <li>
                  <Link href="/">Hotels in New York</Link>
                </li>
                <li>
                  <Link href="/">Villa in Spain</Link>
                </li>
                <li>
                  <Link href="/">Mansion in Indonesia</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base text-gray-100 pb-5">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/">About us</Link>
                </li>
                <li>
                  <Link href="/">Blog</Link>
                </li>
                <li>
                  <Link href="/">Career</Link>
                </li>
                <li>
                  <Link href="/">Customers</Link>
                </li>
                <li>
                  <Link href="/">Brand</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base text-gray-100 pb-5">Help</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/">Support</Link>
                </li>
                <li>
                  <Link href="/">Cancel Booking</Link>
                </li>
                <li>
                  <Link href="/">Refund process</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row pt-3 justify-between items-center border-t border-gray-700 mx-10">
          <div className="mb-10 lg:mb-0">
            <p>
              Some hotel reqires you to cancel more than 24 hours before
              check-in. Details{" "}
              <button className="text-emerald-600">here</button>
            </p>
          </div>

          <ul className="flex space-x-5 pb-5 md:pb-0">
            <li>
              <Link href="/">Terms of Service</Link>
            </li>
            <li>
              <Link href="/">Policy service</Link>
            </li>
            <li>
              <Link href="/">Cookies Policy</Link>
            </li>
            <li>
              <Link href="/">Partners</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
