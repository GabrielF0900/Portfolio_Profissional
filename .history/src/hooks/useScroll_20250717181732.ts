import { useState, useEffect } from 'react'

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("inicio")

  useEffect(() => {
    // Verificar se estamos no cliente antes de acessar window
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      const sections = ["inicio", "sobre", "experiencia", "projetos", "tecnologias", "skills", "contato"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    // Executar uma vez para definir a seção inicial
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return activeSection
}

export const useScrollToSection = () => {
  const scrollToSection = (sectionId: string) => {
    // Verificar se estamos no cliente antes de acessar document
    if (typeof window === 'undefined') return
    
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return scrollToSection
}
