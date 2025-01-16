const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse gap-8">
      <img
        src="/Jarl.jpg"
        className="max-w-sm rounded-lg shadow-2xl" />
      <div> 
        <h1 className="text-5xl font-bold">Hi, I'm Jarl!</h1>
        <p className="py-6">
        A versatile full-stack developer with expertise in Ruby on Rails and Next.js, adept at building scalable, high-performance web applications from front-end to back-end.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>

  );
};

export default Hero;