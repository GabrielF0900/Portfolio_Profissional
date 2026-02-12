import { softSkills } from "../../constants/navigation"

export default function SkillsSection() {
  return (
    <section id="skills" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Soft Skills</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Habilidades interpessoais que complementam minha expertise técnica.
            </p>
          </div>

          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {softSkills.map((skill: string, index: number) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-medium">{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
