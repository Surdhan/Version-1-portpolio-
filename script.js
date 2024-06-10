const projects = {
    Pettikadai: 'pettikadai.html',
    DroneProject: 'droneproject.html',
    RoadSignDetection: 'roadsigndetection.html',
    SmartNewspaper: 'smartnewspaper.html',
    LoraRover: 'lorarover.html',
    PathPartner: 'pathpartner.html',
    LifiTraffic: 'lifiTraffic.html'
  };
  
  document.querySelectorAll('.project-title').forEach(title => {
    title.addEventListener('click', () => {
      const projectId = title.id;
      if (projects[projectId]) {
        window.location.href = projects[projectId];
      }
    });
  });