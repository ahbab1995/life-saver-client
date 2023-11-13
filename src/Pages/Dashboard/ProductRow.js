import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { toast } from 'react-toastify';

const ProductRow = ({ product, index, refetch ,setDeletingProduct}) => {
    const {id, name, price, img } = product;

    const Delete = (_id) => {
        const url = `http://localhost:5000/addproduct/${_id}`
        console.log(url)
        fetch(url, {
          method: 'DELETE',
          headers: {
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
      })
          .then(res =>{
            if (res.status === 403) {
              toast.error("Failed to Make an admin");
            }
            return res.json();
          })
          .then(data => {
              console.log(data);
              if (data.deletedCount) {
                  toast.success(`Product is deleted.`)
                  
                  refetch();
              }
          })
      }
    return (
        <tr>
        <th>{index + 1}</th>
        <td><div class="avatar">
            <div class="w-8 rounded">
                    { !img? <>...</> :
                         <img src={img} alt={name} />
               }
            </div>
        </div></td>
            <td>{name}</td>
            <td>$ {price}</td>
       
        <td>
            <label  onClick={() => Delete(id)} for="delete-confirm-modal" class="btn btn-md btn-error"><FontAwesomeIcon className="" icon={faTrashCan} /></label>
        </td>
    </tr>
    );
};

export default ProductRow;