(function () {
  try {
    var theme = localStorage.getItem("theme")
    var fontSize = localStorage.getItem("fontSize")

    if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark")
    }

    if (fontSize) {
      document.documentElement.classList.add("text-" + fontSize)
    }
  } catch {
    // no-op: this script only applies progressive enhancement
  }
})()
