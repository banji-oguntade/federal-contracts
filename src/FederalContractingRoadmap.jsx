import React, { useState } from "react";

const roadmapData = [
  {
    id: "phase-1",
    phase: "Phase 1",
    title: "Build Your Foundation",
    timeline: "Week 1",
    objective:
      "Establish the registrations, business infrastructure, and credibility required to pursue federal opportunities.",
    tasks: [
      {
        id: "sam-registration",
        title: "Complete SAM.gov registration",
        details: [
          "Create or confirm your Login.gov account.",
          "Register the legal business entity.",
          "Complete all required entity validation steps.",
        ],
      },
      {
        id: "uei",
        title: "Obtain the Unique Entity ID",
        details: [
          "Confirm that the UEI is issued and linked to the correct legal entity.",
          "Save the UEI in the company’s shared credentials and compliance records.",
        ],
      },
      {
        id: "cage",
        title: "Receive and verify the CAGE Code",
        details: [
          "Monitor the registration until the CAGE Code is assigned.",
          "Confirm the business name and address match official records.",
        ],
      },
      {
        id: "representations",
        title: "Complete Representations and Certifications",
        details: [
          "Review all certifications carefully.",
          "Ensure ownership, size, and business classifications are accurate.",
        ],
      },
      {
        id: "business-readiness",
        title: "Prepare core business infrastructure",
        details: [
          "EIN",
          "Business bank account",
          "Professional website",
          "Company email address",
          "Capability statement",
          "Business insurance",
          "Past performance examples",
        ],
      },
    ],
  },
  {
    id: "phase-2",
    phase: "Phase 2",
    title: "Select NAICS Codes",
    timeline: "Week 1–2",
    objective:
      "Choose the industry codes that best describe the company’s services and improve discoverability.",
    tasks: [
      {
        id: "primary-naics",
        title: "Select a primary NAICS code",
        details: [
          "541511 — Custom Computer Programming Services",
          "541512 — Computer Systems Design Services",
        ],
      },
      {
        id: "secondary-naics",
        title: "Add relevant secondary NAICS codes",
        details: [
          "541513 — Computer Facilities Management Services",
          "541519 — Other Computer Related Services",
          "541611 — Administrative and General Management Consulting Services",
          "518210 — Computing Infrastructure Providers, Data Processing, Web Hosting, and Related Services",
          "541690 — Other Scientific and Technical Consulting Services",
          "611420 — Computer Training",
        ],
      },
      {
        id: "naics-review",
        title: "Validate code alignment",
        details: [
          "Compare each code with the services currently offered.",
          "Confirm small-business size standards for the selected codes.",
          "Document why each code is relevant.",
        ],
      },
    ],
  },
  {
    id: "phase-3",
    phase: "Phase 3",
    title: "Productize Your Services",
    timeline: "Week 2",
    objective:
      "Turn broad technical capabilities into clear, outcome-focused service offerings.",
    tasks: [
      {
        id: "accessibility-service",
        title: "Define Accessibility Modernization services",
        details: [
          "WCAG 2.2 audits",
          "Section 508 compliance support",
          "VPAT creation support",
          "Accessibility remediation",
          "Screen reader testing",
          "Accessibility automation",
        ],
      },
      {
        id: "frontend-service",
        title: "Define Frontend Engineering services",
        details: [
          "React application development",
          "Angular modernization",
          "Design systems",
          "Performance optimization",
          "Enterprise UI architecture",
        ],
      },
      {
        id: "cloud-service",
        title: "Define Cloud and DevOps services",
        details: [
          "AWS and Azure engineering",
          "Linux administration",
          "CI/CD implementation",
          "Kubernetes",
          "Infrastructure automation",
        ],
      },
      {
        id: "ai-service",
        title: "Define AI and Automation services",
        details: [
          "AI assistants",
          "Workflow automation",
          "Document processing",
          "Internal productivity tools",
        ],
      },
      {
        id: "consulting-service",
        title: "Define Enterprise Consulting services",
        details: [
          "Digital transformation",
          "Technical architecture",
          "Developer enablement",
          "Code quality improvement",
          "Engineering coaching",
        ],
      },
    ],
  },
  {
    id: "phase-4",
    phase: "Phase 4",
    title: "Create the Capability Statement",
    timeline: "Week 2–3",
    objective:
      "Create a concise, one-page federal résumé that communicates the company’s value.",
    tasks: [
      {
        id: "capability-overview",
        title: "Write the company overview",
        details: [
          "Describe the company in two to three sentences.",
          "Lead with digital modernization, accessibility, cloud, and automation.",
        ],
      },
      {
        id: "core-competencies",
        title: "List core competencies",
        details: [
          "Enterprise web applications",
          "WCAG 2.2 and Section 508 accessibility",
          "Cloud engineering",
          "AI solutions",
          "Linux administration",
          "DevOps",
          "Software architecture",
          "React and Node.js development",
          "Automation",
          "API integration",
        ],
      },
      {
        id: "differentiators",
        title: "Document differentiators",
        details: [
          "Enterprise financial-services experience",
          "Accessibility-first engineering",
          "Automation expertise",
          "Modern cloud technologies",
          "Agile delivery",
          "Full-stack consulting capability",
        ],
      },
      {
        id: "company-data",
        title: "Add federal business identifiers",
        details: [
          "UEI",
          "CAGE Code",
          "Primary and secondary NAICS codes",
          "Business certifications",
          "Contact information",
        ],
      },
      {
        id: "past-performance",
        title: "Add past performance examples",
        details: [
          "Use commercial, enterprise, nonprofit, or subcontracting projects.",
          "Focus on measurable outcomes.",
          "Remove confidential client information when necessary.",
        ],
      },
      {
        id: "positioning",
        title: "Approve the positioning statement",
        details: [
          "Helping government agencies modernize digital services through accessible, secure, cloud-native software solutions.",
          "Enterprise Digital Accessibility • Modern Web Engineering • Cloud Solutions • AI Automation",
        ],
      },
    ],
  },
  {
    id: "phase-5",
    phase: "Phase 5",
    title: "Complete SBA and Small-Business Profiles",
    timeline: "Week 3",
    objective:
      "Improve visibility to contracting officers and prime contractors.",
    tasks: [
      {
        id: "dsbs",
        title: "Complete the SBA Dynamic Small Business Search profile",
        details: [
          "Use strong capability keywords.",
          "Add all relevant NAICS codes.",
          "Keep the profile aligned with the capability statement.",
        ],
      },
      {
        id: "certifications",
        title: "Evaluate certification eligibility",
        details: [
          "Small Business",
          "8(a) Business Development",
          "HUBZone",
          "Women-Owned Small Business, when applicable",
          "Service-Disabled Veteran-Owned Small Business, when applicable",
          "State or local minority-owned certifications, when applicable",
        ],
      },
      {
        id: "certification-plan",
        title: "Create a certification action plan",
        details: [
          "Identify required documents.",
          "Assign an owner.",
          "Set target submission dates.",
        ],
      },
    ],
  },
  {
    id: "phase-6",
    phase: "Phase 6",
    title: "Build the Opportunity Pipeline",
    timeline: "Months 1–3",
    objective:
      "Create a disciplined process for identifying realistic federal opportunities.",
    tasks: [
      {
        id: "target-range",
        title: "Define the initial target contract range",
        details: [
          "Prioritize opportunities between $25,000 and $500,000.",
          "Include Sources Sought, RFIs, RFQs, and subcontracting opportunities.",
        ],
      },
      {
        id: "target-agencies",
        title: "Select target agencies",
        details: [
          "General Services Administration",
          "Department of Veterans Affairs",
          "Department of Homeland Security",
          "Department of Defense",
          "Internal Revenue Service",
          "Department of Energy",
          "NASA",
          "Social Security Administration",
        ],
      },
      {
        id: "search-keywords",
        title: "Create saved keyword searches",
        details: [
          "Accessibility",
          "Section 508",
          "WCAG",
          "React",
          "JavaScript",
          "Frontend",
          "Web application",
          "Digital services",
          "Cloud",
          "DevOps",
          "Node.js",
          "Linux",
        ],
      },
      {
        id: "pipeline-tracker",
        title: "Create an opportunity tracker",
        details: [
          "Agency",
          "Opportunity title",
          "Solicitation number",
          "Contract type",
          "Set-aside type",
          "Estimated value",
          "Due date",
          "Fit score",
          "Next action",
          "Owner",
        ],
      },
    ],
  },
  {
    id: "phase-7",
    phase: "Phase 7",
    title: "Pursue Subcontracting Partnerships",
    timeline: "Months 2–6",
    objective:
      "Use partnerships with established prime contractors to build federal experience and past performance.",
    tasks: [
      {
        id: "prime-list",
        title: "Build a target prime-contractor list",
        details: [
          "Accenture Federal Services",
          "Booz Allen Hamilton",
          "Leidos",
          "SAIC",
          "CACI",
          "General Dynamics Information Technology",
          "CGI Federal",
          "Peraton",
          "Deloitte Government & Public Services",
        ],
      },
      {
        id: "partner-package",
        title: "Prepare a partner outreach package",
        details: [
          "Capability statement",
          "Short company introduction",
          "Relevant résumés",
          "Service one-pagers",
          "Past performance summaries",
          "Certifications and business classifications",
        ],
      },
      {
        id: "partner-outreach",
        title: "Begin weekly partner outreach",
        details: [
          "Contact small-business liaison officers.",
          "Register in supplier portals.",
          "Attend matchmaking and industry events.",
          "Track conversations and follow-up dates.",
        ],
      },
    ],
  },
  {
    id: "phase-8",
    phase: "Phase 8",
    title: "Build Past Performance",
    timeline: "Months 3–9",
    objective:
      "Create a documented record of reliable delivery and measurable results.",
    tasks: [
      {
        id: "engagement-goal",
        title: "Complete three to five relevant engagements",
        details: [
          "Federal subcontracts",
          "State or local government work",
          "Commercial projects similar in scope",
          "Nonprofit or education-sector projects",
        ],
      },
      {
        id: "outcome-metrics",
        title: "Capture measurable outcomes",
        details: [
          "Accessibility defects reduced",
          "Performance improvements",
          "Delivery time saved",
          "Automation coverage increased",
          "Cloud costs reduced",
          "User satisfaction improved",
        ],
      },
      {
        id: "references",
        title: "Secure references and testimonials",
        details: [
          "Request permission before using client names.",
          "Document the client’s problem, solution, and outcome.",
        ],
      },
      {
        id: "cpards",
        title: "Track CPARS performance when applicable",
        details: [
          "Monitor performance evaluations.",
          "Resolve concerns quickly.",
          "Maintain documentation supporting successful delivery.",
        ],
      },
    ],
  },
  {
    id: "phase-9",
    phase: "Phase 9",
    title: "Pursue Larger Contract Vehicles",
    timeline: "Months 9–12+",
    objective:
      "Expand into larger, repeatable federal contracting channels after building credibility.",
    tasks: [
      {
        id: "gsa-mas",
        title: "Evaluate GSA Multiple Award Schedule readiness",
        details: [
          "Confirm financial, pricing, and past-performance readiness.",
          "Identify the most suitable Special Item Numbers.",
        ],
      },
      {
        id: "prime-contracts",
        title: "Pursue prime contracts",
        details: [
          "Target opportunities that closely match proven capabilities.",
          "Use bid/no-bid criteria before committing proposal resources.",
        ],
      },
      {
        id: "contract-vehicles",
        title: "Evaluate BPAs, IDIQs, and GWACs",
        details: [
          "Blanket Purchase Agreements",
          "Indefinite Delivery/Indefinite Quantity contracts",
          "Government-Wide Acquisition Contracts",
        ],
      },
      {
        id: "proposal-library",
        title: "Build a reusable proposal library",
        details: [
          "Company overview",
          "Technical approach templates",
          "Management approach",
          "Quality assurance plan",
          "Accessibility plan",
          "Past performance narratives",
          "Résumés and project descriptions",
        ],
      },
    ],
  },
];

const milestones = [
  { period: "Month 1", goal: "Complete SAM.gov and DSBS registrations, confirm NAICS codes, and finalize company branding." },
  { period: "Months 2–3", goal: "Build agency and prime-contractor relationships and establish a qualified pipeline." },
  { period: "Months 3–6", goal: "Win the first subcontract or small direct award." },
  { period: "Months 6–9", goal: "Build references, measurable case studies, and a repeatable proposal process." },
  { period: "Months 9–12", goal: "Pursue larger prime contracts and evaluate GSA MAS or other contract vehicles." },
];

const styles = `
  :root {
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    color: #172033;
    background: #f5f7fb;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background:
      radial-gradient(circle at top left, rgba(30, 64, 175, 0.08), transparent 30%),
      #f5f7fb;
  }

  button, input {
    font: inherit;
  }

  .roadmap-app {
    min-height: 100vh;
    padding: 32px 18px 60px;
  }

  .roadmap-shell {
    width: min(1180px, 100%);
    margin: 0 auto;
  }

  .hero {
    background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 58%, #0f766e 100%);
    color: white;
    border-radius: 24px;
    padding: 34px;
    box-shadow: 0 24px 70px rgba(15, 23, 42, 0.22);
  }

  .eyebrow {
    margin: 0 0 10px;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-size: 0.78rem;
    font-weight: 800;
    opacity: 0.78;
  }

  .hero h1 {
    margin: 0;
    font-size: clamp(2rem, 5vw, 4rem);
    line-height: 1;
    max-width: 850px;
  }

  .hero-copy {
    margin: 18px 0 0;
    max-width: 800px;
    color: rgba(255, 255, 255, 0.86);
    font-size: 1.06rem;
    line-height: 1.7;
  }

  .phase-list {
    display: grid;
    gap: 16px;
  }

  .phase-card {
    background: white;
    border: 1px solid #dfe5ef;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 12px 34px rgba(15, 23, 42, 0.06);
  }

  .phase-header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 16px;
    align-items: center;
    width: 100%;
    border: 0;
    padding: 20px;
    background: white;
    text-align: left;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
  }

  .phase-header:hover {
    background: #f8f9fc;
  }

  .phase-toggle {
    font-size: 1.8rem;
    font-weight: 300;
    color: #667085;
    text-align: right;
    min-width: 30px;
  }

  .phase-header-static {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 16px;
    align-items: center;
    width: 100%;
    padding: 20px;
    background: white;
    text-align: left;
    border-bottom: 1px solid #edf0f5;
  }

  .phase-badge {
    min-width: 72px;
    text-align: center;
    background: #eaf0ff;
    color: #1d4ed8;
    border-radius: 999px;
    padding: 8px 10px;
    font-size: 0.78rem;
    font-weight: 850;
  }

  .phase-title {
    margin: 0;
    font-size: 1.2rem;
  }

  .phase-body {
    border-top: 1px solid #edf0f5;
    padding: 20px;
  }

  .phase-objective {
    margin: 0 0 18px;
    color: #475467;
    line-height: 1.65;
  }

  .task-list {
    display: grid;
    gap: 12px;
  }

  .task {
    border: 1px solid #e3e8f0;
    border-radius: 15px;
    padding: 15px;
    background: #fbfcfe;
  }

  .task-label {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    cursor: pointer;
  }

  .task-title {
    font-weight: 800;
    line-height: 1.45;
    display: block;
    margin-bottom: 10px;
  }

  .task ul {
    margin: 10px 0 0 31px;
    padding-left: 17px;
    color: #667085;
    line-height: 1.65;
  }

  .milestones {
    margin-top: 24px;
  }

  .milestone-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 12px;
  }

  .milestone {
    background: white;
    border: 1px solid #dfe5ef;
    border-radius: 16px;
    padding: 16px;
  }

  .milestone strong {
    color: #1d4ed8;
  }

  .milestone p {
    margin: 9px 0 0;
    color: #667085;
    line-height: 1.55;
    font-size: 0.92rem;
  }

  .team-note {
    margin-top: 24px;
    background: #0f172a;
    color: white;
    border-radius: 20px;
    padding: 24px;
  }

  .team-note h2 {
    margin-top: 0;
  }

  .team-note p {
    color: rgba(255,255,255,0.8);
    line-height: 1.65;
  }

  @media (max-width: 820px) {
    .milestone-grid {
      grid-template-columns: 1fr 1fr;
    }

    .phase-header {
      grid-template-columns: auto 1fr auto;
    }
  }

  @media (max-width: 520px) {
    .hero {
      padding: 25px 20px;
      border-radius: 18px;
    }

    .roadmap-app {
      padding-left: 10px;
      padding-right: 10px;
    }

    .milestone-grid {
      grid-template-columns: 1fr;
    }
  }

  @media print {
    body {
      background: white;
    }

    .roadmap-app {
      padding: 0;
    }

    .hero,
    .team-note {
      color: #111827;
      background: white;
      box-shadow: none;
      border: 1px solid #cfd6e2;
    }

    .hero-copy,
    .team-note p {
      color: #475467;
    }

    .hero-actions,
    .toolbar-actions {
      display: none;
    }

    .phase-card,
    .panel,
    .milestone {
      box-shadow: none;
      break-inside: avoid;
    }

    .phase-header {
      background: #f5f7fb;
      padding: 16px 20px;
      border-bottom: 1px solid #dfe5ef;
    }

    .phase-toggle {
      display: none;
    }

    .phase-body {
      display: block !important;
    }
  }
`;

export default function FederalContractingRoadmap() {
  const [openPhases, setOpenPhases] = useState(() =>
    Object.fromEntries(roadmapData.map((phase) => [phase.id, true]))
  );

  function togglePhase(phaseId) {
    setOpenPhases((current) => ({
      ...current,
      [phaseId]: !current[phaseId],
    }));
  }

  return (
    <>
      <style>{styles}</style>

      <main className="roadmap-app">
        <div className="roadmap-shell">
          <section className="hero">
            <p className="eyebrow">Federal Growth Plan</p>
            <h1>Federal IT Contracting Roadmap</h1>
            <p className="hero-copy">
              A practical, team-ready guide for positioning the company as a
              specialized digital modernization, accessibility, cloud, and
              automation partner for U.S. government agencies.
            </p>
          </section>

          <section>
            <div>
              <p className="eyebrow" style={{ color: "#516078" }}>
                Execution Checklist
              </p>
              <h2>Step-by-Step Action Plan</h2>
            </div>

            <div className="phase-list">
              {roadmapData.map((phase) => {
                return (
                  <article className="phase-card" key={phase.id}>
                    <button
                      className="phase-header"
                      type="button"
                      onClick={() => togglePhase(phase.id)}
                      aria-expanded={openPhases[phase.id]}
                      aria-controls={`${phase.id}-content`}
                    >
                      <span className="phase-badge">{phase.phase}</span>

                      <span>
                        <h3 className="phase-title">{phase.title}</h3>
                      </span>

                      <span className="phase-toggle">
                        {openPhases[phase.id] ? "−" : "+"}
                      </span>
                    </button>

                    {openPhases[phase.id] && (
                      <div className="phase-body" id={`${phase.id}-content`}>
                        <p className="phase-objective">
                          <strong>Objective:</strong> {phase.objective}
                        </p>

                        <div className="task-list">
                          {phase.tasks.map((task) => {
                            return (
                              <div className="task" key={task.id}>
                                <span className="task-title">
                                  {task.title}
                                </span>

                                <ul>
                                  {task.details.map((detail) => (
                                    <li key={detail}>{detail}</li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>

          <section className="milestones">
            <div>
              <p className="eyebrow" style={{ color: "#516078" }}>
                12-Month View
              </p>
              <h2>Key Milestones</h2>
            </div>

            <div className="milestone-grid">
              {milestones.map((milestone) => (
                <article className="milestone" key={milestone.period}>
                  <strong>{milestone.period}</strong>
                  <p>{milestone.goal}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="team-note">
            <h2>How to Use This Guide With the Team</h2>
            <p>
              Review one phase at a time during a weekly working session. Assign
              an owner and due date to every unchecked item, record decisions in
              a shared workspace, and use the printed version as the executive
              summary for leadership or partner meetings. The checklist state is
              now shared through the backend so your team can keep progress aligned.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
