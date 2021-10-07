import GitHubIcon from "@material-ui/icons/GitHub"

function Header() {
  return (
    <header>
      <div className="mt-2 flex justify-center items-center">
        <a href="https://github.com/Knoxo/knoxo.github.io" title="Web Repo">
          <GitHubIcon fontSize="large" />
        </a>
      </div>
    </header>
  )
}

export default Header
