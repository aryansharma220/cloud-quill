
export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: "",
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
    <h1>Resume</h1>

<h2>Personal Information</h2>
<p>
  <strong>Name:</strong> Full name of the applicant.<br>
  <strong>Address:</strong> Complete address.<br>
  <strong>Phone:</strong> Contact number.<br>
  <strong>Email:</strong> Email address.<br>
  <strong>LinkedIn:</strong> <a href="LinkedIn URL">LinkedIn Profile</a><br>
  <strong>GitHub:</strong> <a href="GitHub URL">GitHub Profile</a>
</p>

<h2>Objective</h2>
<p>
  A brief statement summarizing your career goals and what you aim to achieve in your next role.
</p>

<h2>Education</h2>
<ul>
  <li>
    <strong>Degree:</strong> Name of the degree (e.g., B.Tech in Computer Science)<br>
    <strong>Institution:</strong> Name of the university or college<br>
    <strong>Year:</strong> Duration (e.g., 2022-2026)<br>
    <strong>CGPA:</strong> CGPA or Percentage (if applicable)
  </li>
  <!-- Add more education entries if needed -->
</ul>

<h2>Experience</h2>
<ul>
  <li>
    <strong>Role:</strong> Job Title<br>
    <strong>Organization:</strong> Name of the organization<br>
    <strong>Duration:</strong> Start Date - End Date<br>
    <strong>Responsibilities:</strong> Brief description of key contributions and achievements
  </li>
  <!-- Add more experience entries if needed -->
</ul>

<h2>Projects</h2>
<ul>
  <li>
    <strong>Project Name:</strong> Name of the project<br>
    <strong>Technologies:</strong> List of technologies used<br>
    <strong>Description:</strong> Brief overview of the project and your contributions<br>
    <strong>Achievements:</strong> Notable outcomes or statistics
  </li>
  <!-- Add more projects if needed -->
</ul>

<h2>Skills</h2>
<ul>
  <li>Technical Skills: List of programming languages, frameworks, tools, etc.</li>
  <li>Soft Skills: E.g., Communication, Leadership, Teamwork</li>
</ul>

<h2>Certifications</h2>
<ul>
  <li>Certification Name, Organization, Date (if applicable)</li>
  <!-- Add more certifications if needed -->
</ul>

<h2>Achievements</h2>
<ul>
  <li>Specific awards, rankings, or recognitions</li>
  <!-- Add more achievements if needed -->
</ul>

<h2>Interests</h2>
<p>List of hobbies or interests relevant to your profile.</p>

<h2>References</h2>
<p>
  Available upon request (or you can provide specific names and contact details if preferred).
</p>

    `
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
    <h1>Cover Letter</h1>
<h2>Sender's Address</h2>
<p>Full address of the sender, including name, contact details, and email.</p>
<h2>Date</h2>
<p>The date the letter is written.</p>
<h2>Recipient's Address</h2>
<p>Full address of the recipient, including name, title, company, and contact details.</p>
<h2>Salutation</h2>
<p>Formal greeting (e.g., Dear [Recipient's Name] or Hiring Manager).</p>
<h2>Introduction</h2>
<p>A brief introduction mentioning the position applied for and how you learned about it. Include a strong opening sentence to grab attention.</p>
<h2>Body</h2>
<p>
  <strong>First Paragraph:</strong> Highlight your qualifications, skills, and experience relevant to the position.<br>
  <strong>Second Paragraph:</strong> Provide specific examples or accomplishments that demonstrate your suitability for the role.<br>
  <strong>Third Paragraph:</strong> Explain why you're interested in the company and how you align with its goals and values.
</p>
<h2>Closing</h2>
<p>
  Reiterate your enthusiasm for the position, express appreciation for considering your application, and indicate your availability for an interview. Include a call to action, such as stating you look forward to hearing from them.
</p>
<h2>Closing Statement</h2>
<p>Formal closing statement (e.g., Sincerely, Regards, Yours faithfully).</p>
<h2>Signature</h2>
<p>
  Handwritten signature (if printed).<br>
  Full name.<br>
  Contact information (optional for redundancy).
</p>

    `
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
    <h1>Business Letter</h1>
<h2>Sender's Address</h2>
<p>Full address of the sender, including name, company (if applicable), and contact details.</p>
<h2>Date</h2>
<p>The date the letter is written.</p>
<h2>Recipient's Address</h2>
<p>Full address of the recipient, including name, title, company, and contact details.</p>
<h2>Subject</h2>
<p>A brief and clear subject line indicating the purpose of the letter.</p>
<h2>Salutation</h2>
<p>Formal greeting (e.g., Dear [Recipient's Name] or To Whom It May Concern).</p>
<h2>Body</h2>
<p>
  <strong>Introduction:</strong> A brief opening stating the purpose of the letter.<br>
  <strong>Main Content:</strong> Detailed explanation or discussion of the subject.<br>
  <strong>Conclusion:</strong> A concise closing remark summarizing the letter's intent or requesting action.
</p>
<h2>Closing</h2>
<p>Formal closing statement (e.g., Sincerely, Regards, Yours faithfully).</p>
<h2>Signature</h2>
<p>
  Handwritten signature (if printed).<br>
  Sender's name and title.<br>
  Company name (if applicable).
</p>
<h2>Enclosures</h2>
<p>If applicable, mention any documents included with the letter.</p>
<h2>CC</h2>
<p>If applicable, list the names of others who are receiving a copy of the letter.</p>

    `
  },
  {
    id: "letter",
    label: "Letter Document",
    imageUrl: "/letter.svg",
    initialContent: `
    <h1>Letter</h1>
<h2>Sender's Address</h2>
<p>Full address of the sender.</p>
<h2>Date</h2>
<p>The date the letter is written.</p>
<h2>Recipient's Address</h2>
<p>Full address of the recipient.</p>
<h2>Subject</h2>
<p>A concise summary of the letter's purpose.</p>
<h2>Salutation</h2>
<p>Greeting (e.g., Dear [Recipient's Name]).</p>
<h2>Body</h2>
<p>Detailed content of the letter, typically split into an introduction, main content, and conclusion.</p>
<h2>Closing</h2>
<p>Polite closing statement (e.g., Yours sincerely, Best regards).</p>
<h2>Signature</h2>
<p>Sender's name and signature (if applicable).</p>

    `
  },
  {
    id: "project-proposal",
    label: "Project Proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
    <h1>Project Proposal</h1>
<h2>Introduction</h2>
<p>Overview of the project idea and its significance.</p>
<h2>Objectives</h2>
<p>Key goals and desired outcomes of the project.</p>
<h2>Methodology</h2>
<p>Approach, tools, and techniques to be used for project execution.</p>
<h2>Deliverables</h2>
<p>Expected outputs and results from the project.</p>
<h2>Timeline</h2>
<p>Schedule of key milestones and deadlines.</p>
<h2>Budget</h2>
<p>Estimated costs and funding requirements.</p>
<h2>Conclusion</h2>
<p>Summary of the proposal and a call to action for approval or support.</p>
`
  },
  {
    id: "software-proposal",
    label: "Software Proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
      <h1>Software Development Proposal</h1>
<h2>Project Overview</h2>
<p>Brief description of the proposed software development project.</p>
<h2>Scope of Work</h2>
<p>Detailed breakdown of project deliverables and requirements.</p>
<h2>Timeline</h2>
<p>Project milestones and delivery schedule.</p>
<h2>Budget</h2>
<p>Cost breakdown and payment terms.</p>

    `,
  },
];
