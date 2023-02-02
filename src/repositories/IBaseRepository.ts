export interface IBaseRepository<T, K> {
    findById(id: K): Promise<T>;
    findAll(): Promise<T[]>;
};