export default function About() {
  return (
    <section className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-lg mt-10">
      {/* Responsive YouTube Video */}
      <div className="relative w-full overflow-hidden rounded-xl shadow-md mb-8">
        <iframe
          src="https://www.youtube.com/embed/zTei5npklQw"
          title="Full Stack Development VS Data Science! Which Course Should I Choose?"
          className="w-full aspect-video rounded-xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Styled Content */}
      <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600 mb-6 text-center">
        About Entri
      </h2>

      <p className="mb-6 text-gray-700 leading-relaxed text-lg">
        <b className="text-blue-700">Entri</b> is an Indian education technology
        platform, founded in 2015 and based in Kochi, Kerala. It provides
        job-oriented skills training and competitive exam preparation. With
        courses spanning{" "}
        <span className="font-semibold">digital marketing</span>,{" "}
        <span className="font-semibold">data science</span>, and more, Entri
        emphasizes practical learning, hands-on projects, and strong placement
        assistance to help learners thrive in the evolving job market.
      </p>

      {/* Key Highlights */}
      <div className="grid gap-4 mb-8">
        {[
          {
            title: "Job Skills & Exam Prep",
            desc: "Courses/resources for competitive exams and career skills.",
          },
          {
            title: "Industry-Relevant Curriculum",
            desc: "Cutting-edge, AI-integrated programs.",
          },
          {
            title: "Placement Assistance",
            desc: "Strong job connections and placement guidance.",
          },
          {
            title: "Practical Learning",
            desc: "Hands-on projects and real-world case studies.",
          },
          {
            title: "Vernacular Language Focus",
            desc: "Courses available in regional Indian languages.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition"
          >
            <span className="font-semibold text-blue-600">{item.title}:</span>{" "}
            {item.desc}
          </div>
        ))}
      </div>

      <div className="grid gap-4 mb-8">
        {[
          {
            title: "Android App",
            desc: "Easy access through their mobile app.",
          },
          {
            title: "Flexible Learning",
            desc: "Learn with flexible schedules and recorded sessions.",
          },
          {
            title: "Mentorship",
            desc: "Guidance from industry experts and mentors.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition"
          >
            <span className="font-semibold text-blue-600">{item.title}:</span>{" "}
            {item.desc}
          </div>
        ))}
      </div>

      <div className="mt-6 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white shadow-md">
        <p className="font-bold text-xl mb-2">Vision</p>
        <p className="leading-relaxed">
          Entri aspires to become the largest job-oriented learning ecosystem in
          India, helping millions of users become job-ready. Their strategy
          focuses on impactful outcomes and strong career connections.
        </p>
      </div>
    </section>
  );
}
