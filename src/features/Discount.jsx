import { useForm } from 'react-hook-form';
import { submitSaleRequest } from '../services/api';

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

export default function Discount() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    await submitSaleRequest(data);
    reset();
  };

  return (
    <div className="bg-white py-14 md:py-20">
      <div className="container max-w-380">
        <div className="rounded-xl p-8 pb-0 bg-linear-to-tr from-blue-600 to-blue-800">
          <h2 className="text-center text-white mb-8">5% off on the first order</h2>

          <div className="grid gap-8 md:grid-cols-[1.425fr_1fr] md:items-end">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="order-1 grid gap-4 md:mb-8 md:order-2"
            >
              {formFields.map((field) => (
                <label key={field.name} className="grid gap-1">
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    aria-invalid={errors[field.name] ? 'true' : 'false'}
                    {...register(field.name, field.rules)}
                    className="min-h-14 w-full max-w-none rounded-sm border border-white/70 bg-transparent px-8 text-xl text-white placeholder:text-white outline-none focus:border-white"
                  />
                  {errors[field.name] && (
                    <span className="text-sm font-medium text-red-100">
                      {errors[field.name].message}
                    </span>
                  )}
                </label>
              ))}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 min-h-14 w-full justify-center rounded-sm bg-white px-8 text-xl font-semibold text-gray-900 transition-colors hover:bg-gray-100 disabled:bg-gray-200"
              >
                {isSubmitting ? 'Sending...' : 'Get a discount'}
              </button>
            </form>

            <img
              src="/images/discount.png"
              alt="Pets for the first order discount"
              className="order-2 w-full max-w-[780px] object-cover object-bottom-left md:order-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
