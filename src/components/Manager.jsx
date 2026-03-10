import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const ref = useRef()
  const passwordRef = useRef()
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setPasswordArray] = useState([])

  useEffect(() => {
    let passwords = localStorage.getItem("passwords")
    let passwordArray;
    if (passwords) {
      setPasswordArray(JSON.parse(passwords))
    }
  }, [])

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast('Copied to clipboard', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const showPassword = () => {
    passwordRef.current.type = "text"
    if (ref.current.src.includes("/hide.jpg")) {
      ref.current.src = "/eye.svg";
      passwordRef.current.type = "text";
    } else {
      ref.current.src = "/hide.jpg";
      passwordRef.current.type = "password";
    }
  };
  const savePassword = () => {
    if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
      setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
      localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]));
      setform({ site: "", username: "", password: "" });
      toast('Password Saved', {
        position: "top-right",
        autoClose: 2000,
        theme: "light",
      });
    } else {
      toast('Error!', {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
    }
  };
  const deletePassword = (id) => {
    const newArray = passwordArray.filter(item => item.id !== id)
    setPasswordArray(newArray)
    localStorage.setItem("passwords", JSON.stringify(newArray))
    toast('Password Deleted', {
      position: "top-right",
      autoClose: 2000,
      theme: "light",
    });
  }
  const editPassword = (id) => {
    setform(passwordArray.filter(i => i.id === id)[0])
    const newArray = passwordArray.filter(i => i.id !== id)
    setPasswordArray(newArray);
    //localStorage.setItem("passwords", JSON.stringify(newArray));
    //setform({ site: "", username: "", password: "" });
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>

      <div className="md : mycontainer p-2 md:p-0 min-h-1">

        <h1 className='text-4xl text font-black text-center'>
          <span className='text-green-500'>&lt;</span>

          <span>Pass</span>
          <span className='text-green-500'>OP/&gt;</span>
        </h1>
        <p className='text-green-900 text-lg text-center'>Your own password manager</p>

        <div className="flex flex-col p-4 text-black gap-8 items-center">
          <input value={form.site} onChange={handleChange} placeholder='Enter website URL' type="text" className='rounded-full border border-green-500 w-full px-4 py-1 ' name='site' id='site' />
          <div className="flex flex-col md:flex-row w-full justify-between gap-8">
            <input value={form.username} onChange={handleChange} placeholder='Enter Username' type="text" className='rounded-full border border-green-500 w-full px-4 py-1 ' name='username' id='username' />
            <div className="relative">

              <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' type="text" className='rounded-full border border-green-500 w-full px-4 py-1 ' name='password' id='password' />
              <span className='absolute right-[3px] top-[3px] cursor-pointer' onClick={showPassword}>
                <img ref={ref} className='p-1' width={26} src="/eye.svg" alt="eye" />
              </span>
            </div>
          </div>
          <button onClick={savePassword} className='flex font-bold gap-2 justify-center items-center bg-green-400 rounded-full px-8 py-2 w-fit hover:bg-green-300 border border-green-900'>
            <lord-icon
              src="https://cdn.lordicon.com/tsrgicte.json"
              trigger="hover">
            </lord-icon>
            Save Password</button>
        </div>
        <div className="passwords">
          <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
          {passwordArray.length == 0 && <div>No passwords to show</div>}
          {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden mb-10">
            <thead className=' bg-green-800 text-white'>
              <tr>
                <th className='py-2'>Purpose</th>
                <th className='py-2'>Username</th>
                <th className='py-2'>Password</th>
                <th className='py-2'>Actions</th>

              </tr>
            </thead>
            <tbody className='bg-green-100'>
              {passwordArray.map((item, index) => {
                return <tr key={index}>
                  <td className='py-2 border border-white text-center w-32' >
                    <div className='flex items-center justify-center gap-2'>
                      <a href={item.site} target='_blank'>
                        {item.site}
                      </a>
                      <img className='w-5 h-5 cursor-pointer' onClick={() => copyText(item.site)} src="/copy.png" alt="copy icon" />
                    </div>
                  </td>

                  <td className='py-2 border border-white text-center w-32'>
                    <div className='flex items-center justify-center gap-2'>
                      {item.username}
                      <img className='w-5 h-5 cursor-pointer' onClick={() => copyText(item.username)} src="/copy.png" alt="copy icon" />
                    </div>
                  </td>
                  <td className='py-2 border border-white text-center w-32' >
                    <div className='flex items-center justify-center gap-2'>
                      {item.password}
                      <img className='w-5 h-5 cursor-pointer' onClick={() => copyText(item.password)} src="/copy.png" alt="copy icon" />
                    </div>
                  </td>
                  <td className='py-2 border border-white text-center w-32' >
                    <div className='flex items-center justify-center gap-2'>
                      <img className='w-5 h-5 cursor-pointer' onClick={() => editPassword(item.id)} src="/edit.png" alt="copy icon" />

                      <img className='w-5 h-5 cursor-pointer' onClick={() => deletePassword(item.id)} src="/bin.png" alt="copy icon" />
                    </div>
                  </td>
                </tr>
              })}
            </tbody>
          </table>}
        </div>
      </div >
    </>
  )
}

export default Manager
