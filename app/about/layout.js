export default function RootLayout({ children }) {
    return (
      <div className="mt-5">
        <nav>About | Section</nav>
        {children}
      </div>
    )
  }