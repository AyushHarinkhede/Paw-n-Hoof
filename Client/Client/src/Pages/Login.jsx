import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#F6EEDD] flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        
        {/* LEFT IMAGE SECTION */}
        <div className="relative hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
            alt="Pet Rescue"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 p-8 flex flex-col justify-end">
            <span className="text-orange-400 font-semibold text-sm mb-2">
              WELCOME BACK
            </span>
            <h2 className="text-4xl font-bold text-white mb-3">
              Login to PetRescue
            </h2>
            <p className="text-gray-200 max-w-sm">
              Continue your journey of helping rescued pets find a loving home.
            </p>
          </div>
        </div>

        {/* RIGHT LOGIN FORM */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-2xl font-bold text-orange-600 mb-6">
            🐾 PetRescue
          </div>

          <h3 className="text-2xl font-bold mb-2">Sign in to your account</h3>
          <p className="text-gray-500 mb-8">
            Welcome back! Please enter your details.
          </p>

          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-orange-500" />
                Remember me
              </label>
              <a
                href="#"
                className="text-orange-500 hover:underline font-medium"
              >
                Forgot password?
              </a>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold text-lg shadow-md"
            >
              Login →
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-8">
            Don’t have an account?{" "}
            <span className="text-orange-500 font-semibold cursor-pointer hover:underline">
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
