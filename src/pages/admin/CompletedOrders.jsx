import freeLogoa from '../../layout/assets/freeLogoa.jpg'
import adminFooter from '../../layout/assets/adminFooter.png'
import receiptDiscount from '../../layout/assets/receiptDiscount.png'
import grid3 from '../../layout/assets/grid3.png'
import documentDownload from '../../layout/assets/documentDownload.png'
import note2 from '../../layout/assets/note2.png'
import taskSquare from '../../layout/assets/taskSquare.png'
import receiptItem from '../../layout/assets/receiptItem.png'
import securityUser from '../../layout/assets/securityUser.png'
import { Link } from 'react-router-dom'

function CompletedOrders() {
    return (
        <div className='w-full'>
            <div className="flex col-auto sm:min-w-fit">
                {/* The left bar */}
                <div className="w-[240px] mr-[2px]">
                    <div className="basis-1/2 min-h-screen h-full " >
                        <img src={freeLogoa} alt="Header" className='w-[240px] flex justify-center items-center' />
                        <div className='flex flex-col'>
                            <Link to='/admin/pending-orders'>
                                <div className='flex items-start'>
                                    <button className='btn normal-case rounded-none outline-none border-none bg-inherit text-black hover:bg-gradient-to-r from-[#8aff8e] to-[#6cae81]  pt-[11px] pb-[10px] w-full '> <img src={documentDownload} alt="grid" className='w-[24px] h-[24px] mr-[24px]' />Pending Orders</button>
                                </div>
                            </Link>
                            <Link to='/admin/completed-orders'>
                                <div className='flex items-center'>
                                    <button className='btn normal-case rounded-none outline-none border-none bg-inherit text-black hover:bg-gradient-to-r from-[#8aff8e] to-[#6cae81] pt-[11px] pb-[10px] w-full '><img src={taskSquare} alt="grid" className='w-[24px] h-[24px] mr-[24px]' />
                                        Completed Orders</button>
                                </div>
                            </Link>
                            <Link to='/admin/commission'>
                                <div className='flex items-start'>
                                    <button className='btn normal-case  rounded-none outline-none border-none bg-inherit text-black hover:bg-gradient-to-r from-[#8aff8e] to-[#6cae81] pt-[11px] pb-[10px] w-full '><img src={receiptDiscount} alt="grid" className='w-[24px] h-[24px] mr-[24px]' />
                                        Commission</button>
                                </div>
                            </Link>
                            <Link to=''>
                                <div className="dropdown dropdown-bottom">
                                    <label tabIndex={0} className="btn normal-case rounded-none outline-none border-none bg-inherit text-black hover:bg-gradient-to-r from-[#8aff8e] to-[#6cae81] pt-[11px] pb-[10px] w-[240px] "> <img src={securityUser} alt="grid" className='w-[24px] h-[24px] mr-[24px]' />Account</label>
                                    <ul className="dropdown-content menu rounded-none border-none w-[240px]">
                                        <Link to='/admin/change-password'>
                                            <button className='flex items-center text-center bg-inherit text-black hover:bg-gradient-to-r from-[#247e1f] to-[#1c511e] normal-case pt-[11px] pb-[10px] w-[240px] pl-[61px] font-normal text-xs'>Change Password</button>
                                        </Link>
                                        <Link to='/admin/user-list'>
                                            <button className='flex items-center bg-inherit text-black hover:bg-gradient-to-r from-[#247e1f] to-[#1c511e] normal-case pt-[11px] pb-[10px] w-[240px] pl-[61px] font-normal text-xs'>Invite Users</button>
                                        </Link>
                                    </ul>
                                </div>
                            </Link>
                        </div>
                        <img src={adminFooter} alt="Footer" className='mt-[857px] ml-[25px] mb-[15px]' />
                    </div>
                </div>
                {/* The other part */}
                <div className="w-full flex">
                    <div className='flex-1 flex flex-col'>
                        {/* The top part */}
                        <div className='bg-slate-950 flex justify-between'>
                            <div>
                                <button className='btn btn-wide rounded-lg my-3 ml-5 px-3 py-2 normal-case text-black text-base bg-gradient-to-r from-[#8aff8e] to-[#6cae81]'>Your Bonus Code: 12345</button>
                            </div>
                            <div className='flex flex-row'>
                                <div className='flex flex-col text-white justify-end items-end mr-3 mb-3'>
                                    <h1>Esky</h1>
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
                                        <div className='ml-[20px] mt-[23px]'>
                                            <h2 className="font-bold font-poppins text-3xl">Hello Esky!</h2>
                                            <h4 className="text-lg">Welcome back</h4>
                                        </div>
                                        <div className='flex flex-row'>
                                            <div className='bg-[#ffffff] mt-[23px] mr-[17px] w-[241px] h-[100px]'>
                                                <h2 className="font-bold font-poppins text-3xl text-center pt-[9.5px] px-[53px]">12</h2>
                                                <h4 className="text-lg text-center px-[43.5px] pb-[9.5px]">Pending Orders</h4>
                                            </div>
                                            <div className='bg-[#ffffff] mt-[23px] mr-[37px] w-[241px] h-[100px]'>
                                                <h2 className="font-bold font-poppins text-3xl text-center pt-[9.5px] px-[53px]">&#8364;614.50</h2>
                                                <h4 className="text-lg text-center px-[14px] pb-[9.5px]">Pending Commission</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-row justify-between ml-[20px] mt-[71px]'>
                                        <div className="tabs">
                                            <a href='/admin/completed-orders' className="tab tab-bordered tab-active text-sm font-semibold leading-loose">Completed Orders</a>
                                        </div>
                                        {/* Search input */}
                                        <div className='mr-[20px]'>
                                            <div className='relative'>
                                                <div className='relative ml-[48px]'>
                                                    <div className='flex'>
                                                        <div className='absolute transform translate-x-8 flex flex-row justify-center mt-8'>
                                                            <svg class=" text-slate-400 h-5 w-5 bg-transparent " viewBox="0 0 20 20" fill="currentColor">
                                                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                                            </svg>
                                                        </div>
                                                        <input type="text" placeholder='' className='w-[499px] h-[45px] mx-[21px] mt-[20px] border-white border-0 outline-none bg-[#ffffff] pl-[44px] ' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='overflow-x-auto mt-[24px]'>
                                        <table className='table w-[1440px] h-[48px] ml-[21px] divide-y divide-gray-300'>
                                            {/* head of the table */}
                                            <thead>

                                                <tr className='rounded'>
                                                    <th>
                                                        <div className='py-1 text-base font-semibold normal-case'>
                                                            Customer
                                                        </div>
                                                        {/* <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">May 30 2022</td> */}
                                                    </th>

                                                    <th className='text-base font-semibold normal-case'>Order ID</th>
                                                    <th className='text-base font-semibold normal-case'>Item</th>
                                                    <th className='text-base font-semibold normal-case'>Purchase Date</th>
                                                    <th className='text-base font-semibold normal-case'>Second Payment</th>
                                                    <th className='text-base font-semibold normal-case'>Third Payment</th>
                                                    <th className='text-base font-semibold normal-case'>Fourth Payment</th>
                                                    <th className='text-base font-semibold normal-case'>Fifth Payment</th>
                                                    <th className='text-base font-semibold normal-case'>Late Payment Fees</th>
                                                    <th className='text-base font-semibold normal-case'>Payment Plan</th>
                                                    <th className='text-base font-semibold normal-case'>Status</th>

                                                </tr>

                                            </thead>
                                            <tbody className=''>
                                                {/* row 1 */}

                                                <tr className=''>
                                                    <td>
                                                        <div className=' whitespace-nowrap text-lg py-2'>Sami Baddar / 1234M</div>
                                                    </td>
                                                    <td>
                                                        <div className='whitespace-nowrap text-lg py-2'>#528555</div>
                                                    </td>
                                                    <td>
                                                        <div className='whitespace-nowrap text-lg py-2'>Cazal 300X</div>
                                                    </td>
                                                    <td>
                                                        <div className='whitespace-nowrap text-lg py-2 text-center'>Paid</div>
                                                    </td>
                                                    <td>
                                                        <div className='whitespace-nowrap text-lg py-2 text-center'>Paid</div>
                                                    </td>
                                                    <td>
                                                        <div className='whitespace-nowrap text-lg py-2 text-center'>Paid</div>
                                                    </td>
                                                    <td>
                                                        <div className='whitespace-nowrap text-lg py-2 text-center'>Paid</div>
                                                    </td>
                                                    <td>
                                                        <div className='whitespace-nowrap text-lg py-2 text-center'>Paid</div>
                                                    </td>
                                                    <td>
                                                        <div className='whitespace-nowrap text-lg py-2 text-center'>€0</div>
                                                    </td>
                                                    <td>
                                                        <div className='whitespace-nowrap text-lg py-2 text-center'>€0</div>
                                                    </td>
                                                    <td>
                                                        <div className='whitespace-nowrap text-lg py-2'>Completed</div>
                                                    </td>
                                                </tr>

                                                {/* table row 2 */}

                                                <tr className=''>
                                                    <td>
                                                        <div className=' whitespace-nowrap text-lg py-2'>Sami Baddar / 1234M</div>
                                                    </td>
                                                    <td>
                                                        <div className='whitespace-nowrap text-lg py-2'>#528555</div>
                                                    </td>
                                                    <td>
                                                        <div className='whitespace-nowrap text-lg py-2'>Cazal 300X</div>
                                                    </td>
                                                    <td>
                                                        <div className='whitespace-nowrap text-lg py-2 text-center'>Paid</div>
                                                    </td>
                                                    <td>
                                                        <div className='whitespace-nowrap text-lg py-2 text-center'>Paid</div>
                                                    </td>
                                                    <td>
                                                        <div className='whitespace-nowrap text-lg py-2 text-center'>Paid</div>
                                                    </td>
                                                    <td>
                                                        <div className='whitespace-nowrap text-lg py-2 text-center'>Paid</div>
                                                    </td>
                                                    <td>
                                                        <div className='whitespace-nowrap text-lg py-2 text-center'>Paid</div>
                                                    </td>
                                                    <td>
                                                        <div className='whitespace-nowrap text-lg py-2 text-center'>€0</div>
                                                    </td>
                                                    <td>
                                                        <div className='whitespace-nowrap text-lg py-2 text-center'>€0</div>
                                                    </td>
                                                    <td>
                                                        <div className='whitespace-nowrap text-lg py-2'>Completed</div>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                {/* Page select */}
                                <div className='bg-[#F1F2F2] py-4 px-4 rounded-full mt-[400px] ml-[757px]'>
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
        </div >
    )
}

export default CompletedOrders