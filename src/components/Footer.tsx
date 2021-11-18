interface mt {
  mt: string
}

const Footer = ({ mt }: mt) => {
  return (
    <div>
      {/* prettier-ignore */}
      <p className={`${mt} font-main text-center`} translate="no">
        &copy; <a className="hover:underline" href="https://github.com/Knoxo"> Knoxo</a>. All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer
