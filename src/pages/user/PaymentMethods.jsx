import header from '../../layout/assets/header.png'
import footer from '../../layout/assets/footer.png'
import cardTick from '../../layout/assets/cardTick.png'
import grid3 from '../../layout/assets/grid3.png'
import messageAdd from '../../layout/assets/messageAdd.png'
import note2 from '../../layout/assets/note2.png'
import profile from '../../layout/assets/profile.png'
import receiptItem from '../../layout/assets/receiptItem.png'
import securityUser from '../../layout/assets/securityUser.png'
import { Link } from 'react-router-dom'

function PaymentMethods() {
    return (
        <div>
            <div className="flex col-aut0 sm:min-w-fit">
                {/* The left bar */}
                <div className="w-[240px] bg-slate-950 mr-[2px]">
                    <div className="basis-1/2 min-h-screen h-full " >
                        <img src={header} alt="Header" className='flex justify-center items-center my-[24px] ml-[55px] mr-[63px]' />
                        <div className='flex flex-col'>
                            <Link to='/user/order'>
                                <div className='flex items-start'>
                                    <button className='btn normal-case  rounded-none outline-none border-none bg-slate-950 hover:bg-gradient-to-r from-[#FFD68A] to-[#AE926C]  pt-[11px] pb-[10px] w-full '> <img src={grid3} alt="grid" className='w-[24px] h-[24px] mr-[24px]' />Dashboard</button>
                                </div>
                            </Link>
                            <Link to='/user/order'>
                                <div className='flex items-center'>
                                    <button className='btn normal-case rounded-none outline-none border-none bg-slate-950 hover:bg-gradient-to-r from-[#FFD68A] to-[#AE926C] pt-[11px] pb-[10px] w-full '><img src={messageAdd} alt="grid" className='w-[24px] h-[24px] mr-[24px]' />
                                        New Order</button>
                                </div>
                            </Link>
                            <Link to='/user/my-orders'>
                                <div className='flex items-start'>
                                    <button className='btn normal-case  rounded-none outline-none border-none bg-slate-950 hover:bg-gradient-to-r from-[#FFD68A] to-[#AE926C] pt-[11px] pb-[10px] w-full '><img src={note2} alt="grid" className='w-[24px] h-[24px] mr-[24px]' />
                                        My Orders</button>
                                </div>
                            </Link>
                            <Link to='/user/referred-orders'>
                                <div className='flex items-center'>
                                    <button className='btn normal-case rounded-none outline-none border-none bg-slate-950 hover:bg-gradient-to-r from-[#FFD68A] to-[#AE926C] pt-[11px] pb-[10px] w-full '> <img src={securityUser} alt="grid" className='w-[24px] h-[24px] mr-[24px]' />Referred Orders</button>
                                </div>
                            </Link>
                            <Link to='/user/update-profile'>
                                <div className='flex items-center'>
                                    <button className='btn normal-case  rounded-none outline-none border-none bg-slate-950 hover:bg-gradient-to-r from-[#FFD68A] to-[#AE926C] pt-[11px] pb-[10px] w-full '> <img src={profile} alt="grid" className='w-[24px] h-[24px] mr-[24px]' />My Account</button>
                                </div>
                            </Link>
                            <Link to='/user/payment-methods'>
                                <div className='flex items-center'>
                                    <button className='btn normal-case rounded-none outline-none border-none bg-slate-950 hover:bg-gradient-to-r from-[#FFD68A] to-[#AE926C] pt-[11px] pb-[10px] w-full '> <img src={cardTick} alt="grid" className='w-[24px] h-[24px] mr-[4px]' style={{ color: 'white' }} />Payment Methods</button>
                                </div>
                            </Link>
                            <Link to='/user/invoices'>
                                <div className='flex items-center'>
                                    <button className='btn normal-case  rounded-none outline-none border-none bg-slate-950 hover:bg-gradient-to-r from-[#FFD68A] to-[#AE926C] pt-[11px] pb-[10px] w-full '> <img src={receiptItem} alt="grid" className='w-[24px] h-[24px] mr-[24px]' style={{ color: 'white' }} />
                                        Invoices</button>
                                </div>
                            </Link>
                        </div>
                        <img src={footer} alt="Footer" className='mt-[544px] ml-[25px] mb-[15px]' />
                    </div>
                </div>
                {/* The other part */}
                <div className="w-full flex">
                    <div className='flex-1 flex flex-col'>
                        {/* The top part */}
                        <div className='bg-slate-950 flex justify-between'>
                            <div>
                                <button className='btn btn-wide rounded-lg my-3 ml-5 px-3 py-2 normal-case text-black text-base bg-gradient-to-r from-[#FFD68A] to-[#AE926C]'>Your Referral Code: 12345</button>
                                {/* <div class="bg-gradient-to-r  bg-yellow-700 hover:bg-yellow-700"></div> */}
                            </div>
                            <div className='flex flex-row'>
                                <div className='flex flex-col text-white justify-end items-end mr-3 mb-3'>
                                    <h1>Sami</h1>
                                    <h4>Last login: 2 days ago</h4>
                                </div>
                                <div className="avatar placeholder">
                                    <div className="bg-neutral-focus text-neutral-content rounded-full w-10 h-10 self-center">
                                        <span className="text-3xl"></span>
                                    </div>
                                </div>
                                <select name="option" id="option" className=' select-xs self-center w-0 bg-slate-950 outline-none '>
                                    <option value="1"></option>
                                    <option value="2"></option>
                                    <option value="3"></option>
                                </select>
                            </div>
                        </div>
                        {/* The bottom part */}
                        <div className='flex-1 bg-[#E5E5E5] px-10 '>
                            <div className="container bg-[#FFFFFF] flex flex-col rounded-3xl ml96 mx-auto my-24 w-full md:w-[412px] h-[631px]">
                                <div className=''>
                                    <h1 className='font-semibold text-2xl mt-8 mb-[16px] text-center'>Payment Methods</h1>
                                    <hr className='scale-50 mb-[31px] bg-gradient-to-r from-[#FFD68A] to-[#AE926C] ' />
                                </div>
                                <div className='mx-[46px]'>
                                    <div>
                                        <h1 className='text-base font-medium text-left line-height-[150%]  '>Credit/ Debit Card Details</h1>
                                    </div>
                                    <div className='flex flex-row justify-between mt-[16px]'>
                                        <div>
                                            <h1>Bank Name: HSBC Bank <span className='font-semibold'>(Default)</span></h1>
                                            <h1 className='mt-[8px]'>Debit Card: XXXX XXXX 5555</h1>
                                        </div>
                                        <div className=''>
                                            <input type="checkbox" name="checkbox" checked className='ml-10' />
                                            <h1 className='mt-[13px] text-xs text-right'>Remove</h1>
                                        </div>
                                    </div>
                                    <div className='flex flex-row justify-between mt-[16px]'>
                                        <div>
                                            <h1>Bank Name: HSBC Bank</h1>
                                            <h1 className='mt-[8px]'>Debit Card: XXXX XXXX 5555</h1>
                                        </div>
                                        <div className=''>
                                            <input type="checkbox" name="checkbox" className='ml-10' />
                                            <h1 className='mt-[13px] mb-[3px] text-xs text-right'>Remove</h1>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Link to='/user/new-card'>
                                        <button className="btn bg-slate-950 hover:bg-slate-950 rounded-full w-[316px] normal-case mx-[48px] mb-[] mt-[199px] items-center">Add New Card</button>
                                    </Link>
                                    <button className="btn bg-[#DEDEDE] hover:bg-[#DEDEDE]  rounded-full border-none w-[316px] normal-case mx-[48px] my-[30px] items-center">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethods