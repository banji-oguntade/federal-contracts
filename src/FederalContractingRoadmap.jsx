import React, { useEffect, useMemo, useState } from "react";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  (window.location.port === "5173"
    ? "http://localhost:3001"
    : window.location.origin);

/**
 * FederalContractingRoadmap.jsx
 *
 * A self-contained React checklist for planning and presenting
 * a federal IT contracting strategy.
 *
 * Features:
 * - Phase-by-phase checklist
 * - Progress tracking
 * - LocalStorage persistence
 * - Expand/collapse sections
 * - Print-friendly layout
 * - Team presentation summary
 */

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

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 24px;
  }

  .button {
    border: 0;
    border-radius: 12px;
    padding: 11px 16px;
    cursor: pointer;
    font-weight: 750;
  }

  .button-primary {
    background: white;
    color: #17336d;
  }

  .button-secondary {
    background: rgba(255,255,255,0.13);
    color: white;
    border: 1px solid rgba(255,255,255,0.24);
  }

  .dashboard {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 18px;
    margin: 22px 0;
  }

  .panel {
    background: rgba(255,255,255,0.92);
    border: 1px solid #dfe5ef;
    border-radius: 20px;
    padding: 22px;
    box-shadow: 0 14px 40px rgba(15, 23, 42, 0.07);
  }

  .panel h2 {
    margin: 0 0 14px;
    font-size: 1.15rem;
  }

  .progress-number {
    font-size: 2.5rem;
    font-weight: 850;
    margin: 0 0 8px;
  }

  .progress-track {
    height: 14px;
    border-radius: 999px;
    background: #e8edf5;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #2563eb, #0f766e);
    transition: width 220ms ease;
  }

  .muted {
    color: #667085;
    line-height: 1.6;
  }

  .positioning {
    font-weight: 800;
    font-size: 1.08rem;
    line-height: 1.5;
    color: #17336d;
  }

  .toolbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 12px;
    margin: 22px 0 14px;
    align-items: center;
  }

  .toolbar h2 {
    margin: 0;
  }

  .toolbar-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .toolbar .button {
    background: white;
    border: 1px solid #d8deea;
    color: #263248;
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

  .phase-meta {
    margin-top: 5px;
    color: #667085;
    font-size: 0.92rem;
  }

  .phase-status {
    text-align: right;
    font-weight: 800;
    color: #0f766e;
    white-space: nowrap;
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

  .task.completed {
    background: #f0fdf7;
    border-color: #b7e4cf;
  }

  .task-label {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    cursor: pointer;
  }

  .task-label input {
    margin-top: 3px;
    width: 19px;
    height: 19px;
    accent-color: #0f766e;
  }

  .task-title {
    font-weight: 800;
    line-height: 1.45;
  }

  .task.completed .task-title {
    text-decoration: line-through;
    color: #527066;
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
    .dashboard {
      grid-template-columns: 1fr;
    }

    .milestone-grid {
      grid-template-columns: 1fr 1fr;
    }

    .phase-header {
      grid-template-columns: 1fr;
    }

    .phase-status {
      text-align: left;
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

    .phase-body {
      display: block !important;
    }
  }
`;

export default function FederalContractingRoadmap() {
  const allTaskIds = useMemo(
    () => roadmapData.flatMap((phase) => phase.tasks.map((task) => task.id)),
    []
  );

  const [completed, setCompleted] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [openPhases, setOpenPhases] = useState(() =>
    Object.fromEntries(roadmapData.map((phase) => [phase.id, true]))
  );

  useEffect(() => {
    async function loadState() {
      try {
        const response = await fetch(`${API_BASE_URL}/api/tasks`);
        if (!response.ok) {
          throw new Error("Unable to load shared task state");
        }
        const data = await response.json();
        setCompleted(data.completed || {});
      } catch (err) {
        setError(err.message || "Unable to load shared task state");
      } finally {
        setLoading(false);
      }
    }

    loadState();
  }, []);

  const completedCount = allTaskIds.filter((id) => completed[id]).length;
  const progress = Math.round((completedCount / allTaskIds.length) * 100);

  async function toggleTask(taskId) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/tasks/${taskId}/toggle`, {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Unable to update task state");
      }

      const data = await response.json();
      setCompleted(data.completed || {});
      setError("");
    } catch (err) {
      setError(err.message || "Unable to update task state");
    }
  }

  function togglePhase(phaseId) {
    setOpenPhases((current) => ({
      ...current,
      [phaseId]: !current[phaseId],
    }));
  }

  function expandAll() {
    setOpenPhases(
      Object.fromEntries(roadmapData.map((phase) => [phase.id, true]))
    );
  }

  function collapseAll() {
    setOpenPhases(
      Object.fromEntries(roadmapData.map((phase) => [phase.id, false]))
    );
  }

  async function resetProgress() {
    const confirmed = window.confirm(
      "Reset all checklist progress? This cannot be undone."
    );

    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/reset`, {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Unable to reset task state");
      }

      const data = await response.json();
      setCompleted(data.completed || {});
      setError("");
    } catch (err) {
      setError(err.message || "Unable to reset task state");
    }
  }

  return (
    <>
      <style>{styles}</style>

      <main className="roadmap-app">
        <div className="roadmap-shell">
          <section className="hero">
            <p className="eyebrow">Pollynz Consults — Federal Growth Plan</p>
            <h1>Federal IT Contracting Roadmap</h1>
            <p className="hero-copy">
              A practical, team-ready guide for positioning the company as a
              specialized digital modernization, accessibility, cloud, and
              automation partner for U.S. government agencies.
            </p>

            <div className="hero-actions">
              <button
                className="button button-primary"
                type="button"
                onClick={() => window.print()}
              >
                Print or Save as PDF
              </button>
              <button
                className="button button-secondary"
                type="button"
                onClick={expandAll}
              >
                Expand All Phases
              </button>
            </div>
          </section>

          <section className="dashboard" aria-label="Roadmap summary">
            <div className="panel">
              <h2>Overall Progress</h2>
              <p className="progress-number">{progress}%</p>
              <div
                className="progress-track"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={progress}
                aria-label="Roadmap completion"
              >
                <div
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="muted">
                {completedCount} of {allTaskIds.length} major actions completed.
                Progress is shared through the team backend and updates in real time.
              </p>
            </div>

            <div className="panel">
              <h2>Recommended Market Position</h2>
              <p className="positioning">
                Enterprise Digital Accessibility • Modern Web Engineering •
                Cloud Solutions • AI Automation
              </p>
              <p className="muted">
                Lead with specialization rather than presenting the company as a
                general IT vendor.
              </p>
            </div>
          </section>

          <section>
            <div className="toolbar">
              <div>
                <p className="eyebrow" style={{ color: "#516078" }}>
                  Execution Checklist
                </p>
                <h2>Step-by-Step Action Plan</h2>
              </div>

              <div className="toolbar-actions">
                <button className="button" type="button" onClick={expandAll}>
                  Expand All
                </button>
                <button className="button" type="button" onClick={collapseAll}>
                  Collapse All
                </button>
                <button className="button" type="button" onClick={resetProgress}>
                  Reset Progress
                </button>
              </div>
            </div>

            {loading ? (
              <p className="muted">Loading shared roadmap state…</p>
            ) : error ? (
              <p className="muted" style={{ color: "#b42318" }}>{error}</p>
            ) : null}

            <div className="phase-list">
              {roadmapData.map((phase) => {
                const phaseCompleted = phase.tasks.filter(
                  (task) => completed[task.id]
                ).length;

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
                        <span className="phase-meta">{phase.timeline}</span>
                      </span>

                      <span className="phase-status">
                        {phaseCompleted}/{phase.tasks.length} complete
                      </span>
                    </button>

                    {openPhases[phase.id] && (
                      <div className="phase-body" id={`${phase.id}-content`}>
                        <p className="phase-objective">
                          <strong>Objective:</strong> {phase.objective}
                        </p>

                        <div className="task-list">
                          {phase.tasks.map((task) => {
                            const isCompleted = Boolean(completed[task.id]);

                            return (
                              <div
                                className={`task ${
                                  isCompleted ? "completed" : ""
                                }`}
                                key={task.id}
                              >
                                <label className="task-label">
                                  <input
                                    type="checkbox"
                                    checked={isCompleted}
                                    onChange={() => toggleTask(task.id)}
                                  />
                                  <span className="task-title">
                                    {task.title}
                                  </span>
                                </label>

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
            <div className="toolbar">
              <div>
                <p className="eyebrow" style={{ color: "#516078" }}>
                  12-Month View
                </p>
                <h2>Key Milestones</h2>
              </div>
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
