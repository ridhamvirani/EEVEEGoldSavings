'use client'
import { addAmount, createPaymentApi, getAmoutListApi, getTransactionHistoryApi, invoiceDownload, paymentImage } from '@/redux/api/amount'
import { CloseOutlined } from '@ant-design/icons'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import { Modal, message } from 'antd'
import { useFormik } from 'formik'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import * as Yup from 'yup'
import CollapsibleDataTable from '../../components/accordianTable'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const amountSchema = Yup.object().shape({
    amount: Yup.number()
        .required("Amount is required"),
});


const Page = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [totalInvest, setTotalInvest] = useState(0)


    const fileInputRef = useRef(null);

    // Handle image selection
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file); // Store the file object itself
            setPreviewImage(URL.createObjectURL(file)); // Create a URL for preview
        }
    };

    const handleCancel = () => {
        setAmount()
        setPlanId('')
        setPreviewImage(null)
        setSelectedImage(null)
        setIsModalVisible(false);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const router = useRouter()
    const loginState = useSelector((state) => state.login);


    const amountFormik = useFormik({
        initialValues: {
            amount: '',
        },
        validationSchema: amountSchema,
        onSubmit: async (values, { resetForm }) => {
            setIsLoading(true)
            try {
                const data = await addAmount(values)
                console.log('amountSchema Values:', data.data);
                if (data.data) {
                    setIsLoading(false)
                    getAmountList()
                    setModalOpen(false)
                    resetForm()
                    console.log('amountSchema Status:', data.status)
                }
            }
            catch (errors) {
                setIsLoading(false)
                console.log('Errors:', errors);
            }
        }
    });

    const [investmentData, setinvestmentData] = useState([])
   
    const [transactionData, setTransactionData] = useState([])
    const [modalOpen, setModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoading1, setIsLoading1] = useState(false);
    const [planId, setPlanId] = useState('');
    const [amount, setAmount] = useState();
    const [isInvoiceLoading, setIsInvoiceLoading] = useState(false);
    const [tableData, setTableData] = useState({ column: [], row: [] });

    const getAmountList = async () => {
        setIsLoading(true)
        try {
            const data = await getAmoutListApi()
            console.log('amountSchema Values:', data.data);
            if (data.status) {
                const column = [
                    { header: "Amount", accessor: "amount", align: "left", sortable: true },
                    { header: "Start Date", accessor: "startDate", align: "center" },
                    { header: "End Date", accessor: "endDate", align: "center" },
                    { header: "Total Payable Amount", accessor: "totalAmountPayable", align: "center", sortable: true },
                    { header: "Actions", accessor: "action", align: "center" },
                    { header: "", accessor: "", align: "center" },
                ]

                const row = data.data?.map((val) => {
                    return {
                        id: val?._id,
                        startDate: val?.startDate || "-", 
                        endDate: val?.endDate,
                        totalAmountPayable: val?.totalAmountPayable,
                        amount: val?.amount,
                    }
                })

                // setCurrentStep(2)
                setinvestmentData(data.data)
                setTotalInvest(data.totalInvest)
                setTableData({ column, row })
                setModalOpen(false)
                setIsLoading(false)
                console.log('amountSchema Status:', data.status)
            }
        }
        catch (errors) {
            setIsLoading(false)
            console.log('Errors:', errors);
        }
    }

    const handleTransitionList = async (id) => {
        setIsLoading1(true)
        setTransactionData([])

        try {
            const res = await getTransactionHistoryApi(id)
            setTransactionData(res?.data?.transactions)
            setIsLoading1(false)
        } catch (error) {
            setIsLoading1(false)
            console.log('Error:', error);
        }
    }

    useEffect(() => {
        const authToken = Cookies.get('authToken');
        if (!authToken)
            router.push('/login?isPlan=true');
        else
            getAmountList();
    }, [])

    const handlePlan = () => {
        setModalOpen(true)
    }

    const handlePayment = async (id, amount) => {
        console.log('data received', id)
        setIsModalVisible(true);
        setPlanId(id)
        setAmount(amount)
    }
    const handleUploadImage = async (event) => {
        event.preventDefault();
        if (!selectedImage) {
            alert("Please select an image first");
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedImage);

        try {
            // Sending form data to the server
            const response = await paymentImage(formData);

            if (response.status = 200) {
                try {
                    const payload = {
                        amount: amount,
                        planId: planId,
                        paymentImage: response?.data?.image?.location,
                        // name: loginState?.data?.user?.fullName ?? "savan",
                        // phone: String(loginState?.data?.user?.phoneNumber ?? 1234567890),
                    }

                    const res = await createPaymentApi(payload)
                    if (res) {
                        if (fileInputRef.current) {
                            fileInputRef.current.value = '';
                        }

                        setAmount()
                        setPlanId('')
                        setPreviewImage(null)
                        setSelectedImage(null)
                        setIsModalVisible(false)
                        // const redirectUrl = res.data.instrumentResponse.redirectInfo.url
                        // router.replace(redirectUrl)
                    }
                }
                catch (err) {
                    console.log(err)
                }
                message.success('Payment image uploaded successfully.');
            } else {
                message.error('Failed to upload payment image.');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            message.error('Error uploading payment image.');
        }
    }

    const downloadPdf = (base64String, fileName) => {
        const link = document.createElement('a');
        link.href = `data:application/pdf;base64,${base64String}`;
        link.download = fileName;

        // Trigger the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const downloadInvoice = async (id) => {
        try {
            setIsInvoiceLoading(true)
            const res = await invoiceDownload(id)
            if (res.status === 200) {
                downloadPdf(res.data, 'download.pdf');
                setIsInvoiceLoading(false)
            }
        } catch (err) {
            setIsInvoiceLoading(false)
            console.log(err)
        }
    }

    const handleDivClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click(); // Trigger the file input click
        }
    };

    return (
        <div className='!overflow-x-hidden '>
            <Navbar />
            <div className=' mt-[80px] text-[--black_text]  bg-gray-50 !overflow-x-hidden '>
                <div className=" bg-[#272727] py-4">
                    <div className='w-[90%] mx-auto flex justify-between items-center'>
                        <p className='md:text-xl text-lg font-medium md:font-semibold text-[--white] '>Your Total :  {new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                            minimumFractionDigits: 2,
                        }).format(totalInvest)}</p>
                        <button onClick={handlePlan} className='flex justify-center gap-1 items-center md:px-6 px-4 py-2 rounded-[10px] bg-[--secondary] text-white  font-medium whitespace-nowrap '>
                            <ControlPointIcon fontSize="small" />
                            Create New Plan</button>
                    </div>
                </div>
                <div className='px-10 my-10'>
                    <CollapsibleDataTable
                        table={{ columns: tableData.column, rows: tableData.row }} {...{ handlePayment, isLoading, handleTransitionList, isLoading1, transactionData, downloadInvoice }}
                    // isLoading={isLoading}
                    // filteredBookings={filteredBookings}
                    />
                </div>
                <Modal
                    title={<div style={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }}>Add Plan</div>}
                    centered
                    open={modalOpen}
                    onCancel={() => setModalOpen(false)}
                    footer={[
                        <button key="back" onClick={() => setModalOpen(false)} className='border mr-4 rounded-md bg-white px-4 py-2' >
                            Cancel
                        </button>,
                        <button key="submit" type="primary" onClick={amountFormik.handleSubmit           }
className='bg-[--secondary] rounded-md px-4 py-2 text-white font-medium'>
                            Submit
                        </button>,
                    ]}
                >
                    {/* <label for="amount" className="block mb-2 text-sm font-medium text-gray-900 ">Add Funds</label> */}
                    <input type="amount" name="amount" id="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-400 block w-full p-2.5" placeholder="Enter amount"
                        onChange={amountFormik.handleChange}
                        onBlur={amountFormik.handleBlur}
                        value={amountFormik.values.amount}
                    />
                    {amountFormik.touched.amount && amountFormik.errors.amount ? (
                        <div className="text-red-500 text-sm">{amountFormik.errors.amount}</div>
                    ) : null}
                </Modal>
                <Modal
                    title={null}
                    centered
                    open={isModalVisible}
                    closable={false}
                    footer={[
                        <button key="back" onClick={() => {
                            setIsModalVisible(false)
                            setAmount()
                            setPlanId('')
                            setPreviewImage(null)
                            setSelectedImage(null)
                            if (fileInputRef.current) {
                                fileInputRef.current.value = '';
                            }
                        }} className='border mr-4 rounded-md bg-white px-4 py-2' >
                            Cancel
                        </button>,
                        <button key="submit" type="primary" className='bg-[--secondary] rounded-md px-4 py-2 text-white font-medium'
                        // onClick={handleUploadImage}
                       onClick={() => alert("Invested successfully!")}
                            >
                            Submit
                        </button>,
                    ]}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }} className='border-b pb-2'>
                        <div style={{ color: '#000000d9', fontSize: '20px', fontWeight: 'bold' }}>Payment Information</div>
                        <CloseOutlined style={{ fontSize: '16px', cursor: 'pointer' }} className='hover:text-[--black] text-[--gray]' onClick={handleCancel} />
                    </div>
                    <div style={{ display: 'flex', }} className='justify-between'>
                        {/* Left part */}
                        <div >
                            <h3 className='text-black  font-semibold text-lg my-4'>Account Information</h3>
                            <p className='text-[--gray] mb-2 font-medium'>Account Number: 437105500722</p>
                            <p className='text-[--gray] mb-2 font-medium'>IFSC Code: ICIC0004371</p>
                        </div>
                        {/* Right part */}
                        <div>
                            <h3 className='text-black  font-semibold text-lg my-4'>UPI & QR Code</h3>
                            {/* <QRCodeSVG value="upi://pay?pa=your_upi_id@upi" size={150} className='text-[--gray] mb-2 font-medium' /> */}
                            <p className='text-[--gray] mb-2 font-medium'>UPI ID: eeveelifestylellp.ibz@icici</p>
                        </div>
                    </div>
                    {/* Below both sections */}
                    <div style={{ marginTop: '20px' }}>
                        <p className='mb-4'><strong>Note:</strong> Please Share you successfull payment screenshot to +91 82386 64001 & It will take a minimum of 1 day to receive your invoice after successful payment.</p>
                        <div className='flex  items-center gap-4 m-2 ml-0'>
                            <div className='cursor-pointer border border-dashed rounded-xl border-[--gray] w-full flex justify-center items-center h-20 gap-2' onClick={handleDivClick}>
                                <AddPhotoAlternateIcon /><span className='text-[--black] font-medium text-lg'> Add Image</span>
                            </div>
                            <input type="file" accept="image/*" onChange={handleImageChange} ref={fileInputRef}
                                style={{ display: 'none' }} />
                            {previewImage && (
                                <div>
                                    <p>Image Preview:</p>
                                    <img src={previewImage} alt="Preview" width="200px" />
                                </div>
                            )}
                        </div>
                        
                    </div>
                </Modal>
            </div>
            <Footer />
        </div>
    )
}

export default Page
