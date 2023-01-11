import Navbar from './components/Navbar'
function FooterLayout({ children }) {
  return (
    <>
      {children}
      <Navbar />
    </>
  )
}

export default FooterLayout
