export const bio = {
  about: {
    text: [
      "Hi &#128075;",
      "I'm Vinay Somawat. I’m currently working as a Software Engineer at Biofourmis India specialize in JavaScript Applications. I did my undergrad in CS from NIT Warangal.",
      "I'm a developer, geek and curious human besides being an OpenSource enthusiast. I have experience of delivering solutions for interesting problems from startup and industry space.",
      "I love to read, listen to music, and travel.",
    ],
  },
  contact: {
    text: [
      "If you would like to get in touch with me, be it for exploring a technology, a business, or to just say hi, feel free to send me an email. My email address is: dineshkarthick478@gmail.com",
    ],
  },
};

export const skills = [
  {
    title: "Clouds",
    skillName: "AWS Services",
    color: "1",
    percentage: "70",
  },
  {
    title: "Languages",
    skillName: "Python, NodeJS",
    color: "6",
    percentage: "70",
  },
  {
    title: "CCaaS",
    skillName: "Amazon Connect(CCaaS)",
    color: "2",
    percentage: "80",
  },
  {
    title: "DevOps",
    skillName: "DevOps",
    color: "3",
    percentage: "60",
  },
  {
    title: "Cloud Architecture",
    skillName: "Serverless/Server Architecture",
    color: "4",
    percentage: "75",
  },
  {
    title: "Automation Tools",
    skillName: "Automation",
    color: "7",
    percentage: "65",
  },
  {
    title: "IaC",
    skillName: "IaC, SDK, CLI",
    color: "3",
    percentage: "40",
  },
  {
    title: "Security",
    skillName: "Security",
    color: "5",
    percentage: "65",
  },
  {
    title: "Soft Skills",
    skillName: "Problem Solving, Communication",
    color: "6",
    percentage: "80",
  },
];

export const projects = {
  webProjects: [
    {
      projectName: "My Portfolio",
      image: "images/my_portfolio.png",
      summary:
        "Web Portfolio to showcase acadmics, skills, projects and contact details in better manner.",
      // preview: "https://programmingdiaries.herokuapp.com/",
      techStack: ["HTML", "JavaScript", "CSS", "Bootstrap"],
    },
    {
      projectName: "User Registration and Login",
      image: "images/userRegister_Login.png",
      summary:
        "Developed a web based User Registration and Login page with facility of new user registration, Admin portal login, Password reset, Login with existing credentials.",
      //preview: "https://clever-fermi-0d5d76.netlify.app",
      techStack: ["AngularJS", "NodeJS", "Bootstrap", "Sequelize", "MySQL"],
    },
    {
      projectName: "FLAMES Calculator",
      image: "images/flames_cal.png",
      summary:
        "Find out what type of relationship (friendship, love, affection, marriage, enmity, sisterhood) you are going to have with your dream partner...",
      //preview: "https://github.com/vinaysomawat/Travographer-Portal",
      techStack: ["HTML", "CSS", "JavaScript"],
    },
    // {
    //   projectName: "Resume Builder",
    //   image: "images/resume-builder.png",
    //   summary:
    //     "Browser based editor to build and download Resumes in a customizable templates.",
    //   preview: "https://vinaysomawat.github.io/Resume-Builder",
    //   techStack: ["HTML", "Bootstrap", "JavaScript"],
    // },
  ],
  // softwareProjects: [
  //   {
  //     projectName: "Pizza Ordering ChatBot",
  //     image: "images/pizzaorderchatbot.png",
  //     summary:
  //       "ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
  //     preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
  //     techStack: ["Dailogflow", "Firebase"],
  //   },
  //   {
  //     projectName: "WhatsApp-Bot",
  //     image: "images/whatsappbot.jpg",
  //     summary:
  //       "Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
  //     preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
  //     techStack: ["Selenium", "Chrome Webdriver", "Python"],
  //   },
  //   {
  //     projectName: "Bill Generator",
  //     image: "images/billgenerator.png",
  //     summary:
  //       "GUI to transfer data to excel sheets and generate bills on the local shops.",
  //     preview: "https://github.com/vinaysomawat/Bill-Generator",
  //     techStack: ["Tkinter", "Openxlpy", "Python"],
  //   },
  // ],
  // androidProjects: [
  //   {
  //     projectName: "NITW-CSE",
  //     image: "images/nitwcse.jpg",
  //     summary:
  //       "The Application display details of Department courses, reference books, research, publication and faculty profile.",
  //     preview: "https://github.com/vinaysomawat/NITW-CSE",
  //     techStack: ["JAVA", "XML", "Android"],
  //   },
  //   {
  //     projectName: "CareerHigh-App",
  //     image: "images/carrerhigh.png",
  //     summary:
  //       "The Application display the webpages of website careerhigh.in in android devices.",
  //     preview: "https://github.com/vinaysomawat/CareerHigh-Android",
  //     techStack: ["JAVA", "XML", "Android"],
  //   },
  // ],
  // freelanceProjects: [
  //   {
  //     projectName: "SnylloAir.com",
  //     image: "images/snylloair.png",
  //     summary:
  //       "Developed a company website to showcase the purpose, services and products provided by the company to audience.",
  //     preview: "https://www.snylloair.com/",
  //     techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
  //   },
  //   {
  //     projectName: "Delivery+",
  //     image: "images/AM-Logo-.png",
  //     summary: "Android Application to display website in android devices.",
  //     preview:
  //       "https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
  //     techStack: ["Android", "JAVA", "Play Store"],
  //   },
  // ],
};

export const experience = [
  {
    title: "Tata Consultancy Services",
    duration: "April 2021 - Present",
    subtitle: "Cloud Application Developer",
    Location: "Bangalore, Karnataka, India",
    details: [
      "Around 2 years experience in IVR solution and Chatbot on Cloud environment in Banking, Health Care and Retail domain",
      "Knowledge in Virtual Agent, both Voice and Chat on Google Dialog Flow and AWS Lex",
      "Experience in IVR on AWS Connect and components like lambda, RDS, DynamoDB, S3, Amazon comprehend, Athena, Secrets Manager, Glacier, Lifecycle rules for storage, Cloud watch, SNS, IAM and Roles, API Gateway",
      "Created High Quality Test Cases for testing Chatbot and IVR solutions",
      "Experience in Cloud Functions, Cloud APIs, Cloud Key Management Service, IAM and Cloud logins",
      "Closely worked with Sales and Engagement Team to understand Business Requirements and explaining Technology Capabilities",
      "Proficient in Python, Nodejs on serverless compute platform Lambda and Cloud Functions",
      "Involved in planning and designing multiple POCs and did third party integration like service now, Twilio, Facebook, Gmail, VPN Connection and hosted static website on S3",
      "Worked on Rest APIs and SOAP",
      "Ability to transform complex business requirements into solutions, with on time delivery, to specification, scalable, performance optimized and maintainable",
      "worked and managed IT Service Management (Incident, Problem, Change Management)",
    ],
    tags: [
      "Amazon Connect",
      "Lambda",
      "Amazon Lex",
      "Python",
      "Kinesis",
      "DynamoDB",
      "RDS",
      "S3",
      "Amazon Comprehend",
      "CloudWatch",
      "IAM",
      "API Gateway",
      "Amazon Polly",
      "Amazon Transcribe",
      "Visio",
      "ServiceNow",
    ],
    icon: "heartbeat",
  },
  {
    title: "Captechin Pvt. Ltd.",
    duration: "FEB 2020 - JAN 2021",
    subtitle: "Junior Linux Server Administrator",
    Location: "Coimbatore, Tamilnadu, India",
    details: [
      "Well knowledge in Linux/Unix servers (Installing LAMP and LEMP, Node JS, NPM), Access Permissions, LVM, Network configuration, and troubleshooting, Backup, and recovery, analyzing Logs, system recovery, TCP/UDP Protocols, Managing external services (Cloudflare, Mongo Atlas)",
      "Worked on multiple AWS services to assist in building infrastructure for various web applications (EC2, S3, EBS, EFS, VPC, RDS, S3 Glacier, CloudWatch, LightSail, SNS, Upgrading/downgrade AWS resources, IAM, Dynamo DB, Amazon Polly, Amazon Transcribe, Amazon Device Farm, AWS S2S VPN)",
      "Set up of CICD platform using Git, Microservices and Jenkins",
    ],
    tags: [
      "Linux",
      "EC2",
      "Lightsail",
      "S3",
      "RDS",
      "VPC",
      "Docker",
      "SNS",
      "CI/CD",
      "Github",
      "Jenkins",
      "JIRA",
      "LAMP/LEMP",
    ],
    icon: "qrcode",
  },
];

export const education = [
  {
    title: "Bachelors in Electronics and Communication Engineering",
    duration: "Aug 2015 - May 2019",
    subtitle: "Karpagam Institute of Technology, Coimbatore",
    details: [
      "CGPA: 6.9",
      "Project: Design and Developed IOT Based Water Distrubution System",
    ],
    tags: ["IOT", "Computer Networks", "Cloud Computing"],
    icon: "graduation-cap",
  },
  {
    title: "HSC in Science and Mathematics",
    duration: "June 2014 - Mar 2015",
    subtitle: "Govt Higher Sec School, Madukkarai",
    details: ["Percentage: 71%"],
    tags: ["Physics", "Chemistry", "Mathematics"],
    icon: "book",
  },
  {
    title: "SSLC",
    duration: "June 2012 - Mar 2013",
    subtitle: "Govt Higher Sec School, Madukkarai",
    details: ["Percentage: 88%"],
    tags: ["English", "Mathematics", "Science"],
    icon: "book",
  },
];

export const footer = [
  {
    label: "Dev Profiles",
    data: [
      {
        text: "HackerRank",
        link: "https://www.hackerrank.com/dineshkarthick41",
      },
      {
        text: "GitHub",
        link: "https://github.com/dinesh761",
      },
      {
        text: "LeetCode",
        link: "https://leetcode.com/dinesh_06/",
      },
    ],
  },
  // {
  //   label: "Resources",
  //   data: [
  //     {
  //       text: "Enable Dark/Light Mode",
  //       func: "enableDarkMode()",
  //     },
  //     {
  //       text: "Print this page",
  //       func: "window.print()",
  //     },
  //     {
  //       text: "Clone this page",
  //       link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
  //     },
  //   ],
  // },
  {
    label: "Social Profiles",
    data: [
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/dinesh-a-920730169/",
      },
      {
        text: "Twitter",
        link: "https://twitter.com/DineshA29975236",
      },
      // {
      //   text: "Buy me a coffee",
      //   link: "https://www.buymeacoffee.com/r194dME8y",
      // },
    ],
  },
  {
    label: "copyright-text",
    data: ["Made with &hearts; by Dinesh.", "&copy; 2023 Dinesh"],
  },
];

const gitUserName = "Dinesh Aruchamy";

export const URLs = {
  mediumProfile: "",
  // "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@vinaysomawat",
};
