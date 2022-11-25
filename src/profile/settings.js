import Sidebar from '..//components/Sidebar2'
import { Fade } from 'react-reveal'

function SettingsPage() {
  
    // const { data: session, status } = useSession();

    // useEffect(() => {

    //     if(session == null) {
    //     console.log("Pushing to profile")
    //     Router.push('/');
    //     }
    // })

  return (   
    <div className='flex h-screen overflow-hidden bg-gradient-to-r from-transparent to-green-50'>  
     
        {/* Sidebar */}
        <Sidebar />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden mt-72">
            <Fade bottom>
                <div className='text-4xl text-center font-bold mt-16'>
                Stay tuned, Feature releasing soon!
                </div>
            </Fade>
        </div>
        
    </div>
)
}

export default SettingsPage;