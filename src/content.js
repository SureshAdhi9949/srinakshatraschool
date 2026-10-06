// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH FOR ALL SCHOOL CONTENT
// Edit this file to update text, links and contact details everywhere.
//
// Verified sources used:
//   • School brief supplied by the client (address, phone, email, names)
//   • Official homepage https://srinakshatraschool.com/ (welcome text, principal quote)
//   • CBSE SARAS public record for affiliation no. 130606
//
// Anything not verified is left as `null` and the UI shows a graceful
// "to be added" state instead of inventing information.
// ─────────────────────────────────────────────────────────────────────────────

export const SCHOOL = {
  name: 'Sri Nakshatra School',
  tagline: 'A School with a Soul',
  officialSite: 'https://srinakshatraschool.com/',

  phone: '9339999334',
  phoneIntl: '+919339999334',
  // WhatsApp uses the same verified number. Set to false to hide every WhatsApp button.
  whatsappEnabled: true,
  whatsappNumber: '919339999334',
  email: 'Srinakshatraschool@gmail.com',

  addressLines: [
    'TSNR Avenue,',
    'Opp. Mega Water Purifying Plant,',
    'Ankalamma Temple Road,',
    'Merlapalem,',
    'Andhra Pradesh – 533237',
  ],
  mapsQuery: 'TSNR Avenue, Ankalamma Temple Road, Merlapalem, Andhra Pradesh 533237',

  affiliationNo: 130606,
  founded: 2018,
  society: 'Sri Nakshatra Education Society',
  affiliationFrom: '1 April 2022',
  affiliationTo: '31 March 2027',
  sarasUrl: 'https://saras.cbse.gov.in/SARAS/AffiliatedList/AfflicationDetails/130606',
};

export const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'academics', label: 'Academics' },
  { id: 'why', label: 'Why Us' },
  { id: 'campus', label: 'Campus Life' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'news', label: 'News & Events' },
  { id: 'contact', label: 'Contact' },
];

// Every page section id → which nav item should light up while it is on screen.
export const SECTION_TO_NAV = {
  home: 'home',
  stats: 'home',
  about: 'about',
  why: 'why',
  academics: 'academics',
  cbse: 'academics',
  beyond: 'campus',
  campus: 'campus',
  leadership: 'leadership',
  philosophy: 'leadership',
  gallery: 'gallery',
  news: 'news',
  documents: 'news',
  admissions: 'contact',
  contact: 'contact',
};

// Adapted from the welcome text on the official homepage.
export const WELCOME =
  'Nakshatra is the pioneer, with a unique vision, in bringing global education through the CBSE system to Ravulapalem. It runs on a clear, visionary, project-oriented approach and the CCE exam pattern, imparting the best education through child-centric methodology.';

export const STATS = [
  { icon: 'shield', value: null, label: 'CBSE Affiliated', sub: 'Central Board of Secondary Education' },
  { icon: 'file', value: SCHOOL.affiliationNo, label: 'Affiliation No.', sub: 'As listed on CBSE SARAS' },
  { icon: 'calendar', value: SCHOOL.founded, label: 'Established', sub: 'Year of foundation' },
  { icon: 'heart', value: null, label: 'Holistic Learning', sub: 'Child-centric methodology' },
];

export const SOUL_TIMELINE = [
  'Every Child Is Unique',
  'Meaningful Learning',
  'Skill Development',
  'Creativity',
  'Confidence',
  'Lifelong Learning',
  'Future Leaders',
];

export const WHY = [
  {
    icon: 'globe',
    title: 'Language Policy',
    text: 'English-medium learning, with a thoughtful approach to building strong language skills from the early years.',
  },
  {
    icon: 'users',
    title: 'Quality Classrooms',
    text: 'A focus on rich teacher–student interaction that makes every lesson more engaging and effective.',
  },
  {
    icon: 'heart',
    title: 'Remedial Classes',
    text: 'Support for students according to their individual learning abilities and academic needs.',
  },
  {
    icon: 'user',
    title: 'Individualized Learning',
    text: 'We recognise that every child has a unique learning style, and we teach accordingly.',
  },
];

export const JOURNEY = [
  { icon: 'layers', title: 'Curriculum', text: 'A CBSE-guided course of study.' },
  { icon: 'flask', title: 'Experiential Learning', text: 'Learning by doing, through projects.' },
  { icon: 'compass', title: 'Real-world Applications', text: 'Ideas connected to everyday life.' },
  { icon: 'tool', title: 'Skill Development', text: 'Practical skills beyond textbooks.' },
  { icon: 'bulb', title: 'Critical Thinking', text: 'Asking why, and finding answers.' },
  { icon: 'sparkles', title: 'Creativity', text: 'Room to imagine and express.' },
  { icon: 'smile', title: 'Confidence', text: 'Belief in one’s own abilities.' },
  { icon: 'rocket', title: 'Future Readiness', text: 'Prepared for what comes next.' },
];

export const BEYOND = [
  { icon: 'sparkles', tone: 'violet', title: 'Creativity', text: 'Space to imagine, make and express ideas.', img: 'beyond/creativity' },
  { icon: 'music', tone: 'sun', title: 'Cultural Activities', text: 'Stages for talent, tradition and togetherness.', img: 'beyond/cultural' },
  { icon: 'trophy', tone: 'green', title: 'Sports', text: 'Teamwork, fitness and the joy of play.', img: 'beyond/sports' },
  { icon: 'flask', tone: 'sky', title: 'Practical Learning', text: 'Hands-on experiences that bring lessons alive.', img: 'beyond/practical' },
  { icon: 'clipboard', tone: 'blue', title: 'Projects', text: 'Project-oriented learning that builds understanding.', img: 'beyond/projects' },
  { icon: 'gift', tone: 'sun', title: 'Celebrations', text: 'Festivals and special days celebrated as one school family.', img: 'beyond/celebrations' },
  { icon: 'users', tone: 'green', title: 'Community Participation', text: 'Learning to contribute and care beyond the classroom.', img: 'beyond/community' },
];

export const CAMPUS = [
  { id: 'c1', img: 'campus/campus', title: 'Our Campus', alt: 'Sri Nakshatra School campus', tone: 'blue', icon: 'building' },
  { id: 'c2', img: 'campus/classroom', title: 'Classrooms', alt: 'A classroom at Sri Nakshatra School', tone: 'sky', icon: 'book' },
  { id: 'c3', img: 'campus/activity', title: 'Student Activities', alt: 'Students taking part in an activity', tone: 'green', icon: 'users' },
  { id: 'c4', img: 'campus/event', title: 'School Events', alt: 'A school event', tone: 'sun', icon: 'gift' },
  { id: 'c5', img: 'campus/project', title: 'Student Projects', alt: 'Students showing a project', tone: 'violet', icon: 'clipboard' },
];

// Principal's quote is taken from the official homepage.
export const LEADERS = [
  {
    key: 'chairman',
    name: 'Mr. Chalapathi Rao',
    role: 'Chairman',
    img: 'leadership/chairman-profile',
    message:
      'At Sri Nakshatra School, every child deserves an environment that brings out curiosity, confidence and character. We are committed to shaping learners who are not only academically strong but also compassionate, responsible and ready for a changing world.',
  },
  {
    key: 'principal',
    name: 'ASV Chalapathi Rao',
    role: 'Principal',
    img: 'leadership/principal-profile',
    message:
      'Empowering minds, nurturing spirits—Sri Nakshatra students, where potential meets passion, and dreams take flight. Bright futures, limitless possibilities!',
  },
];

export const PHILOSOPHY_STEPS = [
  { icon: 'sun', label: 'Dream' },
  { icon: 'search', label: 'Discover' },
  { icon: 'book', label: 'Learn' },
  { icon: 'sparkles', label: 'Create' },
  { icon: 'trending', label: 'Grow' },
  { icon: 'flag', label: 'Lead' },
];

export const GALLERY_CATEGORIES = [
  'All',
  'Student Achievements',
  'Utsavs',
  'Exemplary Projects',
  'Unique Celebrations',
  'Campus Life',
];

// Drop real photos into public/images/gallery/<id>.webp (or .jpg/.png) and they appear automatically.
export const GALLERY = [
  { id: 'g1', cat: 'Student Achievements', title: 'Student Achievement', tone: 'blue', icon: 'flag', ratio: 'tall' },
  { id: 'g2', cat: 'Utsavs', title: 'Utsavs', tone: 'sun', icon: 'music', ratio: 'wide' },
  { id: 'g3', cat: 'Exemplary Projects', title: 'Exemplary Projects', tone: 'violet', icon: 'clipboard', ratio: 'sq' },
  { id: 'g4', cat: 'Utsavs', title: 'School Celebration', tone: 'green', icon: 'gift', ratio: 'tall' },
  { id: 'g5', cat: 'Campus Life', title: 'Campus Life', tone: 'sky', icon: 'building', ratio: 'wide' },
  { id: 'g6', cat: 'Utsavs', title: 'Utsavs', tone: 'violet', icon: 'sparkles', ratio: 'sq' },
  { id: 'g7', cat: 'Student Achievements', title: 'Awards & Recognition', tone: 'sun', icon: 'star', ratio: 'wide' },
  { id: 'g8', cat: 'Exemplary Projects', title: 'Exemplary Projects', tone: 'sky', icon: 'flask', ratio: 'tall' },
  { id: 'g9', cat: 'Unique Celebrations', title: 'Unique Celebrations', tone: 'blue', icon: 'gift', ratio: 'sq' },
  { id: 'g10', cat: 'Campus Life', title: 'Campus Life', tone: 'green', icon: 'users', ratio: 'wide' },
].map((g) => ({ ...g, img: `gallery/${g.id}`, alt: `${g.title} at Sri Nakshatra School` }));

// The official homepage publishes these update channels. Cards link to it.
export const NEWS = [
  { id: 'n1', icon: 'sun', tone: 'sun', title: 'Thought for the Day', text: 'A daily thought for students, shared on the official school website.' },
  { id: 'n2', icon: 'building', tone: 'blue', title: 'What’s Happening in School', text: 'Follow school activities and updates as they are posted by the school.' },
  { id: 'n3', icon: 'calendar', tone: 'sky', title: 'Today’s News', text: 'The latest school news, published on the official website.' },
  { id: 'n4', icon: 'trophy', tone: 'green', title: 'Star Performer', text: 'Recognising students who shine, as featured by the school.' },
  { id: 'n5', icon: 'file', tone: 'violet', title: 'Special Annexure', text: 'Additional circulars and annexures shared by the school.' },
  { id: 'n6', icon: 'book', tone: 'sun', title: 'Spell Bee Words', text: 'Word lists for Telugu, Hindi and English Spell Bee practice.' },
].map((n) => ({ ...n, img: `news/${n.id}`, url: SCHOOL.officialSite }));

// url: null → card shows a disabled "Link to be added" state.
// Fill in `url` (and `download: true` for direct files) as documents are provided by the school.
export const DOCUMENTS = [
  { title: 'CBSE Affiliation Details (SARAS)', icon: 'shield', url: SCHOOL.sarasUrl, download: false },
  { title: 'Affiliation Order', icon: 'file', url: 'https://srinakshatraschool.com/cbse-confirm-letter/' },
  { title: 'Recognition Certificate', icon: 'file', url: 'https://srinakshatraschool.com/recognition-certificate-1-to-10-th/' },
  { title: 'Building Safety Certificate', icon: 'file', url: 'https://srinakshatraschool.com/fitness-certificate/' },
  { title: 'Fire Certificate', icon: 'file', url: 'https://srinakshatraschool.com/fire-certificate/' },
  { title: 'Safe Drinking Water Certificate', icon: 'file', url: 'https://srinakshatraschool.com/safe-drinking-water/' },
  { title: 'Sanitary Certificate', icon: 'file', url: 'https://srinakshatraschool.com/sanitary-certificate/' },
  { title: 'Land Certificate', icon: 'file', url: 'https://srinakshatraschool.com/certificate-of-land/' },
  { title: 'Academic Calendar', icon: 'calendar', url: 'https://srinakshatraschool.com/academic-calender/' },
  { title: 'Society Register', icon: 'file', url: 'https://srinakshatraschool.com/society-register/' },
  { title: 'Parent Teacher Association', icon: 'users', url: 'https://srinakshatraschool.com/parent-teacher-association/' },
  { title: 'Class X Results', icon: 'trophy', url: 'https://srinakshatraschool.com/result-class-x/' },
  { title: 'Other Mandatory Disclosures', icon: 'file', url: 'https://srinakshatraschool.com/mandatory/' },
];

export const FEE_STRUCTURE_URL = 'https://srinakshatraschool.com/fee-structure/';

export const ENQUIRY_CLASSES = [
  'Nursery', 'PP-I', 'Grade I', 'Grade II', 'Grade III', 'Grade IV', 'Grade V',
  'Grade VI', 'Grade VII', 'Grade VIII', 'Grade IX', 'Grade X',
];
