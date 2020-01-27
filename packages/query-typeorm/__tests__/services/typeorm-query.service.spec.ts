import { Query } from '@nestjs-query/core';
import { Filter } from '@nestjs-query/core/src';
import { plainToClass } from 'class-transformer';
import { deepEqual, instance, mock, objectContaining, when } from 'ts-mockito';
import { DeleteQueryBuilder, Repository, SelectQueryBuilder, UpdateQueryBuilder } from 'typeorm';
import { TestEntity } from '../__fixtures__/test.entity';
import { FilterQueryBuilder } from '../../src/query';
import { TypeormQueryService } from '../../src';

describe('TypeormQueryService', (): void => {
  const testEntities: () => TestEntity[] = (): TestEntity[] => [
    { id: 'id1', stringType: 'foo', boolType: true, dateType: new Date(), numberType: 1 },
    { id: 'id2', stringType: 'bar', boolType: false, dateType: new Date(), numberType: 2 },
  ];

  type MockQueryService = {
    mockRepo: Repository<TestEntity>;
    queryService: TypeormQueryService<TestEntity>;
    mockQueryBuilder: FilterQueryBuilder<TestEntity>;
  };

  function createQueryService(): MockQueryService {
    const mockQueryBuilder = mock<FilterQueryBuilder<TestEntity>>(FilterQueryBuilder);
    const mockRepo = mock<Repository<TestEntity>>(Repository);
    const queryService = new TypeormQueryService<TestEntity>(instance(mockRepo), instance(mockQueryBuilder));
    return { mockQueryBuilder, mockRepo, queryService };
  }

  it('should create a filterQuery based on the repo passed in if not provided', () => {
    const mockRepo = mock<Repository<TestEntity>>(Repository);
    const repoInstance = instance(mockRepo);
    const queryService = new TypeormQueryService<TestEntity>(repoInstance);
    expect(queryService.filterQueryBuilder).toBeInstanceOf(FilterQueryBuilder);
    expect(queryService.filterQueryBuilder.repo).toEqual(repoInstance);
  });

  describe('#query', () => {
    it('call select and return the result', async () => {
      const entities = testEntities();
      const query: Query<TestEntity> = { filter: { stringType: { eq: 'foo' } } };
      const { queryService, mockQueryBuilder } = createQueryService();
      const selectQueryBuilder: SelectQueryBuilder<TestEntity> = mock(SelectQueryBuilder);
      when(mockQueryBuilder.select(query)).thenReturn(instance(selectQueryBuilder));
      when(selectQueryBuilder.getMany()).thenResolve(entities);
      const queryResult = await queryService.query(query);
      expect(queryResult).toEqual(entities);
    });
  });

  describe('#findById', () => {
    it('call findOne on the repo', async () => {
      const entity = testEntities()[0];
      const { queryService, mockRepo } = createQueryService();
      when(mockRepo.findOne(entity.id)).thenResolve(entity);
      const queryResult = await queryService.findById(entity.id);
      expect(queryResult).toEqual(entity);
    });

    it('return undefined if not found', async () => {
      const { queryService, mockRepo } = createQueryService();
      when(mockRepo.findOne(1)).thenResolve(undefined);
      const queryResult = await queryService.findById(1);
      expect(queryResult).toBeUndefined();
    });
  });

  describe('#getById', () => {
    it('call findOneOrFail on the repo', async () => {
      const entity = testEntities()[0];
      const { queryService, mockRepo } = createQueryService();
      when(mockRepo.findOneOrFail(entity.id)).thenResolve(entity);
      const queryResult = await queryService.getById(entity.id);
      expect(queryResult).toEqual(entity);
    });
  });

  describe('#createMany', () => {
    it('call save on the repo with instances of entities when passed plain objects', async () => {
      const entities = testEntities();
      const entityInstances = entities.map(e => plainToClass(TestEntity, e));
      const { queryService, mockRepo } = createQueryService();
      when(mockRepo.target).thenReturn(TestEntity);
      when(mockRepo.save(deepEqual(entityInstances))).thenResolve(entityInstances);
      const queryResult = await queryService.createMany(entities);
      expect(queryResult).toEqual(entityInstances);
    });

    it('call save on the repo with instances of entities when passed instances', async () => {
      const entities = testEntities();
      const entityInstances = entities.map(e => plainToClass(TestEntity, e));
      const { queryService, mockRepo } = createQueryService();
      when(mockRepo.target).thenReturn(TestEntity);
      when(mockRepo.save(deepEqual(entityInstances))).thenResolve(entityInstances);
      const queryResult = await queryService.createMany(entityInstances);
      expect(queryResult).toEqual(entityInstances);
    });
  });

  describe('#createOne', () => {
    it('call save on the repo with an instance of the entity when passed a plain object', async () => {
      const entity = testEntities()[0];
      const entityInstance = plainToClass(TestEntity, entity);
      const { queryService, mockRepo } = createQueryService();
      when(mockRepo.target).thenReturn(TestEntity);
      when(mockRepo.save(deepEqual(entityInstance))).thenResolve(entityInstance);
      const queryResult = await queryService.createOne(entityInstance);
      expect(queryResult).toEqual(entityInstance);
    });

    it('call save on the repo with an instance of the entity when passed an instance', async () => {
      const entity = testEntities()[0];
      const entityInstance = plainToClass(TestEntity, entity);
      const { queryService, mockRepo } = createQueryService();
      when(mockRepo.target).thenReturn(TestEntity);
      when(mockRepo.save(deepEqual(entityInstance))).thenResolve(entityInstance);
      const queryResult = await queryService.createOne(entity);
      expect(queryResult).toEqual(entityInstance);
    });
  });

  describe('#deleteMany', () => {
    it('create a delete query builder and call execute', async () => {
      const affected = 10;
      const deleteMany: Filter<TestEntity> = { stringType: { eq: 'foo' } };
      const { queryService, mockQueryBuilder } = createQueryService();
      const deleteQueryBuilder: DeleteQueryBuilder<TestEntity> = mock(DeleteQueryBuilder);
      when(mockQueryBuilder.delete(objectContaining({ filter: deleteMany }))).thenReturn(instance(deleteQueryBuilder));
      when(deleteQueryBuilder.execute()).thenResolve({ raw: undefined, affected });
      const queryResult = await queryService.deleteMany(deleteMany);
      expect(queryResult).toEqual({ deletedCount: affected });
    });

    it('should return 0 if affected is not returned', async () => {
      const deleteMany: Filter<TestEntity> = { stringType: { eq: 'foo' } };
      const { queryService, mockQueryBuilder } = createQueryService();
      const deleteQueryBuilder: DeleteQueryBuilder<TestEntity> = mock(DeleteQueryBuilder);
      when(mockQueryBuilder.delete(objectContaining({ filter: deleteMany }))).thenReturn(instance(deleteQueryBuilder));
      when(deleteQueryBuilder.execute()).thenResolve({ raw: undefined });
      const queryResult = await queryService.deleteMany(deleteMany);
      expect(queryResult).toEqual({ deletedCount: 0 });
    });
  });

  describe('#deleteOne', () => {
    it('call getOne and then remove the entity', async () => {
      const entity = testEntities()[0];
      const { id } = entity;
      const { queryService, mockRepo } = createQueryService();
      when(mockRepo.findOneOrFail(id)).thenResolve(entity);
      when(mockRepo.remove(entity)).thenResolve(entity);
      const queryResult = await queryService.deleteOne(id);
      expect(queryResult).toEqual(entity);
    });

    it('call fail if the entity is not found', async () => {
      const entity = testEntities()[0];
      const { id } = entity;
      const err = new Error('not found');
      const { queryService, mockRepo } = createQueryService();
      when(mockRepo.findOneOrFail(id)).thenReject(err);
      return expect(queryService.deleteOne(id)).rejects.toThrowError(err);
    });
  });

  describe('#updateMany', () => {
    it('create a query to update all entities', async () => {
      const entity = testEntities()[0];
      const update = { stringType: 'baz' };
      const filter: Filter<TestEntity> = { id: { eq: entity.id } };
      const affected = 10;
      const { queryService, mockQueryBuilder, mockRepo } = createQueryService();
      const mockUpdateQueryBuilder: UpdateQueryBuilder<TestEntity> = mock(UpdateQueryBuilder);
      const mockUpdateQueryBuilderInstance = instance(mockUpdateQueryBuilder);
      when(mockQueryBuilder.update(objectContaining({ filter }))).thenReturn(mockUpdateQueryBuilderInstance);
      when(mockUpdateQueryBuilder.set(objectContaining(update))).thenReturn(mockUpdateQueryBuilderInstance);
      when(mockUpdateQueryBuilder.execute()).thenResolve({ generatedMaps: [], raw: undefined, affected });
      when(mockRepo.remove(entity)).thenResolve(entity);
      const queryResult = await queryService.updateMany(update, filter);
      expect(queryResult).toEqual({ updatedCount: affected });
    });

    it('should return 0 if affected is not defined', async () => {
      const entity = testEntities()[0];
      const update = { stringType: 'baz' };
      const filter: Filter<TestEntity> = { id: { eq: entity.id } };
      const { queryService, mockQueryBuilder, mockRepo } = createQueryService();
      const mockUpdateQueryBuilder: UpdateQueryBuilder<TestEntity> = mock(UpdateQueryBuilder);
      const mockUpdateQueryBuilderInstance = instance(mockUpdateQueryBuilder);
      when(mockQueryBuilder.update(objectContaining({ filter }))).thenReturn(mockUpdateQueryBuilderInstance);
      when(mockUpdateQueryBuilder.set(objectContaining(update))).thenReturn(mockUpdateQueryBuilderInstance);
      when(mockUpdateQueryBuilder.execute()).thenResolve({ generatedMaps: [], raw: undefined });
      when(mockRepo.remove(entity)).thenResolve(entity);
      const queryResult = await queryService.updateMany(update, filter);
      expect(queryResult).toEqual({ updatedCount: 0 });
    });
  });

  describe('#updateOne', () => {
    it('call getOne and then remove the entity', async () => {
      const entity = testEntities()[0];
      const updateId = entity.id;
      const update = { stringType: 'baz' };
      const savedEntity = plainToClass(TestEntity, { ...entity, ...update });
      const { queryService, mockRepo } = createQueryService();
      when(mockRepo.findOneOrFail(updateId)).thenResolve(entity);
      when(mockRepo.merge(entity, update)).thenReturn(savedEntity);
      when(mockRepo.save(deepEqual(savedEntity))).thenResolve(savedEntity);
      const queryResult = await queryService.updateOne(updateId, update);
      expect(queryResult).toEqual(savedEntity);
    });

    it('call fail if the entity is not found', async () => {
      const entity = testEntities()[0];
      const updateId = entity.id;
      const update = { stringType: 'baz' };
      const err = new Error('not found');
      const { queryService, mockRepo } = createQueryService();
      when(mockRepo.findOneOrFail(updateId)).thenReject(err);
      return expect(queryService.updateOne(updateId, update)).rejects.toThrowError(err);
    });
  });
});
