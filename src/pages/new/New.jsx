import './new.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

const New = () => {
  return (
    <div className='new'>
        <Sidebar />
        <div className='newContainer'>
            <Navbar />
            <div className='top'>
                <h1>Add New User</h1>
            </div>
            <div className='bottom'>
                <div className='left'>left</div>
                <div className='left'>right</div>
            </div>
        </div>
    </div>
  )
}

export default New