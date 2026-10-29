const Cards = ({ product, imageFit="contain" }) => {
  
 
 const name = product.name ?? product.title;
 const info = product.info ?? product.description;
 const image = product.image ?? product.images ??product.thumbnail;
 const { price } = product;

  return (
    <article className="product-card min-w-70   p-2 rounded-2xl flex-wrap   bg-stone-200 shadow-md">
      {/* Product Image */}
      <div className="product-image  shrink-0 h-60 overflow-hidden group">
        <img
          src={image}
          alt={name}
          className={`h-full w-full p-2  rounded-2xl  transition-transform duration-300 hover:scale-105 ${
            imageFit === "cover"
              ? "object-cover"
             
              : "object-contain"
          }`}
        />
      </div>

      {/* Product Information */}
      <div className="product-content px-4 py-3 text-left">
        <h3 className="product-name font-semibold leading-8">
          {name}
        </h3>

        <p className="product-info text-xs leading-4 text-gray-600">
          {info}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <p className="product-price font-semibold">
            Rs.{price}
          </p>

          <button
            type="button"
            className="product-button rounded-xl bg-amber-950 px-3 py-2 text-sm font-medium text-white transition-transform duration-200 hover:scale-105 cursor-pointer"onClick={()=>{
              alert("order placed")
            }}
          >
            Order Now
          </button>
        </div>
      </div>
    </article>
  );
};

export default Cards;