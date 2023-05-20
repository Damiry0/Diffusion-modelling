export interface graphModel {
  nodes: Nodes[];
  links: Links[];
}

interface Nodes {
  id: string;
}

interface Links {
  source: string;
  target: string;
}

export interface G6graphModel {
  nodes: Nodes[];
  edges: Links[];
}