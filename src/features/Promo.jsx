import { useForm } from 'react-hook-form';

export default function Promo() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log('FORM:', data);

    await new Promise((r) => setTimeout(r, 600)); // имитация запроса
    reset();
  };

  return (
    <section className="relative flex min-h-150 bg-blue-400">
      <div className="container relative flex max-w-380 items-center justify-between py-20">
        {/* ЛЕВАЯ ЧАСТЬ */}
        <div>
          <h2 className="text-4xl font-bold text-white md:text-6xl">5% off on the first order</h2>

          <div className="mt-10 flex items-end gap-3">
            <img src="/pets/1.png" className="h-20 w-20 rounded-full bg-white object-cover" />
            <img src="/pets/2.png" className="h-20 w-20 rounded-full bg-white object-cover" />
            <img src="/pets/3.png" className="h-20 w-20 rounded-full bg-white object-cover" />
            <img src="/pets/4.png" className="h-20 w-20 rounded-full bg-white object-cover" />
            <img src="/pets/5.png" className="h-20 w-20 rounded-full bg-white object-cover" />
            <img src="/pets/6.png" className="h-20 w-20 rounded-full bg-white object-cover" />
          </div>
        </div>

        {/* ФОРМА */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-80 rounded-xl bg-white p-6 shadow-xl flex flex-col gap-4"
        >
          {/* Name */}
          <label className="flex flex-col gap-1 text-sm">
            <span className="font-medium">Name</span>
            <input
              {...register('name', { required: 'Required' })}
              className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
            />
            {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
          </label>

          {/* Phone */}
          <label className="flex flex-col gap-1 text-sm">
            <span className="font-medium">Phone number</span>
            <input
              {...register('phone', {
                required: 'Required',
                minLength: { value: 5, message: 'Too short' },
              })}
              className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
            />
            {errors.phone && <span className="text-xs text-red-500">{errors.phone.message}</span>}
          </label>

          {/* Email */}
          <label className="flex flex-col gap-1 text-sm">
            <span className="font-medium">Email</span>
            <input
              {...register('email', {
                required: 'Required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Invalid email',
                },
              })}
              className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
            />
            {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 rounded-full bg-black py-3 text-center text-white font-semibold disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Get a discount'}
          </button>
        </form>
      </div>
    </section>
  );
}
