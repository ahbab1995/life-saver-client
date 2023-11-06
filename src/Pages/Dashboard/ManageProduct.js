import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ProductRow from './ProductRow';
import DeleteConfirmModal from './DeleteConfirmModal';

const ManageProduct = () => {

    const [deletingProduct, setDeletingProduct] = useState(null);
    const { data: manageProducts, isLoading, refetch } = useQuery('product', () => fetch('http://localhost:5000/addproduct', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
        <h2 className="text-2xl">Manage Product</h2>
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      
                       manageProducts?.map((product, index) => <ProductRow
                            key={index}
                            product={product}
                            index={index}
                            refetch={refetch}
                            
                        ></ProductRow>)
                    }
                </tbody>
            </table>
        </div>
        {deletingProduct && <DeleteConfirmModal
            deletingProduct={deletingProduct}
            refetch={refetch}
            setDeletingProduct={setDeletingProduct}
        ></DeleteConfirmModal>}
    </div>
    );
};

export default ManageProduct;