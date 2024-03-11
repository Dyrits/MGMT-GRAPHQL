type Client = {
  id: string | number;
  name: string;
  email: string;
  phone: string;
}

type Project = {
  id: string | number;
  name: string;
  status: string;
}

export type { Client, Project };