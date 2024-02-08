import logo from '../assets/logo-nlw-blkngry.svg'
import { SearchBar } from './SearchBar'
import { SectionLine } from './SectionLine.tsx'


export const Logo = () => 
    <div className='mx-auto max-w-6xl my-12 space-y-6'>
        <img src={logo} alt='NLW Expert'/>
        <SearchBar />
        <SectionLine />
    </div>
