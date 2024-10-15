'use client'
import React, { useState } from 'react';
import { Modal, Button, Upload, message } from 'antd';
import { UploadOutlined, CloseOutlined } from '@ant-design/icons';
import { QRCodeSVG } from 'qrcode.react';

const PaymentModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [uploadedImageUrl, setUploadedImageUrl] = useState(null);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const props = {
        beforeUpload: (file) => {
            const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
            if (!isJpgOrPng) {
                message.error('You can only upload JPG/PNG files!');
            }
            return isJpgOrPng || Upload.LIST_IGNORE;
        },
        onChange: (info) => {
            if (info.file.status === 'done') {
                const url = URL.createObjectURL(info.file.originFileObj);
                setUploadedImageUrl(url); // Store the image URL
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    console.log('Upload', uploadedImageUrl)

    return (
        <>
            <button type="primary" onClick={showModal}>
                Open Payment Modal
            </button>
            <Modal
                title={null}
                centered
                open={isModalVisible}
                closable={false}
                footer={[
                        <button key="back" onClick={() => setModalOpen(false)} className='border mr-4 rounded-md bg-white px-4 py-2' >
                            Cancel
                        </button>,
                        <button key="submit" type="primary"  className='bg-[--secondary] rounded-md px-4 py-2 text-white font-medium'>
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
                        <p className='text-[--gray] mb-2 font-medium'>Account Number: 1234567890</p>
                        <p className='text-[--gray] mb-2 font-medium'>IFSC Code: ABCD0123456</p>
                    </div>
                    {/* Right part */}
                    <div>
                        <h3 className='text-black  font-semibold text-lg my-4'>UPI & QR Code</h3>
                        <QRCodeSVG value="upi://pay?pa=your_upi_id@upi" size={150} className='text-[--gray] mb-2 font-medium' />
                        <p className='text-[--gray] mb-2 font-medium'>UPI ID: your_upi_id@upi</p>
                    </div>
                </div>
                {/* Below both sections */}
                <div style={{ marginTop: '20px' }}>
                    <p className='mb-4'><strong>Note:</strong> It will take a minimum of 1 day to receive your invoice after successful payment.</p>
                    <div className='flex justify-center items-center gap-4 m-2'>
                        <Upload  {...props}>
                            <Button icon={<UploadOutlined />}>Upload Payment Success Image</Button>
                        </Upload>
                    </div>
                    <p>Please upload the screenshot of the successful payment here for reference.</p>
                </div>
            </Modal>
        </>
    );
};

export default PaymentModal;
