import { asset } from './assets';
import { motion } from 'framer-motion';
import { BrainCircuit, Bot, Database, ScanEye, Code2, Network, Cpu, Workflow, GraduationCap, Award, CalendarDays, Leaf, ChartNoAxesCombined } from 'lucide-react';

const reveal = { initial: { opacity: 0, y: 22 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .12 }, transition: { duration: .55 } };
const technologies = [[BrainCircuit, 'LLMs'], [ScanEye, 'Computer Vision'], [Database, 'RAG'], [Bot, 'AI Agents'], [Code2, 'Python'], [Network, 'Deep Learning'], [Cpu, 'YOLO'], [Workflow, 'FastAPI']];

export function NeuralBackground() {
  return <div className="neural-background" aria-hidden="true">
    <div className="ambient ambient-blue"/><div className="ambient ambient-violet"/>
    <svg viewBox="0 0 1440 1000" preserveAspectRatio="xMidYMid slice">
      <g className="neural-lines"><path d="M40 200 220 90 420 260 620 120 820 320 1080 150 1370 260M40 200 180 490 420 260 530 560 820 320 960 620 1370 260M180 490 100 850 380 740 530 560 750 880 960 620 1240 850 1370 260M220 90 180 490M620 120 530 560M1080 150 960 620M380 740 750 880 1240 850"/></g>
      {[[40,200],[220,90],[420,260],[620,120],[820,320],[1080,150],[1370,260],[180,490],[530,560],[960,620],[100,850],[380,740],[750,880],[1240,850]].map(([cx,cy],i)=><circle key={i} cx={cx} cy={cy} r={i%3===0?4:2.5} style={{animationDelay:`${i*.45}s`}}/>) }
    </svg>
    {Array.from({length:8},(_,i)=><span key={i} className="ambient-bubble" style={{left:`${8+i*12}%`,top:`${15+(i*17)%75}%`,width:12+i*5,height:12+i*5,animationDelay:`-${i*2}s`}}/>)}
  </div>;
}

export function NeuralCore() {
  return <div className="orb" role="img" aria-label="AI core surrounded by Python, LLMs, computer vision, RAG, AI agents, deep learning, YOLO and FastAPI">
    <div className="ring r1"/><div className="ring r2"/><div className="ring r3"/>
    <div className="core"><BrainCircuit aria-hidden="true"/><b>AI</b><small>BUILD · LEARN · IMPACT</small></div>
    {technologies.map(([Icon,label],i)=><span className={`tech-orbit tech-${i}`} key={label} style={{'--delay':`${-i*.7}s`}}><Icon aria-hidden="true"/>{label}</span>)}
  </div>;
}

export function Education() {
  return <div className="education-details"><span><GraduationCap/>AI & Data Science Track</span><span><ChartNoAxesCombined/><strong>3.83 / 4.00</strong> GPA</span><span><Award/>First-Class Honors</span><span><ChartNoAxesCombined/><strong>98%</strong> GAT</span></div>;
}

const experiences = [
  {role:'AI Engineer Intern',company:'Cloud Solutions × Al Habib Medical Group (HMG)',date:'Jan 2026 – Jul 2026',label:'7-MONTH INTERNSHIP',logos:[['cloud_solutions_logo.png','Cloud Solutions']],points:[
    'Developed an AI-powered WhatsApp feedback system using LLMs and NLP to convert unstructured patient feedback into structured insights for real-time hospital analytics.',
    'Built a SQL Agent combining LLM-generated queries with a custom SQL validator to reduce hallucination risk and enforce safe execution.',
    'Evaluated similarity-search and reranking pipelines to improve recommendation relevance and reliability.'
  ],tags:['LLMs & NLP','SQL validation','Semantic retrieval']},
  {role:'Data Analyst Intern',company:'Uptrail',date:'Oct 2025 – Dec 2025',label:'DATA SCIENCE',logos:[['uptrail_logo.png','Uptrail']],points:[
    'Cleaned and analyzed structured datasets, applying statistical and machine learning techniques to support data-driven decisions.',
    'Translated analytical findings into actionable insights for practical business requirements.'
  ],tags:['Data analysis','Machine learning','Business insights']},
  {role:'ML Engineer Intern',company:'RIOTU Lab',date:'Jun 2025 – Aug 2025',label:'RESEARCH & DEVELOPMENT',logos:[['riotu_logo.png','RIOTU Lab']],points:[
    'Built a computer vision system that generated real-time classroom attention scores, bridging AI research with practical deployment.',
    'Applied machine learning model development and evaluation techniques in research-driven projects.'
  ],tags:['Computer vision','Model evaluation','Real-time analytics']},
  {role:'Mathematics Instructor',company:'Tafawoq Platform',label:'TEACHING & MENTORSHIP',logos:[['tafawoq_instructor.jpeg','Tafawoq Platform']],points:[
    'Teach foundations of mathematics through structured explanations that strengthen students’ problem-solving and quantitative reasoning.'
  ],tags:['Mathematics','Problem-solving','Mentorship']}
];

export function ExperienceCards() {
  return <div className="timeline">{experiences.map(item=><motion.article key={item.company} {...reveal}>
    <div className={`company-logos ${item.logos.length>1?'paired-logos':''}`}>
      {item.logos.map(([file,name])=><div className="company-logo" key={file}><img src={asset(file)} alt={`${name} logo`} loading="lazy"/><span>{name}</span></div>)}
    </div>
    <div className="experience-body"><div className="experience-meta"><small>{item.label}</small>{item.date&&<span className="date"><CalendarDays aria-hidden="true"/>{item.date}</span>}</div>
      <h3>{item.role}</h3><h4>{item.company}</h4>
      <ul className="experience-points">{item.points.map(point=><li key={point}>{point}</li>)}</ul>
      <div className="pills">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
    </div>
  </motion.article>)}</div>;
}

export function ResearchMetrics() {
  return <div className="research-dashboard"><div className="research-mark"><Leaf/><span>DEEPLEAF / MODEL EVALUATION</span></div>
    <div className="accuracy-panel"><span>Combined accuracy</span><strong>95.7<span>%</span></strong><div className="metric-rule"/><small>Neural-network leaf classification</small></div>
    <div className="accuracy-panel secondary"><span>Test accuracy</span><strong>88.9<span>%</span></strong><small>Performance on the test set</small></div>
    <div className="dataset-summary"><span><b>600</b> leaf images</span><span><b>20</b> classes</span></div>
  </div>;
}
