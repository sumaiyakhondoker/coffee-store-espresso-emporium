
import { FiArrowLeft } from "react-icons/fi";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  // const loadedCoffee = useLoaderData()
  // const  {_id, name, chef, supplier, taste, category, details, photo } = loadedCoffee ;
  //   const handleUpdateCoffee = (event) => {
  //     event.preventDefault();

  // const form = event.target;
  // const name = form.name.value;
  // const chef = form.chef.value;
  // const supplier = form.supplier.value;
  // const taste = form.taste.value;
  // const category = form.category.value;
  // const details = form.details.value;
  // const photo = form.photo.value;
  // const updatedCoffee = { name, chef, supplier, taste, category, details, photo };
  // // console.log('update button clicked');

  //     fetch(`https://coffee-store-server-b2dgkg63v-sumaiyas-projects-8e919dd3.vercel.app/coffee/${_id}`, {
  //       method: "PUT",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(updatedCoffee),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
          // if (data.modifiedCount > 0) {
          //   Swal.fire({
          //     title: "Success!",
          //     text: "Updated the coffee successfully",
          //     icon: "success",
          //     confirmButtonText: "Ok",
          //   });
          // }
  //       });
  //   };
// const loadedCoffee = useLoaderData()
// console.log(loadedCoffee);

  const loadedCoffee = useLoaderData()
  const  {_id, name, chef, supplier, taste, category, details, photo,price } = loadedCoffee ;

const handleUpdateCoffee = (e) =>{ 
  e.preventDefault()
  const form = e.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const updatedCoffee = { name, chef, supplier, taste, category, details, photo , price};
    console.log(updatedCoffee);

     fetch(`https://coffee-store-espresso-emporium-serv.vercel.app/coffees/${_id}`, {
      method: 'PUT',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedCoffee)
     })
     .then(res => res.json())
     .then(data => {
      console.log(data);
      if (data.modifiedCount > 0) {
            Swal.fire({
              title: "Success!",
              text: "Updated the coffee successfully",
              icon: "success",
              confirmButtonText: "Ok",
            });
          }
     })



}




  return (
<div className="bg-[url(/more/11.png)]">
    <div className="max-w-7xl mx-auto my-6">
            <Link to='/'><button className='btn text-xl text-shadow-lg text-shadow-slate-400 bg-transparent hover:bg-[#d2b48c]'><FiArrowLeft className='mr-2'></FiArrowLeft>Back to home</button></Link>
        </div>
    <div className="max-w-7xl mx-auto bg-[#f4f3f0] p-24">
      <h3 className="text-4xl font-extrabold text-center mb-8">
        Update Existing Coffee Details
      </h3>
      
      <form onSubmit={handleUpdateCoffee}>
        {/* form row 1 */}
        <div className="flex mb-8 font-raleway">
          <div className="md:w-1/2">
            <label>Coffee</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Enter coffee name"
              className="input w-full"
              
            />
          </div>
          <div className="md:w-1/2 ml-8">
            <label>Chef</label>
            <input
              type="text"
              name="chef"
              defaultValue={chef}
              placeholder="Enter chef name"
              className="input w-full "
             
            />
          </div>
        </div>
        {/* form row 2 */}
        <div className="flex mb-8 font-raleway">
          <div className="md:w-1/2">
            <label>Supplier Name</label>
            <input
              type="text"
              name="supplier"
              defaultValue={supplier}
              placeholder="Enter coffee supplier"
              className="input w-full"
             
            />
          </div>
          <div className="md:w-1/2 ml-8">
            <label>Taste</label>
            <input
              type="text"
              name="taste"
              defaultValue={taste}
              placeholder="Enter coffee taste "
              className="input w-full "
              
            />
          </div>
        </div>
        {/* form row 3 */}
        <div className="flex mb-8 font-raleway">
          <div className="md:w-1/2">
            <label>Category</label>
            <input
              type="text"
              name="category"
              defaultValue={category}
              placeholder="Enter coffee category"
              className="input w-full"
              
            />
          </div>
          <div className="md:w-1/2 ml-8">
            <label>Details</label>
            <input
              type="text"
              name="details"
              defaultValue={details}
              placeholder="Enter coffee details"
              className="input w-full "
               
            />
          </div>
        </div>
       

        {/* form row 4 */}
        <div className="flex mb-8 font-raleway">
          <div className="md:w-1/2">
            <label>Photo URL</label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Enter photo URL"
              className="input w-full"
               
            />
          </div>
          <div className="md:w-1/2 ml-8">
            <label>Price</label>
            <input
              type="number"
              name="price"
              defaultValue={price}
              placeholder="Enter price"
              className="input w-full "
              
            />
          </div>
        </div>

        <input
          type="submit"
          value="Update Coffee Details"
          className="btn w-full bg-[#d2b48c] border-2 border-[#331a15] text-[#331a15] rounded-lg text-xl"
        />
      </form>
    </div>

    </div>
  );
};

export default UpdateCoffee;
