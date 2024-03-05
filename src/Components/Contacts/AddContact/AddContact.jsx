import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ContactServices } from '../../Services/ContactServices'

const AddContact = () => {
  let navigate = useNavigate()

  let [state, setState]=useState({
    loading:false,
    contact:{
      name:"",
      photo:"",
      contact:'',
      email:"",
      title:"",
      company:''
    },
    groups:[],
    errorMessage:''
  })

  useEffect(()=>{
    let prom = new Promise((res,rej)=>{
      setState({...state,loading:true})
      let groupResponse = ContactServices.getGroups()
      res(groupResponse)
    })
    prom.then((resp1)=>{
      setState({...state,loading:false,groups:resp1.data})
      console.log(resp1.data);
    }).catch((error)=>{
      setState({...state,loading:false,errorMessage:error})
      alert("Data is not found!!")
    })
  },[])

  let updateInput=(event)=>{
    setState({
      ...state,contact:{
        ...state.contact,
        [event.target.name]:event.target.value
      }
    })
  }

  let submitFrom=(event)=>{
    event.preventDefault();
    let prom = new Promise((res,rej)=>{
      let postContact=ContactServices.createContact(state.contact)
      res(postContact)
    })
    prom.then((resp1)=>{
        if (resp1) {
          setState({...state,contact:resp1.data})
          navigate('/contacts/list',{replace:true})
        }
        else{
          navigate('contacts/add',{replace:false})
        }
    })
  }

  let{loading,contact,groups,errorMessage}=state
  return (
    <div>
      {/* <pre>{JSON.stringify(groups)}</pre> */}
      <section className="create-contact p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className='h4 text-success fw-bold'>Create Contact</p>
              <p className='fst-italic'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, nostrum rem. Laudantium, quos! Provident praesentium nesciunt veritatis porro facere tempore! Delectus porro, corporis ea obcaecati laudantium incidunt at alias reprehenderit!</p>
            </div>
          </div>
          {/* row-2 */}
          <div className="row">
            <div className="col-md-4">
              <form action="" onSubmit={submitFrom}>
                <div className="mb-2">
                  <input type="text" className='form-control' name='name' required={true} value={contact.name} onChange={updateInput} placeholder='Name' />
                </div>
                <div className="mb-2">
                  <input type="text" className='form-control' name='photo'required={true} value={contact.photo} onChange={updateInput} placeholder='Photo Url' />
                </div>
                <div className="mb-2">
                  <input type="number" className='form-control' name='contact' required={true} value={contact.contact} onChange={updateInput} placeholder='Mobile Number' />
                </div>
                <div className="mb-2">
                  <input type="email" className='form-control' name='email' required={true} value={contact.email} onChange={updateInput} placeholder='Email' />
                </div>
                <div className="mb-2">
                  <input type="text" className='form-control' name='title' required={true} value={contact.title} onChange={updateInput} placeholder='Title' />
                </div>
                <div className="mb-2">
                  <input type="text" className='form-control' name='company' required={true} value={contact.company} onChange={updateInput} placeholder='Company' />
                </div>
                <div className="mb-2">
                  <select name="" id="" className='form-control'>
                    <option value="">Select A Group</option>
                    {
                     groups.length>0 &&
                     groups.map((group)=>{
                      return(
                        <option key={group.id} value={group.name}>{group.name}</option>
                      )
                     })
                    }
                  </select>
                </div>
                <div className="mb-2">
                  <input type="submit" className='btn btn-success' value={"Create"} />
                  <Link to={'/'} className='btn btn-dark ms-2'>Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AddContact
