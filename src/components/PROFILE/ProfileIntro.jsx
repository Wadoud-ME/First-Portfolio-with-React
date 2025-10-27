import profileImg from '../../assets/images/profile.jpeg';

const ProfileIntro = () => {
  return (
    <div>
      <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8 md:mb-12 text-center lg:text-left">
        About Me
      </h2>
      
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
        {/* Profile Image */}
        <div className="w-full max-w-[250px] lg:max-w-[300px] xl:max-w-[350px] shrink-0">
          <img 
            src={profileImg} 
            alt="Profile photo" 
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Bio Text */}
        <div className="flex-1 space-y-4">
          <p className="text-secondary text-base sm:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum fuga 
            voluptatum deserunt repudiandae aperiam dolore ipsum quis eius, voluptatibus 
            minima, tempora possimus, odit veritatis nobis illo consequatur rerum? 
            Doloremque voluptatem minus amet incidunt ipsa repellat corrupti neque cumque 
            aliquid, error, voluptatibus et, vitae officia vel reiciendis quia dignissimos 
            architecto dolores odit ullam!
          </p>
          
          <p className="text-secondary text-base sm:text-lg leading-relaxed">
            Nam odit perferendis minima, quas non quam nobis quisquam omnis facilis in 
            aliquam vitae neque culpa maiores eum reprehenderit dignissimos ducimus 
            illum sed, eius eos cumque.
          </p>
          
          <p className="text-secondary text-base sm:text-lg leading-relaxed">
            Delectus pariatur labore voluptate sit nulla sunt error a magni quia et 
            porro facere vitae minus, consequuntur aperiam voluptas cupiditate dicta? Quos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileIntro;