import { Button } from "@/components/ui/button";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div>
      <div className="bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
        <div>
          <Image
            className="mx-auto mb-4"
            width={100}
            height={100}
            src="/zoomlex_logo.jpg"
            alt="logo"
          />
        </div>
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Log in to your account
        </h2>
        <form>
          <input
            id="email"
            className="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
            type="email"
            placeholder="Enter your email"
            required
          />
          <input
            id="password"
            className="w-full bg-transparent border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
            type="password"
            placeholder="Enter your password"
            required
          />
          <div className="text-right py-4">
            <a className="text-blue-600 underline" href="#">
              Forgot Password
            </a>
          </div>
          <Button
            type="submit"
            className="w-full mb-3 bg-black py-2.5 rounded-full text-white"
          >
            Log in
          </Button>
        </form>
        <p className="text-center mt-4">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-500 underline">
            Signup
          </a>
        </p>

        <Button
          type="button"
          className="w-full flex items-center gap-2 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800"
        >
          <Image
            className="h-4 w-4"
            width={20}
            height={20}
            src="/Icons/googleicon.png"
            alt="googleFavicon"
          />
          Log in with Google
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
