// src/pages/Users.jsx
export default function Users() {
  const students = [
    { name: "Mohammed Yaser", company: "Google" },
    { name: "Jenifa Thomas", company: "Microsoft" },
    { name: "Sridhar", company: "Flipkart" },
    { name: "Muthu Lakshmi", company: "Amazon" },
    { name: "Dhanushkrishna", company: "HCL" },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mt-14 px-6">
      {/* Faculty Section */}
      <div>
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent mb-8">
          Faculty
        </h2>
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blue-100 hover:shadow-2xl transition">
          <div className="relative mb-5">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 p-[2px] animate-pulse" />
            <img
              src="https://avatars.githubusercontent.com/u/105870629?v=4"
              alt="Arun Kumar"
              className="relative w-28 h-28 rounded-full border-4 border-white shadow-md"
            />
          </div>

          <div className="font-bold text-2xl text-gray-800">Arun Kumar</div>
          <div className="text-blue-600 font-medium mb-5">
            Full Stack Teacher
          </div>

          {/* Links */}
          <div className="flex gap-4 mb-4">
            <a
              href="https://www.linkedin.com/in/arun-kumar-374775211/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md flex items-center gap-2 transition transform hover:scale-105"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Arun-DevOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-black text-white px-4 py-2 rounded-lg shadow-md flex items-center gap-2 transition transform hover:scale-105"
            >
              GitHub
            </a>
          </div>

          <p className="text-gray-600 text-center max-w-sm leading-relaxed">
            🌟 Passionate MERN stack developer guiding aspiring engineers with
            real-world knowledge and hands-on skills.
          </p>
        </div>
      </div>

      {/* Student Section */}
      <div>
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent mb-8">
          Students
        </h2>
        <div className="grid gap-6">
          {students.map((s) => (
            <div
              key={s.name}
              className="flex items-center justify-between bg-white/70 backdrop-blur-md rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-xl transition transform hover:scale-[1.02]"
            >
              <div className="font-semibold text-lg text-gray-800">
                {s.name}
              </div>
              <div
                className={`px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm 
                ${
                  s.company === "Google"
                    ? "bg-gradient-to-r from-yellow-400 to-red-500 text-white"
                    : s.company === "Microsoft"
                    ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white"
                    : s.company === "Amazon"
                    ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white"
                    : s.company === "Flipkart"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                    : "bg-gradient-to-r from-gray-400 to-gray-600 text-white"
                }`}
              >
                {s.company}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
