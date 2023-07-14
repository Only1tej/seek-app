import header from '../../layout/assets/header.png'
import footer from '../../layout/assets/footer.png'
import cardTick from '../../layout/assets/cardTick.png'
import grid3 from '../../layout/assets/grid3.png'
import messageAdd from '../../layout/assets/messageAdd.png'
import note2 from '../../layout/assets/note2.png'
import profile from '../../layout/assets/profile.png'
import receiptItem from '../../layout/assets/receiptItem.png'
import securityUser from '../../layout/assets/securityUser.png'
import download from '../../layout/assets/download.png'
import { Link } from 'react-router-dom'
// import { FiSearch } from "react-icons/fi"
// import ReactPaginate from 'react-paginate'

function Invoices() {


    return (
        <div className='w-full'>
            <div className="flex col-auto sm:min-w-fit">
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
                        <div className='flex-1 bg-[#E5E5E5]'>
                            <div>
                                <div>
                                    <div className='flex flex-row justify-between'>
                                        <div className='relative'>
                                            <div className='relative ml-[48px]'>
                                                <div className='flex'>
                                                    <div className='flex flex-row justify-center mt-9'>
                                                        <svg class="absolute text-slate-400 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <input type="text" placeholder='Search Invoice' className='w-[687px] h-[45px] mx-[21px] mt-[20px] border-white border-0 outline-none bg-[#E5E5E5] ' />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='btn w-[213px] h-[45px] mt-[20px] ml-[259px] mr-[20px] py-[8px] px-[12px]'>Search</button>
                                        </div>
                                    </div>
                                    <div className='overflow-x-auto mt-[24px]'>
                                        <table className='table w-[1440px] h-[48px] ml-[21px] divide-y divide-gray-300'>
                                            {/* head of the table */}
                                            <thead>
                                                <tr className='rounded'>
                                                    <th>
                                                        <div className='py-1 text-base font-semibold normal-case'>
                                                            Order ID
                                                        </div>
                                                        {/* <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">May 30 2022</td> */}
                                                    </th>
                                                    <th className='text-base font-semibold normal-case'>Date</th>
                                                    <th className='text-base font-semibold normal-case'>Amount</th>
                                                    <th className='text-base font-semibold normal-case'>Download</th>

                                                </tr>
                                            </thead>
                                            <tbody className=''>
                                                {/* row 1 */}
                                                <tr className=''>
                                                    <td>
                                                        <div className=' whitespace-nowrap text-lg py-2'>#52528594</div>
                                                    </td>
                                                    <td>
                                                        <div className='whitespace-nowrap text-lg py-2'>02 Feb,2023</div>
                                                    </td>
                                                    <td>
                                                        <div className='whitespace-nowrap text-lg py-2'>€5555.99</div>
                                                    </td>
                                                    <td>
                                                        <div className='flex items-center text-lg '>
                                                            <img src={download} alt="download" className='w-[24px] h-[24px] ' />
                                                            <span className='pl-2'>Download Invoice</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                {/* Page select */}
                                <div className='bg-[#F1F2F2] py-4 px-4 rounded-full mt-[561px] ml-[757px]'>
                                    <ul className="flex justify-between pt-4 max-w-[423px] h-[40px]">
                                        <li className='pl-[20px] text-[12px] text-[#3A3737] font-normal'>
                                            <a role='button'> &lt; </a>
                                        </li>
                                        <li className='text-[12px] text-[#3A3737] font-normal'>
                                            <a role='button'>1</a>
                                        </li>
                                        <li className='text-[12px] text-[#3A3737] font-normal line-height-[150%]'>
                                            <a role='button'>2</a>
                                        </li>
                                        <li className='text-[12px] text-[#3A3737] font-normal'>
                                            <a role='button'>3</a>
                                        </li>
                                        <li className='text-[12px] text-[#3A3737] font-normal line-height-[150%]'>
                                            <a role='button'>4</a>
                                        </li>
                                        <li className='text-[12px] text-[#3A3737] font-normal'>
                                            <a role='button'>5</a>
                                        </li>
                                        <li className='text-[12px] text-[#3A3737] font-normal'>
                                            <a role='button'> &gt; </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Invoices

// {/* <div className="flex justify-between  max-w-[423px] h-[40px]">
// <button className="btn rounded-[90px]">1</button>
// <button className="btn btn-active">2</button>
// <button className="btn">3</button>
// <button className="btn">4</button>
// </div> */}