const LoginCard = () => {
  return (
    <div className="border-black-50 flex flex-col bg-white p-8 rounded-md ">
      <label className="block text-sm font-small leading-6 text-gray-900">
        Email Address
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300
 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="johndoe@gmail.com"
        />
      </div>
      <label className="block text-sm font-small leading-6 text-gray-900">
        Password
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center"></div>
        <input
          type="password"
          name="password"
          id="price"
          className="block w-full rounded-md border-0 py-1.5 pl-3  pr-20 text-gray-900 ring-1 ring-inset ring-gray-300
 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="johndoe@gmail.com"
        />
      </div>
      <a href="/forgot-password" className="text-[var(--primary-color)] py-4">
        Forgot password?{" "}
      </a>
      <button className="btn button px-24 py-2 text-white rounded-md  bg-[var(--primary-color)] font-medium">
        Sign In
      </button>
    </div>
  );
};

export default LoginCard;
