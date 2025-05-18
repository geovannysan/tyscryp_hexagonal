
export interface IGenery<T> {
    findById(id: any): Promise<T | null>;
    create(data: Partial<T>): Promise<T>;
    update(id: number, data: Partial<T>): Promise<T>;
    delete(id: number): Promise<void>;
    findUniquename(name: string): Promise<T | null>;
  }  