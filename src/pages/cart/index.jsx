import { useState } from 'react';
import { Modal } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartItem from '../../features/Cart/CartItem';
import OrderForm from '../../features/Cart/OrderForm';

const getCurrentPrice = (item) => item.discont_price || item.price;

export default function CartPage() {
  const items = useSelector((state) => state.cart.items);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const total = items.reduce((sum, item) => sum + getCurrentPrice(item) * item.quantity, 0);

  return (
    <section className="py-14 md:py-20">
      <div className="container max-w-380 grid gap-10">
        <div className="flex flex-col md:flex-row md:items-center">
          <h2 className="mb-4 md:mb-0 md:mr-8">Shopping cart</h2>
          <div className="hidden h-px grow bg-gray-200 md:flex" />
          <Link
            to="/all-products"
            className="flex min-h-10 items-center justify-center rounded-sm border border-gray-200 px-6 font-medium text-gray-400 transition-colors hover:border-gray-400 hover:text-gray-800"
          >
            Back to the store
          </Link>
        </div>

        {!items.length && (
          <div className="grid gap-6">
            <p>Looks like you have no items in your basket currently.</p>
            <Link to="/all-products" className="button button-primary min-h-14 px-8 text-xl">
              Continue Shopping
            </Link>
          </div>
        )}

        {!!items.length && (
          <div className="grid gap-8 lg:grid-cols-[1.425fr_1fr] lg:items-start">
            <div className="grid gap-4">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <OrderForm items={items} total={total} onSuccess={() => setIsSuccessModalOpen(true)} />
          </div>
        )}
      </div>

      <Modal
        open={isSuccessModalOpen}
        onCancel={() => setIsSuccessModalOpen(false)}
        footer={null}
        centered
        width={548}
        closable
        wrapClassName="order-success-modal"
        title={null}
      >
        <div className="grid gap-4 pr-8">
          <h2 className="mb-6">Congratulations!</h2>
          <div className="grid gap-4 text-xl md:text-2xl">
            <p>Your order has been successfully placed on the website.</p>
            <p>A manager will contact you shortly to confirm your order.</p>
          </div>
        </div>
      </Modal>
    </section>
  );
}
