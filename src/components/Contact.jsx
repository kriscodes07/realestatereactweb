import React,{useState} from 'react'
import { toast } from 'react-toastify';

const Contact = () => {

      const [result, setResult] = useState("");
      const [resultss, setResults] = useState("Send message");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "df5198b7-1f68-4341-aef0-69e222e570ce");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Sending....");
      toast.success("Form submitted successfully")
      event.target.reset();
    } else {
      toast.error(data.message)
      console.log(data);
      
      
      
      
    }
  };
  return (
    <div className='text-center p-6 py-20  lg:px-32 w-full ' id="Contact">
   <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact with Us! <span className='underline underline-offset-4 decoration-1 under font-light '>Testimonials</span></h1>
<p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to m ake a moce? let's Build Future Together  </p>


<form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-400 pt-8'>
    <div className='flex flex-wrap '>

        <div className='w-full md:w-1/2 text-left'> Your Name
        <input className='w-full border border-gray-300 rounded py-3 px-4' type="text" placeholder='your name' required  name='name'/>
        </div>
       
        <div className='w-full md:w-1/2 text-left md:pl-4'> Your Eamil
        <input className='w-full border border-gray-300 rounded py-3 px-4' type="email" placeholder='your Email' required  name='email'/>
        </div>
        
     
    </div>
    <div className='my-6 text-left'>
      Message 
      <textarea className='w-full border border-gray-400 rounded py-3 px-4 mt-2 h-48 resize-none' name='message' placeholder="Message" required ></textarea>
      
        </div>

        <button  className='bg-blue-500 text-white py-2 px-12 rounded '>{result? resultss :"Send Message"}</button>
        
</form>

    </div>
  )
}

export default Contact