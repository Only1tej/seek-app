import message from '../../layout/assets/message.png'
// import { FiSearch } from "react-icons/fi"
// import ReactPaginate from 'react-paginate'

function InviteUsers({ visible, onClose }) {
  if (!visible) return null

  return (
    <div className='w-full' >
      <div className="flex col-aut0 sm:min-w-fit">
        <div className="w-full flex">
          <div className='flex-1 flex flex-col'>
            <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
              <div className='flex-1 '>
                <div className=" bg-[#FFFFFF]  flex flex-col rounded-xl mx-auto  my-[97px] md: w-[366px] h-[277px]">
                  <div>
                    <h1 className='font-semibold text-sm mt-[17px] mb-[16px] text-center'>Invite User</h1>
                    <hr className='grid grid-cols-1 divide-y bg-gradient-to-r from-[rgb(255,214,138)] to-[#AE926C] ' />
                  </div>
                  <div>
                    <div className='relative ml-[px]'>
                      <div className='absolute flex items-center pt-[60px] pl-[40px] inset-y-0 left-0 opacity-60'>
                        <img src={message} alt="message" className='w-[18px] h-[18px] pb-1 ' />
                      </div>
                      <input type="email" placeholder='Email Address' className='form-input py-3 border-2 rounded-full w-[316px] mx-[25px] mt-[56px] pr-2 pl-[40px] ' />
                    </div>
                  </div>
                  <div className='mt-[56px] mb-[23px] '>
                    <button onClick={onClose} className="btn bg-[#F1F2F2] hover:bg-[#f1f2f2] text-black border-none rounded-full w-[150px] normal-case ml-[23px] mr-[20px] items-center">Cancel</button>
                    <button className="btn bg-slate-950 hover:bg-slate-950 rounded-full w-[150px] normal-case mr-[23px] items-center">Invite</button>
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