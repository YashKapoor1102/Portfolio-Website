"use client";

import React, { useState } from "react";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

const WorkExperience: React.FC = () => {
  const [openTab, setOpenTab] = useState<string[]>([]);

  const toggleTab = (tab: string) => {
    setOpenTab((prevTabs) =>
      prevTabs.includes(tab) ? prevTabs.filter((t) => t !== tab) : [...prevTabs, tab]
    );
  };

  const experiences = [
    {
      date: "March 2025 - Present",
      company: "Autolux Ltd. O/A Rapid City Transportation",
      title: "Software Engineer",
      skills: [
        "React",
        "React Native",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "Express",
        "Cascading Style Sheets (CSS)",
        "Microsoft SQL Server",
        "Jest",
        "React Testing Library",
        "React Native Testing Library",
        "CI/CD",
        "Palantir Foundry",
        "Data Modeling",
        "Git",
        "Docker",
        "Kubernetes",
        "Linux Virtual Machines",
        "External RESTful APIs",
        "Azure Key Vault",
        "OAuth 2.0",
        "Twilio",
        "Azure Document Intelligence",
        "Power Automate",
        "Azure Functions",
        "Azure SQL",
        "WebAuthn",
        "Google Maps API",
        "Geotab API",
      ],
      description: [
        "Built a full-stack passenger web application using React, Node.js, CSS, and Microsoft SQL Server, enabling users to authenticate, manage profiles, and book single or multi-trip requests with robust input validation and server-side sanitization.",
        "Implemented secure authentication enhancements including WebAuthn (Face ID / passkeys) for supported devices and hardened auth flows with safe error handling to avoid leaking sensitive details.",
        "Designed and implemented a full-stack Fleet application and automated invoice ingestion pipeline that stores incoming invoices in Azure SQL and programmatically creates corresponding vendor Bills through the QuickBooks Online REST API using OAuth 2.0 authentication, built with React, Node.js, Power Automate, Azure Functions (Python), and Azure SQL while containerizing supporting services with Docker to improve deployment consistency and reliability across environments.",
        "Strengthened security for third-party integrations by using Azure Key Vault to store and retrieve sensitive secrets (e.g., refresh/access tokens, API keys) at runtime instead of embedding them in code or Power Automate configurations; maintained environment separation (DEV/PROD) and least-privilege access patterns.",
        "Built reliability safeguards into ingestion and integration workflows (e.g., idempotent processing patterns, duplicate checks, and controlled retries) to prevent double-posting and ensure safe re-runs during transient failures.",
        "Trained and tuned an Azure Document Intelligence model to extract structured invoice fields and added validation rules and rule-based classification to improve data accuracy and reduce manual correction effort.",
        "Developed an Android kiosk application using React Native, Node.js, Express, and the Twilio Voice API to automate employee entrance calling (sequential dialing / fallback until answered), reducing manual reception effort and improving response times by up to 50%.",
        "Wrote unit and integration tests (Jest + Testing Library) and integrated tests into CI/CD to continuously validate critical flows and reduce regressions across releases.",
        "Designed and deployed multiple Node.js microservices that securely expose curated SQL Server data from SQL Server to internal systems without granting direct database access, improving maintainability and reducing security risk.",
        "Designed an interactive dashboard in Palantir Foundry by modeling complex one-to-many and many-to-one relationships between claim, trip, and passenger ontologies using the Ontology SDK and Pipeline Builder, and configured a Linux virtual machine with a Foundry agent and PySpark transforms to pull data securely from microservices over VPN.",
      ],
      categories: null,
    },
    {
      date: "January 2022 - December 2022",
      company: "Barracuda Networks",
      title: "Full Stack Software Engineer",
      skills: [
        "TypeScript",
        "JavaScript",
        "React",
        "Redux",
        "Node.js",
        "Elasticsearch",
        "Logstash",
        "Kibana",
        "Docker",
        "Kubernetes",
        "Amazon Web Services (AWS)",
        "Google Cloud Platform (GCP)",
        "Jest",
        "React Testing Library",
        "Git",
        "Jira",
        "Confluence",
        "Content Management System (CMS)",
        "Unix/Linux Command Line",
        "Cascading Style Sheets (CSS)",
      ],
      description: null,
      categories: {
        "Key Accomplishments": [
          "Developed an optimized ticket management system for managed service providers using React, Node.js, and Elasticsearch, resulting in a 33% increase in operational efficiency and a 20% improvement in data consistency.",
          "Designed and developed a breadcrumb navigation system using React, Redux, Node.js, and CSS, improving user experience by making navigation intuitive and visually consistent across pages.",
          "Designed and implemented a setup screen for Sophos Central Integration in the dashboard using React and Node.js, enabling users to configure and validate API credentials directly with the Sophos Central API. Integrated secure backend storage in Elasticsearch, improving usability, automating setup, and streamlining the integration process.",
          "Engineered and deployed RESTful APIs within a microservices architecture using Docker and Kubernetes, improving system scalability and reducing deployment times by 30%.",
          "Redesigned the status configuration screen in the Customer Security Dashboard to sync Barracuda SKOUT XDR and ConnectWise ticket statuses. Developed the frontend user interface using React and backend logic with HTTP request libraries to automate status updates via the ConnectWise API.",
        ],
        ...
      },
    },
  ];

  return (
    <section id="WorkExperience" className="py-8 bg-gray-200">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-4xl font-bold mb-6">Work Experience</h1>
        ...
      </div>
    </section>
  );
};

export default WorkExperience;
