module.exports = {
    pathPrefix: '',
    siteUrl: 'https://zhizhuoxin.github.io',
    title: 'Shixin Song',
    description: 'Logbook of Shixin Song',
    author: 'Shixin Song',
    authorAlternative: '宋世欣',
    // TODO: Write an introduction
    introduction: [
        'I am currently an undergraduate student majoring in Computer Science at University of Michigan ([Umich](https://cse.engin.umich.edu/)). Before I transferred to Umich, I also studied in Shanghai Jiao Tong University ([SJTU](https://en.sjtu.edu.cn/)) and was majoring in Electrical and Computer Engineering.',
        'My research interest mainly lies in computer systems and architecture. Currently I am interested in compiler and CPU optimizations in large cloud computing systems. I want to contribute to more efficient data center applications.',
        'I am applying for PhD programs, and I expect to graduate in Summer 2022. Please reach out to me if your are looking for PhD students.'
    ],
    avatar: 'shixin.jpg',
    professions: [
        'CSE Student',
        // 'Software Engineer',
        // 'Full Stack Developer',
    ],
    tocMaxDepth: 2,
    excerptMaxLength: 500,
    birthday: 'Some day',
    location: 'Ann Arbor, MI, US',
    email: 'shixins@umich.edu',
    postsForArchivePage: 3,
    defaultLanguage: 'en',
    // TODO: What's disqusScript?
    disqusScript: process.env.DISQUS_SCRIPT
        || 'https://tc-imba.disqus.com/embed.js',
    // TODO: Remove unused pages
    pages: {
        home: '/',
        posts: 'posts',
        contact: 'contact',
        resume: 'resume',
        tags: 'tags',
        research: 'research',
    },
    social: [
        {url: '/resume.pdf', icon: ['ai', 'cv'],},
        {url: 'https://github.com/zhizhuoxin', icon: ['fab', 'github'],},
        {url: 'https://twitter.com/zhizhuoxin', icon: ['fab', 'twitter'],},
    ],
    wakatime: {
        username: 'zhizhuoxin',
        activity: '0fd3b1d7-f5b9-4399-b841-d77097012108',
        language: '892b4492-58d3-4d1f-b0ce-6b3259e57094',
        editor: 'eddf0b6e-3f7c-4925-aeaf-9a5012eecbb5',
        os: 'c7c7a938-95be-4ceb-bdf9-60b2caf189cb',
    },
    // TODO: Modify contactFormUrl
    contactFormUrl: process.env.CONTACT_FORM_ENDPOINT
        || 'https://getform.io/f/09a3066f-c638-40db-ad59-05e4ed71e451',
    googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
    education: [
        {
            date: 'Sept. 2020 - Present',
            icon: 'university',
            title: 'Bachelor of Science in Computer Science',
            location: 'University of Michigan',
        }, {
            date: 'Sept. 2018 - June. 2020',
            icon: 'university',
            title: 'Bachelor of Science in Electrical and Computer Engineering',
            location: 'Shanghai Jiao Tong University',
        }],
    interests: [
        {
            icon: 'cloud',
            title: 'Cloud Computing Systems',
        }, {
            icon: 'layer-group',
            title: 'Compiler Techniques and Optimizations',
        }, {
            icon: 'microchip',
            title: 'Microarchitecture',
        }],
    experience: [
        {
            title: 'Work',
            position: 'left',
            data: [
                {
                    date: 'Feb. 2021 - Present',
                    title: 'Research Assistant',
                    location: 'University of Michigan',
                    description: 'Work in EFES Lab with Prof. [Baris Kasikci](https://web.eecs.umich.edu/~barisk/).',
                },
            ],
        }, {
            title: 'Teaching',
            position: 'right',
            data: [
                {
                    date: 'Sept. 2021 - Present',
                    title: 'Grader of [EECS370 Introduction to Computer Organization](https://eecs370.github.io/)',
                    location: 'University of Michigan',
                }, {
                    date: 'Sept. 2020 - Dec. 2020',
                    title: 'Teaching Assistant of [VG101 Introduction to Computers and Programming](https://www.ji.sjtu.edu.cn/academics/courses/courses-by-number/course-info/?id=74)',
                    location: 'Shanghai Jiao Tong University',
                    description: 'Worked with Prof. [Manuel Charlemagne](https://www.ji.sjtu.edu.cn/about/faculty-staff/faculty-directory/faculty-detail/76/).',
                }, {
                    date: 'May. 2020 - Aug. 2020',
                    title: 'Teaching Assistant of [VG100 Introduction to Engineering](https://www.ji.sjtu.edu.cn/academics/courses/courses-by-number/course-info/?id=73)',
                    location: 'Shanghai Jiao Tong University',
                    description: 'Worked with Prof. [Manuel Charlemagne](https://www.ji.sjtu.edu.cn/about/faculty-staff/faculty-directory/faculty-detail/76/).',
                }, {
                    date: 'Sept. 2019 - Dec. 2019',
                    title: 'Teaching Assistant of [VV186 Honors Mathematics II](https://www.ji.sjtu.edu.cn/academics/courses/courses-by-number/course-info/?id=233)',
                    location: 'Shanghai Jiao Tong University',
                    description: 'Worked with Prof. [Horst Hohberger](https://umji.sjtu.edu.cn/~horst/index.html).',
                },
            ],
        }, {
            title: 'Volunteer',
            position: 'left',
            data: [
                {
                    date: 'Dec. 2018 - Jan. 2019',
                    title: 'Volunteer Teacher at [Sanhe Junior School](https://map.baidu.com/poi/%E4%B8%89%E6%B2%B3%E5%88%9D%E7%BA%A7%E4%B8%AD%E5%AD%A6/@11548194.64205,2820438.08482,19z?uid=691305230c149d09725e804f&ugc_type=3&ugc_ver=1&device_ratio=2&compat=1&querytype=detailConInfo&da_src=shareurl)',
                    location: 'Sanhe, Yunnan, China',
                    description: 'Worked as a math teacher of a grade 7 class.',
                },
            ],
        }, {
            title: 'Service',
            position: 'left',
            data: [
                {
                    date: 'Sep. 2019 - Dec. 2019',
                    title: 'Student Advisor of Advising Center at UM-SJTU JI',
                    location: 'Shanghai Jiao Tong University',
                    description: 'Worked as an advisor to help classmates.',
                },
            ],
        },
    ],
    awards: [
        {
            date: 'Jan. 2022',
            title: 'CRA Outstanding Undergraduate Researcher Award Honorable Mention',
        }, {
            date: 'Oct. 2021',
            title: 'MICRO-54 ACM Student Research Competition First Place Winner',
        }, {
            date: 'Aug. 2021',
            title: 'Roger King Scholarship',
        }, {
            date: 'Nov. 2020',
            title: 'SJTU Undergraduate Excellent Scholarship',
        }, {
            date: 'Nov. 2019',
            title: 'Fuda Scholarship',
        }, {
            date: 'Nov. 2019',
            title: 'SJTU Undergraduate Excellent Scholarship',
        }, {
            date: 'Oct. 2017',
            title: 'The National High School Mathematics League',
        },
    ],
    tagColors: [
        'magenta', 'red', 'volcano', 'orange', 'gold',
        'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple',
    ],
    tags: [
        {
            id: 'javascript',
            name: 'javascript',
            description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
            color: '#f0da50',
        },
        {
            id: 'nodejs',
            name: 'Node.js',
            description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
            color: '#90c53f',
        },
        {
            id: 'rxjs',
            name: 'RxJS',
            description: 'RxJS is a library for reactive programming using Observables, for asynchronous operations.',
            color: '#eb428e',
        },
        {
            id: 'typescript',
            name: 'typescript',
            description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
            color: '#257acc',
        },
        {
            id: 'reactjs',
            name: 'reactjs',
            description: 'React is an open source JavaScript library used for designing user interfaces.',
            color: '#61dbfa',
        },
        {
            id: 'gatsby',
            name: 'Gatsby.js',
            description: 'A framework built over ReactJS to generate static page web application.  ',
            color: '#6f309f',
        },
        {
            id: 'html',
            name: 'HTML',
            description: 'A markup language that powers the web. All websites use HTML for structuring the content.',
            color: '#dd3431',
        },
        {
            id: 'css',
            name: 'css',
            description: 'CSS is used to style the HTML element and to give a very fancy look for the web application.',
            color: '#43ace0',
        },
        {
            id: 'python',
            name: 'python',
            description: 'A general purpose programming language that is widely used for developing various applications.',
            color: '#f9c646',
        },
    ],
};
