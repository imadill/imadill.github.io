import React from "react"
import GitHubIcon from "@material-ui/icons/GitHub"
import VolumeUpIcon from "@material-ui/icons/VolumeUp"
import VolumeOffIcon from "@material-ui/icons/VolumeOff"

function Header() {
  return (
    <header className="bg-transparent mt-2 flex justify-between container mx-auto px-4">
      <VolumeUpIcon fontSize="large" />
      <a href="https://github.com/Knoxo">
        <GitHubIcon fontSize="large" />
      </a>
    </header>
  )
}

export default Header
