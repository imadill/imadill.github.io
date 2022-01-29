interface mt {
  mt: string
}

const Footer = ({ mt }: mt) => {
  return (
    <div>
      <p className={`${mt} font-main text-center`} translate="no">
        &#169; {new Date().getFullYear()}{" "}
        <a className="hover:underline" href="https://github.com/Knoxo">
          Knoxo
        </a>
        .
      </p>
    </div>
  )
}

export default Footer
