export function setupThemeToggle(button: HTMLButtonElement) {
  const applyTheme = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }

  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    applyTheme(savedTheme)
  }

  button.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') ?? 'dark'
    const next = current === 'dark' ? 'light' : 'dark'
    applyTheme(next)
  })
}