import { siteConfig } from '@/config/site';

function About() {
  return (
    <div>
      <h1>Hi 👋! I'm Lucas Verdiell</h1>
      <p>{siteConfig.description}</p>
    </div>
  );
}

export default About;
