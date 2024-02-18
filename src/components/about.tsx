function About() {
  return (
    <div className='flex flex-1 flex-col gap-4 overflow-hidden min-h-[330px]'>
      <div className='flex-1 flex flex-col gap-2 p-2 [&>*>b]:text-primary [&>h2]:font-head justify-center'>
        <h2>
          Curious traveller, <b>fullstack developer </b>, blockchain enthusiast
          &<b> transportations systems</b> professional who loves 🐶.
        </h2>
        <p className='font-semibold [&>span]:text-primary'>
          I am a <span>servant leader</span> who enjoys helping teams transform
          ideas into reality by pragmatically leveraging <span>technology</span>{' '}
          & <span>agility</span> with business requirements.
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
