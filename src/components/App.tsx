import { Header } from "./Header"
import { NotesContainer } from "./NotesContainer"

export const App  = () => {
    return (
        <div className='mx-auto max-w-6xl my-12 space-y-6'>
            <Header />
            <NotesContainer />
        </div>
    )
}
 