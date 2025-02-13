import { meta, ksie, gwc, fern } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    django,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    docker,
    tutorconnect,
    react,
    redux,
    python,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    redis,
    aws,
    webrtc,
    azure,
    ecommerce
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Containerization",
    },
    {
        imageUrl: redis,
        name:"Redis",
        type:"Database"
    },
    {
        imageUrl: aws,
        name:"Amazon Web Services",
        type:"Cloud"
    },
    {
        imageUrl: azure,
        name:"Microsoft Azure",
        type:"Cloud"
    },
    {
        imageUrl: webrtc,
        name:"WebRTC",
        type:"Communication"
    }
];

export const experiences = [
    {
        title: "Logistician",
        company_name: "GWC",
        icon: gwc,
        iconBg: "#8DD8CC",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Guest Relations",
        company_name: "Fern Residency",
        icon: fern,
        iconBg: "#FAF9F6",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Intern",
        company_name: "Cochin International Container Freight Station",
        icon: ksie,
        iconBg: "#DE3163",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Aditya-Naresh',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'www.linkedin.com/in/aditya-naresh',
    }
];

export const projects = [
    {
        iconUrl: tutorconnect,
        theme: 'btn-back-orange',
        name: 'Tutor Connect',
        description: 'Designed and built an online tuition platform using Django Rest Framework and React',
        link: 'https://tutor-connect-aditya.vercel.app/',
    },
   
    {
        iconUrl: ecommerce,
        theme: 'btn-back-blue',
        name: 'Ecommerce Application',
        description: 'Developed an ecommerce application using django and html with payment processor integration.',
        link: 'https://ecommerce-django-kmart.onrender.com/',
    },
    
];