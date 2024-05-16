const products = [
  {
    id: 1,
    name: "Driver Booking",
    href: "#",
    imageSrc: "/car1.jpg",
    imageAlt: "booking.",
    description: "Allows users to book a driver ",
  },
  {
    id: 1,
    name: "Route Optimization",
    href: "#",
    imageSrc: "/mobile.png",
    imageAlt: "Front of men's Basic Tee in black.",
    description: "Allows users to book a driver ",
  },
  {
    id: 1,
    name: "Driver Profiles",
    href: "#",
    imageSrc: "/car4.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    description:
      " Information about drivers including ratings, vehicle details, and reviews.",
  },
  {
    id: 1,
    name: "Notifications",
    href: "#",
    imageSrc: "/car2.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    description:
      "Alerts for booking confirmations, driver arrival, and other important updates. ",
  },

  // More products...
];
const Cards = () => {
  return (
    //    start div contain all divs
    
          <div >
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                  <div key={product.id} className="group relative ">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href={product.href}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 "
                            />
                            {product.name}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
             
        </div>
      </div>
    </div>
  );
};
export default Cards;
