// import message from '../../layout/assets/message.png'
// import { FiSearch } from "react-icons/fi"
// import ReactPaginate from 'react-paginate'

function InviteUsers({ visible, onRemoveClose }) {
    if (!visible) return null

    return (
        <div className='w-full' >
            <div className="flex col-aut0 sm:min-w-fit">
                <div className="w-full flex">
                    <div className='flex-1 flex flex-col'>
                        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
                            <div className='flex-1 ml-[631px] mr-[443px]  '>
                                <div className=" bg-[#FFFFFF] flex flex-col rounded-xl mx-auto  my-[97px] md: w-[366px] h-[277px] ">
                                    <div>
                                        {/* lg: ml-[470px] mr-[443px] */}
                                        <h1 className='font-semibold text-sm mt-[17px] mb-[16px] text-center'>Remove User</h1>
                                        <hr className='grid grid-cols-1 divide-y bg-gradient-to-r from-[rgb(255,214,138)] to-[#AE926C] ' />
                                    </div>
                                    <div>
                                        <div className='flex justify-center items-center relative ml-[px]'>
                                            <div>
                                                <div className="avatar placeholder">
                                                    <div className="bg-slate-200 text-[#B4B4B4] rounded-full w-12 h-12 mt-6 mx-[151px]">
                                                        <span className="text-sm">RK</span>
                                                    </div>
                                                </div>
                                                <h1 className='text-xl font-medium text-center'>Roltz</h1>
                                                <h1 className='text-sm text-center font-normal mt-[2px] '>email:roltz@abc.com</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-[21px] mb-[23px] '>
                                        <button onClick={onRemoveClose} className="btn bg-[#F1F2F2] hover:bg-[#f1f2f2] text-black border-none rounded-full w-[150px] normal-case ml-[23px] mr-[20px] items-center">Cancel</button>
                                        <button className="btn bg-slate-950 hover:bg-slate-950 rounded-full w-[150px] normal-case mr-[23px] items-center">Confirm</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default InviteUsers