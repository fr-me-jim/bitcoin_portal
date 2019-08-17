import Link from 'next/link';

const assetPrefix = process.env.ASSET_PREFIX;

const Nav = () => (  
    <nav className="navbar navbar-expand navbar-dark bg-primary" >
       <div className="container">
            <Link 
                href="/" 
                as={ `${assetPrefix}/` }
            ><a className="navbar-brand" >WikiBitcoin</a></Link>
            
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link 
                            href="/" 
                            as={ `${assetPrefix}/` }
                        ><a className="nav-link" >Home</a></Link>
                    </li>

                    <li className="nav-item">
                        <Link 
                            href="/about" 
                            as={ `${assetPrefix}/about` }
                        ><a className="nav-link" >About Us</a></Link>
                    </li>
                </ul>
            </div>
       </div>
    </nav >
);

 
export default Nav;