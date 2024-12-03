/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Nodejs example
 * The nodejs API description
 * OpenAPI spec version: 1.0
 */
import {
  useMutation,
  useQuery,
  type DataTag,
  type DefinedInitialDataOptions,
  type DefinedUseQueryResult,
  type MutationFunction,
  type QueryFunction,
  type QueryKey,
  type UndefinedInitialDataOptions,
  type UseMutationOptions,
  type UseMutationResult,
  type UseQueryOptions,
  type UseQueryResult,
} from '@tanstack/react-query'
import { http } from '../client'
import type {
  AssignorControllerCreate201,
  AssignorControllerDelete200,
  AssignorControllerGetById200,
  AssignorControllerListAll200Item,
  AssignorControllerUpdate200,
  AuthDto,
  Authenticate200,
  CreateAssignorDto,
  CreatePayableAndAssignorDto,
  CreatePayableDto,
  UpdateAssignorDto,
  UpdatePayableDto,
} from './api.schemas'

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * @summary Create Assignor
 */
export const getAssignorControllerCreateUrl = () => {
  return `/integrations/assignor/create`
}

export const assignorControllerCreate = async (
  createAssignorDto: CreateAssignorDto,
  options?: RequestInit,
): Promise<AssignorControllerCreate201> => {
  return http<Promise<AssignorControllerCreate201>>(getAssignorControllerCreateUrl(), {
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(createAssignorDto),
  })
}

export const getAssignorControllerCreateMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof assignorControllerCreate>>,
    TError,
    { data: CreateAssignorDto },
    TContext
  >
  request?: SecondParameter<typeof http>
}): UseMutationOptions<
  Awaited<ReturnType<typeof assignorControllerCreate>>,
  TError,
  { data: CreateAssignorDto },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof assignorControllerCreate>>,
    { data: CreateAssignorDto }
  > = props => {
    const { data } = props ?? {}

    return assignorControllerCreate(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type AssignorControllerCreateMutationResult = NonNullable<
  Awaited<ReturnType<typeof assignorControllerCreate>>
>
export type AssignorControllerCreateMutationBody = CreateAssignorDto
export type AssignorControllerCreateMutationError = unknown

/**
 * @summary Create Assignor
 */
export const useAssignorControllerCreate = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof assignorControllerCreate>>,
    TError,
    { data: CreateAssignorDto },
    TContext
  >
  request?: SecondParameter<typeof http>
}): UseMutationResult<
  Awaited<ReturnType<typeof assignorControllerCreate>>,
  TError,
  { data: CreateAssignorDto },
  TContext
> => {
  const mutationOptions = getAssignorControllerCreateMutationOptions(options)

  return useMutation(mutationOptions)
}

/**
 * @summary Get All Assignors
 */
export const getAssignorControllerListAllUrl = () => {
  return `/integrations/assignor/list`
}

export const assignorControllerListAll = async (
  options?: RequestInit,
): Promise<AssignorControllerListAll200Item[]> => {
  return http<Promise<AssignorControllerListAll200Item[]>>(
    getAssignorControllerListAllUrl(),
    {
      ...options,
      method: 'GET',
    },
  )
}

export const getAssignorControllerListAllQueryKey = () => {
  return [`/integrations/assignor/list`] as const
}

export const getAssignorControllerListAllQueryOptions = <
  TData = Awaited<ReturnType<typeof assignorControllerListAll>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof assignorControllerListAll>>, TError, TData>
  >
  request?: SecondParameter<typeof http>
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getAssignorControllerListAllQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof assignorControllerListAll>>> = ({
    signal,
  }) => assignorControllerListAll({ signal, ...requestOptions })

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof assignorControllerListAll>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData> }
}

export type AssignorControllerListAllQueryResult = NonNullable<
  Awaited<ReturnType<typeof assignorControllerListAll>>
>
export type AssignorControllerListAllQueryError = unknown

export function useAssignorControllerListAll<
  TData = Awaited<ReturnType<typeof assignorControllerListAll>>,
  TError = unknown,
>(options: {
  query: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof assignorControllerListAll>>, TError, TData>
  > &
    Pick<
      DefinedInitialDataOptions<
        Awaited<ReturnType<typeof assignorControllerListAll>>,
        TError,
        TData
      >,
      'initialData'
    >
  request?: SecondParameter<typeof http>
}): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useAssignorControllerListAll<
  TData = Awaited<ReturnType<typeof assignorControllerListAll>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof assignorControllerListAll>>, TError, TData>
  > &
    Pick<
      UndefinedInitialDataOptions<
        Awaited<ReturnType<typeof assignorControllerListAll>>,
        TError,
        TData
      >,
      'initialData'
    >
  request?: SecondParameter<typeof http>
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useAssignorControllerListAll<
  TData = Awaited<ReturnType<typeof assignorControllerListAll>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof assignorControllerListAll>>, TError, TData>
  >
  request?: SecondParameter<typeof http>
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Get All Assignors
 */

export function useAssignorControllerListAll<
  TData = Awaited<ReturnType<typeof assignorControllerListAll>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof assignorControllerListAll>>, TError, TData>
  >
  request?: SecondParameter<typeof http>
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {
  const queryOptions = getAssignorControllerListAllQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Get Assignor By Id
 */
export const getAssignorControllerGetByIdUrl = (id: string) => {
  return `/integrations/assignor/${id}`
}

export const assignorControllerGetById = async (
  id: string,
  options?: RequestInit,
): Promise<AssignorControllerGetById200> => {
  return http<Promise<AssignorControllerGetById200>>(
    getAssignorControllerGetByIdUrl(id),
    {
      ...options,
      method: 'GET',
    },
  )
}

export const getAssignorControllerGetByIdQueryKey = (id: string) => {
  return [`/integrations/assignor/${id}`] as const
}

export const getAssignorControllerGetByIdQueryOptions = <
  TData = Awaited<ReturnType<typeof assignorControllerGetById>>,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof assignorControllerGetById>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof http>
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getAssignorControllerGetByIdQueryKey(id)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof assignorControllerGetById>>> = ({
    signal,
  }) => assignorControllerGetById(id, { signal, ...requestOptions })

  return { queryKey, queryFn, enabled: !!id, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof assignorControllerGetById>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData> }
}

export type AssignorControllerGetByIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof assignorControllerGetById>>
>
export type AssignorControllerGetByIdQueryError = unknown

export function useAssignorControllerGetById<
  TData = Awaited<ReturnType<typeof assignorControllerGetById>>,
  TError = unknown,
>(
  id: string,
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof assignorControllerGetById>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof assignorControllerGetById>>,
          TError,
          TData
        >,
        'initialData'
      >
    request?: SecondParameter<typeof http>
  },
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useAssignorControllerGetById<
  TData = Awaited<ReturnType<typeof assignorControllerGetById>>,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof assignorControllerGetById>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof assignorControllerGetById>>,
          TError,
          TData
        >,
        'initialData'
      >
    request?: SecondParameter<typeof http>
  },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useAssignorControllerGetById<
  TData = Awaited<ReturnType<typeof assignorControllerGetById>>,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof assignorControllerGetById>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof http>
  },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Get Assignor By Id
 */

export function useAssignorControllerGetById<
  TData = Awaited<ReturnType<typeof assignorControllerGetById>>,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof assignorControllerGetById>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof http>
  },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {
  const queryOptions = getAssignorControllerGetByIdQueryOptions(id, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Update Assignor By Id
 */
export const getAssignorControllerUpdateUrl = (id: string) => {
  return `/integrations/assignor/${id}`
}

export const assignorControllerUpdate = async (
  id: string,
  updateAssignorDto: UpdateAssignorDto,
  options?: RequestInit,
): Promise<AssignorControllerUpdate200> => {
  return http<Promise<AssignorControllerUpdate200>>(getAssignorControllerUpdateUrl(id), {
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(updateAssignorDto),
  })
}

export const getAssignorControllerUpdateMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof assignorControllerUpdate>>,
    TError,
    { id: string; data: UpdateAssignorDto },
    TContext
  >
  request?: SecondParameter<typeof http>
}): UseMutationOptions<
  Awaited<ReturnType<typeof assignorControllerUpdate>>,
  TError,
  { id: string; data: UpdateAssignorDto },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof assignorControllerUpdate>>,
    { id: string; data: UpdateAssignorDto }
  > = props => {
    const { id, data } = props ?? {}

    return assignorControllerUpdate(id, data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type AssignorControllerUpdateMutationResult = NonNullable<
  Awaited<ReturnType<typeof assignorControllerUpdate>>
>
export type AssignorControllerUpdateMutationBody = UpdateAssignorDto
export type AssignorControllerUpdateMutationError = unknown

/**
 * @summary Update Assignor By Id
 */
export const useAssignorControllerUpdate = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof assignorControllerUpdate>>,
    TError,
    { id: string; data: UpdateAssignorDto },
    TContext
  >
  request?: SecondParameter<typeof http>
}): UseMutationResult<
  Awaited<ReturnType<typeof assignorControllerUpdate>>,
  TError,
  { id: string; data: UpdateAssignorDto },
  TContext
> => {
  const mutationOptions = getAssignorControllerUpdateMutationOptions(options)

  return useMutation(mutationOptions)
}

/**
 * @summary Delete Assignor By Id
 */
export const getAssignorControllerDeleteUrl = (id: string) => {
  return `/integrations/assignor/${id}`
}

export const assignorControllerDelete = async (
  id: string,
  options?: RequestInit,
): Promise<AssignorControllerDelete200> => {
  return http<Promise<AssignorControllerDelete200>>(getAssignorControllerDeleteUrl(id), {
    ...options,
    method: 'DELETE',
  })
}

export const getAssignorControllerDeleteMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof assignorControllerDelete>>,
    TError,
    { id: string },
    TContext
  >
  request?: SecondParameter<typeof http>
}): UseMutationOptions<
  Awaited<ReturnType<typeof assignorControllerDelete>>,
  TError,
  { id: string },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof assignorControllerDelete>>,
    { id: string }
  > = props => {
    const { id } = props ?? {}

    return assignorControllerDelete(id, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type AssignorControllerDeleteMutationResult = NonNullable<
  Awaited<ReturnType<typeof assignorControllerDelete>>
>

export type AssignorControllerDeleteMutationError = unknown

/**
 * @summary Delete Assignor By Id
 */
export const useAssignorControllerDelete = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof assignorControllerDelete>>,
    TError,
    { id: string },
    TContext
  >
  request?: SecondParameter<typeof http>
}): UseMutationResult<
  Awaited<ReturnType<typeof assignorControllerDelete>>,
  TError,
  { id: string },
  TContext
> => {
  const mutationOptions = getAssignorControllerDeleteMutationOptions(options)

  return useMutation(mutationOptions)
}

/**
 * @summary Create Payable and Assignor
 */
export const getPayableControllerCreatePayableAndAssignorUrl = () => {
  return `/integrations/payable`
}

export const payableControllerCreatePayableAndAssignor = async (
  createPayableAndAssignorDto: CreatePayableAndAssignorDto,
  options?: RequestInit,
): Promise<void> => {
  return http<Promise<void>>(getPayableControllerCreatePayableAndAssignorUrl(), {
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(createPayableAndAssignorDto),
  })
}

export const getPayableControllerCreatePayableAndAssignorMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof payableControllerCreatePayableAndAssignor>>,
    TError,
    { data: CreatePayableAndAssignorDto },
    TContext
  >
  request?: SecondParameter<typeof http>
}): UseMutationOptions<
  Awaited<ReturnType<typeof payableControllerCreatePayableAndAssignor>>,
  TError,
  { data: CreatePayableAndAssignorDto },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof payableControllerCreatePayableAndAssignor>>,
    { data: CreatePayableAndAssignorDto }
  > = props => {
    const { data } = props ?? {}

    return payableControllerCreatePayableAndAssignor(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type PayableControllerCreatePayableAndAssignorMutationResult = NonNullable<
  Awaited<ReturnType<typeof payableControllerCreatePayableAndAssignor>>
>
export type PayableControllerCreatePayableAndAssignorMutationBody =
  CreatePayableAndAssignorDto
export type PayableControllerCreatePayableAndAssignorMutationError = unknown

/**
 * @summary Create Payable and Assignor
 */
export const usePayableControllerCreatePayableAndAssignor = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof payableControllerCreatePayableAndAssignor>>,
    TError,
    { data: CreatePayableAndAssignorDto },
    TContext
  >
  request?: SecondParameter<typeof http>
}): UseMutationResult<
  Awaited<ReturnType<typeof payableControllerCreatePayableAndAssignor>>,
  TError,
  { data: CreatePayableAndAssignorDto },
  TContext
> => {
  const mutationOptions =
    getPayableControllerCreatePayableAndAssignorMutationOptions(options)

  return useMutation(mutationOptions)
}

/**
 * @summary Create Payable
 */
export const getPayableControllerCreateUrl = () => {
  return `/integrations/payable/create`
}

export const payableControllerCreate = async (
  createPayableDto: CreatePayableDto,
  options?: RequestInit,
): Promise<void> => {
  return http<Promise<void>>(getPayableControllerCreateUrl(), {
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(createPayableDto),
  })
}

export const getPayableControllerCreateMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof payableControllerCreate>>,
    TError,
    { data: CreatePayableDto },
    TContext
  >
  request?: SecondParameter<typeof http>
}): UseMutationOptions<
  Awaited<ReturnType<typeof payableControllerCreate>>,
  TError,
  { data: CreatePayableDto },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof payableControllerCreate>>,
    { data: CreatePayableDto }
  > = props => {
    const { data } = props ?? {}

    return payableControllerCreate(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type PayableControllerCreateMutationResult = NonNullable<
  Awaited<ReturnType<typeof payableControllerCreate>>
>
export type PayableControllerCreateMutationBody = CreatePayableDto
export type PayableControllerCreateMutationError = unknown

/**
 * @summary Create Payable
 */
export const usePayableControllerCreate = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof payableControllerCreate>>,
    TError,
    { data: CreatePayableDto },
    TContext
  >
  request?: SecondParameter<typeof http>
}): UseMutationResult<
  Awaited<ReturnType<typeof payableControllerCreate>>,
  TError,
  { data: CreatePayableDto },
  TContext
> => {
  const mutationOptions = getPayableControllerCreateMutationOptions(options)

  return useMutation(mutationOptions)
}

/**
 * @summary Get Payable By Id
 */
export const getPayableControllerGetByIdUrl = (id: string) => {
  return `/integrations/payable/${id}`
}

export const payableControllerGetById = async (
  id: string,
  options?: RequestInit,
): Promise<void> => {
  return http<Promise<void>>(getPayableControllerGetByIdUrl(id), {
    ...options,
    method: 'GET',
  })
}

export const getPayableControllerGetByIdQueryKey = (id: string) => {
  return [`/integrations/payable/${id}`] as const
}

export const getPayableControllerGetByIdQueryOptions = <
  TData = Awaited<ReturnType<typeof payableControllerGetById>>,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof payableControllerGetById>>, TError, TData>
    >
    request?: SecondParameter<typeof http>
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getPayableControllerGetByIdQueryKey(id)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof payableControllerGetById>>> = ({
    signal,
  }) => payableControllerGetById(id, { signal, ...requestOptions })

  return { queryKey, queryFn, enabled: !!id, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof payableControllerGetById>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData> }
}

export type PayableControllerGetByIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof payableControllerGetById>>
>
export type PayableControllerGetByIdQueryError = unknown

export function usePayableControllerGetById<
  TData = Awaited<ReturnType<typeof payableControllerGetById>>,
  TError = unknown,
>(
  id: string,
  options: {
    query: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof payableControllerGetById>>, TError, TData>
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof payableControllerGetById>>,
          TError,
          TData
        >,
        'initialData'
      >
    request?: SecondParameter<typeof http>
  },
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function usePayableControllerGetById<
  TData = Awaited<ReturnType<typeof payableControllerGetById>>,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof payableControllerGetById>>, TError, TData>
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof payableControllerGetById>>,
          TError,
          TData
        >,
        'initialData'
      >
    request?: SecondParameter<typeof http>
  },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function usePayableControllerGetById<
  TData = Awaited<ReturnType<typeof payableControllerGetById>>,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof payableControllerGetById>>, TError, TData>
    >
    request?: SecondParameter<typeof http>
  },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Get Payable By Id
 */

export function usePayableControllerGetById<
  TData = Awaited<ReturnType<typeof payableControllerGetById>>,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof payableControllerGetById>>, TError, TData>
    >
    request?: SecondParameter<typeof http>
  },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {
  const queryOptions = getPayableControllerGetByIdQueryOptions(id, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Update Payable By Id
 */
export const getPayableControllerUpdateUrl = (id: string) => {
  return `/integrations/payable/${id}`
}

export const payableControllerUpdate = async (
  id: string,
  updatePayableDto: UpdatePayableDto,
  options?: RequestInit,
): Promise<void> => {
  return http<Promise<void>>(getPayableControllerUpdateUrl(id), {
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(updatePayableDto),
  })
}

export const getPayableControllerUpdateMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof payableControllerUpdate>>,
    TError,
    { id: string; data: UpdatePayableDto },
    TContext
  >
  request?: SecondParameter<typeof http>
}): UseMutationOptions<
  Awaited<ReturnType<typeof payableControllerUpdate>>,
  TError,
  { id: string; data: UpdatePayableDto },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof payableControllerUpdate>>,
    { id: string; data: UpdatePayableDto }
  > = props => {
    const { id, data } = props ?? {}

    return payableControllerUpdate(id, data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type PayableControllerUpdateMutationResult = NonNullable<
  Awaited<ReturnType<typeof payableControllerUpdate>>
>
export type PayableControllerUpdateMutationBody = UpdatePayableDto
export type PayableControllerUpdateMutationError = unknown

/**
 * @summary Update Payable By Id
 */
export const usePayableControllerUpdate = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof payableControllerUpdate>>,
    TError,
    { id: string; data: UpdatePayableDto },
    TContext
  >
  request?: SecondParameter<typeof http>
}): UseMutationResult<
  Awaited<ReturnType<typeof payableControllerUpdate>>,
  TError,
  { id: string; data: UpdatePayableDto },
  TContext
> => {
  const mutationOptions = getPayableControllerUpdateMutationOptions(options)

  return useMutation(mutationOptions)
}

/**
 * @summary Delete Payable By Id
 */
export const getPayableControllerDeleteUrl = (id: string) => {
  return `/integrations/payable/${id}`
}

export const payableControllerDelete = async (
  id: string,
  options?: RequestInit,
): Promise<void> => {
  return http<Promise<void>>(getPayableControllerDeleteUrl(id), {
    ...options,
    method: 'DELETE',
  })
}

export const getPayableControllerDeleteMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof payableControllerDelete>>,
    TError,
    { id: string },
    TContext
  >
  request?: SecondParameter<typeof http>
}): UseMutationOptions<
  Awaited<ReturnType<typeof payableControllerDelete>>,
  TError,
  { id: string },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof payableControllerDelete>>,
    { id: string }
  > = props => {
    const { id } = props ?? {}

    return payableControllerDelete(id, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type PayableControllerDeleteMutationResult = NonNullable<
  Awaited<ReturnType<typeof payableControllerDelete>>
>

export type PayableControllerDeleteMutationError = unknown

/**
 * @summary Delete Payable By Id
 */
export const usePayableControllerDelete = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof payableControllerDelete>>,
    TError,
    { id: string },
    TContext
  >
  request?: SecondParameter<typeof http>
}): UseMutationResult<
  Awaited<ReturnType<typeof payableControllerDelete>>,
  TError,
  { id: string },
  TContext
> => {
  const mutationOptions = getPayableControllerDeleteMutationOptions(options)

  return useMutation(mutationOptions)
}

/**
 * @summary Authenticate User
 */
export const getAuthenticateUrl = () => {
  return `/integrations/auth/login`
}

export const authenticate = async (
  authDto: AuthDto,
  options?: RequestInit,
): Promise<Authenticate200> => {
  return http<Promise<Authenticate200>>(getAuthenticateUrl(), {
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(authDto),
  })
}

export const getAuthenticateMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof authenticate>>,
    TError,
    { data: AuthDto },
    TContext
  >
  request?: SecondParameter<typeof http>
}): UseMutationOptions<
  Awaited<ReturnType<typeof authenticate>>,
  TError,
  { data: AuthDto },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof authenticate>>,
    { data: AuthDto }
  > = props => {
    const { data } = props ?? {}

    return authenticate(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type AuthenticateMutationResult = NonNullable<
  Awaited<ReturnType<typeof authenticate>>
>
export type AuthenticateMutationBody = AuthDto
export type AuthenticateMutationError = unknown

/**
 * @summary Authenticate User
 */
export const useAuthenticate = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof authenticate>>,
    TError,
    { data: AuthDto },
    TContext
  >
  request?: SecondParameter<typeof http>
}): UseMutationResult<
  Awaited<ReturnType<typeof authenticate>>,
  TError,
  { data: AuthDto },
  TContext
> => {
  const mutationOptions = getAuthenticateMutationOptions(options)

  return useMutation(mutationOptions)
}

/**
 * @summary Create User
 */
export const getAuthControllerSignupUrl = () => {
  return `/integrations/auth/signup`
}

export const authControllerSignup = async (
  authDto: AuthDto,
  options?: RequestInit,
): Promise<void> => {
  return http<Promise<void>>(getAuthControllerSignupUrl(), {
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(authDto),
  })
}

export const getAuthControllerSignupMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof authControllerSignup>>,
    TError,
    { data: AuthDto },
    TContext
  >
  request?: SecondParameter<typeof http>
}): UseMutationOptions<
  Awaited<ReturnType<typeof authControllerSignup>>,
  TError,
  { data: AuthDto },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof authControllerSignup>>,
    { data: AuthDto }
  > = props => {
    const { data } = props ?? {}

    return authControllerSignup(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type AuthControllerSignupMutationResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignup>>
>
export type AuthControllerSignupMutationBody = AuthDto
export type AuthControllerSignupMutationError = unknown

/**
 * @summary Create User
 */
export const useAuthControllerSignup = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof authControllerSignup>>,
    TError,
    { data: AuthDto },
    TContext
  >
  request?: SecondParameter<typeof http>
}): UseMutationResult<
  Awaited<ReturnType<typeof authControllerSignup>>,
  TError,
  { data: AuthDto },
  TContext
> => {
  const mutationOptions = getAuthControllerSignupMutationOptions(options)

  return useMutation(mutationOptions)
}
