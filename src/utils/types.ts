export type ExceptionResponse = {
  message: string
  property: string
}

export type Admin = {
  id: string
  fullname: string
  username: string
  email: string
  phoneNumber: string
  roleId: string
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | null
  Role: { id: string; name: string }
}

type Module = {
  id: number
  name: string
}

export type Permission = {
  id: number
  description?: string
  type: string
  Module: Module
}

export type Role = {
  id: number
  name: string
  description: string
  createdBy: string
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | null
  Permissions: Permission[]
}

export enum UserType {
  USER = 'user',
  ADMIN = 'admin',
}

export type AdminFilter = {
  username?: string
  email?: string
  id?: number
}

export type ArrayPagination = {
  page: number
  itemsPerPage: number
  total: number
  lastPage: number
  prev: number | null
  next: number | null
}

export type ArrayPaginatedResponse<T> = {
  data: T[]
  payload: {
    pagination: ArrayPagination
  }
}

export enum RatingIncludeOption {
  INCLUDED = 'INCLUDED',
  EXCLUDED = '',
}

export enum ExampleType {
  CUSTOM = 'Custom',
  EXAM = 'Exam',
  ALL = 'All',
}

export type FileConversionMessage = {
  type: 'warining' | 'error'
  message: string
  desc?: string
}

export type RawQuestion = {
  questionText: string
  choices: string[]
  correctChoice: string
  explanation: string
}

export type ParsedQuestion = {
  questionText: string
  choices: Record<string, string>
  correctChoice: string
  explanation: string
}

export type MulterStorageConfig = {
  folder: string
  filePrefix: string
}
export type FileType = 'image' | 'pdf' | 'txt' | 'doc' | 'docx'

export type MulterFilterConfig = {
  fileType: FileType
  maxSize: number
}

export type FileUploader = UserType

//  note related types

type Heading = {
  page: number
  value: string
}

type SubHeading = {
  subHeading: Heading
  subSubHeadings: Heading[]
}

type Chapter = {
  mainHeading: Heading
  subHeadings: SubHeading[]
}

export type NotePage = {
  body: string
  tablesListed: string[]
  figuresListed: string[]
  summary: string
  specialKey: string
}

export type NoteContent = {
  chapters: Chapter[]
  pages: {
    [key: string]: NotePage
  }
  figures: {
    [key: string]: string
  }
  tables: {
    [key: string]: string
  }
  previosPage?: number | null
  nextPage?: number | null
}

export type QuestionFomat =
  | 'FORMAT_1' // The question is numbered (ordered list), and the answers are in a separate ordered list with alphabetical labels (A, B, C, etc.).
  | 'FORMAT_2' // The question is numbered (ordered list), and both the question text and choices are within the same ordered list.
  | 'FORMAT_3' // The question is in an ordered list (<ol> with <li>), while the choices and explanation are in separate <p> elements.
  | 'NONE' // The format does not match any of the defined types.
