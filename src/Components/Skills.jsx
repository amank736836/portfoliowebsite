import { skills } from '../data'

const Skills = () => {
  return (
    <>
        {
            skills.map(({ title }, index) => {
                return (
                    <div className="progress__box" key={index}>
                        <h3 className="skills__title">{title}</h3>
                    </div>
                )
            })
        }
    </>
  )
}

export default Skills