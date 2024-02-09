import { Logo } from './Logo'
import { SearchBar } from './SearchBar'
import logo from '../assets/logo-nlw-blkngry.svg'

export const Header = () => 
    <>
        <Logo imgPath={logo}/>
        <SearchBar />
        <div className="h-px bg-slate-700" />
    </>