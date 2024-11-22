import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Edis',
    lastName:  'Usein',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Software Engineer, Designer and Amateur Filmmaker',
    avatar:    '/images/edis_bodyshot1.webp',
    location:  'Europe/Skopje',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'German', 'Japaneese', 'Macedonian' , 'Balkan Languages']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>
    Send me an <span style={{ color: 'rgb(86, 236, 173)'  }}>Email!</span>
</>,
    description: <>From job or partnership offerings to talking about movies, <span style={{ color: 'rgb(86, 236, 173)'  }}>im always up for a chat!</span> Send one down here 👇</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/ShockWawe1000',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/edis-usein-52a45923a/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:edis.usein@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Meet Edis Usein</>,
    subline: <>A Software Engineer student by <InlineCode>Day</InlineCode> ,a freelancer by <InlineCode>Night</InlineCode>, and a movie director  <InlineCode>Inbewteen</InlineCode>.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        
        display: true
    },
    calendar: {
        display: true,
        link: 'mailto:edis.usein@gmail.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Im a student based in N.Macedonia, with a passion for transforming
        difficult, tough and complex challenges into simple and elegant solutions. 
        My work spans from designing and building elegant websites to developing robust programs.</> 
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Sparkasse',
                timeframe: '2024 - present',
                role: 'Banker - Junior',
                achievements: [
                    <>Managed the distribution of bank cards and account openings for students, ensuring smooth onboarding.</>,
                    <>Coordinated the incorporation process for new student clients, providing clear instructions and support.</>,
                    <>Facilitated the first point of contact for students, creating a welcoming and informative environment.</>,
                    <>Streamlined account setup and card delivery, contributing to the efficiency of the bank’s student services.</>
                ],
                images: [ ]
            },
            {
                company: 'Freelance Dev',
                timeframe: '2023 - present',
                role: 'Self Employed',
                achievements: [
                    <>Crafted tailored digital strategies to help businesses transition smoothly into the online space, optimizing their operations for the digital age.</>,
                    <>Developed custom applications that efficiently manage complex data, enabling businesses to handle, organize, and analyze their information seamlessly.</>,
                    <>Started a buisness model where Businesses were digitised and offered a packaged deal</>

                ],
                images: [ ]
            },
            {
                company: 'UNHCR',
                timeframe: '2022 - 2023',
                role: 'IT Tehnician and Mentor',
                achievements: [
                    <>Managed the refurbishment of donated PCs, meticulously diagnosing hardware and software issues to restore functionality and performance. </>,
                    <>Taught and mentored UN refugees, enabling underprivileged individuals to bridge the digital divide and enhance their opportunities.</>,
                
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/unhcr.webp',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            }
           
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'University American College Skopje',
                description: <>Studied software engineering.</>,
            },
            {
                name: 'Harvard CS50',
                description: <>Actually learned software engineering.</>,
            },
            {
                name: 'Odin Project',
                description: <>Learned building websites.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Things i can do',
        skills: [
            {
                title: 'Websites',
                description:[<>Can build and deploy a website with unmatched speed 🚀</>,

                    <span>Technologies:</span>,
                    <span><InlineCode>HTML/CSS</InlineCode>, <InlineCode>JavaScript</InlineCode>, <InlineCode>Next.js</InlineCode>, <InlineCode>Tailwind</InlineCode>, <InlineCode>React</InlineCode></span>,
                ] ,

                images: [
                    {
                        src: '/images/projects/p3.webp',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/p1.webp',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },

                ]
            },
            {
                title: 'Apps',
                description: [<>Building next gen apps on .NET, Java even Assembly so long beer is included!</>,
                <span>Technologies:</span>,<span> <InlineCode>C++</InlineCode>, <InlineCode>Python</InlineCode>,<InlineCode>C#</InlineCode>, <InlineCode>Java</InlineCode>, <InlineCode>SQL</InlineCode>, <InlineCode>.NET</InlineCode></span>],
                images: [
                    {
                        src: '/images/projects/login_win.webp',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/main_win.webp',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    
                ]
            },
            {
                title: 'Designs',
                description: [<>Designing eye candy, for every eye! 🍬</>, <span>Technologies:</span>,<span> <InlineCode>Adobe Suite - Photoshop, Premiere, After Effects, Ilustrator</InlineCode>, <InlineCode>Figma</InlineCode>. <InlineCode>DaVinci Resolve</InlineCode></span>],
                images: [
                    {
                        src: '/images/projects/d3.webp',
                        alt: 'Project image',
                        width: 33,
                        height: 9
                    },
                    {
                        src: '/images/projects/d2.webp',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/d1.webp',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Movies',
                description: [<>That one pipe dream hobby that everyone has! ✨</> ,
                <span>Technologies:</span>,<span> <InlineCode>My Dreams</InlineCode></span>],
                images: [
                    {
                        src: 'https://www.youtube.com/embed/zurU_P2VAAU?si=OwVLXE0gBr0UNjrI',
                        alt: 'Project image',
                        width: 10,
                        height: 9
                    },
                    {
                        src: 'https://www.youtube.com/watch?v=ZUIB4Aig_3c&ab_channel=MDVDMedia',
                        alt: 'Project image',
                        width: 9,
                        height: 9
                    },
                  

                ]
            }

        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    images: [
        { 
            src: '/images/projects/event-skopje/1.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/projects/event-skopje/2.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/projects/event-skopje/3.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/projects/design.webp', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/projects/event-szeged/1.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/projects/event-szeged/2.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/projects/event-szeged/3.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/projects/event-szeged/4.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/projects/event-szeged/5.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/projects/event-szeged/6.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/projects/event-szeged/7.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/projects/event-szeged/9.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };