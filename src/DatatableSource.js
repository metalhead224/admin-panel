export const userColumns = [
    {
        field: 'id', 
        headerName: 'ID', 
        width: 70 ,
    },
    {
        field: 'user',
        headerName: 'User',
        width: 238,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt='avatar' />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field:'email',
        headerName: 'Email',
        width: 230,
     },  
     {
        field:'age',
        headerName: 'Age',
        width: 100,
     },
     {
        field:'status',
        headerName: 'Status',
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
     }, 
]

export const userRows = [
    {
        id: 1,
        username: 'Snow',
        img: 'https://picsum.com/200',
        status: 'active',
        email: '1snow@gmail.com',
        age: 35,
    },
    {
        id: 2,
        username: 'Jamie Lannister',
        img: 'https://picsum.com/200',
        status: 'passive',
        email: '2snow@gmail.com',
        age: 42,
    },
    {
        id: 3,
        username: 'Arya Stark',
        img: 'https://picsum.com/200',
        status: 'pending',
        email: '3snow@gmail.com',
        age: 28,
    },
    {
        id: 4,
        username: 'Tryion Lannister',
        img: 'https://picsum.com/200',
        status: 'active',
        email: '4snow@gmail.com',
        age: 40,
    },
    {
        id: 5,
        username: 'Hound',
        img: 'https://picsum.com/200',
        status: 'passive',
        email: 'hound@gmail.com',
        age: 50,
    },
    {
        id: 6,
        username: 'Sansa Stark',
        img: 'https://picsum.com/200',
        status: 'active',
        email: 'sansa@gmail.com',
        age: 50,
    },
    {
        id: 7,
        username: 'Ramsay',
        img: 'https://picsum.com/200',
        status: 'passive',
        email: 'ramsay@gmail.com',
        age: 50,
    },
    {
        id: 8,
        username: 'The God with no face',
        img: 'https://picsum.com/200',
        status: 'active',
        email: 'god@gmail.com',
        age: 150,
    },
    {
        id: 9,
        username: 'Robert Baratheon',
        img: 'https://picsum.com/200',
        status: 'pending',
        email: 'RB@gmail.com',
        age: 60,
    },
    {
        id: 10,
        username: 'The Mountain',
        img: 'https://picsum.com/200',
        status: 'passive',
        email: 'TM@gmail.com',
        age: 55,
    },
    {
        id: 11,
        username: 'Aegon Targerian',
        img: 'https://picsum.com/200',
        status: 'pending',
        email: 'aegon@gmail.com',
        age: 100,
    },

];