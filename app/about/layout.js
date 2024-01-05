import Link from "next/link";

export default function AboutLayout({ children }) {
    return (
      <div className="mt-5">
        <nav>
            <ul>
                <li><Link href='/about/mission'>Mission</Link></li>
            </ul>
        </nav>
        {children}
      </div>
    )
  }