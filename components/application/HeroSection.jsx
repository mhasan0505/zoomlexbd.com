import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-50 to-white py-20 bg-url('/Hero/hero_section.png')">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Image
          src="/Hero/hero_section.png"
          alt="Hero"
          className="w-full h-auto"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Elevate Your
              <span className="block text-tomato-600">Style</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Discover premium men&apos;s fashion at Zoomlex BD. From classic
              shirts to comfortable boxers, we offer quality pieces that define
              modern masculinity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-gray-800 text-white px-8"
              >
                Shop Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-black text-black hover:bg-black hover:text-white px-8"
              >
                View Collection
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">ZBD</span>
                </div>
                <p className="text-gray-600">Premium Men&apos;s Fashion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
