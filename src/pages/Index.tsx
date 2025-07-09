import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <div className="flex items-center">
          <Icon name="Apple" size={24} className="text-[#1d1d1f]" />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-[#1d1d1f] text-sm hover:text-[#007aff] transition-colors"
          >
            Products
          </a>
          <a
            href="#"
            className="text-[#1d1d1f] text-sm hover:text-[#007aff] transition-colors"
          >
            Prices
          </a>
          <a
            href="#"
            className="text-[#1d1d1f] text-sm hover:text-[#007aff] transition-colors"
          >
            Overview
          </a>
          <a
            href="#"
            className="text-[#1d1d1f] text-sm hover:text-[#007aff] transition-colors"
          >
            Contacts
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-6xl font-bold text-[#1d1d1f] leading-tight">
              Air
              <br />
              Pods
              <br />
              Max
            </h1>
            <p className="text-[#86868b] text-lg max-w-md">
              "AirPods are the most popular headphones in the world, beloved for
              their effortless setup, incredible audio quality, and iconic
              design" — said Greg Joswiak
            </p>
            <Button className="bg-[#007aff] hover:bg-[#0056d6] text-white px-8 py-3 rounded-full">
              Read More
            </Button>
          </div>
          <div className="flex justify-center">
            <img
              src="/img/baf1ff8b-8316-4ad0-8d16-40a62cb0b06d.jpg"
              alt="AirPods Max"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Sounds like an epiphany Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <img
              src="/img/94b6e395-c2eb-4ea4-a603-84ce9e86e645.jpg"
              alt="Woman listening to music"
              className="max-w-full h-auto rounded-2xl"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-5xl font-bold text-[#1d1d1f] leading-tight">
              Sounds like
              <br />
              an epiphany
            </h2>
            <p className="text-[#86868b] text-lg">
              Industry-leading Active Noise Cancellation counters external sound
              with equal anti-noise, allowing you to immerse yourself in what
              you're listening to.
            </p>
            <p className="text-[#86868b] text-lg">
              Press the noise control button to switch to Transparency mode,
              which lets outside sound mix with your music so you can interact
              naturally with your surroundings.
            </p>
            <Button
              variant="outline"
              className="border-[#86868b] text-[#1d1d1f] px-8 py-3 rounded-full hover:bg-[#f5f5f7]"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Magical experience Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-[#1d1d1f] leading-tight">
              Magical
              <br />
              experience
            </h2>
            <p className="text-[#86868b] text-lg">
              AirPods Max smart all of the wireless, effortless magic of AirPods
              in a breakthrough form factor. From setup to the AirPods, they
              make the listening experience effortless every day. All you need
              to do is build your day-to-day device to device.
            </p>
            <Button className="bg-[#007aff] hover:bg-[#0056d6] text-white px-8 py-3 rounded-full">
              Read More
            </Button>
          </div>
          <div className="flex justify-center">
            <img
              src="/img/c25c8aa5-2b63-4e4c-9880-3d95aafe43d8.jpg"
              alt="AirPods Max technical view"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
