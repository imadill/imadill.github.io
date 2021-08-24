interface Footer {
  mt?: string
}

function Footer({ mt }: Footer) {
  return (
    <footer>
      {/* prettier-ignore */}
      <p className={`${mt} font-main text-center`} translate="no">
        &copy; <a className="hover:underline" href="https://github.com/Knoxo"> Knoxo</a>. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
