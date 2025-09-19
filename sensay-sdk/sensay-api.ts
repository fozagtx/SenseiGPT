/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * The language of the knowledge base entry content. Uses ISO 639-1 language codes for language-specific processing and retrieval.
 * @example "en"
 */
export enum KnowledgeBaseLanguage {
  Ab = "ab",
  Aa = "aa",
  Af = "af",
  Ak = "ak",
  Sq = "sq",
  Am = "am",
  Ar = "ar",
  An = "an",
  Hy = "hy",
  As = "as",
  Av = "av",
  Ae = "ae",
  Ay = "ay",
  Az = "az",
  Ba = "ba",
  Bm = "bm",
  Eu = "eu",
  Be = "be",
  Bn = "bn",
  Bh = "bh",
  Bi = "bi",
  Bs = "bs",
  Br = "br",
  Bg = "bg",
  My = "my",
  Ca = "ca",
  Ch = "ch",
  Ce = "ce",
  Ny = "ny",
  Zh = "zh",
  Cu = "cu",
  Cv = "cv",
  Kw = "kw",
  Co = "co",
  Cr = "cr",
  Hr = "hr",
  Cs = "cs",
  Da = "da",
  Dv = "dv",
  Nl = "nl",
  Dz = "dz",
  En = "en",
  Eo = "eo",
  Et = "et",
  Ee = "ee",
  Fo = "fo",
  Fj = "fj",
  Fi = "fi",
  Fr = "fr",
  Ff = "ff",
  Gl = "gl",
  Ka = "ka",
  De = "de",
  El = "el",
  Kl = "kl",
  Gn = "gn",
  Gu = "gu",
  Ht = "ht",
  Ha = "ha",
  He = "he",
  Hz = "hz",
  Hi = "hi",
  Ho = "ho",
  Hu = "hu",
  Is = "is",
  Io = "io",
  Ig = "ig",
  Id = "id",
  Ia = "ia",
  Ie = "ie",
  Iu = "iu",
  Ik = "ik",
  Ga = "ga",
  It = "it",
  Ja = "ja",
  Jv = "jv",
  Kn = "kn",
  Kr = "kr",
  Ks = "ks",
  Kk = "kk",
  Km = "km",
  Ki = "ki",
  Rw = "rw",
  Ky = "ky",
  Kv = "kv",
  Kg = "kg",
  Ko = "ko",
  Ku = "ku",
  Kj = "kj",
  La = "la",
  Lb = "lb",
  Lg = "lg",
  Li = "li",
  Ln = "ln",
  Lo = "lo",
  Lt = "lt",
  Lu = "lu",
  Lv = "lv",
  Gv = "gv",
  Mk = "mk",
  Mg = "mg",
  Ms = "ms",
  Ml = "ml",
  Mt = "mt",
  Mi = "mi",
  Mr = "mr",
  Mh = "mh",
  Mn = "mn",
  Na = "na",
  Nv = "nv",
  Nd = "nd",
  Ne = "ne",
  Ng = "ng",
  Nb = "nb",
  Nn = "nn",
  No = "no",
  Ii = "ii",
  Nr = "nr",
  Oc = "oc",
  Oj = "oj",
  Om = "om",
  Or = "or",
  Os = "os",
  Pa = "pa",
  Pi = "pi",
  Fa = "fa",
  Pl = "pl",
  Ps = "ps",
  Pt = "pt",
  Qu = "qu",
  Rm = "rm",
  Rn = "rn",
  Ro = "ro",
  Ru = "ru",
  Sa = "sa",
  Sc = "sc",
  Sd = "sd",
  Se = "se",
  Sm = "sm",
  Sg = "sg",
  Sr = "sr",
  Gd = "gd",
  Sn = "sn",
  Si = "si",
  Sk = "sk",
  Sl = "sl",
  So = "so",
  St = "st",
  Es = "es",
  Su = "su",
  Sw = "sw",
  Ss = "ss",
  Sv = "sv",
  Ta = "ta",
  Te = "te",
  Tg = "tg",
  Th = "th",
  Ti = "ti",
  Bo = "bo",
  Tk = "tk",
  Tl = "tl",
  Tn = "tn",
  To = "to",
  Tr = "tr",
  Ts = "ts",
  Tt = "tt",
  Tw = "tw",
  Ty = "ty",
  Ug = "ug",
  Uk = "uk",
  Ur = "ur",
  Uz = "uz",
  Ve = "ve",
  Vi = "vi",
  Vo = "vo",
  Wa = "wa",
  Cy = "cy",
  Wo = "wo",
  Xh = "xh",
  Yi = "yi",
  Yo = "yo",
  Za = "za",
  Zu = "zu",
}

/**
 * The replica unique identifier (UUID)
 * @format uuid
 * @example "03db5651-cb61-4bdf-9ef0-89561f7c9c53"
 */
export type ReplicaUUIDParameter = string;

/**
 * The unique identifier of the knowledge base entry
 * @example 12345
 */
export type TrainingIDParameter = number | null;

/** @example {"type":"INSERT","table":"objects","record":{"id":"8f4611db-c346-4959-b173-681156612bfd","name":"2ba8848c-1639-563a-a559-959fa25c70bd/2","owner":null,"version":"5dac074f-fc41-420d-ab03-5ab04ef42961","metadata":{"eTag":"\"f1cd0725ddb77f5a67a508cc48c8e554\"","size":16085011,"mimetype":"application/pdf","cacheControl":"no-cache","lastModified":"2025-02-27T15:58:44.284Z","contentLength":16085011,"httpStatusCode":200},"owner_id":null,"bucket_id":"replica_files","created_at":"2025-02-27T15:58:44.501551+00:00","updated_at":"2025-02-27T15:58:44.501551+00:00","path_tokens":["2ba8848c-1639-563a-a559-959fa25c70bd","2"],"user_metadata":{},"last_accessed_at":"2025-02-27T15:58:44.501551+00:00"},"schema":"storage","old_record":null} */
export interface WebhookRequest {
  type: string;
  table: string;
  schema: string;
  record: {
    id: string;
    bucket_id: string;
    path_tokens: string[];
    metadata: {
      size: number;
      mimetype: string;
      eTag: string;
    };
  };
  old_record?: any;
}

/**
 * The unique identifier of the knowledge base entry
 * @example "12345"
 */
export type KnowledgeBaseIDParameter = number;

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D, E = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = symbol | string | number;

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://api.sensay.io";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.JsonApi]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) => {
      if (input instanceof FormData) {
        return input;
      }

      return Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData());
    },
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const responseToParse = responseFormat ? response.clone() : response;
      const data = !responseFormat
        ? r
        : await responseToParse[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Sensay API
 * @version 2025-03-25
 * @baseUrl https://api.sensay.io
 *
 * You can find out more about the Sensay API in the [Sensay API Documentation](https://docs.sensay.io).
 */
export class Api<SecurityDataType> extends HttpClient<SecurityDataType> {
  v1 = {
    /**
     * @description List replicas with pagination with optional filtering. Only Replicas that are public or belong to the authenticated user are returned.
     *
     * @tags Replicas
     * @name ReplicasList
     * @summary List replicas
     * @request GET:/v1/replicas
     * @secure
     */
    replicasList: (
      query?: {
        /** Filters by the owner UUID of the Replicas */
        owner_uuid?: string;
        /** The replica owner ID. */
        ownerID?: string;
        /**
         * Pagination: The page number to return
         * @exclusiveMin 0
         */
        page?: number;
        /**
         * Pagination: The page index to return
         * @deprecated
         * @exclusiveMin 0
         * @default 1
         */
        page_index?: number;
        /**
         * Pagination: The number of items per page
         * @exclusiveMin 0
         * @default 24
         */
        page_size?: number;
        /** Filters by the replica's slug */
        slug?: string;
        /** Search: by name of Replica, sorted in ascending order */
        search?: string;
        /** Filters by tags associated to Replicas */
        tags?: (
          | "AI"
          | "Academic"
          | "Arts"
          | "Blockchain"
          | "Business"
          | "Celebrity"
          | "Charity"
          | "Developer"
          | "Educator"
          | "Europe"
          | "Fashion"
          | "Finance"
          | "Food"
          | "Health & Fitness"
          | "History"
          | "Italian"
          | "Kids"
          | "Language"
          | "Law"
          | "Leadership"
          | "Lifestyle"
          | "Literature"
          | "Love"
          | "Military"
          | "Modelling"
          | "Motivation"
          | "Movies"
          | "Music"
          | "North America"
          | "Philosophy"
          | "Politics"
          | "Religion"
          | "Science"
          | "Self-Help"
          | "Sensay"
          | "Sports"
          | "Technology"
          | "Web"
          | "Wisdom"
          | "blockchain"
          | "engage2earn"
          | "female"
          | "investment"
          | "male"
          | "meme"
          | "miniapp"
          | "telegram"
          | "web3"
        )[];
        /**
         * Sorts by name or popularity of Replicas in ascending order
         * @default "name"
         */
        sort?: "name" | "popularity";
        /** Filters by integration */
        integration?: "telegram" | "discord";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Indicates the status of the request */
          success: boolean;
          type: string;
          /**
           * Array of replica items for the current page. Will be an empty array if no items exist.
           * @example [{"uuid":"123e4567-e89b-12d3-a456-426614174000","name":"Example Replica","purpose":"Replica purpose","slug":"copy","profile_image":"https://deprecated.invalid/image.png","profileImage":"https://domain.example/image.webp","short_description":"An example replica","shortDescription":"An example replica","introduction":"deprecated","greeting":"What would you like to know?","tags":["male","italian"],"created_at":"2023-10-01T12:00:00Z","owner_uuid":"123e4567-e89b-12d3-a456-426614174001","ownerID":"a-user-id","type":"character","private":false,"whitelistEmails":["example@domain.example"],"suggestedQuestions":["What is the meaning of life?"],"llm":{"model":"gpt-4o","systemMessage":"Concise, knowledgeable, empathetic and cheerful.","tools":["answerToLife"]},"voice_enabled":true,"video_enabled":true,"chat_history_count":5,"system_message":"Descriptive, energetic, friendly","elevenLabsID":"ABC123XYZ456","telegram_integration":{"token":"7701101112:DASeKD32EQLL32113-ngfVUMkyzg","service_name":"test_telegram_bot"},"discord_integration":{"token":"<DISCORD_BOT_TOKEN>","service_name":"test_discord_bot","is_active":true}}]
           */
          items: {
            /**
             * The name of the replica.
             * @maxLength 50
             * @example "John Smith"
             */
            name: string;
            /**
             * The purpose of the replica. This field is not used for training the replica.
             * @maxLength 1000
             * @example "Acts as my AI twin for answering questions about my creative work."
             */
            purpose?: string;
            /**
             * A short description of your replica. This field is not used for training the replica.
             * @maxLength 50
             * @example "Accountant from Brooklyn who loves sports."
             */
            shortDescription: string;
            /**
             * The first thing your replica will say when you start a conversation with them.
             * @maxLength 600
             * @example "What would you like to know?"
             */
            greeting: string;
            /**
             * The replica type.
             * `individual`: A replica of yourself.
             * `character`: A replica of a character: can be anything you want.
             * `brand`: A replica of a business persona or organization.
             * @default "character"
             */
            type?: "individual" | "character" | "brand";
            /**
             * The replica owner ID.
             * @example "a-user-id"
             */
            ownerID: string;
            /**
             * Visibility of the replica. When set to `true`, only the owner and users on the allowlist will be able to find the replica and chat with it.
             * @default false
             */
            private?: boolean;
            /**
             * Emails of users who can use the replica when the replica is private.
             * @default []
             * @example ["user@domain.example"]
             */
            whitelistEmails?: string[];
            /**
             * The slug of the replica. Slugs can be used by API consumers to determine the URLs where replicas can be found.
             * @maxLength 50
             * @example "example-replica"
             */
            slug: string;
            /**
             * The tags associated with the replica. Tags help categorize replicas and make them easier to find.
             * @default []
             * @example ["male","italian"]
             */
            tags?: string[];
            /**
             * The URL of the profile image of the replica. The image will be downloaded, optimized and stored on our servers, so the URL in the response will be different. Supported formats: image/jpeg, image/jpg, image/pjpeg, image/png, image/bmp, image/x-windows-bmp, image/x-bmp, image/x-bitmap, image/x-ms-bmp, image/webp, image/avif
             * @format uri
             * @default "https://studio.sensay.io/assets/default-replica-profile.webp"
             * @pattern https?:\/\/[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]+\b([-a-zA-Z0-9()@:%_+.~#?&\/=]*)
             * @example "https://images.invalid/photo.jpeg"
             */
            profileImage?: string;
            /**
             * Suggested questions when starting a conversation.
             * @default []
             * @example ["What is the meaning of life?"]
             */
            suggestedQuestions?: string[];
            llm: {
              /**
               * The LLM model of the replica.
               * @default "claude-3-5-haiku-latest"
               * @example "gpt-4o"
               */
              model?:
                | "gpt-4o"
                | "claude-3-5-haiku-latest"
                | "claude-3-7-sonnet-latest"
                | "claude-4-sonnet-20250514"
                | "grok-3-latest"
                | "grok-4-latest"
                | "deepseek-chat"
                | "o3-mini"
                | "gpt-4o-mini"
                | "huggingface-eva"
                | "huggingface-dolphin-llama"
                | "asi1-mini"
                | "targon-gpt-oss-120b"
                | "gpt-5"
                | "gpt-5-mini"
                | "gpt-5-nano"
                | "gemini-2.5-flash"
                | "gemini-2.5-pro"
                | "grok-2-latest"
                | "grok-3-beta";
              /**
               * Deprecated. The system will automatically choose the best approach.
               * @deprecated
               * @default "rag-search"
               */
              memoryMode?: "prompt-caching" | "rag-search";
              /**
               * Who is your replica? How do you want it to talk, respond and act.
               * @maxLength 30000
               * @example "Concise, knowledgeable, empathetic and cheerful."
               */
              systemMessage?: string;
              /**
               * The replica's tools. Tools enable agents to interact with the world. `getTokenInfo`: Allows replica to get token information
               * @default []
               * @example ["getTokenInfo"]
               */
              tools?: (
                | "getTokenInfo"
                | "getUdaoTokenInfo"
                | "getSensayTokenInfo"
                | "getTokenInfoMEAI"
                | "answerToLife"
                | "toolhouse"
                | "brightUnionGetQuoteTool"
                | "brightUnionGetCoverablesTool"
              )[];
            };
            /**
             * Text that can be used to generate a voice preview.
             * @maxLength 400
             * @example "Hi, I'm your Sensay replica! How can I assist you today?"
             */
            voicePreviewText?: string;
            /**
             * Whether the replica conversations are accessible to customer support
             * @example true
             */
            isEveryConversationAccessibleBySupport?: boolean;
            /**
             * The replica UUID
             * @format uuid
             * @example "4830597b-f3be-42b4-9587-fa15299ccd63"
             */
            uuid: string;
            /**
             * The distilled knowledge of the replica
             * @example "This is the distilled knowledge of the replica."
             */
            distilledKnowledge?: string;
            /**
             * The URL of the profile image of the replica. Please use `profileImage` instead.
             * @deprecated
             */
            profile_image: string | null;
            /**
             * The description of the replica. Please use `shortDescription` instead.
             * @deprecated
             */
            short_description: string | null;
            /**
             * The introduction of the replica. Please use `greeting` instead.
             * @deprecated
             */
            introduction: string | null;
            /**
             * The date and time the replica was created.
             * @format date-time
             */
            created_at: string | null;
            /**
             * The UUID of the owner of the replica. Please migrate to the new User ID system and use `ownerID` instead.
             * @deprecated
             * @format uuid
             */
            owner_uuid: string | null;
            /** Whether the replica has voice support. */
            voice_enabled: boolean;
            /** Whether the replica has video support. */
            video_enabled: boolean;
            /** The total number of chat history items related to this replica, for all users of the organization. */
            chat_history_count: number | null;
            /**
             * The replica's tone, personality and behaviour, Please use `llm.systemMessage` instead.
             * @deprecated
             */
            system_message: string;
            /** The Discord integration of the replica. */
            discord_integration: {
              token: string | null;
              service_name: string | null;
              is_active: boolean | null;
            };
            /** The Telegram integration of the replica. */
            telegram_integration: {
              token: string | null;
              service_name: string | null;
            };
          }[];
          /**
           * The total number of replica items available across all pages
           * @example 100
           */
          total: number;
        },
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/replicas`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new replica.
     *
     * @tags Replicas
     * @name ReplicasCreate
     * @summary Create a replica
     * @request POST:/v1/replicas
     * @secure
     */
    replicasCreate: (
      data: {
        /**
         * The name of the replica.
         * @maxLength 50
         * @example "John Smith"
         */
        name: string;
        /**
         * The purpose of the replica. This field is not used for training the replica.
         * @maxLength 1000
         * @example "Acts as my AI twin for answering questions about my creative work."
         */
        purpose?: string;
        /**
         * A short description of your replica. This field is not used for training the replica.
         * @maxLength 50
         * @example "Accountant from Brooklyn who loves sports."
         */
        shortDescription: string;
        /**
         * The first thing your replica will say when you start a conversation with them.
         * @maxLength 600
         * @example "What would you like to know?"
         */
        greeting: string;
        /**
         * The replica type.
         * `individual`: A replica of yourself.
         * `character`: A replica of a character: can be anything you want.
         * `brand`: A replica of a business persona or organization.
         * @default "character"
         */
        type?: "individual" | "character" | "brand";
        /**
         * The replica owner ID.
         * @example "a-user-id"
         */
        ownerID: string;
        /**
         * Visibility of the replica. When set to `true`, only the owner and users on the allowlist will be able to find the replica and chat with it.
         * @default false
         */
        private?: boolean;
        /**
         * Emails of users who can use the replica when the replica is private.
         * @default []
         * @example ["user@domain.example"]
         */
        whitelistEmails?: string[];
        /**
         * The slug of the replica. Slugs can be used by API consumers to determine the URLs where replicas can be found.
         * @maxLength 50
         * @example "example-replica"
         */
        slug: string;
        /**
         * The tags associated with the replica. Tags help categorize replicas and make them easier to find.
         * @default []
         * @example ["male","italian"]
         */
        tags?: string[];
        /**
         * The URL of the profile image of the replica. The image will be downloaded, optimized and stored on our servers, so the URL in the response will be different. Supported formats: image/jpeg, image/jpg, image/pjpeg, image/png, image/bmp, image/x-windows-bmp, image/x-bmp, image/x-bitmap, image/x-ms-bmp, image/webp, image/avif
         * @format uri
         * @default "https://studio.sensay.io/assets/default-replica-profile.webp"
         * @pattern https?:\/\/[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]+\b([-a-zA-Z0-9()@:%_+.~#?&\/=]*)
         * @example "https://images.invalid/photo.jpeg"
         */
        profileImage?: string;
        /**
         * Suggested questions when starting a conversation.
         * @default []
         * @example ["What is the meaning of life?"]
         */
        suggestedQuestions?: string[];
        llm: {
          /**
           * The LLM model of the replica.
           * @default "claude-3-5-haiku-latest"
           * @example "gpt-4o"
           */
          model?:
            | "gpt-4o"
            | "claude-3-5-haiku-latest"
            | "claude-3-7-sonnet-latest"
            | "claude-4-sonnet-20250514"
            | "grok-3-latest"
            | "grok-4-latest"
            | "deepseek-chat"
            | "o3-mini"
            | "gpt-4o-mini"
            | "huggingface-eva"
            | "huggingface-dolphin-llama"
            | "asi1-mini"
            | "targon-gpt-oss-120b"
            | "gpt-5"
            | "gpt-5-mini"
            | "gpt-5-nano"
            | "gemini-2.5-flash"
            | "gemini-2.5-pro"
            | "grok-2-latest"
            | "grok-3-beta";
          /**
           * Deprecated. The system will automatically choose the best approach.
           * @deprecated
           * @default "rag-search"
           */
          memoryMode?: "prompt-caching" | "rag-search";
          /**
           * Who is your replica? How do you want it to talk, respond and act.
           * @maxLength 30000
           * @example "Concise, knowledgeable, empathetic and cheerful."
           */
          systemMessage?: string;
          /**
           * The replica's tools. Tools enable agents to interact with the world. `getTokenInfo`: Allows replica to get token information
           * @default []
           * @example ["getTokenInfo"]
           */
          tools?: (
            | "getTokenInfo"
            | "getUdaoTokenInfo"
            | "getSensayTokenInfo"
            | "getTokenInfoMEAI"
            | "answerToLife"
            | "toolhouse"
            | "brightUnionGetQuoteTool"
            | "brightUnionGetCoverablesTool"
          )[];
        };
        /**
         * Text that can be used to generate a voice preview.
         * @maxLength 400
         * @example "Hi, I'm your Sensay replica! How can I assist you today?"
         */
        voicePreviewText?: string;
        /**
         * Whether the replica conversations are accessible to customer support
         * @example true
         */
        isEveryConversationAccessibleBySupport?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * Indicates if the replica was created successfully
           * @example true
           */
          success: boolean;
          /**
           * The replica UUID
           * @format uuid
           * @example "654c2874-0b43-4d84-85fc-62ba866da1cb"
           */
          uuid: string;
        },
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/replicas`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description If you have an invitation code, you can redeem it to create an Organization and an API key associated with it.
     *
     * @tags API Keys
     * @name ApiKeysInvitesRedeemCreate
     * @summary Redeem an API key invitation
     * @request POST:/v1/api-keys/invites/{code}/redeem
     */
    apiKeysInvitesRedeemCreate: (
      code: string,
      data: {
        /** The name of the organization you want to create. */
        organizationName: string;
        /** The name of the point of contact for the API subscription. */
        name: string;
        /**
         * The email of the point of contact for the API subscription.
         * @format email
         */
        email: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          success: true;
          /** The API key you will need to use to authenticate your requests. The key cannot be retrieved again after it is created: keep it safe. */
          apiKey: string;
          /** The ID of the organization you have just created. You will need this ID to communicate with our team. Keep it safe. */
          organizationID: string;
          /** The date until which the API subscroption is valid. */
          validUntil: string | null;
        },
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/api-keys/invites/${code}/redeem`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description List chat history items of a Replica belonging to the logged in user.
     *
     * @tags Chat history
     * @name ReplicasChatHistoryList
     * @summary Get chat history
     * @request GET:/v1/replicas/{replicaUUID}/chat/history
     * @secure
     */
    replicasChatHistoryList: (
      replicaUuid: ReplicaUUIDParameter,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Indicates the status of the request */
          success: boolean;
          type: string;
          items?: {
            /**
             * The content of the message
             * @example "Hello"
             */
            content: string;
            /**
             * The date and time the message was created
             * @format date-time
             * @example "2024-09-24T09:09:55.66709+00:00"
             */
            created_at: string;
            /**
             * The ID of the message
             * @example 1
             */
            id: number;
            /**
             * Whether the replica is private
             * @example false
             */
            is_private: boolean;
            /**
             * The role of the message
             * @example "user"
             */
            role: "user" | "assistant";
            /**
             * From which platform is message was sent from
             * @example "web"
             */
            source:
              | "discord"
              | "telegram"
              | "embed"
              | "web"
              | "telegram_autopilot";
            /** The sources of information used to create the response via RAG (Retrieval-Augmented Generation) */
            sources: {
              /**
               * The ID of the source
               * @example 123
               */
              id: number;
              /**
               * Relevance score of the source
               * @example 0.9
               */
              score: number;
              /**
               * If the source has ever been scored or not
               * @example "scored"
               */
              status: "scored" | "unscored";
              /**
               * When the source was created
               * @format date-time
               * @example "2024-03-15T14:30:00.000Z"
               */
              created_at: string;
              /**
               * The name of the source
               * @example "Q: Next, what’s your nationality?"
               */
              name: string;
              /**
               * The actual content retrieved from the source
               * @example "Next, what’s your nationality? Mars"
               */
              content: string;
            }[];
            /**
             * The UUID of the user
             * @example "03db5651-cb61-4bdf-9ef0-89561f7c9c53"
             */
            user_uuid: string;
            /**
             * The ID of the message from the LLM. Present when role is assistant. Will be removed in the future.
             * @deprecated
             * @example "msg-GbsIAyNcNZCMAaDET3zXhInw"
             */
            original_message_id: string | null;
          }[];
        },
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | void
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/replicas/${replicaUuid}/chat/history`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Save chat history items of a Replica belonging to the logged in user.
     *
     * @tags Chat history
     * @name ReplicasChatHistoryCreate
     * @summary Create a chat history entry
     * @request POST:/v1/replicas/{replicaUUID}/chat/history
     * @secure
     */
    replicasChatHistoryCreate: (
      replicaUuid: ReplicaUUIDParameter,
      data: {
        /**
         * Content of the message
         * @minLength 1
         * @example "How did you handle the immense pressure during the Civil War?"
         */
        content: string;
        /** The place where the conversation is happening, which informs where the message should be saved in the chat history. */
        source?:
          | "discord"
          | "telegram"
          | "embed"
          | "web"
          | "telegram_autopilot";
        /** Discord information about the message */
        discord_data?: {
          /** Channel ID */
          channel_id: string;
          /** Channel name */
          channel_name: string;
          /** Author ID */
          author_id: string;
          /** Author name */
          author_name: string;
          /** Message ID */
          message_id: string;
          /** Message creation timestamp */
          created_at?: string;
          /** Server ID */
          server_id?: string;
          /** Server name */
          server_name?: string;
        };
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Indicates the status of the request */
          success: boolean;
        },
        void
      >({
        path: `/v1/replicas/${replicaUuid}/chat/history`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description List telegram chat history items of a Replica belonging to the logged in user.
     *
     * @tags Telegram integration
     * @name ReplicasChatHistoryTelegramList
     * @summary Get Telegram chat history
     * @request GET:/v1/replicas/{replicaUUID}/chat/history/telegram
     * @secure
     */
    replicasChatHistoryTelegramList: (
      replicaUuid: ReplicaUUIDParameter,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Indicates the status of the request */
          success: boolean;
          type: string;
          items?: {
            /**
             * The content of the message
             * @example "Hello"
             */
            content: string;
            /**
             * The date and time the message was created
             * @format date-time
             * @example "2024-09-24T09:09:55.66709+00:00"
             */
            created_at: string;
            /**
             * The ID of the message
             * @example 1
             */
            id: number;
            /**
             * Whether the replica is private
             * @example false
             */
            is_private: boolean;
            /**
             * The role of the message
             * @example "user"
             */
            role: "user" | "assistant";
            /**
             * From which platform is message was sent from
             * @example "web"
             */
            source:
              | "discord"
              | "telegram"
              | "embed"
              | "web"
              | "telegram_autopilot";
            /** The sources of information used to create the response via RAG (Retrieval-Augmented Generation) */
            sources: {
              /**
               * The ID of the source
               * @example 123
               */
              id: number;
              /**
               * Relevance score of the source
               * @example 0.9
               */
              score: number;
              /**
               * If the source has ever been scored or not
               * @example "scored"
               */
              status: "scored" | "unscored";
              /**
               * When the source was created
               * @format date-time
               * @example "2024-03-15T14:30:00.000Z"
               */
              created_at: string;
              /**
               * The name of the source
               * @example "Q: Next, what’s your nationality?"
               */
              name: string;
              /**
               * The actual content retrieved from the source
               * @example "Next, what’s your nationality? Mars"
               */
              content: string;
            }[];
            /**
             * The UUID of the user
             * @example "03db5651-cb61-4bdf-9ef0-89561f7c9c53"
             */
            user_uuid: string;
            /**
             * The ID of the message from the LLM. Present when role is assistant. Will be removed in the future.
             * @deprecated
             * @example "msg-GbsIAyNcNZCMAaDET3zXhInw"
             */
            original_message_id: string | null;
          }[];
        },
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | void
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/replicas/${replicaUuid}/chat/history/telegram`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Save chat history items of a Replica belonging to the logged in user.
     *
     * @tags Telegram integration
     * @name ReplicasChatHistoryTelegramCreate
     * @summary Create a Telegram chat history entry
     * @request POST:/v1/replicas/{replicaUUID}/chat/history/telegram
     * @secure
     */
    replicasChatHistoryTelegramCreate: (
      replicaUuid: ReplicaUUIDParameter,
      data: {
        /**
         * Content of the message
         * @minLength 1
         * @example "How did you handle the immense pressure during the Civil War?"
         */
        content: string;
        /** Telegram information about the message */
        telegram_data: {
          /** Type of the chat, can be either `private`, `group`, `supergroup` or `channel`. */
          chat_type: string;
          /** Unique identifier for this chat. */
          chat_id: number;
          /** Name of the chat (group name, channel title, or user display name for private chats). */
          chat_name?: string;
          /** Sender of the message's userID; may be empty for messages sent to channels. For backward compatibility, if the message was sent on behalf of a chat, the field contains a fake sender user in non-channel chats. */
          user_id?: number;
          /** Sender of the message's username; may be empty for messages sent to channels. For backward compatibility, if the message was sent on behalf of a chat, the field contains a fake sender user in non-channel chats. */
          username?: string;
          /** Unique message identifier inside this chat. In specific instances (e.g., message containing a video sent to a big chat). */
          message_id: number;
          /**
           * Unique identifier of a message thread or a forum topic to which the message belongs; for supergroups only.
           * @exclusiveMin 0
           */
          message_thread_id?: number;
        };
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Indicates the status of the request */
          success: boolean;
        },
        void
      >({
        path: `/v1/replicas/${replicaUuid}/chat/history/telegram`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description List discord chat history items of a Replica belonging to the logged in user.
     *
     * @tags Discord integration
     * @name ReplicasChatHistoryDiscordList
     * @summary Get Discord chat history
     * @request GET:/v1/replicas/{replicaUUID}/chat/history/discord
     * @secure
     */
    replicasChatHistoryDiscordList: (
      replicaUuid: ReplicaUUIDParameter,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Indicates the status of the request */
          success: boolean;
          type: string;
          items?: {
            /**
             * The content of the message
             * @example "Hello"
             */
            content: string;
            /**
             * The date and time the message was created
             * @format date-time
             * @example "2024-09-24T09:09:55.66709+00:00"
             */
            created_at: string;
            /**
             * The ID of the message
             * @example 1
             */
            id: number;
            /**
             * Whether the replica is private
             * @example false
             */
            is_private: boolean;
            /**
             * The role of the message
             * @example "user"
             */
            role: "user" | "assistant";
            /**
             * From which platform is message was sent from
             * @example "web"
             */
            source:
              | "discord"
              | "telegram"
              | "embed"
              | "web"
              | "telegram_autopilot";
            /** The sources of information used to create the response via RAG (Retrieval-Augmented Generation) */
            sources: {
              /**
               * The ID of the source
               * @example 123
               */
              id: number;
              /**
               * Relevance score of the source
               * @example 0.9
               */
              score: number;
              /**
               * If the source has ever been scored or not
               * @example "scored"
               */
              status: "scored" | "unscored";
              /**
               * When the source was created
               * @format date-time
               * @example "2024-03-15T14:30:00.000Z"
               */
              created_at: string;
              /**
               * The name of the source
               * @example "Q: Next, what’s your nationality?"
               */
              name: string;
              /**
               * The actual content retrieved from the source
               * @example "Next, what’s your nationality? Mars"
               */
              content: string;
            }[];
            /**
             * The UUID of the user
             * @example "03db5651-cb61-4bdf-9ef0-89561f7c9c53"
             */
            user_uuid: string;
            /**
             * The ID of the message from the LLM. Present when role is assistant. Will be removed in the future.
             * @deprecated
             * @example "msg-GbsIAyNcNZCMAaDET3zXhInw"
             */
            original_message_id: string | null;
          }[];
        },
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | void
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/replicas/${replicaUuid}/chat/history/discord`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description List web chat history items of a Replica belonging to the logged in user.
     *
     * @tags Chat history
     * @name ReplicasChatHistoryWebList
     * @summary Get Web chat history
     * @request GET:/v1/replicas/{replicaUUID}/chat/history/web
     * @secure
     */
    replicasChatHistoryWebList: (
      replicaUuid: ReplicaUUIDParameter,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Indicates the status of the request */
          success: boolean;
          type: string;
          items?: {
            /**
             * The content of the message
             * @example "Hello"
             */
            content: string;
            /**
             * The date and time the message was created
             * @format date-time
             * @example "2024-09-24T09:09:55.66709+00:00"
             */
            created_at: string;
            /**
             * The ID of the message
             * @example 1
             */
            id: number;
            /**
             * Whether the replica is private
             * @example false
             */
            is_private: boolean;
            /**
             * The role of the message
             * @example "user"
             */
            role: "user" | "assistant";
            /**
             * From which platform is message was sent from
             * @example "web"
             */
            source:
              | "discord"
              | "telegram"
              | "embed"
              | "web"
              | "telegram_autopilot";
            /** The sources of information used to create the response via RAG (Retrieval-Augmented Generation) */
            sources: {
              /**
               * The ID of the source
               * @example 123
               */
              id: number;
              /**
               * Relevance score of the source
               * @example 0.9
               */
              score: number;
              /**
               * If the source has ever been scored or not
               * @example "scored"
               */
              status: "scored" | "unscored";
              /**
               * When the source was created
               * @format date-time
               * @example "2024-03-15T14:30:00.000Z"
               */
              created_at: string;
              /**
               * The name of the source
               * @example "Q: Next, what’s your nationality?"
               */
              name: string;
              /**
               * The actual content retrieved from the source
               * @example "Next, what’s your nationality? Mars"
               */
              content: string;
            }[];
            /**
             * The UUID of the user
             * @example "03db5651-cb61-4bdf-9ef0-89561f7c9c53"
             */
            user_uuid: string;
            /**
             * The ID of the message from the LLM. Present when role is assistant. Will be removed in the future.
             * @deprecated
             * @example "msg-GbsIAyNcNZCMAaDET3zXhInw"
             */
            original_message_id: string | null;
          }[];
        },
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | void
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/replicas/${replicaUuid}/chat/history/web`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description List embed chat history items of a Replica belonging to the logged in user.
     *
     * @tags Chat-widget integration
     * @name ReplicasChatHistoryEmbedList
     * @summary Get Embed chat history
     * @request GET:/v1/replicas/{replicaUUID}/chat/history/embed
     * @secure
     */
    replicasChatHistoryEmbedList: (
      replicaUuid: ReplicaUUIDParameter,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Indicates the status of the request */
          success: boolean;
          type: string;
          items?: {
            /**
             * The content of the message
             * @example "Hello"
             */
            content: string;
            /**
             * The date and time the message was created
             * @format date-time
             * @example "2024-09-24T09:09:55.66709+00:00"
             */
            created_at: string;
            /**
             * The ID of the message
             * @example 1
             */
            id: number;
            /**
             * Whether the replica is private
             * @example false
             */
            is_private: boolean;
            /**
             * The role of the message
             * @example "user"
             */
            role: "user" | "assistant";
            /**
             * From which platform is message was sent from
             * @example "web"
             */
            source:
              | "discord"
              | "telegram"
              | "embed"
              | "web"
              | "telegram_autopilot";
            /** The sources of information used to create the response via RAG (Retrieval-Augmented Generation) */
            sources: {
              /**
               * The ID of the source
               * @example 123
               */
              id: number;
              /**
               * Relevance score of the source
               * @example 0.9
               */
              score: number;
              /**
               * If the source has ever been scored or not
               * @example "scored"
               */
              status: "scored" | "unscored";
              /**
               * When the source was created
               * @format date-time
               * @example "2024-03-15T14:30:00.000Z"
               */
              created_at: string;
              /**
               * The name of the source
               * @example "Q: Next, what’s your nationality?"
               */
              name: string;
              /**
               * The actual content retrieved from the source
               * @example "Next, what’s your nationality? Mars"
               */
              content: string;
            }[];
            /**
             * The UUID of the user
             * @example "03db5651-cb61-4bdf-9ef0-89561f7c9c53"
             */
            user_uuid: string;
            /**
             * The ID of the message from the LLM. Present when role is assistant. Will be removed in the future.
             * @deprecated
             * @example "msg-GbsIAyNcNZCMAaDET3zXhInw"
             */
            original_message_id: string | null;
          }[];
        },
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | void
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/replicas/${replicaUuid}/chat/history/embed`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Ask for a completion and stores the prompt in the chat history. Replica chat supports two response formats: streamed and JSON. To switch between these formats, use the 'Accept' header, specifying either 'text/event-stream' for streaming or 'application/json' for JSON. The streamed response honours the [Stream Protocol](https://sdk.vercel.ai/docs/ai-sdk-ui/stream-protocol), allowing the use of a number of SDKs, including [Vercel AI SDK](https://sdk.vercel.ai/docs/introduction). The streamed variant is not specified in the OpenAPI Schema because it is not an OpenAPI endpoint.
     *
     * @tags Chat completions
     * @name ReplicasChatCompletionsCreate
     * @summary Generate a completion
     * @request POST:/v1/replicas/{replicaUUID}/chat/completions
     * @secure
     */
    replicasChatCompletionsCreate: (
      replicaUuid: ReplicaUUIDParameter,
      data: {
        /**
         * The prompt to generate completions for, encoded as a string.
         * @minLength 1
         * @maxLength 100000
         * @example "How did you handle the immense pressure during the Civil War?"
         */
        content: string;
        /**
         * When set to true, historical messages are not used in the context, and the message is not appended to the conversation history, thus it is excluded from all future chat context.
         * @default false
         */
        skip_chat_history?: boolean;
        /** The place where the conversation is happening, which informs where the message should be saved in the chat history. */
        source?:
          | "discord"
          | "telegram"
          | "embed"
          | "web"
          | "telegram_autopilot";
        /** Discord information about the message */
        discord_data?: {
          /** Channel ID */
          channel_id: string;
          /** Channel name */
          channel_name: string;
          /** Author ID */
          author_id: string;
          /** Author name */
          author_name: string;
          /** Message ID */
          message_id: string;
          /** Message creation timestamp */
          created_at?: string;
          /** Server ID */
          server_id?: string;
          /** Server name */
          server_name?: string;
        };
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          success: boolean;
          content: string;
        },
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/replicas/${replicaUuid}/chat/completions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Ask for a completion and stores the prompt in the chat history. Replica chat supports two response formats: streamed and JSON. To switch between these formats, use the 'Accept' header, specifying either 'text/event-stream' for streaming or 'application/json' for JSON. The streamed response honours the [Stream Protocol](https://sdk.vercel.ai/docs/ai-sdk-ui/stream-protocol), allowing the use of a number of SDKs, including [Vercel AI SDK](https://sdk.vercel.ai/docs/introduction). The streamed variant is not specified in the OpenAPI Schema because it is not an OpenAPI endpoint.
     *
     * @tags Telegram integration
     * @name ReplicasChatCompletionsTelegramCreate
     * @summary Generate a Telegram completion
     * @request POST:/v1/replicas/{replicaUUID}/chat/completions/telegram
     * @secure
     */
    replicasChatCompletionsTelegramCreate: (
      replicaUuid: ReplicaUUIDParameter,
      data: {
        /**
         * The prompt to generate completions for, encoded as a string.
         * @minLength 1
         * @maxLength 100000
         * @example "How did you handle the immense pressure during the Civil War?"
         */
        content: string;
        /**
         * When set to true, historical messages are not used in the context, and the message is not appended to the conversation history, thus it is excluded from all future chat context.
         * @default false
         */
        skip_chat_history?: boolean;
        /**
         * The URL of the image to be used as context for the completion.
         * @format uri
         * @pattern https?:\/\/[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]+\b([-a-zA-Z0-9()@:%_+.~#?&\/=]*)
         * @example "https://images.invalid/photo.jpeg"
         */
        imageURL?: string;
        /** Telegram information about the message */
        telegram_data: {
          /** Type of the chat, can be either `private`, `group`, `supergroup` or `channel`. */
          chat_type: string;
          /** Unique identifier for this chat. */
          chat_id: number;
          /** Name of the chat (group name, channel title, or user display name for private chats). */
          chat_name?: string;
          /** Sender of the message's userID; may be empty for messages sent to channels. For backward compatibility, if the message was sent on behalf of a chat, the field contains a fake sender user in non-channel chats. */
          user_id?: number;
          /** Sender of the message's username; may be empty for messages sent to channels. For backward compatibility, if the message was sent on behalf of a chat, the field contains a fake sender user in non-channel chats. */
          username?: string;
          /** Unique message identifier inside this chat. In specific instances (e.g., message containing a video sent to a big chat). */
          message_id: number;
          /**
           * Unique identifier of a message thread or a forum topic to which the message belongs; for supergroups only.
           * @exclusiveMin 0
           */
          message_thread_id?: number;
        };
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          success: boolean;
          content: string;
        },
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/replicas/${replicaUuid}/chat/completions/telegram`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description > warn > Limited [OpenAI Chat Completions API](https://platform.openai.com/docs/api-reference/chat/create) compatibility. > Supports basic chat completion with standard message roles and JSON responses. > Not supported: OpenAI-style streaming, tool calls, stop sequences, logprobs, and most request parameters. Creates a chat completion response from a list of messages comprising a conversation.
     *
     * @tags Experimental, Chat completions
     * @name ExperimentalReplicasChatCompletionsCreate
     * @summary Generate a completion (OpenAI-compatible, non-streaming)
     * @request POST:/v1/experimental/replicas/{replicaUUID}/chat/completions
     * @secure
     */
    experimentalReplicasChatCompletionsCreate: (
      replicaUuid: ReplicaUUIDParameter,
      data: {
        /**
         * A list of messages that make up the conversation context. Only the last message is used for completion.
         * @example [{"role":"system","content":"You are a helpful assistant."},{"role":"user","content":"How did you handle the immense pressure during the Civil War?"}]
         */
        messages: {
          /**
           * The role of the message author. Can be "assistant", "developer", "system", "tool", or "user".
           * @example "user"
           */
          role: "assistant" | "developer" | "system" | "tool" | "user";
          /**
           * The content of the message.
           * @minLength 1
           * @maxLength 100000
           * @example "How did you handle the immense pressure during the Civil War?"
           */
          content: string;
          /**
           * An optional name for the participant. Provides the model information to differentiate between participants of the same role.
           * @example "example_user"
           */
          name?: string;
        }[];
        /**
         * When set to false, historical messages are not used in the context, and the message is not appended to the conversation history.
         * @default true
         * @example true
         */
        store?: boolean;
        /**
         * The place where the conversation is happening, which informs where the message should be saved in the chat history if `store` is true.
         * @default "web"
         * @example "web"
         */
        source?: "discord" | "embed" | "web";
        /** Discord information about the message */
        discord_data?: {
          /** Channel ID */
          channel_id: string;
          /** Channel name */
          channel_name: string;
          /** Author ID */
          author_id: string;
          /** Author name */
          author_name: string;
          /** Message ID */
          message_id: string;
          /** Message creation timestamp */
          created_at?: string;
          /** Server ID */
          server_id?: string;
          /** Server name */
          server_name?: string;
        };
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * A unique identifier for the chat completion.
           * @example "chatcmpl-abc123"
           */
          id: string;
          /**
           * The Unix timestamp (in seconds) of when the chat completion was created.
           * @example 1677858242
           */
          created: number;
          /**
           * The object type, which is always "chat.completion"
           * @example "chat.completion"
           */
          object: "chat.completion";
          /**
           * The model used for the chat completion.
           * @example "o1"
           */
          model: string;
          /** An array of chat completion choices. */
          choices: {
            /**
             * The index of the choice in the array.
             * @example 0
             */
            index: number;
            /** The message generated by the model. */
            message: {
              /**
               * The role of the message author, which is always "assistant" for completions.
               * @example "assistant"
               */
              role: "assistant";
              /**
               * The content of the message.
               * @example "During the Civil War, I faced tremendous pressure..."
               */
              content: string;
              /** The tool calls generated by the model, such as function calls. */
              tool_calls?: any[];
            };
            /** Log probabilities for token generation if requested. */
            logprobs?: any;
            /**
             * The reason the model stopped generating tokens.
             * @example "stop"
             */
            finish_reason:
              | "stop"
              | "length"
              | "tool_calls"
              | "content_filter"
              | "function_call";
          }[];
          /** Usage statistics for the completion request. */
          usage: {
            /**
             * Number of tokens in the prompt.
             * @example 56
             */
            prompt_tokens: number;
            /**
             * Number of tokens in the generated completion.
             * @example 31
             */
            completion_tokens: number;
            /**
             * Total number of tokens used (prompt + completion).
             * @example 87
             */
            total_tokens: number;
          };
        },
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/experimental/replicas/${replicaUuid}/chat/completions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns information about the current user.
     *
     * @tags Users
     * @name UsersMeList
     * @summary Get the current user
     * @request GET:/v1/users/me
     * @secure
     */
    usersMeList: (params: RequestParams = {}) =>
      this.request<
        {
          /**
           * The email address
           * @format email
           * @example "user@example.com"
           */
          email?: string;
          /**
           * The ID of the user
           * @minLength 1
           * @example "johndoe"
           */
          id: string;
          /** The linked accounts of the user */
          linkedAccounts?: {
            /** The account ID */
            accountID: string;
            /**
             * The account type
             * @example "discord"
             */
            accountType: "discord" | "telegram" | "embed";
          }[];
          /**
           * The name of the user
           * @example "John Doe"
           */
          name?: string;
          /**
           * Indicates the request was successful
           * @example true
           */
          success: true;
        },
        any
      >({
        path: `/v1/users/me`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint permanently deletes the currently authenticated user account, including all associated data. After deletion, the account cannot be recovered.
     *
     * @tags Users
     * @name UsersMeDelete
     * @summary Delete the current user
     * @request DELETE:/v1/users/me
     * @secure
     */
    usersMeDelete: (params: RequestParams = {}) =>
      this.request<
        void,
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/users/me`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Update the currently logged in user.
     *
     * @tags Users
     * @name UsersMeUpdate
     * @summary Update the current user
     * @request PUT:/v1/users/me
     * @secure
     */
    usersMeUpdate: (
      data: {
        /**
         * The email address
         * @format email
         * @example "user@example.com"
         */
        email?: string;
        /**
         * The ID of the user
         * @minLength 1
         * @example "johndoe"
         */
        id: string;
        /** The linked accounts of the user */
        linkedAccounts?: {
          /** The account ID */
          accountID: string;
          /**
           * The account type
           * @example "discord"
           */
          accountType: "discord" | "telegram" | "embed";
        }[];
        /**
         * The name of the user (max 50 chars, letters/numbers/spaces and ( ) . , ' - /)
         * @maxLength 50
         * @pattern ^[a-zA-Z0-9\s().,'\-/]*$
         * @example "John Doe"
         */
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * The email address
           * @format email
           * @example "user@example.com"
           */
          email?: string;
          /**
           * The ID of the user
           * @minLength 1
           * @example "johndoe"
           */
          id: string;
          /** The linked accounts of the user */
          linkedAccounts?: {
            /** The account ID */
            accountID: string;
            /**
             * The account type
             * @example "discord"
             */
            accountType: "discord" | "telegram" | "embed";
          }[];
          /**
           * The name of the user
           * @example "John Doe"
           */
          name?: string;
          /**
           * Indicates the request was successful
           * @example true
           */
          success: true;
        },
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/users/me`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new user.
     *
     * @tags Users
     * @name UsersCreate
     * @summary Create a user
     * @request POST:/v1/users
     * @secure
     */
    usersCreate: (
      data: {
        /**
         * The email address
         * @format email
         * @example "user@example.com"
         */
        email?: string;
        /** The ID of the user */
        id?: string;
        /** The linked accounts of the user */
        linkedAccounts?: {
          /** The account ID */
          accountID: string;
          /**
           * The account type
           * @example "discord"
           */
          accountType: "discord" | "telegram" | "embed";
        }[];
        /**
         * The name of the user (max 50 chars, letters/numbers/spaces and ( ) . , ' - /)
         * @maxLength 50
         * @pattern ^[a-zA-Z0-9\s().,'\-/]*$
         * @example "John Doe"
         */
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * The email address
           * @format email
           * @example "user@example.com"
           */
          email?: string;
          /**
           * The ID of the user
           * @minLength 1
           * @example "johndoe"
           */
          id: string;
          /** The linked accounts of the user */
          linkedAccounts?: {
            /** The account ID */
            accountID: string;
            /**
             * The account type
             * @example "discord"
             */
            accountType: "discord" | "telegram" | "embed";
          }[];
          /**
           * The name of the user
           * @example "John Doe"
           */
          name?: string;
          /**
           * Indicates the request was successful
           * @example true
           */
          success: true;
        },
        {
          /** Indicates the status of the request */
          success: boolean;
          /** A text representation of the error */
          error: string;
          /**
           * A unique identifier of the event, useful for reporting
           * @example "14fceadd84e74ec499afe9b0f7952d6b"
           */
          fingerprint?: string;
          /**
           * A unique identifier of the request, useful for reporting
           * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
           */
          request_id: string;
        }
      >({
        path: `/v1/users`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns information about the user with the specified ID.
     *
     * @tags Users
     * @name UsersDetail
     * @summary Get a user by ID
     * @request GET:/v1/users/{userID}
     * @secure
     */
    usersDetail: (userId: string, params: RequestParams = {}) =>
      this.request<
        {
          /**
           * The email address
           * @format email
           * @example "user@example.com"
           */
          email?: string;
          /**
           * The ID of the user
           * @minLength 1
           * @example "johndoe"
           */
          id: string;
          /** The linked accounts of the user */
          linkedAccounts?: {
            /** The account ID */
            accountID: string;
            /**
             * The account type
             * @example "discord"
             */
            accountType: "discord" | "telegram" | "embed";
          }[];
          /**
           * The name of the user
           * @example "John Doe"
           */
          name?: string;
          /**
           * Indicates the request was successful
           * @example true
           */
          success: true;
        },
        {
          /** Indicates the status of the request */
          success: boolean;
          /** A text representation of the error */
          error: string;
          /**
           * A unique identifier of the event, useful for reporting
           * @example "14fceadd84e74ec499afe9b0f7952d6b"
           */
          fingerprint?: string;
          /**
           * A unique identifier of the request, useful for reporting
           * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
           */
          request_id: string;
        }
      >({
        path: `/v1/users/${userId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Integrates a replica to Telegram. The default Sensay Telegram integration will run a bot for you until you delete the integration.
     *
     * @tags Telegram integration
     * @name ReplicasIntegrationsTelegramCreate
     * @summary Create a replica Telegram integration
     * @request POST:/v1/replicas/{replicaUUID}/integrations/telegram
     * @secure
     */
    replicasIntegrationsTelegramCreate: (
      replicaUuid: ReplicaUUIDParameter,
      data: {
        /** Telegram Bot ID */
        telegram_token: string;
        /** Telegram Bot Name */
        mention: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Indicates the status of the request */
          success: boolean;
          id: number;
        },
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/replicas/${replicaUuid}/integrations/telegram`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Removes a replica Telegram integration.
     *
     * @tags Telegram integration
     * @name ReplicasIntegrationsTelegramDelete
     * @summary Delete a replica Telegram integration
     * @request DELETE:/v1/replicas/{replicaUUID}/integrations/telegram
     * @secure
     */
    replicasIntegrationsTelegramDelete: (
      replicaUuid: ReplicaUUIDParameter,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Indicates the status of the request */
          success: boolean;
        },
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/replicas/${replicaUuid}/integrations/telegram`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get an existing replica.
     *
     * @tags Replicas
     * @name ReplicasDetail
     * @summary Get a replica
     * @request GET:/v1/replicas/{replicaUUID}
     * @secure
     */
    replicasDetail: (
      replicaUuid: ReplicaUUIDParameter,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * The name of the replica.
           * @maxLength 50
           * @example "John Smith"
           */
          name: string;
          /**
           * The purpose of the replica. This field is not used for training the replica.
           * @maxLength 1000
           * @example "Acts as my AI twin for answering questions about my creative work."
           */
          purpose?: string;
          /**
           * A short description of your replica. This field is not used for training the replica.
           * @maxLength 50
           * @example "Accountant from Brooklyn who loves sports."
           */
          shortDescription: string;
          /**
           * The first thing your replica will say when you start a conversation with them.
           * @maxLength 600
           * @example "What would you like to know?"
           */
          greeting: string;
          /**
           * The replica type.
           * `individual`: A replica of yourself.
           * `character`: A replica of a character: can be anything you want.
           * `brand`: A replica of a business persona or organization.
           * @default "character"
           */
          type?: "individual" | "character" | "brand";
          /**
           * The replica owner ID.
           * @example "a-user-id"
           */
          ownerID: string;
          /**
           * Visibility of the replica. When set to `true`, only the owner and users on the allowlist will be able to find the replica and chat with it.
           * @default false
           */
          private?: boolean;
          /**
           * Emails of users who can use the replica when the replica is private.
           * @default []
           * @example ["user@domain.example"]
           */
          whitelistEmails?: string[];
          /**
           * The slug of the replica. Slugs can be used by API consumers to determine the URLs where replicas can be found.
           * @maxLength 50
           * @example "example-replica"
           */
          slug: string;
          /**
           * The tags associated with the replica. Tags help categorize replicas and make them easier to find.
           * @default []
           * @example ["male","italian"]
           */
          tags?: string[];
          /**
           * The URL of the profile image of the replica. The image will be downloaded, optimized and stored on our servers, so the URL in the response will be different. Supported formats: image/jpeg, image/jpg, image/pjpeg, image/png, image/bmp, image/x-windows-bmp, image/x-bmp, image/x-bitmap, image/x-ms-bmp, image/webp, image/avif
           * @format uri
           * @default "https://studio.sensay.io/assets/default-replica-profile.webp"
           * @pattern https?:\/\/[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]+\b([-a-zA-Z0-9()@:%_+.~#?&\/=]*)
           * @example "https://images.invalid/photo.jpeg"
           */
          profileImage?: string;
          /**
           * Suggested questions when starting a conversation.
           * @default []
           * @example ["What is the meaning of life?"]
           */
          suggestedQuestions?: string[];
          llm: {
            /**
             * The LLM model of the replica.
             * @default "claude-3-5-haiku-latest"
             * @example "gpt-4o"
             */
            model?:
              | "gpt-4o"
              | "claude-3-5-haiku-latest"
              | "claude-3-7-sonnet-latest"
              | "claude-4-sonnet-20250514"
              | "grok-3-latest"
              | "grok-4-latest"
              | "deepseek-chat"
              | "o3-mini"
              | "gpt-4o-mini"
              | "huggingface-eva"
              | "huggingface-dolphin-llama"
              | "asi1-mini"
              | "targon-gpt-oss-120b"
              | "gpt-5"
              | "gpt-5-mini"
              | "gpt-5-nano"
              | "gemini-2.5-flash"
              | "gemini-2.5-pro"
              | "grok-2-latest"
              | "grok-3-beta";
            /**
             * Deprecated. The system will automatically choose the best approach.
             * @deprecated
             * @default "rag-search"
             */
            memoryMode?: "prompt-caching" | "rag-search";
            /**
             * Who is your replica? How do you want it to talk, respond and act.
             * @maxLength 30000
             * @example "Concise, knowledgeable, empathetic and cheerful."
             */
            systemMessage?: string;
            /**
             * The replica's tools. Tools enable agents to interact with the world. `getTokenInfo`: Allows replica to get token information
             * @default []
             * @example ["getTokenInfo"]
             */
            tools?: (
              | "getTokenInfo"
              | "getUdaoTokenInfo"
              | "getSensayTokenInfo"
              | "getTokenInfoMEAI"
              | "answerToLife"
              | "toolhouse"
              | "brightUnionGetQuoteTool"
              | "brightUnionGetCoverablesTool"
            )[];
          };
          /**
           * Text that can be used to generate a voice preview.
           * @maxLength 400
           * @example "Hi, I'm your Sensay replica! How can I assist you today?"
           */
          voicePreviewText?: string;
          /**
           * Whether the replica conversations are accessible to customer support
           * @example true
           */
          isEveryConversationAccessibleBySupport?: boolean;
          /**
           * The replica UUID
           * @format uuid
           * @example "4830597b-f3be-42b4-9587-fa15299ccd63"
           */
          uuid: string;
          /**
           * The distilled knowledge of the replica
           * @example "This is the distilled knowledge of the replica."
           */
          distilledKnowledge?: string;
          /**
           * Indicates the request was successful
           * @example true
           */
          success: true;
        },
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/replicas/${replicaUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a replica by UUID.
     *
     * @tags Replicas
     * @name ReplicasDelete
     * @summary Delete a replica
     * @request DELETE:/v1/replicas/{replicaUUID}
     * @secure
     */
    replicasDelete: (
      replicaUuid: ReplicaUUIDParameter,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * Indicates if the replica was deleted successfully
           * @example true
           */
          success: boolean;
        },
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/replicas/${replicaUuid}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates an existing replica.
     *
     * @tags Replicas
     * @name ReplicasUpdate
     * @summary Updates a replica
     * @request PUT:/v1/replicas/{replicaUUID}
     * @secure
     */
    replicasUpdate: (
      replicaUuid: ReplicaUUIDParameter,
      data: {
        /**
         * The name of the replica.
         * @maxLength 50
         * @example "John Smith"
         */
        name: string;
        /**
         * The purpose of the replica. This field is not used for training the replica.
         * @maxLength 1000
         * @example "Acts as my AI twin for answering questions about my creative work."
         */
        purpose?: string;
        /**
         * A short description of your replica. This field is not used for training the replica.
         * @maxLength 50
         * @example "Accountant from Brooklyn who loves sports."
         */
        shortDescription: string;
        /**
         * The first thing your replica will say when you start a conversation with them.
         * @maxLength 600
         * @example "What would you like to know?"
         */
        greeting: string;
        /**
         * The replica type.
         * `individual`: A replica of yourself.
         * `character`: A replica of a character: can be anything you want.
         * `brand`: A replica of a business persona or organization.
         * @default "character"
         */
        type?: "individual" | "character" | "brand";
        /**
         * The replica owner ID.
         * @example "a-user-id"
         */
        ownerID: string;
        /**
         * Visibility of the replica. When set to `true`, only the owner and users on the allowlist will be able to find the replica and chat with it.
         * @default false
         */
        private?: boolean;
        /**
         * Emails of users who can use the replica when the replica is private.
         * @default []
         * @example ["user@domain.example"]
         */
        whitelistEmails?: string[];
        /**
         * The slug of the replica. Slugs can be used by API consumers to determine the URLs where replicas can be found.
         * @maxLength 50
         * @example "example-replica"
         */
        slug: string;
        /**
         * The tags associated with the replica. Tags help categorize replicas and make them easier to find.
         * @default []
         * @example ["male","italian"]
         */
        tags?: string[];
        /**
         * The URL of the profile image of the replica. The image will be downloaded, optimized and stored on our servers, so the URL in the response will be different. Supported formats: image/jpeg, image/jpg, image/pjpeg, image/png, image/bmp, image/x-windows-bmp, image/x-bmp, image/x-bitmap, image/x-ms-bmp, image/webp, image/avif
         * @format uri
         * @default "https://studio.sensay.io/assets/default-replica-profile.webp"
         * @pattern https?:\/\/[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]+\b([-a-zA-Z0-9()@:%_+.~#?&\/=]*)
         * @example "https://images.invalid/photo.jpeg"
         */
        profileImage?: string;
        /**
         * Suggested questions when starting a conversation.
         * @default []
         * @example ["What is the meaning of life?"]
         */
        suggestedQuestions?: string[];
        llm: {
          /**
           * The LLM model of the replica.
           * @default "claude-3-5-haiku-latest"
           * @example "gpt-4o"
           */
          model?:
            | "gpt-4o"
            | "claude-3-5-haiku-latest"
            | "claude-3-7-sonnet-latest"
            | "claude-4-sonnet-20250514"
            | "grok-3-latest"
            | "grok-4-latest"
            | "deepseek-chat"
            | "o3-mini"
            | "gpt-4o-mini"
            | "huggingface-eva"
            | "huggingface-dolphin-llama"
            | "asi1-mini"
            | "targon-gpt-oss-120b"
            | "gpt-5"
            | "gpt-5-mini"
            | "gpt-5-nano"
            | "gemini-2.5-flash"
            | "gemini-2.5-pro"
            | "grok-2-latest"
            | "grok-3-beta";
          /**
           * Deprecated. The system will automatically choose the best approach.
           * @deprecated
           * @default "rag-search"
           */
          memoryMode?: "prompt-caching" | "rag-search";
          /**
           * Who is your replica? How do you want it to talk, respond and act.
           * @maxLength 30000
           * @example "Concise, knowledgeable, empathetic and cheerful."
           */
          systemMessage?: string;
          /**
           * The replica's tools. Tools enable agents to interact with the world. `getTokenInfo`: Allows replica to get token information
           * @default []
           * @example ["getTokenInfo"]
           */
          tools?: (
            | "getTokenInfo"
            | "getUdaoTokenInfo"
            | "getSensayTokenInfo"
            | "getTokenInfoMEAI"
            | "answerToLife"
            | "toolhouse"
            | "brightUnionGetQuoteTool"
            | "brightUnionGetCoverablesTool"
          )[];
        };
        /**
         * Text that can be used to generate a voice preview.
         * @maxLength 400
         * @example "Hi, I'm your Sensay replica! How can I assist you today?"
         */
        voicePreviewText?: string;
        /**
         * Whether the replica conversations are accessible to customer support
         * @example true
         */
        isEveryConversationAccessibleBySupport?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * Indicates if the replica was created successfully
           * @example true
           */
          success: boolean;
        },
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/replicas/${replicaUuid}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve details for a specific conversation within a replica.
     *
     * @tags Conversations
     * @name ReplicasConversationsDetail
     * @summary Get conversation details
     * @request GET:/v1/replicas/{replicaUUID}/conversations/{conversationUUID}
     * @secure
     */
    replicasConversationsDetail: (
      replicaUuid: ReplicaUUIDParameter,
      conversationUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * The conversation UUID.
           * @format uuid
           * @example "8e9309af-baa4-4a85-8c59-c3a2a0c2ad0f"
           */
          uuid: string;
          /**
           * The chat UUID to which this conversation belongs.
           * @format uuid
           * @example "550e8400-e29b-41d4-a716-446655440001"
           */
          chatUUID: string;
          /**
           * The source of the conversation.
           * @example "telegram"
           */
          source:
            | "discord"
            | "telegram"
            | "embed"
            | "web"
            | "telegram_autopilot";
          /**
           * The total number of messages in the conversation.
           * @example 42
           */
          messageCount: number;
          /**
           * The total number of assistant replies in the conversation.
           * @example 42
           */
          replicaReplyCount: number;
          /**
           * The timestamp of the first message in the conversation.
           * @format date-time
           * @example "2025-05-27T15:02:44.499744+00:00"
           */
          firstMessageAt?: string;
          /**
           * The timestamp of the last message in the conversation.
           * @format date-time
           * @example "2025-05-27T15:02:44.499744+00:00"
           */
          lastMessageAt?: string;
          /**
           * The timestamp of the last assistant reply in the conversation.
           * @format date-time
           * @example "2025-05-27T15:02:44.499744+00:00"
           */
          lastReplicaReplyAt?: string;
          /**
           * The name of the conversation. This can be the name of the user or the name of the group.
           * @example "John Doe"
           */
          conversationName?: string;
          /**
           * The image URL of the conversation. This can be the profile image of the user or the group.
           * @example "https://example.com/image.png"
           */
          conversationImageURL?: string;
          /**
           * The type of conversation.
           * @example "individual"
           */
          conversationType: "individual" | "group";
          /**
           * Indicates the request was successful
           * @example true
           */
          success: true;
        },
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/replicas/${replicaUuid}/conversations/${conversationUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description List of replica's conversations with pagination and sorting.
     *
     * @tags Conversations
     * @name ReplicasConversationsList
     * @summary List replica's conversations
     * @request GET:/v1/replicas/{replicaUUID}/conversations
     * @secure
     */
    replicasConversationsList: (
      replicaUuid: ReplicaUUIDParameter,
      query?: {
        /**
         * The number of items per page.
         * @min 0
         * @max 100
         * @default 24
         * @example 24
         */
        pageSize?: number | null;
        /**
         * The page number.
         * @min 1
         * @default 1
         * @example 2
         */
        page?: number;
        /**
         * Sort criteria.
         * @default "lastReplicaReplyAt"
         * @example "lastReplicaReplyAt"
         */
        sortBy?: "replicaReplies" | "firstMessageAt" | "lastReplicaReplyAt";
        /**
         * The order of the sort.
         * @default "desc"
         * @example "asc"
         */
        sortOrder?: "asc" | "desc";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          items: {
            /**
             * The conversation UUID.
             * @format uuid
             * @example "8e9309af-baa4-4a85-8c59-c3a2a0c2ad0f"
             */
            uuid: string;
            /**
             * The chat UUID to which this conversation belongs.
             * @format uuid
             * @example "550e8400-e29b-41d4-a716-446655440001"
             */
            chatUUID: string;
            /**
             * The source of the conversation.
             * @example "telegram"
             */
            source:
              | "discord"
              | "telegram"
              | "embed"
              | "web"
              | "telegram_autopilot";
            /**
             * The total number of messages in the conversation.
             * @example 42
             */
            messageCount: number;
            /**
             * The total number of assistant replies in the conversation.
             * @example 42
             */
            replicaReplyCount: number;
            /**
             * The timestamp of the first message in the conversation.
             * @format date-time
             * @example "2025-05-27T15:02:44.499744+00:00"
             */
            firstMessageAt?: string;
            /**
             * The timestamp of the last message in the conversation.
             * @format date-time
             * @example "2025-05-27T15:02:44.499744+00:00"
             */
            lastMessageAt?: string;
            /**
             * The timestamp of the last assistant reply in the conversation.
             * @format date-time
             * @example "2025-05-27T15:02:44.499744+00:00"
             */
            lastReplicaReplyAt?: string;
            /**
             * The name of the conversation. This can be the name of the user or the name of the group.
             * @example "John Doe"
             */
            conversationName?: string;
            /**
             * The image URL of the conversation. This can be the profile image of the user or the group.
             * @example "https://example.com/image.png"
             */
            conversationImageURL?: string;
            /**
             * The type of conversation.
             * @example "individual"
             */
            conversationType: "individual" | "group";
          }[];
          /**
           * The total number of conversations for this replica.
           * @example 1001
           */
          total: number;
          /**
           * Indicates the request was successful
           * @example true
           */
          success: true;
        },
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/replicas/${replicaUuid}/conversations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves mentions of a replica in a specific conversation, together with context surrounding the mention. This endpoint supports cursor-based pagination. Returns most recent mentions first.
     *
     * @tags Conversations
     * @name ReplicasConversationsMentionsList
     * @summary List mentions in a conversation
     * @request GET:/v1/replicas/{replicaUUID}/conversations/{conversationUUID}/mentions
     * @secure
     */
    replicasConversationsMentionsList: (
      replicaUuid: ReplicaUUIDParameter,
      conversationUuid: string,
      query?: {
        /**
         * The number of items to fetch. A group of messages is counted as 1 item and a placeholder is counted as 1 item.
         * @min 1
         * @max 100
         * @default 20
         * @example 10
         */
        limit?: number;
        /**
         * Only returns results after the given message UUID. Excludes given message UUID.
         * @format uuid
         * @example "40d353f3-1241-449e-9fa6-c798d62c9cb1"
         */
        afterUUID?: string;
        /**
         * Only returns results before the given message UUID. Excludes given message UUID.
         * @format uuid
         * @example "ec46b4db-3f0d-4392-b0f5-9fe327922e8a"
         */
        beforeUUID?: string;
        /**
         * The minimum number of messages to include in the placeholder. Placeholders with less than this number of messages will be expanded into messages.
         * @default 3
         * @example 3
         */
        minimumMessagesInPlaceholder?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Indicates the status of the request */
          success: boolean;
          items: (
            | {
                type: "mention";
                messages: {
                  /**
                   * The UUID of the message.
                   * @format uuid
                   * @example "03db5651-cb61-4bdf-9ef0-89561f7c9c53"
                   */
                  uuid: string;
                  /**
                   * The date and time the message was created.
                   * @format date-time
                   * @example "2024-09-24T09:09:55.66709+00:00"
                   */
                  createdAt: string;
                  /**
                   * The content of the message.
                   * @example "Hello world!"
                   */
                  content: string;
                  /**
                   * The role of the message sender.
                   * @example "user"
                   */
                  role: "user" | "assistant";
                  /**
                   * The name of the message sender, if available.
                   * @example "John Doe"
                   */
                  senderName?: string;
                  /**
                   * The avatar URL of the message sender, if available.
                   * @example "https://example.com/avatar.png"
                   */
                  senderProfileImageURL?: string;
                  /**
                   * The source of the message.
                   * @example "web"
                   */
                  source:
                    | "discord"
                    | "telegram"
                    | "embed"
                    | "web"
                    | "telegram_autopilot";
                  /** The replica unique identifier (UUID) */
                  replicaUUID: ReplicaUUIDParameter;
                }[];
              }
            | {
                type: "placeholder";
                /**
                 * The number of messages collapsed into this placeholder
                 * @example 20
                 */
                count: number;
              }
          )[];
          /**
           * Whether there are more items available beyond the current page
           * @example true
           */
          hasMore: boolean;
        },
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/replicas/${replicaUuid}/conversations/${conversationUuid}/mentions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves messages in a specific conversation with cursor-based pagination. Messages are sorted chronologically from oldest to newest. Use the `beforeUUID` parameter to get older messages and the `afterUUID` parameter to get newer messages. Please note: - When `beforeUUID` is specified, the most recent messages before `beforeUUID` are returned. - When `beforeUUID` and `afterUUID` are both specified, the most recent messages before `beforeUUID` are returned. - When `afterUUID` is specified on its own, the least recent messages after `afterUUID` are returned.
     *
     * @tags Conversations
     * @name ReplicasConversationsMessagesList
     * @summary List messages in a conversation
     * @request GET:/v1/replicas/{replicaUUID}/conversations/{conversationUUID}/messages
     * @secure
     */
    replicasConversationsMessagesList: (
      replicaUuid: ReplicaUUIDParameter,
      conversationUuid: string,
      query?: {
        /**
         * The number of messages to fetch.
         * @min 1
         * @max 100
         * @default 20
         * @example 10
         */
        limit?: number;
        /**
         * Only show messages after given message UUID. Excludes given message UUID.
         * @format uuid
         * @example "40d353f3-1241-449e-9fa6-c798d62c9cb1"
         */
        afterUUID?: string;
        /**
         * Only show messages before given message UUID. Excludes given message UUID.
         * @format uuid
         * @example "ec46b4db-3f0d-4392-b0f5-9fe327922e8a"
         */
        beforeUUID?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Indicates the status of the request */
          success: boolean;
          items: {
            /**
             * The UUID of the message.
             * @format uuid
             * @example "03db5651-cb61-4bdf-9ef0-89561f7c9c53"
             */
            uuid: string;
            /**
             * The date and time the message was created.
             * @format date-time
             * @example "2024-09-24T09:09:55.66709+00:00"
             */
            createdAt: string;
            /**
             * The content of the message.
             * @example "Hello world!"
             */
            content: string;
            /**
             * The role of the message sender.
             * @example "user"
             */
            role: "user" | "assistant";
            /**
             * The name of the message sender, if available.
             * @example "John Doe"
             */
            senderName?: string;
            /**
             * The avatar URL of the message sender, if available.
             * @example "https://example.com/avatar.png"
             */
            senderProfileImageURL?: string;
            /**
             * The source of the message.
             * @example "web"
             */
            source:
              | "discord"
              | "telegram"
              | "embed"
              | "web"
              | "telegram_autopilot";
            /** The replica unique identifier (UUID) */
            replicaUUID: ReplicaUUIDParameter;
          }[];
        },
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/replicas/${replicaUuid}/conversations/${conversationUuid}/messages`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns cumulative conversation count for the last 30 days, up to and including today.
     *
     * @tags Analytics
     * @name ReplicasAnalyticsConversationsHistoricalList
     * @summary Get replica historical conversation analytics
     * @request GET:/v1/replicas/{replicaUUID}/analytics/conversations/historical
     * @secure
     */
    replicasAnalyticsConversationsHistoricalList: (
      replicaUuid: ReplicaUUIDParameter,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Indicates the status of the request */
          success: boolean;
          /**
           * List of daily cumulative conversation counts for the last 30 days. The cutoff for counting conversations towards a specific day is UTC midnight.
           * @example [{"date":"2025-05-01","cumulativeConversations":100},{"date":"2025-05-02","cumulativeConversations":103},{"date":"2025-05-03","cumulativeConversations":108}]
           */
          items: {
            /**
             * The date in YYYY-MM-DD format.
             * @format date
             * @example "2025-05-15"
             */
            date: string;
            /**
             * The cumulative number of conversations up to this date.
             * @min 0
             * @example 127
             */
            cumulativeConversations: number;
          }[];
        },
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/replicas/${replicaUuid}/analytics/conversations/historical`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns interaction counts by source for the replica.
     *
     * @tags Analytics
     * @name ReplicasAnalyticsConversationsSourcesList
     * @summary Get replica source analytics
     * @request GET:/v1/replicas/{replicaUUID}/analytics/conversations/sources
     * @secure
     */
    replicasAnalyticsConversationsSourcesList: (
      replicaUuid: ReplicaUUIDParameter,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Indicates the status of the request */
          success: boolean;
          /**
           * List of conversation counts by source for the replica, as of today.
           * @example [{"source":"telegram","conversations":245},{"source":"discord","conversations":123},{"source":"web","conversations":89}]
           */
          items: {
            /**
             * The source of the conversations.
             * @example "telegram"
             */
            source:
              | "discord"
              | "telegram"
              | "embed"
              | "web"
              | "telegram_autopilot";
            /**
             * The total number of conversations from this source.
             * @min 0
             * @example 245
             */
            conversations: number;
          }[];
        },
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/replicas/${replicaUuid}/analytics/conversations/sources`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description > warn > Deprecated. Use the [Create a knowledge base entry](../operation/operation-post-v1-replicas-parameter-knowledge-base) endpoint instead. Creates a new empty knowledge base entry for a replica. This is the first step in the text-based training process. After creating the entry, you'll receive a knowledgeBaseID that you'll need to use in the next step to add your training content using the Update endpoint. The entry starts with a BLANK status and will be processed automatically once you add content.
     *
     * @tags Training
     * @name ReplicasTrainingCreate
     * @summary Create a knowledge base entry
     * @request POST:/v1/replicas/{replicaUUID}/training
     * @deprecated
     * @secure
     */
    replicasTrainingCreate: (
      replicaUuid: ReplicaUUIDParameter,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Indicates if the knowledge base entry was created successfully */
          success: boolean;
          /**
           * The unique identifier for the newly created knowledge base entry.
           * @example 12345
           */
          knowledgeBaseID: number;
        },
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/replicas/${replicaUuid}/training`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description > warn > Deprecated. Use the [Update knowledge base entry](../operation/operation-patch-v1-replicas-parameter-knowledge-base-parameter) endpoint instead. Updates a knowledge base entry with training content. This is the second step in the training process after creating an entry. You can provide "rawText" which is the content you want your replica to learn from (such as product information, company policies, or specialized knowledge). The system will automatically process this text and make it available for your replica to use when answering questions. The entry status will change to PROCESSING and then to READY once fully processed.
     *
     * @tags Training
     * @name ReplicasTrainingUpdate
     * @summary Update knowledge base entry
     * @request PUT:/v1/replicas/{replicaUUID}/training/{trainingID}
     * @deprecated
     * @secure
     */
    replicasTrainingUpdate: (
      replicaUuid: ReplicaUUIDParameter,
      trainingId: TrainingIDParameter,
      data: {
        /**
         * The text content you want your replica to learn
         * @minLength 1
         * @example "Our company was founded in 2020. We specialize in AI-powered customer service solutions."
         */
        rawText?: string;
        /**
         * Pre-processed text that is ready to be added to the knowledge base. This is typically used when you have already optimized the text format.
         * @minLength 1
         * @example "Our company was founded in 2020. We specialize in AI-powered customer service solutions."
         */
        processedText?: string;
        /**
         * The ID of the vector entry in the database. Its presenceindicates the information has been fully processed and is ready for retrieval.
         * @example "1337"
         */
        vectorEntryId?: string;
        /**
         * Additional information about the knowledge base entry, such as source, tags, or other contextual data (only used when vectorEntryId is present)
         * @example {"source":"company handbook","page":42,"tags":["company info","history"]}
         */
        metadata?: Record<string, any>;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Indicates the status of the request */
          success: boolean;
        },
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/replicas/${replicaUuid}/training/${trainingId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description > warn > Deprecated. Use the [Delete knowledge base entry by ID](../operation/operation-delete-v1-replicas-parameter-knowledge-base-parameter) endpoint instead. Permanently removes a specific knowledge base entry and its associated vector database entry. Use this endpoint when you need to remove outdated or incorrect training data from your replica's knowledge base. This operation cannot be undone, and the entry will no longer be available for retrieval during conversations with your replica. This endpoint handles the complete cleanup process, removing both the database record and any associated vector embeddings.
     *
     * @tags Training
     * @name TrainingDelete
     * @summary Delete knowledge base entry by ID
     * @request DELETE:/v1/training/{trainingID}
     * @deprecated
     * @secure
     */
    trainingDelete: (
      trainingId: TrainingIDParameter,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * Indicates whether the knowledge base entry and its associated vector embeddings were successfully deleted from the system
           * @example true
           */
          success: boolean;
        },
        {
          /** Indicates the status of the request */
          success: boolean;
          /** A text representation of the error */
          error: string;
          /**
           * A unique identifier of the request, useful for reporting
           * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
           */
          request_id: string;
        }
      >({
        path: `/v1/training/${trainingId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description > warn > Deprecated. Use the [Get knowledge base entry by ID](../operation/operation-get-v1-replicas-parameter-knowledge-base-parameter) endpoint instead. Retrieves detailed information about a specific knowledge base entry using its ID. This endpoint returns the complete entry data including its type, status, content, and metadata. You can use this to check the processing status of your training content, view the raw and processed text, and see when it was created and last updated. This is useful for monitoring the progress of your training data as it moves through the processing pipeline.
     *
     * @tags Training
     * @name TrainingDetail
     * @summary Get knowledge base entry by ID
     * @request GET:/v1/training/{trainingID}
     * @deprecated
     * @secure
     */
    trainingDetail: (
      trainingId: TrainingIDParameter,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * The unique identifier for this knowledge base entry. Use this ID in subsequent API calls to update or delete this entry.
           * @example 12345
           */
          id: number;
          /**
           * The unique identifier of the replica that owns this knowledge base entry. This links the training data to a specific replica.
           * @format uuid
           * @example "03db5651-cb61-4bdf-9ef0-89561f7c9c53"
           */
          replica_uuid: string | null;
          /**
           * The type of knowledge base entry, indicating how the content was added and how it should be processed.
           * @example "file_upload"
           */
          type: "file_upload" | "url" | "training_history" | "text";
          /**
           * For file_upload entries, the original filename that was uploaded. This helps identify the source of the content.
           * @example "company_handbook.pdf"
           */
          filename: string | null;
          /**
           * For url entries, the original url of the content.
           * @example "http://example.com"
           */
          url?: string;
          /**
           * The current stage in the processing pipeline. Use this to track progress and identify any issues with processing.
           * @example "READY"
           */
          status:
            | "AWAITING_UPLOAD"
            | "SUPABASE_ONLY"
            | "PROCESSING"
            | "READY"
            | "SYNC_ERROR"
            | "ERR_FILE_PROCESSING"
            | "ERR_TEXT_PROCESSING"
            | "ERR_TEXT_TO_VECTOR"
            | "BLANK";
          /**
           * The original, unmodified text content that was submitted for training. May be truncated for large entries.
           * @example "Our company was founded in 2020. We specialize in AI-powered customer service solutions. Our business hours are Monday to Friday, 9 AM to 5 PM Eastern Time."
           */
          raw_text: string | null;
          /**
           * The optimized version of the text after system processing. This is what gets converted to vectors for retrieval.
           * @example "Our company was founded in 2020. We specialize in AI-powered customer service solutions. Our business hours are Monday to Friday, 9 AM to 5 PM Eastern Time."
           */
          processed_text: string | null;
          /**
           * ISO 8601 timestamp when this knowledge base entry was first created.
           * @format date-time
           * @example "2025-04-15T08:11:00.093761+00:00"
           */
          created_at: string;
          /**
           * ISO 8601 timestamp when this knowledge base entry was last modified. Use this to track when processing completed.
           * @format date-time
           * @example "2025-04-15T08:15:05.299349+00:00"
           */
          updated_at: string;
          /**
           * Title for this knowledge base entry. Helps identify the content in listings.
           * @example "Company Information"
           */
          title: string | null;
          /**
           * Optional description providing more details about this knowledge base entry.
           * @example "Basic company details including founding date, business focus, and operating hours."
           */
          description: string | null;
        },
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/training/${trainingId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description > warn > Deprecated. Use the [List all knowledge base entries](../operation/operation-get-v1-replicas-parameter-knowledge-base) endpoint instead. Returns a list of all knowledge base entries belonging to your organization. This endpoint allows you to view all your training data in one place, with optional filtering by status or type. You can use this to monitor the overall state of your knowledge base, check which entries are still processing, and identify any that might have encountered errors. The response includes detailed information about each entry including its content, status, and metadata.
     *
     * @tags Training
     * @name TrainingList
     * @summary List all knowledge base entries
     * @request GET:/v1/training
     * @deprecated
     * @secure
     */
    trainingList: (
      query?: {
        /**
         * Filter knowledge base entries by their processing status. Use this to find entries in specific states like READY or those with errors.
         * @example "READY"
         */
        status?:
          | "AWAITING_UPLOAD"
          | "SUPABASE_ONLY"
          | "PROCESSING"
          | "READY"
          | "SYNC_ERROR"
          | "ERR_FILE_PROCESSING"
          | "ERR_TEXT_PROCESSING"
          | "ERR_TEXT_TO_VECTOR"
          | "BLANK";
        /**
         * Filter knowledge base entries by their content type. Use this to find specific types of training data like text or file uploads.
         * @example "file_upload"
         */
        type?: "file_upload" | "url" | "training_history" | "text";
        /**
         * Page number for pagination. Use this to navigate through large result sets.
         * @default "1"
         * @pattern ^\d+$
         * @example "1"
         */
        page?: string;
        /**
         * Maximum number of entries to return per page (up to 100). Use this to control result set size.
         * @default "100"
         * @pattern ^\d+$
         * @example "50"
         */
        limit?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * Indicates if the list operation was successful
           * @example true
           */
          success: boolean;
          /**
           * Array of knowledge base entries matching your query parameters
           * @example [{"id":12345,"replica_uuid":"03db5651-cb61-4bdf-9ef0-89561f7c9c53","type":"text","filename":null,"status":"READY","raw_text":"Our company was founded in 2020...","processed_text":"Our company was founded in 2020...","created_at":"2025-04-15T08:11:00.093761+00:00","updated_at":"2025-04-15T08:11:05.299349+00:00","title":"Company Information","description":"Basic company details and policies"}]
           */
          items: {
            /**
             * The unique identifier for this knowledge base entry. Use this ID in subsequent API calls to update or delete this entry.
             * @example 12345
             */
            id: number;
            /**
             * The unique identifier of the replica that owns this knowledge base entry. This links the training data to a specific replica.
             * @format uuid
             * @example "03db5651-cb61-4bdf-9ef0-89561f7c9c53"
             */
            replica_uuid: string | null;
            /**
             * The type of knowledge base entry, indicating how the content was added and how it should be processed.
             * @example "file_upload"
             */
            type: "file_upload" | "url" | "training_history" | "text";
            /**
             * For file_upload entries, the original filename that was uploaded. This helps identify the source of the content.
             * @example "company_handbook.pdf"
             */
            filename: string | null;
            /**
             * For url entries, the original url of the content.
             * @example "http://example.com"
             */
            url?: string;
            /**
             * The current stage in the processing pipeline. Use this to track progress and identify any issues with processing.
             * @example "READY"
             */
            status:
              | "AWAITING_UPLOAD"
              | "SUPABASE_ONLY"
              | "PROCESSING"
              | "READY"
              | "SYNC_ERROR"
              | "ERR_FILE_PROCESSING"
              | "ERR_TEXT_PROCESSING"
              | "ERR_TEXT_TO_VECTOR"
              | "BLANK";
            /**
             * The original, unmodified text content that was submitted for training. May be truncated for large entries.
             * @example "Our company was founded in 2020. We specialize in AI-powered customer service solutions. Our business hours are Monday to Friday, 9 AM to 5 PM Eastern Time."
             */
            raw_text: string | null;
            /**
             * The optimized version of the text after system processing. This is what gets converted to vectors for retrieval.
             * @example "Our company was founded in 2020. We specialize in AI-powered customer service solutions. Our business hours are Monday to Friday, 9 AM to 5 PM Eastern Time."
             */
            processed_text: string | null;
            /**
             * ISO 8601 timestamp when this knowledge base entry was first created.
             * @format date-time
             * @example "2025-04-15T08:11:00.093761+00:00"
             */
            created_at: string;
            /**
             * ISO 8601 timestamp when this knowledge base entry was last modified. Use this to track when processing completed.
             * @format date-time
             * @example "2025-04-15T08:15:05.299349+00:00"
             */
            updated_at: string;
            /**
             * Title for this knowledge base entry. Helps identify the content in listings.
             * @example "Company Information"
             */
            title: string | null;
            /**
             * Optional description providing more details about this knowledge base entry.
             * @example "Basic company details including founding date, business focus, and operating hours."
             */
            description: string | null;
          }[];
        },
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/training`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description > warn > Deprecated. Use the [Create a knowledge base entry](../operation/operation-post-v1-replicas-parameter-knowledge-base) endpoint instead. Creates a signed URL for uploading a file to the knowledge base. This is the first step in the file-based training process. The response includes both a signedURL where you can upload your file and a knowledgeBaseID for tracking. After receiving these, use a PUT request to the signedURL to upload your file (with Content-Type: application/octet-stream). The system will automatically extract text from your file, process it, and make it available for your replica to use. Supported file types include PDF, DOCX, and other text-based formats. Files up to 50MB are supported.
     *
     * @tags Training
     * @name ReplicasTrainingFilesUploadList
     * @summary Generate a signed URL for file upload
     * @request GET:/v1/replicas/{replicaUUID}/training/files/upload
     * @deprecated
     * @secure
     */
    replicasTrainingFilesUploadList: (
      replicaUuid: ReplicaUUIDParameter,
      query: {
        /**
         * The name of the file you want to upload to the knowledge base. This helps identify the file in your knowledge base. Files up to 50MB are supported.
         * @minLength 1
         * @example "company_handbook.pdf"
         */
        filename: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Indicates if the signed URL was generated successfully */
          success: boolean;
          /**
           * The temporary URL where you should upload your file using a PUT request with Content-Type: application/octet-stream
           * @example "https://storage.googleapis.com/replica_files/..."
           */
          signedURL?: string;
          /**
           * The unique identifier for the newly created knowledge base entry. Use this to track the processing status of your file.
           * @example 12345
           */
          knowledgeBaseID?: number;
        },
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/replicas/${replicaUuid}/training/files/upload`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new knowledge base entry for a replica based on text, file, URL, or Youtube Videos. For YouTube playlists, the system will automatically create separate entries for each video in the playlist.
     *
     * @tags Knowledge base
     * @name ReplicasKnowledgeBaseCreate
     * @summary Create a knowledge base entry
     * @request POST:/v1/replicas/{replicaUUID}/knowledge-base
     * @secure
     */
    replicasKnowledgeBaseCreate: (
      replicaUuid: ReplicaUUIDParameter,
      data: {
        /**
         * Title for this knowledge base entry. Helps identify the content in listings.
         * @example "Company information"
         */
        title?: string;
        /**
         * A public URL to an HTML page to ingest into the knowledge base.
         * The URL must be publicly accessible without authentication. Google domains(e.g. www.google.com, docs.google.com) are not allowed.
         * Only the rendered text on the web page is used for training, embedded media (image, video, audio) is not used. For training using video files, please provide YouTube links in one of the following formats:
         * https://www.youtube.com/watch?v=VIDEO_ID
         * https://www.youtube.com/shorts/SHORT_VIDEO_ID
         * https://www.youtube.com/playlist?list=PLAYLIST_ID
         * @format uri
         * @pattern https?:\/\/[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]+\b([-a-zA-Z0-9()@:%_+.~#?&\/=]*)
         */
        url?: string;
        /**
         * Whether to allow automatic content updates from the URL, handled by the system.
         * @default false
         */
        autoRefresh?: boolean;
        /**
         * The text content you want your replica to learn
         * @minLength 1
         * @example "Our company was founded in 2020. We specialize in AI-powered customer service solutions."
         */
        text?: string;
        /**
         * The name of the file that you intend to upload. Supported file types:
         * - Documents: .doc, .docx, .rtf, .pdf, .pdfa
         * - Spreadsheets and Tabular Data: .csv, .tsv, .xls, .xlsx, .xlsm, .xlsb, .ods, .dta, .sas7bdat, .xpt
         * - Presentations: .ppt, .pptx
         * - Text Files: .txt, .md, .htm, .html, .css, .js, .xml
         * - Data Text Files: .json, .yml, .yaml
         * - E-books: .epub
         * - Images: .png, .jpg, .jpeg, .webp, .heic, .heif, .tiff, .bmp
         * - Audio Files: .mp3, .wav, .aac, .ogg, .flac
         * - Video Files: .mp4, .mpeg, .mov, .avi, .mpg, .webm, .mkv (Maximum duration: 90 minutes)
         * @example "example.txt"
         */
        filename?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * Indicates if the knowledge base entry was created successfully
           * @example true
           */
          success: boolean;
          /**
           * Array of results for each knowledge base entry created
           * @example []
           */
          results: (
            | {
                /**
                 * The type of knowledge base entry
                 * @example "file"
                 */
                type: "file" | "text" | "website" | "youtube";
                /** Indicates that the knowledge base entry creation has been enqueued for processing */
                enqueued: true;
                /**
                 * The unique identifier for the newly created knowledge base entry.
                 * @example 12345
                 */
                knowledgeBaseID: number;
                /**
                 * The temporary URL where you should upload your file using a PUT request
                 * @example "https://xotqxvmmnunwfsaemqfy.supabase.co/storage/v1/object/upload/sign/replica_files/..."
                 */
                signedURL?: string;
              }
            | {
                /**
                 * The type of knowledge base entry
                 * @example "file"
                 */
                type: "file" | "text" | "website" | "youtube";
                /** Indicates that the knowledge base entry creation has not been enqueued due to an error */
                enqueued: false;
                /** Error message if the knowledge base entry creation failed */
                error: string;
              }
          )[];
        },
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/replicas/${replicaUuid}/knowledge-base`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a list of all knowledge base entries belonging to a replica. This endpoint allows you to view all your training data in one place, with optional filtering by status or type. You can use this to monitor the overall state of a replica's knowledge base, check which entries are still processing, and identify any that might have encountered errors. The response includes detailed information about each entry including its content, status, and metadata.
     *
     * @tags Knowledge base
     * @name ReplicasKnowledgeBaseList
     * @summary List all knowledge base entries
     * @request GET:/v1/replicas/{replicaUUID}/knowledge-base
     */
    replicasKnowledgeBaseList: (
      replicaUuid: ReplicaUUIDParameter,
      query?: {
        /** Filter knowledge base entries by comma separated list of their processing statuses. Use this to find entries in specific states like `NEW` or `READY`. */
        status?: any[] | null;
        /** Filter knowledge base entries by their content type. Use this to find specific types of training data like text or file uploads. */
        type?: any[] | null;
        /**
         * Filter knowledge base entries by their title, filename, or URL.
         * @minLength 3
         * @example "Company Policies"
         */
        search?: string;
        /** Filter knowledge base entries that have encountered errors during processing. */
        hasError?: "true" | "false";
        /**
         * Page number for pagination. Use this to navigate through large result sets.
         * @exclusiveMin 0
         * @default 1
         * @example 1
         */
        page?: number;
        /**
         * Maximum number of entries to return per page (up to 100). Use this to control result set size. A value of zero can be used to check the total number of items without returning any items.
         * @min 0
         * @max 100
         * @default 24
         * @example 24
         */
        pageSize?: number | null;
        /**
         * Sort criteria.
         * @default "createdAt"
         * @example "createdAt"
         */
        sortBy?: "createdAt";
        /**
         * The order of the sort.
         * @default "desc"
         * @example "asc"
         */
        sortOrder?: "asc" | "desc";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * Indicates if the list operation was successful
           * @example true
           */
          success: boolean;
          /**
           * Array of knowledge base entries matching your query parameters
           * @example [{"id":12345,"replicaUUID":"03db5651-cb61-4bdf-9ef0-89561f7c9c53","type":"text","status":"READY","createdAt":"2025-04-15T08:11:00.093761+00:00","updatedAt":"2025-04-15T08:11:05.299349+00:00","title":"Company information","summary":"Basic company details and policies"}]
           */
          items: {
            /**
             * The unique identifier for this knowledge base entry.
             * @example 12345
             */
            id: number;
            /**
             * The unique identifier of the replica associated to this knowledge base entry.
             * @format uuid
             * @example "03db5651-cb61-4bdf-9ef0-89561f7c9c53"
             */
            replicaUUID?: string;
            /** The type of knowledge base entry, indicating how the content was added and how it should be processed. */
            type: "file" | "text" | "website" | "youtube";
            /**
             * The URL provided during entry creation, if applicable.
             * @example "http://example.com"
             */
            url?: string;
            /** The current stage in the processing pipeline. Use this to track progress and identify any issues with processing. */
            status:
              | "NEW"
              | "FILE_UPLOADED"
              | "RAW_TEXT"
              | "PROCESSED_TEXT"
              | "VECTOR_CREATED"
              | "READY"
              | "UNPROCESSABLE";
            /**
             * The ISO 8601 timestamp indicating when this knowledge base entry was created.
             * @format date-time
             * @example "2025-04-15T08:11:00.093761+00:00"
             */
            createdAt: string;
            /**
             * The ISO 8601 timestamp indicating when this knowledge base entry was last updated. Useful for tracking the completion time of processing.
             * @format date-time
             * @example "2025-04-15T08:15:05.299349+00:00"
             */
            updatedAt: string;
            /**
             * Title for the knowledge base entry, to help identify the knowledge base entry in listings. This field is not used in processing or internal logic.
             * @example "Company information"
             */
            title?: string;
            /**
             * Auto-generated title for the knowledge base entry based on the content.
             * @example "Company information and business hours"
             */
            generatedTitle?: string;
            /**
             * A concise 1-2 sentence summary of rawText, generated by the system.
             * @example "Basic company details including founding date, business focus, and operating hours."
             */
            summary?: string;
            /** The language of the knowledge base entry content. Uses ISO 639-1 language codes for language-specific processing and retrieval. */
            language?: KnowledgeBaseLanguage;
            /**
             * Website content related to the knowledge base entry
             * @example {"url":"https://example.com","links":["https://example.com","https://another-example.com"],"title":"Example Website Title","description":"Example Website Description","text":"This is the main text content extracted from the website.","screenshotURL":"https://example.com/screenshot.webp"}
             */
            website?: {
              /**
               * URL of the website related to the knowledge base entry.
               * @format uri
               * @example "https://example.com"
               */
              url: string;
              /** Links related to the knowledge base entry. */
              links?: string[];
              /**
               * Title of the website.
               * @example "Example Website Title"
               */
              title?: string;
              /**
               * Text content of the website.
               * @example "This is the main text content extracted from the website."
               */
              text?: string;
              /**
               * A brief description of the website content based on extracted html.
               * @example "This website provides information about our company and services."
               */
              description?: string;
              /**
               * Whether to allow automatic content updates from the URL, handled by the system.
               * @default false
               */
              autoRefresh?: boolean;
              /** Screenshot URL of the knowledge base entry. */
              screenshotURL?: string;
            };
            /**
             * YouTube content related to the knowledge base entry
             * @example {"url":"https://www.youtube.com/watch?v=VIDEO_ID","title":"Example YouTube Video Title","description":"This is a description of the YouTube video content.","thumbnailURL":"https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg","summary":"A concise summary of the key points covered in the video.","transcription":"This is the complete transcript of the video content...","visualTranscription":"Visual elements and scenes described in text format"}
             */
            youtube?: {
              /**
               * URL of the YouTube video related to the knowledge base entry
               * @format uri
               * @example "https://www.youtube.com/watch?v=VIDEO_ID"
               */
              url: string;
              /** Title of the YouTube video */
              title?: string;
              /** Description of the YouTube video */
              description?: string;
              /**
               * URL of the YouTube video thumbnail
               * @format uri
               * @example "https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg"
               */
              thumbnailURL?: string;
              /**
               * A concise 1-2 sentence summary of rawText.
               * @example "Basic company details including founding date, business focus, and operating hours."
               */
              summary?: string;
              /**
               * Full transcript of the YouTube video.
               * @example "This is the complete transcript of the video content..."
               */
              transcription?: string;
              /**
               * Visual transcription of the YouTube video
               * @example "Visual elements and scenes described in text format"
               */
              visualTranscription?: string;
              /**
               * ID of the YouTube playlist associated with this knowledge base entry
               * @example "PL1234567890"
               */
              playlistID?: string;
            };
            /**
             * File content related to the knowledge base entry
             * @example {"name":"company_handbook.pdf","size":204800,"mimeType":"application/epub+zip","screenshotURL":"https://example.com/screenshot.webp","downloadURL":"https://example.com/download/company_handbook.pdf?signed=..."}
             */
            file?: {
              /**
               * Name of the file associated with the knowledge base entry
               * @example "company_handbook.pdf"
               */
              name: string;
              /**
               * Size of the file in bytes
               * @example 204800
               */
              size?: number | null;
              /**
               * MIME type of the file
               * @example "application/epub+zip"
               */
              mimeType?:
                | "application/epub+zip"
                | "application/json"
                | "application/msword"
                | "application/pdf"
                | "application/rtf"
                | "application/vnd.ms-excel"
                | "application/vnd.ms-excel.sheet.binary.macroenabled.12"
                | "application/vnd.ms-excel.sheet.macroEnabled.12"
                | "application/vnd.ms-powerpoint"
                | "application/vnd.oasis.opendocument.spreadsheet"
                | "application/vnd.openxmlformats-officedocument.presentationml.presentation"
                | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                | "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                | "application/x-sas-data"
                | "application/x-sas-xport"
                | "application/x-stata"
                | "application/x-stata-dta"
                | "application/yaml"
                | "audio/aac"
                | "audio/flac"
                | "audio/mp3"
                | "audio/mpeg"
                | "audio/ogg"
                | "audio/wav"
                | "image/bmp"
                | "image/heic"
                | "image/heif"
                | "image/jpeg"
                | "image/png"
                | "image/tif"
                | "image/tiff"
                | "image/webp"
                | "text/css"
                | "text/csv"
                | "text/html"
                | "text/javascript"
                | "text/markdown"
                | "text/plain"
                | "text/tab-separated-values"
                | "text/xml"
                | "video/avi"
                | "video/mov"
                | "video/mp4"
                | "video/mpeg"
                | "video/mpg"
                | "video/webm"
                | "video/x-matroska";
              /** Screenshot URL of the knowledge base entry. */
              screenshotURL?: string;
              /**
               * Temporary signed URL for downloading the file
               * @format uri
               * @example "https://example.com/download/company_handbook.pdf?signed=..."
               */
              downloadURL?: string;
            };
            /**
             * Error information related to the knowledge base entry
             * @example {"fingerprint":"12345","message":"Failed to process the entry due to invalid format."}
             */
            error?: {
              /**
               * A unique identifier of the error, useful for reporting
               * @example "12345"
               */
              fingerprint?: string;
              /**
               * Error message associated with this knowledge base entry
               * @example "Failed to process the entry due to invalid format."
               */
              message?: string;
            };
          }[];
          /**
           * The total number of knowledge base entries.
           * @example 100
           */
          total: number;
        },
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/replicas/${replicaUuid}/knowledge-base`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a knowledge base entry with training content. This is the second step in the training process after creating an entry. You can provide "rawText" which is the content you want your replica to learn from (such as product information, company policies, or specialized knowledge). The system will automatically process this text and make it available for your replica to use when answering questions. The entry status will change to PROCESSING and then to READY once fully processed.
     *
     * @tags Knowledge base
     * @name ReplicasKnowledgeBasePartialUpdate
     * @summary Update knowledge base entry
     * @request PATCH:/v1/replicas/{replicaUUID}/knowledge-base/{knowledgeBaseID}
     * @secure
     */
    replicasKnowledgeBasePartialUpdate: (
      knowledgeBaseId: KnowledgeBaseIDParameter,
      replicaUuid: ReplicaUUIDParameter,
      data: {
        /**
         * The initial text content you want your replica to learn. This is the information you provide that will be processed and optimized for the knowledge base.
         * @minLength 1
         * @example "Our company was founded in 2020. We specialize in AI-powered customer service solutions."
         */
        rawText?: string;
        /**
         * Generated facts related to the knowledge base entry.
         * @example ["The company was founded in 2020.","We specialize in AI-powered customer service solutions."]
         */
        generatedFacts?: string[];
        /**
         * Segments of textual content that have been extracted from the original sources and split into smaller, manageable pieces.
         * @example [{"content":"First part of the document content.","chunkIndex":0,"chunkTokens":7,"chunkChars":35},{"content":"Second part of the document content.","chunkIndex":1,"chunkTokens":7,"chunkChars":36}]
         */
        rawTextChunks?: {
          content?: string;
          chunkIndex?: number;
          chunkTokens?: number;
          chunkChars?: number;
        }[];
        /**
         * Title for this knowledge base entry. Helps identify the content in listings.
         * @example "Company information"
         */
        title?: string;
        /**
         * Auto-generated title for the knowledge base entry based on the content.
         * @example "Company information and Business Hours"
         */
        generatedTitle?: string;
        /**
         * A concise 1-2 sentence summary of rawText.
         * @example "Basic company details including founding date, business focus, and operating hours."
         */
        summary?: string;
        /** The language of the knowledge base entry content. Uses ISO 639-1 language codes for language-specific processing and retrieval. */
        language?: KnowledgeBaseLanguage;
        /**
         * Website content related to the knowledge base entry
         * @example {"url":"https://example.com","links":["https://example.com","https://another-example.com"],"title":"Example Website Title","description":"Example Website Description","text":"This is the main text content extracted from the website.","screenshot":"data:image/png;base64,..."}
         */
        website?: {
          /**
           * URL of the website related to the knowledge base entry.
           * @format uri
           * @example "https://example.com"
           */
          url?: string;
          /** Links related to the knowledge base entry. */
          links?: string[];
          /**
           * Title of the website.
           * @example "Example Website Title"
           */
          title?: string;
          /**
           * Text content of the website.
           * @example "This is the main text content extracted from the website."
           */
          text?: string;
          /**
           * A brief description of the website content based on extracted html.
           * @example "This website provides information about our company and services."
           */
          description?: string;
          /**
           * Whether to allow automatic content updates from the URL, handled by the system.
           * @default false
           */
          autoRefresh?: boolean;
          /** Screenshot URL of the knowledge base entry. */
          screenshotURL?: string;
          /** Screenshot in Base64 format of the knowledge base entry */
          screenshot?: string;
        };
        /**
         * YouTube content related to the knowledge base entry
         * @example {"url":"https://www.youtube.com/watch?v=VIDEO_ID","title":"Example YouTube Video Title","description":"This is a description of the YouTube video content.","thumbnailURL":"https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg","summary":"A concise summary of the key points covered in the video.","transcription":"This is the complete transcript of the video content...","visualTranscription":"Visual elements and scenes described in text format"}
         */
        youtube?: {
          /**
           * URL of the YouTube video related to the knowledge base entry
           * @format uri
           * @example "https://www.youtube.com/watch?v=VIDEO_ID"
           */
          url?: string;
          /** Title of the YouTube video */
          title?: string;
          /** Description of the YouTube video */
          description?: string;
          /**
           * URL of the YouTube video thumbnail
           * @format uri
           * @example "https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg"
           */
          thumbnailURL?: string;
          /**
           * A concise 1-2 sentence summary of rawText.
           * @example "Basic company details including founding date, business focus, and operating hours."
           */
          summary?: string;
          /**
           * Full transcript of the YouTube video.
           * @example "This is the complete transcript of the video content..."
           */
          transcription?: string;
          /**
           * Visual transcription of the YouTube video
           * @example "Visual elements and scenes described in text format"
           */
          visualTranscription?: string;
        };
        /**
         * File content related to the knowledge base entry
         * @example {"name":"company_handbook.pdf","size":204800,"mimeType":"application/epub+zip","screenshot":"data:image/png;base64,..."}
         */
        file?: {
          /**
           * Name of the file associated with the knowledge base entry
           * @example "company_handbook.pdf"
           */
          name?: string;
          /**
           * Size of the file in bytes
           * @example 204800
           */
          size?: number | null;
          /**
           * MIME type of the file
           * @example "application/epub+zip"
           */
          mimeType?:
            | "application/epub+zip"
            | "application/json"
            | "application/msword"
            | "application/pdf"
            | "application/rtf"
            | "application/vnd.ms-excel"
            | "application/vnd.ms-excel.sheet.binary.macroenabled.12"
            | "application/vnd.ms-excel.sheet.macroEnabled.12"
            | "application/vnd.ms-powerpoint"
            | "application/vnd.oasis.opendocument.spreadsheet"
            | "application/vnd.openxmlformats-officedocument.presentationml.presentation"
            | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            | "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            | "application/x-sas-data"
            | "application/x-sas-xport"
            | "application/x-stata"
            | "application/x-stata-dta"
            | "application/yaml"
            | "audio/aac"
            | "audio/flac"
            | "audio/mp3"
            | "audio/mpeg"
            | "audio/ogg"
            | "audio/wav"
            | "image/bmp"
            | "image/heic"
            | "image/heif"
            | "image/jpeg"
            | "image/png"
            | "image/tif"
            | "image/tiff"
            | "image/webp"
            | "text/css"
            | "text/csv"
            | "text/html"
            | "text/javascript"
            | "text/markdown"
            | "text/plain"
            | "text/tab-separated-values"
            | "text/xml"
            | "video/avi"
            | "video/mov"
            | "video/mp4"
            | "video/mpeg"
            | "video/mpg"
            | "video/webm"
            | "video/x-matroska";
          /** Screenshot in Base64 format of the knowledge base entry */
          screenshot?: string;
        };
        /**
         * Error information related to the knowledge base entry
         * @example {"fingerprint":"12345","message":"Failed to process the entry due to invalid format."}
         */
        error?: {
          /**
           * A unique identifier of the error, useful for reporting
           * @example "12345"
           */
          fingerprint?: string;
          /**
           * Error message associated with this knowledge base entry
           * @example "Failed to process the entry due to invalid format."
           */
          message: string;
        };
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Indicates if the knowledge base update was successful */
          success: boolean;
        },
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/replicas/${replicaUuid}/knowledge-base/${knowledgeBaseId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Permanently removes a specific knowledge base entry and its associated vector database entry. Use this endpoint when you need to remove outdated or incorrect training data from your replica's knowledge base. This operation cannot be undone, and the entry will no longer be available for retrieval during conversations with your replica. In most cases, the deletion is completed immediately. However, in some scenarios, part of the deletion process may be delayed. This means that while the request has been accepted and the deletion process has started, some associated data may remain temporarily available and will be removed within 24 hours.
     *
     * @tags Knowledge base
     * @name ReplicasKnowledgeBaseDelete
     * @summary Delete knowledge base entry by ID
     * @request DELETE:/v1/replicas/{replicaUUID}/knowledge-base/{knowledgeBaseID}
     * @secure
     */
    replicasKnowledgeBaseDelete: (
      knowledgeBaseId: KnowledgeBaseIDParameter,
      replicaUuid: ReplicaUUIDParameter,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Indicates the status of the request */
          success: boolean;
        },
        {
          /** Indicates the status of the request */
          success: boolean;
          /** A text representation of the error */
          error: string;
          /**
           * A unique identifier of the request, useful for reporting
           * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
           */
          request_id: string;
        }
      >({
        path: `/v1/replicas/${replicaUuid}/knowledge-base/${knowledgeBaseId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves detailed information about a specific knowledge base entry using its ID. This endpoint returns the complete entry data including its type, status, content, and metadata. You can use this to check the processing status of your training content, view the raw and processed text, and see when it was created and last updated. This is useful for monitoring the progress of your training data as it moves through the processing pipeline.
     *
     * @tags Knowledge base
     * @name ReplicasKnowledgeBaseDetail
     * @summary Get knowledge base entry by ID
     * @request GET:/v1/replicas/{replicaUUID}/knowledge-base/{knowledgeBaseID}
     * @secure
     */
    replicasKnowledgeBaseDetail: (
      knowledgeBaseId: KnowledgeBaseIDParameter,
      replicaUuid: ReplicaUUIDParameter,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * The unique identifier for this knowledge base entry.
           * @example 12345
           */
          id: number;
          /**
           * The unique identifier of the replica associated to this knowledge base entry.
           * @format uuid
           * @example "03db5651-cb61-4bdf-9ef0-89561f7c9c53"
           */
          replicaUUID?: string;
          /** The type of knowledge base entry, indicating how the content was added and how it should be processed. */
          type: "file" | "text" | "website" | "youtube";
          /**
           * The URL provided during entry creation, if applicable.
           * @example "http://example.com"
           */
          url?: string;
          /** The current stage in the processing pipeline. Use this to track progress and identify any issues with processing. */
          status:
            | "NEW"
            | "FILE_UPLOADED"
            | "RAW_TEXT"
            | "PROCESSED_TEXT"
            | "VECTOR_CREATED"
            | "READY"
            | "UNPROCESSABLE";
          /**
           * The ISO 8601 timestamp indicating when this knowledge base entry was created.
           * @format date-time
           * @example "2025-04-15T08:11:00.093761+00:00"
           */
          createdAt: string;
          /**
           * The ISO 8601 timestamp indicating when this knowledge base entry was last updated. Useful for tracking the completion time of processing.
           * @format date-time
           * @example "2025-04-15T08:15:05.299349+00:00"
           */
          updatedAt: string;
          /**
           * Title for the knowledge base entry, to help identify the knowledge base entry in listings. This field is not used in processing or internal logic.
           * @example "Company information"
           */
          title?: string;
          /**
           * Auto-generated title for the knowledge base entry based on the content.
           * @example "Company information and business hours"
           */
          generatedTitle?: string;
          /**
           * A concise 1-2 sentence summary of rawText, generated by the system.
           * @example "Basic company details including founding date, business focus, and operating hours."
           */
          summary?: string;
          /** The language of the knowledge base entry content. Uses ISO 639-1 language codes for language-specific processing and retrieval. */
          language?: KnowledgeBaseLanguage;
          /**
           * Website content related to the knowledge base entry
           * @example {"url":"https://example.com","links":["https://example.com","https://another-example.com"],"title":"Example Website Title","description":"Example Website Description","text":"This is the main text content extracted from the website.","screenshotURL":"https://example.com/screenshot.webp"}
           */
          website?: {
            /**
             * URL of the website related to the knowledge base entry.
             * @format uri
             * @example "https://example.com"
             */
            url: string;
            /** Links related to the knowledge base entry. */
            links?: string[];
            /**
             * Title of the website.
             * @example "Example Website Title"
             */
            title?: string;
            /**
             * Text content of the website.
             * @example "This is the main text content extracted from the website."
             */
            text?: string;
            /**
             * A brief description of the website content based on extracted html.
             * @example "This website provides information about our company and services."
             */
            description?: string;
            /**
             * Whether to allow automatic content updates from the URL, handled by the system.
             * @default false
             */
            autoRefresh?: boolean;
            /** Screenshot URL of the knowledge base entry. */
            screenshotURL?: string;
          };
          /**
           * YouTube content related to the knowledge base entry
           * @example {"url":"https://www.youtube.com/watch?v=VIDEO_ID","title":"Example YouTube Video Title","description":"This is a description of the YouTube video content.","thumbnailURL":"https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg","summary":"A concise summary of the key points covered in the video.","transcription":"This is the complete transcript of the video content...","visualTranscription":"Visual elements and scenes described in text format"}
           */
          youtube?: {
            /**
             * URL of the YouTube video related to the knowledge base entry
             * @format uri
             * @example "https://www.youtube.com/watch?v=VIDEO_ID"
             */
            url: string;
            /** Title of the YouTube video */
            title?: string;
            /** Description of the YouTube video */
            description?: string;
            /**
             * URL of the YouTube video thumbnail
             * @format uri
             * @example "https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg"
             */
            thumbnailURL?: string;
            /**
             * A concise 1-2 sentence summary of rawText.
             * @example "Basic company details including founding date, business focus, and operating hours."
             */
            summary?: string;
            /**
             * Full transcript of the YouTube video.
             * @example "This is the complete transcript of the video content..."
             */
            transcription?: string;
            /**
             * Visual transcription of the YouTube video
             * @example "Visual elements and scenes described in text format"
             */
            visualTranscription?: string;
            /**
             * ID of the YouTube playlist associated with this knowledge base entry
             * @example "PL1234567890"
             */
            playlistID?: string;
          };
          /**
           * File content related to the knowledge base entry
           * @example {"name":"company_handbook.pdf","size":204800,"mimeType":"application/epub+zip","screenshotURL":"https://example.com/screenshot.webp","downloadURL":"https://example.com/download/company_handbook.pdf?signed=..."}
           */
          file?: {
            /**
             * Name of the file associated with the knowledge base entry
             * @example "company_handbook.pdf"
             */
            name: string;
            /**
             * Size of the file in bytes
             * @example 204800
             */
            size?: number | null;
            /**
             * MIME type of the file
             * @example "application/epub+zip"
             */
            mimeType?:
              | "application/epub+zip"
              | "application/json"
              | "application/msword"
              | "application/pdf"
              | "application/rtf"
              | "application/vnd.ms-excel"
              | "application/vnd.ms-excel.sheet.binary.macroenabled.12"
              | "application/vnd.ms-excel.sheet.macroEnabled.12"
              | "application/vnd.ms-powerpoint"
              | "application/vnd.oasis.opendocument.spreadsheet"
              | "application/vnd.openxmlformats-officedocument.presentationml.presentation"
              | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
              | "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              | "application/x-sas-data"
              | "application/x-sas-xport"
              | "application/x-stata"
              | "application/x-stata-dta"
              | "application/yaml"
              | "audio/aac"
              | "audio/flac"
              | "audio/mp3"
              | "audio/mpeg"
              | "audio/ogg"
              | "audio/wav"
              | "image/bmp"
              | "image/heic"
              | "image/heif"
              | "image/jpeg"
              | "image/png"
              | "image/tif"
              | "image/tiff"
              | "image/webp"
              | "text/css"
              | "text/csv"
              | "text/html"
              | "text/javascript"
              | "text/markdown"
              | "text/plain"
              | "text/tab-separated-values"
              | "text/xml"
              | "video/avi"
              | "video/mov"
              | "video/mp4"
              | "video/mpeg"
              | "video/mpg"
              | "video/webm"
              | "video/x-matroska";
            /** Screenshot URL of the knowledge base entry. */
            screenshotURL?: string;
            /**
             * Temporary signed URL for downloading the file
             * @format uri
             * @example "https://example.com/download/company_handbook.pdf?signed=..."
             */
            downloadURL?: string;
          };
          /**
           * Error information related to the knowledge base entry
           * @example {"fingerprint":"12345","message":"Failed to process the entry due to invalid format."}
           */
          error?: {
            /**
             * A unique identifier of the error, useful for reporting
             * @example "12345"
             */
            fingerprint?: string;
            /**
             * Error message associated with this knowledge base entry
             * @example "Failed to process the entry due to invalid format."
             */
            message?: string;
          };
          /**
           * The original, unmodified text content that was submitted for training. May be truncated for large entries.
           * @example "Our company was founded in 2020. We specialize in AI-powered customer service solutions. Our business hours are Monday to Friday, 9 AM to 5 PM Eastern Time."
           */
          rawText?: string;
          /**
           * Generated facts related to the knowledge base entry.
           * @example ["The company was founded in 2020.","We specialize in AI-powered customer service solutions."]
           */
          generatedFacts?: string[];
          /**
           * Segments of textual content that have been extracted from the original sources and split into smaller, manageable pieces.
           * @example [{"content":"First part of the document content.","chunkIndex":0,"chunkTokens":7,"chunkChars":35},{"content":"Second part of the document content.","chunkIndex":1,"chunkTokens":7,"chunkChars":36}]
           */
          rawTextChunks?: {
            content?: string;
            chunkIndex?: number;
            chunkTokens?: number;
            chunkChars?: number;
          }[];
          /** Indicates if the request was successful */
          success: boolean;
        },
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/replicas/${replicaUuid}/knowledge-base/${knowledgeBaseId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a list of all supported file types and MIME types for knowledge base entries. This endpoint provides information about which file formats can be uploaded to the knowledge base, organized by media type (documents, images, audio, video, etc.). Each file type includes the supported MIME types, file extensions, and support level (production or preview). This information can be used by client applications to validate file uploads and provide appropriate user interface elements.
     *
     * @tags Knowledge base
     * @name KnowledgeBaseFileTypesList
     * @summary Get supported file types
     * @request GET:/v1/knowledge-base/file-types
     * @secure
     */
    knowledgeBaseFileTypesList: (params: RequestParams = {}) =>
      this.request<
        {
          /**
           * Indicates if the request was successful
           * @example true
           */
          success: boolean;
          /** List of supported media groups with their file types */
          mediaGroups: {
            /**
             * Human-readable label for this media group
             * @example "PDF Documents"
             */
            label: string;
            /**
             * Type of media this group represents
             * @example "document"
             */
            mediaType:
              | "document"
              | "data"
              | "image"
              | "audio"
              | "video"
              | "ebook";
            /**
             * Optional limitation or constraint for this media group
             * @example "Maximum duration: 90 minutes"
             */
            limitation?: string;
            /** List of supported file types in this media group */
            fileTypes: {
              /**
               * Supported MIME types for this file type
               * @example ["application/pdf"]
               */
              mimeTypes: string[];
              /**
               * Supported file extensions for this file type
               * @example [".pdf",".pdfa"]
               */
              extensions: string[];
              /**
               * Support level for this file type
               * @example "production"
               */
              supportLevel: "production" | "preview" | "disabled";
            }[];
          }[];
        },
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
          }
        | {
            /** Indicates the status of the request */
            success: boolean;
            /** A text representation of the error */
            error: string;
            /**
             * A unique identifier of the event, useful for reporting
             * @example "14fceadd84e74ec499afe9b0f7952d6b"
             */
            fingerprint?: string;
            /**
             * A unique identifier of the request, useful for reporting
             * @example "xyz1::reg1:reg1::ab3c4-1234567890123-0123456789ab"
             */
            request_id: string;
            /**
             * The inner exception
             * @example {"name":"Server overheated","message":"The server overheated due to an unexpected situation","cause":"Request too complicated","stack":"Error: Server overheated due to an unexpected situation\n    at Object.eval (eval at <anonymous>..."}
             */
            inner_exception?: {
              name: string;
              message: string;
              cause?: string;
              stack?: string;
            };
          }
      >({
        path: `/v1/knowledge-base/file-types`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
