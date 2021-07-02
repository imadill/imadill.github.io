import dynamic from "next/dynamic"

const GitHubIcon = dynamic(() => import("@material-ui/icons/GitHub"))

function Header() {
  return (
    <header className="mt-2 flex justify-center items-center">
      <a href="https://github.com/Knoxo/knoxo.github.io" title="Web Repo">
        <GitHubIcon fontSize="large" />
      </a>
    </header>
  )
}

export default Header
