export type placements = {
  id: string
  videoLink: string
  image: string
  studentsJSON: string
  students: student[]
}

export type student = {
  id: string
  name: string
  mail: string
  desgination: string
  company: string
  imageSrc: string
  package: string
}
