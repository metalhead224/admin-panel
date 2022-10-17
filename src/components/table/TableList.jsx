import './tableList.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const rows = [
    {
        id: 1143155,
        product: 'Acer Nitro 5',
        img: 'https://picsum.photos/200',
        customer: 'John Smith',
        date: '1 March',
        amount: 785,
        method: 'Cash On Delivery',
        status: 'Approved',
    },
    {
        id: 3142635,
        product: 'Playstation 5',
        img: 'https://picsum.photos/200',
        customer: 'Micheal Doe',
        date: '1 March',
        amount: 900,
        method: 'Cash On Delivery',
        status: 'Approved',
    },
    {
        id: 2143485,
        product: 'Lappy 5',
        img: 'https://picsum.photos/200',
        customer: 'John Smith',
        date: '1 March',
        amount: 675,
        method: 'Cash On Delivery',
        status: 'pending',
    },
    {
        id: 5121161,
        product: 'Macbook Air 2022',
        img: 'https://picsum.photos/200',
        customer: 'Black Smith',
        date: '1 March',
        amount: 785,
        method: 'Cash On Delivery',
        status: 'Approved',
    },
];

const TableList = () => {

    return (
        <div className='table'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className='tableCell'>Tracking ID</TableCell>
                            <TableCell className='tableCell'>Product</TableCell>
                            <TableCell className='tableCell'>Customer</TableCell>
                            <TableCell className='tableCell'>Date</TableCell>
                            <TableCell className='tableCell'>Amount</TableCell>
                            <TableCell className='tableCell'>Payment Method</TableCell>
                            <TableCell className='tableCell'>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                            >
                                <TableCell>
                                    {row.id}
                                </TableCell>
                                <TableCell className='tableCell'>
                                <div className='cellWrapper'>
                                    <img src={row.img} className='image' />
                                    {row.product}
                                </div>
                                </TableCell>
                                <TableCell className='tableCell'>{row.customer}</TableCell>
                                <TableCell className='tableCell'>{row.date}</TableCell>
                                <TableCell className='tableCell'>{row.amount}</TableCell>
                                <TableCell className='tableCell'>{row.method}</TableCell>
                                <TableCell className='tableCell'>
                                    <span className={`status ${row.status}`}>{row.status}</span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default TableList