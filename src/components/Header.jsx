import Social from "../components/Social"
export default function Header() {
  return (
    <>
      <header className='heading'>
        <div className='container'>
          <div className='heading-wrap'>
            <a href="/" className="site-logo">Blue Banana</a>
            <Social />
          </div>
        </div>
      </header>
    </>
  )
}
