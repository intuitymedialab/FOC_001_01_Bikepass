export type Project = {
  id: string;
  name: string;
  type: string;
  description: string;
  nodes: DataNode[];
  edges: Edge[];
};

export type Vec2 = {
  x: number;
  y: number;
};

/* export type NodeData = {
  text: string;
  origin: string;
}; */

export type NodeData = string;

export type DataNode = {
  /* nodeId: string;
  graphId: string; */
  id: string;
  nodeType: string;
  data: NodeData;
  processing: boolean;
  done: boolean;
};

export type CanvasNode = {
  type: string;
  position: Vec2;
} & DataNode;

export type Edge = {
  id: string;
  source: string;
  target: string;
};

export type GraphNode = {
  nodeId: string;
  graphId: string;
  nodeType: string;
  data: string;
  processing: boolean;
  done: boolean;
};

export type GraphEdge = {
  endpoint: string;
};

export type GraphEntry = {
  source: GraphNode;
  edge?: GraphEdge;
  target?: GraphNode;
};
