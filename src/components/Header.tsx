import { Logo } from './Logo'
import { SearchBar } from './SearchBar'
import { SectionLine } from './SectionLine.tsx'

export const Header = () => 
    <div className='mx-auto max-w-6xl my-12 space-y-6'>
        <Logo />
        <SearchBar />
        <SectionLine />
    </div>