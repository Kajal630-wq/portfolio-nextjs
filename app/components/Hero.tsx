import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <Image
            src="/images/profile.jpeg"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div> */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Hi, I'm <span className="text-blue-600">Kajal Kushwaha</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Full Stack Developer | Next.js | UI Enthusiast
        </p>
        <a
          href="#contact"
          className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition shadow-md"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}