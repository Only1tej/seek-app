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

function NewCard() {
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
                            <div className="container bg-[#FFFFFF] flex justify-center rounded-3xl ml96 mx-auto my-24 w-full md:w-[412px] h-[631px]">
                                <form className='form-control'>
                                    <h1 className='font-semibold text-2xl mt-8 text-center'>Add New Card</h1>
                                    {/* <div className="divider w-full flex justify-center scale-50  bg-yellow-700"></div> */}
                                    <hr className='scale-50 mb-[36px] bg-gradient-to-r from-[#FFD68A] to-[#AE926C] ' />
                                    <input type="text" name='cardNumber' placeholder='Card Number' className='form-input py-3 rounded-full text-center border-2 w-[316px] mx-[48px]' />
                                    <div className='flex flex-row mx-[48px]'>
                                        <input type="text" name='date' placeholder='MM/YY' className='form-input py-3 rounded-full text-center mt-4 mr-2 border-2 w-[150px] ' />
                                        <input type="text" name='cvv' placeholder='CVV' className='form-input py-3 rounded-full text-center mt-4 ml-2 border-2 w-[150px]' />
                                    </div>
                                    <div className="flex mt-[16px] ml-[51px] mr-[50px]">
                                        <input type="checkbox" unchecked className="checkbox" /><p className='text-sm font-normal'>Make as default payment method</p></div>
                                    <button className="btn bg-slate-950 hover:bg-slate-950 rounded-full w-[316px] normal-case mx-[48px] mb-[30px] mt-[289px] items-center">Add</button>
                                </form>
                            </div>
                        </div>
                        {/* <div>hello there</div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewCard