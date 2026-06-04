import Image from "next/image";
import {
    Code2,
    Server,
    Database,
    Smartphone,
    Wrench,
    Globe,
    Layout
} from "lucide-react";
// Category icons mapping
const getCategoryIcon = (category: string) => {
    const icons: Record<string, React.ReactNode> = {
        Frontend: <Layout className="w-6 h-6 text-blue-500" />,
        Backend: <Server className="w-6 h-6 text-green-500" />,
        Database: <Database className="w-6 h-6 text-purple-500" />,
        Mobile: <Smartphone className="w-6 h-6 text-orange-500" />,
        Tools: <Wrench className="w-6 h-6 text-gray-500" />
    };
    return icons[category] || <Code2 className="w-6 h-6 text-gray-500" />;
};

export default function About() {
    return (
        <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                    About Me
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left side - Professional Image with Animated Border */}
                    <div className="relative flex justify-center ">
                        <div className="relative w-100 h-100 md:w-100 md:h-100 rounded-full  shadow-2xl">
                            {/* Animated gradient border - Top to Bottom */}
                            <div className="absolute -inset-1 rounded-full  from-yellow-400 via-orange-500 to-amber-600 animate-gradient-y"></div>

                            {/* Image container with padding for border effect */}
                            <div className="relative  h-full rounded-full overflow-hidden p-1">
                                <img
                                    src="/images/about.png"
                                    alt="Professional portrait"
                                    className="object-fill"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right side - Bio */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                            Who am I?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                            I'm a passionate Web Developer with over 2 years of experience in building modern, scalable, and user-friendly
                            web applications. I specialize in React.js, Laravel, JavaScript, and RESTful API integration, with hands-on
                            experience in both frontend and backend development.
                            {/* I'm a passionate Full Stack Developer with {new Date().getFullYear() - 2021}+ years of experience
       in building modern web applications. I specialize in Next.js, React, and Node.js ecosystem. */}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                            My journey in web development started with HTML, CSS, and JavaScript, and over time I expanded my expertise to include React.js, Laravel, PHP, MySQL, Bootstrap, Tailwind CSS, and Flutter. I enjoy transforming ideas into functional digital solutions and continuously learning new technologies to stay updated with industry trends.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            Currently, I work on developing CRM systems, dynamic dashboards, verification APIs, and custom web applications. I am passionate about writing clean code, solving complex problems, and creating seamless user experiences.
                            When I'm not coding, I enjoy exploring new technologies, improving my development skills, and helping others learn web development.
                        </p>

                        {/* Quick info / skills summary */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">📍 Location</p>
                                <p className="text-gray-800 dark:text-gray-200 font-medium">India / Remote</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">🎓 Education</p>
                                <p className="text-gray-800 dark:text-gray-200 font-medium">Bachelor of Computer Applications (BCA)</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">💼 Experience</p>
                                <p className="text-gray-800 dark:text-gray-200 font-medium">2+ Years</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">🚀 Projects</p>
                                <p className="text-gray-800 dark:text-gray-200 font-medium">15+ Completed</p>
                            </div>
                        </div>

                        {/* Resume/CV button */}
                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-lg hover:from-yellow-600 hover:to-orange-700 transition shadow-md"
                        >
                            Download Resume
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Skills section */}
                {/* Skills section */}
                <div className="mt-16">
                    <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
                        Tech Stack & Tools
                    </h3>

                    {/* Categories Grid */}
                    <div className="space-y-8">
                        {Object.entries(skillCategories).map(([category, items]) => (
                            <div key={category} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                                {/* Category Header with icon */}
                                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                                    <span className="text-2xl">{getCategoryIcon(category)}</span>
                                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                                        {category}
                                    </h4>
                                </div>

                                {/* Skills Items */}
                                <div className="flex flex-wrap gap-3">
                                    {items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="group px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-sm border border-gray-200 dark:border-gray-600 hover:border-yellow-400 hover:shadow-md transition-all duration-300 hover:scale-105"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Skills data
const skillCategories = {
    Frontend: [
        "React.js",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Tailwind CSS"
    ],
    Backend: [
        "Laravel",
        "PHP",
        "REST API"
    ],
    Database: [
        "MySQL"
    ],
    Mobile: [
        "Flutter"
    ],
    Tools: [
        "Git",
        "GitHub",
        "Postman",
        "Firebase"
    ]
};