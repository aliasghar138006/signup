import { toast } from 'react-toastify';

const toastify = (type , text) => {
  if(type === "success"){
    toast.success(text)
  }else {
    toast.error(text)
  }
}

export default toastify