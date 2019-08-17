import Link from 'next/link';

const Nav = () => (  
    <nav className="navbar navbar-expand navbar-dark bg-primary" >
       <div className="container">
            <Link href={process.env.PUBLIC_URL} ><a className="navbar-brand" >WikiBitcoin</a></Link>
            
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href={process.env.PUBLIC_URL} ><a className="nav-link" >Home</a></Link>
                    </li>

                    <li className="nav-item">
                        <Link href="/about" ><a className="nav-link" >About Us</a></Link>
                    </li>
                </ul>
            </div>
       </div>
    </nav >
);

 
export default Nav;