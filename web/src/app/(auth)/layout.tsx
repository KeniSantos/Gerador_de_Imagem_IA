
const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="w-screen max-w-[320px] max-h-[500px]">
      {children}
    </div>
  )
}

export default Layout