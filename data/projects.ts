
import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'central-business-tower',
    title: 'Central Business Tower',
    location: 'Dubai, UAE',
    category: 'Commercial',
    thumbnailUrl: 'https://picsum.photos/seed/tower1/800/600',
    heroUrl: 'https://picsum.photos/seed/tower1-hero/1600/900',
    summary: 'A 65-story mixed-use commercial tower integrated with high-performance BIM workflows.',
    description: 'Lead BIM Coordinator for the structural and MEP integration phase. This project required strict adherence to ISO 19650 standards and complex multi-disciplinary clash resolution across 65 floors.',
    responsibilities: [
      'Orchestrated weekly BIM coordination meetings with MEP and structural consultants.',
      'Developed automated Revit schedules for real-time quantity take-offs.',
      'Managed a federated model containing over 150 sub-linked models.',
      'Ensured 100% compliance with local building codes and fire safety regulations.'
    ],
    deliverables: [
      'Full architectural tender package (IFC status).',
      'Clash detection reports via Navisworks Manage.',
      'LOD 400 Shop Drawings for the main lobby and atrium.',
      'BIM Execution Plan (BEP) for the construction phase.'
    ],
    technicalHighlights: {
      lod: 'LOD 400',
      coordination: 'Navisworks Manage / BIM 360',
      compliance: 'Dubai Building Code & Fire Safety (DCD)',
      workflows: 'CDE management via Autodesk Construction Cloud'
    },
    outcome: 'Successfully reduced field rework by 15% through proactive clash detection in the pre-construction phase.',
    techStack: ['Revit', 'Navisworks', 'AutoCAD', 'BIM 360'],
    gallery: [
      'https://picsum.photos/seed/tower1-gal1/1200/800',
      'https://picsum.photos/seed/tower1-gal2/1200/800',
      'https://picsum.photos/seed/tower1-gal3/1200/800'
    ],
    snapshot: {
      role: 'Lead BIM Coordinator',
      client: 'Emaar Properties',
      scope: '120,000 m² GFA',
      services: ['BIM Management', 'Tender Package Design', 'Inter-disciplinary Coordination'],
      status: 'Built & Operational',
      achievement: 'Project delivered 2 months ahead of schedule.'
    }
  },
  {
    id: '2',
    slug: 'metro-expansion-phase-2',
    title: 'Metro Expansion Phase 2',
    location: 'Riyadh, Saudi Arabia',
    category: 'Infrastructure',
    thumbnailUrl: 'https://picsum.photos/seed/metro1/800/600',
    heroUrl: 'https://picsum.photos/seed/metro1-hero/1600/900',
    summary: 'Strategic BIM implementation for three major underground metro stations.',
    description: 'High-complexity infrastructure project focusing on underground utility coordination and architectural finishes for public transit hubs.',
    responsibilities: [
      'Implemented site-to-office BIM workflow using cloud-based synchronization.',
      'Coordinated underground utility relocations with civil engineering teams.',
      'Supervised the generation of structural rebar models at LOD 400.',
      'Audited supply chain BIM models for data integrity.'
    ],
    deliverables: [
      'LOD 350 Architectural Construction Sets.',
      'As-built BIM models for facility management hand-over.',
      'Visualizations for stakeholder presentations.',
      'Automated material tracking system linked to the BIM model.'
    ],
    technicalHighlights: {
      lod: 'LOD 350 / 400',
      coordination: 'Bentley ProjectWise / Navisworks',
      compliance: 'SBC (Saudi Building Code)',
      workflows: 'Integrated Project Delivery (IPD)'
    },
    outcome: 'Zero major clashes recorded during station structural concrete pours.',
    techStack: ['Revit', 'ProjectWise', 'Primavera P6', 'Dynamo'],
    gallery: [
      'https://picsum.photos/seed/metro1-gal1/1200/800',
      'https://picsum.photos/seed/metro1-gal2/1200/800'
    ],
    snapshot: {
      role: 'Senior BIM Specialist',
      client: 'Royal Commission for Riyadh City',
      scope: '3 Underground Stations',
      services: ['Infrastructure BIM', 'Utility Coordination', 'Asset Management'],
      status: 'Ongoing',
      achievement: 'Managed a team of 12 BIM modelers across 3 time zones.'
    }
  },
  {
    id: '3',
    slug: 'marina-heights-residences',
    title: 'Marina Heights Residences',
    location: 'Coventry, UK',
    category: 'Residential',
    thumbnailUrl: 'https://picsum.photos/seed/res1/800/600',
    heroUrl: 'https://picsum.photos/seed/res1-hero/1600/900',
    summary: 'Sustainable residential development featuring 450 luxury units with a focus on Part L compliance.',
    description: 'Architectural design and technical delivery of a waterfront residential complex with a strong emphasis on thermal performance and UK Building Regulations.',
    responsibilities: [
      'Led the technical design team for RIBA Stages 3 through 5.',
      'Conducted detailed thermal bridge analysis and facade detailing.',
      'Coordinated with local planning authorities for permit approvals.',
      'Optimized unit layouts for maximum daylight and ventilation.'
    ],
    deliverables: [
      'Planning Application Packages.',
      'Detailed Building Regulation Approval Drawings.',
      'Facade system details (1:5 scale).',
      'Life Cycle Assessment (LCA) report.'
    ],
    technicalHighlights: {
      lod: 'LOD 300',
      coordination: 'Revit / Solibri',
      compliance: 'UK Building Regs Part L, B, & M',
      workflows: 'RIBA Plan of Work alignment'
    },
    outcome: 'Achieved "Outstanding" BREEAM rating for the project design phase.',
    techStack: ['Revit', 'AutoCAD', 'Adobe Suite', 'Enscape'],
    gallery: [
      'https://picsum.photos/seed/res1-gal1/1200/800',
      'https://picsum.photos/seed/res1-gal2/1200/800'
    ],
    snapshot: {
      role: 'Senior Project Architect',
      client: 'Private Developer',
      scope: '450 Units / 45,000 m²',
      services: ['Technical Design', 'Planning Support', 'Sustainability Coordination'],
      status: 'Permits Obtained',
      achievement: 'Planning approval secured on first submission.'
    }
  },
  {
    id: '4',
    slug: 'bim-standards-consultancy',
    title: 'BIM Standards Framework',
    location: 'Remote / London',
    category: 'Consultancy',
    thumbnailUrl: 'https://picsum.photos/seed/cons1/800/600',
    heroUrl: 'https://picsum.photos/seed/cons1-hero/1600/900',
    summary: 'Development of a comprehensive BIM standard for a multinational real estate group.',
    description: 'Consultancy role focused on standardizing BIM workflows across multiple offices to ensure data consistency and efficient project delivery.',
    responsibilities: [
      'Drafted the corporate BIM Standards Manual.',
      'Created custom Revit templates and families for standardized reporting.',
      'Trained over 50 staff members on advanced BIM workflows.',
      'Implemented automated model auditing scripts using Dynamo.'
    ],
    deliverables: [
      'Corporate BIM Manual.',
      'Standardized Revit Family Library.',
      'Training modules and documentation.',
      'Audit reports on existing projects.'
    ],
    technicalHighlights: {
      lod: 'N/A (Framework)',
      coordination: 'Information Management',
      compliance: 'ISO 19650-1 & 2',
      workflows: 'Information Requirements (OIR/AIR/PIR)'
    },
    outcome: 'Standardization led to a 20% reduction in project set-up time.',
    techStack: ['Dynamo', 'Revit', 'Miro', 'SharePoint'],
    gallery: [
      'https://picsum.photos/seed/cons1-gal1/1200/800'
    ],
    snapshot: {
      role: 'BIM Consultant',
      client: 'Global Real Estate Group',
      scope: '12 Global Offices',
      services: ['Workflow Optimization', 'Training', 'Standardization'],
      status: 'Built & Operational'
    }
  },
  {
    id: '5',
    slug: 'urban-library-hub',
    title: 'Sustainable Urban Library',
    location: 'Doha, Qatar',
    category: 'Commercial',
    thumbnailUrl: 'https://picsum.photos/seed/lib1/800/600',
    heroUrl: 'https://picsum.photos/seed/lib1-hero/1600/900',
    summary: 'A public-facing library designed with parametric facade elements and advanced acoustic engineering.',
    description: 'Architectural design lead for a civic library project integrating complex geometry with high-efficiency MEP systems.',
    responsibilities: [
      'Developed parametric facade panels using Rhino/Grasshopper.',
      'Managed the coordination between architectural intent and acoustic performance.',
      'Supervised site inspections to ensure construction quality aligned with BIM models.',
      'Liaised with specialist glazing contractors.'
    ],
    deliverables: [
      'Detailed Facade Shop Drawings.',
      'Interior Design Tender Packages.',
      'Acoustic simulation integration reports.',
      '3D Visualization for public consultation.'
    ],
    technicalHighlights: {
      lod: 'LOD 350',
      coordination: 'Rhino Inside Revit',
      compliance: 'GSAS (Global Sustainability Assessment System)',
      workflows: 'Parametric Design to BIM'
    },
    outcome: 'Delivered a landmark building that serves as a community hub for 50,000+ residents.',
    techStack: ['Rhino', 'Grasshopper', 'Revit', 'V-Ray'],
    gallery: [
      'https://picsum.photos/seed/lib1-gal1/1200/800',
      'https://picsum.photos/seed/lib1-gal2/1200/800'
    ],
    snapshot: {
      role: 'Senior Design Architect',
      client: 'Public Works Authority (Ashghal)',
      scope: '15,000 m²',
      services: ['Parametric Design', 'Technical Detailing', 'Site Supervision'],
      status: 'Built & Operational',
      achievement: 'Winner of Regional Civic Design Award 2022.'
    }
  },
  {
    id: '6',
    slug: 'restoration-bim-academy',
    title: 'Heritage Restoration BIM',
    location: 'Oxford, UK',
    category: 'BIM/Academic',
    thumbnailUrl: 'https://picsum.photos/seed/acad1/800/600',
    heroUrl: 'https://picsum.photos/seed/acad1-hero/1600/900',
    summary: 'Point cloud to BIM workflow for the restoration of a 19th-century academic hall.',
    description: 'Applied Research and BIM application in Heritage Science. Using Laser Scanning to generate accurate historical documentation.',
    responsibilities: [
      'Conducted on-site laser scanning using Leica RTC360.',
      'Processed point cloud data and registered scans.',
      'Developed high-fidelity "As-Built" models for restoration planning.',
      'Analyzed structural deformations using model-to-point-cloud comparisons.'
    ],
    deliverables: [
      'Registered Point Cloud Data.',
      'Historic Building Information Model (HBIM).',
      'Conservation management plan drawings.',
      'Deformation analysis reports.'
    ],
    technicalHighlights: {
      lod: 'LOD 400 (Geometric Accuracy)',
      coordination: 'Point Cloud Integration',
      compliance: 'Historic England Documentation Standards',
      workflows: 'Scan-to-BIM'
    },
    outcome: 'Provided the foundation for a multi-million pound conservation grant.',
    techStack: ['Autodesk ReCap', 'Revit', 'CloudCompare'],
    gallery: [
      'https://picsum.photos/seed/acad1-gal1/1200/800'
    ],
    snapshot: {
      role: 'HBIM Researcher',
      client: 'University Faculty',
      scope: 'Historical Monument',
      services: ['Laser Scanning', 'HBIM Modeling', 'Structural Analysis'],
      status: 'Tender Completed'
    }
  }
];
