import { useForm } from 'react-hook-form';

export default function AdminFormProduct({ onSubmit }) {
  const { register, handleSubmit } = useForm();

  const inputgroup = {marginBottom: '10px'};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={inputgroup}>
        <label>Name : </label>
        <input {...register('name')} />
      </div>
      <div style={inputgroup}>
        <label>Price : </label>
        <input {...register('price')} />
      </div>
      <button>Sauvegarder</button>
    </form>
  )
}