
import personalWebpage1 from '../assets/images/personalWebpage.jpeg';
import personalWebpage2 from '../assets/images/personalWebpage2.jpeg';
import RockPaperScissors from '../assets/images/RockPaperScissors.jpeg';
import RockPaperScissors2 from '../assets/images/RockPaperScissors2.jpeg';
import toDoListApp from '../assets/images/toDoListApp.jpeg';
import PersonalTaskManager from '../assets/images/Personal-task-manager.jpeg';
import PersonalTaskManager2 from '../assets/images/Personal-task-manager2.jpeg';

export const profile = {
  name: 'Bibi',
  surname: 'Ovezova',
  email: 'ovezovabb@gmail.com',
  githubUrl: 'https://github.com/ovezova',
  linkedInUrl: 'https://www.linkedin.com/in/bibi-ovezova-5829a7212',
  skills: [
    { name: 'Javascript', rate: '90' },
    { name: 'React.js', rate: '90' },
    { name: 'Redux', rate: '60' },
    { name: 'Node.js', rate: '40' },
    { name: 'HTML', rate: '90' },
    { name: 'CSS', rate: '90' },
    { name: 'Material UI', rate: '40' }
  ],
  portfolio: [
    {
      title: 'My Personal Webpage',
      description:
        'This is my personal webpage hosted on firebase. It is Wcag 2.1 compliant and build with Javascript, React.js, and Material UI. Also, it uses firebase cloud functions and nodemailer to receive contact messages and respond with a confirmation email.',
      githubUrl:
        'https://github.com/ovezova',
      liveUrl: '',
      images: [personalWebpage1, personalWebpage2],
      tech: 'React.js / Material UI',
    },
    {
      title: 'ToDo List App',
      description:
        'This javascript todo list uses event propagation to access individual todos, creates individual ids for each todo, and uses a Full-Stack solution, using NodeJS and ExpressJS.',
      githubUrl:
        'https://github.com/ovezova/ToDoList-App.git',
      liveUrl: '',
      images: [toDoListApp],
      tech: 'JavaScript / Node.js / HTML / CSS / Express'
    },
    {
      title: 'Rock Scissors Paper',
      description:
        'A fun browser game based on real world game which describes the logical implementations in JS. Integrated the basic JS logics and randomly manipulated them to behave as a real opponent(cpu). Readable and commented code, dynamic and easy logic. The game do not have framework/library dependencies - It is pure JavaScript.',
      githubUrl:
        'https://github.com/ovezova/Rock-paper-scissors-game.git',
      liveUrl: '',
      images: [RockPaperScissors, RockPaperScissors2],
      tech: 'HTML / CSS / JavaScript',
    },
    {
      title: 'Personal-Task-Manager',
      description:
        'This is in progress team project lead by experienced SoftInnovas instructor. It is a multifunctional that helps to manage your daily tasks, to post albums, and observe the users that signed up. This app created using pure React.js and planning to add Node.js and MongoDB as a back-end.',
      githubUrl:
        'https://github.com/ovezova/Personal-Task-Manager.git',
      liveUrl: '',
      images: [PersonalTaskManager2, PersonalTaskManager],
      tech: 'React.js / Node.js / HTML / CSS / MongoDB'
    }

  
  ]
};
