const CustomerCards = ({ review }) => {
  const { profile, username, intro, msg, rating } = review;

  return (
    <article className="customer-card w-90 rounded-2xl bg-[#f3e4d8] p-10 shadow-sm transition-transform duration-300 hover:scale-105">
      {/* Customer Info */}
      <div className="flex items-center gap-10  ">
        <div className="flex items-center gap-2">
          <img
            src={profile}
            alt={`${username} profile`}
            className="h-10 w-10 rounded-full object-cover"
          />

          <div className="flex flex-col items-start justify-center ">
            <h3 className="text-sm font-medium">{username}</h3>

            <p className="text-xs text-gray-600">{intro}</p>
          </div>
        </div>

        <div className="flex items-center  gap-2 my-3">
          <div
            className="text-yellow-500 text-2xl"
            aria-label={`${rating} out of 5 stars`}
          >
            {"★".repeat(rating)}
            <span className="text-gray-400">{"☆".repeat(5 - rating)}</span>
          </div>

          {/* <span className="text-sm">
                {rating}/5
              </span> */}
        </div>
      </div>

      {/* Review */}
      <p className="customer-message mt-4 text-xs leading-5 text-gray-700">
        {msg}
      </p>
    </article>
  );
};

export default CustomerCards;
