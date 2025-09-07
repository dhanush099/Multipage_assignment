const courses = [
  {
    name: "Full Stack Development",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Data Science",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Software Testing",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Digital Marketing",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Home() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen py-16">
      <div className="text-center mb-14 px-4">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
          Welcome to Entri Learning
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          🚀 Learn the skills that matter. Hands-on projects, expert mentors,
          and career-focused learning paths to help you achieve your dreams.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-6">
        {courses.map((course) => (
          <div
            key={course.name}
            className="relative group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Course Image with Overlay */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={course.img}
                alt={course.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70 group-hover:opacity-90 transition" />
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-xl font-bold text-blue-800 mb-4 group-hover:text-indigo-600 transition">
                {course.name}
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                Learn {course.name} with structured lessons, projects, and
                mentor guidance. Perfect for beginners & pros.
              </p>
              <button className="mt-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2 px-4 rounded-xl shadow-md font-semibold text-sm tracking-wide transition transform hover:scale-105">
                Continue Learning
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Ready to boost your career?
        </h3>
        <button className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white py-3 px-8 rounded-full shadow-lg font-semibold text-lg transition transform hover:scale-110">
          Join Entri Now 🚀
        </button>
      </div>
    </section>
  );
}
