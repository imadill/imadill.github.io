import { Tooltip, IconButton, Zoom } from "@mui/material"
import { GitHub as GitHubIcon } from "@mui/icons-material"

function Header() {
  return (
    <header>
      <div className="mt-2 flex justify-center items-center">
        <a href="http://github.com/Knoxo/knoxo.github.io">
          <Tooltip TransitionComponent={Zoom} title="Web Repo">
            <IconButton>
              <GitHubIcon fontSize="large" sx={{ color: "common.black" }} />
            </IconButton>
          </Tooltip>
        </a>
      </div>
    </header>
  )
}

export default Header
