const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://ryan2540.github.io/eportfolio/',
  title: 'RR.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ryan Rotich',
  role: 'Full Stack Web Developer',
  description:
    'Im a Full Stack Web Developer quite passionate,adaptable,resilient and a team player.Ready to start my career in the Tech Industry.Having months of experience working on various projects and also learning to work with a team profession software developers to create web applications more about that in the Resume',
  resume: 'https://docs.google.com/document/d/1KqvtlMmuWgF1vzizF5SAWoC5dbvBk9FPmCjyQ7kOsxM/edit?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/ryan-rotich-16157b23a/',
    github: 'https://github.com/RYAN2540',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Insta Clone',
    description:
      'Insta Clone is a Django based carbon copy of the popular Instagram web app.',
    stack: ['Html', 'CSS','Python', 'Django', 'Cloudinary'],
    sourceCode: 'https://github.com/RYAN2540/Insta-Clone',
    livePreview: 'https://instagram-ryan.herokuapp.com/',
  },
  {
    name: 'Neighborhood Watch',
    description:
      'Neighborhood Watch is a neighborhood app tailored for a specific neighborhood.Users may take on either of the two user roles, i.e occupant or administrator.The roles of the administrator involve: adding occupants,adding amenities and general oversight of neighborhood activities.An occupant is able to make a post visible to the neighborhood and also add a business they think would interest other occupants.',
    stack: ['Html', 'CSS', 'Python', 'Django', 'Cloudinary'],
    sourceCode: 'https://github.com/RYAN2540/neighborhood-watch',
    livePreview: 'https://neighborhood-ryan.herokuapp.com/',
  },
  {
    name: 'GitHubSearch',
    description:
      'An Angular app that allows one to search for GitHub users and repositories',
    stack: ['Angular CLI v9.1.4', 'Typescript', 'Bootstrap', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/RYAN2540/GitHubSearch',
    livePreview: 'https://ryan2540.github.io/eportfolio/GitHubSearch/',
  },
  {
    name: 'Akan name Generator',
    description:
      'A web application that takes a users birthday and calculates the day of the week they were born and then depending on their gender outputs their Akan Name. Akan names are derived from Ghanian culture. Frequently in Ghana, children are given their first name as a day name which corresponds to the day in the week they were born.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/RYAN2540/Akan-Name-Generator',
    livePreview: 'https://akan-name-generator.netlify.app/',
  },
  {
    name: 'La Galleria',
    description:
      'La Galleria is a Django based personal gallery.',
    stack: ['Python v3.9.0, Django 3.0.7, Javascript, Cloudinary, Bootstrap, HTML, CSS'],
    sourceCode: 'https://github.com/RYAN2540/La-Galleria',
    livePreview: 'https://lagalleria.herokuapp.com/',
  },
  {
    name: 'GiphyForU',
    description:
      'Is an app that is used to view trending gifs and search the respective searched gifs and sttickers.',
    stack: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
    sourceCode: 'https://github.com/RYAN2540/GiphyForU',
    livePreview: 'https://ryan2540.github.io/eportfolio/GiphyForU/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'Bootstrap',
  'Angular',
  'Python',
  'Flask',
  'PostgreSQL',
  'Django',
  'RestfulAPI',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'mailto:ryankrotich@gmail.com',
}

export { header, about, projects, skills, contact }
