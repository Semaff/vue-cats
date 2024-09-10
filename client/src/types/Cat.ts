export interface Cat {
  id: string | number;
  name: string;
  description: string;
  image: string;
}

export interface CreateCatDTO {
  name: string;
  description: string;
  image: File;
}

export interface UpdateCatDTO {
  id: string | number;
  name: string;
  description: string;
}
