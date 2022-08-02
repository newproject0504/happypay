export type About = {
  id: string
  title: string
  content: string
  title2: string
  content2: string
  image: string
  instructorsJSON: string
  instructors: Instructor[]
}

export type Instructor = {
  id: string
  name: string
  imageSrc: string
  designation: string
  description: string
  mailId: string
  linkedin?: string
}
