
export type ProjectCategory = 'Commercial' | 'Infrastructure' | 'Residential' | 'Consultancy' | 'BIM/Academic' | 'All';

export interface ProjectSnapshot {
  role: string;
  client: string;
  scope: string;
  services: string[];
  status: 'Tender Completed' | 'Built & Operational' | 'Permits Obtained' | 'Ongoing';
  achievement?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  thumbnailUrl: string;
  heroUrl: string;
  summary: string;
  description: string;
  responsibilities: string[];
  deliverables: string[];
  technicalHighlights: {
    lod: string;
    coordination: string;
    compliance: string;
    workflows: string;
  };
  outcome: string;
  techStack: string[];
  gallery: string[];
  snapshot: ProjectSnapshot;
}

export interface Metric {
  label: string;
  value: string;
  icon: string;
}
