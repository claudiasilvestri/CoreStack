import { useState } from "react"

const TECH_OPTIONS = [
  "React",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "Vue",
  "Angular",
  "Svelte",
  "Tailwind CSS",
  "Bootstrap"
]

function StackSelector({ selected, setSelected }) {
  const [useCustom, setUseCustom] = useState(false)
  const [customTech, setCustomTech] = useState("")

  const toggleTech = (tech) => {
    if (selected.includes(tech)) {
      setSelected(selected.filter((t) => t !== tech))
    } else {
      if (selected.length >= 4) return
      setSelected([...selected, tech])
    }
  }

  const addCustomTech = () => {
    if (!customTech.trim()) return
    if (selected.length >= 4) return
    if (selected.includes(customTech)) return

    setSelected([...selected, customTech.trim()])
    setCustomTech("")
  }

  return (
    <div>
      <p>Seleziona fino a 4 tecnologie</p>

      {TECH_OPTIONS.map((tech) => {
        const isDisabled =
          !selected.includes(tech) && selected.length >= 4

        return (
          <label
            key={tech}
            style={{
              display: "block",
              opacity: isDisabled ? 0.5 : 1,
            }}
          >
            <input
              type="checkbox"
              checked={selected.includes(tech)}
              disabled={isDisabled}
              onChange={() => toggleTech(tech)}
            />
            {tech}
          </label>
        )
      })}

      <div style={{ marginTop: "12px" }}>
        <label>
          <input
            type="checkbox"
            checked={useCustom}
            onChange={() => setUseCustom(!useCustom)}
          />
          Altro
        </label>

        {useCustom && (
          <div style={{ marginTop: "8px" }}>
            <input
              type="text"
              placeholder="Es. Svelte"
              value={customTech}
              onChange={(e) => setCustomTech(e.target.value)}
            />
            <button onClick={addCustomTech}>
              Aggiungi
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default StackSelector