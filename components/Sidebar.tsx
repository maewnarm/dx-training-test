import Link from 'next/link'

const Sidebar =() => {
    return (
        <div>
            <p>Sidebar</p>
            <Link href="/">
                Home
            </Link>
            <Link href="/menu">
                Menu
            </Link>
            <Link href="/about">
                About
            </Link>
        </div>
    )
}

export default Sidebar;