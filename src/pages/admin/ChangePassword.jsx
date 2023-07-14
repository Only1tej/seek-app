import freeLogoa from '../../layout/assets/freeLogoa.jpg'
import adminFooter from '../../layout/assets/adminFooter.png'
import receiptDiscount from '../../layout/assets/receiptDiscount.png'
import documentDownload from '../../layout/assets/documentDownload.png'
import taskSquare from '../../layout/assets/taskSquare.png'
import securityUser from '../../layout/assets/securityUser.png'
import { Link } from 'react-router-dom'

function ChangePassword() {
    return (
        <div className='w-full'>
            <div className="flex col-aut0 sm:min-w-fit">
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
                        <div className='flex-1 bg-[#E5E5E5] px-10 '>
                            <div className="container bg-[#FFFFFF] flex justify-center rounded-3xl ml96 mx-auto my-[97px] w-full md:w-[412px] h-[631px]">
                                <form className='form-control'>
                                    <h1 className='font-semibold text-2xl mt-8 text-center'>Change Password</h1>
                                    <hr className='scale-50 mb-[36px] bg-gradient-to-r from-[rgb(255,214,138)] to-[#AE926C] ' />
                                    <input type="password" name='oldPassword' placeholder='Old Password' className='form-input py-3 rounded-full text-center border-2 w-[316px] mx-[48px]' />
                                    <input type="password" name='newPassword' placeholder='New Password' className='form-input py-3 rounded-full text-center border-2 w-[316px] mt-[24px] mx-[48px]' />
                                    <input type="password" name='confirmPassword' placeholder='Confirm Password' className='form-input py-3 rounded-full text-center border-2 w-[316px] mt-[24px] mx-[48px]' />
                                    <button className="btn bg-slate-950 hover:bg-slate-950 rounded-full w-[316px] normal-case mx-[48px] mb-[30px] mt-[257px] items-center">Change Password</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ChangePassword