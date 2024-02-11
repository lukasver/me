function About() {
  return (
    <div className='flex flex-col gap-4 overflow-hidden'>
      <div className='flex-1 flex flex-col gap-2 p-2 [&>p>b]:text-primary font-sans justify-between'>
        <p>
          With 34 years of age and from Argentina, this professional stands as a{' '}
          <b>SR Fullstack Developer</b> boasting over 7 years of experience in
          the <b>Airline industry</b>, where he has led operational teams to
          success. Currently his is leading a team of developer as Tech Lead &
          PM at{' '}
          <a
            href={'https://smat.io'}
            target={'_blank'}
            rel={'noopener nofollow'}
            className='hover:font-bold hover:text-primary transition-all duration-300 ease-in-out'
          >
            Smat.io
          </a>
          .
        </p>
        <p>
          His journey encompasses more than 4 years as a <b>Web Developer</b>{' '}
          alongside another 4 years as a <b>Professor</b> and <b>Trainer</b>,
          equipping him with a profound grasp of both the technical and business
          realms. He holds a Bachelor's degree in Hotel Management, further
          enriching his multifaceted profile.
        </p>
      </div>
      <div className='grid [&>b]:text-gradient [&>b]:font-head [&>b]:dark:drop-shadow-4xl grid-dynamic-25 place-items-center h-[160px] pb-10'>
        <b>Tech</b>
        <b>Project Management</b>
        <b>Web development</b>
        <b>Airlines</b>
        <b>Transportation systems</b>
        <b>Finance</b>
        <b>Blockchain</b>
        <b>Teaching</b>
        <b>Freelance</b>
      </div>
    </div>
  );
}

export default About;
