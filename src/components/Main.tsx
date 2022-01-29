const Main = () => {
  return (
    <>
      <div className="mt-36 flex items-center justify-center">
        <video autoPlay loop muted playsInline width={400} height={300}>
          <source src="/assets/Rick.webm" type="video/webm" />
          <source src="/assets/Rick.mp4" type="video/mp4" />
        </video>
      </div>
      <h1 className="font-main mt-4 text-center text-3xl sm:text-4xl">
        Under Construction!!!
      </h1>
      <p className="font-main text-center">
        Even I don&apos;t know when it will finish
      </p>
    </>
  )
}

export default Main
