import React from "react"

const Modal = ({ setModalOn, setChoice }) => {

    const handleOKClick = () => {
        setChoice(true)
        setModalOn(false)
    }
    const handleCancelClick = () => {
        setChoice(false)
        setModalOn(false)
    }

    return (
        <div className="bg-rose-200 opacity-100 fixed inset-0 z-50">
            <div className="flex h-screen justify-center items-center">
                <div className="flex-col justify-center bg-white py-12 px-24 border-4 border-rose-300 rounded-xl">
                    <div className="flex text-2xl font-semibold text-rose-600 mb-10">Are you sure ?</div>
                    <div className="flex px-4">
                        <button onClick={handleOKClick} className="rounded px-4 py-2 text-white bg-rose-400">Yes</button>
                        <button onClick={handleCancelClick} className="rounded px-4 py-2 ml-4 text-white bg-rose-400">No</button>
                    </div>
                </div>
            </div>
        </div>       
    )
}

export default Modal;