import Sidebar from '..//components/Sidebar'
import { Fade } from 'react-reveal'
import { Paper } from '@material-ui/core'

function RecommendationPage() {
  
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
                    <Paper elevation={3} className='ml-64 mr-64 p-10'>
                        <div className='text-3xl font-bold'>Stay tuned, Feature releasing soon! 🔥</div>

                        {/* Description */}
                        <li className='mt-10 mb-2'>Schedule monthly calls with an expert to guide your strategies to improve overall wellbeing</li>
                        <li>Keep track of the effectiveness of initiatives and tasks your employees are taking</li>
                    </Paper>    
                </Fade>
            </div>

        </div>
    )
}

export default RecommendationPage;