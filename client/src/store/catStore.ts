import { defineStore } from 'pinia';

import { v4 } from 'uuid';

import type { Cat, CreateCatDTO, UpdateCatDTO } from '@/types/Cat';

export interface CatState {
  cats: Cat[];
}

export const useCatStore = defineStore('cat', {
  state: (): CatState => ({
    cats: [],
  }),
  actions: {
    async fetchCats() {
      const response = await fetch('http://localhost:3000/cats');

      const data = await response.json();

      this.cats = data as Cat[];
    },
    async addCat({ name, description, image }: CreateCatDTO) {
      if (!name || !description || !image) return;

      const formData = new FormData();

      formData.append('id', v4());
      formData.append('name', name);
      formData.append('description', description);
      formData.append('image', image);

      const response = await fetch('http://localhost:3000/cats', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      this.cats = data;
    },
    async deleteCat(id: string | number) {
      const response = await fetch(`http://localhost:3000/cats/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      this.cats = data;
    },
    async updateCat({ id, name, description }: UpdateCatDTO) {
      const response = await fetch(`http://localhost:3000/cats/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          description,
        }),
      });

      const data = await response.json();

      this.cats = data;
    },
  },
});
