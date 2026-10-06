import photo from '../assets/riyo.png'
import roomntoolHome from '../assets/roomntool-home.png'
import roomntoolRooms from '../assets/roomntool-rooms.png'
import sicarCatalog from '../assets/sicar-catalog.png'
import sicarAdmin from '../assets/sicar-admin.png'
import sicarOrders from '../assets/sicar-orders.png'
import jatimeal from '../assets/jatimeal.png'
import DashboardArdish from '../assets/dashboard_ardis.png'
import PengaturanArdish from '../assets/pengaturan_adris.png'


// Semua teks portofolio ada di file ini. Ubah di sini, tampilan ikut berubah.

export const profile = {
  name: 'Riyo Jessenniako Nurmalaya',
  roles: ['Fullstack Developer', 'Machine Learning', 'IT Support'],
  school: 'Informatics Graduate, Universitas Internasional Semen Indonesia',
  photo,
  headline:
    'Recent Informatics graduate with experience as a full-stack developer and in training machine learning models.',
  about:
    'Recent Informatics graduate (S1) with a background in web and mobile application development, data analysis, machine learning, and IT technical support. I have hands-on experience building web-based systems through an internship and several projects, and I applied machine learning end to end, from text preprocessing and Artificial Neural Networks to hyperparameter optimization, in my sentiment analysis thesis. I also hold two Oracle certifications (including AI Foundations) and have leadership experience as Chair and Division Head.',
  email: 'riyo.nurmalaya@gmail.com',
  phone: '085788688573',
  phoneHref: 'tel:+6285788688573',
  github: { label: 'github.com/RiyoNur', href: 'https://github.com/RiyoNur' },
  linkedin: {
    label: 'riyo-jessenniako-nurmalaya22',
    href: 'https://www.linkedin.com/in/riyo-jessenniako-nurmalaya22',
  },
  cv: '/Portfolio_Riyo_Jessenniako_Nurmalaya.pdf',
}

export const projects = [
  {
    id: 'thesis',
    title: 'YouTube Comment Sentiment Analysis on DPR Protests',
    type: 'Machine Learning + Web',
    year: '2026',
    context: 'Undergraduate thesis',
    role: 'Researcher & Developer',
    period: 'Feb - Jul 2026',
    summary:
      'A sentiment analysis study of 3,563 YouTube comments using an Artificial Neural Network, delivered with a web-based system prototype.',
    points: [
      'Collected data with the YouTube Data API and represented text with TF-IDF.',
      'Optimized hyperparameters with Bayesian Optimization and handled imbalanced data with SMOTETomek.',
      'Raised model accuracy from 84% to 86%.',
      'Built a web prototype with Python and Flask.',
    ],
    stack: ['Python', 'Flask', 'TensorFlow/Keras', 'Scikit-learn'],
    pipeline: [
      'YouTube Data API',
      'TF-IDF',
      'SMOTETomek',
      'Artificial Neural Network',
      'Bayesian Optimization',
      'Flask prototype',
    ],
  },
  {
    id: 'roomntool',
    title: 'ROOMNTOOL',
    type: 'Room Booking System',
    year: '2025',
    context: 'PT Alur Pelayaran Barat (APBS), Surabaya',
    role: 'Full-Stack Developer',
    period: 'Jul - Sep 2025',
    summary:
      'A web-based meeting room reservation information system that helps PT APBS manage meeting room bookings and usage in an organized way.',
    points: [
      'Room listings per building with category, floor, facilities, and photos.',
      'Availability checking and automatic validation of schedule conflicts.',
      'Admin panel for room management, with authentication for admin and user roles.',
    ],
    stack: ['PHP', 'Laravel', 'Bootstrap', 'jQuery', 'HTMX', 'SQLite'],
    images: [
      { src: roomntoolHome, alt: 'ROOMNTOOL landing page for PT Alur Pelayaran Barat Surabaya' },
      { src: roomntoolRooms, alt: 'ROOMNTOOL room list with date and availability filters' },
    ],
  },
  {
    id: 'sicar',
    title: 'SICAR',
    type: 'Vehicle Rental System',
    year: '2024-25',
    context: 'PT Sinergi Mitra Investama (SMI), internship project',
    role: 'Full-Stack Developer (Intern)',
    period: 'Nov 2024 - Feb 2025',
    summary:
      'A web-based vehicle rental information system that helps PT SMI manage its vehicle rental services.',
    points: [
      'Vehicle catalog, rental cart, booking, rent and rent-to-own options, and automatic discounts based on rental duration.',
      'Payment proof upload and order status notifications.',
      'Admin panel (vehicles, orders, payments) with role-based authentication.',
    ],
    stack: ['PHP', 'Laravel', 'Livewire', 'Tailwind CSS', 'Flowbite', 'SQLite'],
    images: [
      { src: sicarCatalog, alt: 'SICAR vehicle catalog with three available cars' },
      { src: sicarAdmin, alt: 'SICAR admin form for adding a new vehicle' },
      { src: sicarOrders, alt: 'SICAR customer order list and payment history' },
    ],
  },
  {
    id: 'jatimeal',
    title: 'JATIMeal',
    type: 'Cuisine Web App (Group)',
    year: '2024-25',
    context: 'Group project (5 members)',
    role: 'Backend Developer',
    period: 'Dec 2024 - Jan 2025',
    summary:
      'A web-based application introducing East Javanese cuisine, with ingredient filtering and weekly menu planning.',
    points: [
      'Built the backend: ingredient filtering, weekly menu planning, and menu management.',
      'Handled application hosting and deployment.',
      'Collaborated with a Product Manager, Frontend Developer, UI/UX Designer, and Quality Assurance.',
    ],
    stack: ['Laravel', 'MySQL'],
    images: [{ src: jatimeal, alt: 'JATIMeal promotional poster showing the app on a laptop', poster: true }],
    link: { label: 'jatimeal.my.id', href: 'https://jatimeal.my.id' },
  },
  {
  id: 'ardis',
  title: 'ARDIS',
  type: 'Archive Records Destruction Information System',
  year: '2026',
  context: 'ARDIS — Web-Based Enterprise Archive Retention & Destruction Management System ',
  role: 'Frond-end Developer',
  period: 'Juli 2026',
  summary:
    'A web-based information system for managing the archive destruction process, from proposal and approval to temporary storage and shredding.',
  points: [
    'Dashboard with summary statistics and charts of archives destroyed per month.',
    'Multi-step workflow: destruction proposals, approval, temporary storage (TPS), and counting before destruction.',
    'Employee data management and login with session-based authentication.',
  ],
  stack: ['PHP', 'Laravel', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'SQLite'],
  images: [
    { src: DashboardArdish, alt: 'ARDIS dashboard with archive statistics and charts' },
    { src: PengaturanArdish, alt: 'ARDIS settings page' },
  ],
},
  {
    id: 'jaringan-kasih',
    title: 'Jaringan Kasih',
    type: 'Crowdfunding Mobile App (Group)',
    year: '2024-25',
    context: 'Group project',
    role: 'Mobile Developer',
    period: 'Dec 2024 - Jan 2025',
    summary: 'A crowdfunding mobile app prototype.',
    points: [
      'Donation campaign list (funds raised and target) and campaign detail page.',
      'Registration, login, and account settings using SharedPreferences.',
    ],
    stack: ['Flutter', 'Dart', 'SharedPreferences'],
  },
]

export const skills = [
  {
    group: 'Technical',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'PHP',
      'Laravel',
      'MySQL',
      'Python',
      'Flask',
      'Flutter',
      'Dart',
      'Machine Learning',
      'Microsoft Office (Word, Excel, PowerPoint)',
    ],
  },
  {
    group: 'Soft skills',
    items: [
      'Problem solving',
      'Public speaking',
      'Communication',
      'Teamwork',
      'Attention to detail in documentation',
    ],
  },
  {
    group: 'Languages',
    items: ['Javanese (Native)', 'Indonesian (Active)', 'English (Passive)'],
  },
]

export const experience = [
  {
    title: 'Staff IT (Intern)',
    org: 'PT Sinergi Mitra Investama',
    period: 'Nov 2024 - Feb 2025',
    detail:
      'Data processing, project documentation, web application development, and user technical support.',
  },
  {
    title: 'General Chair',
    org: 'Solidaritas Musik (SIMS) Student Club, UISI',
    period: 'Oct 2024 - Oct 2025',
    detail: 'Previously served as Vice General Chair (2023-2024).',
  },
  {
    title: 'Head of PSDM Division',
    org: 'Informatics Student Association (HMIF), UISI',
    period: 'Oct 2024 - Oct 2025',
    detail: 'Led seven staff members.',
  },
  {
    title: 'Event Chair',
    org: 'Vision Informatika UISI and LKMM TD UISI',
    period: 'Oct 2024 and Apr 2024',
    detail: 'Vision Informatika UISI (Oct 2024) and LKMM TD UISI (Apr 2024).',
  },
]

export const certifications = [
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    date: 'Oct 2025',
  },
  {
    title: 'Oracle Fusion Cloud Applications ERP Process Essentials Certified - Rel 1',
    issuer: 'Oracle',
    date: 'Oct 2025',
  },
]

export const education = {
  school: 'Universitas Internasional Semen Indonesia, Gresik',
  degree: "Bachelor's Degree in Informatics",
  gpa: 'GPA 3.29/4.00',
  period: 'Oct 2022 - Oct 2026',
}

export const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
