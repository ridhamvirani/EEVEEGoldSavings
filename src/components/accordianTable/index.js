import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { CircularProgress, capitalize } from '@mui/material';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import Image from 'next/image';
import DownloadIcon from '@mui/icons-material/Download';

const Row = ({ row, handlePayment, handleTransitionList, isLoading1, transactionData,downloadInvoice }) => {
    const [open, setOpen] = useState(false);

    const column = [
        { header: "Transaction", accessor: "transaction", align: "left", },
        { header: "Amount", accessor: "amount", align: "center" },
        { header: "Payment Type", accessor: "paymentType", align: "center" },
        { header: "Transaction Id", accessor: "transactionId", align: "center" },
        { header: "Date", accessor: "date", align: "center" },
        { header: "Status", accessor: "status", align: "center" },
        { header: "Verified", accessor: "verified", align: "center" },
    ]

    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>

                <TableCell align="left">{new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                    minimumFractionDigits: 2,
                }).format(row.amount)}</TableCell>
                <TableCell align="center">{row.startDate}</TableCell>
                <TableCell align="center">{row.endDate}</TableCell>
                <TableCell align="center">{new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                    minimumFractionDigits: 2,
                }).format(row.totalAmountPayable)}</TableCell>
                <TableCell align="center">
                    <div className='flex justify-center gap-2 items-center'>
                        <button className='px-4 py-1 rounded-md border border-dashed border-[--secondary] tracking-wide  font-medium ' onClick={() => {
                            handlePayment(row?.id, row?.amount)
                        }}><span className=' '>Invest More</span></button>
                         <button className='px-4 py-1 gap- rounded-md border border-[--secondary]   bg-[--secondary]  tracking-wide text-white font-medium ' onClick={() => {
                            downloadInvoice(row?.id)
                        }}><DownloadIcon fontSize='small' sx={{mr:'2'}}/><span className=' '>Invoice</span></button>
                    </div>
                </TableCell>

                <TableCell align="center " className='w-5' >
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => {
                            handleTransitionList(row.id)
                            setOpen(!open)
                        }}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                {/* <TableCell align="center"><button
                    className={`border-2 py-1 p-2 rounded-lg w-[95%] 
                            ${row?.bookingStatus === "pending" && "border-[#E4A11B] text-[#E4A11B]"} 
                            ${row?.bookingStatus === "approved" && "border-[#14A44D] text-[#14A44D]"} 
                            ${row?.bookingStatus === "canceled" && "border-[#d32f2f] text-[#d32f2f]"}
                            ${(row?.bookingStatus === "active" || row?.bookingStatus === "completed") && "border-[#14A44D] bg-[#14A44D] text-[--white-color]"}`} >
                    {row?.bookingStatus.toUpperCase()}
                </button ></TableCell> */}

            </TableRow>
            <TableRow >
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12} >
                    <Collapse in={open} timeout="auto" style={{ width: "100%" }} colSpan={12}>
                        <Box sx={{ margin: 2 }}>
                            <div className="h-[90%] w-[100%]  px-2 md:px-4 lg:px-10 space-y-6 !mt-6">
                                <div className=" border-2  px-3 py-4 rounded-lg">
                                    <div className="px-2 py-2 !w-full">
                                        <p className=' text-lg font-semibold tracking-wide ml-4'>Transaction History</p>
                                        <TableHead className=' !w-full'>
                                            <TableRow className=''>
                                                {column.map((column, index) => (
                                                    <TableCell
                                                        key={index}
                                                        align={column.align}
                                                        className="!text-[0.875rem] lg:!text-[14px] !tracking-wide !font-bold !bg-[--theme-color] !text-[--white-color] w-full  ">
                                                        <h1 className='whitespace-nowrap'>{column.header}</h1>
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                        </TableHead>
                                        {transactionData.length > 0 ? transactionData.map((item, index) => {
                                            return (
                                                <TableBody className='w-full' key={index}>
                                                    <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} className='w-full' >
                                                        <TableCell align="left" sx={{ width: '10%' }} className='whitespace-nowrap' >Buy</TableCell>
                                                        <TableCell align="center" sx={{ width: '20%' }} className='w-full whitespace-nowrap' >{new Intl.NumberFormat("en-IN", {
                                                            style: "currency",
                                                            currency: "INR",
                                                            minimumFractionDigits: 2,
                                                        }).format((item.amount))}</TableCell>
                                                        <TableCell align="center" sx={{ width: '15%' }} className='w-full whitespace-nowrap' >{item.paymentMethod ?? '-'}</TableCell>
                                                        <TableCell align="center"  sx={{ width: '20%' }} className='w-full whitespace-nowrap' >{item.transactionId ?? '-'}</TableCell>
                                                        <TableCell align="center" sx={{ width: '15%' }} className='w-full whitespace-nowrap' >{new Date(item?.transactionDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</TableCell>
                                                        <TableCell align="center" sx={{ width: '10%' }} className='w-full whitespace-nowrap' >{item.status ?? 'Done'}</TableCell>
                                                        <TableCell align="center" sx={{ width: '10%' }} className='w-full whitespace-nowrap' >{item.isVerified ? "True":"False"}</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            )
                                        }) : <p className='w-full text-center my-4'>No results</p>}

                                    </div>
                                </div>
                            </div>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

const CollapsibleDataTable = ({ table, isLoading, handlePayment, handleTransitionList, isLoading1, transactionData ,downloadInvoice}) => {
    const { columns, rows } = table
    const [hoveredColumn, setHoveredColumn] = useState(null);
    const [sortData, setSortData] = useState({ column: null, direction: 'asc' });
    const [currentIndex, setCurrentIndex] = useState(0);

    const sortArr = [
        {
            icon: <SwapVertIcon fontSize="small" className="text-[--white-color]" />
        },
        {
            type: "asc",
            icon: <NorthIcon fontSize="small" className="text-[--white-color]" />
        },
        {
            type: "dsc",
            icon: <SouthIcon fontSize="small" className="text-[--white-color]" />
        }
    ]

    const sortDataHandler = (columnAccessor) => {
        const nextIndex = (currentIndex + 1) % sortArr.length;
        setCurrentIndex(nextIndex)
        if (currentIndex === sortArr.length - 1) {
            setSortData({ column: null, direction: 'asc' });
            setCurrentIndex(0)
        } else {
            setSortData((prevSortData) => ({
                column: columnAccessor,
                direction: prevSortData.column === columnAccessor && prevSortData.direction === 'asc' ? 'desc' : 'asc',
            }));
        }
    }

    const sortedRows = [...rows].sort((a, b) => {
        if (sortData.column) {
            if (sortData.column === 'amount') {
                const rentA = parseFloat(a[sortData.column].replace(/[^\d.-]/g, ''));
                const rentB = parseFloat(b[sortData.column].replace(/[^\d.-]/g, ''));
                return sortData.direction === 'asc' ? rentA - rentB : rentB - rentA;
            } else {
                const comparison = a[sortData.column].localeCompare(b[sortData.column]);
                return sortData.direction === 'asc' ? comparison : -comparison;
            }
        }
        return 0;
    });

    return (
        <>
            {isLoading ? <div className='my-40 flex justify-center items-center'><CircularProgress color="secondary" /></div> :
                <TableContainer component={Paper} className=' w-[100%] !rounded-lg  relative !rounded-b-lg !rounded-t-none'>

                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column, index) => (
                                    <TableCell
                                        key={index}
                                        align={column.align}
                                        className="!text-[0.875rem] lg:!text-[14px] !tracking-wide !font-bold !bg-[#27272780] !text-[--white] "

                                    >
                                        {
                                            column.header
                                        }
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        {rows.length > 0
                            ?
                            (<TableBody>
                                {sortedRows.map((val, index) => (
                                    <Row key={index} row={val} handlePayment={handlePayment} handleTransitionList={handleTransitionList} isLoading1={isLoading1} transactionData={transactionData} downloadInvoice={downloadInvoice}/>
                                ))}
                            </TableBody>)

                            : <TableBody TableBody style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center", position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}>
                                <TableRow >
                                    <><div className='w-full  bg-white p-8 flex items-center justify-center flex-col'>
                                        <Image src='/sip.svg' alt="sip" height="80" width="80" />
                                        <p className="mt-4 text-gray-400 tracking-wider text-sm text-center">
                                            No investment plans available at the moment. Please add a plan to get started.
                                        </p>
                                    </div>
                                    </>
                                </TableRow>
                            </TableBody>
                        }
                    </Table>
                </TableContainer>
            }</>
    );
}

export default CollapsibleDataTable