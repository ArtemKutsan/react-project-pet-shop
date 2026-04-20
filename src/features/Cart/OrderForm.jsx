import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../store/cartSlice';
import { submitOrder } from '../../services/api';

const formFields = [
  {
    name: 'name',
    type: 'text',
    placeholder: 'Name',
    rules: { required: 'Required' },
  },
  {
    name: 'phone',
    type: 'text',
    placeholder: 'Phone number',
    rules: {
      required: 'Required',
      minLength: { value: 5, message: 'Too short' },
    },
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    rules: {
      required: 'Required',
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: 'Invalid email',
      },
    },
  },
];

export default function OrderForm({ items, total }) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    await submitOrder({
      ...data,
      products: items.map((item) => ({
        id: item.id,
        quantity: item.quantity,
      })),
    });

    dispatch(clearCart());
    reset();
  };

  return (
    <div className="rounded-xl bg-gray-100 p-8">
      <div className="grid">
        <h3 className="mb-6">Order details</h3>
        <p className="text-4xl font-medium text-gray-500">{items.length} items</p>
      </div>

      <div className="mb-8 flex items-end justify-between gap-4">
        <p className="text-4xl font-medium text-gray-500">Total</p>
        <p className="text-6xl font-semibold">${total}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        {formFields.map((field) => (
          <label key={field.name} className="grid gap-1">
            <input
              type={field.type}
              placeholder={field.placeholder}
              aria-invalid={errors[field.name] ? 'true' : 'false'}
              {...register(field.name, field.rules)}
              className="min-h-14 max-w-none rounded-sm border border-gray-200 bg-white px-6 text-lg placeholder:text-gray-400"
            />
            {errors[field.name] && (
              <span className="text-sm font-medium text-red-500">{errors[field.name].message}</span>
            )}
          </label>
        ))}

        <button
          type="submit"
          disabled={isSubmitting || !items.length}
          className="mt-2 min-h-14 w-full justify-center rounded-sm bg-blue-600 px-8 text-xl font-semibold text-white transition-colors hover:bg-blue-700 disabled:bg-gray-300"
        >
          {isSubmitting ? 'Ordering...' : 'Order'}
        </button>
      </form>
    </div>
  );
}
