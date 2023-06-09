import { RegisterForm } from "./RegisterForm";

type ModalProps = {
  closeModal: () => void;
};
export const ModalForm: React.FC<ModalProps> = ({ closeModal }) => {
  return (
    <div className="fixed bg-zinc-900/80 backdrop-blur-sm flex items-center justify-center w-full h-full inset-0 z-50 ">
      <div className="bg-white p-4 rounded-lg shadow-md w-1/4 min-h-[300px] flex flex-col">
        <h2 className="text-xl mb-4 text-center text-black font-bold">
          Add Member Information
        </h2>
        <RegisterForm />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md mt-4"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};
