import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

import devicedashimg from '../assets/proj1.png';
import auraproject from '../assets/aura-project.jpeg';
import timerforchrome from '../assets/timer.png';
import auctions from '../assets/auctions.png';


const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      key: 1,
      title: 'Aura: A Crypto Token',
      image: auraproject,
      description: 'A fungible crypto token deployed on the Internet Computer blockchain. The ledger smart contract is built using Motoko, and React is used for an interactive user interface. Implemented authentication by integrating with Internet Identity, a native authentication technology which uses passkeys.',
      techStack: [
        'https://images.squarespace-cdn.com/content/v1/54437e21e4b048c830a0cff1/1582790973231-Y6Y49DRMFQTDOL5F9T32/motoko-master-01.png?format=2500w', 
        'https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png', 
        'https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png',
      ],
      github: 'https://github.com/akshay-rajan/aura',
      // live: 'https://ulodo-zyaaa-aaaal-qjgkq-cai.icp0.io/',
    },
    {
      id: 2,
      key: 2,
      title: 'DeviceDash: Smartphone Recommendation Website',
      image: devicedashimg,
      description: 'A smartphone recommendation website in Django, designed to significantly reduce the time required for an average person to choose a smartphone by 90%. Implemented an API to fetch data from `gsmarena.com` by web scraping using BeautifulSoup.',
      techStack: [
        'https://www.svgrepo.com/show/353657/django-icon.svg',
        'https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png?f=webp&w=256',
      ],
      github: 'https://github.com/akshay-rajan/devicedash',
    },
    {
      id: 3,
      key: 3,
      title: 'Timer for Chrome',
      image: timerforchrome,
      description: 'A Timer chrome extension using JavaScript, designed to track time during browsing or tests, boosting focus and time management of an individual by 50%. Enhanced proficiency in DOM manipulation, event handling and asynchronous operations. Studied Chrome extension architecture, including background scripts, content scripts, and popup pages.',
      techStack: [
        'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
        'https://cdn.iconscout.com/icon/free/png-256/free-html-5-1-1175208.png', 
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png',
      ],
      github: 'https://github.com/akshay-rajan/timer',
    },
    {
      id: 4,
      key: 4,
      title: 'Auctions',
      image: auctions,
      description: 'An online auction website in Django and Bootstrap, designed to facilitate the buying and selling of products. Implemented a bidding system, user authentication, and a user-friendly interface.',
      techStack: [
        'https://www.svgrepo.com/show/353657/django-icon.svg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png',
      ],
      github: 'https://github.com/akshay-rajan/commerce',
    }
  ];

  const toggleProject = (id) => {
    setActiveProject(activeProject === id ? null : id);
  };

  const styles = window.innerWidth < 798 ? {
    cardContainer: {
      display: 'block',
      width: '100%',
      height: 'auto',
      zIndex: '1',
    }
  } : {
    cardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      height: 'auto',
      zIndex: '1',
    },
  }


  return (
    <div className="project-wrapper" id="projects">
      <div className="project-header">
        <h1 className="project-header__title">Recent Projects</h1>
      </div>

      <div className="project-cards" style={styles.cardContainer}>
        {projects.map((project) => {
          return (
          <div key={project.key}>
            <ProjectCard
              index={project.id}
              project={project}
              isActive={activeProject === project.id}
              toggleProject={toggleProject}
            />
          </div>
        )})}
      </div>
    </div>
  );
};

export default Projects;
