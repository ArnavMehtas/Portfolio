import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    images,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Data and ML enthusiast",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "IOT and Embedded Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Smart Automation Engineer",
      company_name: "Project",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Jan 2023 - March 2023",
      points: [
        "designed and implemented a smart parking solution. ",
        "It uses five sensors and a microservo to automate the process of parking a car.",
        "Enabled digital car count display",
        "Technologies used : Arduino Board ,  UV sensors and TinkerCad Software.",
      ],
    },
    {
      title: "Flask Developer",
      company_name: "Aronify",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Sept 2023 - Jan 2024",
      points: [
        "Created an online platform which offers digital music service that gives you access to upload / listen songs from creators all over the world.",
        "3 Portal Website - User , Creator , Admin.",
        "Built with HTML , CSS , Bootstrap , Javascript , Flask , Jinja2 templates and used SQLite for data storag.",
        "Our platform offers diverse features such as song reviews, creating personalized playlists, and more",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Ticket-Show",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2024 - June 2024",
      points: [
        "Created a Movie-Ticket booking system. ",
        "Used Vue JS to develop and deploy the system.",
        "SQLite for data storage , Flask for API , VueJS for UI , VueJS Advanced with CLI , Jinja2 templates , Bootstrap for HTML generation and styling , SQLite for database , Redis for caching , Redis and Celery for batch jobs.", 
         ],
    },
    {
      title: "Full stack Developer",
      company_name: "Influencer-Hub",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "July 2024 - Present",
      points: [
        "Aimed to Facilitate direct connection between sponsors and influencers for seamless product or service promotion.",
        "Enables sponsors to effectively advertise their offerings through influential endorsements.",
        "Provides influencers with opportunities to monetize their influence through sponsored content partnerships.",
        "Enhances brand visibility and engagement by leveraging the reach and credibility of trusted influencers.",
      ],
    },
    {
      title: "Summer Intern as Analyst",
      company_name: "Wildnet Technologies",
      icon: images,
      iconBg: "#383E56",
      date: "July 2024 - Aug 2024",
      points: [
        "Studied Supply Chain Of the Semiconductor Industry ",
        "I assisted the HR department in developing an attendance dashboard equipped with automated reminder email functionalities.",
        "Detailed analysis of TSMC to predict demand volitality", 
         ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Influencer-Hub",
      description:
        " It's a platform to connect Sponsors and Influencers  so that sponsors can get their product/service advertised and influencers can get monetary benefit",
      tags: [
        {
          name: "vueJs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Flask",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Aronify",
      description:
        "online platform which offers digital music service that gives you access to upload / listen songs from creators all over the world.",
      tags: [
        {
          name: "Flask",
          color: "blue-text-gradient",
        },
        {
          name: "Jinja",
          color: "green-text-gradient",
        },
        {
          name: "css-bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Ticket-Show",
      description:
        "A digital platform designed to streamline the process of reserving seats and purchasing tickets for movies.",
      tags: [
        {
          name: "Vuejs",
          color: "blue-text-gradient",
        },
        {
          name: "CLI",
          color: "green-text-gradient",
        },
        {
          name: "Redis",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };