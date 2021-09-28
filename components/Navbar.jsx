import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<Image src="/hammer.png" width={128} height={100} alt="hammer logo" />
			</div>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
			<Link href="/ninjas">
				<a>Index</a>
			</Link>
		</nav>
	)
}

export default Navbar
