import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useAppContext } from '../components/StateWarapper';
import { useRouter } from 'next/router';
const Pay = () => {
  const [show, setShow] = useState(false);
  const content = useAppContext();
  const router = useRouter();
  const pagoPedido = (e) => {
    e.preventDefault();
    setShow(true);
    content.clearCart();
    setTimeout(() => {
      setShow(false);
      content.closePay();
      router.push('/perfil');
    }, 3000);
  };
  return (
    <div className="absolute flex justify-center items-center  top-0 h-screen z-10 w-full bg-black bg-opacity-50">
      <div className={show ? '' : 'min-w-screen  bg-gray-50 py-5'}>
        <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
          <div className="w-full">
            <div className="-mx-3 md:flex items-start">
              {show ? (
                <Transition appear show={show} as={Fragment}>
                  <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={() => setShow(false)}
                  >
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                      <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <Dialog.Title
                              as="h3"
                              className="text-lg font-medium leading-6 text-gray-900"
                            >
                              Pago realizado
                            </Dialog.Title>
                            <div className="mt-2">
                              <p className="text-sm text-gray-500">
                                Gracias por tu compra.
                              </p>
                            </div>

                            {/* <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={() => setShow(false)}
                              >
                                Got it, thanks!
                              </button>
                            </div> */}
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>
              ) : (
                <form className="px-3 md:w-full" onSubmit={pagoPedido}>
                  <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                    <div className="w-full p-3 border-b border-gray-200">
                      <div className="mb-5">
                        <label
                          htmlFor="type1"
                          className="flex items-center cursor-pointer"
                        >
                          <input
                            type="radio"
                            className="form-radio h-5 w-5 text-indigo-500"
                            name="type"
                            id="type1"
                            defaultChecked
                          />
                          <img
                            src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                            className="h-6 ml-3"
                          />
                        </label>
                      </div>
                      <div>
                        <div className="mb-3">
                          <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                            Name on card
                          </label>
                          <div>
                            <input
                              className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                              placeholder="John Smith"
                              type="text"
                              required
                            />
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                            Card number
                          </label>
                          <div>
                            <input
                              className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                              placeholder="0000 0000 0000 0000"
                              type="text"
                              pattern="[0-9]+"
                              minLength={16}
                              maxLength={16}
                              required
                            />
                          </div>
                        </div>
                        <div className="mb-3 -mx-2 flex items-end">
                          <div className="px-2 w-1/2">
                            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                              Expiration date
                            </label>
                            <div>
                              <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                <option value="01">01 - January</option>
                                <option value="02">02 - February</option>
                                <option value="03">03 - March</option>
                                <option value="04">04 - April</option>
                                <option value="05">05 - May</option>
                                <option value="06">06 - June</option>
                                <option value="07">07 - July</option>
                                <option value="08">08 - August</option>
                                <option value="09">09 - September</option>
                                <option value="10">10 - October</option>
                                <option value="11">11 - November</option>
                                <option value="12">12 - December</option>
                              </select>
                            </div>
                          </div>
                          <div className="px-2 w-1/4">
                            <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                              <option value={2020}>2020</option>
                              <option value={2021}>2021</option>
                              <option value={2022}>2022</option>
                              <option value={2023}>2023</option>
                              <option value={2024}>2024</option>
                              <option value={2025}>2025</option>
                              <option value={2026}>2026</option>
                              <option value={2027}>2027</option>
                              <option value={2028}>2028</option>
                              <option value={2029}>2029</option>
                            </select>
                          </div>
                          <div className="px-2 w-1/4">
                            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                              Security code
                            </label>
                            <div>
                              <input
                                required
                                className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                                placeholder="000"
                                type="text"
                                minLength={3}
                                maxLength={3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full p-3">
                      <label
                        htmlFor="type2"
                        className="flex items-center cursor-pointer"
                      >
                        <input
                          type="radio"
                          className="form-radio h-5 w-5 text-indigo-500"
                          name="type"
                          id="type2"
                        />
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                          width={80}
                          className="ml-3"
                        />
                      </label>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold"
                    >
                      <i className="mdi mdi-lock-outline mr-1" /> Pagar
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
