
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ReferList
 * 
 */
export type ReferList = $Result.DefaultSelection<Prisma.$ReferListPayload>
/**
 * Model Result
 * 
 */
export type Result = $Result.DefaultSelection<Prisma.$ResultPayload>
/**
 * Model AnsQus
 * 
 */
export type AnsQus = $Result.DefaultSelection<Prisma.$AnsQusPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Earning
 * 
 */
export type Earning = $Result.DefaultSelection<Prisma.$EarningPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model SubCategory
 * 
 */
export type SubCategory = $Result.DefaultSelection<Prisma.$SubCategoryPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.referList`: Exposes CRUD operations for the **ReferList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReferLists
    * const referLists = await prisma.referList.findMany()
    * ```
    */
  get referList(): Prisma.ReferListDelegate<ExtArgs>;

  /**
   * `prisma.result`: Exposes CRUD operations for the **Result** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Results
    * const results = await prisma.result.findMany()
    * ```
    */
  get result(): Prisma.ResultDelegate<ExtArgs>;

  /**
   * `prisma.ansQus`: Exposes CRUD operations for the **AnsQus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnsQuses
    * const ansQuses = await prisma.ansQus.findMany()
    * ```
    */
  get ansQus(): Prisma.AnsQusDelegate<ExtArgs>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs>;

  /**
   * `prisma.earning`: Exposes CRUD operations for the **Earning** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Earnings
    * const earnings = await prisma.earning.findMany()
    * ```
    */
  get earning(): Prisma.EarningDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.subCategory`: Exposes CRUD operations for the **SubCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubCategories
    * const subCategories = await prisma.subCategory.findMany()
    * ```
    */
  get subCategory(): Prisma.SubCategoryDelegate<ExtArgs>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.3.1
   * Query Engine version: 2804dc98259d2ea960602aca6b8e7fdc03c1758f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ReferList: 'ReferList',
    Result: 'Result',
    AnsQus: 'AnsQus',
    Payment: 'Payment',
    Earning: 'Earning',
    Category: 'Category',
    SubCategory: 'SubCategory',
    Question: 'Question'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'referList' | 'result' | 'ansQus' | 'payment' | 'earning' | 'category' | 'subCategory' | 'question'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ReferList: {
        payload: Prisma.$ReferListPayload<ExtArgs>
        fields: Prisma.ReferListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReferListFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReferListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferListFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReferListPayload>
          }
          findFirst: {
            args: Prisma.ReferListFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReferListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferListFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReferListPayload>
          }
          findMany: {
            args: Prisma.ReferListFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReferListPayload>[]
          }
          create: {
            args: Prisma.ReferListCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReferListPayload>
          }
          createMany: {
            args: Prisma.ReferListCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ReferListDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReferListPayload>
          }
          update: {
            args: Prisma.ReferListUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReferListPayload>
          }
          deleteMany: {
            args: Prisma.ReferListDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ReferListUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ReferListUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReferListPayload>
          }
          aggregate: {
            args: Prisma.ReferListAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReferList>
          }
          groupBy: {
            args: Prisma.ReferListGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReferListGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReferListCountArgs<ExtArgs>,
            result: $Utils.Optional<ReferListCountAggregateOutputType> | number
          }
        }
      }
      Result: {
        payload: Prisma.$ResultPayload<ExtArgs>
        fields: Prisma.ResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResultFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResultFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          findFirst: {
            args: Prisma.ResultFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResultFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          findMany: {
            args: Prisma.ResultFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>[]
          }
          create: {
            args: Prisma.ResultCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          createMany: {
            args: Prisma.ResultCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ResultDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          update: {
            args: Prisma.ResultUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          deleteMany: {
            args: Prisma.ResultDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ResultUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ResultUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          aggregate: {
            args: Prisma.ResultAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateResult>
          }
          groupBy: {
            args: Prisma.ResultGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResultCountArgs<ExtArgs>,
            result: $Utils.Optional<ResultCountAggregateOutputType> | number
          }
        }
      }
      AnsQus: {
        payload: Prisma.$AnsQusPayload<ExtArgs>
        fields: Prisma.AnsQusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnsQusFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnsQusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnsQusFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnsQusPayload>
          }
          findFirst: {
            args: Prisma.AnsQusFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnsQusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnsQusFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnsQusPayload>
          }
          findMany: {
            args: Prisma.AnsQusFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnsQusPayload>[]
          }
          create: {
            args: Prisma.AnsQusCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnsQusPayload>
          }
          createMany: {
            args: Prisma.AnsQusCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AnsQusDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnsQusPayload>
          }
          update: {
            args: Prisma.AnsQusUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnsQusPayload>
          }
          deleteMany: {
            args: Prisma.AnsQusDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AnsQusUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AnsQusUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnsQusPayload>
          }
          aggregate: {
            args: Prisma.AnsQusAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAnsQus>
          }
          groupBy: {
            args: Prisma.AnsQusGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AnsQusGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnsQusCountArgs<ExtArgs>,
            result: $Utils.Optional<AnsQusCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>,
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Earning: {
        payload: Prisma.$EarningPayload<ExtArgs>
        fields: Prisma.EarningFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EarningFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EarningPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EarningFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EarningPayload>
          }
          findFirst: {
            args: Prisma.EarningFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EarningPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EarningFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EarningPayload>
          }
          findMany: {
            args: Prisma.EarningFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EarningPayload>[]
          }
          create: {
            args: Prisma.EarningCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EarningPayload>
          }
          createMany: {
            args: Prisma.EarningCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EarningDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EarningPayload>
          }
          update: {
            args: Prisma.EarningUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EarningPayload>
          }
          deleteMany: {
            args: Prisma.EarningDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EarningUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EarningUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EarningPayload>
          }
          aggregate: {
            args: Prisma.EarningAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEarning>
          }
          groupBy: {
            args: Prisma.EarningGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EarningGroupByOutputType>[]
          }
          count: {
            args: Prisma.EarningCountArgs<ExtArgs>,
            result: $Utils.Optional<EarningCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      SubCategory: {
        payload: Prisma.$SubCategoryPayload<ExtArgs>
        fields: Prisma.SubCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubCategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubCategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          findFirst: {
            args: Prisma.SubCategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubCategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          findMany: {
            args: Prisma.SubCategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>[]
          }
          create: {
            args: Prisma.SubCategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          createMany: {
            args: Prisma.SubCategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SubCategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          update: {
            args: Prisma.SubCategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          deleteMany: {
            args: Prisma.SubCategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SubCategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SubCategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          aggregate: {
            args: Prisma.SubCategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSubCategory>
          }
          groupBy: {
            args: Prisma.SubCategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SubCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubCategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<SubCategoryCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>,
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ReferListCountOutputType
   */

  export type ReferListCountOutputType = {
    user: number
  }

  export type ReferListCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | ReferListCountOutputTypeCountUserArgs
  }

  // Custom InputTypes

  /**
   * ReferListCountOutputType without action
   */
  export type ReferListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferListCountOutputType
     */
    select?: ReferListCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ReferListCountOutputType without action
   */
  export type ReferListCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }



  /**
   * Count Type ResultCountOutputType
   */

  export type ResultCountOutputType = {
    User: number
    ans_qus_list: number
  }

  export type ResultCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    User?: boolean | ResultCountOutputTypeCountUserArgs
    ans_qus_list?: boolean | ResultCountOutputTypeCountAns_qus_listArgs
  }

  // Custom InputTypes

  /**
   * ResultCountOutputType without action
   */
  export type ResultCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultCountOutputType
     */
    select?: ResultCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ResultCountOutputType without action
   */
  export type ResultCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * ResultCountOutputType without action
   */
  export type ResultCountOutputTypeCountAns_qus_listArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AnsQusWhereInput
  }



  /**
   * Count Type PaymentCountOutputType
   */

  export type PaymentCountOutputType = {
    User: number
  }

  export type PaymentCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    User?: boolean | PaymentCountOutputTypeCountUserArgs
  }

  // Custom InputTypes

  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCountOutputType
     */
    select?: PaymentCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }



  /**
   * Count Type EarningCountOutputType
   */

  export type EarningCountOutputType = {
    User: number
  }

  export type EarningCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    User?: boolean | EarningCountOutputTypeCountUserArgs
  }

  // Custom InputTypes

  /**
   * EarningCountOutputType without action
   */
  export type EarningCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EarningCountOutputType
     */
    select?: EarningCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * EarningCountOutputType without action
   */
  export type EarningCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }



  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    SubCategory: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    SubCategory?: boolean | CategoryCountOutputTypeCountSubCategoryArgs
  }

  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountSubCategoryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SubCategoryWhereInput
  }



  /**
   * Count Type SubCategoryCountOutputType
   */

  export type SubCategoryCountOutputType = {
    Question: number
  }

  export type SubCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Question?: boolean | SubCategoryCountOutputTypeCountQuestionArgs
  }

  // Custom InputTypes

  /**
   * SubCategoryCountOutputType without action
   */
  export type SubCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoryCountOutputType
     */
    select?: SubCategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SubCategoryCountOutputType without action
   */
  export type SubCategoryCountOutputTypeCountQuestionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    picture: string | null
    select_category: string | null
    own_refer_code: string | null
    refer_contain: string | null
    referListId: string | null
    earningId: string | null
    resultId: string | null
    paymentId: string | null
    email: string | null
    api_auth_key: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    picture: string | null
    select_category: string | null
    own_refer_code: string | null
    refer_contain: string | null
    referListId: string | null
    earningId: string | null
    resultId: string | null
    paymentId: string | null
    email: string | null
    api_auth_key: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    picture: number
    select_category: number
    own_refer_code: number
    refer_contain: number
    referListId: number
    earningId: number
    resultId: number
    paymentId: number
    email: number
    api_auth_key: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    picture?: true
    select_category?: true
    own_refer_code?: true
    refer_contain?: true
    referListId?: true
    earningId?: true
    resultId?: true
    paymentId?: true
    email?: true
    api_auth_key?: true
    createAt?: true
    updateAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    picture?: true
    select_category?: true
    own_refer_code?: true
    refer_contain?: true
    referListId?: true
    earningId?: true
    resultId?: true
    paymentId?: true
    email?: true
    api_auth_key?: true
    createAt?: true
    updateAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    picture?: true
    select_category?: true
    own_refer_code?: true
    refer_contain?: true
    referListId?: true
    earningId?: true
    resultId?: true
    paymentId?: true
    email?: true
    api_auth_key?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    picture: string | null
    select_category: string | null
    own_refer_code: string | null
    refer_contain: string | null
    referListId: string | null
    earningId: string
    resultId: string
    paymentId: string
    email: string
    api_auth_key: string
    createAt: Date
    updateAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    picture?: boolean
    select_category?: boolean
    own_refer_code?: boolean
    refer_contain?: boolean
    referListId?: boolean
    earningId?: boolean
    resultId?: boolean
    paymentId?: boolean
    email?: boolean
    api_auth_key?: boolean
    createAt?: boolean
    updateAt?: boolean
    earning?: boolean | EarningDefaultArgs<ExtArgs>
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
    result?: boolean | ResultDefaultArgs<ExtArgs>
    ReferList?: boolean | User$ReferListArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    picture?: boolean
    select_category?: boolean
    own_refer_code?: boolean
    refer_contain?: boolean
    referListId?: boolean
    earningId?: boolean
    resultId?: boolean
    paymentId?: boolean
    email?: boolean
    api_auth_key?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    earning?: boolean | EarningDefaultArgs<ExtArgs>
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
    result?: boolean | ResultDefaultArgs<ExtArgs>
    ReferList?: boolean | User$ReferListArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      earning: Prisma.$EarningPayload<ExtArgs>
      payment: Prisma.$PaymentPayload<ExtArgs>
      result: Prisma.$ResultPayload<ExtArgs>
      ReferList: Prisma.$ReferListPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: string
      name: string | null
      picture: string | null
      select_category: string | null
      own_refer_code: string | null
      refer_contain: string | null
      referListId: string | null
      earningId: string
      resultId: string
      paymentId: string
      email: string
      api_auth_key: string
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    earning<T extends EarningDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EarningDefaultArgs<ExtArgs>>): Prisma__EarningClient<$Result.GetResult<Prisma.$EarningPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    payment<T extends PaymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentDefaultArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    result<T extends ResultDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResultDefaultArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    ReferList<T extends User$ReferListArgs<ExtArgs> = {}>(args?: Subset<T, User$ReferListArgs<ExtArgs>>): Prisma__ReferListClient<$Result.GetResult<Prisma.$ReferListPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly picture: FieldRef<"User", 'String'>
    readonly select_category: FieldRef<"User", 'String'>
    readonly own_refer_code: FieldRef<"User", 'String'>
    readonly refer_contain: FieldRef<"User", 'String'>
    readonly referListId: FieldRef<"User", 'String'>
    readonly earningId: FieldRef<"User", 'String'>
    readonly resultId: FieldRef<"User", 'String'>
    readonly paymentId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly api_auth_key: FieldRef<"User", 'String'>
    readonly createAt: FieldRef<"User", 'DateTime'>
    readonly updateAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.ReferList
   */
  export type User$ReferListArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferList
     */
    select?: ReferListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReferListInclude<ExtArgs> | null
    where?: ReferListWhereInput
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model ReferList
   */

  export type AggregateReferList = {
    _count: ReferListCountAggregateOutputType | null
    _min: ReferListMinAggregateOutputType | null
    _max: ReferListMaxAggregateOutputType | null
  }

  export type ReferListMinAggregateOutputType = {
    id: string | null
    refer: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ReferListMaxAggregateOutputType = {
    id: string | null
    refer: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ReferListCountAggregateOutputType = {
    id: number
    refer: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type ReferListMinAggregateInputType = {
    id?: true
    refer?: true
    createAt?: true
    updateAt?: true
  }

  export type ReferListMaxAggregateInputType = {
    id?: true
    refer?: true
    createAt?: true
    updateAt?: true
  }

  export type ReferListCountAggregateInputType = {
    id?: true
    refer?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type ReferListAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReferList to aggregate.
     */
    where?: ReferListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferLists to fetch.
     */
    orderBy?: ReferListOrderByWithRelationInput | ReferListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReferListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReferLists
    **/
    _count?: true | ReferListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferListMaxAggregateInputType
  }

  export type GetReferListAggregateType<T extends ReferListAggregateArgs> = {
        [P in keyof T & keyof AggregateReferList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferList[P]>
      : GetScalarType<T[P], AggregateReferList[P]>
  }




  export type ReferListGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ReferListWhereInput
    orderBy?: ReferListOrderByWithAggregationInput | ReferListOrderByWithAggregationInput[]
    by: ReferListScalarFieldEnum[] | ReferListScalarFieldEnum
    having?: ReferListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferListCountAggregateInputType | true
    _min?: ReferListMinAggregateInputType
    _max?: ReferListMaxAggregateInputType
  }

  export type ReferListGroupByOutputType = {
    id: string
    refer: string
    createAt: Date
    updateAt: Date
    _count: ReferListCountAggregateOutputType | null
    _min: ReferListMinAggregateOutputType | null
    _max: ReferListMaxAggregateOutputType | null
  }

  type GetReferListGroupByPayload<T extends ReferListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferListGroupByOutputType[P]>
            : GetScalarType<T[P], ReferListGroupByOutputType[P]>
        }
      >
    >


  export type ReferListSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    refer?: boolean
    createAt?: boolean
    updateAt?: boolean
    user?: boolean | ReferList$userArgs<ExtArgs>
    _count?: boolean | ReferListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referList"]>

  export type ReferListSelectScalar = {
    id?: boolean
    refer?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type ReferListInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | ReferList$userArgs<ExtArgs>
    _count?: boolean | ReferListCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ReferListPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "ReferList"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      refer: string
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["referList"]>
    composites: {}
  }


  type ReferListGetPayload<S extends boolean | null | undefined | ReferListDefaultArgs> = $Result.GetResult<Prisma.$ReferListPayload, S>

  type ReferListCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ReferListFindManyArgs, 'select' | 'include'> & {
      select?: ReferListCountAggregateInputType | true
    }

  export interface ReferListDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReferList'], meta: { name: 'ReferList' } }
    /**
     * Find zero or one ReferList that matches the filter.
     * @param {ReferListFindUniqueArgs} args - Arguments to find a ReferList
     * @example
     * // Get one ReferList
     * const referList = await prisma.referList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReferListFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ReferListFindUniqueArgs<ExtArgs>>
    ): Prisma__ReferListClient<$Result.GetResult<Prisma.$ReferListPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ReferList that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ReferListFindUniqueOrThrowArgs} args - Arguments to find a ReferList
     * @example
     * // Get one ReferList
     * const referList = await prisma.referList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReferListFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReferListFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ReferListClient<$Result.GetResult<Prisma.$ReferListPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ReferList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferListFindFirstArgs} args - Arguments to find a ReferList
     * @example
     * // Get one ReferList
     * const referList = await prisma.referList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReferListFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ReferListFindFirstArgs<ExtArgs>>
    ): Prisma__ReferListClient<$Result.GetResult<Prisma.$ReferListPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ReferList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferListFindFirstOrThrowArgs} args - Arguments to find a ReferList
     * @example
     * // Get one ReferList
     * const referList = await prisma.referList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReferListFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReferListFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ReferListClient<$Result.GetResult<Prisma.$ReferListPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ReferLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferListFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReferLists
     * const referLists = await prisma.referList.findMany()
     * 
     * // Get first 10 ReferLists
     * const referLists = await prisma.referList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referListWithIdOnly = await prisma.referList.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ReferListFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReferListFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferListPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ReferList.
     * @param {ReferListCreateArgs} args - Arguments to create a ReferList.
     * @example
     * // Create one ReferList
     * const ReferList = await prisma.referList.create({
     *   data: {
     *     // ... data to create a ReferList
     *   }
     * })
     * 
    **/
    create<T extends ReferListCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ReferListCreateArgs<ExtArgs>>
    ): Prisma__ReferListClient<$Result.GetResult<Prisma.$ReferListPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ReferLists.
     *     @param {ReferListCreateManyArgs} args - Arguments to create many ReferLists.
     *     @example
     *     // Create many ReferLists
     *     const referList = await prisma.referList.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReferListCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReferListCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReferList.
     * @param {ReferListDeleteArgs} args - Arguments to delete one ReferList.
     * @example
     * // Delete one ReferList
     * const ReferList = await prisma.referList.delete({
     *   where: {
     *     // ... filter to delete one ReferList
     *   }
     * })
     * 
    **/
    delete<T extends ReferListDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ReferListDeleteArgs<ExtArgs>>
    ): Prisma__ReferListClient<$Result.GetResult<Prisma.$ReferListPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ReferList.
     * @param {ReferListUpdateArgs} args - Arguments to update one ReferList.
     * @example
     * // Update one ReferList
     * const referList = await prisma.referList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReferListUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ReferListUpdateArgs<ExtArgs>>
    ): Prisma__ReferListClient<$Result.GetResult<Prisma.$ReferListPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ReferLists.
     * @param {ReferListDeleteManyArgs} args - Arguments to filter ReferLists to delete.
     * @example
     * // Delete a few ReferLists
     * const { count } = await prisma.referList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReferListDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReferListDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReferLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReferLists
     * const referList = await prisma.referList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReferListUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ReferListUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReferList.
     * @param {ReferListUpsertArgs} args - Arguments to update or create a ReferList.
     * @example
     * // Update or create a ReferList
     * const referList = await prisma.referList.upsert({
     *   create: {
     *     // ... data to create a ReferList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReferList we want to update
     *   }
     * })
    **/
    upsert<T extends ReferListUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ReferListUpsertArgs<ExtArgs>>
    ): Prisma__ReferListClient<$Result.GetResult<Prisma.$ReferListPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ReferLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferListCountArgs} args - Arguments to filter ReferLists to count.
     * @example
     * // Count the number of ReferLists
     * const count = await prisma.referList.count({
     *   where: {
     *     // ... the filter for the ReferLists we want to count
     *   }
     * })
    **/
    count<T extends ReferListCountArgs>(
      args?: Subset<T, ReferListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReferList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReferListAggregateArgs>(args: Subset<T, ReferListAggregateArgs>): Prisma.PrismaPromise<GetReferListAggregateType<T>>

    /**
     * Group by ReferList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReferListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReferListGroupByArgs['orderBy'] }
        : { orderBy?: ReferListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReferListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReferList model
   */
  readonly fields: ReferListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReferList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReferListClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends ReferList$userArgs<ExtArgs> = {}>(args?: Subset<T, ReferList$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ReferList model
   */ 
  interface ReferListFieldRefs {
    readonly id: FieldRef<"ReferList", 'String'>
    readonly refer: FieldRef<"ReferList", 'String'>
    readonly createAt: FieldRef<"ReferList", 'DateTime'>
    readonly updateAt: FieldRef<"ReferList", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ReferList findUnique
   */
  export type ReferListFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferList
     */
    select?: ReferListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReferListInclude<ExtArgs> | null
    /**
     * Filter, which ReferList to fetch.
     */
    where: ReferListWhereUniqueInput
  }


  /**
   * ReferList findUniqueOrThrow
   */
  export type ReferListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferList
     */
    select?: ReferListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReferListInclude<ExtArgs> | null
    /**
     * Filter, which ReferList to fetch.
     */
    where: ReferListWhereUniqueInput
  }


  /**
   * ReferList findFirst
   */
  export type ReferListFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferList
     */
    select?: ReferListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReferListInclude<ExtArgs> | null
    /**
     * Filter, which ReferList to fetch.
     */
    where?: ReferListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferLists to fetch.
     */
    orderBy?: ReferListOrderByWithRelationInput | ReferListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReferLists.
     */
    cursor?: ReferListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReferLists.
     */
    distinct?: ReferListScalarFieldEnum | ReferListScalarFieldEnum[]
  }


  /**
   * ReferList findFirstOrThrow
   */
  export type ReferListFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferList
     */
    select?: ReferListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReferListInclude<ExtArgs> | null
    /**
     * Filter, which ReferList to fetch.
     */
    where?: ReferListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferLists to fetch.
     */
    orderBy?: ReferListOrderByWithRelationInput | ReferListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReferLists.
     */
    cursor?: ReferListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReferLists.
     */
    distinct?: ReferListScalarFieldEnum | ReferListScalarFieldEnum[]
  }


  /**
   * ReferList findMany
   */
  export type ReferListFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferList
     */
    select?: ReferListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReferListInclude<ExtArgs> | null
    /**
     * Filter, which ReferLists to fetch.
     */
    where?: ReferListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferLists to fetch.
     */
    orderBy?: ReferListOrderByWithRelationInput | ReferListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReferLists.
     */
    cursor?: ReferListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferLists.
     */
    skip?: number
    distinct?: ReferListScalarFieldEnum | ReferListScalarFieldEnum[]
  }


  /**
   * ReferList create
   */
  export type ReferListCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferList
     */
    select?: ReferListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReferListInclude<ExtArgs> | null
    /**
     * The data needed to create a ReferList.
     */
    data: XOR<ReferListCreateInput, ReferListUncheckedCreateInput>
  }


  /**
   * ReferList createMany
   */
  export type ReferListCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReferLists.
     */
    data: ReferListCreateManyInput | ReferListCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ReferList update
   */
  export type ReferListUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferList
     */
    select?: ReferListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReferListInclude<ExtArgs> | null
    /**
     * The data needed to update a ReferList.
     */
    data: XOR<ReferListUpdateInput, ReferListUncheckedUpdateInput>
    /**
     * Choose, which ReferList to update.
     */
    where: ReferListWhereUniqueInput
  }


  /**
   * ReferList updateMany
   */
  export type ReferListUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReferLists.
     */
    data: XOR<ReferListUpdateManyMutationInput, ReferListUncheckedUpdateManyInput>
    /**
     * Filter which ReferLists to update
     */
    where?: ReferListWhereInput
  }


  /**
   * ReferList upsert
   */
  export type ReferListUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferList
     */
    select?: ReferListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReferListInclude<ExtArgs> | null
    /**
     * The filter to search for the ReferList to update in case it exists.
     */
    where: ReferListWhereUniqueInput
    /**
     * In case the ReferList found by the `where` argument doesn't exist, create a new ReferList with this data.
     */
    create: XOR<ReferListCreateInput, ReferListUncheckedCreateInput>
    /**
     * In case the ReferList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReferListUpdateInput, ReferListUncheckedUpdateInput>
  }


  /**
   * ReferList delete
   */
  export type ReferListDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferList
     */
    select?: ReferListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReferListInclude<ExtArgs> | null
    /**
     * Filter which ReferList to delete.
     */
    where: ReferListWhereUniqueInput
  }


  /**
   * ReferList deleteMany
   */
  export type ReferListDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReferLists to delete
     */
    where?: ReferListWhereInput
  }


  /**
   * ReferList.user
   */
  export type ReferList$userArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * ReferList without action
   */
  export type ReferListDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferList
     */
    select?: ReferListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReferListInclude<ExtArgs> | null
  }



  /**
   * Model Result
   */

  export type AggregateResult = {
    _count: ResultCountAggregateOutputType | null
    _avg: ResultAvgAggregateOutputType | null
    _sum: ResultSumAggregateOutputType | null
    _min: ResultMinAggregateOutputType | null
    _max: ResultMaxAggregateOutputType | null
  }

  export type ResultAvgAggregateOutputType = {
    solve: number | null
    wrong: number | null
    subject: number | null
  }

  export type ResultSumAggregateOutputType = {
    solve: number | null
    wrong: number | null
    subject: number | null
  }

  export type ResultMinAggregateOutputType = {
    id: string | null
    solve: number | null
    wrong: number | null
    subject: number | null
    faster_ans: string | null
  }

  export type ResultMaxAggregateOutputType = {
    id: string | null
    solve: number | null
    wrong: number | null
    subject: number | null
    faster_ans: string | null
  }

  export type ResultCountAggregateOutputType = {
    id: number
    solve: number
    wrong: number
    subject: number
    faster_ans: number
    _all: number
  }


  export type ResultAvgAggregateInputType = {
    solve?: true
    wrong?: true
    subject?: true
  }

  export type ResultSumAggregateInputType = {
    solve?: true
    wrong?: true
    subject?: true
  }

  export type ResultMinAggregateInputType = {
    id?: true
    solve?: true
    wrong?: true
    subject?: true
    faster_ans?: true
  }

  export type ResultMaxAggregateInputType = {
    id?: true
    solve?: true
    wrong?: true
    subject?: true
    faster_ans?: true
  }

  export type ResultCountAggregateInputType = {
    id?: true
    solve?: true
    wrong?: true
    subject?: true
    faster_ans?: true
    _all?: true
  }

  export type ResultAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Result to aggregate.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Results
    **/
    _count?: true | ResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResultMaxAggregateInputType
  }

  export type GetResultAggregateType<T extends ResultAggregateArgs> = {
        [P in keyof T & keyof AggregateResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResult[P]>
      : GetScalarType<T[P], AggregateResult[P]>
  }




  export type ResultGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ResultWhereInput
    orderBy?: ResultOrderByWithAggregationInput | ResultOrderByWithAggregationInput[]
    by: ResultScalarFieldEnum[] | ResultScalarFieldEnum
    having?: ResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResultCountAggregateInputType | true
    _avg?: ResultAvgAggregateInputType
    _sum?: ResultSumAggregateInputType
    _min?: ResultMinAggregateInputType
    _max?: ResultMaxAggregateInputType
  }

  export type ResultGroupByOutputType = {
    id: string
    solve: number
    wrong: number
    subject: number
    faster_ans: string
    _count: ResultCountAggregateOutputType | null
    _avg: ResultAvgAggregateOutputType | null
    _sum: ResultSumAggregateOutputType | null
    _min: ResultMinAggregateOutputType | null
    _max: ResultMaxAggregateOutputType | null
  }

  type GetResultGroupByPayload<T extends ResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResultGroupByOutputType[P]>
            : GetScalarType<T[P], ResultGroupByOutputType[P]>
        }
      >
    >


  export type ResultSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    solve?: boolean
    wrong?: boolean
    subject?: boolean
    faster_ans?: boolean
    User?: boolean | Result$UserArgs<ExtArgs>
    ans_qus_list?: boolean | Result$ans_qus_listArgs<ExtArgs>
    _count?: boolean | ResultCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["result"]>

  export type ResultSelectScalar = {
    id?: boolean
    solve?: boolean
    wrong?: boolean
    subject?: boolean
    faster_ans?: boolean
  }

  export type ResultInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    User?: boolean | Result$UserArgs<ExtArgs>
    ans_qus_list?: boolean | Result$ans_qus_listArgs<ExtArgs>
    _count?: boolean | ResultCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ResultPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Result"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>[]
      ans_qus_list: Prisma.$AnsQusPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      solve: number
      wrong: number
      subject: number
      faster_ans: string
    }, ExtArgs["result"]["result"]>
    composites: {}
  }


  type ResultGetPayload<S extends boolean | null | undefined | ResultDefaultArgs> = $Result.GetResult<Prisma.$ResultPayload, S>

  type ResultCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ResultFindManyArgs, 'select' | 'include'> & {
      select?: ResultCountAggregateInputType | true
    }

  export interface ResultDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Result'], meta: { name: 'Result' } }
    /**
     * Find zero or one Result that matches the filter.
     * @param {ResultFindUniqueArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ResultFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ResultFindUniqueArgs<ExtArgs>>
    ): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Result that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ResultFindUniqueOrThrowArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ResultFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResultFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Result that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindFirstArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ResultFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ResultFindFirstArgs<ExtArgs>>
    ): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Result that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindFirstOrThrowArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ResultFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResultFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Results that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Results
     * const results = await prisma.result.findMany()
     * 
     * // Get first 10 Results
     * const results = await prisma.result.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resultWithIdOnly = await prisma.result.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ResultFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResultFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Result.
     * @param {ResultCreateArgs} args - Arguments to create a Result.
     * @example
     * // Create one Result
     * const Result = await prisma.result.create({
     *   data: {
     *     // ... data to create a Result
     *   }
     * })
     * 
    **/
    create<T extends ResultCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ResultCreateArgs<ExtArgs>>
    ): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Results.
     *     @param {ResultCreateManyArgs} args - Arguments to create many Results.
     *     @example
     *     // Create many Results
     *     const result = await prisma.result.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ResultCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResultCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Result.
     * @param {ResultDeleteArgs} args - Arguments to delete one Result.
     * @example
     * // Delete one Result
     * const Result = await prisma.result.delete({
     *   where: {
     *     // ... filter to delete one Result
     *   }
     * })
     * 
    **/
    delete<T extends ResultDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ResultDeleteArgs<ExtArgs>>
    ): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Result.
     * @param {ResultUpdateArgs} args - Arguments to update one Result.
     * @example
     * // Update one Result
     * const result = await prisma.result.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ResultUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ResultUpdateArgs<ExtArgs>>
    ): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Results.
     * @param {ResultDeleteManyArgs} args - Arguments to filter Results to delete.
     * @example
     * // Delete a few Results
     * const { count } = await prisma.result.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ResultDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResultDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Results
     * const result = await prisma.result.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ResultUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ResultUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Result.
     * @param {ResultUpsertArgs} args - Arguments to update or create a Result.
     * @example
     * // Update or create a Result
     * const result = await prisma.result.upsert({
     *   create: {
     *     // ... data to create a Result
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Result we want to update
     *   }
     * })
    **/
    upsert<T extends ResultUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ResultUpsertArgs<ExtArgs>>
    ): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultCountArgs} args - Arguments to filter Results to count.
     * @example
     * // Count the number of Results
     * const count = await prisma.result.count({
     *   where: {
     *     // ... the filter for the Results we want to count
     *   }
     * })
    **/
    count<T extends ResultCountArgs>(
      args?: Subset<T, ResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Result.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResultAggregateArgs>(args: Subset<T, ResultAggregateArgs>): Prisma.PrismaPromise<GetResultAggregateType<T>>

    /**
     * Group by Result.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResultGroupByArgs['orderBy'] }
        : { orderBy?: ResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Result model
   */
  readonly fields: ResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Result.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResultClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends Result$UserArgs<ExtArgs> = {}>(args?: Subset<T, Result$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    ans_qus_list<T extends Result$ans_qus_listArgs<ExtArgs> = {}>(args?: Subset<T, Result$ans_qus_listArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnsQusPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Result model
   */ 
  interface ResultFieldRefs {
    readonly id: FieldRef<"Result", 'String'>
    readonly solve: FieldRef<"Result", 'Int'>
    readonly wrong: FieldRef<"Result", 'Int'>
    readonly subject: FieldRef<"Result", 'Int'>
    readonly faster_ans: FieldRef<"Result", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Result findUnique
   */
  export type ResultFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where: ResultWhereUniqueInput
  }


  /**
   * Result findUniqueOrThrow
   */
  export type ResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where: ResultWhereUniqueInput
  }


  /**
   * Result findFirst
   */
  export type ResultFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Results.
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Results.
     */
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }


  /**
   * Result findFirstOrThrow
   */
  export type ResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Results.
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Results.
     */
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }


  /**
   * Result findMany
   */
  export type ResultFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Results to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Results.
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }


  /**
   * Result create
   */
  export type ResultCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * The data needed to create a Result.
     */
    data: XOR<ResultCreateInput, ResultUncheckedCreateInput>
  }


  /**
   * Result createMany
   */
  export type ResultCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Results.
     */
    data: ResultCreateManyInput | ResultCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Result update
   */
  export type ResultUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * The data needed to update a Result.
     */
    data: XOR<ResultUpdateInput, ResultUncheckedUpdateInput>
    /**
     * Choose, which Result to update.
     */
    where: ResultWhereUniqueInput
  }


  /**
   * Result updateMany
   */
  export type ResultUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Results.
     */
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyInput>
    /**
     * Filter which Results to update
     */
    where?: ResultWhereInput
  }


  /**
   * Result upsert
   */
  export type ResultUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * The filter to search for the Result to update in case it exists.
     */
    where: ResultWhereUniqueInput
    /**
     * In case the Result found by the `where` argument doesn't exist, create a new Result with this data.
     */
    create: XOR<ResultCreateInput, ResultUncheckedCreateInput>
    /**
     * In case the Result was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResultUpdateInput, ResultUncheckedUpdateInput>
  }


  /**
   * Result delete
   */
  export type ResultDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter which Result to delete.
     */
    where: ResultWhereUniqueInput
  }


  /**
   * Result deleteMany
   */
  export type ResultDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Results to delete
     */
    where?: ResultWhereInput
  }


  /**
   * Result.User
   */
  export type Result$UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * Result.ans_qus_list
   */
  export type Result$ans_qus_listArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnsQus
     */
    select?: AnsQusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnsQusInclude<ExtArgs> | null
    where?: AnsQusWhereInput
    orderBy?: AnsQusOrderByWithRelationInput | AnsQusOrderByWithRelationInput[]
    cursor?: AnsQusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnsQusScalarFieldEnum | AnsQusScalarFieldEnum[]
  }


  /**
   * Result without action
   */
  export type ResultDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultInclude<ExtArgs> | null
  }



  /**
   * Model AnsQus
   */

  export type AggregateAnsQus = {
    _count: AnsQusCountAggregateOutputType | null
    _min: AnsQusMinAggregateOutputType | null
    _max: AnsQusMaxAggregateOutputType | null
  }

  export type AnsQusMinAggregateOutputType = {
    id: string | null
    questionId: string | null
    resultId: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type AnsQusMaxAggregateOutputType = {
    id: string | null
    questionId: string | null
    resultId: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type AnsQusCountAggregateOutputType = {
    id: number
    questionId: number
    resultId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type AnsQusMinAggregateInputType = {
    id?: true
    questionId?: true
    resultId?: true
    createAt?: true
    updateAt?: true
  }

  export type AnsQusMaxAggregateInputType = {
    id?: true
    questionId?: true
    resultId?: true
    createAt?: true
    updateAt?: true
  }

  export type AnsQusCountAggregateInputType = {
    id?: true
    questionId?: true
    resultId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type AnsQusAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnsQus to aggregate.
     */
    where?: AnsQusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnsQuses to fetch.
     */
    orderBy?: AnsQusOrderByWithRelationInput | AnsQusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnsQusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnsQuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnsQuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnsQuses
    **/
    _count?: true | AnsQusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnsQusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnsQusMaxAggregateInputType
  }

  export type GetAnsQusAggregateType<T extends AnsQusAggregateArgs> = {
        [P in keyof T & keyof AggregateAnsQus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnsQus[P]>
      : GetScalarType<T[P], AggregateAnsQus[P]>
  }




  export type AnsQusGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AnsQusWhereInput
    orderBy?: AnsQusOrderByWithAggregationInput | AnsQusOrderByWithAggregationInput[]
    by: AnsQusScalarFieldEnum[] | AnsQusScalarFieldEnum
    having?: AnsQusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnsQusCountAggregateInputType | true
    _min?: AnsQusMinAggregateInputType
    _max?: AnsQusMaxAggregateInputType
  }

  export type AnsQusGroupByOutputType = {
    id: string
    questionId: string
    resultId: string | null
    createAt: Date
    updateAt: Date
    _count: AnsQusCountAggregateOutputType | null
    _min: AnsQusMinAggregateOutputType | null
    _max: AnsQusMaxAggregateOutputType | null
  }

  type GetAnsQusGroupByPayload<T extends AnsQusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnsQusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnsQusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnsQusGroupByOutputType[P]>
            : GetScalarType<T[P], AnsQusGroupByOutputType[P]>
        }
      >
    >


  export type AnsQusSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    resultId?: boolean
    createAt?: boolean
    updateAt?: boolean
    qus?: boolean | QuestionDefaultArgs<ExtArgs>
    Result?: boolean | AnsQus$ResultArgs<ExtArgs>
  }, ExtArgs["result"]["ansQus"]>

  export type AnsQusSelectScalar = {
    id?: boolean
    questionId?: boolean
    resultId?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type AnsQusInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    qus?: boolean | QuestionDefaultArgs<ExtArgs>
    Result?: boolean | AnsQus$ResultArgs<ExtArgs>
  }


  export type $AnsQusPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "AnsQus"
    objects: {
      qus: Prisma.$QuestionPayload<ExtArgs>
      Result: Prisma.$ResultPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: string
      questionId: string
      resultId: string | null
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["ansQus"]>
    composites: {}
  }


  type AnsQusGetPayload<S extends boolean | null | undefined | AnsQusDefaultArgs> = $Result.GetResult<Prisma.$AnsQusPayload, S>

  type AnsQusCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AnsQusFindManyArgs, 'select' | 'include'> & {
      select?: AnsQusCountAggregateInputType | true
    }

  export interface AnsQusDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnsQus'], meta: { name: 'AnsQus' } }
    /**
     * Find zero or one AnsQus that matches the filter.
     * @param {AnsQusFindUniqueArgs} args - Arguments to find a AnsQus
     * @example
     * // Get one AnsQus
     * const ansQus = await prisma.ansQus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AnsQusFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AnsQusFindUniqueArgs<ExtArgs>>
    ): Prisma__AnsQusClient<$Result.GetResult<Prisma.$AnsQusPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AnsQus that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AnsQusFindUniqueOrThrowArgs} args - Arguments to find a AnsQus
     * @example
     * // Get one AnsQus
     * const ansQus = await prisma.ansQus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AnsQusFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AnsQusFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AnsQusClient<$Result.GetResult<Prisma.$AnsQusPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AnsQus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnsQusFindFirstArgs} args - Arguments to find a AnsQus
     * @example
     * // Get one AnsQus
     * const ansQus = await prisma.ansQus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AnsQusFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AnsQusFindFirstArgs<ExtArgs>>
    ): Prisma__AnsQusClient<$Result.GetResult<Prisma.$AnsQusPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AnsQus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnsQusFindFirstOrThrowArgs} args - Arguments to find a AnsQus
     * @example
     * // Get one AnsQus
     * const ansQus = await prisma.ansQus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AnsQusFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AnsQusFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AnsQusClient<$Result.GetResult<Prisma.$AnsQusPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AnsQuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnsQusFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnsQuses
     * const ansQuses = await prisma.ansQus.findMany()
     * 
     * // Get first 10 AnsQuses
     * const ansQuses = await prisma.ansQus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ansQusWithIdOnly = await prisma.ansQus.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AnsQusFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnsQusFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnsQusPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AnsQus.
     * @param {AnsQusCreateArgs} args - Arguments to create a AnsQus.
     * @example
     * // Create one AnsQus
     * const AnsQus = await prisma.ansQus.create({
     *   data: {
     *     // ... data to create a AnsQus
     *   }
     * })
     * 
    **/
    create<T extends AnsQusCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AnsQusCreateArgs<ExtArgs>>
    ): Prisma__AnsQusClient<$Result.GetResult<Prisma.$AnsQusPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AnsQuses.
     *     @param {AnsQusCreateManyArgs} args - Arguments to create many AnsQuses.
     *     @example
     *     // Create many AnsQuses
     *     const ansQus = await prisma.ansQus.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AnsQusCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnsQusCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AnsQus.
     * @param {AnsQusDeleteArgs} args - Arguments to delete one AnsQus.
     * @example
     * // Delete one AnsQus
     * const AnsQus = await prisma.ansQus.delete({
     *   where: {
     *     // ... filter to delete one AnsQus
     *   }
     * })
     * 
    **/
    delete<T extends AnsQusDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AnsQusDeleteArgs<ExtArgs>>
    ): Prisma__AnsQusClient<$Result.GetResult<Prisma.$AnsQusPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AnsQus.
     * @param {AnsQusUpdateArgs} args - Arguments to update one AnsQus.
     * @example
     * // Update one AnsQus
     * const ansQus = await prisma.ansQus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AnsQusUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AnsQusUpdateArgs<ExtArgs>>
    ): Prisma__AnsQusClient<$Result.GetResult<Prisma.$AnsQusPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AnsQuses.
     * @param {AnsQusDeleteManyArgs} args - Arguments to filter AnsQuses to delete.
     * @example
     * // Delete a few AnsQuses
     * const { count } = await prisma.ansQus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AnsQusDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnsQusDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnsQuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnsQusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnsQuses
     * const ansQus = await prisma.ansQus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AnsQusUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AnsQusUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AnsQus.
     * @param {AnsQusUpsertArgs} args - Arguments to update or create a AnsQus.
     * @example
     * // Update or create a AnsQus
     * const ansQus = await prisma.ansQus.upsert({
     *   create: {
     *     // ... data to create a AnsQus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnsQus we want to update
     *   }
     * })
    **/
    upsert<T extends AnsQusUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AnsQusUpsertArgs<ExtArgs>>
    ): Prisma__AnsQusClient<$Result.GetResult<Prisma.$AnsQusPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AnsQuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnsQusCountArgs} args - Arguments to filter AnsQuses to count.
     * @example
     * // Count the number of AnsQuses
     * const count = await prisma.ansQus.count({
     *   where: {
     *     // ... the filter for the AnsQuses we want to count
     *   }
     * })
    **/
    count<T extends AnsQusCountArgs>(
      args?: Subset<T, AnsQusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnsQusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnsQus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnsQusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnsQusAggregateArgs>(args: Subset<T, AnsQusAggregateArgs>): Prisma.PrismaPromise<GetAnsQusAggregateType<T>>

    /**
     * Group by AnsQus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnsQusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnsQusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnsQusGroupByArgs['orderBy'] }
        : { orderBy?: AnsQusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnsQusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnsQusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnsQus model
   */
  readonly fields: AnsQusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnsQus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnsQusClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    qus<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Result<T extends AnsQus$ResultArgs<ExtArgs> = {}>(args?: Subset<T, AnsQus$ResultArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AnsQus model
   */ 
  interface AnsQusFieldRefs {
    readonly id: FieldRef<"AnsQus", 'String'>
    readonly questionId: FieldRef<"AnsQus", 'String'>
    readonly resultId: FieldRef<"AnsQus", 'String'>
    readonly createAt: FieldRef<"AnsQus", 'DateTime'>
    readonly updateAt: FieldRef<"AnsQus", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * AnsQus findUnique
   */
  export type AnsQusFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnsQus
     */
    select?: AnsQusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnsQusInclude<ExtArgs> | null
    /**
     * Filter, which AnsQus to fetch.
     */
    where: AnsQusWhereUniqueInput
  }


  /**
   * AnsQus findUniqueOrThrow
   */
  export type AnsQusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnsQus
     */
    select?: AnsQusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnsQusInclude<ExtArgs> | null
    /**
     * Filter, which AnsQus to fetch.
     */
    where: AnsQusWhereUniqueInput
  }


  /**
   * AnsQus findFirst
   */
  export type AnsQusFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnsQus
     */
    select?: AnsQusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnsQusInclude<ExtArgs> | null
    /**
     * Filter, which AnsQus to fetch.
     */
    where?: AnsQusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnsQuses to fetch.
     */
    orderBy?: AnsQusOrderByWithRelationInput | AnsQusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnsQuses.
     */
    cursor?: AnsQusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnsQuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnsQuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnsQuses.
     */
    distinct?: AnsQusScalarFieldEnum | AnsQusScalarFieldEnum[]
  }


  /**
   * AnsQus findFirstOrThrow
   */
  export type AnsQusFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnsQus
     */
    select?: AnsQusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnsQusInclude<ExtArgs> | null
    /**
     * Filter, which AnsQus to fetch.
     */
    where?: AnsQusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnsQuses to fetch.
     */
    orderBy?: AnsQusOrderByWithRelationInput | AnsQusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnsQuses.
     */
    cursor?: AnsQusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnsQuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnsQuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnsQuses.
     */
    distinct?: AnsQusScalarFieldEnum | AnsQusScalarFieldEnum[]
  }


  /**
   * AnsQus findMany
   */
  export type AnsQusFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnsQus
     */
    select?: AnsQusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnsQusInclude<ExtArgs> | null
    /**
     * Filter, which AnsQuses to fetch.
     */
    where?: AnsQusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnsQuses to fetch.
     */
    orderBy?: AnsQusOrderByWithRelationInput | AnsQusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnsQuses.
     */
    cursor?: AnsQusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnsQuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnsQuses.
     */
    skip?: number
    distinct?: AnsQusScalarFieldEnum | AnsQusScalarFieldEnum[]
  }


  /**
   * AnsQus create
   */
  export type AnsQusCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnsQus
     */
    select?: AnsQusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnsQusInclude<ExtArgs> | null
    /**
     * The data needed to create a AnsQus.
     */
    data: XOR<AnsQusCreateInput, AnsQusUncheckedCreateInput>
  }


  /**
   * AnsQus createMany
   */
  export type AnsQusCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnsQuses.
     */
    data: AnsQusCreateManyInput | AnsQusCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * AnsQus update
   */
  export type AnsQusUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnsQus
     */
    select?: AnsQusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnsQusInclude<ExtArgs> | null
    /**
     * The data needed to update a AnsQus.
     */
    data: XOR<AnsQusUpdateInput, AnsQusUncheckedUpdateInput>
    /**
     * Choose, which AnsQus to update.
     */
    where: AnsQusWhereUniqueInput
  }


  /**
   * AnsQus updateMany
   */
  export type AnsQusUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnsQuses.
     */
    data: XOR<AnsQusUpdateManyMutationInput, AnsQusUncheckedUpdateManyInput>
    /**
     * Filter which AnsQuses to update
     */
    where?: AnsQusWhereInput
  }


  /**
   * AnsQus upsert
   */
  export type AnsQusUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnsQus
     */
    select?: AnsQusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnsQusInclude<ExtArgs> | null
    /**
     * The filter to search for the AnsQus to update in case it exists.
     */
    where: AnsQusWhereUniqueInput
    /**
     * In case the AnsQus found by the `where` argument doesn't exist, create a new AnsQus with this data.
     */
    create: XOR<AnsQusCreateInput, AnsQusUncheckedCreateInput>
    /**
     * In case the AnsQus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnsQusUpdateInput, AnsQusUncheckedUpdateInput>
  }


  /**
   * AnsQus delete
   */
  export type AnsQusDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnsQus
     */
    select?: AnsQusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnsQusInclude<ExtArgs> | null
    /**
     * Filter which AnsQus to delete.
     */
    where: AnsQusWhereUniqueInput
  }


  /**
   * AnsQus deleteMany
   */
  export type AnsQusDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnsQuses to delete
     */
    where?: AnsQusWhereInput
  }


  /**
   * AnsQus.Result
   */
  export type AnsQus$ResultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultInclude<ExtArgs> | null
    where?: ResultWhereInput
  }


  /**
   * AnsQus without action
   */
  export type AnsQusDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnsQus
     */
    select?: AnsQusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnsQusInclude<ExtArgs> | null
  }



  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    type: string | null
    number: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    type: string | null
    number: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    type: number
    number: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type PaymentMinAggregateInputType = {
    id?: true
    type?: true
    number?: true
    createAt?: true
    updateAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    type?: true
    number?: true
    createAt?: true
    updateAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    type?: true
    number?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    type: string
    number: string
    createAt: Date
    updateAt: Date
    _count: PaymentCountAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    number?: boolean
    createAt?: boolean
    updateAt?: boolean
    User?: boolean | Payment$UserArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    type?: boolean
    number?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type PaymentInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    User?: boolean | Payment$UserArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PaymentPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      type: string
      number: string
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }


  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PaymentFindManyArgs, 'select' | 'include'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PaymentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Payment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PaymentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PaymentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
    **/
    create<T extends PaymentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Payments.
     *     @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     *     @example
     *     // Create many Payments
     *     const payment = await prisma.payment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PaymentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
    **/
    delete<T extends PaymentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PaymentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PaymentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PaymentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
    **/
    upsert<T extends PaymentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends Payment$UserArgs<ExtArgs> = {}>(args?: Subset<T, Payment$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Payment model
   */ 
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly type: FieldRef<"Payment", 'String'>
    readonly number: FieldRef<"Payment", 'String'>
    readonly createAt: FieldRef<"Payment", 'DateTime'>
    readonly updateAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }


  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }


  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }


  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }


  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }


  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }


  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }


  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
  }


  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }


  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }


  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
  }


  /**
   * Payment.User
   */
  export type Payment$UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
  }



  /**
   * Model Earning
   */

  export type AggregateEarning = {
    _count: EarningCountAggregateOutputType | null
    _avg: EarningAvgAggregateOutputType | null
    _sum: EarningSumAggregateOutputType | null
    _min: EarningMinAggregateOutputType | null
    _max: EarningMaxAggregateOutputType | null
  }

  export type EarningAvgAggregateOutputType = {
    earning_ammount: number | null
  }

  export type EarningSumAggregateOutputType = {
    earning_ammount: number | null
  }

  export type EarningMinAggregateOutputType = {
    id: string | null
    earning_ammount: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type EarningMaxAggregateOutputType = {
    id: string | null
    earning_ammount: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type EarningCountAggregateOutputType = {
    id: number
    earning_ammount: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type EarningAvgAggregateInputType = {
    earning_ammount?: true
  }

  export type EarningSumAggregateInputType = {
    earning_ammount?: true
  }

  export type EarningMinAggregateInputType = {
    id?: true
    earning_ammount?: true
    createAt?: true
    updateAt?: true
  }

  export type EarningMaxAggregateInputType = {
    id?: true
    earning_ammount?: true
    createAt?: true
    updateAt?: true
  }

  export type EarningCountAggregateInputType = {
    id?: true
    earning_ammount?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type EarningAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Earning to aggregate.
     */
    where?: EarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Earnings to fetch.
     */
    orderBy?: EarningOrderByWithRelationInput | EarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Earnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Earnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Earnings
    **/
    _count?: true | EarningCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EarningAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EarningSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EarningMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EarningMaxAggregateInputType
  }

  export type GetEarningAggregateType<T extends EarningAggregateArgs> = {
        [P in keyof T & keyof AggregateEarning]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEarning[P]>
      : GetScalarType<T[P], AggregateEarning[P]>
  }




  export type EarningGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EarningWhereInput
    orderBy?: EarningOrderByWithAggregationInput | EarningOrderByWithAggregationInput[]
    by: EarningScalarFieldEnum[] | EarningScalarFieldEnum
    having?: EarningScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EarningCountAggregateInputType | true
    _avg?: EarningAvgAggregateInputType
    _sum?: EarningSumAggregateInputType
    _min?: EarningMinAggregateInputType
    _max?: EarningMaxAggregateInputType
  }

  export type EarningGroupByOutputType = {
    id: string
    earning_ammount: number | null
    createAt: Date
    updateAt: Date
    _count: EarningCountAggregateOutputType | null
    _avg: EarningAvgAggregateOutputType | null
    _sum: EarningSumAggregateOutputType | null
    _min: EarningMinAggregateOutputType | null
    _max: EarningMaxAggregateOutputType | null
  }

  type GetEarningGroupByPayload<T extends EarningGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EarningGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EarningGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EarningGroupByOutputType[P]>
            : GetScalarType<T[P], EarningGroupByOutputType[P]>
        }
      >
    >


  export type EarningSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    earning_ammount?: boolean
    createAt?: boolean
    updateAt?: boolean
    User?: boolean | Earning$UserArgs<ExtArgs>
    _count?: boolean | EarningCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["earning"]>

  export type EarningSelectScalar = {
    id?: boolean
    earning_ammount?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type EarningInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    User?: boolean | Earning$UserArgs<ExtArgs>
    _count?: boolean | EarningCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $EarningPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Earning"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      earning_ammount: number | null
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["earning"]>
    composites: {}
  }


  type EarningGetPayload<S extends boolean | null | undefined | EarningDefaultArgs> = $Result.GetResult<Prisma.$EarningPayload, S>

  type EarningCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<EarningFindManyArgs, 'select' | 'include'> & {
      select?: EarningCountAggregateInputType | true
    }

  export interface EarningDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Earning'], meta: { name: 'Earning' } }
    /**
     * Find zero or one Earning that matches the filter.
     * @param {EarningFindUniqueArgs} args - Arguments to find a Earning
     * @example
     * // Get one Earning
     * const earning = await prisma.earning.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EarningFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EarningFindUniqueArgs<ExtArgs>>
    ): Prisma__EarningClient<$Result.GetResult<Prisma.$EarningPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Earning that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EarningFindUniqueOrThrowArgs} args - Arguments to find a Earning
     * @example
     * // Get one Earning
     * const earning = await prisma.earning.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EarningFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EarningFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EarningClient<$Result.GetResult<Prisma.$EarningPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Earning that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarningFindFirstArgs} args - Arguments to find a Earning
     * @example
     * // Get one Earning
     * const earning = await prisma.earning.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EarningFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EarningFindFirstArgs<ExtArgs>>
    ): Prisma__EarningClient<$Result.GetResult<Prisma.$EarningPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Earning that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarningFindFirstOrThrowArgs} args - Arguments to find a Earning
     * @example
     * // Get one Earning
     * const earning = await prisma.earning.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EarningFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EarningFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EarningClient<$Result.GetResult<Prisma.$EarningPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Earnings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarningFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Earnings
     * const earnings = await prisma.earning.findMany()
     * 
     * // Get first 10 Earnings
     * const earnings = await prisma.earning.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const earningWithIdOnly = await prisma.earning.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EarningFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EarningFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EarningPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Earning.
     * @param {EarningCreateArgs} args - Arguments to create a Earning.
     * @example
     * // Create one Earning
     * const Earning = await prisma.earning.create({
     *   data: {
     *     // ... data to create a Earning
     *   }
     * })
     * 
    **/
    create<T extends EarningCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EarningCreateArgs<ExtArgs>>
    ): Prisma__EarningClient<$Result.GetResult<Prisma.$EarningPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Earnings.
     *     @param {EarningCreateManyArgs} args - Arguments to create many Earnings.
     *     @example
     *     // Create many Earnings
     *     const earning = await prisma.earning.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EarningCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EarningCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Earning.
     * @param {EarningDeleteArgs} args - Arguments to delete one Earning.
     * @example
     * // Delete one Earning
     * const Earning = await prisma.earning.delete({
     *   where: {
     *     // ... filter to delete one Earning
     *   }
     * })
     * 
    **/
    delete<T extends EarningDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EarningDeleteArgs<ExtArgs>>
    ): Prisma__EarningClient<$Result.GetResult<Prisma.$EarningPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Earning.
     * @param {EarningUpdateArgs} args - Arguments to update one Earning.
     * @example
     * // Update one Earning
     * const earning = await prisma.earning.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EarningUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EarningUpdateArgs<ExtArgs>>
    ): Prisma__EarningClient<$Result.GetResult<Prisma.$EarningPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Earnings.
     * @param {EarningDeleteManyArgs} args - Arguments to filter Earnings to delete.
     * @example
     * // Delete a few Earnings
     * const { count } = await prisma.earning.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EarningDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EarningDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Earnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarningUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Earnings
     * const earning = await prisma.earning.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EarningUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EarningUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Earning.
     * @param {EarningUpsertArgs} args - Arguments to update or create a Earning.
     * @example
     * // Update or create a Earning
     * const earning = await prisma.earning.upsert({
     *   create: {
     *     // ... data to create a Earning
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Earning we want to update
     *   }
     * })
    **/
    upsert<T extends EarningUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EarningUpsertArgs<ExtArgs>>
    ): Prisma__EarningClient<$Result.GetResult<Prisma.$EarningPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Earnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarningCountArgs} args - Arguments to filter Earnings to count.
     * @example
     * // Count the number of Earnings
     * const count = await prisma.earning.count({
     *   where: {
     *     // ... the filter for the Earnings we want to count
     *   }
     * })
    **/
    count<T extends EarningCountArgs>(
      args?: Subset<T, EarningCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EarningCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Earning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarningAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EarningAggregateArgs>(args: Subset<T, EarningAggregateArgs>): Prisma.PrismaPromise<GetEarningAggregateType<T>>

    /**
     * Group by Earning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EarningGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EarningGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EarningGroupByArgs['orderBy'] }
        : { orderBy?: EarningGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EarningGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEarningGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Earning model
   */
  readonly fields: EarningFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Earning.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EarningClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends Earning$UserArgs<ExtArgs> = {}>(args?: Subset<T, Earning$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Earning model
   */ 
  interface EarningFieldRefs {
    readonly id: FieldRef<"Earning", 'String'>
    readonly earning_ammount: FieldRef<"Earning", 'Float'>
    readonly createAt: FieldRef<"Earning", 'DateTime'>
    readonly updateAt: FieldRef<"Earning", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Earning findUnique
   */
  export type EarningFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earning
     */
    select?: EarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EarningInclude<ExtArgs> | null
    /**
     * Filter, which Earning to fetch.
     */
    where: EarningWhereUniqueInput
  }


  /**
   * Earning findUniqueOrThrow
   */
  export type EarningFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earning
     */
    select?: EarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EarningInclude<ExtArgs> | null
    /**
     * Filter, which Earning to fetch.
     */
    where: EarningWhereUniqueInput
  }


  /**
   * Earning findFirst
   */
  export type EarningFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earning
     */
    select?: EarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EarningInclude<ExtArgs> | null
    /**
     * Filter, which Earning to fetch.
     */
    where?: EarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Earnings to fetch.
     */
    orderBy?: EarningOrderByWithRelationInput | EarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Earnings.
     */
    cursor?: EarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Earnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Earnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Earnings.
     */
    distinct?: EarningScalarFieldEnum | EarningScalarFieldEnum[]
  }


  /**
   * Earning findFirstOrThrow
   */
  export type EarningFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earning
     */
    select?: EarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EarningInclude<ExtArgs> | null
    /**
     * Filter, which Earning to fetch.
     */
    where?: EarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Earnings to fetch.
     */
    orderBy?: EarningOrderByWithRelationInput | EarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Earnings.
     */
    cursor?: EarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Earnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Earnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Earnings.
     */
    distinct?: EarningScalarFieldEnum | EarningScalarFieldEnum[]
  }


  /**
   * Earning findMany
   */
  export type EarningFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earning
     */
    select?: EarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EarningInclude<ExtArgs> | null
    /**
     * Filter, which Earnings to fetch.
     */
    where?: EarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Earnings to fetch.
     */
    orderBy?: EarningOrderByWithRelationInput | EarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Earnings.
     */
    cursor?: EarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Earnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Earnings.
     */
    skip?: number
    distinct?: EarningScalarFieldEnum | EarningScalarFieldEnum[]
  }


  /**
   * Earning create
   */
  export type EarningCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earning
     */
    select?: EarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EarningInclude<ExtArgs> | null
    /**
     * The data needed to create a Earning.
     */
    data: XOR<EarningCreateInput, EarningUncheckedCreateInput>
  }


  /**
   * Earning createMany
   */
  export type EarningCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Earnings.
     */
    data: EarningCreateManyInput | EarningCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Earning update
   */
  export type EarningUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earning
     */
    select?: EarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EarningInclude<ExtArgs> | null
    /**
     * The data needed to update a Earning.
     */
    data: XOR<EarningUpdateInput, EarningUncheckedUpdateInput>
    /**
     * Choose, which Earning to update.
     */
    where: EarningWhereUniqueInput
  }


  /**
   * Earning updateMany
   */
  export type EarningUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Earnings.
     */
    data: XOR<EarningUpdateManyMutationInput, EarningUncheckedUpdateManyInput>
    /**
     * Filter which Earnings to update
     */
    where?: EarningWhereInput
  }


  /**
   * Earning upsert
   */
  export type EarningUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earning
     */
    select?: EarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EarningInclude<ExtArgs> | null
    /**
     * The filter to search for the Earning to update in case it exists.
     */
    where: EarningWhereUniqueInput
    /**
     * In case the Earning found by the `where` argument doesn't exist, create a new Earning with this data.
     */
    create: XOR<EarningCreateInput, EarningUncheckedCreateInput>
    /**
     * In case the Earning was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EarningUpdateInput, EarningUncheckedUpdateInput>
  }


  /**
   * Earning delete
   */
  export type EarningDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earning
     */
    select?: EarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EarningInclude<ExtArgs> | null
    /**
     * Filter which Earning to delete.
     */
    where: EarningWhereUniqueInput
  }


  /**
   * Earning deleteMany
   */
  export type EarningDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Earnings to delete
     */
    where?: EarningWhereInput
  }


  /**
   * Earning.User
   */
  export type Earning$UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * Earning without action
   */
  export type EarningDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Earning
     */
    select?: EarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EarningInclude<ExtArgs> | null
  }



  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createAt?: true
    updateAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createAt?: true
    updateAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    description: string
    createAt: Date
    updateAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createAt?: boolean
    updateAt?: boolean
    SubCategory?: boolean | Category$SubCategoryArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    SubCategory?: boolean | Category$SubCategoryArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CategoryPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      SubCategory: Prisma.$SubCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      name: string
      description: string
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }


  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    SubCategory<T extends Category$SubCategoryArgs<ExtArgs> = {}>(args?: Subset<T, Category$SubCategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly createAt: FieldRef<"Category", 'DateTime'>
    readonly updateAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category.SubCategory
   */
  export type Category$SubCategoryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    where?: SubCategoryWhereInput
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    cursor?: SubCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }


  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
  }



  /**
   * Model SubCategory
   */

  export type AggregateSubCategory = {
    _count: SubCategoryCountAggregateOutputType | null
    _min: SubCategoryMinAggregateOutputType | null
    _max: SubCategoryMaxAggregateOutputType | null
  }

  export type SubCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    createAt: Date | null
    updateAt: Date | null
    categoryId: string | null
  }

  export type SubCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createAt: Date | null
    updateAt: Date | null
    categoryId: string | null
  }

  export type SubCategoryCountAggregateOutputType = {
    id: number
    name: number
    createAt: number
    updateAt: number
    categoryId: number
    _all: number
  }


  export type SubCategoryMinAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
    categoryId?: true
  }

  export type SubCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
    categoryId?: true
  }

  export type SubCategoryCountAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
    categoryId?: true
    _all?: true
  }

  export type SubCategoryAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCategory to aggregate.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubCategories
    **/
    _count?: true | SubCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubCategoryMaxAggregateInputType
  }

  export type GetSubCategoryAggregateType<T extends SubCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSubCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubCategory[P]>
      : GetScalarType<T[P], AggregateSubCategory[P]>
  }




  export type SubCategoryGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SubCategoryWhereInput
    orderBy?: SubCategoryOrderByWithAggregationInput | SubCategoryOrderByWithAggregationInput[]
    by: SubCategoryScalarFieldEnum[] | SubCategoryScalarFieldEnum
    having?: SubCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubCategoryCountAggregateInputType | true
    _min?: SubCategoryMinAggregateInputType
    _max?: SubCategoryMaxAggregateInputType
  }

  export type SubCategoryGroupByOutputType = {
    id: string
    name: string
    createAt: Date
    updateAt: Date
    categoryId: string
    _count: SubCategoryCountAggregateOutputType | null
    _min: SubCategoryMinAggregateOutputType | null
    _max: SubCategoryMaxAggregateOutputType | null
  }

  type GetSubCategoryGroupByPayload<T extends SubCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], SubCategoryGroupByOutputType[P]>
        }
      >
    >


  export type SubCategorySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createAt?: boolean
    updateAt?: boolean
    categoryId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    Question?: boolean | SubCategory$QuestionArgs<ExtArgs>
    _count?: boolean | SubCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCategory"]>

  export type SubCategorySelectScalar = {
    id?: boolean
    name?: boolean
    createAt?: boolean
    updateAt?: boolean
    categoryId?: boolean
  }

  export type SubCategoryInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    Question?: boolean | SubCategory$QuestionArgs<ExtArgs>
    _count?: boolean | SubCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SubCategoryPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "SubCategory"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      Question: Prisma.$QuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      name: string
      createAt: Date
      updateAt: Date
      categoryId: string
    }, ExtArgs["result"]["subCategory"]>
    composites: {}
  }


  type SubCategoryGetPayload<S extends boolean | null | undefined | SubCategoryDefaultArgs> = $Result.GetResult<Prisma.$SubCategoryPayload, S>

  type SubCategoryCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SubCategoryFindManyArgs, 'select' | 'include'> & {
      select?: SubCategoryCountAggregateInputType | true
    }

  export interface SubCategoryDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubCategory'], meta: { name: 'SubCategory' } }
    /**
     * Find zero or one SubCategory that matches the filter.
     * @param {SubCategoryFindUniqueArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SubCategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SubCategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SubCategory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SubCategoryFindUniqueOrThrowArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SubCategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SubCategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SubCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryFindFirstArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SubCategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SubCategoryFindFirstArgs<ExtArgs>>
    ): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SubCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryFindFirstOrThrowArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SubCategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SubCategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SubCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubCategories
     * const subCategories = await prisma.subCategory.findMany()
     * 
     * // Get first 10 SubCategories
     * const subCategories = await prisma.subCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subCategoryWithIdOnly = await prisma.subCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SubCategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubCategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SubCategory.
     * @param {SubCategoryCreateArgs} args - Arguments to create a SubCategory.
     * @example
     * // Create one SubCategory
     * const SubCategory = await prisma.subCategory.create({
     *   data: {
     *     // ... data to create a SubCategory
     *   }
     * })
     * 
    **/
    create<T extends SubCategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SubCategoryCreateArgs<ExtArgs>>
    ): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SubCategories.
     *     @param {SubCategoryCreateManyArgs} args - Arguments to create many SubCategories.
     *     @example
     *     // Create many SubCategories
     *     const subCategory = await prisma.subCategory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SubCategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubCategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SubCategory.
     * @param {SubCategoryDeleteArgs} args - Arguments to delete one SubCategory.
     * @example
     * // Delete one SubCategory
     * const SubCategory = await prisma.subCategory.delete({
     *   where: {
     *     // ... filter to delete one SubCategory
     *   }
     * })
     * 
    **/
    delete<T extends SubCategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SubCategoryDeleteArgs<ExtArgs>>
    ): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SubCategory.
     * @param {SubCategoryUpdateArgs} args - Arguments to update one SubCategory.
     * @example
     * // Update one SubCategory
     * const subCategory = await prisma.subCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SubCategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SubCategoryUpdateArgs<ExtArgs>>
    ): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SubCategories.
     * @param {SubCategoryDeleteManyArgs} args - Arguments to filter SubCategories to delete.
     * @example
     * // Delete a few SubCategories
     * const { count } = await prisma.subCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SubCategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubCategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubCategories
     * const subCategory = await prisma.subCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SubCategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SubCategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubCategory.
     * @param {SubCategoryUpsertArgs} args - Arguments to update or create a SubCategory.
     * @example
     * // Update or create a SubCategory
     * const subCategory = await prisma.subCategory.upsert({
     *   create: {
     *     // ... data to create a SubCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubCategory we want to update
     *   }
     * })
    **/
    upsert<T extends SubCategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SubCategoryUpsertArgs<ExtArgs>>
    ): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryCountArgs} args - Arguments to filter SubCategories to count.
     * @example
     * // Count the number of SubCategories
     * const count = await prisma.subCategory.count({
     *   where: {
     *     // ... the filter for the SubCategories we want to count
     *   }
     * })
    **/
    count<T extends SubCategoryCountArgs>(
      args?: Subset<T, SubCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubCategoryAggregateArgs>(args: Subset<T, SubCategoryAggregateArgs>): Prisma.PrismaPromise<GetSubCategoryAggregateType<T>>

    /**
     * Group by SubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubCategoryGroupByArgs['orderBy'] }
        : { orderBy?: SubCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubCategory model
   */
  readonly fields: SubCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubCategoryClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Question<T extends SubCategory$QuestionArgs<ExtArgs> = {}>(args?: Subset<T, SubCategory$QuestionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SubCategory model
   */ 
  interface SubCategoryFieldRefs {
    readonly id: FieldRef<"SubCategory", 'String'>
    readonly name: FieldRef<"SubCategory", 'String'>
    readonly createAt: FieldRef<"SubCategory", 'DateTime'>
    readonly updateAt: FieldRef<"SubCategory", 'DateTime'>
    readonly categoryId: FieldRef<"SubCategory", 'String'>
  }
    

  // Custom InputTypes

  /**
   * SubCategory findUnique
   */
  export type SubCategoryFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where: SubCategoryWhereUniqueInput
  }


  /**
   * SubCategory findUniqueOrThrow
   */
  export type SubCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where: SubCategoryWhereUniqueInput
  }


  /**
   * SubCategory findFirst
   */
  export type SubCategoryFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCategories.
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategories.
     */
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }


  /**
   * SubCategory findFirstOrThrow
   */
  export type SubCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCategories.
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategories.
     */
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }


  /**
   * SubCategory findMany
   */
  export type SubCategoryFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategories to fetch.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubCategories.
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }


  /**
   * SubCategory create
   */
  export type SubCategoryCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a SubCategory.
     */
    data: XOR<SubCategoryCreateInput, SubCategoryUncheckedCreateInput>
  }


  /**
   * SubCategory createMany
   */
  export type SubCategoryCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubCategories.
     */
    data: SubCategoryCreateManyInput | SubCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * SubCategory update
   */
  export type SubCategoryUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a SubCategory.
     */
    data: XOR<SubCategoryUpdateInput, SubCategoryUncheckedUpdateInput>
    /**
     * Choose, which SubCategory to update.
     */
    where: SubCategoryWhereUniqueInput
  }


  /**
   * SubCategory updateMany
   */
  export type SubCategoryUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubCategories.
     */
    data: XOR<SubCategoryUpdateManyMutationInput, SubCategoryUncheckedUpdateManyInput>
    /**
     * Filter which SubCategories to update
     */
    where?: SubCategoryWhereInput
  }


  /**
   * SubCategory upsert
   */
  export type SubCategoryUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the SubCategory to update in case it exists.
     */
    where: SubCategoryWhereUniqueInput
    /**
     * In case the SubCategory found by the `where` argument doesn't exist, create a new SubCategory with this data.
     */
    create: XOR<SubCategoryCreateInput, SubCategoryUncheckedCreateInput>
    /**
     * In case the SubCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubCategoryUpdateInput, SubCategoryUncheckedUpdateInput>
  }


  /**
   * SubCategory delete
   */
  export type SubCategoryDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter which SubCategory to delete.
     */
    where: SubCategoryWhereUniqueInput
  }


  /**
   * SubCategory deleteMany
   */
  export type SubCategoryDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCategories to delete
     */
    where?: SubCategoryWhereInput
  }


  /**
   * SubCategory.Question
   */
  export type SubCategory$QuestionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }


  /**
   * SubCategory without action
   */
  export type SubCategoryDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
  }



  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    name: string | null
    ans: string | null
    subCategoryId: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    ans: string | null
    subCategoryId: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    name: number
    option: number
    ans: number
    subCategoryId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type QuestionMinAggregateInputType = {
    id?: true
    name?: true
    ans?: true
    subCategoryId?: true
    createAt?: true
    updateAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    name?: true
    ans?: true
    subCategoryId?: true
    createAt?: true
    updateAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    name?: true
    option?: true
    ans?: true
    subCategoryId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    name: string
    option: string[]
    ans: string
    subCategoryId: string
    createAt: Date
    updateAt: Date
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    option?: boolean
    ans?: boolean
    subCategoryId?: boolean
    createAt?: boolean
    updateAt?: boolean
    sub_category?: boolean | SubCategoryDefaultArgs<ExtArgs>
    AnsQus?: boolean | Question$AnsQusArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    name?: boolean
    option?: boolean
    ans?: boolean
    subCategoryId?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type QuestionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    sub_category?: boolean | SubCategoryDefaultArgs<ExtArgs>
    AnsQus?: boolean | Question$AnsQusArgs<ExtArgs>
  }


  export type $QuestionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      sub_category: Prisma.$SubCategoryPayload<ExtArgs>
      AnsQus: Prisma.$AnsQusPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: string
      name: string
      option: string[]
      ans: string
      subCategoryId: string
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }


  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<QuestionFindManyArgs, 'select' | 'include'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QuestionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>
    ): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Question that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QuestionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>
    ): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QuestionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
    **/
    create<T extends QuestionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>
    ): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Questions.
     *     @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     *     @example
     *     // Create many Questions
     *     const question = await prisma.question.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends QuestionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
    **/
    delete<T extends QuestionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>
    ): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QuestionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>
    ): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QuestionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QuestionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
    **/
    upsert<T extends QuestionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>
    ): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    sub_category<T extends SubCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubCategoryDefaultArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    AnsQus<T extends Question$AnsQusArgs<ExtArgs> = {}>(args?: Subset<T, Question$AnsQusArgs<ExtArgs>>): Prisma__AnsQusClient<$Result.GetResult<Prisma.$AnsQusPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Question model
   */ 
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly name: FieldRef<"Question", 'String'>
    readonly option: FieldRef<"Question", 'String[]'>
    readonly ans: FieldRef<"Question", 'String'>
    readonly subCategoryId: FieldRef<"Question", 'String'>
    readonly createAt: FieldRef<"Question", 'DateTime'>
    readonly updateAt: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }


  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }


  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }


  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }


  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }


  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }


  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }


  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
  }


  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }


  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }


  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
  }


  /**
   * Question.AnsQus
   */
  export type Question$AnsQusArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnsQus
     */
    select?: AnsQusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnsQusInclude<ExtArgs> | null
    where?: AnsQusWhereInput
  }


  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    picture: 'picture',
    select_category: 'select_category',
    own_refer_code: 'own_refer_code',
    refer_contain: 'refer_contain',
    referListId: 'referListId',
    earningId: 'earningId',
    resultId: 'resultId',
    paymentId: 'paymentId',
    email: 'email',
    api_auth_key: 'api_auth_key',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ReferListScalarFieldEnum: {
    id: 'id',
    refer: 'refer',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type ReferListScalarFieldEnum = (typeof ReferListScalarFieldEnum)[keyof typeof ReferListScalarFieldEnum]


  export const ResultScalarFieldEnum: {
    id: 'id',
    solve: 'solve',
    wrong: 'wrong',
    subject: 'subject',
    faster_ans: 'faster_ans'
  };

  export type ResultScalarFieldEnum = (typeof ResultScalarFieldEnum)[keyof typeof ResultScalarFieldEnum]


  export const AnsQusScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    resultId: 'resultId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type AnsQusScalarFieldEnum = (typeof AnsQusScalarFieldEnum)[keyof typeof AnsQusScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    type: 'type',
    number: 'number',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const EarningScalarFieldEnum: {
    id: 'id',
    earning_ammount: 'earning_ammount',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type EarningScalarFieldEnum = (typeof EarningScalarFieldEnum)[keyof typeof EarningScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const SubCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createAt: 'createAt',
    updateAt: 'updateAt',
    categoryId: 'categoryId'
  };

  export type SubCategoryScalarFieldEnum = (typeof SubCategoryScalarFieldEnum)[keyof typeof SubCategoryScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    option: 'option',
    ans: 'ans',
    subCategoryId: 'subCategoryId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    picture?: StringNullableFilter<"User"> | string | null
    select_category?: StringNullableFilter<"User"> | string | null
    own_refer_code?: StringNullableFilter<"User"> | string | null
    refer_contain?: StringNullableFilter<"User"> | string | null
    referListId?: StringNullableFilter<"User"> | string | null
    earningId?: StringFilter<"User"> | string
    resultId?: StringFilter<"User"> | string
    paymentId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    api_auth_key?: StringFilter<"User"> | string
    createAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    earning?: XOR<EarningRelationFilter, EarningWhereInput>
    payment?: XOR<PaymentRelationFilter, PaymentWhereInput>
    result?: XOR<ResultRelationFilter, ResultWhereInput>
    ReferList?: XOR<ReferListNullableRelationFilter, ReferListWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    select_category?: SortOrderInput | SortOrder
    own_refer_code?: SortOrderInput | SortOrder
    refer_contain?: SortOrderInput | SortOrder
    referListId?: SortOrderInput | SortOrder
    earningId?: SortOrder
    resultId?: SortOrder
    paymentId?: SortOrder
    email?: SortOrder
    api_auth_key?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    earning?: EarningOrderByWithRelationInput
    payment?: PaymentOrderByWithRelationInput
    result?: ResultOrderByWithRelationInput
    ReferList?: ReferListOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    picture?: StringNullableFilter<"User"> | string | null
    select_category?: StringNullableFilter<"User"> | string | null
    own_refer_code?: StringNullableFilter<"User"> | string | null
    refer_contain?: StringNullableFilter<"User"> | string | null
    referListId?: StringNullableFilter<"User"> | string | null
    earningId?: StringFilter<"User"> | string
    resultId?: StringFilter<"User"> | string
    paymentId?: StringFilter<"User"> | string
    api_auth_key?: StringFilter<"User"> | string
    createAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    earning?: XOR<EarningRelationFilter, EarningWhereInput>
    payment?: XOR<PaymentRelationFilter, PaymentWhereInput>
    result?: XOR<ResultRelationFilter, ResultWhereInput>
    ReferList?: XOR<ReferListNullableRelationFilter, ReferListWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    select_category?: SortOrderInput | SortOrder
    own_refer_code?: SortOrderInput | SortOrder
    refer_contain?: SortOrderInput | SortOrder
    referListId?: SortOrderInput | SortOrder
    earningId?: SortOrder
    resultId?: SortOrder
    paymentId?: SortOrder
    email?: SortOrder
    api_auth_key?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    picture?: StringNullableWithAggregatesFilter<"User"> | string | null
    select_category?: StringNullableWithAggregatesFilter<"User"> | string | null
    own_refer_code?: StringNullableWithAggregatesFilter<"User"> | string | null
    refer_contain?: StringNullableWithAggregatesFilter<"User"> | string | null
    referListId?: StringNullableWithAggregatesFilter<"User"> | string | null
    earningId?: StringWithAggregatesFilter<"User"> | string
    resultId?: StringWithAggregatesFilter<"User"> | string
    paymentId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    api_auth_key?: StringWithAggregatesFilter<"User"> | string
    createAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ReferListWhereInput = {
    AND?: ReferListWhereInput | ReferListWhereInput[]
    OR?: ReferListWhereInput[]
    NOT?: ReferListWhereInput | ReferListWhereInput[]
    id?: StringFilter<"ReferList"> | string
    refer?: StringFilter<"ReferList"> | string
    createAt?: DateTimeFilter<"ReferList"> | Date | string
    updateAt?: DateTimeFilter<"ReferList"> | Date | string
    user?: UserListRelationFilter
  }

  export type ReferListOrderByWithRelationInput = {
    id?: SortOrder
    refer?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    user?: UserOrderByRelationAggregateInput
  }

  export type ReferListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReferListWhereInput | ReferListWhereInput[]
    OR?: ReferListWhereInput[]
    NOT?: ReferListWhereInput | ReferListWhereInput[]
    refer?: StringFilter<"ReferList"> | string
    createAt?: DateTimeFilter<"ReferList"> | Date | string
    updateAt?: DateTimeFilter<"ReferList"> | Date | string
    user?: UserListRelationFilter
  }, "id">

  export type ReferListOrderByWithAggregationInput = {
    id?: SortOrder
    refer?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: ReferListCountOrderByAggregateInput
    _max?: ReferListMaxOrderByAggregateInput
    _min?: ReferListMinOrderByAggregateInput
  }

  export type ReferListScalarWhereWithAggregatesInput = {
    AND?: ReferListScalarWhereWithAggregatesInput | ReferListScalarWhereWithAggregatesInput[]
    OR?: ReferListScalarWhereWithAggregatesInput[]
    NOT?: ReferListScalarWhereWithAggregatesInput | ReferListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReferList"> | string
    refer?: StringWithAggregatesFilter<"ReferList"> | string
    createAt?: DateTimeWithAggregatesFilter<"ReferList"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"ReferList"> | Date | string
  }

  export type ResultWhereInput = {
    AND?: ResultWhereInput | ResultWhereInput[]
    OR?: ResultWhereInput[]
    NOT?: ResultWhereInput | ResultWhereInput[]
    id?: StringFilter<"Result"> | string
    solve?: IntFilter<"Result"> | number
    wrong?: IntFilter<"Result"> | number
    subject?: IntFilter<"Result"> | number
    faster_ans?: StringFilter<"Result"> | string
    User?: UserListRelationFilter
    ans_qus_list?: AnsQusListRelationFilter
  }

  export type ResultOrderByWithRelationInput = {
    id?: SortOrder
    solve?: SortOrder
    wrong?: SortOrder
    subject?: SortOrder
    faster_ans?: SortOrder
    User?: UserOrderByRelationAggregateInput
    ans_qus_list?: AnsQusOrderByRelationAggregateInput
  }

  export type ResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResultWhereInput | ResultWhereInput[]
    OR?: ResultWhereInput[]
    NOT?: ResultWhereInput | ResultWhereInput[]
    solve?: IntFilter<"Result"> | number
    wrong?: IntFilter<"Result"> | number
    subject?: IntFilter<"Result"> | number
    faster_ans?: StringFilter<"Result"> | string
    User?: UserListRelationFilter
    ans_qus_list?: AnsQusListRelationFilter
  }, "id">

  export type ResultOrderByWithAggregationInput = {
    id?: SortOrder
    solve?: SortOrder
    wrong?: SortOrder
    subject?: SortOrder
    faster_ans?: SortOrder
    _count?: ResultCountOrderByAggregateInput
    _avg?: ResultAvgOrderByAggregateInput
    _max?: ResultMaxOrderByAggregateInput
    _min?: ResultMinOrderByAggregateInput
    _sum?: ResultSumOrderByAggregateInput
  }

  export type ResultScalarWhereWithAggregatesInput = {
    AND?: ResultScalarWhereWithAggregatesInput | ResultScalarWhereWithAggregatesInput[]
    OR?: ResultScalarWhereWithAggregatesInput[]
    NOT?: ResultScalarWhereWithAggregatesInput | ResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Result"> | string
    solve?: IntWithAggregatesFilter<"Result"> | number
    wrong?: IntWithAggregatesFilter<"Result"> | number
    subject?: IntWithAggregatesFilter<"Result"> | number
    faster_ans?: StringWithAggregatesFilter<"Result"> | string
  }

  export type AnsQusWhereInput = {
    AND?: AnsQusWhereInput | AnsQusWhereInput[]
    OR?: AnsQusWhereInput[]
    NOT?: AnsQusWhereInput | AnsQusWhereInput[]
    id?: StringFilter<"AnsQus"> | string
    questionId?: StringFilter<"AnsQus"> | string
    resultId?: StringNullableFilter<"AnsQus"> | string | null
    createAt?: DateTimeFilter<"AnsQus"> | Date | string
    updateAt?: DateTimeFilter<"AnsQus"> | Date | string
    qus?: XOR<QuestionRelationFilter, QuestionWhereInput>
    Result?: XOR<ResultNullableRelationFilter, ResultWhereInput> | null
  }

  export type AnsQusOrderByWithRelationInput = {
    id?: SortOrder
    questionId?: SortOrder
    resultId?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    qus?: QuestionOrderByWithRelationInput
    Result?: ResultOrderByWithRelationInput
  }

  export type AnsQusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    questionId?: string
    AND?: AnsQusWhereInput | AnsQusWhereInput[]
    OR?: AnsQusWhereInput[]
    NOT?: AnsQusWhereInput | AnsQusWhereInput[]
    resultId?: StringNullableFilter<"AnsQus"> | string | null
    createAt?: DateTimeFilter<"AnsQus"> | Date | string
    updateAt?: DateTimeFilter<"AnsQus"> | Date | string
    qus?: XOR<QuestionRelationFilter, QuestionWhereInput>
    Result?: XOR<ResultNullableRelationFilter, ResultWhereInput> | null
  }, "id" | "questionId">

  export type AnsQusOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    resultId?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: AnsQusCountOrderByAggregateInput
    _max?: AnsQusMaxOrderByAggregateInput
    _min?: AnsQusMinOrderByAggregateInput
  }

  export type AnsQusScalarWhereWithAggregatesInput = {
    AND?: AnsQusScalarWhereWithAggregatesInput | AnsQusScalarWhereWithAggregatesInput[]
    OR?: AnsQusScalarWhereWithAggregatesInput[]
    NOT?: AnsQusScalarWhereWithAggregatesInput | AnsQusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnsQus"> | string
    questionId?: StringWithAggregatesFilter<"AnsQus"> | string
    resultId?: StringNullableWithAggregatesFilter<"AnsQus"> | string | null
    createAt?: DateTimeWithAggregatesFilter<"AnsQus"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"AnsQus"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    type?: StringFilter<"Payment"> | string
    number?: StringFilter<"Payment"> | string
    createAt?: DateTimeFilter<"Payment"> | Date | string
    updateAt?: DateTimeFilter<"Payment"> | Date | string
    User?: UserListRelationFilter
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    number?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    User?: UserOrderByRelationAggregateInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    type?: StringFilter<"Payment"> | string
    number?: StringFilter<"Payment"> | string
    createAt?: DateTimeFilter<"Payment"> | Date | string
    updateAt?: DateTimeFilter<"Payment"> | Date | string
    User?: UserListRelationFilter
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    number?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    type?: StringWithAggregatesFilter<"Payment"> | string
    number?: StringWithAggregatesFilter<"Payment"> | string
    createAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type EarningWhereInput = {
    AND?: EarningWhereInput | EarningWhereInput[]
    OR?: EarningWhereInput[]
    NOT?: EarningWhereInput | EarningWhereInput[]
    id?: StringFilter<"Earning"> | string
    earning_ammount?: FloatNullableFilter<"Earning"> | number | null
    createAt?: DateTimeFilter<"Earning"> | Date | string
    updateAt?: DateTimeFilter<"Earning"> | Date | string
    User?: UserListRelationFilter
  }

  export type EarningOrderByWithRelationInput = {
    id?: SortOrder
    earning_ammount?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    User?: UserOrderByRelationAggregateInput
  }

  export type EarningWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EarningWhereInput | EarningWhereInput[]
    OR?: EarningWhereInput[]
    NOT?: EarningWhereInput | EarningWhereInput[]
    earning_ammount?: FloatNullableFilter<"Earning"> | number | null
    createAt?: DateTimeFilter<"Earning"> | Date | string
    updateAt?: DateTimeFilter<"Earning"> | Date | string
    User?: UserListRelationFilter
  }, "id">

  export type EarningOrderByWithAggregationInput = {
    id?: SortOrder
    earning_ammount?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: EarningCountOrderByAggregateInput
    _avg?: EarningAvgOrderByAggregateInput
    _max?: EarningMaxOrderByAggregateInput
    _min?: EarningMinOrderByAggregateInput
    _sum?: EarningSumOrderByAggregateInput
  }

  export type EarningScalarWhereWithAggregatesInput = {
    AND?: EarningScalarWhereWithAggregatesInput | EarningScalarWhereWithAggregatesInput[]
    OR?: EarningScalarWhereWithAggregatesInput[]
    NOT?: EarningScalarWhereWithAggregatesInput | EarningScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Earning"> | string
    earning_ammount?: FloatNullableWithAggregatesFilter<"Earning"> | number | null
    createAt?: DateTimeWithAggregatesFilter<"Earning"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Earning"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringFilter<"Category"> | string
    createAt?: DateTimeFilter<"Category"> | Date | string
    updateAt?: DateTimeFilter<"Category"> | Date | string
    SubCategory?: SubCategoryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    SubCategory?: SubCategoryOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    description?: StringFilter<"Category"> | string
    createAt?: DateTimeFilter<"Category"> | Date | string
    updateAt?: DateTimeFilter<"Category"> | Date | string
    SubCategory?: SubCategoryListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringWithAggregatesFilter<"Category"> | string
    createAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type SubCategoryWhereInput = {
    AND?: SubCategoryWhereInput | SubCategoryWhereInput[]
    OR?: SubCategoryWhereInput[]
    NOT?: SubCategoryWhereInput | SubCategoryWhereInput[]
    id?: StringFilter<"SubCategory"> | string
    name?: StringFilter<"SubCategory"> | string
    createAt?: DateTimeFilter<"SubCategory"> | Date | string
    updateAt?: DateTimeFilter<"SubCategory"> | Date | string
    categoryId?: StringFilter<"SubCategory"> | string
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    Question?: QuestionListRelationFilter
  }

  export type SubCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    categoryId?: SortOrder
    category?: CategoryOrderByWithRelationInput
    Question?: QuestionOrderByRelationAggregateInput
  }

  export type SubCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubCategoryWhereInput | SubCategoryWhereInput[]
    OR?: SubCategoryWhereInput[]
    NOT?: SubCategoryWhereInput | SubCategoryWhereInput[]
    name?: StringFilter<"SubCategory"> | string
    createAt?: DateTimeFilter<"SubCategory"> | Date | string
    updateAt?: DateTimeFilter<"SubCategory"> | Date | string
    categoryId?: StringFilter<"SubCategory"> | string
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    Question?: QuestionListRelationFilter
  }, "id">

  export type SubCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    categoryId?: SortOrder
    _count?: SubCategoryCountOrderByAggregateInput
    _max?: SubCategoryMaxOrderByAggregateInput
    _min?: SubCategoryMinOrderByAggregateInput
  }

  export type SubCategoryScalarWhereWithAggregatesInput = {
    AND?: SubCategoryScalarWhereWithAggregatesInput | SubCategoryScalarWhereWithAggregatesInput[]
    OR?: SubCategoryScalarWhereWithAggregatesInput[]
    NOT?: SubCategoryScalarWhereWithAggregatesInput | SubCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubCategory"> | string
    name?: StringWithAggregatesFilter<"SubCategory"> | string
    createAt?: DateTimeWithAggregatesFilter<"SubCategory"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"SubCategory"> | Date | string
    categoryId?: StringWithAggregatesFilter<"SubCategory"> | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    name?: StringFilter<"Question"> | string
    option?: StringNullableListFilter<"Question">
    ans?: StringFilter<"Question"> | string
    subCategoryId?: StringFilter<"Question"> | string
    createAt?: DateTimeFilter<"Question"> | Date | string
    updateAt?: DateTimeFilter<"Question"> | Date | string
    sub_category?: XOR<SubCategoryRelationFilter, SubCategoryWhereInput>
    AnsQus?: XOR<AnsQusNullableRelationFilter, AnsQusWhereInput> | null
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    option?: SortOrder
    ans?: SortOrder
    subCategoryId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    sub_category?: SubCategoryOrderByWithRelationInput
    AnsQus?: AnsQusOrderByWithRelationInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    name?: StringFilter<"Question"> | string
    option?: StringNullableListFilter<"Question">
    ans?: StringFilter<"Question"> | string
    subCategoryId?: StringFilter<"Question"> | string
    createAt?: DateTimeFilter<"Question"> | Date | string
    updateAt?: DateTimeFilter<"Question"> | Date | string
    sub_category?: XOR<SubCategoryRelationFilter, SubCategoryWhereInput>
    AnsQus?: XOR<AnsQusNullableRelationFilter, AnsQusWhereInput> | null
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    option?: SortOrder
    ans?: SortOrder
    subCategoryId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    name?: StringWithAggregatesFilter<"Question"> | string
    option?: StringNullableListFilter<"Question">
    ans?: StringWithAggregatesFilter<"Question"> | string
    subCategoryId?: StringWithAggregatesFilter<"Question"> | string
    createAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    picture?: string | null
    select_category?: string | null
    own_refer_code?: string | null
    refer_contain?: string | null
    email: string
    api_auth_key: string
    createAt?: Date | string
    updateAt?: Date | string
    earning: EarningCreateNestedOneWithoutUserInput
    payment: PaymentCreateNestedOneWithoutUserInput
    result: ResultCreateNestedOneWithoutUserInput
    ReferList?: ReferListCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    picture?: string | null
    select_category?: string | null
    own_refer_code?: string | null
    refer_contain?: string | null
    referListId?: string | null
    earningId: string
    resultId: string
    paymentId: string
    email: string
    api_auth_key: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    select_category?: NullableStringFieldUpdateOperationsInput | string | null
    own_refer_code?: NullableStringFieldUpdateOperationsInput | string | null
    refer_contain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    api_auth_key?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    earning?: EarningUpdateOneRequiredWithoutUserNestedInput
    payment?: PaymentUpdateOneRequiredWithoutUserNestedInput
    result?: ResultUpdateOneRequiredWithoutUserNestedInput
    ReferList?: ReferListUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    select_category?: NullableStringFieldUpdateOperationsInput | string | null
    own_refer_code?: NullableStringFieldUpdateOperationsInput | string | null
    refer_contain?: NullableStringFieldUpdateOperationsInput | string | null
    referListId?: NullableStringFieldUpdateOperationsInput | string | null
    earningId?: StringFieldUpdateOperationsInput | string
    resultId?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    api_auth_key?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    picture?: string | null
    select_category?: string | null
    own_refer_code?: string | null
    refer_contain?: string | null
    referListId?: string | null
    earningId: string
    resultId: string
    paymentId: string
    email: string
    api_auth_key: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    select_category?: NullableStringFieldUpdateOperationsInput | string | null
    own_refer_code?: NullableStringFieldUpdateOperationsInput | string | null
    refer_contain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    api_auth_key?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    select_category?: NullableStringFieldUpdateOperationsInput | string | null
    own_refer_code?: NullableStringFieldUpdateOperationsInput | string | null
    refer_contain?: NullableStringFieldUpdateOperationsInput | string | null
    referListId?: NullableStringFieldUpdateOperationsInput | string | null
    earningId?: StringFieldUpdateOperationsInput | string
    resultId?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    api_auth_key?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferListCreateInput = {
    id?: string
    refer: string
    createAt?: Date | string
    updateAt?: Date | string
    user?: UserCreateNestedManyWithoutReferListInput
  }

  export type ReferListUncheckedCreateInput = {
    id?: string
    refer: string
    createAt?: Date | string
    updateAt?: Date | string
    user?: UserUncheckedCreateNestedManyWithoutReferListInput
  }

  export type ReferListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    refer?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateManyWithoutReferListNestedInput
  }

  export type ReferListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    refer?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateManyWithoutReferListNestedInput
  }

  export type ReferListCreateManyInput = {
    id?: string
    refer: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ReferListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    refer?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    refer?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultCreateInput = {
    id?: string
    solve: number
    wrong: number
    subject: number
    faster_ans: string
    User?: UserCreateNestedManyWithoutResultInput
    ans_qus_list?: AnsQusCreateNestedManyWithoutResultInput
  }

  export type ResultUncheckedCreateInput = {
    id?: string
    solve: number
    wrong: number
    subject: number
    faster_ans: string
    User?: UserUncheckedCreateNestedManyWithoutResultInput
    ans_qus_list?: AnsQusUncheckedCreateNestedManyWithoutResultInput
  }

  export type ResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    solve?: IntFieldUpdateOperationsInput | number
    wrong?: IntFieldUpdateOperationsInput | number
    subject?: IntFieldUpdateOperationsInput | number
    faster_ans?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateManyWithoutResultNestedInput
    ans_qus_list?: AnsQusUpdateManyWithoutResultNestedInput
  }

  export type ResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    solve?: IntFieldUpdateOperationsInput | number
    wrong?: IntFieldUpdateOperationsInput | number
    subject?: IntFieldUpdateOperationsInput | number
    faster_ans?: StringFieldUpdateOperationsInput | string
    User?: UserUncheckedUpdateManyWithoutResultNestedInput
    ans_qus_list?: AnsQusUncheckedUpdateManyWithoutResultNestedInput
  }

  export type ResultCreateManyInput = {
    id?: string
    solve: number
    wrong: number
    subject: number
    faster_ans: string
  }

  export type ResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    solve?: IntFieldUpdateOperationsInput | number
    wrong?: IntFieldUpdateOperationsInput | number
    subject?: IntFieldUpdateOperationsInput | number
    faster_ans?: StringFieldUpdateOperationsInput | string
  }

  export type ResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    solve?: IntFieldUpdateOperationsInput | number
    wrong?: IntFieldUpdateOperationsInput | number
    subject?: IntFieldUpdateOperationsInput | number
    faster_ans?: StringFieldUpdateOperationsInput | string
  }

  export type AnsQusCreateInput = {
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    qus: QuestionCreateNestedOneWithoutAnsQusInput
    Result?: ResultCreateNestedOneWithoutAns_qus_listInput
  }

  export type AnsQusUncheckedCreateInput = {
    id?: string
    questionId: string
    resultId?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type AnsQusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qus?: QuestionUpdateOneRequiredWithoutAnsQusNestedInput
    Result?: ResultUpdateOneWithoutAns_qus_listNestedInput
  }

  export type AnsQusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    resultId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnsQusCreateManyInput = {
    id?: string
    questionId: string
    resultId?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type AnsQusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnsQusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    resultId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    type: string
    number: string
    createAt?: Date | string
    updateAt?: Date | string
    User?: UserCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    type: string
    number: string
    createAt?: Date | string
    updateAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentCreateManyInput = {
    id?: string
    type: string
    number: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EarningCreateInput = {
    id?: string
    earning_ammount?: number | null
    createAt?: Date | string
    updateAt?: Date | string
    User?: UserCreateNestedManyWithoutEarningInput
  }

  export type EarningUncheckedCreateInput = {
    id?: string
    earning_ammount?: number | null
    createAt?: Date | string
    updateAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutEarningInput
  }

  export type EarningUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    earning_ammount?: NullableFloatFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateManyWithoutEarningNestedInput
  }

  export type EarningUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    earning_ammount?: NullableFloatFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutEarningNestedInput
  }

  export type EarningCreateManyInput = {
    id?: string
    earning_ammount?: number | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type EarningUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    earning_ammount?: NullableFloatFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EarningUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    earning_ammount?: NullableFloatFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    description: string
    createAt?: Date | string
    updateAt?: Date | string
    SubCategory?: SubCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    createAt?: Date | string
    updateAt?: Date | string
    SubCategory?: SubCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SubCategory?: SubCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SubCategory?: SubCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    description: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoryCreateInput = {
    id?: string
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    category: CategoryCreateNestedOneWithoutSubCategoryInput
    Question?: QuestionCreateNestedManyWithoutSub_categoryInput
  }

  export type SubCategoryUncheckedCreateInput = {
    id?: string
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    categoryId: string
    Question?: QuestionUncheckedCreateNestedManyWithoutSub_categoryInput
  }

  export type SubCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutSubCategoryNestedInput
    Question?: QuestionUpdateManyWithoutSub_categoryNestedInput
  }

  export type SubCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    Question?: QuestionUncheckedUpdateManyWithoutSub_categoryNestedInput
  }

  export type SubCategoryCreateManyInput = {
    id?: string
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    categoryId: string
  }

  export type SubCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionCreateInput = {
    id?: string
    name: string
    option?: QuestionCreateoptionInput | string[]
    ans: string
    createAt?: Date | string
    updateAt?: Date | string
    sub_category: SubCategoryCreateNestedOneWithoutQuestionInput
    AnsQus?: AnsQusCreateNestedOneWithoutQusInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    name: string
    option?: QuestionCreateoptionInput | string[]
    ans: string
    subCategoryId: string
    createAt?: Date | string
    updateAt?: Date | string
    AnsQus?: AnsQusUncheckedCreateNestedOneWithoutQusInput
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    option?: QuestionUpdateoptionInput | string[]
    ans?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_category?: SubCategoryUpdateOneRequiredWithoutQuestionNestedInput
    AnsQus?: AnsQusUpdateOneWithoutQusNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    option?: QuestionUpdateoptionInput | string[]
    ans?: StringFieldUpdateOperationsInput | string
    subCategoryId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AnsQus?: AnsQusUncheckedUpdateOneWithoutQusNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: string
    name: string
    option?: QuestionCreateoptionInput | string[]
    ans: string
    subCategoryId: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    option?: QuestionUpdateoptionInput | string[]
    ans?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    option?: QuestionUpdateoptionInput | string[]
    ans?: StringFieldUpdateOperationsInput | string
    subCategoryId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EarningRelationFilter = {
    is?: EarningWhereInput
    isNot?: EarningWhereInput
  }

  export type PaymentRelationFilter = {
    is?: PaymentWhereInput
    isNot?: PaymentWhereInput
  }

  export type ResultRelationFilter = {
    is?: ResultWhereInput
    isNot?: ResultWhereInput
  }

  export type ReferListNullableRelationFilter = {
    is?: ReferListWhereInput | null
    isNot?: ReferListWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    picture?: SortOrder
    select_category?: SortOrder
    own_refer_code?: SortOrder
    refer_contain?: SortOrder
    referListId?: SortOrder
    earningId?: SortOrder
    resultId?: SortOrder
    paymentId?: SortOrder
    email?: SortOrder
    api_auth_key?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    picture?: SortOrder
    select_category?: SortOrder
    own_refer_code?: SortOrder
    refer_contain?: SortOrder
    referListId?: SortOrder
    earningId?: SortOrder
    resultId?: SortOrder
    paymentId?: SortOrder
    email?: SortOrder
    api_auth_key?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    picture?: SortOrder
    select_category?: SortOrder
    own_refer_code?: SortOrder
    refer_contain?: SortOrder
    referListId?: SortOrder
    earningId?: SortOrder
    resultId?: SortOrder
    paymentId?: SortOrder
    email?: SortOrder
    api_auth_key?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReferListCountOrderByAggregateInput = {
    id?: SortOrder
    refer?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ReferListMaxOrderByAggregateInput = {
    id?: SortOrder
    refer?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ReferListMinOrderByAggregateInput = {
    id?: SortOrder
    refer?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AnsQusListRelationFilter = {
    every?: AnsQusWhereInput
    some?: AnsQusWhereInput
    none?: AnsQusWhereInput
  }

  export type AnsQusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResultCountOrderByAggregateInput = {
    id?: SortOrder
    solve?: SortOrder
    wrong?: SortOrder
    subject?: SortOrder
    faster_ans?: SortOrder
  }

  export type ResultAvgOrderByAggregateInput = {
    solve?: SortOrder
    wrong?: SortOrder
    subject?: SortOrder
  }

  export type ResultMaxOrderByAggregateInput = {
    id?: SortOrder
    solve?: SortOrder
    wrong?: SortOrder
    subject?: SortOrder
    faster_ans?: SortOrder
  }

  export type ResultMinOrderByAggregateInput = {
    id?: SortOrder
    solve?: SortOrder
    wrong?: SortOrder
    subject?: SortOrder
    faster_ans?: SortOrder
  }

  export type ResultSumOrderByAggregateInput = {
    solve?: SortOrder
    wrong?: SortOrder
    subject?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type QuestionRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type ResultNullableRelationFilter = {
    is?: ResultWhereInput | null
    isNot?: ResultWhereInput | null
  }

  export type AnsQusCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    resultId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type AnsQusMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    resultId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type AnsQusMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    resultId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    number?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    number?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    number?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EarningCountOrderByAggregateInput = {
    id?: SortOrder
    earning_ammount?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type EarningAvgOrderByAggregateInput = {
    earning_ammount?: SortOrder
  }

  export type EarningMaxOrderByAggregateInput = {
    id?: SortOrder
    earning_ammount?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type EarningMinOrderByAggregateInput = {
    id?: SortOrder
    earning_ammount?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type EarningSumOrderByAggregateInput = {
    earning_ammount?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type SubCategoryListRelationFilter = {
    every?: SubCategoryWhereInput
    some?: SubCategoryWhereInput
    none?: SubCategoryWhereInput
  }

  export type SubCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    categoryId?: SortOrder
  }

  export type SubCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    categoryId?: SortOrder
  }

  export type SubCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    categoryId?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type SubCategoryRelationFilter = {
    is?: SubCategoryWhereInput
    isNot?: SubCategoryWhereInput
  }

  export type AnsQusNullableRelationFilter = {
    is?: AnsQusWhereInput | null
    isNot?: AnsQusWhereInput | null
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    option?: SortOrder
    ans?: SortOrder
    subCategoryId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ans?: SortOrder
    subCategoryId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ans?: SortOrder
    subCategoryId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type EarningCreateNestedOneWithoutUserInput = {
    create?: XOR<EarningCreateWithoutUserInput, EarningUncheckedCreateWithoutUserInput>
    connectOrCreate?: EarningCreateOrConnectWithoutUserInput
    connect?: EarningWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput
    connect?: PaymentWhereUniqueInput
  }

  export type ResultCreateNestedOneWithoutUserInput = {
    create?: XOR<ResultCreateWithoutUserInput, ResultUncheckedCreateWithoutUserInput>
    connectOrCreate?: ResultCreateOrConnectWithoutUserInput
    connect?: ResultWhereUniqueInput
  }

  export type ReferListCreateNestedOneWithoutUserInput = {
    create?: XOR<ReferListCreateWithoutUserInput, ReferListUncheckedCreateWithoutUserInput>
    connectOrCreate?: ReferListCreateOrConnectWithoutUserInput
    connect?: ReferListWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EarningUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<EarningCreateWithoutUserInput, EarningUncheckedCreateWithoutUserInput>
    connectOrCreate?: EarningCreateOrConnectWithoutUserInput
    upsert?: EarningUpsertWithoutUserInput
    connect?: EarningWhereUniqueInput
    update?: XOR<XOR<EarningUpdateToOneWithWhereWithoutUserInput, EarningUpdateWithoutUserInput>, EarningUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput
    upsert?: PaymentUpsertWithoutUserInput
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutUserInput, PaymentUpdateWithoutUserInput>, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type ResultUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<ResultCreateWithoutUserInput, ResultUncheckedCreateWithoutUserInput>
    connectOrCreate?: ResultCreateOrConnectWithoutUserInput
    upsert?: ResultUpsertWithoutUserInput
    connect?: ResultWhereUniqueInput
    update?: XOR<XOR<ResultUpdateToOneWithWhereWithoutUserInput, ResultUpdateWithoutUserInput>, ResultUncheckedUpdateWithoutUserInput>
  }

  export type ReferListUpdateOneWithoutUserNestedInput = {
    create?: XOR<ReferListCreateWithoutUserInput, ReferListUncheckedCreateWithoutUserInput>
    connectOrCreate?: ReferListCreateOrConnectWithoutUserInput
    upsert?: ReferListUpsertWithoutUserInput
    disconnect?: ReferListWhereInput | boolean
    delete?: ReferListWhereInput | boolean
    connect?: ReferListWhereUniqueInput
    update?: XOR<XOR<ReferListUpdateToOneWithWhereWithoutUserInput, ReferListUpdateWithoutUserInput>, ReferListUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedManyWithoutReferListInput = {
    create?: XOR<UserCreateWithoutReferListInput, UserUncheckedCreateWithoutReferListInput> | UserCreateWithoutReferListInput[] | UserUncheckedCreateWithoutReferListInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferListInput | UserCreateOrConnectWithoutReferListInput[]
    createMany?: UserCreateManyReferListInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutReferListInput = {
    create?: XOR<UserCreateWithoutReferListInput, UserUncheckedCreateWithoutReferListInput> | UserCreateWithoutReferListInput[] | UserUncheckedCreateWithoutReferListInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferListInput | UserCreateOrConnectWithoutReferListInput[]
    createMany?: UserCreateManyReferListInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutReferListNestedInput = {
    create?: XOR<UserCreateWithoutReferListInput, UserUncheckedCreateWithoutReferListInput> | UserCreateWithoutReferListInput[] | UserUncheckedCreateWithoutReferListInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferListInput | UserCreateOrConnectWithoutReferListInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutReferListInput | UserUpsertWithWhereUniqueWithoutReferListInput[]
    createMany?: UserCreateManyReferListInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutReferListInput | UserUpdateWithWhereUniqueWithoutReferListInput[]
    updateMany?: UserUpdateManyWithWhereWithoutReferListInput | UserUpdateManyWithWhereWithoutReferListInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutReferListNestedInput = {
    create?: XOR<UserCreateWithoutReferListInput, UserUncheckedCreateWithoutReferListInput> | UserCreateWithoutReferListInput[] | UserUncheckedCreateWithoutReferListInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferListInput | UserCreateOrConnectWithoutReferListInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutReferListInput | UserUpsertWithWhereUniqueWithoutReferListInput[]
    createMany?: UserCreateManyReferListInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutReferListInput | UserUpdateWithWhereUniqueWithoutReferListInput[]
    updateMany?: UserUpdateManyWithWhereWithoutReferListInput | UserUpdateManyWithWhereWithoutReferListInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutResultInput = {
    create?: XOR<UserCreateWithoutResultInput, UserUncheckedCreateWithoutResultInput> | UserCreateWithoutResultInput[] | UserUncheckedCreateWithoutResultInput[]
    connectOrCreate?: UserCreateOrConnectWithoutResultInput | UserCreateOrConnectWithoutResultInput[]
    createMany?: UserCreateManyResultInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type AnsQusCreateNestedManyWithoutResultInput = {
    create?: XOR<AnsQusCreateWithoutResultInput, AnsQusUncheckedCreateWithoutResultInput> | AnsQusCreateWithoutResultInput[] | AnsQusUncheckedCreateWithoutResultInput[]
    connectOrCreate?: AnsQusCreateOrConnectWithoutResultInput | AnsQusCreateOrConnectWithoutResultInput[]
    createMany?: AnsQusCreateManyResultInputEnvelope
    connect?: AnsQusWhereUniqueInput | AnsQusWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutResultInput = {
    create?: XOR<UserCreateWithoutResultInput, UserUncheckedCreateWithoutResultInput> | UserCreateWithoutResultInput[] | UserUncheckedCreateWithoutResultInput[]
    connectOrCreate?: UserCreateOrConnectWithoutResultInput | UserCreateOrConnectWithoutResultInput[]
    createMany?: UserCreateManyResultInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type AnsQusUncheckedCreateNestedManyWithoutResultInput = {
    create?: XOR<AnsQusCreateWithoutResultInput, AnsQusUncheckedCreateWithoutResultInput> | AnsQusCreateWithoutResultInput[] | AnsQusUncheckedCreateWithoutResultInput[]
    connectOrCreate?: AnsQusCreateOrConnectWithoutResultInput | AnsQusCreateOrConnectWithoutResultInput[]
    createMany?: AnsQusCreateManyResultInputEnvelope
    connect?: AnsQusWhereUniqueInput | AnsQusWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateManyWithoutResultNestedInput = {
    create?: XOR<UserCreateWithoutResultInput, UserUncheckedCreateWithoutResultInput> | UserCreateWithoutResultInput[] | UserUncheckedCreateWithoutResultInput[]
    connectOrCreate?: UserCreateOrConnectWithoutResultInput | UserCreateOrConnectWithoutResultInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutResultInput | UserUpsertWithWhereUniqueWithoutResultInput[]
    createMany?: UserCreateManyResultInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutResultInput | UserUpdateWithWhereUniqueWithoutResultInput[]
    updateMany?: UserUpdateManyWithWhereWithoutResultInput | UserUpdateManyWithWhereWithoutResultInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AnsQusUpdateManyWithoutResultNestedInput = {
    create?: XOR<AnsQusCreateWithoutResultInput, AnsQusUncheckedCreateWithoutResultInput> | AnsQusCreateWithoutResultInput[] | AnsQusUncheckedCreateWithoutResultInput[]
    connectOrCreate?: AnsQusCreateOrConnectWithoutResultInput | AnsQusCreateOrConnectWithoutResultInput[]
    upsert?: AnsQusUpsertWithWhereUniqueWithoutResultInput | AnsQusUpsertWithWhereUniqueWithoutResultInput[]
    createMany?: AnsQusCreateManyResultInputEnvelope
    set?: AnsQusWhereUniqueInput | AnsQusWhereUniqueInput[]
    disconnect?: AnsQusWhereUniqueInput | AnsQusWhereUniqueInput[]
    delete?: AnsQusWhereUniqueInput | AnsQusWhereUniqueInput[]
    connect?: AnsQusWhereUniqueInput | AnsQusWhereUniqueInput[]
    update?: AnsQusUpdateWithWhereUniqueWithoutResultInput | AnsQusUpdateWithWhereUniqueWithoutResultInput[]
    updateMany?: AnsQusUpdateManyWithWhereWithoutResultInput | AnsQusUpdateManyWithWhereWithoutResultInput[]
    deleteMany?: AnsQusScalarWhereInput | AnsQusScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutResultNestedInput = {
    create?: XOR<UserCreateWithoutResultInput, UserUncheckedCreateWithoutResultInput> | UserCreateWithoutResultInput[] | UserUncheckedCreateWithoutResultInput[]
    connectOrCreate?: UserCreateOrConnectWithoutResultInput | UserCreateOrConnectWithoutResultInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutResultInput | UserUpsertWithWhereUniqueWithoutResultInput[]
    createMany?: UserCreateManyResultInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutResultInput | UserUpdateWithWhereUniqueWithoutResultInput[]
    updateMany?: UserUpdateManyWithWhereWithoutResultInput | UserUpdateManyWithWhereWithoutResultInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AnsQusUncheckedUpdateManyWithoutResultNestedInput = {
    create?: XOR<AnsQusCreateWithoutResultInput, AnsQusUncheckedCreateWithoutResultInput> | AnsQusCreateWithoutResultInput[] | AnsQusUncheckedCreateWithoutResultInput[]
    connectOrCreate?: AnsQusCreateOrConnectWithoutResultInput | AnsQusCreateOrConnectWithoutResultInput[]
    upsert?: AnsQusUpsertWithWhereUniqueWithoutResultInput | AnsQusUpsertWithWhereUniqueWithoutResultInput[]
    createMany?: AnsQusCreateManyResultInputEnvelope
    set?: AnsQusWhereUniqueInput | AnsQusWhereUniqueInput[]
    disconnect?: AnsQusWhereUniqueInput | AnsQusWhereUniqueInput[]
    delete?: AnsQusWhereUniqueInput | AnsQusWhereUniqueInput[]
    connect?: AnsQusWhereUniqueInput | AnsQusWhereUniqueInput[]
    update?: AnsQusUpdateWithWhereUniqueWithoutResultInput | AnsQusUpdateWithWhereUniqueWithoutResultInput[]
    updateMany?: AnsQusUpdateManyWithWhereWithoutResultInput | AnsQusUpdateManyWithWhereWithoutResultInput[]
    deleteMany?: AnsQusScalarWhereInput | AnsQusScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutAnsQusInput = {
    create?: XOR<QuestionCreateWithoutAnsQusInput, QuestionUncheckedCreateWithoutAnsQusInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnsQusInput
    connect?: QuestionWhereUniqueInput
  }

  export type ResultCreateNestedOneWithoutAns_qus_listInput = {
    create?: XOR<ResultCreateWithoutAns_qus_listInput, ResultUncheckedCreateWithoutAns_qus_listInput>
    connectOrCreate?: ResultCreateOrConnectWithoutAns_qus_listInput
    connect?: ResultWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutAnsQusNestedInput = {
    create?: XOR<QuestionCreateWithoutAnsQusInput, QuestionUncheckedCreateWithoutAnsQusInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnsQusInput
    upsert?: QuestionUpsertWithoutAnsQusInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAnsQusInput, QuestionUpdateWithoutAnsQusInput>, QuestionUncheckedUpdateWithoutAnsQusInput>
  }

  export type ResultUpdateOneWithoutAns_qus_listNestedInput = {
    create?: XOR<ResultCreateWithoutAns_qus_listInput, ResultUncheckedCreateWithoutAns_qus_listInput>
    connectOrCreate?: ResultCreateOrConnectWithoutAns_qus_listInput
    upsert?: ResultUpsertWithoutAns_qus_listInput
    disconnect?: ResultWhereInput | boolean
    delete?: ResultWhereInput | boolean
    connect?: ResultWhereUniqueInput
    update?: XOR<XOR<ResultUpdateToOneWithWhereWithoutAns_qus_listInput, ResultUpdateWithoutAns_qus_listInput>, ResultUncheckedUpdateWithoutAns_qus_listInput>
  }

  export type UserCreateNestedManyWithoutPaymentInput = {
    create?: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput> | UserCreateWithoutPaymentInput[] | UserUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPaymentInput | UserCreateOrConnectWithoutPaymentInput[]
    createMany?: UserCreateManyPaymentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutPaymentInput = {
    create?: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput> | UserCreateWithoutPaymentInput[] | UserUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPaymentInput | UserCreateOrConnectWithoutPaymentInput[]
    createMany?: UserCreateManyPaymentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput> | UserCreateWithoutPaymentInput[] | UserUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPaymentInput | UserCreateOrConnectWithoutPaymentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPaymentInput | UserUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: UserCreateManyPaymentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPaymentInput | UserUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPaymentInput | UserUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput> | UserCreateWithoutPaymentInput[] | UserUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPaymentInput | UserCreateOrConnectWithoutPaymentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPaymentInput | UserUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: UserCreateManyPaymentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPaymentInput | UserUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPaymentInput | UserUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutEarningInput = {
    create?: XOR<UserCreateWithoutEarningInput, UserUncheckedCreateWithoutEarningInput> | UserCreateWithoutEarningInput[] | UserUncheckedCreateWithoutEarningInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEarningInput | UserCreateOrConnectWithoutEarningInput[]
    createMany?: UserCreateManyEarningInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutEarningInput = {
    create?: XOR<UserCreateWithoutEarningInput, UserUncheckedCreateWithoutEarningInput> | UserCreateWithoutEarningInput[] | UserUncheckedCreateWithoutEarningInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEarningInput | UserCreateOrConnectWithoutEarningInput[]
    createMany?: UserCreateManyEarningInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateManyWithoutEarningNestedInput = {
    create?: XOR<UserCreateWithoutEarningInput, UserUncheckedCreateWithoutEarningInput> | UserCreateWithoutEarningInput[] | UserUncheckedCreateWithoutEarningInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEarningInput | UserCreateOrConnectWithoutEarningInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutEarningInput | UserUpsertWithWhereUniqueWithoutEarningInput[]
    createMany?: UserCreateManyEarningInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutEarningInput | UserUpdateWithWhereUniqueWithoutEarningInput[]
    updateMany?: UserUpdateManyWithWhereWithoutEarningInput | UserUpdateManyWithWhereWithoutEarningInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutEarningNestedInput = {
    create?: XOR<UserCreateWithoutEarningInput, UserUncheckedCreateWithoutEarningInput> | UserCreateWithoutEarningInput[] | UserUncheckedCreateWithoutEarningInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEarningInput | UserCreateOrConnectWithoutEarningInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutEarningInput | UserUpsertWithWhereUniqueWithoutEarningInput[]
    createMany?: UserCreateManyEarningInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutEarningInput | UserUpdateWithWhereUniqueWithoutEarningInput[]
    updateMany?: UserUpdateManyWithWhereWithoutEarningInput | UserUpdateManyWithWhereWithoutEarningInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SubCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput> | SubCategoryCreateWithoutCategoryInput[] | SubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutCategoryInput | SubCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: SubCategoryCreateManyCategoryInputEnvelope
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type SubCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput> | SubCategoryCreateWithoutCategoryInput[] | SubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutCategoryInput | SubCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: SubCategoryCreateManyCategoryInputEnvelope
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type SubCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput> | SubCategoryCreateWithoutCategoryInput[] | SubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutCategoryInput | SubCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutCategoryInput | SubCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SubCategoryCreateManyCategoryInputEnvelope
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutCategoryInput | SubCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutCategoryInput | SubCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type SubCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput> | SubCategoryCreateWithoutCategoryInput[] | SubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutCategoryInput | SubCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutCategoryInput | SubCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SubCategoryCreateManyCategoryInputEnvelope
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutCategoryInput | SubCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutCategoryInput | SubCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutSubCategoryInput = {
    create?: XOR<CategoryCreateWithoutSubCategoryInput, CategoryUncheckedCreateWithoutSubCategoryInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubCategoryInput
    connect?: CategoryWhereUniqueInput
  }

  export type QuestionCreateNestedManyWithoutSub_categoryInput = {
    create?: XOR<QuestionCreateWithoutSub_categoryInput, QuestionUncheckedCreateWithoutSub_categoryInput> | QuestionCreateWithoutSub_categoryInput[] | QuestionUncheckedCreateWithoutSub_categoryInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutSub_categoryInput | QuestionCreateOrConnectWithoutSub_categoryInput[]
    createMany?: QuestionCreateManySub_categoryInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutSub_categoryInput = {
    create?: XOR<QuestionCreateWithoutSub_categoryInput, QuestionUncheckedCreateWithoutSub_categoryInput> | QuestionCreateWithoutSub_categoryInput[] | QuestionUncheckedCreateWithoutSub_categoryInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutSub_categoryInput | QuestionCreateOrConnectWithoutSub_categoryInput[]
    createMany?: QuestionCreateManySub_categoryInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type CategoryUpdateOneRequiredWithoutSubCategoryNestedInput = {
    create?: XOR<CategoryCreateWithoutSubCategoryInput, CategoryUncheckedCreateWithoutSubCategoryInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubCategoryInput
    upsert?: CategoryUpsertWithoutSubCategoryInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutSubCategoryInput, CategoryUpdateWithoutSubCategoryInput>, CategoryUncheckedUpdateWithoutSubCategoryInput>
  }

  export type QuestionUpdateManyWithoutSub_categoryNestedInput = {
    create?: XOR<QuestionCreateWithoutSub_categoryInput, QuestionUncheckedCreateWithoutSub_categoryInput> | QuestionCreateWithoutSub_categoryInput[] | QuestionUncheckedCreateWithoutSub_categoryInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutSub_categoryInput | QuestionCreateOrConnectWithoutSub_categoryInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutSub_categoryInput | QuestionUpsertWithWhereUniqueWithoutSub_categoryInput[]
    createMany?: QuestionCreateManySub_categoryInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutSub_categoryInput | QuestionUpdateWithWhereUniqueWithoutSub_categoryInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutSub_categoryInput | QuestionUpdateManyWithWhereWithoutSub_categoryInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutSub_categoryNestedInput = {
    create?: XOR<QuestionCreateWithoutSub_categoryInput, QuestionUncheckedCreateWithoutSub_categoryInput> | QuestionCreateWithoutSub_categoryInput[] | QuestionUncheckedCreateWithoutSub_categoryInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutSub_categoryInput | QuestionCreateOrConnectWithoutSub_categoryInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutSub_categoryInput | QuestionUpsertWithWhereUniqueWithoutSub_categoryInput[]
    createMany?: QuestionCreateManySub_categoryInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutSub_categoryInput | QuestionUpdateWithWhereUniqueWithoutSub_categoryInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutSub_categoryInput | QuestionUpdateManyWithWhereWithoutSub_categoryInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuestionCreateoptionInput = {
    set: string[]
  }

  export type SubCategoryCreateNestedOneWithoutQuestionInput = {
    create?: XOR<SubCategoryCreateWithoutQuestionInput, SubCategoryUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: SubCategoryCreateOrConnectWithoutQuestionInput
    connect?: SubCategoryWhereUniqueInput
  }

  export type AnsQusCreateNestedOneWithoutQusInput = {
    create?: XOR<AnsQusCreateWithoutQusInput, AnsQusUncheckedCreateWithoutQusInput>
    connectOrCreate?: AnsQusCreateOrConnectWithoutQusInput
    connect?: AnsQusWhereUniqueInput
  }

  export type AnsQusUncheckedCreateNestedOneWithoutQusInput = {
    create?: XOR<AnsQusCreateWithoutQusInput, AnsQusUncheckedCreateWithoutQusInput>
    connectOrCreate?: AnsQusCreateOrConnectWithoutQusInput
    connect?: AnsQusWhereUniqueInput
  }

  export type QuestionUpdateoptionInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SubCategoryUpdateOneRequiredWithoutQuestionNestedInput = {
    create?: XOR<SubCategoryCreateWithoutQuestionInput, SubCategoryUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: SubCategoryCreateOrConnectWithoutQuestionInput
    upsert?: SubCategoryUpsertWithoutQuestionInput
    connect?: SubCategoryWhereUniqueInput
    update?: XOR<XOR<SubCategoryUpdateToOneWithWhereWithoutQuestionInput, SubCategoryUpdateWithoutQuestionInput>, SubCategoryUncheckedUpdateWithoutQuestionInput>
  }

  export type AnsQusUpdateOneWithoutQusNestedInput = {
    create?: XOR<AnsQusCreateWithoutQusInput, AnsQusUncheckedCreateWithoutQusInput>
    connectOrCreate?: AnsQusCreateOrConnectWithoutQusInput
    upsert?: AnsQusUpsertWithoutQusInput
    disconnect?: AnsQusWhereInput | boolean
    delete?: AnsQusWhereInput | boolean
    connect?: AnsQusWhereUniqueInput
    update?: XOR<XOR<AnsQusUpdateToOneWithWhereWithoutQusInput, AnsQusUpdateWithoutQusInput>, AnsQusUncheckedUpdateWithoutQusInput>
  }

  export type AnsQusUncheckedUpdateOneWithoutQusNestedInput = {
    create?: XOR<AnsQusCreateWithoutQusInput, AnsQusUncheckedCreateWithoutQusInput>
    connectOrCreate?: AnsQusCreateOrConnectWithoutQusInput
    upsert?: AnsQusUpsertWithoutQusInput
    disconnect?: AnsQusWhereInput | boolean
    delete?: AnsQusWhereInput | boolean
    connect?: AnsQusWhereUniqueInput
    update?: XOR<XOR<AnsQusUpdateToOneWithWhereWithoutQusInput, AnsQusUpdateWithoutQusInput>, AnsQusUncheckedUpdateWithoutQusInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EarningCreateWithoutUserInput = {
    id?: string
    earning_ammount?: number | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type EarningUncheckedCreateWithoutUserInput = {
    id?: string
    earning_ammount?: number | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type EarningCreateOrConnectWithoutUserInput = {
    where: EarningWhereUniqueInput
    create: XOR<EarningCreateWithoutUserInput, EarningUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateWithoutUserInput = {
    id?: string
    type: string
    number: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    number: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type ResultCreateWithoutUserInput = {
    id?: string
    solve: number
    wrong: number
    subject: number
    faster_ans: string
    ans_qus_list?: AnsQusCreateNestedManyWithoutResultInput
  }

  export type ResultUncheckedCreateWithoutUserInput = {
    id?: string
    solve: number
    wrong: number
    subject: number
    faster_ans: string
    ans_qus_list?: AnsQusUncheckedCreateNestedManyWithoutResultInput
  }

  export type ResultCreateOrConnectWithoutUserInput = {
    where: ResultWhereUniqueInput
    create: XOR<ResultCreateWithoutUserInput, ResultUncheckedCreateWithoutUserInput>
  }

  export type ReferListCreateWithoutUserInput = {
    id?: string
    refer: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ReferListUncheckedCreateWithoutUserInput = {
    id?: string
    refer: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ReferListCreateOrConnectWithoutUserInput = {
    where: ReferListWhereUniqueInput
    create: XOR<ReferListCreateWithoutUserInput, ReferListUncheckedCreateWithoutUserInput>
  }

  export type EarningUpsertWithoutUserInput = {
    update: XOR<EarningUpdateWithoutUserInput, EarningUncheckedUpdateWithoutUserInput>
    create: XOR<EarningCreateWithoutUserInput, EarningUncheckedCreateWithoutUserInput>
    where?: EarningWhereInput
  }

  export type EarningUpdateToOneWithWhereWithoutUserInput = {
    where?: EarningWhereInput
    data: XOR<EarningUpdateWithoutUserInput, EarningUncheckedUpdateWithoutUserInput>
  }

  export type EarningUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    earning_ammount?: NullableFloatFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EarningUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    earning_ammount?: NullableFloatFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpsertWithoutUserInput = {
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutUserInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultUpsertWithoutUserInput = {
    update: XOR<ResultUpdateWithoutUserInput, ResultUncheckedUpdateWithoutUserInput>
    create: XOR<ResultCreateWithoutUserInput, ResultUncheckedCreateWithoutUserInput>
    where?: ResultWhereInput
  }

  export type ResultUpdateToOneWithWhereWithoutUserInput = {
    where?: ResultWhereInput
    data: XOR<ResultUpdateWithoutUserInput, ResultUncheckedUpdateWithoutUserInput>
  }

  export type ResultUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    solve?: IntFieldUpdateOperationsInput | number
    wrong?: IntFieldUpdateOperationsInput | number
    subject?: IntFieldUpdateOperationsInput | number
    faster_ans?: StringFieldUpdateOperationsInput | string
    ans_qus_list?: AnsQusUpdateManyWithoutResultNestedInput
  }

  export type ResultUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    solve?: IntFieldUpdateOperationsInput | number
    wrong?: IntFieldUpdateOperationsInput | number
    subject?: IntFieldUpdateOperationsInput | number
    faster_ans?: StringFieldUpdateOperationsInput | string
    ans_qus_list?: AnsQusUncheckedUpdateManyWithoutResultNestedInput
  }

  export type ReferListUpsertWithoutUserInput = {
    update: XOR<ReferListUpdateWithoutUserInput, ReferListUncheckedUpdateWithoutUserInput>
    create: XOR<ReferListCreateWithoutUserInput, ReferListUncheckedCreateWithoutUserInput>
    where?: ReferListWhereInput
  }

  export type ReferListUpdateToOneWithWhereWithoutUserInput = {
    where?: ReferListWhereInput
    data: XOR<ReferListUpdateWithoutUserInput, ReferListUncheckedUpdateWithoutUserInput>
  }

  export type ReferListUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refer?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferListUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refer?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutReferListInput = {
    id?: string
    name?: string | null
    picture?: string | null
    select_category?: string | null
    own_refer_code?: string | null
    refer_contain?: string | null
    email: string
    api_auth_key: string
    createAt?: Date | string
    updateAt?: Date | string
    earning: EarningCreateNestedOneWithoutUserInput
    payment: PaymentCreateNestedOneWithoutUserInput
    result: ResultCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReferListInput = {
    id?: string
    name?: string | null
    picture?: string | null
    select_category?: string | null
    own_refer_code?: string | null
    refer_contain?: string | null
    earningId: string
    resultId: string
    paymentId: string
    email: string
    api_auth_key: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserCreateOrConnectWithoutReferListInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferListInput, UserUncheckedCreateWithoutReferListInput>
  }

  export type UserCreateManyReferListInputEnvelope = {
    data: UserCreateManyReferListInput | UserCreateManyReferListInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutReferListInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutReferListInput, UserUncheckedUpdateWithoutReferListInput>
    create: XOR<UserCreateWithoutReferListInput, UserUncheckedCreateWithoutReferListInput>
  }

  export type UserUpdateWithWhereUniqueWithoutReferListInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutReferListInput, UserUncheckedUpdateWithoutReferListInput>
  }

  export type UserUpdateManyWithWhereWithoutReferListInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutReferListInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    picture?: StringNullableFilter<"User"> | string | null
    select_category?: StringNullableFilter<"User"> | string | null
    own_refer_code?: StringNullableFilter<"User"> | string | null
    refer_contain?: StringNullableFilter<"User"> | string | null
    referListId?: StringNullableFilter<"User"> | string | null
    earningId?: StringFilter<"User"> | string
    resultId?: StringFilter<"User"> | string
    paymentId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    api_auth_key?: StringFilter<"User"> | string
    createAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserCreateWithoutResultInput = {
    id?: string
    name?: string | null
    picture?: string | null
    select_category?: string | null
    own_refer_code?: string | null
    refer_contain?: string | null
    email: string
    api_auth_key: string
    createAt?: Date | string
    updateAt?: Date | string
    earning: EarningCreateNestedOneWithoutUserInput
    payment: PaymentCreateNestedOneWithoutUserInput
    ReferList?: ReferListCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutResultInput = {
    id?: string
    name?: string | null
    picture?: string | null
    select_category?: string | null
    own_refer_code?: string | null
    refer_contain?: string | null
    referListId?: string | null
    earningId: string
    paymentId: string
    email: string
    api_auth_key: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserCreateOrConnectWithoutResultInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResultInput, UserUncheckedCreateWithoutResultInput>
  }

  export type UserCreateManyResultInputEnvelope = {
    data: UserCreateManyResultInput | UserCreateManyResultInput[]
    skipDuplicates?: boolean
  }

  export type AnsQusCreateWithoutResultInput = {
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    qus: QuestionCreateNestedOneWithoutAnsQusInput
  }

  export type AnsQusUncheckedCreateWithoutResultInput = {
    id?: string
    questionId: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type AnsQusCreateOrConnectWithoutResultInput = {
    where: AnsQusWhereUniqueInput
    create: XOR<AnsQusCreateWithoutResultInput, AnsQusUncheckedCreateWithoutResultInput>
  }

  export type AnsQusCreateManyResultInputEnvelope = {
    data: AnsQusCreateManyResultInput | AnsQusCreateManyResultInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutResultInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutResultInput, UserUncheckedUpdateWithoutResultInput>
    create: XOR<UserCreateWithoutResultInput, UserUncheckedCreateWithoutResultInput>
  }

  export type UserUpdateWithWhereUniqueWithoutResultInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutResultInput, UserUncheckedUpdateWithoutResultInput>
  }

  export type UserUpdateManyWithWhereWithoutResultInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutResultInput>
  }

  export type AnsQusUpsertWithWhereUniqueWithoutResultInput = {
    where: AnsQusWhereUniqueInput
    update: XOR<AnsQusUpdateWithoutResultInput, AnsQusUncheckedUpdateWithoutResultInput>
    create: XOR<AnsQusCreateWithoutResultInput, AnsQusUncheckedCreateWithoutResultInput>
  }

  export type AnsQusUpdateWithWhereUniqueWithoutResultInput = {
    where: AnsQusWhereUniqueInput
    data: XOR<AnsQusUpdateWithoutResultInput, AnsQusUncheckedUpdateWithoutResultInput>
  }

  export type AnsQusUpdateManyWithWhereWithoutResultInput = {
    where: AnsQusScalarWhereInput
    data: XOR<AnsQusUpdateManyMutationInput, AnsQusUncheckedUpdateManyWithoutResultInput>
  }

  export type AnsQusScalarWhereInput = {
    AND?: AnsQusScalarWhereInput | AnsQusScalarWhereInput[]
    OR?: AnsQusScalarWhereInput[]
    NOT?: AnsQusScalarWhereInput | AnsQusScalarWhereInput[]
    id?: StringFilter<"AnsQus"> | string
    questionId?: StringFilter<"AnsQus"> | string
    resultId?: StringNullableFilter<"AnsQus"> | string | null
    createAt?: DateTimeFilter<"AnsQus"> | Date | string
    updateAt?: DateTimeFilter<"AnsQus"> | Date | string
  }

  export type QuestionCreateWithoutAnsQusInput = {
    id?: string
    name: string
    option?: QuestionCreateoptionInput | string[]
    ans: string
    createAt?: Date | string
    updateAt?: Date | string
    sub_category: SubCategoryCreateNestedOneWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutAnsQusInput = {
    id?: string
    name: string
    option?: QuestionCreateoptionInput | string[]
    ans: string
    subCategoryId: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type QuestionCreateOrConnectWithoutAnsQusInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnsQusInput, QuestionUncheckedCreateWithoutAnsQusInput>
  }

  export type ResultCreateWithoutAns_qus_listInput = {
    id?: string
    solve: number
    wrong: number
    subject: number
    faster_ans: string
    User?: UserCreateNestedManyWithoutResultInput
  }

  export type ResultUncheckedCreateWithoutAns_qus_listInput = {
    id?: string
    solve: number
    wrong: number
    subject: number
    faster_ans: string
    User?: UserUncheckedCreateNestedManyWithoutResultInput
  }

  export type ResultCreateOrConnectWithoutAns_qus_listInput = {
    where: ResultWhereUniqueInput
    create: XOR<ResultCreateWithoutAns_qus_listInput, ResultUncheckedCreateWithoutAns_qus_listInput>
  }

  export type QuestionUpsertWithoutAnsQusInput = {
    update: XOR<QuestionUpdateWithoutAnsQusInput, QuestionUncheckedUpdateWithoutAnsQusInput>
    create: XOR<QuestionCreateWithoutAnsQusInput, QuestionUncheckedCreateWithoutAnsQusInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAnsQusInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAnsQusInput, QuestionUncheckedUpdateWithoutAnsQusInput>
  }

  export type QuestionUpdateWithoutAnsQusInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    option?: QuestionUpdateoptionInput | string[]
    ans?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sub_category?: SubCategoryUpdateOneRequiredWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAnsQusInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    option?: QuestionUpdateoptionInput | string[]
    ans?: StringFieldUpdateOperationsInput | string
    subCategoryId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultUpsertWithoutAns_qus_listInput = {
    update: XOR<ResultUpdateWithoutAns_qus_listInput, ResultUncheckedUpdateWithoutAns_qus_listInput>
    create: XOR<ResultCreateWithoutAns_qus_listInput, ResultUncheckedCreateWithoutAns_qus_listInput>
    where?: ResultWhereInput
  }

  export type ResultUpdateToOneWithWhereWithoutAns_qus_listInput = {
    where?: ResultWhereInput
    data: XOR<ResultUpdateWithoutAns_qus_listInput, ResultUncheckedUpdateWithoutAns_qus_listInput>
  }

  export type ResultUpdateWithoutAns_qus_listInput = {
    id?: StringFieldUpdateOperationsInput | string
    solve?: IntFieldUpdateOperationsInput | number
    wrong?: IntFieldUpdateOperationsInput | number
    subject?: IntFieldUpdateOperationsInput | number
    faster_ans?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateManyWithoutResultNestedInput
  }

  export type ResultUncheckedUpdateWithoutAns_qus_listInput = {
    id?: StringFieldUpdateOperationsInput | string
    solve?: IntFieldUpdateOperationsInput | number
    wrong?: IntFieldUpdateOperationsInput | number
    subject?: IntFieldUpdateOperationsInput | number
    faster_ans?: StringFieldUpdateOperationsInput | string
    User?: UserUncheckedUpdateManyWithoutResultNestedInput
  }

  export type UserCreateWithoutPaymentInput = {
    id?: string
    name?: string | null
    picture?: string | null
    select_category?: string | null
    own_refer_code?: string | null
    refer_contain?: string | null
    email: string
    api_auth_key: string
    createAt?: Date | string
    updateAt?: Date | string
    earning: EarningCreateNestedOneWithoutUserInput
    result: ResultCreateNestedOneWithoutUserInput
    ReferList?: ReferListCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentInput = {
    id?: string
    name?: string | null
    picture?: string | null
    select_category?: string | null
    own_refer_code?: string | null
    refer_contain?: string | null
    referListId?: string | null
    earningId: string
    resultId: string
    email: string
    api_auth_key: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserCreateOrConnectWithoutPaymentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
  }

  export type UserCreateManyPaymentInputEnvelope = {
    data: UserCreateManyPaymentInput | UserCreateManyPaymentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutPaymentInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutPaymentInput, UserUncheckedUpdateWithoutPaymentInput>
    create: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
  }

  export type UserUpdateWithWhereUniqueWithoutPaymentInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutPaymentInput, UserUncheckedUpdateWithoutPaymentInput>
  }

  export type UserUpdateManyWithWhereWithoutPaymentInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutPaymentInput>
  }

  export type UserCreateWithoutEarningInput = {
    id?: string
    name?: string | null
    picture?: string | null
    select_category?: string | null
    own_refer_code?: string | null
    refer_contain?: string | null
    email: string
    api_auth_key: string
    createAt?: Date | string
    updateAt?: Date | string
    payment: PaymentCreateNestedOneWithoutUserInput
    result: ResultCreateNestedOneWithoutUserInput
    ReferList?: ReferListCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEarningInput = {
    id?: string
    name?: string | null
    picture?: string | null
    select_category?: string | null
    own_refer_code?: string | null
    refer_contain?: string | null
    referListId?: string | null
    resultId: string
    paymentId: string
    email: string
    api_auth_key: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserCreateOrConnectWithoutEarningInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEarningInput, UserUncheckedCreateWithoutEarningInput>
  }

  export type UserCreateManyEarningInputEnvelope = {
    data: UserCreateManyEarningInput | UserCreateManyEarningInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutEarningInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutEarningInput, UserUncheckedUpdateWithoutEarningInput>
    create: XOR<UserCreateWithoutEarningInput, UserUncheckedCreateWithoutEarningInput>
  }

  export type UserUpdateWithWhereUniqueWithoutEarningInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutEarningInput, UserUncheckedUpdateWithoutEarningInput>
  }

  export type UserUpdateManyWithWhereWithoutEarningInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutEarningInput>
  }

  export type SubCategoryCreateWithoutCategoryInput = {
    id?: string
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    Question?: QuestionCreateNestedManyWithoutSub_categoryInput
  }

  export type SubCategoryUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    Question?: QuestionUncheckedCreateNestedManyWithoutSub_categoryInput
  }

  export type SubCategoryCreateOrConnectWithoutCategoryInput = {
    where: SubCategoryWhereUniqueInput
    create: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type SubCategoryCreateManyCategoryInputEnvelope = {
    data: SubCategoryCreateManyCategoryInput | SubCategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type SubCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: SubCategoryWhereUniqueInput
    update: XOR<SubCategoryUpdateWithoutCategoryInput, SubCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type SubCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SubCategoryWhereUniqueInput
    data: XOR<SubCategoryUpdateWithoutCategoryInput, SubCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type SubCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: SubCategoryScalarWhereInput
    data: XOR<SubCategoryUpdateManyMutationInput, SubCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type SubCategoryScalarWhereInput = {
    AND?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
    OR?: SubCategoryScalarWhereInput[]
    NOT?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
    id?: StringFilter<"SubCategory"> | string
    name?: StringFilter<"SubCategory"> | string
    createAt?: DateTimeFilter<"SubCategory"> | Date | string
    updateAt?: DateTimeFilter<"SubCategory"> | Date | string
    categoryId?: StringFilter<"SubCategory"> | string
  }

  export type CategoryCreateWithoutSubCategoryInput = {
    id?: string
    name: string
    description: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutSubCategoryInput = {
    id?: string
    name: string
    description: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutSubCategoryInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutSubCategoryInput, CategoryUncheckedCreateWithoutSubCategoryInput>
  }

  export type QuestionCreateWithoutSub_categoryInput = {
    id?: string
    name: string
    option?: QuestionCreateoptionInput | string[]
    ans: string
    createAt?: Date | string
    updateAt?: Date | string
    AnsQus?: AnsQusCreateNestedOneWithoutQusInput
  }

  export type QuestionUncheckedCreateWithoutSub_categoryInput = {
    id?: string
    name: string
    option?: QuestionCreateoptionInput | string[]
    ans: string
    createAt?: Date | string
    updateAt?: Date | string
    AnsQus?: AnsQusUncheckedCreateNestedOneWithoutQusInput
  }

  export type QuestionCreateOrConnectWithoutSub_categoryInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutSub_categoryInput, QuestionUncheckedCreateWithoutSub_categoryInput>
  }

  export type QuestionCreateManySub_categoryInputEnvelope = {
    data: QuestionCreateManySub_categoryInput | QuestionCreateManySub_categoryInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutSubCategoryInput = {
    update: XOR<CategoryUpdateWithoutSubCategoryInput, CategoryUncheckedUpdateWithoutSubCategoryInput>
    create: XOR<CategoryCreateWithoutSubCategoryInput, CategoryUncheckedCreateWithoutSubCategoryInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutSubCategoryInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutSubCategoryInput, CategoryUncheckedUpdateWithoutSubCategoryInput>
  }

  export type CategoryUpdateWithoutSubCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutSubCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUpsertWithWhereUniqueWithoutSub_categoryInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutSub_categoryInput, QuestionUncheckedUpdateWithoutSub_categoryInput>
    create: XOR<QuestionCreateWithoutSub_categoryInput, QuestionUncheckedCreateWithoutSub_categoryInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutSub_categoryInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutSub_categoryInput, QuestionUncheckedUpdateWithoutSub_categoryInput>
  }

  export type QuestionUpdateManyWithWhereWithoutSub_categoryInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutSub_categoryInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    name?: StringFilter<"Question"> | string
    option?: StringNullableListFilter<"Question">
    ans?: StringFilter<"Question"> | string
    subCategoryId?: StringFilter<"Question"> | string
    createAt?: DateTimeFilter<"Question"> | Date | string
    updateAt?: DateTimeFilter<"Question"> | Date | string
  }

  export type SubCategoryCreateWithoutQuestionInput = {
    id?: string
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    category: CategoryCreateNestedOneWithoutSubCategoryInput
  }

  export type SubCategoryUncheckedCreateWithoutQuestionInput = {
    id?: string
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    categoryId: string
  }

  export type SubCategoryCreateOrConnectWithoutQuestionInput = {
    where: SubCategoryWhereUniqueInput
    create: XOR<SubCategoryCreateWithoutQuestionInput, SubCategoryUncheckedCreateWithoutQuestionInput>
  }

  export type AnsQusCreateWithoutQusInput = {
    id?: string
    createAt?: Date | string
    updateAt?: Date | string
    Result?: ResultCreateNestedOneWithoutAns_qus_listInput
  }

  export type AnsQusUncheckedCreateWithoutQusInput = {
    id?: string
    resultId?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type AnsQusCreateOrConnectWithoutQusInput = {
    where: AnsQusWhereUniqueInput
    create: XOR<AnsQusCreateWithoutQusInput, AnsQusUncheckedCreateWithoutQusInput>
  }

  export type SubCategoryUpsertWithoutQuestionInput = {
    update: XOR<SubCategoryUpdateWithoutQuestionInput, SubCategoryUncheckedUpdateWithoutQuestionInput>
    create: XOR<SubCategoryCreateWithoutQuestionInput, SubCategoryUncheckedCreateWithoutQuestionInput>
    where?: SubCategoryWhereInput
  }

  export type SubCategoryUpdateToOneWithWhereWithoutQuestionInput = {
    where?: SubCategoryWhereInput
    data: XOR<SubCategoryUpdateWithoutQuestionInput, SubCategoryUncheckedUpdateWithoutQuestionInput>
  }

  export type SubCategoryUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutSubCategoryNestedInput
  }

  export type SubCategoryUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type AnsQusUpsertWithoutQusInput = {
    update: XOR<AnsQusUpdateWithoutQusInput, AnsQusUncheckedUpdateWithoutQusInput>
    create: XOR<AnsQusCreateWithoutQusInput, AnsQusUncheckedCreateWithoutQusInput>
    where?: AnsQusWhereInput
  }

  export type AnsQusUpdateToOneWithWhereWithoutQusInput = {
    where?: AnsQusWhereInput
    data: XOR<AnsQusUpdateWithoutQusInput, AnsQusUncheckedUpdateWithoutQusInput>
  }

  export type AnsQusUpdateWithoutQusInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Result?: ResultUpdateOneWithoutAns_qus_listNestedInput
  }

  export type AnsQusUncheckedUpdateWithoutQusInput = {
    id?: StringFieldUpdateOperationsInput | string
    resultId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyReferListInput = {
    id?: string
    name?: string | null
    picture?: string | null
    select_category?: string | null
    own_refer_code?: string | null
    refer_contain?: string | null
    earningId: string
    resultId: string
    paymentId: string
    email: string
    api_auth_key: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserUpdateWithoutReferListInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    select_category?: NullableStringFieldUpdateOperationsInput | string | null
    own_refer_code?: NullableStringFieldUpdateOperationsInput | string | null
    refer_contain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    api_auth_key?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    earning?: EarningUpdateOneRequiredWithoutUserNestedInput
    payment?: PaymentUpdateOneRequiredWithoutUserNestedInput
    result?: ResultUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReferListInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    select_category?: NullableStringFieldUpdateOperationsInput | string | null
    own_refer_code?: NullableStringFieldUpdateOperationsInput | string | null
    refer_contain?: NullableStringFieldUpdateOperationsInput | string | null
    earningId?: StringFieldUpdateOperationsInput | string
    resultId?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    api_auth_key?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutReferListInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    select_category?: NullableStringFieldUpdateOperationsInput | string | null
    own_refer_code?: NullableStringFieldUpdateOperationsInput | string | null
    refer_contain?: NullableStringFieldUpdateOperationsInput | string | null
    earningId?: StringFieldUpdateOperationsInput | string
    resultId?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    api_auth_key?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyResultInput = {
    id?: string
    name?: string | null
    picture?: string | null
    select_category?: string | null
    own_refer_code?: string | null
    refer_contain?: string | null
    referListId?: string | null
    earningId: string
    paymentId: string
    email: string
    api_auth_key: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type AnsQusCreateManyResultInput = {
    id?: string
    questionId: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserUpdateWithoutResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    select_category?: NullableStringFieldUpdateOperationsInput | string | null
    own_refer_code?: NullableStringFieldUpdateOperationsInput | string | null
    refer_contain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    api_auth_key?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    earning?: EarningUpdateOneRequiredWithoutUserNestedInput
    payment?: PaymentUpdateOneRequiredWithoutUserNestedInput
    ReferList?: ReferListUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    select_category?: NullableStringFieldUpdateOperationsInput | string | null
    own_refer_code?: NullableStringFieldUpdateOperationsInput | string | null
    refer_contain?: NullableStringFieldUpdateOperationsInput | string | null
    referListId?: NullableStringFieldUpdateOperationsInput | string | null
    earningId?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    api_auth_key?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    select_category?: NullableStringFieldUpdateOperationsInput | string | null
    own_refer_code?: NullableStringFieldUpdateOperationsInput | string | null
    refer_contain?: NullableStringFieldUpdateOperationsInput | string | null
    referListId?: NullableStringFieldUpdateOperationsInput | string | null
    earningId?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    api_auth_key?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnsQusUpdateWithoutResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qus?: QuestionUpdateOneRequiredWithoutAnsQusNestedInput
  }

  export type AnsQusUncheckedUpdateWithoutResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnsQusUncheckedUpdateManyWithoutResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyPaymentInput = {
    id?: string
    name?: string | null
    picture?: string | null
    select_category?: string | null
    own_refer_code?: string | null
    refer_contain?: string | null
    referListId?: string | null
    earningId: string
    resultId: string
    email: string
    api_auth_key: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    select_category?: NullableStringFieldUpdateOperationsInput | string | null
    own_refer_code?: NullableStringFieldUpdateOperationsInput | string | null
    refer_contain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    api_auth_key?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    earning?: EarningUpdateOneRequiredWithoutUserNestedInput
    result?: ResultUpdateOneRequiredWithoutUserNestedInput
    ReferList?: ReferListUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    select_category?: NullableStringFieldUpdateOperationsInput | string | null
    own_refer_code?: NullableStringFieldUpdateOperationsInput | string | null
    refer_contain?: NullableStringFieldUpdateOperationsInput | string | null
    referListId?: NullableStringFieldUpdateOperationsInput | string | null
    earningId?: StringFieldUpdateOperationsInput | string
    resultId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    api_auth_key?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    select_category?: NullableStringFieldUpdateOperationsInput | string | null
    own_refer_code?: NullableStringFieldUpdateOperationsInput | string | null
    refer_contain?: NullableStringFieldUpdateOperationsInput | string | null
    referListId?: NullableStringFieldUpdateOperationsInput | string | null
    earningId?: StringFieldUpdateOperationsInput | string
    resultId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    api_auth_key?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyEarningInput = {
    id?: string
    name?: string | null
    picture?: string | null
    select_category?: string | null
    own_refer_code?: string | null
    refer_contain?: string | null
    referListId?: string | null
    resultId: string
    paymentId: string
    email: string
    api_auth_key: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserUpdateWithoutEarningInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    select_category?: NullableStringFieldUpdateOperationsInput | string | null
    own_refer_code?: NullableStringFieldUpdateOperationsInput | string | null
    refer_contain?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    api_auth_key?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUpdateOneRequiredWithoutUserNestedInput
    result?: ResultUpdateOneRequiredWithoutUserNestedInput
    ReferList?: ReferListUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEarningInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    select_category?: NullableStringFieldUpdateOperationsInput | string | null
    own_refer_code?: NullableStringFieldUpdateOperationsInput | string | null
    refer_contain?: NullableStringFieldUpdateOperationsInput | string | null
    referListId?: NullableStringFieldUpdateOperationsInput | string | null
    resultId?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    api_auth_key?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutEarningInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    select_category?: NullableStringFieldUpdateOperationsInput | string | null
    own_refer_code?: NullableStringFieldUpdateOperationsInput | string | null
    refer_contain?: NullableStringFieldUpdateOperationsInput | string | null
    referListId?: NullableStringFieldUpdateOperationsInput | string | null
    resultId?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    api_auth_key?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoryCreateManyCategoryInput = {
    id?: string
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type SubCategoryUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Question?: QuestionUpdateManyWithoutSub_categoryNestedInput
  }

  export type SubCategoryUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Question?: QuestionUncheckedUpdateManyWithoutSub_categoryNestedInput
  }

  export type SubCategoryUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManySub_categoryInput = {
    id?: string
    name: string
    option?: QuestionCreateoptionInput | string[]
    ans: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type QuestionUpdateWithoutSub_categoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    option?: QuestionUpdateoptionInput | string[]
    ans?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AnsQus?: AnsQusUpdateOneWithoutQusNestedInput
  }

  export type QuestionUncheckedUpdateWithoutSub_categoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    option?: QuestionUpdateoptionInput | string[]
    ans?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AnsQus?: AnsQusUncheckedUpdateOneWithoutQusNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutSub_categoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    option?: QuestionUpdateoptionInput | string[]
    ans?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ReferListCountOutputTypeDefaultArgs instead
     */
    export type ReferListCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ReferListCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResultCountOutputTypeDefaultArgs instead
     */
    export type ResultCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ResultCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentCountOutputTypeDefaultArgs instead
     */
    export type PaymentCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = PaymentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EarningCountOutputTypeDefaultArgs instead
     */
    export type EarningCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = EarningCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubCategoryCountOutputTypeDefaultArgs instead
     */
    export type SubCategoryCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = SubCategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReferListDefaultArgs instead
     */
    export type ReferListArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ReferListDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResultDefaultArgs instead
     */
    export type ResultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ResultDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AnsQusDefaultArgs instead
     */
    export type AnsQusArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = AnsQusDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentDefaultArgs instead
     */
    export type PaymentArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = PaymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EarningDefaultArgs instead
     */
    export type EarningArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = EarningDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubCategoryDefaultArgs instead
     */
    export type SubCategoryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = SubCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuestionDefaultArgs instead
     */
    export type QuestionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = QuestionDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}