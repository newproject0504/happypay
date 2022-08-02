export type Courses = {
  id: string
  position: number
  name: string
  image: string
  poster: string
  starred: boolean
  videoLink: string
  description: string
  discount: number,
  price: number,
  instructor: string
  duration: number
  lessons: number
  requirements: string
  outcomes: string
  QNA: string
  QNAObject: {
    question: string
    answer: string[]
  }[];
  requirementsObject: string[]
  outcomesObject: string[]
}
