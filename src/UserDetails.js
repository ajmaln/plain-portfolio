import image from './assets/user.jpeg'

export default {
    pic: image,
    name: 'Ajmal Noushad',
    titles: ['Software Engineer', 'Open Sourcerer', 'Web Dev', 'AI-ML Enthusiast'],
    socialProfiles: {
        github: 'https://github.com/ajmaln',
        linkedin: 'https://linkedin.com/in/ajmaln',
        stackoverflow: 'https://stackoverflow.com/users/7056292/ajmal-noushad'
    },
    resumeLink: 'https://drive.google.com/file/d/1FlcUc8SxnJqnaF832iQZ4RKV7ePhf1re/view?usp=sharing',
    projects: [
        {
            image: 'https://images.idgesg.net/images/article/2018/10/ai_artificial-intelligence_circuit-board_circuitry_mother-board_nodes_computer-chips-100777423-large.jpg',
            title: 'ATM Theft detection',
            date: 'April 2018',
            description: 'Developed a Deep Learning Neural Network for audio classification to identify threats in ATMs as part of the Smart India Hackathon 2018'
        },
        {
            image: 'https://490z7i45htbb1f4tty9mdpi6-wpengine.netdna-ssl.com/wp-content/uploads/2017/11/AI-governance-lead.jpg?resolution=1366,1',
            title: 'Issue Tracking System',
            date: 'April 2018',
            description: 'Developed an Ticket based Issue tracking system using Django Backend for Sophisticated Instrumentation & Computation Center, Kerala University'
        }
    ],
    skills: {
        languages: ['Python', 'Javascript', 'C', 'CPP', 'Java', 'C#',],
        fandls: ['Django', 'ReactJS', 'NodeJS', 'Firebase Cloud API', 'Git', 'JQuery', 'Django Rest Framework', 'GraphQL'],
        deployment: ['Heroku', 'PythonAnyWhere', 'Amazon Cloud EC2', 'Firebase']
    }
}