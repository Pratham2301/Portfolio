import emoji from 'react-easy-emoji';
import {
	EducationType,
	ExperienceType,
	VolunteerExperienceType,
	FeedbackType,
	ProjectType,
	SkillsSectionType,
	SkillBarsType,
	SEODataType,
	SocialLinksType,
	GreetingsType,
} from './types/sections';




export const greetings = {
	name: "Pratham Rajbhoj",
	title: "Hey all, I'm Pratham Rajbhoj",
	description:
		"I'm passionate Full Stack web developer, a Competitive Programmer having an experience of web applications with Python, Django, Node.js, Express.js, RestFramework, Javascript, React.js and many more... ",
	resumeLink:
		"https://drive.google.com/file/d/18RI_cXOti0fbnLLMy34gBReyT8DGHXyO/view?usp=share_link",
};

export const openSource = {
	githubUserName: "Pratham2301",
};

export const contact = {};

export const socialLinks = {
	url: "",
	linkedin: "https://www.linkedin.com/in/prathamesh-rajbhoj-2bb157200/",
	github: "https://github.com/Pratham2301",
	// instagram: "https://www.instagram.com/pratham_rajbhoj23",
	email: "prathamrajbhoj2003@gmail.com",
};





export const skillsSection: SkillsSectionType = {
	title: 'Skills',
	subTitle: 'I AM A CRAZY FULL STACK DEVELOPER WITH GREAT PROBLEM SOLVING & DEBUGGING SKILLS',
	data: [
		{
			title: 'Full Stack Development',
			lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
			skills: [
				emoji(
					'⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
				),
				emoji('⚡ Building responsive static websites using Next.js'),
				emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
			],
			softwareSkills: [
				{
					skillName: 'HTML-5',
					fontAwesomeClassName: 'vscode-icons:file-type-html',
				},
				{
					skillName: 'CSS-3',
					fontAwesomeClassName: 'vscode-icons:file-type-css',
				},
				{
					skillName: 'JavaScript',
					fontAwesomeClassName: 'logos:javascript',
				},
				{
					skillName: 'Reactjs',
					fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
				},
				{
					skillName: 'Nodejs',
					fontAwesomeClassName: 'logos:nodejs',
				},
				{
					skillName: 'Github',
					fontAwesomeClassName: 'akar-icons:github-fill',
				},
				{
					skillName: 'Django',
					fontAwesomeClassName: 'vscode-icons:file-type-django',
				},
				{
					skillName: "Databases - SQL and NoSQL",
					fontAwesomeClassName: 'mdi:database',
				},
				{
					skillName: 'AWS',
					fontAwesomeClassName: 'logos:aws',
				},
				{
					skillName: 'Google-Cloud',
					fontAwesomeClassName: 'devicon:googlecloud',
				},
				{
					skillName: 'Selenium Testing',
					fontAwesomeClassName: 'logos:selenium',
				},

			],
		},
		{
			title: 'Prgramming Languages',
			lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
			skills: [
				emoji('⚡ Experience of working on multiple cloud platforms'),
				emoji(
					'⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
				),
				emoji(
					'⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
				),
			],
			softwareSkills: [
				// ? Check README To get icon details

				{
					skillName: 'Azure',
					fontAwesomeClassName: 'devicon:c',
				},
				{
					skillName: 'Heroku',
					fontAwesomeClassName: 'logos:c-plusplus',
				},
				{
					skillName: 'PostgreSQL',
					fontAwesomeClassName: 'devicon:python',
				},

				{
					skillName: 'Docker',
					fontAwesomeClassName: 'logos:java',
				},
				{
					skillName: 'Docker',
					fontAwesomeClassName: 'ant-design:console-sql-outlined',
				},
			],
		},
	],
};









export const SkillBars: SkillBarsType[] = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo: EducationType[] = [
	{
		schoolName: "Shri Ramdeobaba College of Engineering and Management, Nagpur",
		subHeader: "B.Tech in Computer Science",
		duration: "2020 - 2024",
		desc: "",
		grade: "9.36 CGPA",
		descBullets: [
			// "Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
			// "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	},
	{
		schoolName: "Yashoda Higher Secondary College, Nagpur",
		subHeader: "Secondary - 12th",
		duration: "2018 - 2020",
		desc: "",
		grade: "85.54%",
		descBullets: [
			// "Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
			// "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	},
	{
		schoolName: "Prerna Public School, Nagpur",
		subHeader: "Primary - 10th",
		duration: "2016 - 2018",
		desc: "",
		grade: "90.80%",
		descBullets: [
			// "Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
			// "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	},
];

export const experience: ExperienceType[] = [
	{
		role: "Backend Intern",
		company: "QuikSpares",
		date: "Mar 2023 - May 2023 (3-months)",
		desc: "I worked as backend web developer to design backend using Node.js, RestFramework some other libraries.",
		companyLogo: '/img/icons/common/quikspares.png',
	},
	{
		role: "Backend Intern",
		company: "Catalysing Dream and Beyond",
		date: "Feb 2022 - Jul 2022 (6-months)",
		desc: "I worked as backend web developer to design backend using Django, RestFramework some other libraries.",
		companyLogo: '/img/icons/common/o1.jfif',
	},

];



export const Volunteerexperience: VolunteerExperienceType[] = [
	{
		role: "Vice President",
		company: "The CodeBreakers Club",
		companylogo: "/img/icons/common/tcb.png",
		date: "Nov 2022 - Present",
		desc: "Leading Club as a Vice President and working on development and expansion of The Code Breakers club",
	},
	{
		role: "Backend Lead",
		company: "The CodeBreakers Club",
		companylogo: "/img/icons/common/tcb.png",
		date: "Aug 2021 - Oct 2022",
		desc: "Worked as Backend web developer Lead to design club website and made DSA questions for CP Contest for club events hosted on CodeForces",
	},
	{
		role: "Full Stack Developer",
		company: "Geeks for Geeks Chapter",
		companylogo: "/img/icons/common/gfg.jfif",
		date: "Sept 2022 - Present",
		desc: "Worked in Development of Club website and was a github repository maintainer for open source event 'Git-For-Geeks' and successfully merged 400+ PRs",
	},
	{
		role: "CP Problem Setter",
		company: "Codechef Rcoem Chapter",
		companylogo: "/img/icons/common/codechefchapter.jfif",
		date: "Sept 2021 - Sept 2022 (12-months)",
		desc: "Contributed in hosting multiple CP Contests by developing questions based on Data Structures and Algorithms",
	},
];








export const projects: ProjectType[] = [
	{
		name: "CollegeWit",
		desc: "A user driven platform for resolving doubts of comuunity of students, where they can discuss anonymously. Currently having 150+ Users.",
		github: "https://github.com/RCOEM-Overflow/College_Wit_Website",
		link: "https://collegewit.netlify.app/",
	},
	{
		name: "URL-Shortner",
		desc: "A Web-App which converts long URL into a short URL, and User gets analysis for each shortened Link",
		github: "https://github.com/Pratham2301/url_shortner",
		link: "https://pr-url.herokuapp.com/",
	},
	{
		name: "Travel-with-Brains",
		desc: "Designed and developed an application for senior citizens to help them fight Brain diseases by playing mind games. Users will enjoy Virtual World Tour, Meditation while playing 7+ mind games at each levels.",
		github: "https://github.com/Pratham2301/Travel-with-brains",
		link: "https://pratham2301.github.io/Travel-with-brains/",
	},
	{
		name: "Portfolio",
		desc: "My Personal Portfolio to showcase my Skills, Experience and Projects",
		github: "https://github.com/Pratham2301/My-Portfolio",
		link: "https://pratham-rajbhoj.netlify.app/",
	},
	{
		name: "Github-Wrapper",
		desc: "A one stop place to stalk someone's Github Repositories and their activity",
		github: "https://github.com/Pratham2301/github-wrapper-javascript",
	},
	{
		name: "Know Your Prep",
		desc: "Contributed in development of this project during my Internship at Catalysing Dreams and Beyond",
		github: "https://github.com/Pratham2301/o1analysis",
		link: "https://devo1.netlify.app/",
	},
	{
		name: "Imagizer",
		desc: "It is one stop app that is used for Image Processing and Image Editing.The app has ability to change any image into its dense pencil sketches, colour pencil sketch, colour paints, cartoon image, water colour paints effect, etc.",
		github: "https://github.com/Pratham2301/CG_Assignment",
		link: "https://pypi.org/project/py-imagizer/0.0.2/",
	},
	{
		name: "Notes App",
		desc: "A web application where you can keep records or take notes",
		github: "https://github.com/Pratham2301/Notes-App",
		link: "https://pratham2301.github.io/Notes-App/",
	},
];

export const feedbacks: FeedbackType[] = [
	{
		name: "Smart India Hackathon 2022 Finalist",
		feedback:
			"My Team 'Bots With Brains' was selected for Finals of SIH-22. Top 3k students were selected out of 15L. Our Problem Statement was to Design a solution to help elderly citizens of India fight brain diseases by playing Mind-Games.",
	},
	{
		name: "Google x AMD - Solving For India Hackathon Regionalist & Institute Winner",
		feedback:
			"My Team 'Bots With Brains' was selected for Finals of SIH-22. Top 3k students were selected out of 15L. Our Problem Statement was to Design a solution to help elderly citizens of India fight brain diseases by playing Mind-Games.",
	},
	{
		name: "Winner - IIT Bombay Techfest-CoDecode 2022",
		feedback:
			"It was a Mathematics based Competitive Programming Contest organized by Techfest IIT-Bombay",
	},
	{
		name: "Knight (Top 4% users) on Leetcode",
		feedback:
			"Rated 1880+ on Leetcode, and solved 400+ Problems on the platform",
	},
	{
		name: "4 Star on Codechef",
		feedback:
			"Rated 1850+ on Codechef, and solved 500+ Problems on the platform",
	},
	{
		name: "Specialist on Codeforces (1400+)",
		feedback:
			"Rated 1350 on Codechef, and solved 300+ Problems on the platform",
	},
	{
		name: "Google ML Bootcamp",
		feedback:
			"Selected in Top 300 Indian Students for the Google Machine Learning Bootcamp",
	},
	{
		name: "Publicis Sapient Jumpstart 2022 Finalist",
		feedback:
			"Qualified for the Final Round of Programming Event Organized by Publicis Sapient in 2022",
	},
	{
		name: "Auto-Coders 2022 Winner",
		feedback:
			"It was an Coding Competition organised by Government College of Engineering, Nagpur as a part of Synergy 2022",
	},
	{
		name: "Institute Rank #1 in BKP Coding Contest by GDSC RCOEM",
		feedback:
			"It was an National Level Competitive Coding Competition held on Codechef, by GDSC RCOEM, Nagpur in 2022",
	},
	{
		name: "Institute Rank #1 in Shinobi Coding Contest by Technical Club RCOEM",
		feedback:
			"It was an National Level Competitive Coding Competition held on Coding Ninjas, by Technical Club RCOEM, Nagpur in 2023",
	},
	{
		name: "Rank #2 in Anjuman Coding Contest",
		feedback:
			"It was an National Level Competitive Coding Competition held on Coding Ninjas, by Technical Club RCOEM, Nagpur in 2023",
	},
	{
		name: "Social Summer Of Code - 2022",
		feedback:
			"Opensource Web Development Contributor",
	},
	{
		name: "Social Winter Of Code - 2023",
		feedback:
			"Opensource Web Development Contributor",
	},
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
	title: "Pratham Rajbhoj",
	description:
		"A passionate Full Stack Web Developer and Competitive Programmer.",
	author: "Pratham Rajbhoj",
	image: "https://avatars.githubusercontent.com/u/84040204?v=4",
	url: "",
	keywords: [
		"Pratham",
		"Rajbhoj",
		"Pratham Rajbhoj",
		"Pratham Rajbhoj RCOEM",
		"Prathamesh",
		"Prathamesh Rajbhoj",
		"Portfolio",
		"Pratham Portfolio ",
		"Pratham Rajbhoj Portfolio",
	],
}
