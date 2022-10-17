import './single.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Chart from '../../components/chart/Chart'
import TableList from '../../components/table/TableList'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className='singleContainer'>
        <Navbar />
        <div className='top'>
          <div className='left'>
          <div className='editButton'>Edit</div>
            <div className='title'>Information</div>
            <div className='item'>
              <img
                src='https://media-exp1.licdn.com/dms/image/C5603AQEkMnktnUwoFA/profile-displayphoto-shrink_800_800/0/1661491457359?e=2147483647&v=beta&t=nmwDJXUp34NnSaspYZ75XCIGRboJALwEPRk-TU8jozE'
                alt='image'
                className='itemImg'
              />
              <div className='details'>
                <h1 className='itemTitle'>Suman osti</h1>
                <div className='detailItem'>
                  <span className='itemKey'>Email:</span>
                  <span className='itemValue'>suman.osti401@gmail.com</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Phone:</span>
                  <span className='itemValue'>+977 980 120 3924</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Address:</span>
                  <span className='itemValue'>Bafal, kathmandu</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Country:</span>
                  <span className='itemValue'>Nepal</span>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <Chart aspect={3 / 1} title='User Spending (last 6 months)'/>
          </div>
        </div>
        <div className='bottom'>
            <h1 className='title'>Last Transactions</h1>
            <TableList />
          </div>
      </div>
    </div>
  )
}

export default Single