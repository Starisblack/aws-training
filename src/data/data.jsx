import {
  Aws,
  Dockerization,
  Github,
  Kubernetes,
  Linux,
  Logical,
} from "../assets/courses";
import {
  AwsMaterial,
  ScenerioQuestions,
  SoftwareArchitecture,
  TrainingOfAWS,
  UITrainingDay1,
  UITrainingDay2,
} from "../assets/docs/notes/Index";

const CourseLists = [
  {
    title: "AWS",
    img: Aws,
    url: "aws",
  },
  { title: "Dockerization", img: Dockerization, url: "dockerization" },
  { title: "Github", img: Github, url: "github" },
  { title: "Kubernetes", img: Kubernetes, url: "kubernetes" },
  { title: "Linux Administration", img: Linux, url: "linux-administration" },
  {
    title: "Logical Volume Management",
    img: Logical,
    url: "logical-volume-management",
  },
];

const TrainingNote = [
  { title: "AWS Material", type: "pdf", doc: AwsMaterial },

  { title: "Training Of AWS Day 1", type: "pptx", doc: TrainingOfAWS },

  { title: "Scenerio Questions", type: "pptx", doc: ScenerioQuestions },
  {
    title: "Software Architecture and Development Processes",
    type: "docx",
    doc: SoftwareArchitecture,
  },

  { title: "UI Training Day 1", type: "pdf", doc: UITrainingDay1 },

  { title: "UI Training Day 2", type: "docx", doc: UITrainingDay2 },
];

const AWSResources = [
  {
    title: "A Look at Cloud Computing Landscape",
    duration: "3:00",
    url: "",
  },

  {
    title: "Amazon Glacier Tutorial",
    duration: "6:58",
    url: "",
  },
  {
    title: "Amazon Virtual Private Cloud (VPC)",
    duration: "55:56",
    url: "",
  },
  {
    title: "AWS Architecture Tutorial ",
    duration: "59:10",
    url: "",
  },

  {
    title: "AWS Autoscaling",
    duration: "59:10",
    url: "",
  },

  {
    title: "AWS Best Practices",
    duration: "15:00",
    url: "",
  },

  {
    title: "AWS Certification, Job, Responsibilities  & Career Opportunities",
    duration: "09:17",
    url: "",
  },
  {
    title: "AWS Certified Solutions Architect Associate Level",
    duration: "03:51",
    url: "",
  },
  {
    title: "AWS Cloud Economics",
    duration: "06:16",
    url: "",
  },
  {
    title: "AWS CloudFormation Part - 1",
    duration: "41:50",
    url: "",
  },

  {
    title: "AWS CloudFormation Part - 2",
    duration: "05:39",
    url: "",
  },

  {
    title: "AWS CloudWatch",
    duration: "07:51",
    url: "",
  },

  {
    title: "AWS Configuration Management",
    duration: "29:22",
    url: "",
  },
  {
    title: "AWS DynamoDB",
    duration: "09:04",
    url: "",
  },
  {
    title: "AWS EBS - Elastic Block Store",
    duration: "07:45",
    url: "",
  },

  {
    title: "AWS EC2. What is AWS EC2?",
    duration: "22:16",
    url: "",
  },

  {
    title: "AWS ECS - Elastic Container Service",
    duration: "37:45",
    url: "",
  },

  {
    title: "AWS Elastic Beanstalk Part - 1",
    duration: "10:38",
    url: "",
  },

  {
    title: "AWS Elastic Beanstalk Part - 2",
    duration: "28:56",
    url: "",
  },

  {
    title: "AWS ELB - Elastic Load Balancer",
    duration: "11:58",
    url: "",
  },

  {
    title: "AWS Foundation Services & Databases",
    duration: "06:08",
    url: "",
  },

  {
    title: "AWS Foundation Services & Networking",
    duration: "03:09",
    url: "",
  },

  {
    title: "AWS Foundation Services & Storage",
    duration: "11:28",
    url: "",
  },

  {
    title: "AWS IAM (Identity And Access Management)  Part - 1",
    duration: "43:30",
    url: "",
  },

  {
    title: "AWS IAM (Identity And Access Management)  Part - 2",
    duration: "01:02:08",
    url: "",
  },

  {
    title: "AWS In 5 Minutes. What is AWS?",
    duration: "05:29",
    url: "",
  },

  {
    title: "AWS In 10 Minutes. What is AWS?",
    duration: "09:11",
    url: "",
  },
  {
    title: "AWS Interview Questions And Answers Part - 1",
    duration: "01:31:15",
    url: "",
  },

  {
    title: "AWS Interview Questions And Answers Part - 2",
    duration: "01:01:55",
    url: "",
  },
  {
    title: "AWS Lambda",
    duration: "17:40",
    url: "",
  },

  {
    title: "AWS Marketplace",
    duration: "02:18",
    url: "",
  },

  {
    title: "AWS Route 53",
    duration: "26:46",
    url: "",
  },

  {
    title: "AWS S3 Bucket part - 1",
    duration: "01:18:09",
    url: "",
  },

  {
    title: "AWS S3 Bucket part - 2",
    duration: "45:11",
    url: "",
  },

  {
    title: "AWS Security",
    duration: "08:16",
    url: "",
  },

  {
    title: "AWS Solution Architect Certification - Success Story Of Vinooth ",
    duration: "03:16",
    url: "",
  },

  {
    title: "AWS Training  - AWS Certified Solutions Architect Training",
    duration: "24:50",
    url: "",
  },

  {
    title: "AWS  Storage and Content Delivery",
    duration: "26:11",
    url: "",
  },

  {
    title: "AWS Certified Solutions Architect",
    duration: "23:17",
    url: "",
  },
  {
    title: "Cloud Computing",
    duration: "24:37",
    url: "",
  },

  {
    title: "History And Evolution Of AWS",
    duration: "33:24",
    url: "",
  },

  {
    title: "How To Become An AWS Solutions Architect",
    duration: "10:16",
    url: "",
  },

  {
    title: "How To Become AWS Certified Cloud Practitioner part - 1",
    duration: "18:38",
    url: "",
  },

  {
    title: "How To Become AWS Certified Cloud Practitioner part - 2",
    duration: "18:38",
    url: "",
  },

  {
    title: "How To Create AWS Account",
    duration: "04:39",
    url: "",
  },

  {
    title: "Introduction to Advanced Cloud Computing",
    duration: "03:27",
    url: "",
  },

  {
    title: "Introduction to AWS Database Migration Service Course",
    duration: "04:16",
    url: "",
  },

  {
    title: "Introduction To AWS Developer Associate Certification",
    duration: "04:30",
    url: "",
  },

  {
    title: "Introduction To AWS Lambda",
    duration: "04:57",
    url: "",
  },

  {
    title: "Introduction To AWS SysOps Associate Certification",
    duration: "04:37",
    url: "",
  },

  {
    title: "Kubernetes On AWS EC2",
    duration: "39:50",
    url: "",
  },

  {
    title: "Planning And Designing Cloud Infrastructure",
    duration: "01:12:34",
    url: "",
  },

  {
    title: "Top 10 Reasons to Choose AWS",
    duration: "05:21",
    url: "",
  },

  {
    title: "What is AWS?",
    duration: "10:02",
    url: "",
  },

  {
    title: "What is Cloud Computing?",
    duration: "12:40",
    url: "",
  },
];

const DockerizationResources = [
  {
    title: "Dockerizing An Application",
    duration: "21:09",
    url: "",
  },
];

const GithubResources = [
  {
    title: "Git & GitHub Fundamentals In Depth",
    duration: "43:05",
    url: "",
  },
];

const KubernetesResources = [
  {
    title: "Kubernetes  - Containerize Your Apps!",
    duration: "02:58:00",
    url: "",
  },

  {
    title: "Kubernetes Architecture On AWS EC2 ",
    duration: "39:50",
    url: "",
  },
];

const LinuxResources = [
  {
    title: "What is LINUX?",
    duration: "08:26",
    url: "",
  },

  {
    title: "History of LINUX",
    duration: "08:00",
    url: "",
  },

  {
    title: "Using EC2 As Your Virtual Server",
    duration: "11:58",
    url: "",
  },

  {
    title: "Familiarizing yourself with the Linux Terminal",
    duration: "14:02",
    url: "",
  },
  {
    title: "Linux Commands part - 1",
    duration: "15:53",
    url: "",
  },

  {
    title: "Linux Commands part - 2",
    duration: "12:36",
    url: "",
  },

  {
    title: "Understanding Directory Tree Structure on Linux",
    duration: "12:37",
    url: "",
  },

  {
    title: "Linux Directories part - 1",
    duration: "06:14",
    url: "",
  },

  {
    title: "Linux Directories part - 2",
    duration: "11:17",
    url: "",
  },

  {
    title: "Linux Directories part - 3",
    duration: "13:11",
    url: "",
  },

  {
    title: "Linux Directories part - 4",
    duration: "09:40",
    url: "",
  },

  {
    title: "Linux Directories part - 5",
    duration: "18:31",
    url: "",
  },

  {
    title: "Linux Directories part - 6",
    duration: "14:22",
    url: "",
  },

  {
    title: "Linux Terminal File Descriptors And Redirections",
    duration: "19:06",
    url: "",
  },

  {
    title: "Linux Terminal  - Users Groups Permissions",
    duration: "12:45",
    url: "",
  },

  {
    title: "Linux Terminal Permissions part - 1",
    duration: "10:20",
    url: "",
  },

  {
    title: "Linux Terminal Permissions part - 2",
    duration: "06:51",
    url: "",
  },

  {
    title: "Linux Terminal - Archiving And Compression up",
    duration: "17:18",
    url: "",
  },

  {
    title: "How to Install Software on Linux - Package Management",
    duration: "08:30",
    url: "",
  },

  {
    title: "How to Install Software on Linux - Package Management Part 2",
    duration: "14:57",
    url: "",
  },

  {
    title: "About Package Manager   SNAP",
    duration: "05:42",
    url: "",
  },

  {
    title: "Introduction to SSH",
    duration: "11:35",
    url: "",
  },

  {
    title: "OPENSSH SERVER - Part 2",
    duration: "16:49",
    url: "",
  },

  {
    title: "SUDOERS - SSHD Configuration files",
    duration: "13:03",
    url: "",
  },

  {
    title: "How To Securely Upload And Downloading Files remotely SFTP - SCP",
    duration: "14:33",
    url: "",
  },

  {
    title: "Process Management part - 1",
    duration: "16:06",
    url: "",
  },

  {
    title: "33. Process Management part - 2",
    duration: "18:17",
    url: "",
  },

  {
    title: "Process Management part - 3",
    duration: "12:43",
    url: "",
  },

  {
    title: "End To End  Project 11 - SSH_Ansible ",
    duration: "02:11:27",
    url: "",
  },

  {
    title: "Formatting and Mounting Linux Partitions",
    duration: "14:29",
    url: "",
  },

  {
    title: "More lvcreate Options",
    duration: "04:03",
    url: "",
  },

  {
    title: "Move a Volume Group to Another Computer",
    duration: "09:53",
    url: "",
  },

  {
    title: "ON-BOARDING SESSION – TALK WITH DARE",
    duration: "01:15:53",
    url: "",
  },
  {
    title: "Shell Scripting Crash Course",
    duration: "32:18",
    url: "",
  },
];

const LogicalResources = [
  {
    title: "Add a Drive to a Logical Volume",
    duration: "11:13",
    url: "",
  },

  {
    title: "Automatically mount Linux partitions with fstab",
    duration: "23:30",
    url: "",
  },

  {
    title: "Create Linux Partitions with fdisk",
    duration: "25:53",
    url: "",
  },

  {
    title: "Create Linux Partititions with gdisk",
    duration: "12:07",
    url: "",
  },

  {
    title: "Create Your First Linux Logical Volume",
    duration: "24:41",
    url: "",
  },
  {
    title: "Creating Linux Swap Partitions",
    duration: "08:57",
    url: "",
  },
  {
    title: "Logical Volumes--The Basics",
    duration: "02:41",
    url: "",
  },

  {
    title: "Striped and Mirrored Logical Volumes",
    duration: "12:46",
    url: "",
  },
];

export {
  AWSResources,
  LinuxResources,
  DockerizationResources,
  GithubResources,
  KubernetesResources,
  LogicalResources,
  CourseLists,
  TrainingNote,
};
